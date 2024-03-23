import React, { useState, useMemo, useRef, useEffect } from "react";
import "./Table.scss";
import IconButton from "./IconButton";
import Flex from "./Flex";
import Input from "./Input";
import Checkbox from "./Checkbox";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import Paragraph from "./Paragraph";

const Table = ({
  columns,
  data,
  pageSize,
  onRowClick,
  multiSelect,
  onMultiSelect,
  maxPagination = 3,
  fluid,
  search,
  fullBorder,
  sorting,
  cellAlign = "start",
  large,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
    sorted: false,
  });

  const tableRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      const activeElement = document.activeElement;
      const { key } = event;

      if (!tableRef.current || !activeElement) {
        return;
      }

      if (key === "Enter" || key === " ") {
        const clickableElement = activeElement.querySelector(
          'button, input[type="checkbox"]'
        );
        if (clickableElement) {
          clickableElement.click();
          event.preventDefault();
          return;
        }
      }

      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        return;
      }

      const focusableElements = Array.from(
        tableRef.current.querySelectorAll("th, td")
      ).filter((el) => el.tabIndex >= 0);
      const currentIndex = focusableElements.indexOf(activeElement);

      let nextIndex;
      switch (key) {
        case "ArrowUp":
          nextIndex = currentIndex - columns.length;
          break;
        case "ArrowDown":
          nextIndex = currentIndex + columns.length;
          break;
        case "ArrowLeft":
          nextIndex = currentIndex - 1;
          break;
        case "ArrowRight":
          nextIndex = currentIndex + 1;
          break;
        default:
          return;
      }

      if (nextIndex >= 0 && nextIndex < focusableElements.length) {
        focusableElements[nextIndex].focus();
        event.preventDefault();
      }
    };

    const tableElement = tableRef.current;
    tableElement.addEventListener("keydown", handleKeyDown);
    return () => tableElement.removeEventListener("keydown", handleKeyDown);
  }, [columns.length]);

  const handleSelectAll = (checked) => {
    const allRowIndices = sortedData.map(
      (_, index) => (currentPage - 1) * pageSize + index
    );
    const newSelectedRows = checked ? new Set(allRowIndices) : new Set();
    setSelectedRows(newSelectedRows);
    if (onMultiSelect) {
      onMultiSelect(checked ? sortedData : []);
    }
  };

  const handleSelectRow = (checked, globalRowIndex) => {
    const newSelectedRows = new Set(selectedRows);
    if (checked) {
      newSelectedRows.add(globalRowIndex);
    } else {
      newSelectedRows.delete(globalRowIndex);
    }
    setSelectedRows(newSelectedRows);
    if (onMultiSelect) {
      const selectedData = Array.from(newSelectedRows).map(
        (index) => sortedData[index]
      );
      onMultiSelect(selectedData);
    }
  };

  const filteredData = data.filter((row) =>
    columns.some((column) => {
      const cellValue = row[column.accessor];
      return (
        typeof cellValue === "string" &&
        cellValue.toLowerCase().includes(filter.toLowerCase())
      );
    })
  );

  const isSortable = (accessor) => {
    return data.some(
      (row) =>
        typeof row[accessor] === "string" || typeof row[accessor] === "number"
    );
  };

  const handleSort = (accessor) => {
    if (!sorting || !isSortable(accessor)) return;

    let direction = "ascending";
    let sorted = true;
    if (sortConfig && sortConfig.key === accessor) {
      if (sortConfig.direction === "ascending") {
        direction = "descending";
      } else {
        sorted = false; // Reset sorting if already sorted in descending order
      }
    }
    setSortConfig({ key: accessor, direction, sorted });
  };

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const totalNumberOfPages = Math.ceil(sortedData.length / pageSize);
  const paginationItems = Array.from(
    { length: totalNumberOfPages },
    (_, i) => i + 1
  );

  const renderPagination = () => {
    if (totalNumberOfPages === 1) {
      return null; // Hide pagination if there's only one page
    }

    let visiblePages = paginationItems;

    if (totalNumberOfPages > maxPagination) {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxPagination / 2)
      );
      const endPage = Math.min(
        totalNumberOfPages,
        startPage + maxPagination - 1
      );
      visiblePages = paginationItems.slice(startPage - 1, endPage);

      if (startPage > 1) {
        visiblePages.unshift(1);
      }

      if (endPage < totalNumberOfPages) {
        visiblePages.push(totalNumberOfPages);
      }
    }

    return visiblePages.map((page) => {
      if (page === "...") {
        return (
          <span key={page} className="pagination-ellipsis">
            {page}
          </span>
        );
      } else {
        return (
          <IconButton
            key={page}
            size="small"
            variant="outline"
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
            aria-pressed={currentPage === page ? "true" : undefined}
          >
            {page}
          </IconButton>
        );
      }
    });
  };

  return (
    <div className={`TableComponent ${fluid ? "fluid" : ""}`}>
      {search && (
        <Flex
          fluid
          customClass={`TableSearch ${large ? "large" : ""}`}
          style={{
            marginBottom: "var(--size-200)",
            boxSizing: "border-box",
          }}
        >
          <Input
            type="search"
            value={filter}
            label="Filter"
            onChange={handleFilterChange}
            placeholder="Filter..."
            validation={false}
            fluid
          />
        </Flex>
      )}
      <table
        ref={tableRef}
        className={`TableComponent ${
          cellAlign === "start"
            ? "align-start"
            : cellAlign === "end"
            ? "align-end"
            : "align-center"
        } ${fullBorder ? "fullBorder" : ""} ${large ? "large" : ""} ${
          fluid ? "fluid" : ""
        } ${multiSelect ? "hoverable" : ""}`}
        tabIndex="0"
      >
        <thead>
          <tr>
            {multiSelect && (
              <th tabIndex="0" style={{ width: "26px" }}>
                <Checkbox
                  checked={
                    selectedRows.size === sortedData.length &&
                    sortedData.length > 0
                  }
                  onChange={(checked) => handleSelectAll(checked)}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => handleSort(column.accessor)}
                className={`${
                  sorting && isSortable(column.accessor) ? "sortable" : ""
                } ${sorting ? "hoverable" : ""}`}
                tabIndex="0"
                style={{ width: column.maxWidth }}
              >
                {column.Header}
                {sorting && isSortable(column.accessor) && (
                  <span className="sort-indicator">
                    {sortConfig.key === column.accessor && sortConfig.sorted ? (
                      sortConfig.direction === "ascending" ? (
                        <ChevronUpIcon
                          style={{ marginLeft: "var(--size-100)" }}
                        />
                      ) : (
                        <ChevronDownIcon
                          style={{ marginLeft: "var(--size-100)" }}
                        />
                      )
                    ) : (
                      <ChevronUpIcon
                        style={{
                          marginLeft: "var(--size-100)",
                          visibility: "hidden",
                        }}
                      />
                    )}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => {
            const globalRowIndex = (currentPage - 1) * pageSize + rowIndex;
            return (
              <tr
                key={globalRowIndex}
                tabIndex={0}
                onClick={() => {
                  if (multiSelect) {
                    const checked = !selectedRows.has(globalRowIndex);
                    handleSelectRow(checked, globalRowIndex);
                  } else {
                    onRowClick && onRowClick(row);
                  }
                }}
              >
                {multiSelect && (
                  <td tabIndex="0" style={{ width: "26px" }}>
                    <Checkbox
                      checked={selectedRows.has(globalRowIndex)}
                      onCheckedChange={(event) =>
                        handleSelectRow(event.target.checked, globalRowIndex)
                      }
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    tabIndex="0"
                    key={column.accessor}
                    style={{ width: column.maxWidth }}
                  >
                    {column.Cell
                      ? column.Cell(row[column.accessor], row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Flex justify="between" align="center" customClass="TableFooter">
        {multiSelect && (
          <Flex customClass="selected-rows-count">
            <Paragraph>{selectedRows.size} selected row(s).</Paragraph>
          </Flex>
        )}
        <Flex customClass="pagination" gap={100}>
          {currentPage > 1 && (
            <IconButton
              size="small"
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          {renderPagination()}
          {currentPage < totalNumberOfPages && (
            <IconButton
              size="small"
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default Table;

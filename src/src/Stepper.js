import React, { forwardRef, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./Stepper.scss";
import { CheckIcon } from "sebikostudio-icons";

const Stepper = forwardRef(
  (
    {
      steps,
      currentStep,
      orientation = "horizontal",
      icons = [],
      dynamic = false,
      onStepClick = () => {},
    },
    ref
  ) => {
    const stepperRef = useRef(null);

    const handleStepClick = useCallback(
      (step) => {
        if (dynamic && step < currentStep) {
          onStepClick(step);
        }
      },
      [currentStep, dynamic, onStepClick]
    );

    useEffect(() => {
      if (dynamic && stepperRef.current) {
        const handleKeyDown = (event) => {
          if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
          ) {
            event.preventDefault();
            const focusableSteps = stepperRef.current.querySelectorAll(
              ".step[tabindex='0']"
            );
            const currentIndex = Array.from(focusableSteps).findIndex(
              (step) => step === document.activeElement
            );

            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
              const nextIndex =
                currentIndex + 1 < focusableSteps.length ? currentIndex + 1 : 0;
              focusableSteps[nextIndex].focus();
            } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
              const prevIndex =
                currentIndex - 1 >= 0
                  ? currentIndex - 1
                  : focusableSteps.length - 1;
              focusableSteps[prevIndex].focus();
            }
          } else if (event.key === "Enter") {
            const focusableSteps = stepperRef.current.querySelectorAll(
              ".step[tabindex='0']"
            );
            const currentIndex = Array.from(focusableSteps).findIndex(
              (step) => step === document.activeElement
            );
            if (currentIndex !== -1) {
              handleStepClick(currentIndex + 1);
            }
          }
        };

        const currentStepperRef = stepperRef.current;
        currentStepperRef.addEventListener("keydown", handleKeyDown);

        return () => {
          if (currentStepperRef) {
            currentStepperRef.removeEventListener("keydown", handleKeyDown);
          }
        };
      }
    }, [dynamic, handleStepClick]);

    const stepElements = [];

    for (let i = 1; i <= steps; i++) {
      const isCurrent = i === currentStep;
      const isCompleted = i < currentStep;
      const IconComponent = icons[i - 1] && !isCompleted ? icons[i - 1] : null;

      stepElements.push(
        <React.Fragment key={i}>
          <div className={`StepWrapper ${dynamic ? "dynamic" : ""}`}>
            <span
              className={`step ${isCurrent ? "current" : ""} ${
                isCompleted ? "completed" : ""
              }`}
              onClick={() => handleStepClick(i)}
              role={dynamic ? "button" : "presentation"}
              tabIndex={dynamic ? 0 : -1}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isCompleted && <CheckIcon size={16} weight="bold" />}
              {!isCompleted &&
                (IconComponent ? <IconComponent size={16} weight="bold" /> : i)}
            </span>
          </div>
          {i < steps && (
            <div className={`connector ${isCompleted ? "completed" : ""}`} />
          )}
        </React.Fragment>
      );
    }

    return (
      <div
        ref={(node) => {
          stepperRef.current = node;
          if (ref) {
            if (typeof ref === "function") {
              ref(node);
            } else {
              ref.current = node;
            }
          }
        }}
        className={`stepper ${orientation}`}
        tabIndex={0}
      >
        {stepElements}
      </div>
    );
  }
);

Stepper.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  icons: PropTypes.arrayOf(PropTypes.elementType),
  dynamic: PropTypes.bool,
  onStepClick: PropTypes.func,
};

export default Stepper;

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import * as Progress from "@radix-ui/react-progress";
import Paragraph from "./Paragraph";
import "./radix-styles/Toast.scss";
import "./radix-styles/Progressbar.scss";
import Flex from "./Flex";
import Button from "./Button";

const Toast = ({
  showToast,
  setShowToast,
  headline,
  text,
  time,
  showAgain,
  onDismissForever,
  simple,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (showToast) {
      setProgress(0);
      let elapsedTime = 0;
      const interval = 10; // Interval for progress update

      const timer = setInterval(() => {
        elapsedTime += interval;
        const newProgress = Math.min((elapsedTime / time) * 100, 100);
        setProgress(newProgress);

        if (elapsedTime >= time) {
          clearInterval(timer);
          setTimeout(() => setShowToast(false), 100); // Hide toast after the specified time
        }
      }, interval);

      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [showToast, time, setShowToast]);

  // Hide the toast when progress reaches 100%
  React.useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 100); // A short delay to smoothly transition out

      return () => clearTimeout(timeout);
    }
  }, [progress, setShowToast]);

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        className={`ToastRoot ${simple ? "simple" : ""}`}
        open={showToast}
      >
        <Flex direction={"column"} gap={100}>
          {!simple && (
            <ToastPrimitive.Title className="ToastTitle">
              <Paragraph size="large" weight="bold">
                {headline}
              </Paragraph>
            </ToastPrimitive.Title>
          )}
          <ToastPrimitive.Description asChild>
            <Paragraph
              size="large"
              weight="regular"
              customClass="ToastDescription"
            >
              {text}
            </Paragraph>
          </ToastPrimitive.Description>
        </Flex>
        {showAgain && (
          <Flex direction={"column"} gap={100} style={{ marginLeft: "auto" }}>
            <Button size="small" variant="solid" onClick={onDismissForever}>
              Don't Show Again
            </Button>
          </Flex>
        )}
        <Progress.Root className="ProgressRoot" value={progress}>
          <Progress.Indicator
            className="ProgressIndicator"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport
        className={`ToastViewport ${simple ? "simple" : ""}`}
      />
    </ToastPrimitive.Provider>
  );
};

export default Toast;

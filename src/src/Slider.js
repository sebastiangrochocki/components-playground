import React, { forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import "./radix-styles/Slider.scss";

const Slider = forwardRef(
  ({ defaultValue, max, fluid, step, ...props }, ref) => {
    return (
      <SliderPrimitive.Root
        className={`SliderRoot ${fluid ? "fluid" : ""}`}
        defaultValue={defaultValue}
        max={max}
        step={step}
        {...props}
        ref={ref}
      >
        <SliderPrimitive.Track className="SliderTrack">
          <SliderPrimitive.Range className="SliderRange" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="SliderThumb" aria-label="Volume" />
      </SliderPrimitive.Root>
    );
  }
);

export default Slider;

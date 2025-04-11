import React, { FC } from "react";

import classes from "./button.module.scss";

export type TButtonType = "white" | "black" | "ghost" | "link";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  typeButton: TButtonType;
  size: "0" | "12-16" | "16-24" | "12-24";
  isDisabled?: boolean;
  isLoading?: boolean;
  needSvgHover?: boolean;
}

const Button: FC<IButton> = (props) => {
  const {
    typeButton = "yellow",
    children,
    className,
    size,
    isDisabled,
    onClick,
    isLoading,
    needSvgHover,
    ...rest
  } = props;

  const typesRenderCondition = () => {
    if (typeButton === "black") {
      return classes.black;
    } else if (typeButton === "white") {
      return classes.white;
    } else if (typeButton === "ghost") {
      return classes.ghost;
    } else if (typeButton === "link") {
      return classes.link;
    }
  };

  const sizesRenderCondition = () => {
    if (size === "0") {
      return classes.size_0;
    } else if (size === "12-16") {
      return classes.size_12_16;
    } else if (size === "16-24") {
      return classes.size_16_24;
    } else if (size === "12-24") {
      return classes.size_12_24;
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${className} ${classes.button} ${sizesRenderCondition()} ${typesRenderCondition()} ${needSvgHover ? classes.svg : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };

import React, { FC } from "react";

import classes from "./button.module.scss";

export type TButtonType = "green" | "blue" | "gray" | "ghost" | "link";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  typeButton: TButtonType;
  size: "0" | "";
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
    if (typeButton === "green") {
      return classes.green;
    } else if (typeButton === "gray") {
      return classes.gray;
    } else if (typeButton === "blue") {
      return classes.blue;
    } else if (typeButton === "ghost") {
      return classes.ghost;
    } else if (typeButton === "link") {
      return classes.link;
    }
  };

  const sizesRenderCondition = () => {
    if (size === "0") {
      return classes.size_0;
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

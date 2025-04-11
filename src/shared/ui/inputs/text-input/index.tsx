import React from "react";

import classes from "./text-input.module.scss";
import { Input } from "~/src/shared/ui/input";

interface Props {
  className?: string;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIconClick?: () => void;
  placholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  classNameRightIcon?: string;
}

export default function TextInput(props: Props) {
  const {
    className = "",
    rightIcon,
    rightIconClick,
    placholder,
    disabled,
    onChange,
    value,
    name,
    classNameRightIcon,
  } = props;

  return (
    <Input
      className={`${className} ${classes.input}`}
      rightIconClick={rightIconClick}
      RightIcon={rightIcon}
      placeholder={placholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
      type={"text"}
      name={name}
      classNameRightIcon={classNameRightIcon}
    />
  );
}

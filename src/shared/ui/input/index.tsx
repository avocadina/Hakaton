import React, { ChangeEvent, FC } from "react";

import classes from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIconClick?: () => void;
  classNameRightIcon?: string;
  label?: string;
  classNameLabel?: string;
}

const Input: FC<Props> = (props) => {
  const {
    className = "",
    placeholder,
    onChange,
    value,
    type,
    name,
    disabled,
    RightIcon,
    rightIconClick,
    classNameRightIcon,
    label,
    classNameLabel,
    ...rest
  } = props;

  const changeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={` ${classes.container} column`}>
      <label htmlFor={name} className="flex-column gap-3">
        {label && (
          <span
            className={`text-14 text-black ${classNameLabel} ${classes.label}`}
          >
            {label}
          </span>
        )}
        <input
          {...rest}
          name={name ?? ""}
          type={type ?? ""}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={changeEvent}
          className={`${classes.input} ${className}`}
        />
      </label>
      {RightIcon && (
        <div
          className={`${classes.right_icon} ${classNameRightIcon} pointer`}
          onClick={rightIconClick}
        >
          <RightIcon />
        </div>
      )}
    </div>
  );
};

export { Input };

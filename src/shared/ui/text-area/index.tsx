import React from "react";

import classes from "./text-area.module.scss";

interface Props {
  name?: string;
  maxLength?: number;
  value?: string;
  holder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => {};
  width?: number;
  className?: string;
}

const TextArea: React.FC<Props> = (props) => {
  const {
    name,
    maxLength,
    value,
    holder,
    disabled,
    onChange,
    width,
    className,
  } = props;

  const changeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return;

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`${classes.container} ${className ?? ""}`}>
      <textarea
        name={name}
        maxLength={maxLength}
        value={value}
        placeholder={holder}
        disabled={disabled}
        onChange={changeValue}
        className={classes.textarea}
      />
    </div>
  );
};

export { TextArea };

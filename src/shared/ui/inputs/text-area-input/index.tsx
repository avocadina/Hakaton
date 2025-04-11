import React from "react";
import { TextArea } from "~/src/shared/ui/text-area";

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

export default function TextAreaInput(props: Props) {
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

  return (
    <TextArea
      name={name}
      maxLength={maxLength}
      value={value}
      holder={holder}
      disabled={disabled}
      onChange={onChange}
      width={width}
      className={className}
    />
  );
}

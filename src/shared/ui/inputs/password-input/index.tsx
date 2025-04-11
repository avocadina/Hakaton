import React, { Dispatch, SetStateAction } from "react";

import classes from "./password-input.module.scss";
import Password from "~/public/shared/password.svg";
import EyeSlash from "~/public/shared/eye-slash.svg";
import { Input } from "~/src/shared/ui/input";

interface Props {
  value?: string;
  onChange?: (arg: string) => void;
  disabled?: boolean;
  required?: boolean;
  holder?: string;
  className?: string;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export default function PasswordInput(props: Props) {
  const {
    value,
    onChange,
    disabled,
    required,
    holder,
    className,
    showPassword,
    setShowPassword,
  } = props;

  return (
    <Input
      type={showPassword ? "password" : "text"}
      className={classes.input}
      onChange={(v) => onChange?.(v.target.value)}
      value={value}
      disabled={disabled}
      required={required}
      placeholder={holder}
      RightIcon={showPassword ? EyeSlash : Password}
      rightIconClick={() => setShowPassword(!showPassword)}
    />
  );
}

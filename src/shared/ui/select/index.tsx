import React, { Dispatch, SetStateAction, useState } from "react";

import classes from "./select.module.scss";
import TextInput from "../inputs/text-input";
import DownArrow from "~/public/shared/down-arrow.svg";

interface Props {
  index: number | null;
  setIndex: Dispatch<SetStateAction<number | null>>;
  list: ItemI[];
  className: string;
}

export interface ItemI {
  index: number;
  title: string;
  role: string;
}

export default function CustomSelect(props: Props) {
  const { index, setIndex, list, className } = props;
  const [activeList, setActiveList] = useState<boolean>(false);
  return (
    <div className={`${classes.select_container} ${className}`}>
      <div
        className={`${classes.select} flex-row space-between gap-3 flex-center`}
      >
        <TextInput
          value={index !== null ? list[index - 1].title : ""}
          placholder="Выберите роль"
          rightIcon={DownArrow}
          rightIconClick={() => setActiveList(!activeList)}
          disabled
          classNameRightIcon={`${activeList ? classes.button_active : ""} ${classes.button}`}
          className={classes.input}
        />
      </div>
      <ul
        className={`flex-column flex-stretch list-light-container ${activeList ? classes.list_active : ""} ${classes.list}`}
      >
        {list.map((item) => {
          return (
            <li
              key={item.index}
              className={`${classes.item} pointer`}
              onClick={() => {
                setIndex(item.index);
                setActiveList(false);
              }}
            >
              <span className="text-18 text-white">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

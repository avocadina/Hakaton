import React from "react";

import classes from "./header.module.scss";
import Image from "next/image";
import { navList } from "~/src/entities/header/model/header.const";
import { Button } from "~/src/shared/ui/button";

export default function Header() {
  return (
    <header className={`${classes.header}`}>
      <div className="wrapper">
        <div
          className={`flex-row space-between align-center ${classes.container}`}
        >
          <div className={`${classes.logo} cursor`}>
            <Image src={`/shared/logo.png`} alt="" width={50} height={50} />
          </div>
          <nav className={classes.nav}>
            <ul className="flex-row gap-3 align-center">
              {navList.map((item, key) => {
                return (
                  <li key={key}>
                    <Button typeButton="white" size="12-16">
                      <div className="flex-row gap-2 align-center">
                        <item.Icon />
                        <a href={item.link} className={`text-18`}>
                          {item.title}
                        </a>
                      </div>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";
import React, { useState } from "react";

import classes from "./homepage.module.scss";
import Header from "~/src/entities/header/ui";
import Contacts from "~/src/entities/contact/ui";

export default function HomePage() {
  const [modal, setModal] = useState<boolean | null>(null);

  return (
    <div className="row gap-8">
      <Header />
      <Contacts />
    </div>
  );
}

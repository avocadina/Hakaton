"use client";
import React, { useEffect } from "react";
import { useClientLayout } from "~/src/entities/client-layout/lib/hooks/useClientLayout.hook";

import classes from "./client-layout.module.scss";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { deviceType } = useClientLayout();

  return (
    <div className={`content`}>
      <div className={`${classes.client__layout} ${classes[deviceType]}`}>
        {children}
      </div>
    </div>
  );
}

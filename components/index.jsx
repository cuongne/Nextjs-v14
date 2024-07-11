import { cn } from "@/utils/lib";
import React from "react";

const WrapperMaxWidth = ({children,className}) => {
  return <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 ",className)}>{children}</div>;
};

export default WrapperMaxWidth;

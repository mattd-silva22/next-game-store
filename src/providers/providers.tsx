import { GlobalStyle } from "@/styles/globalStyle";
import React, { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

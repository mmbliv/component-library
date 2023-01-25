import React, { Children } from "react";

import { Header } from "./Header";
import "./page.css";

interface PageProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

export const Page = ({ children }: PageProps) => {
  // const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header />
      {children}
    </article>
  );
};

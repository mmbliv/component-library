import React, { Children } from "react";

import { Header } from "./Header";
import "./page.css";

interface PageProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  type: string;
}

export const Page = ({ children, type }: PageProps) => {
  // const [user, setUser] = React.useState<User>();
  if (type === "home")
    return (
      <article>
        <Header />
        {children}
      </article>
    );
  return null;
};

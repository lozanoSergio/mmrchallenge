import React from "react";
import Header from "../shared/Header";

const BaseLayout = (props) => {
  const { children, isAuthenticated, user } = props;

  return (
    <div className="layout-container">
      <Header isAuthenticated={isAuthenticated} user={user} />
      <main className="cover">
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
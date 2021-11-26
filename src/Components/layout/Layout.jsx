// Library
import React from "react";

const Layout = ({ children, type }) => {
  return (
    <React.Fragment>
      <div
        className={`bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white font-patrick min-h-(custom-height) overflow-hidden transition-all duration-500 ${type}`}
      >
        <div className="container mx-auto">{children}</div>
      </div>
    </React.Fragment>
  );
};
export default Layout;

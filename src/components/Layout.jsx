import React from "react";

const Layout = (props) => {
  return (
    <div className="px-40 py-20 bg-emerald-200 min-h-screen">
      {props.children}
    </div>
  );
};

export default Layout;

import React from "react";

const Layout = (props) => {
  return (
    <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 py-20 bg-emerald-200 min-h-screen">
      {props.children}
    </div>
  );
};

export default Layout;

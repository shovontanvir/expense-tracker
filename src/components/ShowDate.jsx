import React from "react";

const ShowDate = (props) => {
  let date = new Date(props.date);
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();
  return (
    <div className="w-full sm:w-auto text-center bg-emerald-500 p-2 rounded-xl flex flex-col lg:flex-row">
      <h1 className="sm:text-lg md:text-xl font-mono font-semibold text-sky-800 mx-2">
        {day}
      </h1>
      <h1 className="sm:text-lg md:text-xl font-mono font-semibold text-sky-800 mx-2">
        {month}
      </h1>
      <h1 className="sm:text-lg md:text-xl font-mono font-semibold text-sky-800 mx-2">
        {year}
      </h1>
    </div>
  );
};

export default ShowDate;

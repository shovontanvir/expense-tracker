import React from "react";

const ShowDate = (props) => {
  let date = new Date(props.date);
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();
  return (
    <div className="text-center bg-emerald-500 p-5 w-36 rounded-3xl">
      <h1 className="text-3xl font-mono font-semibold text-sky-800">{day}</h1>
      <h2 className="text-xl font-mono font-semibold text-sky-800">{month}</h2>
      <h3 className="text-xl font-mono font-semibold text-sky-800">{year}</h3>
    </div>
  );
};

export default ShowDate;

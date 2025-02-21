import React from "react";
import SingleJob from "./SingleJob";
import data from "../db.json";

function JobList() {
  return (
    <div className="max-w-[75vw] mx-auto my-[4.5rem]">
      <SingleJob data={data} />
    </div>
  );
}

export default JobList;

import React from "react";
import data from "../db.json";

const SingleJob = () => {
  return (
    <>
      {data.map((item, key) => (
        <div key={item.key} className="border-l-[3px] border-darkCyan my-8 shadow-lg">
          <div>
            <img src={item.logo} className='h-16 w-16 rounded-full' alt="" />
          </div>
          <div>
            <div>
              <h3 className="text-darkCyan">{item.company}</h3>
              <p>{item.level}</p>
              <p></p>
            </div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default SingleJob;

import React from "react";
import data from "../db.json";

const SingleJob = () => {
  return (
    <>
      {data.map((item, key) => (
        <div key={item.key} className="border-l-[3px] border-darkCyan">
          <div>
            <img src={item.logo} className='w-24 h-24 rounded-full' alt="" />
          </div>
          <div>
            <div>
              <h3 className="text-darkCyan">{item.company}</h3>
              <p></p>
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

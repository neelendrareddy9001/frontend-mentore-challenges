import React from "react";
import data from "../db.json";

const SingleJob = () => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="border-l-[3px] border-darkCyan bg-white my-8 rounded-md">
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

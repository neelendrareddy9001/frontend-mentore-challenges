import React from "react";
import data from "../db.json";

const SingleJob = () => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="border-l-[3px] border-darkCyan p-8 bg-white my-8 rounded-md flex justify-between items-center"
        >
          <div className="flex">
            <img src={item.logo} className="h-16 w-16 rounded-full" alt="job" />
            <div className='flex flex-col'>
              <div>
                <h2 className="text-darkCyan">{item.company}</h2>
                <div className="">
                  <p>{item.featured}</p>
                  <p>{item.new}</p>
                </div>
              </div>
              <p>{item.position}</p>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <h3>Fullstack</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleJob;

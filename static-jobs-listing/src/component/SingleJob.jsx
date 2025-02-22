import React from "react";

const SingleJob = ({ data }) => {
  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          className="border-l-[3px] border-darkCyan p-8 bg-white my-8 rounded-md flex justify-between items-center"
          key={index}
        >
          <div className="flex">
            <img
              src={item.logo}
              key={item.index}
              className="h-16 w-16 rounded-full"
              alt="job"
            />
            <div className="flex flex-col gap-[4px]">
              <div className="flex gap-3">
                <h2 className="text-darkCyan font-bold" key={item.index}>
                  {item.company}
                </h2>
                <div className="flex gap-2">
                  <p
                    className={`${
                      item.new
                        ? "text-white bg-darkCyan px-2 p-[2px] rounded-full"
                        : ""
                    }`}
                  >
                    {item.new ? "NEW!" : ""}
                  </p>
                  <p
                    className={`${
                      item.featured
                        ? "text-white bg-black px-2 p-[2px] rounded-full "
                        : ""
                    }`}
                  >
                    {item.featured ? "FEATURED" : ""}
                  </p>
                </div>
              </div>
              <p className="cursor-pointer">{item.position}</p>
              <div className="flex gap-2 text-sm font-thin">
                <p className="info">{item.postedAt}</p>
                <span className="text-veryDarkGrayCyan text-lg text-center">
                  .
                </span>

                <p className="info">{item.contract}</p>
                <span>.</span>
                <p className="info">{item.location}</p>
                <span>.</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <h3>{item.role}</h3>
            <h3>{item.level}</h3>
            {item.languages.map((it) => (
              <h3>{it}</h3>
            ))}
            {item.tools.map((its) => (
              <h3>{its}</h3>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleJob;

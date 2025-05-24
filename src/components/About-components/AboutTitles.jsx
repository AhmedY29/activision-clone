import React from "react";

function AboutTitles(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[78%] my-10">
      <h1 className="text-4xl font-bold border-b border-white text-center pb-4 w-full uppercase">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}

export default AboutTitles;

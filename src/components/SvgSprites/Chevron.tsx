import React from "react";

const Chevron = ({ width = "15", height = "15", fill = "#fafafa" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 14"
      id="sidebar-collapse"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M0 7.022L4.912.045 8.257 0 3.344 6.904l4.913 7.051L4.912 14 0 7.022zm6.743 0L11.656.045 15 0l-4.912 6.904L15 13.955 11.656 14 6.743 7.022z"></path>
    </svg>
  );
};

export default Chevron;

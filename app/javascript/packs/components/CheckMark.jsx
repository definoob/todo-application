import React from "react";

const CheckMark = ({ complete }) => (
  <svg
    className={`bi bi-check-circle ${complete ? "text-success" : "text-muted"}`}
    width="2em"
    height="2em"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default CheckMark;

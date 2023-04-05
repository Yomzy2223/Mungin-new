import React from "react";

const SoilReqIcon = ({ active }) => {
  return (
    <div>
      {active ? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33325 6.5C1.33325 8.26811 2.03563 9.9638 3.28587 11.214C4.53612 12.4643 6.23181 13.1667 7.99992 13.1667C9.76803 13.1667 11.4637 12.4643 12.714 11.214C13.9642 9.9638 14.6666 8.26811 14.6666 6.5"
            stroke="#778761"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33325 6.5C2.20873 6.5 3.07564 6.67244 3.88447 7.00747C4.69331 7.3425 5.42824 7.83356 6.0473 8.45262C6.66635 9.07168 7.15742 9.80661 7.49245 10.6154C7.82748 11.4243 7.99992 12.2912 7.99992 13.1667M7.99992 13.1667C7.99992 11.3986 8.7023 9.70286 9.95254 8.45262C11.2028 7.20238 12.8985 6.5 14.6666 6.5L7.99992 13.1667Z"
            stroke="#778761"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00658 8.1665C5.96026 7.23882 6.11433 6.31205 6.4583 5.44925C6.80226 4.58645 7.32806 3.80787 7.99992 3.1665M7.99992 3.1665C8.67177 3.80787 9.19757 4.58645 9.54154 5.44925C9.88551 6.31205 10.0396 7.23882 9.99325 8.1665L7.99992 3.1665Z"
            stroke="#778761"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33325 6.5C1.33325 8.26811 2.03563 9.9638 3.28587 11.214C4.53612 12.4643 6.23181 13.1667 7.99992 13.1667C9.76803 13.1667 11.4637 12.4643 12.714 11.214C13.9642 9.9638 14.6666 8.26811 14.6666 6.5"
            stroke="#EEEEEE"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33325 6.5C2.20873 6.5 3.07564 6.67244 3.88447 7.00747C4.69331 7.3425 5.42824 7.83356 6.0473 8.45262C6.66635 9.07168 7.15742 9.80661 7.49245 10.6154C7.82748 11.4243 7.99992 12.2912 7.99992 13.1667M7.99992 13.1667C7.99992 11.3986 8.7023 9.70286 9.95254 8.45262C11.2028 7.20238 12.8985 6.5 14.6666 6.5L7.99992 13.1667Z"
            stroke="#EEEEEE"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00658 8.1665C5.96026 7.23882 6.11433 6.31205 6.4583 5.44925C6.80226 4.58645 7.32806 3.80787 7.99992 3.1665M7.99992 3.1665C8.67177 3.80787 9.19757 4.58645 9.54154 5.44925C9.88551 6.31205 10.0396 7.23882 9.99325 8.1665L7.99992 3.1665Z"
            stroke="#EEEEEE"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default SoilReqIcon;

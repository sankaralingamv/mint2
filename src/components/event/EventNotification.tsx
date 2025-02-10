
import React from "react";

export const EventNotification = () => {
  return (
    <div className="fixed right-8 top-8 animate-fade-in">
      <div className="bg-[#E5FFE7] border border-[#34D399] shadow-sm flex items-center gap-2.5 py-3 px-4 rounded-lg">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM11.707 6.707L7.707 10.707C7.512 10.902 7.256 11 7 11C6.744 11 6.488 10.902 6.293 10.707L4.293 8.707C3.902 8.316 3.902 7.684 4.293 7.293C4.684 6.902 5.316 6.902 5.707 7.293L7 8.586L10.293 5.293C10.684 4.902 11.316 4.902 11.707 5.293C12.098 5.684 12.098 6.316 11.707 6.707Z"
            fill="#059669"
          />
        </svg>
        <span className="text-[#065F46] text-sm font-medium">
          You have successfully registered for the event
        </span>
      </div>
    </div>
  );
};

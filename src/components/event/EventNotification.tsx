
import React from "react";

export const EventNotification = () => {
  return (
    <div className="bg-[#F2FCE2] shadow-sm flex items-center justify-center mt-10 px-4 py-3 rounded-2xl">
      <div className="flex items-center gap-2 max-w-[293px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/695f255084df481d77a54efcfd74ce0d1a48fcc1c682eb2b067bf42e4ffc5a6c"
          className="w-3 h-3"
          alt="Success icon"
        />
        <span className="text-[#1A1F2C] text-sm">
          You have successfully registered for the event
        </span>
      </div>
    </div>
  );
};

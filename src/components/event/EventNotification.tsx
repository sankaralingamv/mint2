import React from "react";

export const EventNotification = () => {
  return (
    <div className="bg-[rgba(247,235,235,1)] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex items-center gap-2.5 text-xs text-black font-normal justify-center mt-10 px-[15px] py-[11px] rounded-[15px]">
      <div className="self-stretch flex min-w-60 w-[293px] items-stretch gap-1.5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/695f255084df481d77a54efcfd74ce0d1a48fcc1c682eb2b067bf42e4ffc5a6c?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-3 shrink-0 my-auto"
          alt="Success icon"
        />
        <div className="grow shrink w-[273px] basis-auto">
          You have successfully registered for the event
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const EventHeader = () => {
  return (
    <header className="flex w-full items-stretch gap-5 whitespace-nowrap flex-wrap justify-between max-md:max-w-full">
      <div className="text-[rgba(237,109,100,1)] text-lg font-semibold my-auto">
        Freshmint
      </div>
      <nav className="flex items-center gap-10 text-base text-black font-normal max-md:max-w-full">
        <a
          href="#events"
          className="self-stretch my-auto hover:text-[rgba(237,109,100,1)]"
        >
          Events
        </a>
        <a
          href="#community"
          className="self-stretch my-auto hover:text-[rgba(237,109,100,1)]"
        >
          Community
        </a>
        <a
          href="#profiles"
          className="self-stretch my-auto hover:text-[rgba(237,109,100,1)]"
        >
          Profiles
        </a>
        <div className="self-stretch bg-[rgba(237,109,100,1)] gap-2.5 text-white px-[25px] py-2 rounded-[20px] max-md:px-5 cursor-pointer hover:bg-[rgba(237,89,80,1)]">
          0x3e3c…4b77
        </div>
      </nav>
    </header>
  );
};

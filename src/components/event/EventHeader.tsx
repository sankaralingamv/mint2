
import React from "react";

export const EventHeader = () => {
  return (
    <header className="flex w-full items-center justify-between">
      <div className="text-[#ED6D64] text-lg font-semibold">
        Freshmint
      </div>
      <nav className="flex items-center gap-10">
        <a
          href="#events"
          className="text-[#1A1F2C] hover:text-[#ED6D64] transition-colors"
        >
          Events
        </a>
        <a
          href="#community"
          className="text-[#1A1F2C] hover:text-[#ED6D64] transition-colors"
        >
          Community
        </a>
        <a
          href="#profiles"
          className="text-[#1A1F2C] hover:text-[#ED6D64] transition-colors"
        >
          Profiles
        </a>
        <button className="bg-[#ED6D64] text-white px-6 py-2 rounded-full hover:bg-[#E15A51] transition-colors">
          0x3e3c…4b77
        </button>
      </nav>
    </header>
  );
};


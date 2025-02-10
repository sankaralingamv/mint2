
import React from "react";
import { EventHeader } from "@/components/event/EventHeader";
import { EventNotification } from "@/components/event/EventNotification";
import { EventParticipants } from "@/components/event/EventParticipants";
import { EventInformation } from "@/components/event/EventInformation";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="bg-[#FFF7EF] flex w-full flex-col items-center px-20 py-8 max-md:px-5">
        <div className="w-full max-w-[1016px] flex flex-col">
          <EventHeader />

          <EventNotification />

          <h1 className="text-[#1A1F2C] text-[40px] font-semibold mt-10 max-md:text-3xl">
            StarkCon IIT Madras ~ StarkWare x Web3Chennai
          </h1>

          <div className="text-[#ED6D64] text-2xl font-normal text-center mt-4">
            Thu, 22 Dec, 15:00 - 18:00 GMT+5:30
          </div>

          <div className="text-[#1A1F2C] text-2xl font-normal text-center mt-2">
            IITM Research Park
          </div>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7"
            className="w-full h-auto object-cover shadow-md mt-10 rounded-2xl"
            alt="Event banner"
          />

          <EventParticipants />

          <div className="flex w-full items-center justify-between mt-10">
            <div className="flex items-center gap-5">
              <h2 className="text-[#1A1F2C] text-2xl font-semibold">
                Registration
              </h2>
              <button className="text-[#ED6D64] text-base font-semibold hover:text-[#E15A51] transition-colors">
                Manage Event
              </button>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1F2C] text-base hover:text-[#ED6D64] transition-colors"
            >
              View location in Google Map
            </a>
          </div>

          <div className="flex items-start justify-between mt-6 gap-10">
            <p className="text-[#1A1F2C] text-xl font-normal max-w-[603px]">
              Hello! Please register below. You will be able to join the event
              when the host approves your registration.
            </p>
            <button className="bg-[#1A1F2C] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#2A2F3C] transition-colors">
              Share this event
            </button>
          </div>

          <div className="bg-[#F7EBEB] text-xl text-[#1A1F2C] font-normal mt-10 p-8 rounded-2xl">
            You have successfully registered for the event
          </div>

          <EventInformation />
        </div>
      </main>
    </div>
  );
};

export default Index;


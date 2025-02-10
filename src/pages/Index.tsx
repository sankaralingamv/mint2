import React from "react";
import { EventHeader } from "@/components/event/EventHeader";
import { EventNotification } from "@/components/event/EventNotification";
import { EventParticipants } from "@/components/event/EventParticipants";
import { EventInformation } from "@/components/event/EventInformation";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <main className="bg-[rgba(255,247,239,1)] flex w-full flex-col items-center pt-2.5 pb-[164px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <div className="flex mb-[-33px] w-full max-w-[1016px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
          <EventHeader />

          <EventNotification />

          <h1 className="text-black text-[40px] font-semibold mt-10 max-md:max-w-full max-md:mr-[9px]">
            StarkCon IIT Madras ~ StarkWare x Web3Chennai
          </h1>

          <div className="text-[rgba(237,109,100,1)] text-[26px] font-normal text-center self-center mt-4 max-md:max-w-full">
            Thu, 22 Dec, 15:00 - 18:00 GMT+5:30
          </div>

          <div className="text-black text-[26px] font-normal text-center self-center">
            IITM Research Park
          </div>

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/b6d72d8ae88770b19b94158ddf28d9d16de9baf9d8b447f6eb767246212f09f7?placeholderIfAbsent=true&width=2000 2000w"
            className="aspect-[2.03] object-contain w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-10 rounded-[15px] max-md:max-w-full"
            alt="Event banner"
          />

          <EventParticipants />

          <div className="flex w-full items-stretch gap-5 font-semibold flex-wrap justify-between mt-10 max-md:max-w-full max-md:mr-0.5">
            <div className="flex items-stretch gap-5">
              <h2 className="text-black text-[26px] text-center grow">
                Registration
              </h2>
              <button className="text-[rgba(237,109,100,1)] text-base basis-auto my-auto hover:text-[rgba(237,89,80,1)]">
                Manage Event
              </button>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-base text-right my-auto hover:text-[rgba(237,109,100,1)]"
            >
              View location in Google Map
            </a>
          </div>

          <div className="flex w-full items-stretch gap-[40px_95px] text-[22px] flex-wrap mt-5 max-md:max-w-full max-md:mr-0.5">
            <p className="text-black font-normal grow shrink w-[603px] basis-auto max-md:max-w-full">
              Hello! Please register below. You will be able to join the event
              when the host approves your registration.
            </p>
            <button className="self-stretch bg-black gap-2.5 text-white font-semibold shrink basis-auto my-auto px-10 py-[13px] rounded-[30px] max-md:px-5 hover:bg-gray-800">
              Share this event
            </button>
          </div>

          <div className="bg-[rgba(247,235,235,1)] text-[22px] text-black font-normal mt-10 p-[30px] rounded-[15px] max-md:max-w-full max-md:mr-0.5 max-md:px-5">
            You have successfully registered for the event
          </div>

          <EventInformation />
        </div>
      </main>
    </div>
  );
};

export default Index;

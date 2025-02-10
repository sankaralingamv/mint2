import React from "react";

interface ParticipantCardProps {
  name: string;
  role: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, role }) => (
  <div className="bg-[rgba(237,109,100,1)] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex gap-2.5 px-5 py-3 rounded-[15px]">
    <div className="bg-white flex w-[50px] shrink-0 h-[50px] rounded-[50%]" />
    <div className="flex flex-col items-stretch">
      <div className="text-[22px] font-medium text-white z-10">{name}</div>
      <div className="text-base font-light text-white -mt-2">{role}</div>
    </div>
  </div>
);

export const EventParticipants = () => {
  return (
    <div className="flex w-[940px] max-w-full items-stretch gap-5 text-white flex-wrap mt-10">
      <ParticipantCard name="Starkcon" role="Organizer" />
      <ParticipantCard name="Chaal Pritam" role="Host" />
      <ParticipantCard name="Web3Chennai" role="Community Partner" />
      <ParticipantCard name="IITM RP" role="Partner" />
    </div>
  );
};

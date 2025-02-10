
import React from "react";

interface ParticipantCardProps {
  name: string;
  role: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, role }) => (
  <div className="bg-[#ED6D64] shadow-sm flex items-center gap-4 px-5 py-3 rounded-2xl">
    <div className="bg-white w-[50px] h-[50px] rounded-full" />
    <div className="flex flex-col">
      <div className="text-xl font-medium text-white">{name}</div>
      <div className="text-sm font-light text-white opacity-90">{role}</div>
    </div>
  </div>
);

export const EventParticipants = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <ParticipantCard name="Starkcon" role="Organizer" />
      <ParticipantCard name="Chaal Pritam" role="Host" />
      <ParticipantCard name="Web3Chennai" role="Community Partner" />
      <ParticipantCard name="IITM RP" role="Partner" />
    </div>
  );
};



import React from "react";

export const EventInformation = () => {
  return (
    <section className="mt-12 mb-16">
      <h2 className="text-[#1A1F2C] text-2xl font-semibold text-center mb-8">
        Event Information
      </h2>
      <div className="text-[#1A1F2C] text-xl leading-relaxed max-w-[900px] mx-auto">
        <p>StarkCon comes to 🇮🇳</p>
        <p className="mt-4">
          We are thrilled to bring the 'STARK' team to IIT Madras after hosting
          meetups at IIT Delhi, IIT Guwahati, IIT Kharagpur, IIT Roorkee, and,
          BITS Pilani! 🙌🏻
        </p>
        <p className="mt-4">
          In this meetup, you will get to learn about ZK-Rollup technology, L2
          scaling, programming in CAIRO, the progress of the StarkNet ecosystem,
          and much more 🚀
        </p>
        <p className="mt-4">
          If blockchain and web3 interest you, make sure to come by and learn
          from the best! Cool merchandise awaits you ✨
        </p>
        <p className="mt-4">
          Come hang out with the 'STARK fam' for an evening of learning and
          socializing for coders, enthusiasts, and the future builders of CAIRO
          in the web3 ecosystem 🎉
        </p>
        <div className="mt-8">
          <h3 className="text-[#1A1F2C] font-semibold text-xl mb-4">
            More on how to get involved with us:
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Grants Program</h4>
              <p>
                We have grants specifically for the Indian community targeting
                students, developers, and builders. Know more and apply here:{" "}
                <a
                  href="https://starkcon.com/grants"
                  className="text-[#ED6D64] underline hover:text-[#E15A51]"
                >
                  https://starkcon.com/grants
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Online Cairo Bootcamp</h4>
              <p>
                If you have a superb idea for grants but don't know how to buidl,
                we gotchu you 🤝🏻 We are planning a Cairo online Bootcamp on a
                global scale.
              </p>
              <p className="mt-2">
                Learn Cairo and buidl exciting projects with us 🥳
              </p>
              <p className="mt-2">
                Register here:{" "}
                <a
                  href="https://lu.ma/cairoBootcamp"
                  className="text-[#ED6D64] underline hover:text-[#E15A51]"
                >
                  https://lu.ma/cairoBootcamp
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-2">
          <p>
            <strong>Date:</strong> 22nd December
          </p>
          <p>
            <strong>Time:</strong> 3 PM to 6 PM IST
          </p>
          <p>
            <strong>Location:</strong> Raman hall, IIT Madras
          </p>
        </div>
      </div>
    </section>
  );
};


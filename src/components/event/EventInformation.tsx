import React from "react";

export const EventInformation = () => {
  return (
    <section className="mt-10">
      <h2 className="text-black text-[26px] font-semibold text-center">
        Event Information
      </h2>
      <div className="text-black text-[22px] font-normal ml-8 mr-[84px] mt-5 max-md:max-w-full max-md:mr-2.5">
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
        <div className="mt-6">
          <h3 className="font-semibold">
            More on how to get involved with us:
          </h3>
          <div className="mt-4">
            <h4 className="font-semibold">Grants Program</h4>
            <p>
              We have grants specifically for the Indian community targeting
              students, developers, and builders. Know more and apply here:{" "}
              <a
                href="https://starkcon.com/grants"
                className="text-blue-600 underline"
              >
                https://starkcon.com/grants
              </a>
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Online Cairo Bootcamp</h4>
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
                className="text-blue-600 underline"
              >
                https://lu.ma/cairoBootcamp
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6">
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

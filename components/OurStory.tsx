import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="section-wid">
      <div className=" ourstory-section   py-16 md:py-24">
        <div className="ourstory-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="ourstory-left ">
              <div className="relative z-10">
                <img
                  src="/our-story.webp"
                  alt="Workspace"
                  className="w-full  object-cover"
                />

                <div className="mt-[100px] lg:mt-10">
                  <div className=" first-head flex items-center gap-4">
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>{" "}
                    OUR PHILOSOPHY{" "}
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
                  </div>

                  <h3 className="mt-4 main-head">
                    Designed for Influence. Built for Connection.
                  </h3>

                  <p className="mt-4  ">
                    At Workalyn, we believe that environment shapes outcome. A
                    sterile, impersonal office breeds mediocre work. A space
                    that feels intentional, warm, and exclusive—that is where
                    deals are signed, ideas are born, and legacies are built. We
                    reject the clichés of conventional coworking. You will not
                    find beanbags, ping‑pong tables, or blaring music.
                  </p>
                  {/* <p className="mt-4"><a href="/about" className="text-[#00998A]"> Read More <span className="ml-1">→</span> </a></p> */}

                  {/* STATS */}
                  <div
                    className="
                      relative ourstory-stats md:mt-8
                      flex flex-wrap xl:flex-nowrap items-start
                      xl:justify-start
                      gap-8  2xl:gap-8
                      lg:border-t pt-6 lg:pt-10
                    "
                  >
                    <h2 className="ourstory-bg-title absolute  text-[50px] md:text-[60px] lg:text-[80px] xl:text-[120px] 2xl:text-[160px]  text-gray-200 uppercase pointer-events-none z-[-1]">
                      About
                    </h2>

                    <div className="px-2 sm:px-3 xl:px-5">
                      <h4 className="text-3xl sm:text-2xl md:text-3xl xl:text-4xl text-[#1B1C21]">
                        7,600
                      </h4>
                      <p className="pt-1 text-[14px] sm:text-sm text-[#1B1C21] whitespace-nowrap">
                        Sq ft. of Workspace
                      </p>
                    </div>

                    <div className="px-2 sm:px-4 xl:px-10 xl:border-s xl:border-e border-[#1B1C21]">
                      <h4 className="text-3xl sm:text-2xl md:text-3xl xl:text-4xl text-[#1B1C21]">
                        30
                      </h4>
                      <p className="pt-1 text-[14px] sm:text-sm text-[#1B1C21] whitespace-nowrap">
                        Hot Desks
                      </p>
                    </div>

                    <div className="px-2 sm:px-3 xl:px-5">
                      <h4 className="text-3xl sm:text-2xl md:text-3xl xl:text-4xl text-[#1B1C21]">
                        23
                      </h4>
                      <p className="pt-1 text-[14px] sm:text-sm text-[#1B1C21] whitespace-nowrap">
                        Fixed Desks, Private Offices & Meeting Rooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="ourstory-right relative">
              <h2 className="ms-[-15px] text-[50px] md:text-[60px] lg:text-[80px] xl:text-[120px] 2xl:text-[160px]  text-gray-200   tracking-0 uppercase pointer-events-none whitespace-nowrap">
                Our Story
              </h2>

              <div className="relative z-10">
                <div className=" first-head flex items-center gap-4">
                  <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>{" "}
                  Who We Are{" "}
                  <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
                </div>

                <h3 className="mt-4 main-head">
                  Designed For Collaboration. Built For Growth
                </h3>

                <p className="mt-4 ">
                  We built Workalyn because we refused to believe that
                  productivity required isolation in a tower. For years, we
                  watched Kuala Lumpur’s most talented individuals trade their
                  most valuable asset—time—for the daily elevator commute. They
                  waited in crowded lobbies, pressed buttons, and stared at
                  closing doors, all before a single email was sent.
                </p>
                <p className="mt-4">
                  <a href="/about" className="text-[#00998A]">
                    {" "}
                    Read More <span className="ml-1">→</span>{" "}
                  </a>
                </p>

                <div className="mt-10">
                  <img
                    src="/about.webp"
                    alt="Collaboration Space"
                    className="w-full  object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

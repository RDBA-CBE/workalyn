import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="section-wid">
      <div className=" ourstory-section   py-16 md:py-24">
        <div className="ourstory-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="ourstory-left ">
              <div className="relative z-10">
                <img
                  src="/our-story.webp"
                  alt="Workspace"
                  className="w-full  object-cover"
                />

                <div className="mt-10">
                  <div className=" first-head flex items-center gap-4">
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>{" "}
                    Our Legacy{" "}
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
                  </div>

                  <h3 className="mt-4 main-head">
                    Building Spaces Where Ideas Grow And People Connect
                  </h3>

                  <p className="mt-4  ">
                    Workalyn was created with a simple vision—to design
                    workspaces that go beyond desks and walls. We believe a
                    great workspace should inspire creativity, encourage
                    collaboration, and support businesses at every stage of
                    growth.
                  </p>

                  {/* STATS */}
                  <div className="relative ourstory-stats mt-8 flex flex-wrap gap-8 border-t pt-10">
                    <h2 className="ourstory-bg-title absolute  md:text-[180px]  text-gray-200 uppercase pointer-events-none z-[-1]">
                      About
                    </h2>
                    <div className="px-5">
                      <h4 className="text-4xl  text-[#1B1C21]">
                        150 K+
                      </h4>
                      <p className="text-[#1B1C21] pt-2">Active Members</p>
                    </div>

                    <div className="border-s border-e px-10 border-[#1B1C21]">
                      <h4 className="text-4xl  text-[#1B1C21]">
                        25 +
                      </h4>
                      <p className="pt-2 text-[#1B1C21]">Partner Companies</p>
                    </div>

                    <div className="px-5">
                      <h4 className="text-4xl  text-[#1B1C21]">
                        12 +
                      </h4>
                      <p className="pt-2 text-[#1B1C21]">
                        Fully Equipped Spaces
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="ourstory-right relative">
              <h2 className="ourstory-bg-title ms-5  md:text-[160px]  text-gray-200   tracking-0 uppercase pointer-events-none whitespace-nowrap">
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
                  At Workalyn, we believe work is better when people feel
                  inspired, supported, and connected. Our spaces are crafted to
                  encourage productivity while fostering meaningful
                  collaboration among diverse professionals.
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

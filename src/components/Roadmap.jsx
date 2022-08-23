import React, { useState } from "react";
import clsx from "clsx";

import FaqItem from "../components/FaqItem";

const Roadmap = () => {
  const [roadmapRevealedState, setRoadmapRevealedState] = useState(1);
  const showMoreRoadmap = () => {
    setRoadmapRevealedState((prevState) => {
      if (prevState === 2) {
        return 2;
      }

      return (prevState += 1);
    });
  };

  return (
    <div className="ox-hidden">
      <div id="roadmap-top">
        <img className="w-100" src="./assets/imgs/spikes.png" alt="spikes" />
        <img
          src="./assets/imgs/roadmap-top.png"
          className="w-100"
          alt="roadmap"
        />

        <div id="roadmap-wrap">
          {roadmapRevealedState !== 2 && (
            <button
              onMouseEnter={(e) =>
                e.target.classList.add(
                  "animate__animated",
                  "animate__rubberBand"
                )
              }
              onMouseLeave={(e) =>
                e.target.classList.remove(
                  "animate__animated",
                  "animate__rubberBand"
                )
              }
              className=""
              onClick={showMoreRoadmap}
              id="show-more-roadmap"
            >
              Expand Full Roadmap
            </button>
          )}
          <img className="w-100 gif" src="./assets/imgs/jins.gif" alt="jins" />

          <div
            className={clsx("roadmap-section-container", {
              two: roadmapRevealedState === 2,
            })}
          >
            <div className="section" id="roadmap">
              {" "}
              <div className="jins">
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-1.svg"
                  alt="jin"
                />
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-2.svg"
                  alt="jin"
                />
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-3.svg"
                  alt="jin"
                />
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-4.svg"
                  alt="jin"
                />
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-5.svg"
                  alt="jin"
                />
                <img
                  className="jin"
                  src="./assets/vectors/caves-and-stones/jin-6.svg"
                  alt="jin"
                />
              </div>
              <div
                className={clsx("page-container", {
                  three: roadmapRevealedState === 2,
                })}
              >
                <h1 className="text-center">Roadmap</h1>

                <div
                  className={clsx(
                    "section mt-5",
                    {
                      one: roadmapRevealedState === 0,
                    },
                    {
                      two: roadmapRevealedState === 1,
                    },
                    {
                      three: roadmapRevealedState === 2,
                    }
                  )}
                  id="roadmap-sm"
                >
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>
                    <h3>Website Launch</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Virtual Spatial Gallery</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Tentacular Mint and Reveal</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Fund Community Wallets</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Tentacular Dashboard</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Farming (Staking) Launch</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Berry Juicer Launch</h3>

                    <a href="https://tentacular.medium.com/tentacular-berry-juicer-b2a5ccbf5c0b">
                      View Mechanics
                    </a>
                  </div>
                  {/* <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Cave Land Airdrop</h3>
                  </div> */}
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Upgrade your Tentacular</h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>
                      Berry Shop for Collaborations, <br /> Merchandise, etc.
                    </h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>
                      Metaverse Integration and Planet Berrylius in Substrata
                    </h3>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />
                    </div>

                    <h3>Endangermint</h3>
                  </div>
                </div>

                <div
                  className={clsx(
                    "roadmap-main",
                    {
                      one: roadmapRevealedState === 0,
                    },
                    {
                      two: roadmapRevealedState === 1,
                    },
                    {
                      three: roadmapRevealedState === 2,
                    }
                  )}
                >
                  <div className="caves">
                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-1.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-2.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-3.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-4.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-5.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-6.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-7.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-8.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-9.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-10.svg"
                      alt="cave"
                    />

                    <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-11.svg"
                      alt="cave"
                    />

                    {/* <img
                      className="cave"
                      src="./assets/vectors/caves-and-stones/cave-12.svg"
                      alt="cave"
                    /> */}
                  </div>
                  {/* </Fade> */}
                  {/* <Fade cascade> */}
                  <div className="stones">
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-1.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-2.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-3.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-4.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-5.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-6.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-7.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-8.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-9.svg"
                      alt="stone"
                    />
                    <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-10.svg"
                      alt="stone"
                    />
                    {/* <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-11.svg"
                      alt="stone"
                    /> */}
                    {/* <img
                      className="stones"
                      src="./assets/vectors/caves-and-stones/stones-12.svg"
                      alt="stone"
                    /> */}
                  </div>
                  <div className="texts">
                    <h3>Website Launch</h3>
                    <h3>Virtual Spatial Gallery</h3>
                    <h3>
                      Tentacular Mint <br />
                      and Reveal
                    </h3>
                    <h3>
                      Fund Community <br /> Wallets
                    </h3>
                    <h3>Tentacular Dashboard</h3>
                    <h3>Farming (Staking) Launch</h3>
                    <h3 className="text-end">
                      Berry Juicer Launch
                      <h3>
                        {/* <a href="https://medium.com/@tentacularnft/tentacular-berry-juicer-b2a5ccbf5c0b"> */}
                        <a href="https://tentacular.medium.com/tentacular-berry-juicer-b2a5ccbf5c0b">
                          View Mechanics
                        </a>
                      </h3>
                    </h3>
                    {/* <h3>Cave Land Airdrop</h3> */}
                    <h3 className="text-end">Upgrade your Tentacular</h3>
                    <h3>
                      Berry Shop for Collaborations,
                      <br /> Merchandise, etc.
                    </h3>
                    <h3 className="text-end">
                      Metaverse Integration and <br />
                      Planet Berrylius in Substrata
                    </h3>
                    <h3>Endangermint</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className="section">
        <div className="page-container">
          <div className="text-center">
            <h1>FAQ</h1>

            <p className="text-white stroked-sm fs-20">
              We will be updating this section regularly
              {/*, so consider visitng our website time to time */}
            </p>
          </div>

          <div className="faq-main">
            {[
              {
                question: "When is the mint date?",
                answer: "TBA",
              },
              {
                question: "What is the mint price?",
                answer: "TBA",
              },
              {
                question: "What blockchain will Tentacular reside on?",
                answer: "ETH",
              },
              {
                question: "How many Tentacular NFTs will there be?",
                answer:
                  "The Tentacular ecosystem starts with a hand-drawn genesis collection of 5,556 randomly generated Tentacular.",
              },
              {
                question: "Is there a whitelist?",
                answer:
                  "Yes, please join our discord server to learn more about how to earn your whitelist spot.",
              },
              {
                question: "What is Tentacular farming?",
                answer:
                  "Farming your Tentacular will yield you daily $BY (berry token) rewards. It is essentially the same mechanism as staking, however your token will not leave your wallet (non-custodial), unlike traditional staking methods. For more information see our Medium article here.",
                link: "What is Tentacular Farming?",
              },
              {
                question: "How soon after mint will farming be available?",
                answer:
                  "The Tentacular Dashboard and Farming (Staking) will launch approximately 5 days (TBD) after the reveal is complete.",
              },
              {
                question:
                  "Will farming affect the Tentacular stats on Opensea?",
                answer:
                  "No, our farming function updates your 'bonded' (staked) Tentacular token. Unlike traditional staking methods, your Tentacular stays in your wallet (non-custodial) and staking does not affect holder count on Opensea.",
              },
              {
                question: "What's so good about this new staking method?",
                answer:
                  "When a Tentacular is farming, it cannot be transferred, therefore some of the common hacks we have seeing can be prevented.",
              },

              {
                question:
                  "Can I sell or list my Tentacular while it's farming?",
                answer:
                  "Technically you can list your Tentacular on Opensea, however, a farming Tentacular is locked and cannot be transferred, therefore it cannot be bought and sold. Your listed Tentacular will show a 'farming' watermark in the image and any attempts to purchase it will result in a failed transaction for the buyer.",
              },

              {
                question: "Are there any opportunities to join the team?",
                answer:
                  "Yes, please join our Discord server to apply for a position on the team.",
              },

              {
                question:
                  "Is there a secondary market royalty and how will the funds be used?",
                answer:
                  "Yes, there is a secondary market royalty of 5%. The funds will be used for further development, virtual and IRL events, metaverse land acquisition, and community rewards eg. participants of the Berry Juicer.",
              },

              {
                question: "Will the smart contract be audited?",
                answer: "Yes.",
              },

              {
                question: "Will low gas minting be implemented?",
                answer: "Yes.",
              },

              {
                question: "Will Tentacular be revealed right away?",
                answer:
                  "All Tentacular will be revealed approximately 24 hours after the Public sale is complete.",
              },
            ].map((el, idx) => {
              return <FaqItem {...el} key={"faq-" + idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

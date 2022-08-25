import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade>
      <div id="about" className="section about">
        <img
          className="vector"
          src="./assets/vectors/about-us-bottom.svg"
          alt="about-us"
        />
        <img
          className="vector-bg"
          src="./assets/imgs/about-us-board.png"
          alt="about-us"
        />
        <div className="page-container">
          <div className="about-container">
            <div className="container-fluid px-0">
              <div className="main-row row">
                <div className="col-lg-7 d-flex align-items-center">
                  <div>
                    <Fade left>
                      <h2>About Tentacular NFT</h2>

                      <p>
                        5,556 Tentacular have been forced out of their beloved
                        homes on Planet Berrylius and are now migrating to the
                        Ethereum blockchain.
                        <img
                          onClick={() => {
                            window
                              .open(
                                "https://medium.com/@tentacularnft/planet-berrylius-f62fcc4107ce",
                                "_blank"
                              )
                              .focus();
                          }}
                          className="c-pointer btn d-block my-3 hvr-grow-shadow"
                          src="./assets/vectors/about-us-btn.svg"
                          alt="btn"
                        />
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="col-lg-5">
                  <Fade right>
                    <img
                      className="nft w-100"
                      src="./assets/imgs/nft-green.png"
                      alt="nft"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;

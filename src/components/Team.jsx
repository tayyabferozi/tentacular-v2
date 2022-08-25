import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Team = () => {
  return (
    <div className="bg-green">
      <div id="team" className="section">
        <div className="page-container">
          <Zoom>
            <h1>Core Team</h1>
          </Zoom>

          <div className="team-cards">
            <div className="container-fluid px-0">
              <Slide bottom cascade>
                <div className="row g-4 mt-3">
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-1.png" alt="team-mem" />
                      <h3>TentacleMaster</h3>
                      <p className="text-white stroked-sm fs-20">
                        Founder and Project Lead
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-2.png" alt="team-mem" />
                      <h3>LordTentacles</h3>
                      <p className="text-white stroked-sm fs-20">
                        Founder and Creative Director
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-3.png" alt="team-mem" />
                      <h3>HJ</h3>
                      <p className="text-white stroked-sm fs-20">Lead Artist</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-4.png" alt="team-mem" />
                      <h3>0xbb</h3>
                      <p className="text-white stroked-sm fs-20">
                        Lead Developer
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>

              <Zoom>
                <h2 className="sub-title stroked text-white mt-5">
                  Community and Marketing
                </h2>
              </Zoom>

              <Slide bottom cascade>
                <div className="row justify-content-center mt-5 g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-5.png" alt="team-mem" />
                      <h3>TheNFTChief</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-5.png" alt="team-mem" />
                      <h3>Spidey</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-5.png" alt="team-mem" />
                      <h3>Mochi Chan</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card hvr-buzz">
                      <img src="./assets/imgs/team-mem-5.png" alt="team-mem" />
                      <h3>0xNorby</h3>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <div id="foot">
        <img
          className="logo"
          src="./assets/imgs/newcroppedtentacular.png"
          alt="logo"
        />
        <img className="vector" src="./assets/imgs/bg-foot.png" alt="bg-foot" />
      </div>
    </div>
  );
};

export default Team;

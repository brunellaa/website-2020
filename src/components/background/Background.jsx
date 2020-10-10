import React from "react";
import "./Background.scss";

export default function Background() {
  let rot = 0;
  tick();
  function tick() {
    requestAnimationFrame(tick);
    rot += 0.04;
    document.body.style.setProperty("--rot", `${rot}deg`);
  }
  return (
    <div className="background-container">
      <div className="bg-div">
        <div className="bg-div">
          <div className="bg-div">
            <div className="bg-div">
              <div className="bg-div">
                <div className="bg-div">
                  <div className="bg-div">
                    <div className="bg-div">
                      <div className="bg-div">
                        <div className="bg-div">
                          <div className="bg-div">
                            <div className="bg-div">
                              <div className="bg-div">
                                <div className="bg-div">
                                  <div className="bg-div">
                                    <div className="bg-div">
                                      <div className="bg-div"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

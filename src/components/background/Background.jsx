import React from "react";
import "./Background.scss";

export default function Background() {
  let rotation = 0;
  const spinner = () => {
    requestAnimationFrame(spinner);
    rotation += 0.06;
    document.body.style.setProperty("--rot", `${rotation}deg`);
  };
  spinner();
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

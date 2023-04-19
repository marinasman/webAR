import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [isActive, setActive] = useState(false);
  // window.addEventListener("load", () => {
  //   Sync("#model-viewer", "#sound");
  // });
  // function Sync(selector, audioSelector) {
  //   var modelViewer = document.querySelector(selector);
  //   var sound = document.querySelector(audioSelector);
  //   var playRequest = document.querySelector("#overlay");

  //   sound.addEventListener("timeupdate", () => {
  //     modelViewer.currentTime = sound.currentTime;
  //     console.log("modelViewer time: " + modelViewer.currentTime);
  //   });

  //   sound.addEventListener("pause", () => {
  //     modelViewer.pause();
  //   });

  //   sound.addEventListener("play", () => {
  //     modelViewer.play();

  //     playRequest.classList.add("hide");
  //   });

  //   document.addEventListener("visibilitychange", () => {
  //     if (document.visibilityState !== "visible") {
  //       sound.pause();
  //     }
  //   });

  //   var promise = sound.play();
  //   if (promise !== undefined) {
  //     promise
  //       .then((_) => {
  //         console.log("Autoplay has worked");
  //         playRequest.classList.add("hide");
  //       })
  //       .catch((error) => {
  //         // Show a "Play" button so that user can start playback.
  //         console.log("Autoplay has not worked");

  //         // show the modal dialogue to play this
  //         playRequest.classList.remove("hide");
  //       });
  //   }
  // }
  const playNow = () => {
    var playRequest = document.querySelector("#overlay");
    playRequest.classList.add("hide");

    var sound = document.querySelector("#sound");
    setActive(!isActive);
    if (isActive) sound.play();
    else sound.pause();
  };

  return (
    <>
      <div id="overlay" class="show">
        <div id="request-press-play">
          <button onClick={playNow}>Play/Pause</button>
        </div>
      </div>
      <div id="card">
        <model-viewer
          id="glb"
          src="/assets/Handpaint_-_Girl_01.glb"
          ios-src="/assets/Handpaint_-_Girl_01.usdz"
          shadow-intensity="1"
          autoplay
          ar
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
        <section class="attribution">
          <div>
            <span>
              <h1>Cute Penguin</h1>
              <span>
                <audio controls autoplay loop id="sound">
                  <source
                    src="https://cdn.glitch.com/7d7e8236-5fa5-4809-ab74-eb6bf2bef1c6%2FPenguin_Emperor_Unisex_Adult.mp3?v=1580308441912"
                    type="audio/mpeg"
                  />
                  <source
                    src="https://cdn.glitch.com/7d7e8236-5fa5-4809-ab74-eb6bf2bef1c6%2FPenguin_Emperor_Unisex_Adult.ogg?v=1580245082333"
                    type="audio/ogg"
                  />
                </audio>
              </span>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

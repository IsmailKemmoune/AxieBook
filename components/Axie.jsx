// import pi
import Head from "next/head";
import { useState } from "react";
import * as PIXI from "pixi.js";
// import { loader } from "pixi.js";

export default function Axie() {
  const [inputId, setInputId] = useState("");

  function getAxie() {
    let oldID = axieID;
    let axieID = parseInt(inputId);
    if (!axieID) {
      alert("bad axie ID");
      return;
    }
    if (oldID == axieID) return;
    console.log(axieID);

    let baseURL = "https://assets.axieinfinity.com/axies/";
    let atlasURL = baseURL + axieID + "/axie/axie.atlas";

    let imageURL = baseURL + axieID + "/axie/axie.png";

    let modelURL = baseURL + axieID + "/axie/axie.json";

    PIXI.loader.reset();
    PIXI.loader
      .add("axie_atlas", atlasURL)
      .add("axie_png", imageURL)
      .load(function (loader, resources) {
        $.get({ url: modelURL, dataType: "json" }, function (rawSkeletonData) {
          const rawAtlasData = resources["axie_atlas"].data; //your atlas file
          const spineAtlas = new PIXI.spine.core.TextureAtlas(
            rawAtlasData,
            function (line, callback) {
              callback(PIXI.BaseTexture.from("axie_png"));
            }
          );

          const spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(
            spineAtlas
          );
          const spineJsonParser = new PIXI.spine.core.SkeletonJson(
            spineAtlasLoader
          );

          spineJsonParser.scale = 1;

          spineData = spineJsonParser.readSkeletonData(rawSkeletonData);

          animation = new PIXI.spine.Spine(spineData);

          animation.position.set(app.view.width / 2, app.view.height * 0.85);
          animation.scale.set(0.65, 0.65);
          animation.stateData.setMix("action/idle", "action/appear", 0.2);
          animation.stateData.setMix("action/appear", "action/idle", 0.2);

          animation.stateData.setMix(
            "attack/melee/mouth-bite",
            "action/idle",
            0.2
          );
          animation.stateData.setMix(
            "action/idle",
            "attack/melee/mouth-bite",
            0.2
          );

          if (animation.state.hasAnimation("action/idle")) {
            animation.state.setAnimation(0, "action/idle", true);
          } else if (animation.state.hasAnimation("action/idle")) {
            animation.state.setAnimation(0, "action/idle", true);
          }

          app.stage.removeChildren();
          app.stage.addChild(animation);
          PIXI.spine.Spine.globalAutoUpdate = true;
          app.start();
        }).fail(function () {
          alert("Failed to get Axie info. Bad Server Config?");
          $("#axieID").val(oldID);
          axieID = oldID;
        });
      });
  }

  const getInputData = (e) => {
    const { value } = e.target;
    setInputId(value);
  };
  return (
    <>
      {/* <Head>
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
          //   integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT"
          //   crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js"
          //   integrity="sha384-xdEN7ies9cZm/l8HslPhg0lGG/uQuIW2KQ/EVt71QFjarfJWY95fAMqbqw/1C2rX"
          //   crossorigin="anonymous"
        ></script>
        <script src="pixi-spine.js"></script>
      </Head> */}
      <div>
        <input
          placeholder="Axie ID"
          onChange={getInputData}
          value={inputId}
        ></input>
        <button onClick={getAxie}>Search</button>
      </div>
    </>
  );
}

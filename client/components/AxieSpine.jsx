import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";

export default function AxieSpine() {
  let spine;
  let axieID = -1;
  let oldID;

  function init() {
    const app = new PIXI.Application(600, 800, {
      backgroundColor: 0xffffff /*,  transparent: true*/,
    });
    app.view.id = "canvas";
    app.view.style.height = 480;
    app.view.style.border = "1px solid #d9d9d9";
    document.getElementById("imageLoc").appendChild(app.view);
  }

  function getAxie() {
    // oldID = axieID;
    // let axieID = parseInt($("#axieID").val());

    const baseURL = "https://assets.axieinfinity.com/axies/";
    const atlasURL = baseURL + "5678" + "/axie/axie.atlas";

    const imageURL = baseURL + "5678" + "/axie/axie.png";

    const modelURL = baseURL + "5678" + "/axie/axie.json";
    // atlasURL = baseURL + axieID + "/axie/axie.atlas";

    // imageURL = baseURL + axieID + "/axie/axie.png";

    // modelURL = baseURL + axieID + "/axie/axie.json";

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
              //use hash name instead of name from file
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

          const spineData = spineJsonParser.readSkeletonData(rawSkeletonData);

          const animation = new PIXI.spine.Spine(spineData);

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

  init();
  getAxie();
}

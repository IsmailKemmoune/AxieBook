import { AiOutlineCloseCircle } from "react-icons/ai";
import axieParts from "./axieParts";
import BugBack from "./axieParts/bug/BugBack";

export default function BodyParts({ setModalOn, parts, stats }) {
  const { hp, speed, skill, morale } = stats;
  const [eyes, ears, back, mouth, horn, tail] = parts;
  console.log("speed", speed);
  console.log(eyes.class);
  console.log(axieParts);
  return (
    <div className="bg-secondary text-white w-2/5 flex flex-col justify-evenly p-7 rounded-md mt-10 drop-shadow-lg">
      <div className="w-full flex items-center justify-between mb-5">
        <p>BODY PARTS</p>
        <AiOutlineCloseCircle
          className="pointer-cursor text-xl hover:text-delete"
          onClick={() => setModalOn(false)}
        />
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-y-5 gap-x-20 mt-10">
        <div className="w-full flex items-center">
          {axieParts[eyes.class + "Eye"]()}
          <p className="ml-2">{eyes.name}</p>
        </div>
        <div className="w-full flex items-center">
          {axieParts[ears.class + "Ear"]()}
          <p className="ml-2">{ears.name}</p>
        </div>
        <div className="w-full flex items-center">
          {axieParts[back.class + "Back"]()}
          <p className="ml-2">{back.name}</p>
        </div>
        <div className="w-full flex items-center">
          {axieParts[mouth.class + "Mouth"]()}
          <p className="ml-2">{mouth.name}</p>
        </div>
        <div className="w-full flex items-center">
          {axieParts[horn.class + "Horn"]()}
          <p className="ml-2">{horn.name}</p>
        </div>
        <div className="w-full flex items-center">
          {axieParts[tail.class + "Tail"]()}
          <p className="ml-2">{tail.name}</p>
        </div>
      </div>
    </div>
  );
}

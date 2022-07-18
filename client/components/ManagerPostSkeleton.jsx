import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const randomWidthGen = () => Math.floor(Math.random() * (90 - 40 + 1)) + 40;
const randomLinesGen = () => Math.floor(Math.random() * (7 - 3 + 1)) + 3;

export default function ManagerPostSkeleton() {
  const [titleWidth, setTitleWidth] = useState(undefined);
  const [linesEl, setLinesEl] = useState([]);

  useEffect(() => {
    let lineSize = randomLinesGen();
    let randomWidth = [];
    for (let i = 0; i < lineSize; i++) {
      randomWidth.push(randomWidthGen());
    }
    const lines = randomWidth.map((width) => (
      <div
        key={nanoid()}
        className={`bg-shades-200 h-[15px] rounded-full my-5`}
        style={{ width: `${width}%` }}
      ></div>
    ));
    setLinesEl(lines);
    setTitleWidth(randomWidthGen());
  }, []);

  return (
    <div className="bg-secondary w-[580px] m-10">
      <div className="animate-pulse">
        <div className="flex items-center p-5">
          <div className="bg-shades-100 rounded-full h-12 w-12 mr-4"></div>
          <div
            className="bg-shades-200 h-[20px] rounded-full"
            style={{ width: `${titleWidth}%` }}
          ></div>
        </div>
        <div className="flex justify-evenly py-5">
          <div className="bg-shades-200 rounded-full h-24 w-24"></div>
          <div className="bg-shades-200 rounded-full h-24 w-24"></div>
          <div className="bg-shades-200 rounded-full h-24 w-24"></div>
        </div>
        <div className="grid grid-cols-2 justify-items-center">
          <div className="bg-shades-200 w-[60%] h-[20px] my-5 rounded-full"></div>
          <div className="bg-shades-200 w-[60%] h-[20px] my-5 rounded-full"></div>
          <div className="bg-shades-200 w-[60%] h-[20px] my-5 rounded-full"></div>
          <div className="bg-shades-200 w-[60%] h-[20px] my-5 rounded-full"></div>
        </div>
        <div className="p-5">{linesEl}</div>
      </div>
    </div>
  );
}

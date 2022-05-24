import BeastIcon from "./classesIcons/BeastIcon";

export default function ManagerPostAxieImage() {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="w-48">
        <img
          src="https://assets.axieinfinity.com/axies/1235/axie/axie-full-transparent.png"
          alt="axie image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center bg-classes-beast w-fit px-3 rounded-md ">
        <BeastIcon />

        <p className="ml-3 text-white text-sm font-light tracking-widest">
          #11321128
        </p>
      </div>
    </div>
  );
}

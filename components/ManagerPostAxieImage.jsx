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
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          style={{ fill: "white" }}
        >
          <path d="M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82M12.713 2.635a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973"></path>
        </svg>
        <p className="ml-3 text-white text-sm font-light tracking-widest">
          #11321128
        </p>
      </div>
    </div>
  );
}

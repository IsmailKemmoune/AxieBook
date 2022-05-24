export default function Sidebar() {
  return (
    <div className="bg-black ">
      <div className="fixed h-full w-[300px] top-0 left-0 flex flex-col items-center justify-between">
        <div>
          <h1 className="text-white text-5xl my-6 cursor-pointer">AxieBook</h1>
          <button className="py-4 w-full my-1 text-white text-xl rounded-full hover:bg-primary">
            click
          </button>
          <button className="py-4 w-full my-1 text-white text-xl rounded-full hover:bg-primary">
            click
          </button>
          <button className="py-4 w-full my-1 text-white text-xl rounded-full hover:bg-primary">
            click
          </button>
        </div>
        <div>
          <p className="text-shades-100 p-3 font-extralight">Made by Viyen</p>
        </div>
      </div>
    </div>
  );
}

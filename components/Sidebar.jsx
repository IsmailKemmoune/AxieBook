export default function Sidebar() {
  return (
    <div className="bg-black ">
      <div className="fixed h-full w-[300px] top-0 left-0 flex flex-col items-center">
        <h1 className="text-white text-5xl my-6">Logo</h1>
        <button className="py-4 w-8/12 my-1 text-white text-xl rounded-md hover:bg-primary">
          click
        </button>
        <button className="py-4 w-8/12 my-1 text-white text-xl rounded-md hover:bg-primary">
          click
        </button>
        <button className="py-4 w-8/12 my-1 text-white text-xl rounded-md hover:bg-primary">
          click
        </button>
      </div>
    </div>
  );
}

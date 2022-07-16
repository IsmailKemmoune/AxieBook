import ManagerPostSkeleton from "../components/ManagerPostSkeleton";

export default function LoadingFeed() {
  return (
    <div className="grid grid-cols-2 relative top-[-80px] feedmd:grid-cols-0 feedmd:block w-[1322px]">
      <div className="scroll-div max-h-screen overflow-y-auto border-r-[1px] border-shades-200 feedmd:hidden h-screen">
        <div className="mt-[130px]">
          <ManagerPostSkeleton />
          <ManagerPostSkeleton />
          <ManagerPostSkeleton />
        </div>
      </div>
      <div className="scroll-div max-h-screen overflow-y-auto feedmd:hidden">
        <div className="mt-[130px]">
          <ManagerPostSkeleton />
          <ManagerPostSkeleton />
          <ManagerPostSkeleton />
        </div>
      </div>
    </div>
  );
}

import ManagerPostSkeleton from "../components/ManagerPostSkeleton";
import ScholarPostSkeleton from "../components/ScholarPostSkeleton";

export default function LoadingFeed() {
  return (
    <>
      <ManagerPostSkeleton />
      <ScholarPostSkeleton />
      <ManagerPostSkeleton />
      <ScholarPostSkeleton />
      <ManagerPostSkeleton />
    </>
  );
}

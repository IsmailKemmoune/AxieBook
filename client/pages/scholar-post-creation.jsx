import Layout from "../components/Layout";

export default function ScholarPostCreation() {
  return (
    <div className="scroll-div max-h-screen overflow-y-auto  pt-10">
      <div className="flex flex-col items-center justify-center min-w-[1322px]">
        <p className="text-white">Coming soon</p>
      </div>
    </div>
  );
}

ScholarPostCreation.getLayout = function getLayout() {
  return (
    <Layout>
      <ScholarPostCreation />
    </Layout>
  );
};

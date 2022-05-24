import BodyParts from "./BodyParts";

export default function BodyPartModal({ setModalOn }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center h-screen w-screen bg-clip-padding bg-white shadow-lg bg-opacity-20 border border-gray-200"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <BodyParts setModalOn={setModalOn} />
    </div>
  );
}

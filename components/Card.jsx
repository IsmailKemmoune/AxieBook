import AxieForm from "./AxieForm";
import AxieImage from "./AxieImage";

export default function Card({ setModalOn }) {
  return (
    <div className="card flex flex-col items-center justify-center w-3/5 bg-primary rounded-md drop-shadow-lg h-96">
      <AxieImage setModalOn={setModalOn} />
      <hr />
      <div className="h-96 pt-10">
        <AxieForm />
      </div>
    </div>
  );
}

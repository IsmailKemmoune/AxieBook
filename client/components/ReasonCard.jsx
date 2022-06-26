export default function ReasonCard({ number, title, paragraph }) {
  return (
    <div>
      <div className="w-[350px] h-[400px] mt-5 border-2 border-secondary p-5">
        <div>
          <h3 className="flex items-center text-xl">
            <div className="bg-secondary w-7 h-7 rounded-full flex items-center justify-center mr-2">
              <span className="">{number}</span>
            </div>
            {title}
          </h3>
        </div>
        <p className="mt-4 font-light leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
}

export default function AvatarCard() {
  return (
    <div className="bg-secondary w-[90%] p-3 rounded-md shadow-button mb-20">
      <div className="flex items-center">
        <div className="w-22 mr-3">
          <div className="rounded-full w-20 h-20 bg-white"></div>
        </div>
        <div>
          <h1 className="text-white text-2xl">
            Viyen <span className="text-base italic font-light">Manager</span>
          </h1>
          <p className="font-light leading-relaxed text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            dui id tellus iaculis egestas a at neque. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Aliquam sit amet mauris turpis.
          </p>
        </div>
      </div>
    </div>
  );
}

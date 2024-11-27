export default function Hero() {
  return (
    <div className="w-full aspect-video shadow rounded-[3rem] overflow-clip">
      <div className="relative size-full">
        <img
          src="/src/assets/apps.webp"
          alt="asd"
          className="absolute size-full object-cover"
        />
        <div className="absolute size-full bg-black/20 backdrop-blur"></div>
      </div>
    </div>
  );
}

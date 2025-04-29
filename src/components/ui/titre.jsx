export function Titre({ titre }) {
  return (
    <h2 className="text-3xl font-bold tracking-wider lg:text-5xl text-white uppercase relative inline-block mb-4">
      {titre}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
    </h2>
  );
}

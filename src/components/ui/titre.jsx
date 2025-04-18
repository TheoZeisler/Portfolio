export function Titre({ titre }) {
  return (
    <h2 className="font-Oxanium text-3xl font-bold tracking-wider lg:text-5xl text-textWhite uppercase relative inline-block mb-4">
      {titre}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-textWhite"></span>
    </h2>
  );
}

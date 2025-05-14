import theo from "../../assets/img/theo-zeisler.webp";

export function ImageProfil({ className }) {
  return (
    <img
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="300"
      height="340"
      className={className}
      src={theo}
      srcSet={`${theo} 300w, ${theo} 600w`}
      sizes="(max-width: 768px) 170px, 300px"
      alt="Photo de profil Théo Zeisler"
    />
  );
}

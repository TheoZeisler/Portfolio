import { Download } from "lucide-react";

export function DownloadButton({ text }) {
  return (
    <a
      href="cv-theo-zeisler-developpeur.pdf"
      download
      className="text-light text-lightGreen uppercase w-fit text-sizeText flex gap-2 px-6 py-3 border-2 border-lightGreen rounded-full text-lg font-medium hover:bg-lightGreen hover:text-bgCustom transition mt-4"
    >
      <span>{text}</span>
      <Download className="w-6 h-6" />
    </a>
  );
}

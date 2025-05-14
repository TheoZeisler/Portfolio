import { Download } from "lucide-react";

export function DownloadButton({ text }) {
  return (
    <a
      href="cv-theo-zeisler-developpeur.pdf"
      download
      className="text-lightGreen uppercase w-fit flex gap-2 px-3 sm:px-6 py-4 border-2 border-lightGreen rounded-full text-base sm:text-lg font-medium hover:bg-lightGreen hover:text-bgCustom transition items-center"
    >
      <span>{text}</span>
      <Download className="w-6 h-6" />
    </a>
  );
}

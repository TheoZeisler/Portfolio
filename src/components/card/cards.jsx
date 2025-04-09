import { FaReact, FaPhp, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiSymfony,
  SiMysql,
} from "react-icons/si";

export const icons = [
  { icon: <FaPhp />, name: "PHP" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "Javascript" },
  { icon: <SiJquery />, name: "Jquery" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiSymfony />, name: "Symfony" },
  { icon: <SiMysql />, name: "Mysql" },
  { icon: <FaGitAlt />, name: "Git" },
];

export function Cards({ icon, name }) {
  return (
    <div>
      <div className="p-4 bg-lightBg rounded-xl text-textWhite text-5xl">
        {icon}
      </div>
    </div>
  );
}

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

export function Cards(props) {
  if (props.name) {
    return (
      <div className="group h-32 max-md:h-24 max-lg:h-28">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div
            className={`absolute w-full h-full ${props.className} items-center [backface-visibility:hidden]`}
          >
            {props.icon}
          </div>
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border border-lightGreen text-lightGreen">
            {props.name}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={props.className}>{props.icon}</div>
      </div>
    );
  }
}

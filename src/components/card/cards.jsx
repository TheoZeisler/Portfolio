import React, { Suspense } from "react";

const FaReactDynamic = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaReact }))
);
const FaPhpDynamic = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPhp }))
);
const FaGitAltDynamic = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaGitAlt }))
);
const FaWordpressDynamic = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaWordpress }))
);
const SiTailwindcssDynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTailwindcss }))
);
const SiHtml5Dynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiHtml5 }))
);
const SiCss3Dynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCss3 }))
);
const SiJavascriptDynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJavascript }))
);
const SiJqueryDynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJquery }))
);
const SiSymfonyDynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiSymfony }))
);
const SiMysqlDynamic = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiMysql }))
);

// Composant de fallback pour le chargement des icônes
const IconFallback = () => (
  <div className="w-6 h-6 bg-gray-200 animate-pulse rounded"></div>
);

export const icons = [
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <FaPhpDynamic />
      </Suspense>
    ),
    name: "PHP",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiTailwindcssDynamic />
      </Suspense>
    ),
    name: "Tailwind CSS",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <FaReactDynamic />
      </Suspense>
    ),
    name: "React",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiJavascriptDynamic />
      </Suspense>
    ),
    name: "Javascript",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiJqueryDynamic />
      </Suspense>
    ),
    name: "Jquery",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiHtml5Dynamic />
      </Suspense>
    ),
    name: "HTML5",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiCss3Dynamic />
      </Suspense>
    ),
    name: "CSS3",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiSymfonyDynamic />
      </Suspense>
    ),
    name: "Symfony",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <SiMysqlDynamic />
      </Suspense>
    ),
    name: "Mysql",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <FaGitAltDynamic />
      </Suspense>
    ),
    name: "Git",
  },
  {
    icon: (
      <Suspense fallback={<IconFallback />}>
        <FaWordpressDynamic />
      </Suspense>
    ),
    name: "Wordpress",
  },
];

export const Cards = React.memo(function Cards(props) {
  if (props.name) {
    return (
      <div className="group h-32 max-md:h-24 max-lg:h-28">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div
            className={`absolute w-full h-full ${
              props.className || ""
            } items-center [backface-visibility:hidden]`}
          >
            {props.icon}
          </div>
          <div className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border border-lightGreen text-lightGreen">
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
});

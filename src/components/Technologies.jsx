import {
  RiJavaFill,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaPython, FaAws, FaGit, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiYaml,
  SiReactrouter,
  SiAxios,
  SiExpress,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiPostman,
  SiKubernetes,
} from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";

// All 21 icons
const icons = [
  { key: "java", icon: <RiJavaFill className="text-6xl text-[#f6971b]" /> },
  { key: "js", icon: <RiJavascriptFill className="text-6xl text-[#ffdf00]" /> },
  { key: "python", icon: <FaPython className="text-6xl text-[#3775a8]" /> },
  { key: "yaml", icon: <SiYaml className="text-6xl" /> },
  { key: "react", icon: <RiReactjsLine className="text-6xl text-cyan-400" /> },
  { key: "react-router", icon: <SiReactrouter className="text-6xl" /> },
  {
    key: "tailwind",
    icon: <RiTailwindCssFill className="text-6xl text-[#35bef8]" />,
  },
  { key: "axios", icon: <SiAxios className="text-6xl" /> },
  { key: "express", icon: <SiExpress className="text-6xl" /> },
  { key: "django", icon: <BiLogoDjango className="text-6xl" /> },
  { key: "flask", icon: <SiFlask className="text-6xl" /> },
  {
    key: "springboot",
    icon: <SiSpringboot className="text-6xl text-[#6db33f]" />,
  },
  { key: "mysql", icon: <TbBrandMysql className="text-6xl text-[#00638f]" /> },
  { key: "mongodb", icon: <SiMongodb className="text-6xl text-green-500" /> },
  { key: "aws", icon: <FaAws className="text-6xl" /> },
  { key: "git", icon: <FaGit className="text-6xl text-[#f54d28]" /> },
  { key: "github", icon: <FaGithub className="text-6xl" /> },
  { key: "postman", icon: <SiPostman className="text-6xl text-[#ff6c37]" /> },
  { key: "docker", icon: <FaDocker className="text-6xl text-[#00153c]" /> },
  {
    key: "kubernetes",
    icon: <SiKubernetes className="text-6xl text-[#316ce6]" />,
  },
  { key: "linux", icon: <FcLinux className="text-6xl" /> },
];

// Split into 3 rows of 7
const rows = [icons.slice(0, 7), icons.slice(7, 14), icons.slice(14, 21)];

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [4, -4],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const scrollSpeed = [18, 22, 20];

const Technologies = () => {
  return (
    <div className="relative border-b border-neutral-800 pb-24 overflow-hidden">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-col gap-16">
        {rows.map((rowIcons, rowIndex) => {
          const offsetY =
            rowIndex === 1
              ? "translate-y-4"
              : rowIndex === 2
              ? "-translate-y-1"
              : "";

          return (
            <div key={rowIndex} className="w-full overflow-hidden">
              <motion.div
                className={`flex gap-20 w-max ${offsetY}`}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: scrollSpeed[rowIndex],
                }}
              >
                {[...rowIcons, ...rowIcons].map((iconObj, i) => (
                  <motion.div
                    key={`row-${rowIndex}-${iconObj.key}-${i}`}
                    variants={iconVariants(2.5 + (i % 2))}
                    initial="initial"
                    animate="animate"
                    className="min-w-[120px] rounded-2xl bg-neutral-900 p-6 flex justify-center items-center  "
                  >
                    <div className="overflow-hidden h-[72px] flex items-center justify-center">
                      {iconObj.icon}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;

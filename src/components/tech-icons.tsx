import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiAmazonwebservices,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiR,
  SiTensorflow,
  SiPytorch,
  SiTableau,
  SiPandas,
  SiScikitlearn,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiSolidity,
  SiMui,
  SiSass,
  SiTailwindcss,
  SiMaterialdesign,
  SiFlask,
} from "react-icons/si"
import type { IconType } from "react-icons"

export interface TechIcon {
  name: string
  icon: IconType
  color: string
  delay: number
}

export const techIconsFrontend: TechIcon[] = [
  { name: "React", icon: SiReact, color: "text-cyan-400", delay: 0 },
  { name: "Angular", icon: SiAngular, color: "text-red-500", delay: 0.2 },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", delay: 0.4 },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", delay: 0.6 },
  { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500", delay: 0.8 },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", delay: 1.0 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600", delay: 1.2 },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", delay: 1.4 },
]

export const techIconsDataScience: TechIcon[] = [
  { name: "Python", icon: SiPython, color: "text-yellow-400", delay: 0 },
  { name: "R", icon: SiR, color: "text-blue-500", delay: 0.2 },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500", delay: 0.4 },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500", delay: 0.6 },
  { name: "SQL", icon: SiPostgresql, color: "text-green-500", delay: 0.8 },
  { name: "Tableau", icon: SiTableau, color: "text-blue-400", delay: 1.0 },
  { name: "Pandas", icon: SiPandas, color: "text-purple-500", delay: 1.2 },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "text-green-400", delay: 1.4 },
]

export const techIconsMap: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "text-cyan-400" },
  Angular: { icon: SiAngular, color: "text-red-500" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-500" },
  TypeScript: { icon: SiTypescript, color: "text-blue-500" },
  AWS: { icon: SiAmazonwebservices, color: "text-orange-500" },
  MongoDB: { icon: SiMongodb, color: "text-green-600" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-600" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  Python: { icon: SiPython, color: "text-yellow-400" },
  R: { icon: SiR, color: "text-blue-500" },
  TensorFlow: { icon: SiTensorflow, color: "text-orange-500" },
  PyTorch: { icon: SiPytorch, color: "text-red-500" },
  SQL: { icon: SiPostgresql, color: "text-green-500" },
  Tableau: { icon: SiTableau, color: "text-blue-400" },
  Pandas: { icon: SiPandas, color: "text-purple-500" },
  "Scikit-learn": { icon: SiScikitlearn, color: "text-green-400" },
  PHP: { icon: SiPhp, color: "text-indigo-500" },
  HTML: { icon: SiHtml5, color: "text-orange-600" },
  CSS: { icon: SiCss3, color: "text-blue-500" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-500" },
  Express: { icon: SiExpress, color: "text-gray-500" },
  Solidity: { icon: SiSolidity, color: "text-gray-600" },
  MUI: { icon: SiMui, color: "text-blue-500" },
  Sass: { icon: SiSass, color: "text-pink-500" },
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-500" },
  "Material Angular": { icon: SiMaterialdesign, color: "text-pink-600" },
  Flask: { icon: SiFlask, color: "text-gray-700" },
  NLTK: { icon: SiPython, color: "text-blue-700" },
  Transformers: { icon: SiPytorch, color: "text-yellow-600" },
  Matplotlib: { icon: SiPython, color: "text-blue-800" },
  Seaborn: { icon: SiPython, color: "text-teal-500" },
  XGBoost: { icon: SiPython, color: "text-red-600" },
  Shiny: { icon: SiR, color: "text-blue-300" },
}

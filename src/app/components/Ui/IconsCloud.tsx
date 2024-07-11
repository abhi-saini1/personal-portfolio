import IconAnimate from "./IconAnimate";
 
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "prisma",
  "git",
  "github",
  "visualstudiocode",
  "tailwindcss",
  "bootstrap",
  "figma",
  "nextdotjs",
  "framer",
  "reactbootstrap"
];
 
export function IconCloud() {
  return (
    <div className="">
      <IconAnimate iconSlugs={slugs} />
    </div>
  );
}
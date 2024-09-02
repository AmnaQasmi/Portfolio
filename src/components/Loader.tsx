import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";


export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.2s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_4s_linear_infinite] " size={120} color="#64ffda" stroke={1.25} />
      <div className="text-6xl text-primaryColor font-semibold font-mono absolute -z-10 ">AQ</div>
    </div>
  )
}

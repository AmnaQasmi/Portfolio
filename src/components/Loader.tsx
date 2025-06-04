import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import { IconCloud } from "../components/magicui/icon-cloud";


export function Loader() {
    const images = Slugs.map(
    (Slug) => `https://cdn.simpleicons.org/${Slug}/${Slug}`,
  );
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud images={images} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite] " size={120} color="#64ffda" stroke={1.25} />
      <div className="text-6xl text-primaryColor font-semibold font-mono absolute -z-10 ">AQ</div>
    </div>
  )
}

import Image from "next/image";
import HeroBanner from "./Home/HeroSection/HeroBanner";
import PopularCategories from "./Home/PopularCategories/PopularCategories";
import Divider from "./components/ui/divider";
import PopularResturants from "./Home/PopularResturants/PopularResturants";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Divider />
      <PopularCategories />
      <Divider />
      <PopularResturants />
      <Divider />
    </div>
  );
}

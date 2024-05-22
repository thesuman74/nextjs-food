import Image from "next/image";
import HeroBanner from "./Home/HeroSection/HeroBanner";
import PopularCategories from "./Home/PopularCategories/PopularCategories";
import Divider from "./components/ui/divider";
import PopularResturants from "./Home/PopularResturants/PopularResturants";
import PartnerCard from "./components/cards/PartnerCard";
import ExclusiveDeals from "./Home/ExclusiveDeals/ExclusiveDeals";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Divider />
      <ExclusiveDeals />
      <PopularCategories />
      <Divider />
      <PopularResturants />
      <Divider />
      <PartnerCard />
    </div>
  );
}

import Image from "next/image";
import HeroBanner from "./Home/HeroSection/HeroBanner";
import PopularCategories from "./Home/PopularCategories/PopularCategories";
import Divider from "./components/ui/divider";
import PopularResturants from "./Home/PopularResturants/PopularResturants";
import PartnerCard from "./components/cards/PartnerCard";
import ExclusiveDeals from "./Home/ExclusiveDeals/ExclusiveDeals";
import DownloadSection from "./Home/DownloadSection/DownloadSection";
import AnimatedCounterSection from "./components/counter/counter";
import { Dialog } from "./components/ui/dialog";
import DialogSection from "./components/Dialog/DialogSection";

export default function Home() {
  return (
    <div>
      <DialogSection />

      <HeroBanner />
      <Divider />
      <ExclusiveDeals />
      <PopularCategories />
      <Divider />
      <PopularResturants />
      <Divider />
      <DownloadSection />
      <AnimatedCounterSection />
      <Dialog />
      <PartnerCard />
    </div>
  );
}

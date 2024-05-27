import HeroBanner from "../components/Home/HeroBanner";
import PopularCategories from "../components/Home/PopularCategories";
import Divider from "@/components/ui/divider";
import PopularResturants from "../components/Home/PopularResturants";
import PartnerCard from "@/components/cards/PartnerCard";
import DownloadSection from "../components/Home/DownloadSection";
import AnimatedCounterSection from "@/components/counter/counter";
import { Dialog } from "@/components/ui/dialog";
import DialogSection from "@/components/Dialog/DialogSection";
import { ExclusiveDeals } from "../components/Home/ExclusiveDeals";

export default function Home() {
  return (
    <div>
      {/* <DialogSection /> */}

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

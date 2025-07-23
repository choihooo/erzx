import LogoSection from "./components/LogoSection";
import VisualSection from "./components/VisualSection";
import { HeroSection } from "./components/HeroSection";
import { FirstSection } from "./components/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
import { FourthSection } from "./components/FourthSection";
import { FifthSection } from "./components/FifthSection";
import { SixthSection } from "./components/SixthSection";
import { SeventhSection } from "./components/SeventhSection";
import { EighthSeciton } from "./components/EighthSeciton";
import { NinthSection } from "./components/NinthSection";
import { TenthSection } from "./components/TenthSection";
import { EleventhSection } from "./components/EleventhSection";
import { TwelfthSection } from "./components/TwelfthSection";
import { ThirteenthSection } from "./components/ThirteenthSection";

function App() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-[1000px]">
        <LogoSection />
        <VisualSection />
        <HeroSection />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSeciton />
        <NinthSection />
        <TenthSection />
        <EleventhSection />
        <TwelfthSection />
        <ThirteenthSection />
      </div>
    </div>
  );
}

export default App;

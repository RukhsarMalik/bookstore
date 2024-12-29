import AcademicSection from "./components/Academic";
import FictionSection from "./components/Fiction.Section";
import HeroSection from "./components/Hero";
import NonFictionSection from "./components/NonFiction";
import UrduSection from "./components/urdu";


export default function Home() {
  return (
    <div >
        <HeroSection/>
        <FictionSection />
        <NonFictionSection/>
        <AcademicSection/>
        <UrduSection/>
    </div>
  );
}

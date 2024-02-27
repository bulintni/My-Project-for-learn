import Image from "next/image";
import Intro from "./component/Intro"
import SectionDivider from "./component/SectionDivider"
import AboutMe from "./component/AboutMe"
import Projects from "./component/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <AboutMe />
      <Projects />
    </main>
  );
}

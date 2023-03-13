import Layout from "@/componant/Layout";
import About from "@/Sections/About";
import Explore from "@/Sections/Explore";
import Feedback from "@/Sections/Feedback";
import GetStarted from "@/Sections/GetStarted";
import Hero from "@/Sections/Hero";
import Insights from "@/Sections/Insights";
import WhatsNew from "@/Sections/WhatsNew";
import World from "@/Sections/World";


export default function Home() {
  return (
    <Layout title="Home">
    <Hero/>
        <div className="relative">
        <About/>
        <div className="gradient-03 z-0"/>
        <Explore/>
        </div>
        <div className="relative">
          <GetStarted/>
        <div className="gradient-03 z-0"/>
        <WhatsNew/>
        </div>
        <div className="relative">
          <World/>
        <div className="gradient-03 z-0"/>
        <Insights/>
        </div>
        <div className="relative">
          <Feedback/>
        <div className="gradient-03 z-0"/>
        </div>
    </Layout>
  )
}

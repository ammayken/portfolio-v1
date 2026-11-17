import { journey, profile, stack, works, services } from "../data/content";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import Journey from "../components/Journey";
import Works from "../components/Works";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="container">
            <Hero profile={profile} />
            <Divider />
            <Journey items={journey} />
            <Divider />
            <Works works={works} />
            <Divider />
            <Services services={services} />
            <Divider />
            <TechStack items={stack} />
            <Footer profile={profile} />
        </main>
    )
}
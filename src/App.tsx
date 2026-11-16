import { journey, notes, profile, stack, works } from "./data/content";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Journey from "./components/Journey";
import Works from "./components/Works";
import Notes from "./components/Notes";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="container">
      <Hero profile={profile} />
      <Divider />
      <Journey items={journey} />
      <Divider />
      <Works works={works} />
      <Divider />
      <Notes notes={notes} />
      <Divider />
      <TechStack items={stack} />
      <Footer profile={profile} />
    </main>
  );
}

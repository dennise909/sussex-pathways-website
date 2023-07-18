import { NavBar } from "./components/Navbar";
import { HomeCarousel } from "./components/Carousel";
import { HomeBanner } from "./components/HomeBanner";
import { VideoBanner } from "./components/VideoBanner";
export default function Home() {
  return (
    <section>
      <NavBar />
      <HomeCarousel />
      <HomeBanner />
      <VideoBanner />
    </section>
  );
}

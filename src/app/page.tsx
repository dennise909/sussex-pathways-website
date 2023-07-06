import { NavBar } from "./Components/Navbar";
import { HomeCarousel } from "./Components/Carousel";
import { HomeBanner } from "./Components/HomeBanner";
import { VideoBanner } from "./Components/VideoBanner";
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

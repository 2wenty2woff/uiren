import { Data } from "./Data";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Mission } from "./Mission";
import { Navbar } from "./Navbar";
import { Process } from "./Process";
import { Reviews } from "./Reviews";
import { Special } from "./Special";
import { Subjects } from "./Subjects";

export const Ru = () => {
  return (
    <>
      <Navbar />
      
      <Intro />
      <Data />
      <Mission />
      <Special />
      <Subjects />
      <Process />
      <FAQ />
      <Reviews />

      <Footer />
    </>
  );
};

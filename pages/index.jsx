import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Reviews from "@/components/Reviews/Reviews";
import Robot from "@/components/Robot/Robot";
import Head from "next/head";
import OurService from "./../components/OurService/OurService";
import Connect from "./../components/Connect/Connect";
import Menu from "@/components/Menu/Menu";
import Statistics from "@/components/Statistics/Statistics";

export default function Home() {
  return (
    <>
      <Head>
        <title>partfolio M.Aziz</title>
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Robot />
      <OurService />
      <Statistics />
      <Projects />
      <Reviews />
      <Connect />
      <Menu />
    </>
  );
}

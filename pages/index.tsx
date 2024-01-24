import { Inter, Poppins } from "next/font/google";
import Navbar from "./Layout/Navbar";
import { useEffect, useState } from "react";
import Projects from "@/components/pages/main/Projects";
import HomePortifle from "@/components/pages/main/Home";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {

  

  return (
    <main className={`main ${poppins.className}`}>
      <Navbar />
      <HomePortfolio />
    </main>
  );
}

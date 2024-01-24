import { Poppins } from "next/font/google";
import Main from "@/components/pages/Main";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`main ${poppins.className}`}>
      <Main />
    </main>
  );
}

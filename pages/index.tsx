import {Inter,Poppins} from "next/font/google"
const inter = Poppins({
   subsets: ["latin"] ,
   weight:['300','400','500','600','700','800','900']
  
  });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  );
}

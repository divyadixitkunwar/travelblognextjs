import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { handlesignout } from "../lib/action";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({subsets:['latin'],
                   weight:['400','700'],
                   display:'swap'})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={` min-h-svh flex flex-col ${inter.className}`}>
        <header className="flex flex-row px-2 border-b py-2 border-black ">
          <div className={`mr-auto ${montserrat.className} font-black text-2xl`}><Link href='/' >CityForward</Link></div>
          <div className="flex flex-row gap-8 ">
            <Link href='/login'className="hover:underline" >Login</Link>
            <form action={handlesignout}  >
              <button className=" bg-green-900 rounded-md px-2 text-white hover:bg-green-700">Sign out </button>
           </form>
        </div>

        </header>
        <main className="flex-grow ">
          {children}
        </main>
        <footer className="bg-black text-white mt-auto h-32 flex flex-col justify-center items-center">
          <h1 className={`${montserrat.className} text-3xl  font-bold`}>CityForward</h1>
          <p className="py-4"> "Embark on a Journey to Explore the Cities of Tomorrow and Uncover Their Wonders!"</p>
          <hr className=" bg-white w-4/5"/>
          <div>
            <img src="\facebook (1).svg"/>
          </div>
     </footer>
      </body>
      </SessionProvider>
    </html>
  );
}

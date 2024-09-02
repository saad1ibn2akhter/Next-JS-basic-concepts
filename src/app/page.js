import Heading from "@/Components/heading";
import { Navbar } from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        hello nextjs 
      </h1>
      <Heading/>
      {/* <Navbar /> */}
    </main>
  );
}

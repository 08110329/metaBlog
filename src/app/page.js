import { Head } from "@/components/Head";
import { Nav } from "@/components/Nav";
import { Last } from "@/components/Last";
export default function Home() {
  return (
    <div className="w-screen">
      <Head />
      <Nav />
      <Last />
    </div>
  );
}

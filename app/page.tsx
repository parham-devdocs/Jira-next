import Image from "next/image";
import Logo from "../public/logo2.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function Home() {
  return (
    <div className=" min-h-screen">
      <section className=" container mx-auto py-20 text-center">
        <h1 className=" text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title  pb-6 flex flex-col gap-5 ">
          Streamline Your Workflow
          <br />
          <div>
            with
            <span className=" bg-blue-600 rounded-md ml-5 text-white tracking-wide  ">
              {" "}
              Jira
            </span>
          </div>
        </h1>
        <p className=" text-xl">
          Empower your team with our intutive project management solution
        </p>
        <div className=" mt-16">
          <Link href={"/onboarding"}>
            <Button className=" mr-4" size={"lg"}>
              Get Started <ChevronRight size={18} />
            </Button>
          </Link>
          <Link href={"#features"}>
            <Button size={"lg"} variant={"outline"}>
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

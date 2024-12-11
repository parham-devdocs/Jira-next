
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import CompanyCarousel from "@/components/CompanyCarousel";
import Accordion from "@/components/Accordion";

const features = [
  {
    title: "Intutive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use kanban boards ",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning ",
    description:
      "Plan and manage sprints effectively ,ensuring your team stays focused on delivering value ",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reports",
    description:
      "Gain insights into your teams's performance with detailed ,customizable reports and analytics ",
    icon: BarChart,
  },
];
export default function Home() {
  return (
    <div className=" min-h-screen">
      {/* Hero */}
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
      {/* Cards */}
      <section className=" bg-gray-900 py-20 px-5" id="features">
        <div>
          <h3 className=" text-center text-3xl font-bold mb-12">
            Key Features
          </h3>
          <div className="flex container gap-6 mx-auto flex-wrap justify-center ">
            {features.map((feature) => {
              return (
                <Card
                  key={feature.title}
                  className="w-[400px] py-2 bg-gray-800"
                >
                  <CardContent>
                    <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                    <h4 className=" text-xl gradient-title mb-4">
                      {feature.title}
                    </h4>
                    <h5>{feature.description}</h5>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Carousel */}
      <section className="  py-20">
        <div>
          <h3 className=" text-center text-3xl font-bold mb-12">
            Trusted by industry leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>
      <section className="  py-20 bg-gray-900 px-5">
        <div className=" container mx-auto">
          <h3 className=" text-center text-3xl font-bold mb-12">
           Frequently asked questions
          </h3>
          <Accordion/>
        </div>
      </section>
    </div>
  );
}

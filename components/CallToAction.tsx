import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className=" flex flex-col text-center gap-8 dotted-background py-20   my-16">
      <h2 className=" text-3xl font-bold">Ready To Transform Your Workflow?</h2>
      <h4 className=" text-xl">
        join thousands of teams using jira to streamline their projects and
        boost productivity{" "}
      </h4>
      <Link href={"/"}>
        <Button>
          Start For Free <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default CallToAction;

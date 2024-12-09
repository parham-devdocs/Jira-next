import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center animate-fadeIn">
      <SignUp />
    </div>
  );
};

export default SignUpPage;

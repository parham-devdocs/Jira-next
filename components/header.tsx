import { SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import Logo from "../public/logo.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import UserMenu from './userMenu';
const Header = () => {
  return (
    <header className=" mb-10 container mx-auto">
      <nav className=" flex  justify-between items-center px-4 py-6">
        <Image
          src={Logo}
          width={50}
          height={50}
          alt="logo"
          className=" h-10 w-auto object-contain rounded-md"
        />

        <div className=" flex items-center justify-between gap-4">
          <Link href="/project/create"> <Button variant={"destructive"}> <span>create project</span><PenBox size={16}/></Button></Link>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/onboarding"}>
            <Button variant={"outline"}>Login</Button>
            </SignInButton>
          </SignedOut>
        <UserMenu/>
        </div>
      </nav>
    </header>
  );
}

export default Header

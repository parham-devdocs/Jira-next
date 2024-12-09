import { SignedOut, SignInButton, UserButton,SignedIn, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
      <div className=" mb-10">
          <SignOutButton/>
      <SignedOut>
        <SignInButton/>
          </SignedOut>
          <SignedIn>
              <UserButton/>
          </SignedIn>
    </div>
  );
}

export default Header

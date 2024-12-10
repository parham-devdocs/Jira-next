"use client"
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
const UserMenu = () => {


  return (
  
      <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }}>
          <UserButton.MenuItems>
              <UserButton.Link label='My organisation' labelIcon={<ChartNoAxesGantt size={15}/>} href="/onboarding"/>
          </UserButton.MenuItems>
          <UserButton.Action label='manageAccount'></UserButton.Action>
      </UserButton>

  )
}

export default UserMenu

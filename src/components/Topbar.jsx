// components/topbar.tsx
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"

export function Topbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  const onLogout = async () => {
    logout()
    await navigate("/signin")

  }


  return (
    <div className="flex items-center justify-between p-6 h-[48px] mb-[20px]">
      <p className="font-semibold text-2xl text-[#1B212D]">Dashboard</p>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <img src="/search.svg" alt="searchIcon" className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <img src="/notification.svg" alt="notification" className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </Button>
        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-2 h-auto bg-[#FAFAFA] text-black rounded-full hover:bg-gray-200">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.svg" alt="User" />
                {/* <AvatarFallback>MN</AvatarFallback> */}
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-[#1B212D]">{user?.user?.fullName}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-gray-50 border-gray-200"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal bg-gray-50">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.user?.fullName}</p>
                <p className="text-xs leading-none text-gray-500">
                  {user?.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem className="bg-gray-50 hover:bg-[#FAFAFA] text-black cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-gray-50 hover:bg-[#FAFAFA] text-black cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem className="bg-gray-50 hover:bg-[#FAFAFA] text-black cursor-pointer" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span >Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
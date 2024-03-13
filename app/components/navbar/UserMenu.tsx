import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import { ChevronDown } from 'lucide-react';

 import React from 'react'

 
 
 function UserMenu() {
   return (
     <div className=" flex space-x-4">
        {/* <CustomDropdownMenu> */}

        
        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Products</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 

        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Solutions</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 

        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Reources</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 

        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Documentation</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 

        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Pricing</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 

        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer flex items-center space-x-1  hover:bg-gray-100 focus:bg-gray-100">
                <span>Contact</span> 
                <ChevronDown size={15} />
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1 ">
                    <DropdownMenuLabel className="block px-4 py-2 text-gray-700">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-gray-200" />
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Team</DropdownMenuItem>
                    <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Subscription</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu> 
     </div>
   )
 }

 
 
 export default UserMenu
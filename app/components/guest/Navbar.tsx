"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import logo from "/assets/images-footer_lambdatest_logo.svg";

const features = [
  {
    title: "Live Testing",
    description:
      "Perform live interactive cross browser testing of your public or locally hosted websites and web apps on 3000+ real mobile and desktop browsers running on real operating system.",
    link: "https://www.lambdatest.com/online-browser-testing",
    bg: "/assets/background.svg",
  },
  // ... other features
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenu>
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Image
            src={logo}
            alt="Logo"
            height={26}
            width={147}
            className="px2"
          />

          {/* Hamburger Icon */}
          <button
            className="lg:hidden focus:outline-none order-2 ml-auto"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu for large screens */}
          <NavigationMenuList className="hidden lg:flex items-center space-x-8 flex-grow order-1">
            {["Platform", "Enterprise", "Resources", "Developers"].map(
              (item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Secure, Reliable, and High Performance Test
                              Execution Cloud Built For Scale
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {features.map((feature, idx) => (
                        <ListItem
                          key={idx}
                          href={feature.link}
                          title={feature.title}
                        >
                          {feature.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
            <NavigationMenuItem>
              <Button variant="link">Pricing</Button>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Action Buttons for large screens */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 order-3">
            <Button variant="link">Login</Button>
            <Button
              className="hover:border-gradient-start hover:border-gradient-end text-gray-800 text-sm font-medium px-4 py-2 rounded-md transition"
              variant="outline"
            >
              Book a Demo
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm lg:text-base font-medium px-4 py-2 rounded-md">
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Navigation Menu for medium and small screens */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <NavigationMenuList className="flex flex-col space-y-4">
              {["Platform", "Enterprise", "Resources", "Developers"].map(
                (item, idx) => (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-full md:w-[400px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Secure, Reliable, and High Performance Test
                                Execution Cloud Built For Scale
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components that you can
                                copy and paste into your apps. Accessible.
                                Customizable. Open Source.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {features.map((feature, idx) => (
                          <ListItem
                            key={idx}
                            href={feature.link}
                            title={feature.title}
                          >
                            {feature.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
              <NavigationMenuItem>
                <Button variant="link">Pricing</Button>
              </NavigationMenuItem>
              {/* Action Buttons for small and medium screens */}
              <div className="flex flex-col space-y-4 mt-4">
                <Button variant="link">Login</Button>
                <Button
                  className="hover:border-gradient-start hover:border-gradient-end text-gray-800 text-sm font-medium px-4 py-2 rounded-md transition"
                  variant="outline"
                >
                  Book a Demo
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-md">
                  Get Started Free
                </Button>
              </div>
            </NavigationMenuList>
          </div>
        )}
      </div>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

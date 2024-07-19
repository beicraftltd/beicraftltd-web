import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./../../components/ui/sheets";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import logo from "/assets/images-footer_lambdatest_logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const mobileItems = ["Platform", "Enterprise", "Resources", "Developers"];
const features = [
  {
    title: "Feature 1",
    description: "Description for Feature 1",
    link: "/feature1",
  },
  {
    title: "Feature 2",
    description: "Description for Feature 2",
    link: "/feature2",
  },
  // Add more features as needed
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Logo */}
      <div className="lg:hidden flex items-center justify-between w-full lg:w-auto">
        <Image src={logo} alt="Logo" height={26} width={147} className="px-2" />
      </div>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        <div className="lg:hidden mt-4">
          <NavigationMenu>
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
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}
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

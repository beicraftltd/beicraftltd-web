import MainNav from "./MainNav";
import MobileNav from "./mobileNav";

export default function SiteHeader() {
  return (
    <header className="w-full border-b sticky top-0 bg-white z-50 shadow-md">
      <div className="flex h-14 items-center px-4 ">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}

import Container from "../navbar/Container";
import GetStarted from "../navbar/GetStarted";
import Logo from "../navbar/Logo";
import SearchBox from "../navbar/SearchBox";
import SignIn from "../navbar/SignIn";
import ToggleDarkMode from "../navbar/ToggleDarkMode";

import UserMenu from "../navbar/UserMenu";

export default function NavbarSection() {
  return (
    <div className=" fixed w-full bg-white dark:bg-black " >
      <div className=" py-4  dark:shadow-sm dark:border-b-[1px] justify-center w-full">
        <Container >
          <div className=" flex flex-row items-center gap-10 ">
            <Logo />
            <div>
              <UserMenu />
            </div>
            
            
            <SearchBox placeholder={"Search"}/>
            <SignIn />
            <ToggleDarkMode />
            <GetStarted/>
            
          </div>
        </Container>
      </div>
      
    </div>
  )
}

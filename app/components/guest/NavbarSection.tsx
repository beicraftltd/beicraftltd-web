import Container from "../navbar/Container";
import Logo from "../navbar/Logo";
import UserMenu from "../navbar/UserMenu";

export default function NavbarSection() {
  return (
    <div className=" fixed w-full bg-white shadow-sm">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div className=" flex flex-row items-center gap-10">
            <Logo/>
            <UserMenu/>
            {/* <Search> */}
            {/* <SignIn> */}
            {/* <GetStarted> */}
          </div>
        </Container>
      </div>
      
    </div>
  )
}

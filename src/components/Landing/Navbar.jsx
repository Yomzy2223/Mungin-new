import React, { useState } from "react";
import Link from "next/link";
import logo from "../../assets/images/logo-white-bg.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import MobileSidebarCont from "../containers/MobileSidebarConst";
import MobileSidebar from "../sidebar/MobileSidebar";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      {/* image container */}
      <Image src={logo} alt="MUNGIN" width={150} height={40} className="ml-2" />

      {/* desktop display */}
      <HeaderRight className="w-3/5  justify-between md:flex hidden lg:flex ">
        {/* link container */}
        <NavList onClick={() => scrollTo("work-progress")}>Process</NavList>
        <NavList
          className="whitespace-nowrap"
          onClick={() => scrollTo("our-mission")}
        >
          Our Mission
        </NavList>
        <Link href="/register">
          <div style={{ color: "#375a1a" }}>Join Us</div>
        </Link>
        <Link href={"/database"}>
          <NavButton className=" bg-[#17233C] p-3 text-white px-4 rounded-md whitespace-nowrap">
            Check Our Database
          </NavButton>
        </Link>
      </HeaderRight>

      {/* hamburger menu */}
      <MenuIcon className="sm:block absolute right-10 md:hidden ">
        {<AiOutlineMenu size={24} onClick={() => setOpen(true)} />}
      </MenuIcon>

      <MobileSidebarCont anchor="right" open={open} setOpen={setOpen}>
        <MobileSidebar setOpen={setOpen} />
      </MobileSidebarCont>
    </HeaderContainer>
  );
};

export default Navbar;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-inline: clamp(20px, 6vw, 100px);
  margin-top: 24px;
  align-items: center;
`;

export const NavList = styled.p`
  cursor: pointer;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  gap: 16px;

  font-family: "Noto Sans Batak";

  a {
    text-decoration: none;
    color: inherit;
    padding: 5px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  display: flex;
  background-color: #17233c;
  padding: 12px 16px;
  color: #ffffff;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-family: "Noto Sans Batak", sans-serif;
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

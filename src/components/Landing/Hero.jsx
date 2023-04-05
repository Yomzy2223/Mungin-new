import React from "react";
import green from "../../assets/images/Union.png";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Hero = () => {
  return (
    // parent container
    <Container className="flex md:flex-row justify-between pb-6 flex-col sm:items-center">
      {/* left container */}
      <Left className="md:w-1/2 flex flex-col mt-12 md:text-left text-center w-full">
        <h1 className="text-[#313131] text-4xl font-bold">
          Growing <span style={{ color: "#83BF4F" }}>Agricultural</span> Data
          For immediate Impact
        </h1>
        <p className="mt-7 text-[#565656]">
          We transform data to actionable insights that power decision making
          across the agricultural value chain. Delivering innovative Agtech
          Solutions to improve agricultural productivity in Nigeria is our
          ethos.{" "}
        </p>
        {/* button and link */}
        <Buttons className="space-x-6 mt-10">
          <Link href={"/database"}>
            <HeroButton>Search Our Database</HeroButton>
          </Link>
          <Link href={"/register"}>
            <button style={JoinButtonStyles}>Join Us</button>
          </Link>
        </Buttons>
      </Left>

      {/* right container */}
      <Right className="mt-6 pt-10 mb-8  ">
        <Image src={green} alt="right" />
      </Right>
    </Container>
  );
};

export default Hero;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    flex-flow: column;
    align-items: stretch;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 12px;
  width: 50%;

  h1 {
    font-size: clamp(28px, 3vw, 36px);
    font-weight: 700;
    color: #313131;

    span {
      font-family: "QumpellkaNo12", sans-serif;
      font-size: clamp(25px, 2.7vw, 30px);
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 16px;

  a {
    text-decoration: none;
  }
`;

export const HeroButton = styled.button`
  display: flex;
  background-color: #17233c;
  padding: 12px 16px;
  color: #ffffff;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-family: "Noto Sans Batak";
`;

export const Right = styled.div`
  margin: 24px 0 32px;
  padding: 40px 0 0;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const JoinButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  color: "#375A1A",
  fontSize: "clamp(14px, 1.5vw, 16px",
};

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo-footer.png";
import styled from "styled-components";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // parent container
    <div style={{ backgroundColor: "#333333" }}>
      <FooterContainer>
        <Top>
          <Image src={logo} className="mb-6" alt="mungin" />
        </Top>
        <Body>
          <SubContainer>
            <h3 className="mb-4 text-xl font-semibold">
              The Agricultural Intelligence Platform
            </h3>
            <Details className="mb-4 font-light" $hide>
              We build software that empowers agricultural services. Effectively
              integrating their data, decision, and operation.
            </Details>
            {/* <Details className="text-sm">
              © 2021 Mungin. All rights reserved
            </Details> */}
          </SubContainer>
          <SubContainer $hide>
            <h3 className="mb-4 text-xl font-semibold">About us</h3>
            <Details onClick={() => scrollTo("our-mission")}>
              Our Mission
            </Details>
            <Details onClick={() => scrollTo("work-progress")}>
              Working process
            </Details>
          </SubContainer>
          <SubContainer>
            <h3 className="font-bold text-center pb-3 md:w-1/2 md:text-left">
              Contact Us
            </h3>
            <Details>
              <MdEmail />
              hello@mungin.africa
              {/* <input
                className="rounded-l-sm pl-2 pr-10 py-2"
                type="email"
                placeholder="Email Address"
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-[#83BF4F] rounded-r-sm outline-[#83BF4F] text-white"
              >
                <BsArrowRightShort size={35} />
              </button> */}
            </Details>
            <Details>
              <MdCall />
              (+234) 8154084233, 8034485468
            </Details>
            <Details>
              <MdLocationOn /> 371 Borno Way, Yaba, Lagos, Nigeria
            </Details>
          </SubContainer>
        </Body>
      </FooterContainer>
    </div>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  margin-inline: clamp(40px, 6vw, 120px);
  padding-block: 20px 40px;
  color: #fff;
  font-family: "Noto Sans Batak";

  @media screen and (max-width: 890px) {
    h3 {
      text-align: left;
    }
  }
`;

export const Top = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;

  > div {
    max-width: 300px;
  }

  input {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  @media screen and (max-width: 890px) {
    display: ${({ $hide }) => $hide && "none"};
  }
`;

export const Details = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 300;
  margin-block: 8px;
  font-size: clamp(14px, 1.4vw, 15px);
  color: #ffffffce;
  cursor: pointer;

  @media screen and (max-width: 890px) {
    display: ${({ $hide }) => $hide && "none"};
    text-align: left;
  }
`;

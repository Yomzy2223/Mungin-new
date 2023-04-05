import React from "react";
import {
  pointerBottom,
  pointerMid,
  pointerTop,
  tree,
} from "../../../assets/images";
import PointerTemplate from "./PointerTemplate";
import {
  Body,
  Left,
  MissionContainer,
  pointerStyleLeft,
  pointerStyleRight,
  Right,
  TitleContainer,
  TreeImg,
} from "./styled";
import Title from "./Title";

const Mission = () => {
  return (
    <MissionContainer className="flex justify-center mb-8" id="our-mission">
      <Title />
      <Body>
        <Left>
          <PointerTemplate
            pointer={pointerTop}
            text="Plant Sciences"
            position="left"
            top={true}
          />
          <PointerTemplate
            pointer={pointerMid}
            text="Soil and Water"
            position="left"
            pointerStyle={pointerStyleLeft}
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Post-harvest and Processing"
            position="left"
            bottom={true}
          />
        </Left>
        <TreeImg src={tree} alt="" />

        <Right>
          <PointerTemplate
            pointer={pointerTop}
            text="Plant Protection"
            position="right"
            top={true}
          />
          <PointerTemplate
            pointer={pointerMid}
            text="Animal Sciences"
            position="right"
            pointerStyle={pointerStyleRight}
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Agricultural Engineering"
            position="right"
            bottom={true}
          />
        </Right>
      </Body>
      {/* <img src={mission} alt="mission" /> */}
    </MissionContainer>
  );
};

export default Mission;

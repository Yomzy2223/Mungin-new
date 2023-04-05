import React from "react";
import WorkProgressCard from "../../cards/workProgressCard";
import Wave1 from "../../../assets/icons/Wave1.svg";
import Wave2 from "../../../assets/icons/Wave2.svg";
import { Container, Main, Spira2, Spiral, Top } from "./styled";

const WorkProgress = () => {
  return (
    <Container id="work-progress">
      <Top>
        <p>THE NEEDS OF TOMORROW</p>
        <p>Delivered Today</p>
      </Top>
      <Main>
        <WorkProgressCard
          title="Unlock Data"
          text="Combining an uncompromising engineering mindset with an unwavering focus on data sourcing and aggregation making ready data that meets the highest level of integrity and reliability available for analysis."
        />
        <Spiral>
          <img src={Wave1} alt="" />
        </Spiral>
        <WorkProgressCard
          title="Activate Analysis"
          text="Leveraging advanced analytics we sift through chaotic data into one comprehensive and flexible structure, creating personalized real-time dashboards that make managing agricultural business insights easier."
        />
        <Spira2>
          <img src={Wave2} alt="" />
        </Spira2>
        <WorkProgressCard
          title="Accelerate Value"
          text="By providing insights-as-a-service: Actionable agricultural and business insights out of data. With good data and the right technology, people and institutions in Nigeria today will be able to solve the hard problems and change the country for the better."
        />
      </Main>
    </Container>
  );
};

export default WorkProgress;

import React from "react";
import Header from "../components/Header";

import styled from "styled-components";
import CardList from "../components/Card/CardList";

const Title = styled.h1`
  color: green;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Title>AWESOME PROJECT</Title>
      <div>
        <Header />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Home;

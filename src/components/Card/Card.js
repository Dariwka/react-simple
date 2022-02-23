import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
display: inline-block;
  height: 200px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  
`
const Wrapper = styled.div`
overflow-wrap: break-word;


`
const ProjectName = styled.h2`
text-align: center;
`
const ProjectLink = styled.a`
padding: 10px;
`


const Card = ({ name, url, rating }) => {
  return (
    <CardContainer>
        <Wrapper>
      <ProjectName>{name}</ProjectName>
      <ProjectLink>{url}</ProjectLink>
      <span>{rating}</span>
      </Wrapper>
    </CardContainer>
  );
};

export default Card;

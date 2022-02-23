import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

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

display: flex;
  flex-direction: column;



`
const ProjectName = styled.h2`
flex: 1;
text-align: center;
`
const ProjectLink = styled.a`
overflow-wrap: break-word;
padding: 10px;
`
const RatingView = styled.span`
flex: 1;
margin: 20px;
`

const Card = ({ name, url, rating }) => {
  return (
    <CardContainer>
        <Wrapper>
      <ProjectName>{name}</ProjectName>
      <ProjectLink>{url}</ProjectLink>
      <RatingView><FaStar/>{rating}</RatingView>
      </Wrapper>
    </CardContainer>
  );
};

export default Card;

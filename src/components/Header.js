import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonSection = styled.div``;

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ButtonSection>
            <button>+ ADD</button>
          </ButtonSection>
          <div className="filterSection">
            <select>
              <option>one</option>
              <option>two</option>
              <option>three</option>
              <option>four</option>
              <option>five</option>
            </select>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

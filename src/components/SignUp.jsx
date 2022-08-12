/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";


const SignUp = () => {


  return (
    <>
      <GlobalStyle/>
      <StWrapper>
        SignUp Page
      </StWrapper>
    </>
  );
};

export default SignUp;


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
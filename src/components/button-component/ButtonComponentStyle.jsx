import styled, { css } from "styled-components";

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const isGoogleSignInStyle = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const bttn =css`
background-color: black;
color: white;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const getButtonStyles = (props)=>{
    if(props.isGoogleSignInBtn){
        return isGoogleSignInStyle
    }
    return props.inverted ? invertedButtonStyle : bttn
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

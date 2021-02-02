import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f5f5f5",
  fontColor: "#101010",
  
};

export const darkTheme = {
  body: "#303030",
  fontColor: "#FBFAF5",

 
  
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
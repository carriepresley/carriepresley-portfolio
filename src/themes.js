import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f6e9e0",
  fontColor: "#101010",
  
};

export const darkTheme = {
  body: "#000000",
  fontColor: "#FBFAF5",

 
  
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
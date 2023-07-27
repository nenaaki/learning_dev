import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Button : React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

export default Button;
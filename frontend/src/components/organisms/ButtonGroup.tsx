import { ButtonGroup as ChakraButtonGroup } from "@chakra-ui/react";

const ButtonGroup = ({ children, ...props }) => {
  return <ChakraButtonGroup {...props}>{children}</ChakraButtonGroup>;
};

export default ButtonGroup;
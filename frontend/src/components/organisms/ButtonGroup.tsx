import { ButtonGroup as ChakraButtonGroup } from "@chakra-ui/react";
import { ProductListProps } from "./ProductList";
import { PropsWithChildren } from "react";

const ButtonGroup: React.FC<PropsWithChildren<{name: string}>> = ({ children, ...props }) => {
  return <ChakraButtonGroup>{children}</ChakraButtonGroup>
};

export default ButtonGroup;
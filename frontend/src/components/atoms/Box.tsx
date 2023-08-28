import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type DivideBoxProps = {
    value: string;
    title: string;
  } & BoxProps;


export const DivideBox : React.FC<PropsWithChildren<DivideBoxProps>> = ({ children, ...props }) => {
  return <Box {...props}> {props.title} : {props.value} {children}</Box>;
};

export default DivideBox;
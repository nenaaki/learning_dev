import { ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Button from "../atoms/Button";

const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({children, ...props}) => {
  return (
    <Button colorScheme="blue" {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
import { Box, Text} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type TitleProps = {
  };

export const Title : React.FC<PropsWithChildren<TitleProps>> = (props) => {
  return (
    <Box width='100%' bg='Green'>
      <Text color='white'>
        {props.children}
      </Text>
    </Box>
  );
};

export default Title;
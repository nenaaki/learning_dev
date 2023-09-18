import { Box, HStack } from "@chakra-ui/react"



const Sample : React.FC<> = (props) => {
    const boxSize = {
        w: "40px",
        h: "40px"
    }
    return(
       <HStack>
           <Box>hoge</Box>
           <Box sx={boxSize} bgColor="blue">huga</Box>
           <Box sx={boxSize} bgColor="yellow">piyo</Box>
       </HStack>
    )
}
export default Sample

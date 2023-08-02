import { Text, HStack } from "@chakra-ui/react";

export type UserIdProps = {
  userId: string;
};

export const UserId: React.FC<UserIdProps> = (props) => {
  const { userId } = props;
  return (
    <HStack>
      <Text fontSize='2xs'>Id: </Text>
      <Text fontSize='2xl'>{userId}</Text>
    </HStack>
  );
};
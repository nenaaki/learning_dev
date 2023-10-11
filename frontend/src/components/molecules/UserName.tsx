import { Text, HStack } from "@chakra-ui/react";

export type UserNameProps = {
  userName: string;
};

export const UserName: React.FC<UserNameProps> = (props) => {
  const { userName } = props;
  return (
    <HStack>
      <Text fontSize='2xs'>ユーザー名: </Text>
      <Text fontSize='2xl'>{userName}</Text>
    </HStack>
  );
};
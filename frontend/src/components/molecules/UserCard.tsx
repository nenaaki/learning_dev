import { HStack } from "@chakra-ui/react";
import { UserIdProps } from "./UserId";
import { UserName, UserNameProps } from "./UserName";

export type UserProps = UserIdProps & UserNameProps;

export const UserId: React.FC<UserProps> = (props) => {
  return (
    <HStack>
      <UserId {...props}/>
      <UserName {...props}/>
    </HStack>
  );
};
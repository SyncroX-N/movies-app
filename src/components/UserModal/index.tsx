import * as React from "react";
import Text from "../Text";
import { TextContainer, UserModalContainer } from "./style";

interface UserModalProps {}

const UserModal: React.FunctionComponent<UserModalProps> = ({}) => {
  return (
    <UserModalContainer>
      <TextContainer>
        <Text fontSize={12}>Favourite Movies</Text>
      </TextContainer>
      <TextContainer>
        <Text fontSize={12}>Account</Text>
      </TextContainer>
      <TextContainer>
        <Text fontSize={12}>Log Out</Text>
      </TextContainer>
    </UserModalContainer>
  );
};

export default UserModal;

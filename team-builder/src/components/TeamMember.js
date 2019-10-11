import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
  background: lightblue;
`;

const Button = styled.button`
  width: fit-content;
`;

const TeamMember = props => {
  return (
    <Card>
      Name: {props.firstName} {props.lastName}
      <br />
      Email: {props.email}
      <br />
      Role: {props.role}
      <Button
        id={props.id}
        onClick={event => {
          props.setMemberToEdit(event.target.id);
        }}
      >
        Edit
      </Button>
    </Card>
  );
};

export default TeamMember;

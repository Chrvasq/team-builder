import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
  background: lightblue;
`;

const TeamMember = props => {
  return (
    <Card>
      Name: {props.firstName} {props.lastName}
      <br />
      Email: {props.email}
      <br />
      Role: {props.role}
    </Card>
  );
};

export default TeamMember;

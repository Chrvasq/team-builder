import React from "react";

const TeamMember = props => {
  return (
    <>
      Name: {props.firstName} {props.lastName}
      <br />
      Email: {props.email}
      <br />
      Role: {props.role}
    </>
  );
};

export default TeamMember;

import React from "react";
import TeamMember from "./TeamMember";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const TeamMemberList = props => {
  if (!props) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {props.teamMemberList.map((teamMember, index) => (
        <div key={index}>
          <TeamMember
            id={index}
            firstName={teamMember.firstName}
            lastName={teamMember.lastName}
            email={teamMember.email}
            role={teamMember.role}
            setMemberToEdit={props.setMemberToEdit}
          />
        </div>
      ))}
    </Container>
  );
};

export default TeamMemberList;

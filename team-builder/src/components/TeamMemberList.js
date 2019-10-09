import React from "react";
import TeamMember from "./TeamMember";

const TeamMemberList = props => {
  if (!props) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Team Member List</h1>
      {props.teamMemberList.map((teamMember, index) => (
        <div key={index}>
          <TeamMember
            key={index}
            firstName={teamMember.firstName}
            lastName={teamMember.lastName}
            email={teamMember.email}
            role={teamMember.role}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;

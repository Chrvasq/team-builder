import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TeamMemberList from "./components/TeamMemberList";

function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addTeamMember = teamMember => {
    const newTeamMember = {
      firstName: teamMember.firstName,
      lastName: teamMember.lastName,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMemberList([...teamMemberList, newTeamMember]);
  };

  const editMember = teamMember => {
    const newList = teamMemberList.map((member, index) => {
      if (Number(memberToEdit) === index) {
        member = {
          ...member,
          firstName: teamMember.firstName,
          lastName: teamMember.lastName,
          email: teamMember.email,
          role: teamMember.role
        };
        return member;
      }
      return member;
    });
    setTeamMemberList(newList);
  };

  return (
    <div className="App">
      <Form
        addTeamMemberFn={addTeamMember}
        editMemberFn={editMember}
        memberToEdit={memberToEdit}
        teamMemberList={teamMemberList}
        setMemberToEdit={setMemberToEdit}
      />
      <h1>Team Member List</h1>
      <TeamMemberList
        teamMemberList={teamMemberList}
        setMemberToEdit={setMemberToEdit}
      />
    </div>
  );
}

export default App;

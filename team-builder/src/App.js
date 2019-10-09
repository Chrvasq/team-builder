import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TeamMemberList from "./components/TeamMemberList";

function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);

  const addTeamMember = teamMember => {
    const newTeamMember = {
      firstName: teamMember.firstName,
      lastName: teamMember.lastName,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMemberList([...teamMemberList, newTeamMember]);
  };

  return (
    <div className="App">
      <Form addTeamMemberFn={addTeamMember} />
      <TeamMemberList teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;

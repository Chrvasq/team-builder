import React, { useState } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addTeamMemberFn(teamMember);
    setTeamMember({ firstName: "", lastName: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fnameInput">First Name</label>
      <input
        id="fnameInput"
        value={teamMember.firstName}
        onChange={handleChange}
        maxLength="15"
        placeholder="First Name"
        name="firstName"
        type="text"
      />
      <label htmlFor="lnameInput">Last Name</label>
      <input
        id="lnameInput"
        value={teamMember.lastName}
        onChange={handleChange}
        maxLength="15"
        placeholder="Last Name"
        name="lastName"
        type="text"
      />
      <label htmlFor="emailInput">Email</label>
      <input
        id="emailInput"
        value={teamMember.email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
        type="text"
      />
      <label htmlFor="roleSelect">Role</label>
      <select
        id="roleSelect"
        value={teamMember.role}
        onChange={handleChange}
        name="role"
      >
        <option />
        <option>Front-End Engineer</option>
        <option>Back-End Engineer</option>
        <option>UX Designer</option>
        <option>Product Manager</option>
      </select>
      <button type="submit">Submit Team Member</button>
    </form>
  );
};

export default Form;

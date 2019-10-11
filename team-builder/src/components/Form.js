import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  background: lightblue;
`;

const InputField = styled.input`
  background: papayawhip;
`;

const Button = styled.button`
  margin-top: 10px;
  background: blue;
  color: white;
  width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
    if (props.memberToEdit) {
      props.editMemberFn(teamMember);
      setTeamMember({ firstName: "", lastName: "", email: "", role: "" });
      props.setMemberToEdit("");
    } else {
      props.addTeamMemberFn(teamMember);
      setTeamMember({ firstName: "", lastName: "", email: "", role: "" });
    }
  };

  useEffect(() => {
    if (props.memberToEdit) {
      setTeamMember(props.teamMemberList[props.memberToEdit]);
    }
  }, [props.memberToEdit]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="fnameInput">First Name</label>
      <InputField
        id="fnameInput"
        value={teamMember.firstName}
        onChange={handleChange}
        maxLength="15"
        placeholder="First Name"
        name="firstName"
        type="text"
      />
      <label htmlFor="lnameInput">Last Name</label>
      <InputField
        id="lnameInput"
        value={teamMember.lastName}
        onChange={handleChange}
        maxLength="15"
        placeholder="Last Name"
        name="lastName"
        type="text"
      />
      <label htmlFor="emailInput">Email</label>
      <InputField
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
      <ButtonContainer>
        <Button type="submit">Submit Team Member</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;

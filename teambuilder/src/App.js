import React, { useState } from "react";
import './App.css';
import TeamForm from "./form";
import TeamMember from "./TeamMember";

const initialFormValues = {
   name: "",
   email: "",
   role: "",
}
function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

    return (
    <div className="App">
      <h1>Team Members</h1>

      <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

    {teamMembers.map((teamMember) => {
      return <TeamMember key= {teamMember.id} details= {teamMember} />
    })}
    </div>
  );
}

export default App;

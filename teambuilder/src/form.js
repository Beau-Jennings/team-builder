import React from "react";

export default function TeamForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();

        submit();
    }

    return (
        <form className= "form-container" onSubmit={onSubmit}>
            <div classname = "form-group inputs">
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your Name"
                    maxLength="36"
                    value={values.name}
                    onChange={onChange}
                  />
                </label>

                <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      maxlength="36"
                      value={values.email}
                      onChange={onChange}
                    />
                </label>

                <label>
                    Role
                    <select name ="role" value={values.role} onChange={onChange}>
                      <option value="">Select Engineer Role</option>
                      <option value="Backend Engineer">Backend Engineer</option>
                      <option value="Frontend Engineer">Frontend Engineer</option>
                      <option value="Design Engineer">Design Engineer</option>                   
                    </select>
                </label>

                <div className= "submit">
                    <button>Submit Form</button>
                </div>
            </div>
        </form>
    )
}
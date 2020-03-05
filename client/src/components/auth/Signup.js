import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends React.Component {
  onSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <button>sign up</button>
      </form>
    );
  }
}

export default reduxForm({ form: "signup" })(Signup);

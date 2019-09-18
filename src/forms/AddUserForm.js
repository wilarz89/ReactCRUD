import React from "react";
import { Formik, Form, Field } from "formik";
import { injectState } from "freactal";
import { wrapComponentWithState, usersData } from "../state";

const AddUserForm = injectState(({ state, effects }) => {
  const onSubmit = (data) => {
      console.log(state)
      return effects.setUsers(data);
    }

  return (
    <Formik
      initialValues={{ name: "", username: "" }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <label>Name</label>
          <Field type="text" name="name" />
          <label>Username</label>
          <Field type="text" name="username" />
          <button type="submit">Add new user</button>
        </Form>
      )}
    </Formik>
  );
});

export default AddUserForm;

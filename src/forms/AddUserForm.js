import React from "react";
import { Formik, Form, Field } from "formik";
import { injectState } from "freactal";
import { wrapComponentWithState } from "../state";

const AddUserForm = injectState(({ state, effects }) => {
  const onSubmit = () => effects.setUsers(state.user);

  // CRUD operations
  // const addUser = user => {
  // 	user.id = users.length + 1
  // 	setUsers([ ...users, user ])
  // }
  return (
    <Formik
      initialValues={{ name: "", username: "" }}
      onSubmit={values => {
          console.log("submitting", values);
      }}
    >
        {({ handleSubmit, handleChange, values }) => (
      <Form onSubmit={handleSubmit}>
        <label>Name</label>
        <Field type="text" name="name" />
        <label>Username</label>
        <Field type="text" name="username" />
        <button>Add new user</button>
      </Form>
        )}
    </Formik>
        
  );
});

export default AddUserForm;

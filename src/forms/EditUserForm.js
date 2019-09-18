import React from "react";
import { Formik, Form, Field } from "formik";
import { injectState } from "freactal";
import { wrapComponentWithState } from "../state";

export const EditUserForm = injectState(({ state, effects }) => {
  const onSubmit = () => effects.setCurrentUser(state.user);
  const onCLick = () => effects.setEditing(state.edit);

  return (
    <Formik
      initialValues={{ name: "", username: "" }}
      onSubmit={values => {
        console.log("submitting", values);
        // CRUD operations
        const addUser = usersData => {
          let id = usersData.length + 1;
         let  user={id,values}
         usersData.push(user)
        };
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <label>Name</label>
          <Field type="text" name="name" />
          <label>Username</label>
          <Field type="text" name="username" />
          <button>Edit user</button>
        <button
          onClick={() => effects.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </button>        </Form>
      )}
    </Formik>
  );
});

export default EditUserForm;

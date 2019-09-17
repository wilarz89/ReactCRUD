import React from "react";
import { Formik, Form, Field } from "formik";
import { injectState } from "freactal";
import { wrapComponentWithState } from "../state";

const EditUserForm = injectState(({ state, effects }) => {
  const onSubmit = () => effects.setCurrentUser(state.user);
  const onCLick = () => effects.setEditing(state.edit);

  return (
    <Formik
      initialValues={{ name: "", username: "" }}
      onSubmit={event => {
        const handleInputChange = event => {
          const { name, value } = event.target;
        };
      }}
    >
      <Form>
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
        </button>
      </Form>
    </Formik>
  );
});

export default EditUserForm;

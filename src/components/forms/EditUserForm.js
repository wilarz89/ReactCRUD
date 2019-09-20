import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';

export const EditUserForm = injectState(({ state, effects }) => {
    const onSubmit = data => {
        console.log(state);
        return effects.setCurrentUser(data);
    };
    const onCLick = data => {
        return effects.setEditing(data);
    };

    return (
        <Formik
            initialValues={{ name: '', username: '' }}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, handleEdit, handleChange, values }) => (
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
                    </button>{' '}
                </Form>
            )}
        </Formik>
    );
});

export default EditUserForm;

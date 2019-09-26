import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';
import { Redirect } from 'react-router-dom';

const AddUserForm = injectState(({ state, effects }) => {
    const onSubmit = data => {
        if (data.name !== '' || data.username !== '') {
            effects.setUsers(data);
            console.log('redirect');
            return <Redirect to="/list" />;
        }
    };

    return (
        <Formik
            initialValues={{ name: '', username: '' }}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, values }) => (
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

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';
import { Redirect } from 'react-router-dom';

export const DeleteUserForm = injectState(
    ({ state, effects, match }) => {
        let { usersData } = state;
        console.log(usersData);
        usersData = usersData[match.params.id - 1];

        const onSubmit = data => {
            if (data.name !== '' || data.username !== '') {
                effects.handleDelete(data);
                console.log('redirect');
                return <Redirect to="/list" />;
            }
        };
        return (
            <Formik
                initialValues={{
                    name: usersData.name,
                    username: usersData.username,
                    id: usersData.id,
                }}
                onSubmit={onSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <Field type="text" name="name" />
                        <label>Username</label>
                        <Field type="text" name="username" />
                        {/* <Link to="/list"> */}
                        <button type="submit">Delete user</button>
                        {/* </Link> */}

                        <button
                            onSubmit={() => effects.setEditing(false)}
                            className="button muted-button"
                            type="button"
                        >
                            Cancel
                        </button>
                    </Form>
                )}
            </Formik>
        );
    },
);

export default DeleteUserForm;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';
import { Redirect } from 'react-router-dom';
export const EditUserForm = injectState(
    ({ state, effects, match }) => {
        console.log(match);
        let { usersData } = state;
        console.log(usersData);
        usersData = usersData[match.params.id - 1];

        const onSubmit = data => {
            if (data.name !== '' || data.username !== '') {
                effects.handleEdit(data);
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
                        <button type="submit">Edit user</button>

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

export default EditUserForm;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';
import { usersData } from '../../state';

export const EditUserForm = injectState(
    ({ state, effects, match }) => {
        let userNum = match.params.id;
        let user = usersData.find(user => user.id === userNum);

        const onSubmit = data => {
            return effects.handleEdit(data);
        };

        return (
            <Formik
                initialValues={{
                    name: user.name,
                    username: user.username,
                    id: userNum,
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
                        <button type="button">Delete user</button>
                    </Form>
                )}
            </Formik>
        );
    },
);

export default EditUserForm;

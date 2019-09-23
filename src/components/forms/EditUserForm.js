import React from 'react';
import { Formik, Form, Field } from 'formik';
import { injectState } from 'freactal';
import { usersData } from '../../state';

export const EditUserForm = injectState(
    ({ state, effects, match }) => {
        let userNum = match.params.id;
        let user = usersData.find(user => user.id === userNum);

        const onEdit = data => {
            return effects.handleEdit(data);
        };

        return (
            <Formik
                initialValues={{
                    name: user.name,
                    username: user.username,
                }}
                onSubmit={onEdit}
            >
                {({
                    handleSubmit,
                    handleEdit,
                    handleChange,
                    values,
                }) => (
                    <Form onEdit={handleSubmit}>
                        <label>Name</label>
                        <Field type="text" name="name" />
                        <label>Username</label>
                        <Field type="text" name="username" />
                        <button>Edit user</button>
                        <button
                            onClick={() => effects.setEditing(false)}
                            className="button muted-button"
                            type="submit"
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

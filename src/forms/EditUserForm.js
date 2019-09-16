import React, { useState, useEffect } from 'react'
import {Formik,Form,Field} from 'formik'


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  return (
      <Formik
      initialValues={{ name: '', username: '' }}
      onSubmit={event=>{
        const handleInputChange = event => {
            const { name, value } = event.target
        
            setUser({ ...user, [name]: value })
          }
        }
    }>
    <Form>
      <label>Name</label>
      <Field type="text" name="name" />
      <label>Username</label>
      <Field type="text" name="username" />
      <button>Add user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </Form>
    </Formik>
  )
}

export default EditUserForm

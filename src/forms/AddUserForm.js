import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)



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
      <button>Add new user</button>
    </Form>
    </Formik>
  )
}

export default AddUserForm
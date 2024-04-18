import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const LoginSchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(15, 'Name must be at most 15 characters'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters')
})

const Login = () => {
  // step 1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      name: '',
      password: ''
    },

    /*onSubmit: (values, {resetForm}) =>{
      console.log(values)
      enqueueSnackbar('Signup successfully', {varient: 'success'})
      resetForm()

    },*/
    onSubmit: async(values,action) => {
      console.log(values);
      const res=await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('Login successful', {varient: 'success'})
      }else {
        enqueueSnackbar('Login failed', {varient:'error'})

      }
    },
    validationSchema: LoginSchema
  })
    return (
        <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                      {/* step2: handling when submit */ }
                        <form onSubmit={loginForm.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.name && loginForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                            id="name"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.name}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                            id="password"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.password} />
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default Login
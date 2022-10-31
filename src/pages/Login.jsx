import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../Images/login.png';
import { Button , Form, FormGroup} from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config';
import { toast } from 'react-toastify';


const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const navigate=useNavigate()

const SignInAs = async (e) =>{
  e.preventDefault()
  setLoading(true)
  try{
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      email, 
      password
      );
      const user = userCredential.user;
      console.log(user)
      setLoading(false)
      toast.success('successfully logged in')
      navigate('/checkout')
  

  }catch(error){
    setLoading(false)
    toast.error(error.message)
  }
}

  return (
    <Helmet title="Login">
      <section>
        <div className="container">
          <div className="row">
          <div className="col-lg-6 block_img">
              <div className='Img'>
                <img src={ loginImg } alt="loginImg" />
              </div>
            </div>
           {
            loading? (<div className="col-lg-12 text-center">
              <h5 className='fw-bold'>Loading.....</h5>
              </div>
              ) : (

              <div className="col-lg-6 m-auto text-center">
              <h3 className='fw-bold fs-4 mb-4'>National seller</h3>

              <Form className='auth__form 'onSubmit={SignInAs}>
                <FormGroup className=" form__group">
                  <label htmlFor="">Email Adress</label>
                  <input type="email" placeholder='Email Adress' value = {email} onChange={e =>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className=" form__group">
                  <label htmlFor="">Password</label>
                  <input type="password" placeholder='Password'value = {password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>
                <Button type="submit" className='buy__ btn auth__btn'>Login</Button>
                <hr></hr>
                <p>Don't have an account ? {" "}<Link className='lien-sign' to ='/signinas'>Sign Up</Link></p>
              </Form>
            </div>
            

            ) }
            
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Login
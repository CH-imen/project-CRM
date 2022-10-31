import React, {useEffect, useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { Button , Form, FormGroup} from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

import { setDoc, doc } from 'firebase/firestore';
import {auth} from '../firebase.config'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {storage} from '../firebase.config'
import { db } from '../firebase.config';

import {toast} from 'react-toastify'

import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../context/AuthContext';


const SignInAs =  () => {

//sign with google
const {googleSignIn, user} = UserAuth();

const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn();
    }catch(error){
      console.log(error);
    }
};



//and-sign with google


const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [file, setFile] = useState(null);
const [loading, setLoading]=useState(false);

const navigate = useNavigate()

const signinas = async(e)=>{
  e.preventDefault();
  setLoading(true);
  try{
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      );
    const user = userCredential.user;
    const storageRef = ref(storage, `images/${ Date.now() + username}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on((error)=>{
      toast.error(error.message)
    }, ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then
      (async(downloadURL)=>{
        //update user profile
        await updateProfile(user,{
          displayName:username,
          photoURL: downloadURL,
        });

        //store user data in firestore database
        await setDoc(doc(db,'users',user.uid), {
          uid:user.uid,
          displayName:username,
          email,
          photoURL:downloadURL,
        });
      });
    });

    setLoading(false)
    toast.success('Account created')
    navigate('/login')
  }catch(error){
    setLoading(false)
    toast.error('something went wrong');
  }
};


  return (
    <Helmet title="Sign In As">
      <section>
        <div className="container">
          <div className="row">
          <div className="col-lg-6 sign">
            <p className='bg-sign'>Imporve your products and 
                    be a part of this company 
                    Take your chance.</p>
          </div>
              {
                loading? (<div className="col-lg-12 text-center">
                  <h5 className='fw-bold'>loading...</h5>:

                </div>):(
                              <div className="col-lg-6 m-auto text-center">
                                <h3 className='fw-bold mb-4'>New user Registration</h3>
                                 
                                  <div className="max-w-[240px] m-auto py-4 d-flex justify-content-center" onClick={handleGoogleSignIn}>
                                    <GoogleButton/>
                                  </div>
                                <Form className='auth__form' onSubmit={signinas}>
                  
                                <FormGroup className=" form__group">
                                  <label>UserName</label>
                                    <input type="text" placeholder='Username' value = {username} onChange={e =>setUsername(e.target.value)}/>
                                  </FormGroup>
                                <FormGroup className=" form__group">
                                <label>Email Adress</label>
                                    <input type="email" placeholder='Email Adress' value = {email} onChange={e =>setEmail(e.target.value)}/>
                                  </FormGroup>
                        
                                  <FormGroup className=" form__group">
                                  <label>Password</label>
                                    <input type="password" placeholder='Password'value = {password} onChange={e=>setPassword(e.target.value)}/>
                                  </FormGroup>
                  
                                  <FormGroup className=" form__group">
                                  <label>choose image</label>
                                    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                                  </FormGroup>
                  
                                  <Button type="submit" className='buy__ btn auth__btn'>Create an account</Button>
                                  <p>Already have an account ? {" "}<Link to ='/login'>Login</Link></p>
                                </Form>
                              </div>
                )
              }
              
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default SignInAs
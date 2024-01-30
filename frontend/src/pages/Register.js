import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  
    const options={
        position:"bottom-center",
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true, 
        draggable: true, 
        progress: undefined,
      }

    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const handleChange=(event)=>{
        const {name,value}=event.target
        setValues({...values,[name]:value})
    }

    const handelSubmit=(event)=>{
        event.preventDefault()
        try{
            handleValidation({
                password:values.password,
                confirmPassword:values.confirmPassword
            })
            axios.post()
        }catch(error){
            console.log("ERROR:",error)
        }
    }

    const handleValidation=(event)=>{
        const {password,confirmPassword}=event;
        console.log(password)
        console.log("called")
        console.log(confirmPassword)
        if(password!==confirmPassword)
        {
            toast.error("Password and Confirm Password Must be same",options)
        }
        if(password.lenght()<8)
        {
            toast.error("Password Must be greater than 8 Characters",options)
        }
    }

    return (
        <>
            <FormContainer>
                <form onSubmit={(event)=>handelSubmit(event)}>
                <div className='brand'>
                    {/* <img src={Logo} alt="Logo" /> */}
                    <h1>Login</h1>
                </div>
                <input type="text" placeholder='Username' name="username" onChange={e=>handleChange(e)}/>
                <input type="email" placeholder='abc@email.com' name="mail" onChange={e=>handleChange(e)}/>
                <input type="password" placeholder='Password' name="password" onChange={e=>handleChange(e)}/>
                <input type="password" placeholder='Confirm Password' name="password" onChange={e=>handleChange(e)}/>
                <button type="submit">Create User</button>
                <span>
                    Already have an account ? <Link to="/login">Login</Link>
                </span>
                </form>
            </FormContainer>
            <ToastContainer/>
        </>
    )
}

const FormContainer=styled.div`
    height: 100vh;
    width: 100 vw;
    display: flex;//
    flex-direction: column;//
    justify-content: center;//
    gap: 1rem;
    align-items: center;//
    background-color: #131324;
    .brand {
      display: flex;
      align-items:center;
      gap: 1rem;
      justify-content:center;
      img{
        height: 5rem;
      }
      h1{
        color:white;
        text-transform: uppercase;
      }
    }
    form{
      display:flex;
      flex-direction: column;
      gap:2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
      input{
        background-color:transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width:100%;
        font-size: 1rem;
        &:focus{
          border: 0.1rem solid #997af0;
          outline: none;//
        }
      }
      button{
        background-color: #997af0;
        color:white;
        padding: 1rem 2rem;
        border:none;
        font-weight: bold;
        cursor:pointer;
        border-readius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover{
          background-color: #4e0eff;
        }
      }
      span{
        color: white;
        text-transform: uppercase;
        a{
          color:#420eff;
          text-decoration:none;
          font-weigth:bold;
        }        
      }
    }
`;
export default Register;

import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Form_page() {
  const [values,setValues]=useState({
    Name:"",
    Email:"",
    Phone:"",
    Education:[""],
    WorkExperinence:[""],
    PersonalProjects:[""],
    Skills:[""],
    GitHub:"",
    LinkedIn:"",
    Achievements:[""],
  })

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/v1/users/form");
        setValues(data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };

    fetchData();
  },[])

  const handleOnChange=(event)=>{
    console.log(event)
    const {name,value}=event.target
    setValues({...values,
      [name]:value
    })
  }

  const handleOnSubmit=async(event)=>{
    event.preventDefault();
    try{
      await axios.put("URL",values)
    }catch(error){console.log("ERROR:",error)}
  }

  return (
    <div>
      <FormContainer>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="Name" value={values.Name} onChange={handleOnChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="Email" value={values.Email} onChange={handleOnChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="Phone" value={values.Phone} onChange={handleOnChange} />
          </div>
          <div>
            <label>GitHub</label>
            <input type="text" name="GitHub" value={values.GitHub} onChange={handleOnChange} />
          </div>
          <div>
            <label>LinkedIn</label>
            <input type="text" name="LinkedIn" value={values.LinkedIn} onChange={handleOnChange} />
          </div>
          {/* <div>
            <label>Achievements</label>
            <input type="text" name="Achievements" value={values.Achievements} onChange={handleOnChange} />
          </div> */}
          
          {/* <div><input>Education</input></div>
          <div><input>Work Experience</input></div>
          <div><input>Personal Projects</input></div>
          <div><input>Skills</input></div> */}
          
          <button onClick={handleOnSubmit}>Submit</button>
        </form>        
      </FormContainer>
    </div>
  );
}

/* Define CSS styles for the FormContainer */
const FormContainer = styled.div`
  width: 50%; /* Adjust width as needed */
  margin: 0 auto; /* Center the form container horizontally */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;


/* Define CSS styles for the form elements */
form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
`;

export default Form_page;


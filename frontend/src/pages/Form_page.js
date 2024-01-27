import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Form_page() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("URL-backend-for-form-data", formData);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </FormContainer>
    </div>
  )
}

const FormContainer=styled.div``

export default Form_page

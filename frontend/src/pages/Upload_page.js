import React, {useRef,useState} from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Upload_page() {
  const navigate =useNavigate() 
  const [file,setFile]=useState(null)
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click(); 
  };  
  const handleFile = (event) =>{
    setFile(event.target.files[0])
  };
  
  const handleOnClick= async()=>{
    if(file){
      const formData=new FormData()
      formData.append('file',file)
      // console.log(formData)
      try{
        await axios.post("http://localhost:8000/api/v1/users/submit",formData)
        navigate("/form")
      }catch(error){
        console.log("ERROR:",error)
      }
    }
  }

  return (
    <UploadSection>
      <div>
        <Dotted onClick={handleIconClick}>
          <FontAwesomeIcon icon={faCloudArrowUp} />
          <h5>Upload Resume</h5>
        </Dotted>
        <input type="file"  accept=".pdf" onChange={handleFile} ref={fileInputRef}/>
        <button onClick={handleOnClick}>Upload</button>
      </div>
    </UploadSection>
  )
}

const UploadSection=styled.div`
{

}
`;
const Dotted=styled.div`
{

}
`;

export default Upload_page
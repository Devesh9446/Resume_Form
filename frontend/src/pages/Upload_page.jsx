import React, {useRef} from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Upload_page() {
  const navigate =useNavigate() 

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click(); 
  };  

  const handleOnClick= async(file)=>{
    if(file){
      const formData=new FormData()
      formData.append('file',file)
      try{
          await axios.post("URL-backend",formData)
        navigate("/form-link")
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
        <input type="file" />
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
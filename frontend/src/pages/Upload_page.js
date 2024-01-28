import React, {useRef,useState} from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const options={
    position:"bottom-center",
    autoClose: 3000, 
    hideProgressBar: false, 
    closeOnClick: true, 
    pauseOnHover: true, 
    draggable: true, 
    progress: undefined,
  }
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
    else{
      toast.warn("Please select a file to upload.",options);
    }
  }

  return (
    <div>
      <UploadSection>
        <div className="second">
          <Dotted onClick={handleIconClick}>
            <FontAwesomeIcon icon={faCloudArrowUp} />
            <h5>Upload Resume</h5>
          </Dotted>
          <input type="file"  accept=".pdf" onChange={handleFile} ref={fileInputRef}/>
          <button onClick={handleOnClick}>Upload</button>
        </div>
      </UploadSection>
      <ToastContainer />
    </div>
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
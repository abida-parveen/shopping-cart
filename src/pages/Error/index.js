import React from 'react'
import CustomButton from '../../components/common/CustomButton';
import './error.css'

const Error = () => {
  return (
    <div className="error_page">
      <img src={require("../../assets/images/error.png")} alt="error" />
      <h1>404 Error!<br/>Page not found.</h1>
      <CustomButton onClick={() => window.history.back()}>Go Back</CustomButton>
    </div>
  );
}

export default Error
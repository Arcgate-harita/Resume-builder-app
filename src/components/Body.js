import React from 'react'
import styles from "../components/Body.css";
import Builder from '../components/Builder';


function Body() {

    const sections = {
      basicInfo: "Basic Info",
      workExp: "Work Experience",
      project: "Projects",
      education: "Education",
      achievement: "Achievements",
      summary: "Summary",
             other: "Skills",
   };
  return (       
     <div className='container'>        
       <p className='headings'>Resume Builder</p>
         
<div className= {styles.main}>
<Builder  sections={sections}/>
 </div>
     </div>
    
  ) }

 export default Body

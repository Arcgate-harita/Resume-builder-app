import '../components/print.css';
import React, { useRef } from 'react';
import {
    AtSign,
    GitHub,
    Linkedin,
    MapPin,
    Phone,
} from "react-feather";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



function Resume(props) {
  const { formData } = props;

  const resumeRef = useRef(null);

  const downloadPdf = () => {
    // Capture the resume content as an image using html2canvas
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Create a PDF document using jsPDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust width and height as needed

      // Download the PDF
      pdf.save('resume.pdf');
    });
  };

    return (
      <div className="resume-container">
      <div ref={resumeRef} className="resume">
          <div className="row">
            
                  <div className="basic-info">
                      <p className='name'>{formData.basicInfo.firstName} {formData.basicInfo.lastName}</p>
                      <p className='title'>{formData.basicInfo.title}</p>
                  </div>
          </div>
              <div className="row">
                <div className='column'>
                  <div className='info'>
                      <p className='contact'>CONTACT</p>
                      <p className='email'><AtSign />{formData.basicInfo.email}</p>
                      <p className='address'> <MapPin /> {formData.basicInfo.address}</p>
                      <p className='number'>  <Phone />{formData.basicInfo.phoneNumber}</p>
                      <p className='link1'> <Linkedin /> {formData.basicInfo.linkedinLink}</p>
                      <p className='link2'><GitHub />{formData.basicInfo.githubLink}</p>
                  </div>
                </div>
         

              <div className='column'>
                  <div className="Objective">
                      <p className='objective-info'>PROFILE</p>
                      <p className='objective'>{formData.summary.objective}</p>
                  </div>
              </div>
          </div>

          <div className="row">
              
              <div className="column">
                  <div className="Education">
                      <p className='education-info'>EDUCATION</p>
                      <p className='degree'>{formData.education.degree}</p>
                      <p className='school'>{formData.education.schoolName}</p>
                      <p className='date'>{formData.education.startDate} {formData.education.endDate}</p>
                      <p className='score'>{formData.education.gradeScore}</p>
                  </div>
              </div>

              <div className="column">
                  <div className="work-exp">
                      <p className='exp-info'>WORK EXPERIENCE</p>
                      <p className='job'>{formData.workExp.jobTitle}</p>
                      <p className='company'>{formData.workExp.companyName}</p>
                      <p className='start'>{formData.workExp.startDate} {formData.workExp.endDate}</p>
                      <p className='description'>{formData.workExp.description}</p>
                  </div>
              </div>

          </div>

          <div className="row">

          <div className="column">
                  <div className='skill-border'>
                      <div className='Skills'>
                          <p className='skill-info'>SKILLS</p>
                          <p className='skills'>{formData.other.skill1}</p>
                          <p className='skills'>{formData.other.skill2}</p>
                          <p className='skills'>{formData.other.skill3}</p>
                          <p className='skills'>{formData.other.skill4}</p>
                          <p className='skills'>{formData.other.skill5}</p>
                          <p className='skills'>{formData.other.skill6}</p>
                      </div>
                  </div>
              </div>

              <div className="column">
                  <div className="Projects">
                      <p className='project-info'>PROJECT</p>
                      <p className='title1'> {formData.project.title}</p>
                      <p className='overview'>{formData.project.overview}</p>
                      <p className='deployed'>{formData.project.deployedLink}</p>
                      <p className='date'>{formData.project.startDate} {formData.project.endDate}</p>
                      <p className='description' >{formData.project.description}</p>
                  </div>
              </div>
              
          </div>

          <div className="row">
              <div className="column">
                  <div className="Achievement">
                      <p className='achievement-info'>ACHIEVEMENTS</p>
                      <p className='achievements'>{formData.achievement.achievement1}</p>
                      <p className='achievements'>{formData.achievement.achievement2}</p>
                      <p className='achievements'>{formData.achievement.achievement3}</p>
                      <p className='achievements'>{formData.achievement.achievement4}</p>
                      <p className='achievements'>{formData.achievement.achievement5}</p>
                      <p className='achievements'>{formData.achievement.achievement6}</p>
                  </div>
              </div>
          </div>
      </div>
      <button onClick={downloadPdf}>Download PDF</button>
  </div>
  
     );
}

 export default Resume;

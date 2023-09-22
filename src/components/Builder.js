import React, { useState } from 'react'
import InputField from './InputField';
import './Builder.css';
import Resume from './Resume';


function Builder(props) {
    // State to store the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const sections = props.sections

    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const sectionClassName = "section";
    const activeClassName = "active";

    const [formData, setFormData] = useState({
        basicInfo: {
            title: '',
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            linkedinLink: '',
            githubLink: '',
        },
        workExp: {
            jobTitle: '',
            companyName: '',
            startDate: '',
            endDate: '',
            description: '',
        },
        project: {
            title: '',
            overview: '',
            deployedLink: '',
            githubLink: '',
            description: '',
        },
        education: {
            degree: '',
            schoolName: '',
            startDate: '',
            endDate: '',
            gradeScore: '',
        },
        achievement: {
            achievements: ['', '', '', '', '', ''],
        },
        summary: {
            objective: '',
        },
        other: {
            skills: ['', '', '', '', '', ''],
        },
    });
    const handleInputChange = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    }


    const saveData = () => {
        // Create an array to store all the form data
        const dataArray = [];
        Object.keys(formData).forEach((sectionKey) => {
            const sectionData = formData[sectionKey];
            const sectionName = sections[sectionKey];
            dataArray.push({ section: sectionName, data: sectionData });
        });

        // Log the array to the console
        console.log(dataArray);
    };



    const workExpBody = (
        <div className='detail1'>
        
            <div className='row'>
                <InputField
                    label="Job Title"
                    placeholder="As Frontend developer"
                    value={formData.workExp.jobTitle}
                    handleInputChange={(value) =>
                        handleInputChange("workExp", "jobTitle", value)
                    }
                />
                <InputField
                    label="Company Name"
                    placeholder="Enter company name "
                    value={formData.workExp.companyName}
                    handleInputChange={(value) =>
                        handleInputChange("workExp", "companyName", value)
                    }
                />
            </div>
            <div className='row1'>
                <InputField
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={formData.workExp.startDate}
                    handleInputChange={(value) =>
                        handleInputChange("workExp", "startDate", value)
                    }
                />
                <InputField
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={formData.workExp.endDate}
                    handleInputChange={(value) =>
                        handleInputChange("workExp", "endDate", value)
                    }
                />
            </div>

            <div className='column'>
                <label>Description</label>
                <InputField
                    textarea="Line 1"
                    value={formData.workExp.description}
                    handleInputChange={(value) =>
                        handleInputChange("workExp", "description", value)
                    }
                />
            </div>

        </div>


    );


    const projectBody = (
        <div className='detail3'>
       
            <div className='row'>
                <InputField
                    label="Title"
                    placeholder="Enter project name"
                    value={formData.project.title}
                    handleInputChange={(value) =>
                        handleInputChange("project", "title", value)
                    }
                />

                <InputField
                    label="Overview"
                    placeholder="Enter basic overview of project"
                    value={formData.project.overview}
                    handleInputChange={(value) =>
                        handleInputChange("project", "overview", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    label="Deployed Link"
                    placeholder="Enter deployed link of project"
                    value={formData.project.deployedLink}
                    handleInputChange={(value) =>
                        handleInputChange("project", "deployedLink", value)
                    }
                />
                <InputField
                    label="Github Link"
                    placeholder="Enter github link of project"
                    value={formData.project.githubLink}
                    handleInputChange={(value) =>
                        handleInputChange("project", "githubLink", value)
                    }
                />
            </div>
            <div className='column'>
                <label>Description</label>
                <InputField
                    textarea="Line 1"
                    value={formData.project.description}
                    handleInputChange={(value) =>
                        handleInputChange("project", "description", value)
                    }
                />
            </div>
            
        </div>
    );


    const educationBody = (
        <div className='detail2'>
        
            <div className='row'>
                <InputField
                    label="Degree"
                    placeholder="Enter Degree/Course"
                    value={formData.education.degree}
                    handleInputChange={(value) =>
                        handleInputChange("education", "degree", value)
                    }
                />

                <InputField
                    label="College/School Name"

                    placeholder="Enter name of college/school"
                    value={formData.education.schoolName}
                    handleInputChange={(value) =>
                        handleInputChange("education", "schoolName", value)
                    }

                />
            </div>
            <div className='row2'>
                <InputField
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={formData.education.startDate}
                    handleInputChange={(value) =>
                        handleInputChange("education", "startDate", value)
                    }

                />
                <InputField
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={formData.education.endDate}
                    handleInputChange={(value) =>
                        handleInputChange("education", "endDate", value)
                    }

                />
            </div>
            <div className='column'>
                <label>Grade/Score</label>
                <InputField
                    placeholder="Enter score/grade"
                    value={formData.education.gradeScore}
                    handleInputChange={(value) =>
                        handleInputChange("education", "gradeScore", value)
                    }
                />
            </div>
       
        </div>
    );


    const basicInfoBody = (
        <div className='detail'>
            <div className='title'>
                <InputField
                    label="Title"
                    placeholder="Your Title"
                    value={formData.basicInfo.title}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "title", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    label="First Name"
                    placeholder="Enter your first name"
                    value={formData.basicInfo.firstName}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "firstName", value)
                    }
                />
                <InputField
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={formData.basicInfo.lastName}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "lastName", value)
                    }

                />
                <InputField
                    label="Address"

                    placeholder="Enter your Address"
                    value={formData.basicInfo.address}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "address", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    label="Email"

                    placeholder="Enter your email"
                    value={formData.basicInfo.email}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "email", value)
                    }
                />
                <InputField
                    label="Phone Number"

                    placeholder="Enter your phone number"
                    value={formData.basicInfo.phoneNumber}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "phoneNumber", value)
                    }
                />
                <InputField
                    label="Date of Birth"

                    placeholder="Enter your DOB"
                    value={formData.basicInfo.dateOfBirth}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "dateOfBirth", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    label="Linkedin Link"

                    placeholder="Enter your linkedin profile link"
                    value={formData.basicInfo.linkedinLink}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "linkedinLink", value)
                    }

                />
                <InputField
                    label="Github Link"
                    placeholder="Enter your github profile link"
                    value={formData.basicInfo.githubLink}
                    handleInputChange={(value) =>
                        handleInputChange("basicInfo", "githubLink", value)
                    }
                />

            </div>

        </div>
    );


    const achievementsBody = (
        <div className='detail4'>

            <label>Achievements</label>
            <div className='row'>
                <InputField
                    placeholder="Achievement 1"
                    value={formData.achievement.achievement1 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement1", value)
                    }
                />
                <InputField
                    placeholder="Achievement 2"
                    value={formData.achievement.achievement2 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement2", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    placeholder="Achievement 3"
                    value={formData.achievement.achievement3 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement3", value)
                    }
                />
                <InputField
                    placeholder="Achievement 4"
                    value={formData.achievement.achievement4 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement4", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    placeholder="Achievement 5"
                    value={formData.achievement.achievement5 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement5", value)
                    }
                />
                <InputField
                    placeholder="Achievement 6"
                    value={formData.achievement.achievement6 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("achievement", "achievement6", value)
                    }
                />
            </div>
        </div>
    );


    const summaryBody = (
        <div className='detail5'>
            <label>Objective</label>
            <InputField
                textarea="Line 1"
                value={formData.summary.objective}
                handleInputChange={(value) =>
                    handleInputChange("summary", "objective", value)
                }
            />
        </div>
    );


    const otherBody = (
        <div className='detail4'>
            <label>Skills</label>
            <div className='row'>
                <InputField
                    placeholder="Skill 1"
                    value={formData.other.skill1 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill1", value)
                    }
                />

                <InputField
                    placeholder="Skill 2"
                    value={formData.other.skill2 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill2", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    placeholder="Skill 3"
                    value={formData.other.skill3 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill3", value)
                    }
                />

                <InputField
                    placeholder="Skill 4"
                    value={formData.other.skill4 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill4", value)
                    }
                />
            </div>
            <div className='row'>
                <InputField
                    placeholder="Skill 5"
                    value={formData.other.skill5 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill5", value)
                    }
                />

                <InputField
                    placeholder="Skill 6"
                    value={formData.other.skill6 || ''}
                    handleInputChange={(value) =>
                        handleInputChange("other", "skill6", value)
                    }
                />
            </div>
        </div>
    );


    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }

    };


    return (
        <>
        <div className='content1-body'>
            <div className='header1-body'>
                {Object.keys(sections)?.map((key) => (
                    <div
                        className={`${sectionClassName} ${activeSectionKey === key ? activeClassName : ''}`}
                        key={key}
                        onClick={() => setActiveSectionKey(key)}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>

            <div className='section-body'>
                {generateBody()}

               
                <button className='save-button' onClick={saveData}>Save</button>
            </div>
</div>

<div className='image-file'>
<input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {/* Display the selected image */}
                {selectedImage && (
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected Image"
                        className="selected-image"
                    />
                )}
</div>
            <div className="resume-preview">
                <Resume formData={formData} selectedImage={selectedImage} />
            </div>
        </>
    );
}

export default Builder;
import React, { useState, useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import './Addfourth.css';

const AddTeachers = () => {
        const [photo, setPhoto] = useState(null);
        const [aadhaarCard, setAadhaarCard] = useState(null);
        const [voterCard, setVoterCard] = useState(null);
        const [drivingLicense, setDrivingLicense] = useState(null);
        const [panCard, setPanCard] = useState(null);
        const [isAdmin, setIsAdmin] = useState(false);
        const [loading, setLoading] = useState(true); // Add a loading state
        const navigate = useNavigate();

        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const checkLoginStatus = () => {
            const userTypeFromCookie = getCookie('usertype');
            const userTypeFromSession = sessionStorage.getItem('usertype');

            if (userTypeFromCookie === '1' || userTypeFromSession === '1') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
            setLoading(false); // Set loading to false after checking login status
        };

        // useEffect(() => {
        //     checkLoginStatus();
        // }, []);

        // useEffect(() => {
        //     // Redirect only after checking login status and if the user is not admin
        //     if (!loading && !isAdmin) {
        //         navigate('/'); // Redirect to login page
        //     }
        // }, [loading, isAdmin, navigate]);



        const [formData, setFormData] = useState({
            name: '',
            fatherName: '',
            dob: '',
            joiningDate: '',
            mobile: '',
            email: '',
            jobExperience: '',
            gender: '',
            salary: '',
            description: '',
            Assignclass: '',
            rating: '',
            presentAddress: '',
            permanentAddress: '',
            qualification: '',
            nationality: '',
            religion: '',
            accountHolderName: '',
            bankAccountNumber: '',
            ifscCode: '',
        });
        const [error, setError] = useState('');
        const [showPopup, setShowPopup] = useState(false); // State for popup visibility


        const handlePhotoChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                setPhoto(file);
            }
        };

        const handleCardChange = (e, setCardFunction) => {
            const file = e.target.files[0];
            if (file) {
                setCardFunction(file);
            }
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleSubmit = async(e) => {
            e.preventDefault();

            // Ensure Aadhaar card is uploaded
            if (!aadhaarCard) {
                setError('Aadhaar card is required.');
                return;
            }

            // Ensure at least one of Voter, Driving License, or PAN card is uploaded
            if (!voterCard && !drivingLicense && !panCard) {
                setError('At least one of Voter card, Driving License, or PAN card must be uploaded.');
                return;
            }

            setError('');

            const formDataToSubmit = new FormData();
            formDataToSubmit.append('photo', photo);
            formDataToSubmit.append('aadhaarCard', aadhaarCard);
            formDataToSubmit.append('voterCard', voterCard);
            formDataToSubmit.append('drivingLicense', drivingLicense);
            formDataToSubmit.append('panCard', panCard);
            for (const key in formData) {
                alert(`${key}: ${formData[key]}`);
            }
            // Add additional form data from state
            for (const key in formData) {
                formDataToSubmit.append(key, formData[key]);
            }

            try {
                const response = await fetch(`${config.baseURL}/AddGuard.php`, {
                    method: 'POST',
                    body: formDataToSubmit,
                });

                if (response.ok) {
                    setShowPopup(true); // Show the popup on success
                    setTimeout(() => {
                        setShowPopup(false); // Hide popup after 2 seconds
                        navigate('/'); // Navigate to the root path
                    }, 2000);
                } else {
                    setError('Failed to add guard data. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred while submitting the form. Please try again.');
            }
        };

        return ( <
            div >

            <
            div className = "container" >
            <
            h2 className = "title" > Add New Teacher < /h2> <
            form onSubmit = { handleSubmit }
            className = "form" > { /* Photo Section */ } <
            div className = "photoSection" >
            <
            label htmlFor = "photoUpload"
            className = "photoUploadLabel" > {
                photo ? ( <
                    img src = { URL.createObjectURL(photo) }
                    alt = "Employee"
                    className = "photo" / >
                ) : ( <
                    div className = "photoPlaceholder" > Choose Profile Photo < /div>
                )
            } <
            /label> <
            input id = "photoUpload"
            type = "file"
            accept = "image/*"
            onChange = { handlePhotoChange }
            className = "fileInput"
            style = {
                { display: 'none' }
            } // Hide the input
            required /
            >
            <
            /div>

            { /* Form Fields */ } <
            div className = "fieldGroup" >
            <
            label className = "label" > Name: < /label> <
            input type = "text"
            className = "input"
            name = "name"
            value = { formData.name }
            onChange = { handleInputChange }
            placeholder = "Enter Name"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Father 's Name:</label> <
            input type = "text"
            className = "input"
            name = "fatherName"
            value = { formData.fatherName }
            onChange = { handleInputChange }
            placeholder = "Enter Father's Name"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Date of Birth: < /label> <
            input type = "date"
            className = "input"
            name = "dob"
            value = { formData.dob }
            onChange = { handleInputChange }
            required / >
            <
            /div> <
            div className = "fieldGroup" >
            <
            label className = "label" > Joining Date: < /label> <
            input type = "date"
            className = "input"
            name = "joiningDate"
            value = { formData.joiningDate }
            onChange = { handleInputChange }
            required / >
            <
            /div>

            { /* Mobile Number and Email Fields */ } <
            div className = "fieldGroup" >
            <
            label className = "label" > Mobile Number: < /label> <
            input type = "tel"
            className = "input"
            name = "mobile"
            value = { formData.mobile }
            onChange = { handleInputChange }
            placeholder = "Enter Mobile Number"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <label className = "label" > Email: < /label> <
            input type = "email"
            className = "input"
            name = "email"
            value = { formData.email }
            onChange = { handleInputChange }
            placeholder = "Enter Email"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Job Experience Year: < /label> <
            input type = "text"
            className = "input"
            name = "jobExperience"
            value = { formData.jobExperience }
            onChange = { handleInputChange }
            placeholder = "Enter Job Experience Year"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Gender: < /label> <
            input type = "text"
            className = "input"
            name = "gender"
            value = { formData.gender }
            onChange = { handleInputChange }
            placeholder = "Enter Gender"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Rating: < /label> <
            input type = "text"
            className = "input"
            name = "rating"
            value = { formData.rating }
            onChange = { handleInputChange }
            placeholder = "Enter Rating Max Limit 5"
            required / >
            <
            /div> <
            div className = "fieldGroup" >
            <
            label className = "label" > Salary: < /label> <
            input type = "Number"
            className = "input"
            name = "salary"
            value = { formData.salary }
            onChange = { handleInputChange }
            placeholder = "Enter Salary Of Teacher"
            required / >
            <
            /div>


            <
            div className = "fieldGroup grid-column-span" >
            <
            label className = "label" > Add Description: < /label> <
            input type = "text"
            className = "input"
            name = "description"
            value = { formData.description }
            onChange = { handleInputChange }
            placeholder = "Enter Description To Show On card"
            required / >

            <
            label className = "label"
            style = {
                { marginTop: '15px' }
            } >
            Assign Class:
            <
            /label> <
            input type = "text"
            className = "input"
            name = "Assignclass"
            value = { formData.Assignclass }
            onChange = { handleInputChange }
            placeholder = "Assign a class"
            required / >
            <
            /div> <
            div className = "fieldGroup grid-column-span" >
            <
            label className = "label" > Present Address: < /label> <
            input type = "text"
            className = "input"
            name = "presentAddress"
            value = { formData.presentAddress }
            onChange = { handleInputChange }
            placeholder = "Enter Present Address"
            required / >
            <
            /div>

            <
            div className = "fieldGroup grid-column-span" >
            <
            label className = "label" > Permanent Address: < /label> <
            input type = "text"
            className = "input"
            name = "permanentAddress"
            value = { formData.permanentAddress }
            onChange = { handleInputChange }
            placeholder = "Enter Permanent Address"
            required / >
            <
            /div>

            <
            div className = "fieldGroup grid-column-span" >
            <
            label className = "label" > Educational Qualification: < /label> <
            input type = "text"
            className = "input"
            name = "qualification"
            value = { formData.qualification }
            onChange = { handleInputChange }
            placeholder = "Enter Qualification"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Nationality: < /label> <
            input type = "text"
            className = "input"
            name = "nationality"
            value = { formData.nationality }
            onChange = { handleInputChange }
            placeholder = "Enter Nationality"
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Religion: < /label> <
            input type = "text"
            className = "input"
            name = "religion"
            value = { formData.religion }
            onChange = { handleInputChange }
            placeholder = "Enter Religion"
            required / >
            <
            /div>

            { /* Document Uploads */ } <
            div className = 'photodiv' >
            <
            div className = "photoSection" >
            <
            label htmlFor = "aadhaarCard"
            className = "photoUploadLabel" > {
                aadhaarCard ? ( <
                    img src = { URL.createObjectURL(aadhaarCard) }
                    alt = "Aadhaar"
                    className = "photo" / >
                ) : ( <
                    div className = "photoPlaceholder" > Upload Aadhaar Card < /div>
                )
            } <
            /label> <
            input id = "aadhaarCard"
            type = "file"
            accept = "image/*"
            onChange = {
                (e) => handleCardChange(e, setAadhaarCard)
            }
            className = "fileInput"
            style = {
                { display: 'none' }
            }
            required /
            >
            <
            /div>

            <
            div className = "photoSection" >
            <
            label htmlFor = "voterCard"
            className = "photoUploadLabel" > {
                voterCard ? ( <
                    img src = { URL.createObjectURL(voterCard) }
                    alt = "Voter Card"
                    className = "photo" / >
                ) : ( <
                    div className = "photoPlaceholder" > Upload Voter Card < /div>
                )
            } <
            /label> <
            input id = "voterCard"
            type = "file"
            accept = "image/*"
            onChange = {
                (e) => handleCardChange(e, setVoterCard)
            }
            className = "fileInput"
            style = {
                { display: 'none' }
            }
            /> < /
            div > <
            /div> <
            div className = 'photodiv' >

            <
            div className = "photoSection" >
            <
            label htmlFor = "drivingLicense"
            className = "photoUploadLabel" > {
                drivingLicense ? ( <
                    img src = { URL.createObjectURL(drivingLicense) }
                    alt = "Driving License"
                    className = "photo" / >
                ) : ( <
                    div className = "photoPlaceholder" > Upload Driving License < /div>
                )
            } <
            /label> <
            input id = "drivingLicense"
            type = "file"
            accept = "image/*"
            onChange = {
                (e) => handleCardChange(e, setDrivingLicense)
            }
            className = "fileInput"
            style = {
                { display: 'none' }
            }
            /> < /
            div >

            <
            div className = "photoSection" >
            <
            label htmlFor = "panCard"
            className = "photoUploadLabel" > {
                panCard ? ( <
                    img src = { URL.createObjectURL(panCard) }
                    alt = "PAN Card"
                    className = "photo" / >
                ) : ( <
                    div className = "photoPlaceholder" > Upload PAN Card < /div>
                )
            } <
            /label> <
            input id = "panCard"
            type = "file"
            accept = "image/*"
            onChange = {
                (e) => handleCardChange(e, setPanCard)
            }
            className = "fileInput"
            style = {
                { display: 'none' }
            }
            /> < /
            div > <
            /div> <
            div className = "fieldGroup" >
            <
            label className = "label" > Account Holder Name: < /label> <
            input type = "text"
            className = "input"
            placeholder = "Enter Account Holder Name"
            name = "accountHolderName"
            value = { formData.accountHolderName }
            onChange = { handleInputChange }
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > Bank Account Number: < /label> <
            input type = "text"
            className = "input"
            placeholder = "Enter Bank Account Number"
            name = "bankAccountNumber"
            value = { formData.bankAccountNumber }
            onChange = { handleInputChange }
            required / >
            <
            /div>

            <
            div className = "fieldGroup" >
            <
            label className = "label" > IFSC Code: < /label> <
            input type = "text"
            className = "input"
            placeholder = "Enter IFSC Code"
            name = "ifscCode"
            value = { formData.ifscCode }
            onChange = { handleInputChange }
            required / >
            <
            /div>

            { /* Error Message */ } {
                error && < p className = "error" > { error } < /p>}

                <
                button type = "submit"
                className = "submitBtn" > Submit < /button> < /
                form >

                    {
                        showPopup && ( <
                            div className = "popup-overlay" >
                            <
                            div className = "popup" >
                            <
                            h3 > Guard added successfully! < /h3> < /
                            div > <
                            /div>
                        )
                    }

                <
                /div> < /
                div >
            );
        };

        export default AddTeachers;
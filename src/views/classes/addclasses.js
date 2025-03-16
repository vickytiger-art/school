import React, { useState, useEffect } from 'react';
import {
  CForm,
  CButton,
  CCol,
  CRow,
  CFormCheck,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import './class.css';

const ClassSelection = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classNames] = useState([
    'LKG', 'UKG', 'Nursery', 'Prep', // Added classes
    ...Array.from({ length: 12 }, (_, i) => `${i + 1} Class`),
  ]);

  const navigate = useNavigate();

  // Fetch active classes on mount
  // useEffect(() => {
  //   fetch('http://localhost:5000/classes')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Filter active classes (status === '1')
  //       const activeClasses = data
  //         .filter((item) => item.status === '1')
  //         .map((item) => item.class_name);
  //       setSelectedClasses(activeClasses);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching classes:', error);
  //     });
  // }, []);

  // Handle checkbox selection
  const handleCheckboxChange = (className) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((cls) => cls !== className)
        : [...prev, className]
    );
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (selectedClasses.length === 0) {
      alert('Please select at least one class!');
      return;
    }

    const classData = classNames.map((className) => ({
      class_name: className,
      status: selectedClasses.includes(className) ? 1 : 0,
    }));

    fetch('http://localhost:5000/addOrUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ classes: classData }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Classes updated successfully!');
          window.location.reload();
          // navigate('/classes/addsections');
        } else {
          alert('Failed to update classes.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    
      <>
      <CCol md={8} className="mx-auto p-4 border rounded shadow-sm">
        <h3 className="text-center mb-4">Select Classes</h3>
        <CForm>
          <CRow className="c-row">
            {classNames.map((className, index) => (
              <CCol key={index} xs={6} sm={4} lg={3} className="c-col">
                <CFormCheck
                  id={`class-${index}`}
                  label={className}
                  value={className}
                  onChange={() => handleCheckboxChange(className)}
                  checked={selectedClasses.includes(className)}
                />
              </CCol>
            ))}
          </CRow>
          <div className="text-center mt-4">
            <CButton color="primary" onClick={handleNext}>
              Next
            </CButton>
          </div>
        </CForm>
      </CCol>
   
    </>
  );
};

export default ClassSelection;

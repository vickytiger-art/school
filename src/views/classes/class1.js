import React, { useState } from 'react';
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
    alert(`Proceeding with selected classes: ${selectedClasses.join(', ')}`);
    navigate('/classes/addsections');
  };

  return (
    <div className="container mt-5">
      <CCol md={8} className="mx-auto p-4 border rounded shadow-sm">
        <h3 className="text-center mb-4">Select Classes</h3>
        <CForm>
          <CRow className="g-3">
            {classNames.map((className, index) => (
              <CCol key={index} xs={6} sm={4} lg={3} className="text-center">
                <CFormCheck
                  id={`class-${index}`}
                  label={className}
                  value={className}
                  onChange={() => handleCheckboxChange(className)}
                  checked={selectedClasses.includes(className)}
                  className="mb-2"
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
    </div>
  );
};

export default ClassSelection;

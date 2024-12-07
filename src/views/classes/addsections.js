import React, { useState } from 'react';
import { CForm, CButton, CCol, CRow, CFormInput } from '@coreui/react';
import './section.css'


const AddSectionIntoClass = () => {
  const [sections, setSections] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      className: `${i + 1} Class`,
      sectionCount: '',
    }))
  );

  const handleInputChange = (index, value) => {
    setSections((prevSections) =>
      prevSections.map((section, idx) =>
        idx === index ? { ...section, sectionCount: value } : section
      )
    );
  };

  const handleSubmit = () => {
    const result = sections.map(({ className, sectionCount }) => ({
      className,
      sectionCount: parseInt(sectionCount) || 0,
    }));

    console.log('Sections to Add:', result);

    // Example validation
    if (result.some(({ sectionCount }) => sectionCount < 0)) {
      alert('Please enter a valid number of sections for all classes.');
      return;
    }

    alert('Sections added successfully!');
    // Here you can save the data or process it further.
  };

  return (
      <CCol md={8} className="mx-auto p-4 border rounded shadow-sm">
        <h3 className="text-center mb-4">Add Section into Class</h3>
        <CForm>
          <CRow className="g-3">
            {sections.map((section, index) => (
              <CCol key={index} xs={12} sm={6} lg={4} className="text-center">
                <div className="border p-3 rounded">
                  <h5>{section.className}</h5>
                  <CFormInput
                    type="number"
                    placeholder="Enter section count"
                    value={section.sectionCount}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    min="0"
                  />
                </div>
              </CCol>
            ))}
          </CRow>
          <div className="text-center mt-4">
            <CButton color="primary" onClick={handleSubmit}>
              Submit
            </CButton>
          </div>
        </CForm>
      </CCol>
  
  );
};

export default AddSectionIntoClass;

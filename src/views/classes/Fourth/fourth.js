import React, { useState } from 'react';
import './fourth.css';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Checkbox, IconButton, Paper, MenuItem } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const StudentAttendance = () => {
  const [search, setSearch] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const navigate = useNavigate();

  // Available sections
  const sections = ['A', 'B', 'C'];

  // Student Data
  const [students, setStudents] = useState([
    { id: 1, rollNo: '101', name: 'Aarav Sharma', fatherName: 'Rajesh Sharma', contact: '9876543210', section: 'A', present: false },
    { id: 2, rollNo: '102', name: 'Ishita Verma', fatherName: 'Amit Verma', contact: '9876543211', section: 'B', present: false },
    { id: 3, rollNo: '103', name: 'Rohan Mehta', fatherName: 'Suresh Mehta', contact: '9876543212', section: 'A', present: false },
    { id: 4, rollNo: '104', name: 'Sanya Kapoor', fatherName: 'Vikas Kapoor', contact: '9876543213', section: 'B', present: false },
    { id: 5, rollNo: '105', name: 'Kabir Joshi', fatherName: 'Pradeep Joshi', contact: '9876543214', section: 'C', present: false },
  ]);

  // Toggle Attendance
  const handleAttendanceChange = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Handle Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle Section Change
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  // Navigate to Add Student Page
  const handleAddStudent = () => {
    navigate('/classes/Lkg/Addlkgstudent');
  };

  // Navigate to Edit Student Page
  const handleEditStudent = () => {
    navigate('/classes/Lkg/Editlkgstudent');
  };

  // Filter Students by Name and Section
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedSection ? student.section === selectedSection : true)
  );

  // Table Columns (Attendance Checkbox is now the FIRST column)
  const columns = [
    {
      field: 'present',
      headerName: 'Attendance',
      width: 120,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.present}
          onChange={() => handleAttendanceChange(params.row.id)}
        />
      ),
    },
    { field: 'section', headerName: 'Section', width: 100 },
    { field: 'rollNo', headerName: 'Roll No', width: 100 },
    { field: 'name', headerName: 'Student Name', width: 180 },
    { field: 'fatherName', headerName: `Father's Name`, width: 180 },
    { field: 'contact', headerName: 'Contact Number', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton onClick={handleEditStudent} color="primary">
            <Edit />
          </IconButton>
          <IconButton color="secondary">
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Student Attendance</h2>
      
      {/* Controls: Search and Section Selection */}
      <div className="attendance-controls">
        <TextField
          label="Search Student"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
        />
        <TextField
          select
          label="Select Section"
          value={selectedSection}
          onChange={handleSectionChange}
          variant="outlined"
          size="small"
        >
          <MenuItem value="">All Sections</MenuItem>
          {sections.map((sec) => (
            <MenuItem key={sec} value={sec}>{sec}</MenuItem>
          ))}
        </TextField>
        <Button onClick={handleAddStudent} variant="contained" color="primary" className="add-student-btn">
          Add Student
        </Button>
      </div>

      {/* Attendance Table */}
      <Paper className="attendance-table-container">
        <DataGrid 
          rows={filteredStudents} 
          columns={columns} 
          pageSize={5} 
          autoHeight 
        />
      </Paper>
    </div>
  );
};

export default StudentAttendance;

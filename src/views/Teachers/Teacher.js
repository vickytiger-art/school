import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Checkbox, IconButton, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import './TeacherAttendance.css';
import { useNavigate } from 'react-router-dom';

const TeacherAttendance = () => {
  const [search, setSearch] = useState('');
  const [teachers, setTeachers] = useState([
    { id: 1, empId: 'T101', name: 'Anil Kumar', subject: 'Mathematics', contact: '9876543210', present: false },
    { id: 2, empId: 'T102', name: 'Sunita Sharma', subject: 'Science', contact: '9876543211', present: false },
    { id: 3, empId: 'T103', name: 'Rahul Verma', subject: 'English', contact: '9876543212', present: false },
    { id: 4, empId: 'T104', name: 'Pooja Mehta', subject: 'History', contact: '9876543213', present: false },
    { id: 5, empId: 'T105', name: 'Amit Joshi', subject: 'Physics', contact: '9876543214', present: false },
  ]);

  const navigate = useNavigate();

  const handleAttendanceChange = (id) => {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === id ? { ...teacher, present: !teacher.present } : teacher
      )
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = () => {
    navigate('/Teachers/AddTeachers');
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

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
    { field: 'empId', headerName: 'Emp ID', width: 100 },
    { field: 'name', headerName: 'Teacher Name', width: 180 },
    { field: 'subject', headerName: 'Subject', width: 150 },
    { field: 'contact', headerName: 'Contact Number', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton color="primary">
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
      <h2 className="attendance-title">Teacher Attendance</h2>
      <div className="attendance-controls">
        <TextField
          label="Search Teacher"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
        />
        <Button onClick={handleAdd} variant="contained" color="primary" className="add-teacher-btn">
          Add Teacher
        </Button>
      </div>
      <Paper className="attendance-table-container">
        <DataGrid rows={filteredTeachers} columns={columns} pageSize={5} autoHeight />
      </Paper>
    </div>
  );
};

export default TeacherAttendance;

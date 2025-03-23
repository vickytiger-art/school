import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, IconButton, TextField } from '@mui/material';
import { Edit, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './childTheme.css';

const FeeListPage = () => {
  const navigate = useNavigate();

  // Search state
  const [search, setSearch] = useState('');

  // Initial student fee data (optionally add feeSubmissions for demo)
  const [students, setStudents] = useState([
    { 
      id: 1, 
      rollNo: '101', 
      name: 'Aarav Sharma', 
      fatherName: 'Rajesh Sharma', 
      totalFee: 5000, 
      paidFee: 3000, 
      dueFee: 2000,
      feeSubmissions: [
        { date: '2023-09-01', amount: 1000 },
        { date: '2023-10-01', amount: 2000 }
      ]
    },
    { 
      id: 2, 
      rollNo: '102', 
      name: 'Ishita Verma', 
      fatherName: 'Amit Verma', 
      totalFee: 5500, 
      paidFee: 2500, 
      dueFee: 3000,
      feeSubmissions: [
        { date: '2023-08-15', amount: 1500 },
        { date: '2023-09-15', amount: 1000 }
      ]
    },
    { 
      id: 3, 
      rollNo: '103', 
      name: 'Rohan Mehta', 
      fatherName: 'Suresh Mehta', 
      totalFee: 6000, 
      paidFee: 4000, 
      dueFee: 2000,
      feeSubmissions: [
        { date: '2023-07-20', amount: 2000 },
        { date: '2023-08-20', amount: 2000 }
      ]
    },
    // Add additional student records as needed...
  ]);

  // Inline editing of fee details
  const handleCellEditCommit = (params) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === params.id) {
          const updatedStudent = { ...student, [params.field]: params.value };
          if (params.field === 'totalFee' || params.field === 'paidFee') {
            updatedStudent.dueFee = updatedStudent.totalFee - updatedStudent.paidFee;
          }
          return updatedStudent;
        }
        return student;
      })
    );
  };

  // Function to navigate to Fee Details page with the selected student's data
  const handleOpenDetails = (student) => {
    navigate('/classes/Lkg/FeeDetailsPage', { state: { student } });
  };

  // Define columns for DataGrid, including the new Details column
  const columns = [
    { field: 'rollNo', headerName: 'Roll No', width: 100 },
    { field: 'name', headerName: 'Student Name', width: 180 },
    { field: 'fatherName', headerName: "Father's Name", width: 180 },
    { field: 'totalFee', headerName: 'Total Fee', width: 120, editable: true, type: 'number' },
    { field: 'paidFee', headerName: 'Paid Fee', width: 120, editable: true, type: 'number' },
    { field: 'dueFee', headerName: 'Due Fee', width: 120, type: 'number' },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton color="primary">
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleOpenDetails(params.row)} color="primary">
            <Info />
          </IconButton>
        </>
      ),
    },
  ];

  // Filter students based on the search field
  const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(search.toLowerCase()) ||
  student.rollNo.toLowerCase().includes(search.toLowerCase())
);

  // Generate flower elements for the rain effect
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const numberOfFlowers = 15; // Adjust the count as desired
    const generatedFlowers = Array.from({ length: numberOfFlowers }, (_, index) => {
      const left = Math.random() * 100; // Random horizontal position (in %)
      const delay = Math.random() * 5;   // Random delay (in seconds)
      const duration = 5 + Math.random() * 5; // Duration between 5-10 seconds
      return (
        <div
          key={index}
          className="flower"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    });
    setFlowers(generatedFlowers);
  }, []);

  return (
    <div className="child-theme-overlay">
      {/* Flower rain layer */}
      <div className="flower-rain">{flowers}</div>
      {/* Main Fee List container */}
      <div className="fee-list-container">
        <h2 className="fee-list-title">Fee List</h2>
        {/* Search Field */}
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Search Student"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <Paper style={{ padding: 10 }}>
          <DataGrid
            rows={filteredStudents}
            columns={columns}
            pageSize={5}
            autoHeight
            onCellEditCommit={handleCellEditCommit}
          />
        </Paper>
      </div>
    </div>
  );
};

export default FeeListPage;

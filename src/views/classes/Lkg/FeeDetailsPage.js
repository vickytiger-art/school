import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import './feeDetails.css';


const FeeDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) {
    return <div>No student data available.</div>;
  }

  // Use feeSubmissions from the student data, or provide dummy data if not available
  const feeSubmissions = student.feeSubmissions || [
    { date: '2023-09-01', amount: 1000 },
    { date: '2023-10-01', amount: 2000 }
  ];

  return (
    <div className="child-theme-overlay">
      <div className="fee-details-container">
        <h2 className="fee-details-title">Fee Details for {student.name}</h2>
        <Paper style={{ padding: 20 }}>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>Father's Name:</strong> {student.fatherName}</p>
          <p><strong>Total Fee:</strong> {student.totalFee}</p>
          <p><strong>Paid Fee:</strong> {student.paidFee}</p>
          <p><strong>Due Fee:</strong> {student.dueFee}</p>
          <h3>Fee Submissions</h3>
          <ul>
            {feeSubmissions.map((submission, index) => (
              <li key={index}>
                <strong>Date:</strong> {submission.date} &mdash; <strong>Amount:</strong> {submission.amount}
              </li>
            ))}
          </ul>
          <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default FeeDetailsPage;

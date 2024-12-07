// ToastNotification.js
import React from 'react';
import { CToast, CToastHeader, CToastBody } from '@coreui/react';

const ToastNotification = ({ status,message, onClose }) => {
  return (
    <CToast key={new Date().getTime()} visible={true}>
      <CToastHeader closeButton={onClose}>
        <div className="fw-bold me-auto">{status}</div>
       
      </CToastHeader>
      <CToastBody>{message}</CToastBody>
    </CToast>
  );
};

export default ToastNotification;
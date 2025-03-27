import React from 'react';
import CIcon from '@coreui/icons-react';
import './NavStyles.css';

import {
  cilSpeedometer,
  cilSchool,
  cilUser,
  cilUserPlus,
  cilBasketball,
  cilImage,
  cilLibrary,
  cilPlus,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Add Classes',
  },
  {
    component: CNavItem,
    name: 'ADD Classes',
    to: '/classes/addclasses',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Classes',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'LKG', to: '/classes/Lkg/lkg', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'UKG', to: '/classes/Ukg/ukg', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Nursery', to: '/classes/Nursery/nursery', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Prep', to: '/classes/Prep/prep', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'First', to: '/classes/First/first', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Second', to: '/classes/Second/second', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Third', to: '/classes/Third/third', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Fourth', to: '/classes/Fourth/fourth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Fifth', to: '/classes/Fifth/fifth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Sixth', to: '/classes/Sixth/sixth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Seventh', to: '/classes/Seventh/seventh', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Eighth', to: '/classes/Eighth/eighth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Ninth', to: '/classes/Ninth/ninth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Tenth', to: '/classes/Tenth/tenth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Eleventh', to: '/classes/Eleventh/eleventh', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
      { component: CNavItem, name: 'Twelfth', to: '/classes/Twelfth/twelfth', icon: <CIcon icon={cilLibrary} className="nav-icon" /> },
    ],
  },
  {
    component: CNavGroup,
    name: 'Teachers',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Teacher', to: '/Teachers/Teacher', icon: <CIcon icon={cilUser} className="nav-icon" /> },
      { component: CNavItem, name: 'Add Teacher', to: '/Teachers/AddTeachers', icon: <CIcon icon={cilUserPlus} className="nav-icon" /> },
    ],
  },
  {
    component: CNavItem,
    name: 'Sports Teams',
    to: '/Sports/Teams',
    icon: <CIcon icon={cilBasketball} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'School Gallery',
    to: '/Gallery/Gallery',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Events',
    to: '/Events/Events',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  
];

export default _nav;

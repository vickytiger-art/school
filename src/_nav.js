import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilDrop,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Classes',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'LKG', to: '/classes/Lkg/lkg' },
      { component: CNavItem, name: 'UKG', to: '/classes/Ukg/ukg' },
      { component: CNavItem, name: 'Nursery', to: '/classes/Nursery/nursery' },
      { component: CNavItem, name: 'Prep', to: '/classes/Prep/prep' },
      { component: CNavItem, name: 'First', to: '/classes/First/first' },
      { component: CNavItem, name: 'Second', to: '/classes/Second/second' },
      { component: CNavItem, name: 'Third', to: '/classes/Third/third' },
      { component: CNavItem, name: 'Fourth', to: '/classes/Fourth/fourth' },
      { component: CNavItem, name: 'Fifth', to: '/classes/Fifth/fifth' },
      { component: CNavItem, name: 'Sixth', to: '/classes/Sixth/sixth' },
      { component: CNavItem, name: 'Seventh', to: '/classes/Seventh/seventh' },
      { component: CNavItem, name: 'Eighth', to: '/classes/Eighth/eighth' },
      { component: CNavItem, name: 'Ninth', to: '/classes/Ninth/ninth' },
      { component: CNavItem, name: 'Tenth', to: '/classes/Tenth/tenth' },
      { component: CNavItem, name: 'Eleventh', to: '/classes/Eleventh/eleventh' },
      { component: CNavItem, name: 'Twelfth', to: '/classes/Twelfth/twelfth' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Teachers',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Teacher', to: '/Teachers/Teacher' },
      { component: CNavItem, name: 'AddTeacher', to: '/Teachers/AddTeachers' },
      // { component: CNavItem, name: 'Nursery', to: '/classes/nursery' },
      // { component: CNavItem, name: 'Prep', to: '/classes/prep' },
      // { component: CNavItem, name: 'Class 1', to: '/classes/class1' },
      // { component: CNavItem, name: 'Class 2', to: '/classes/class2' },
      // { component: CNavItem, name: 'Class 3', to: '/classes/class3' },
      // { component: CNavItem, name: 'Class 4', to: '/classes/class4' },
      // { component: CNavItem, name: 'Class 5', to: '/classes/class5' },
      // { component: CNavItem, name: 'Class 6', to: '/classes/class6' },
      // { component: CNavItem, name: 'Class 7', to: '/classes/class7' },
      // { component: CNavItem, name: 'Class 8', to: '/classes/class8' },
      // { component: CNavItem, name: 'Class 9', to: '/classes/class9' },
      // { component: CNavItem, name: 'Class 10', to: '/classes/class10' },
      // { component: CNavItem, name: 'Class 11', to: '/classes/class11' },
      // { component: CNavItem, name: 'Class 12', to: '/classes/class12' },
    ],
  },
]

export default _nav;

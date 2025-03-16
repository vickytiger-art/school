import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//add clases by vikram
const addclasses = React.lazy(() => import('./views/classes/addclasses'))
// const class2 = React.lazy(() => import('./views/classes/class2'))
const addsections = React.lazy(() => import('./views/classes/addsections'))

// classes


// const Addstudent = React.lazy(() => import('./views/classes/Addstudent'))
// LKG
const lkg = React.lazy(() => import('./views/classes/Lkg/lkg'));
const addlkg = React.lazy(() => import('./views/classes/Lkg/Addlkgstudent'));
const editlkg = React.lazy(() => import('./views/classes/Lkg/Editlkgstudent'));

// UKG
const ukg = React.lazy(() => import('./views/classes/Ukg/ukg'));
const addukg = React.lazy(() => import('./views/classes/Ukg/Addukgstudent'));
const editukg = React.lazy(() => import('./views/classes/Ukg/Editukgstudent'));

// Prep
const prep = React.lazy(() => import('./views/classes/Prep/prep'));
const addprep = React.lazy(() => import('./views/classes/Prep/Addprepstudent'));
const editprep = React.lazy(() => import('./views/classes/Prep/Editprepstudent'));

// Nursery
const nursery = React.lazy(() => import('./views/classes/Nursery/nursery'));
const addnursery = React.lazy(() => import('./views/classes/Nursery/Addnurserystudent'));
const editnursery = React.lazy(() => import('./views/classes/Nursery/Editnurserystudent'));

// Class 1 to 12 (Using folder names: first, second, ..., twelfth)
const first = React.lazy(() => import('./views/classes/First/first'));
const addfirst = React.lazy(() => import('./views/classes/First/Addfirststudent'));
const editfirst = React.lazy(() => import('./views/classes/First/Editfirststudent'));

const second = React.lazy(() => import('./views/classes/Second/second'));
const addsecond = React.lazy(() => import('./views/classes/Second/Addsecondstudent'));
const editsecond = React.lazy(() => import('./views/classes/Second/Editsecondstudent'));

const third = React.lazy(() => import('./views/classes/Third/third'));
const addthird = React.lazy(() => import('./views/classes/Third/Addthirdstudent'));
const editthird = React.lazy(() => import('./views/classes/Third/Editthirdstudent'));

const fourth = React.lazy(() => import('./views/classes/Fourth/fourth'));
const addfourth = React.lazy(() => import('./views/classes/Fourth/Addfourthstudent'));
const editfourth = React.lazy(() => import('./views/classes/Fourth/Editfourthstudent'));

const fifth = React.lazy(() => import('./views/classes/Fifth/fifth'));
const addfifth = React.lazy(() => import('./views/classes/Fifth/Addfifthstudent'));
const editfifth = React.lazy(() => import('./views/classes/Fifth/Editfifthstudent'));

const sixth = React.lazy(() => import('./views/classes/Sixth/sixth'));
const addsixth = React.lazy(() => import('./views/classes/Sixth/Addsixthstudent'));
const editsixth = React.lazy(() => import('./views/classes/Sixth/Editsixthstudent'));

const seventh = React.lazy(() => import('./views/classes/Seventh/seventh'));
const addseventh = React.lazy(() => import('./views/classes/Seventh/Addseventhstudent'));
const editseventh = React.lazy(() => import('./views/classes/Seventh/Editseventhstudent'));

const eighth = React.lazy(() => import('./views/classes/Eighth/eighth'));
const addeighth = React.lazy(() => import('./views/classes/Eighth/Addeighthstudent'));
const editeighth = React.lazy(() => import('./views/classes/Eighth/Editeighthstudent'));

const ninth = React.lazy(() => import('./views/classes/Ninth/ninth'));
const addninth = React.lazy(() => import('./views/classes/Ninth/Addninthstudent'));
const editninth = React.lazy(() => import('./views/classes/Ninth/Editninthstudent'));

const tenth = React.lazy(() => import('./views/classes/Tenth/tenth'));
const addtenth = React.lazy(() => import('./views/classes/Tenth/Addtenthstudent'));
const edittenth = React.lazy(() => import('./views/classes/Tenth/Edittenthstudent'));

const eleventh = React.lazy(() => import('./views/classes/Eleventh/eleventh'));
const addeleventh = React.lazy(() => import('./views/classes/Eleventh/Addeleventhstudent'));
const editeleventh = React.lazy(() => import('./views/classes/Eleventh/Editeleventhstudent'));

const twelfth = React.lazy(() => import('./views/classes/Twelfth/twelfth'));
const addtwelfth = React.lazy(() => import('./views/classes/Twelfth/Addtwelfthstudent'));
const edittwelfth = React.lazy(() => import('./views/classes/Twelfth/Edittwelfthstudent'))
// const class1 = React.lazy(() => import('./views/classes/class1'))

// const addclass1 = React.lazy(() => import('./views/classes/addclass1'))

// const editclass1 = React.lazy(() => import('./views/classes/editclass1'))

//Teachers
const Teacher = React.lazy(() => import('./views/Teachers/Teacher'))
const AddTeachers = React.lazy(() => import('./views/Teachers/AddTeachers'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  //add classes
  { path: '/classes/addclasses', name: 'Add Classes', element: addclasses },
  // { path: '/classes/class2', name: 'Attandence 2', element: class2 },
  { path: '/classes/addsections', name: 'Add Classes', element: addsections },

  // classes
  // { path: '/classes/Addstudent', name: 'Addstudent', element: Addstudent },
  // { path: '/classes/lkg', name: 'LKG', element: lkg },
  // { path: '/classes/addlkg', name: 'Add LKG', element: addlkg },
  // { path: '/classes/editlkg', name: 'Edit LKG', element: editlkg },

  // { path: '/classes/class1', name: '1 Class', element: class1 },
  // { path: '/classes/addclass1', name: 'Add Class 1', element: addclass1 },
  // { path: '/classes/editclass1', name: 'Edit Class 1', element: editclass1 },
// LKG
{ path: '/classes/Lkg/lkg', name: 'LKG', element: lkg },
{ path: '/classes/Lkg/Addlkgstudent', name: 'Add LKG', element: addlkg },
{ path: '/classes/Lkg/Editlkgstudent', name: 'Edit LKG', element: editlkg },

// UKG
{ path: '/classes/Ukg/ukg', name: 'UKG', element: ukg },
{ path: '/classes/Ukg/Addukgstudent', name: 'Add UKG', element: addukg },
{ path: '/classes/Ukg/Editukgstudent', name: 'Edit UKG', element: editukg },

// Prep
{ path: '/classes/Prep/prep', name: 'Prep', element: prep },
{ path: '/classes/Prep/Addprepstudent', name: 'Add Prep', element: addprep },
{ path: '/classes/Prep/Editprepstudent', name: 'Edit Prep', element: editprep },

// Nursery
{ path: '/classes/Nursery/nursery', name: 'Nursery', element: nursery },
{ path: '/classes/Nursery/Addnurserystudent', name: 'Add Nursery', element: addnursery },
{ path: '/classes/Nursery/Editnurserystudent', name: 'Edit Nursery', element: editnursery },

// Class 1 to 12 (Folder names: first, second, third, ..., twelfth)
{ path: '/classes/First/first', name: 'Class 1', element: first },
{ path: '/classes/First/Addfirststudent', name: 'Add Class 1', element: addfirst },
{ path: '/classes/First/Editfirststudent', name: 'Edit Class 1', element: editfirst },

{ path: '/classes/Second/second', name: 'Class 2', element: second },
{ path: '/classes/Second/Addsecondstudent', name: 'Add Class 2', element: addsecond },
{ path: '/classes/Second/Editsecondstudent', name: 'Edit Class 2', element: editsecond },

{ path: '/classes/Third/third', name: 'Class 3', element: third },
{ path: '/classes/Third/Addthirdstudent', name: 'Add Class 3', element: addthird },
{ path: '/classes/Third/Editthirdstudent', name: 'Edit Class 3', element: editthird },

{ path: '/classes/Fourth/fourth', name: 'Class 4', element: fourth },
{ path: '/classes/Fourth/Addfourthstudent', name: 'Add Class 4', element: addfourth },
{ path: '/classes/Fourth/Editfourthstudent', name: 'Edit Class 4', element: editfourth },

{ path: '/classes/Fifth/fifth', name: 'Class 5', element: fifth },
{ path: '/classes/Fifth/Addfifthstudent', name: 'Add Class 5', element: addfifth },
{ path: '/classes/Fifth/Editfifthstudent', name: 'Edit Class 5', element: editfifth },

{ path: '/classes/Sixth/sixth', name: 'Class 6', element: sixth },
{ path: '/classes/Sixth/Addsixthstudent', name: 'Add Class 6', element: addsixth },
{ path: '/classes/Sixth/Editsixthstudent', name: 'Edit Class 6', element: editsixth },

{ path: '/classes/Seventh/seventh', name: 'Class 7', element: seventh },
{ path: '/classes/Seventh/Addseventhstudent', name: 'Add Class 7', element: addseventh },
{ path: '/classes/Seventh/Editseventhstudent', name: 'Edit Class 7', element: editseventh },

{ path: '/classes/Eighth/eighth', name: 'Class 8', element: eighth },
{ path: '/classes/Eighth/Addeighthstudent', name: 'Add Class 8', element: addeighth },
{ path: '/classes/Eighth/Editeighthstudent', name: 'Edit Class 8', element: editeighth },

{ path: '/classes/Ninth/ninth', name: 'Class 9', element: ninth },
{ path: '/classes/Ninth/Addninthstudent', name: 'Add Class 9', element: addninth },
{ path: '/classes/Ninth/Editninthstudent', name: 'Edit Class 9', element: editninth },

{ path: '/classes/Tenth/tenth', name: 'Class 10', element: tenth },
{ path: '/classes/Tenth/Addtenthstudent', name: 'Add Class 10', element: addtenth },
{ path: '/classes/Tenth/Edittenthstudent', name: 'Edit Class 10', element: edittenth },

{ path: '/classes/Eleventh/eleventh', name: 'Class 11', element: eleventh },
{ path: '/classes/Eleventh/Addeleventhstudent', name: 'Add Class 11', element: addeleventh },
{ path: '/classes/Eleventh/Editeleventhstudent', name: 'Edit Class 11', element: editeleventh },

{ path: '/classes/Twelfth/twelfth', name: 'Class 12', element: twelfth },
{ path: '/classes/Twelfth/Addtwelfthstudent', name: 'Add Class 12', element: addtwelfth },
{ path: '/classes/Twelfth/Edittwelfthstudent', name: 'Edit Class 12', element: edittwelfth },

  //Teachers

{ path: '/Teachers/Teacher', name: 'Teacher', element: Teacher },
  { path: '/Teachers/AddTeachers', name: 'AddTeachers', element: AddTeachers },

]

export default routes

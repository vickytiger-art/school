import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react'; // Custom scrollbar library for a sleek appearance
import 'simplebar-react/dist/simplebar.min.css'; // SimpleBar CSS
import './sidebar.css'; // Import the custom CSS for styling
import { CBadge, CNavLink, CSidebarNav, CNavItem } from '@coreui/react'; // CoreUI components
import CIcon from '@coreui/icons-react'; // CoreUI icons
import { cilDrop } from '@coreui/icons'; // Import specific icons

/**
 * AppSidebarNav Component
 * Renders a sidebar navigation menu with dynamic and static items.
 * Includes custom styles for an Indian flag-themed background.
 */
export const AppSidebarNav = ({ items }) => {
  // State to store dynamic classes fetched from an API
  const [classes, setClasses] = useState([]);

  // Fetch dynamic class data from the server on component mount
  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Filter classes with a status of '1' for display
        const filteredClasses = data.filter((item) => item.status === '1');
        setClasses(filteredClasses);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  /**
   * Helper function to render a navigation link.
   * @param {string} name - The name of the menu item.
   * @param {JSX.Element} icon - The icon for the menu item.
   * @param {Object} badge - Optional badge to display.
   * @param {boolean} indent - Whether to indent the item (used for nested items).
   * @returns {JSX.Element} Rendered navigation link.
   */
  const navLink = (name, icon, badge, indent = false) => (
    <>
      {icon || (indent && (
        <span className="nav-icon">
          <span className="nav-icon-bullet"></span>
        </span>
      ))}
      {name}
      {badge && <CBadge color={badge.color} className="ms-auto">{badge.text}</CBadge>}
    </>
  );

  /**
   * Helper function to render a single navigation item.
   * @param {Object} item - The menu item object.
   * @param {number} index - The index of the item.
   * @param {boolean} indent - Whether to indent the item.
   * @returns {JSX.Element} Rendered navigation item.
   */
  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component as="div" key={index} className="c-nav-item">
        {rest.to || rest.href ? (
          <CNavLink
          {...(rest.to && { as: NavLink })}
          {...rest}
          activeClassName="active"
          className="c-nav-link"
        >
          {navLink(name, icon, badge, indent)}
        </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    );
  };

  // Static menu items (hardcoded)
  const staticItems = [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/dashboard',
      icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Add Classes',
      to: '/classes/addclasses',
      icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
  ];

  // Generate dynamic menu items from fetched classes
  const filteredItems = classes.map((classItem) => {
    // Format the class name to remove spaces and adjust URLs
    let className = classItem.class_name.toLowerCase().replace(/\s+/g, '');
    if (/^\d/.test(className)) {
      className = `class${className.replace(/class/i, '')}`;
    }
    return {
      component: CNavItem,
      name: classItem.class_name, // Display the original name
      to: `/classes/${className}`, // Use the formatted name in the URL
      icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    };
  });

  // Combine static and dynamic menu items
  const menuItems = [...staticItems, ...filteredItems];

  // Render the sidebar navigation
  return (
    <CSidebarNav as={SimpleBar} className="sidebar-nav">
      {menuItems.map((item, index) =>
        item.items ? navGroup(item, index) : navItem(item, index)
      )}
    </CSidebarNav>
  );
};

// Define PropTypes for the component
AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};


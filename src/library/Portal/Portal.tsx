import React from 'react';
import { createPortal } from 'react-dom';

// creates a div that will be appended to the HTML body 
const createElementHTML = (id:string) => {
  document.createElement('div');
  const element = document.createElement('div');
  element.id = id;
  element.className = id;
  document.body.appendChild(element);
  return element;
};

/**
 *  This component create a React Portal
 * Each time the component mount, check if the div used to show the modal already exists
 * if it is so, this div will be reused otherwise another div will be created
 * Each time the component unmount, remove the modal div from the DOM
 */

interface PortalState {
  id:string; 
  children: React.ReactNode;
}
const Portal:React.FC<PortalState> = ({ id, children }) => {
  const portalContainer = document.getElementById(id) || createElementHTML(id);
  return createPortal(children, portalContainer);
};

export default React.memo(Portal);

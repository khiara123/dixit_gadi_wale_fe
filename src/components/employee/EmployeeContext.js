// EmployeeContext.js
import { createContext } from 'react';

export const EmployeeContext = createContext({
  notifyParent: (page = 1 , limit =10) => {},
});
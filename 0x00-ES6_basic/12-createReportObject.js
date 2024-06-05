import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  return {
    allEmployees: createEmployeesObject(employeesList),
    getNumberOfDepartments() {
      return this.keys.count;
    },
  };
}

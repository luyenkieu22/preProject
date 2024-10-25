import { TypesEmployees } from "../sagas/types";

const createAction = (type, payload = null) => ({
    type,
    ...(payload && { payload }),
});

export const getEmployeesAction = () =>
    createAction(TypesEmployees.GET_ALL_EMPLOYEES);

export const addEmployeeAction = (data, file) =>
    createAction(TypesEmployees.ADD_EMPLOYEE, { employee: data, file: file });

export const editEmployeeAction = (data, file) =>
    createAction(TypesEmployees.EDIT_EMPLOYEE, { employee: data, file: file });

export const deleteEmployeeAction = (data) =>
    createAction(TypesEmployees.DELETE_EMPLOYEE, data);

export const searchEmployeesAction = (data) =>
    createAction(TypesEmployees.SEARCH_EMPLOYEES, data);



import axios from 'axios';

const EMPLOYEE_REST_API_URL = "	http://localhost:8080/api/v1";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_REST_API_URL+"/employees");
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_REST_API_URL + '/employees/' + employeeId);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL+ '/employees/' +  employee);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_REST_API_URL + '/employees/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_API_URL + '/employees/' + employeeId);
    }

}

export default new EmployeeService()
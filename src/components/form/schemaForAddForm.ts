import {object, string} from "yup";
export const schema = object().shape({
    name: string().required('Name is required'),
    surname: string().required('Surname is required'),
    address: string().required('Address is required'),
    phone: string().min(8, 'Phone must be at least 8').required('Phone is required')
})
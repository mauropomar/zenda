import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Este campo es obligatorio'),
    lastName: yup
        .string()
        .required('Este campo es obligatorio'),
    phoneNumber: yup
        .string().matches(phoneRegExp, 'Este número de teléfono es inválido.')
        .required('Este campo es obligatorio')
        .min(8, "No debe ser menor de 8 carácteres")
        .max(15, 'No debe exceder de 15 carácteres'),
    email: yup
        .string()
        .email('El correo es inválido')
        .required('Este campo es obligatorio'),
    password: yup
        .string()
        .min(5, 'No debe ser menor de 5 carácteres')
        .max(100, 'No debe exceder de 100 carácteres')
        .required('Este campo es obligatorio'),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
})
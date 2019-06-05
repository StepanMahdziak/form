
import * as yup from "yup";


export const userSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(1, 'Too Short!')
        .max(100, 'Too Long!'),
    addressOne: yup
        .string()
        .matches(/^[a-z0-9]+$/i)
        .required()
        .min(1,'Too Short!')
        .max(100, 'Too Long!'),
    addressTwo: yup
        .string()
        .matches(/^[a-z0-9]+$/i)
        .min(0)
        .max(100,'Too Short!'),
    city: yup
        .string()
        .matches(/^[a-z0-9]+$/i)
        .required()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
    ,
    // state: yup
    //     .string()
    //     .required()
    //     .min(1)
    //     .max(4),
    zipCode: yup
        .string()
        .matches(/^[0-9]/i)
        .required()
        .min(5,'Too short!')
        .max(50,'Too Long!'),


});

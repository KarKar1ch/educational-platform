import * as yup from "yup";

export const signupScheme2 = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
});

export const signupScheme = yup.object().shape({
    password:yup.string().min(6,'Password too short').max(50,'Password too long').required('Password is required'),
    username:yup.string().min(4,'Name is too short').max(30,'Name is too long').required('Username is required')
});

export const loginScheme = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password:yup.string().min(6,'Password too short').max(50,'Password too long').required('Password is required')
})
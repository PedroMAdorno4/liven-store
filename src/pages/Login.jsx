import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { userCredentials } from '../auth/mockUser';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/isLogged';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomInput from '../components/CustomInput';

const LoginSchema = yup.object().shape({
    email: yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    password: yup.string()
        .required('Campo obrigatório'),

});

function Login() {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.isLogged)
    const navigate = useNavigate()
    const [failedLoggingIn, setFailedLoggingIn] = useState(false);

    function submitLogin(values) {
        if (values.email === userCredentials.email && values.password === userCredentials.password) {
            dispatch(login())
        } else {
            setFailedLoggingIn(true)
        }
    }

    useEffect(() => {
        if (isLogged) {
            navigate('/products');
        }

    }, [isLogged]);


    return (
        <div className='centered-page'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={values => { submitLogin(values) }}
            >
                <Form className='flex flex-col'>
                    {failedLoggingIn && <span className='input-error -translate-y-full'>Email ou senha inválidos.</span>}
                    <div>
                        <p>E-mail</p>
                        <Field as={CustomInput} name="email" className='input' autoComplete="email" placeholder="" />
                        <ErrorMessage name="email">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                    </div>

                    <div className='mt-8'>
                        <p>Senha</p>
                        <Field as={CustomInput} type="password" name="password" className='input' autoComplete='current-password' placeholder="" />
                        <ErrorMessage name="password">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                    </div>

                    <button type="submit" className='button-primary font-bold mt-12'>
                        Entrar
                    </button>
                </Form>
            </Formik>
        </div>);
}

export default Login;

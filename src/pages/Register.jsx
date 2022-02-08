import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    name: yup.string()
        .required('Campo obrigatório'),
    email: yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    birthday: yup.string()
        .required('Campo obrigatório'),
    cpf: yup.string()
        .required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], "Senhas diferentes")
        .required('Campo obrigatório'),

});

function Register() {
    return (
        <div className='centered-page'>
            <Formik
                initialValues={{ name: '', email: '', birthday: '', cpf: '', password: '', passwordConfirmation: '' }}
                validationSchema={RegisterSchema}
                onSubmit={values => { console.log(values) }}
            >
                <Form className='flex flex-col'>
                    <div>
                        <p>Nome</p>
                        <Field type="text" name="name" className='input' autoComplete="name" placeholder="Nome completo" />
                        <Error name="name" />
                    </div>
                    <div className='mt-8'>
                        <p>E-mail</p>
                        <Field type="text" name="email" className='input' autoComplete="email" placeholder="nome@dominio.com" />
                        <Error name="email" />
                    </div>
                    <div className='mt-8'>
                        <p>Data de nascimento</p>
                        <Field type="text" name="birthday" className='input' placeholder="dd/mm/aaaa" />
                        <Error name="birthday" />
                    </div>
                    <div className='mt-8'>
                        <p>CPF</p>
                        <Field type="text" name="cpf" className='input' placeholder="XXX-XXX-XXX.XX" />
                        <Error name="cpf" />
                    </div>
                    <div className='mt-8 -space-y-px'>
                        <div>
                            <p>Senha</p>
                            <Field type="password" name="password" className='input rounded-b-none' autoComplete="new-password" placeholder="Senha" />
                            <Error name="password" />
                        </div>
                        <div>
                            <Field type="password" name="passwordConfirmation" className='input rounded-t-none' autoComplete="new-password" placeholder="Confirmar senha" />
                            <Error name="passwordConfirmation" />
                        </div>
                    </div>

                    <button type="submit" className='button-primary mt-8'>
                        Cadastrar
                    </button>
                </Form>
            </Formik>
        </div>);
}

export default Register;

function Error({ name }) {
    return (
        <ErrorMessage name={name}>{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
    )
}

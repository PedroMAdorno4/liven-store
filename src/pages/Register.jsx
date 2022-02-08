import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import FieldMask from '../components/FieldMask';
import { TestaCPF } from '../helpers/cpf';
import { getFormatedDate, getTodayString } from '../helpers/dates'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const RegisterSchema = yup.object().shape({
    name: yup.string()
        .required('Campo obrigatório'),
    email: yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    birthday: yup.date()
        .min('1900-01-01', 'Data deve ser depois de 1/1/1900')
        .max(getFormatedDate(), `Data deve ser anterior a ${getTodayString()}`)
        .required('Campo obrigatório'),
    cpf: yup.string()
        .test('cpf',
            'CPF inválido',
            (value) => TestaCPF(value))
        .required('Campo obrigatório'),
    password: yup.string()
        .required('Campo obrigatório')
        .min(8, 'Mínimo de 8 caracteres'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], "Senhas diferentes")
        .required('Campo obrigatório'),

});

function Register() {
    const navigate = useNavigate()
    function submit() {
        navigate('/login')
        toast.success('Cadastrado com sucesso')
    }

    return (
        <div className='centered-page'>
            <Formik
                initialValues={{ name: '', email: '', birthday: '', cpf: '', password: '', passwordConfirmation: '' }}
                validationSchema={RegisterSchema}
                onSubmit={submit}
            >
                {props => (

                    <Form className='flex flex-col'>
                        <div>
                            <p>Nome</p>
                            <Field type="text" name="name" className='input' autoComplete="name" placeholder="Nome completo" />
                            <ErrorMessage name="name">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                        </div>
                        <div className='mt-8'>
                            <p>E-mail</p>
                            <Field type="text" name="email" className='input' autoComplete="email" placeholder="nome@dominio.com" />
                            <ErrorMessage name="email">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                        </div>
                        <div className='mt-8'>
                            <p>Data de nascimento</p>
                            <Field type="date" name="birthday" className='input' placeholder="dd/mm/aaaa" />
                            <ErrorMessage name="birthday">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                        </div>
                        <div className='mt-8'>
                            <p>CPF</p>
                            <FieldMask props={props} type="text" name="cpf" className='input monospace' mask="999.999.999-99" placeholder="999.999.999-99" />
                            <ErrorMessage name="cpf">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                        </div>
                        <div className='mt-8 -space-y-px'>
                            <div>
                                <p>Senha</p>
                                <ErrorMessage name="password">{msg => <span className='relative input-error'>{msg}</span>}</ErrorMessage>
                                <Field type="password" name="password" className='input rounded-b-none' autoComplete="new-password" placeholder="Senha" />
                            </div>
                            <div>
                                <Field type="password" name="passwordConfirmation" className='input rounded-t-none' autoComplete="new-password" placeholder="Confirmar senha" />
                                <ErrorMessage name="passwordConfirmation">{msg => <span className='input-error'>{msg}</span>}</ErrorMessage>
                            </div>
                        </div>

                        <button type="submit" className='button-primary mt-8'>
                            Cadastrar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>);
}

export default Register;


import { Formik, Form, Field } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';
const GeneralBlock = () => {
    const router = useRouter();
    const [type, setType] = useState('password');
    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('First name must contain at least one character')
            .max(18, 'First name may not be longer than 18 characters'),
        lastName: yup
            .string()
            .required('Last name must contain at least one character')
            .max(18, 'Last name may not be longer than 18 characters'),
        username: yup
            .string()
            .required('Username must contain at least one character')
            .max(18, 'Username may not be longer than 18 characters'),
        email: yup.string().required('Email must contain at least one character').email('Must be a valid email'),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
            ),
        policy: yup.boolean().oneOf([true], 'You must agree to the terms'),
    });
    return (
        <div className='flex flex-col w-full max-w-[400px]'>
            <h1 className='font-bold text-[26px] leading-[31px] text-main'>Sign Up</h1>
            <p className='mt-3 text-secondary text-[15px] leading-[18px]'>Create your account</p>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                    policy: false,
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                    router.push('/tool-kit');
                }}
            >
                {({ errors, touched, values }) => (
                    <Form className='flex flex-col mt-8'>
                        <div className='flex gap-4'>
                            <label className='text-[14px] leading-[17px] font-semibold text-main'>
                                First Name
                                <Field
                                    name='firstName'
                                    className='bg-hovered w-full mt-2 text-secondary p-4 rounded-lg text-[14px] leading-[17px] font-semibold'
                                />
                                {errors.firstName && touched.firstName ? (
                                    <div className='text-red-500 mt-1'>{errors.firstName}</div>
                                ) : null}
                            </label>
                            <label className='text-[14px] leading-[17px] font-semibold text-main'>
                                Last Name
                                <Field
                                    name='lastName'
                                    className='bg-hovered w-full mt-2 text-secondary p-4 rounded-lg text-[14px] leading-[17px] font-semibold'
                                />
                                {errors.lastName && touched.lastName ? (
                                    <div className='text-red-500 mt-1'>{errors.lastName}</div>
                                ) : null}
                            </label>
                        </div>
                        <label className='mt-5 flex flex-col gap-2 text-[14px] leading-[17px] font-semibold text-main'>
                            Username
                            <Field
                                name='username'
                                className='bg-hovered text-secondary p-4 rounded-lg text-[14px] leading-[17px] font-semibold'
                            />
                            {errors.username && touched.username ? (
                                <div className='text-red-500'>{errors.username}</div>
                            ) : null}
                        </label>
                        <label className='mt-5 flex flex-col gap-2 text-[14px] leading-[17px] font-semibold text-main'>
                            Email
                            <Field
                                name='email'
                                type='email'
                                className='bg-hovered text-secondary p-4 rounded-lg text-[14px] leading-[17px] font-semibold'
                            />
                            {errors.email && touched.email ? <div className='text-red-500'>{errors.email}</div> : null}
                        </label>
                        <label className='mt-5 flex flex-col gap-2 text-[14px] leading-[17px] font-semibold text-main'>
                            Password
                            <div className='relative'>
                                <Image
                                    src='/eye.svg'
                                    alt='eye'
                                    width={20}
                                    height={20}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
                                    onClick={() => setType((prev) => (prev === 'password' ? 'text' : 'password'))}
                                />
                                <Field
                                    name='password'
                                    type={type}
                                    className='bg-hovered text-secondary p-4 pr-9 rounded-lg text-[14px] leading-[17px] font-semibold w-full'
                                />
                            </div>
                            {errors.password && touched.password ? (
                                <div className='text-red-500'>{errors.password}</div>
                            ) : null}
                        </label>
                        <div className='flex gap-[15px] mt-3'>
                            <div
                                className='bg-hovered h-[6px] flex-1 rounded-full transition-all'
                                style={{
                                    background: `${
                                        !errors.password && touched.password
                                            ? 'linear-gradient(90deg, #2B3E9B,white 50%, #2B3E9B)'
                                            : ''
                                    }`,
                                }}
                            ></div>
                            <div
                                className='bg-hovered h-[6px] flex-1 rounded-full transition-all'
                                style={{
                                    background: `${
                                        !errors.password && touched.password && values.password.length > 10
                                            ? 'linear-gradient(90deg, #2B3E9B,white 50%, #2B3E9B)'
                                            : ''
                                    }`,
                                }}
                            ></div>
                            <div
                                className='bg-hovered h-[6px] flex-1 rounded-full transition-all'
                                style={{
                                    background: `${
                                        !errors.password && touched.password && values.password.length > 12
                                            ? 'linear-gradient(90deg, #2B3E9B,lightblue 50%, #2B3E9B)'
                                            : ''
                                    }`,
                                }}
                            ></div>
                        </div>
                        <div className='mt-[40px] text-[14px] leading-[24px] text-secondary font-semibold flex items-start gap-4'>
                            <Field name='policy' type='checkbox' className='mt-2 scale-[1.5] accent-main' />
                            <div>
                                I certify that i am 18 years of age or older, i agree to the to Edgevana`s{' '}
                                <span className='text-strongBlue'>Terms of Use</span>, and i have read the{' '}
                                <span className='text-strongBlue'>Privacy Policy</span>.
                            </div>
                        </div>
                        {errors.policy && touched.policy ? (
                            <div className='text-red-500 mt-1'>{errors.policy}</div>
                        ) : null}
                        <button
                            className='mt-7 w-full py-[18px] bg-button text-white rounded-lg backdrop-blur-[2px] text-[14px] leading-[17px] font-semibold'
                            type='submit'
                        >
                            Sign Up
                        </button>
                        <p className='text-[14px] leading-[24px] text-main font-semibold text-center mt-[30px]'>
                            <span className='text-strongBlue'>Sign up</span> for business account
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default GeneralBlock;

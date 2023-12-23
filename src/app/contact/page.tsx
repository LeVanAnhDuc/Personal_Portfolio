'use client';

import { Input } from 'antd';
import { Select } from 'antd';
const { TextArea } = Input;

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}
interface myForm {
    name: string;
    email: string;
    phone: string;
    gender: Gender;
    facebookURL: string;
    note?: string;
}

const schema = yup.object().shape({
    name: yup.string().required('First Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    phone: yup
        .string()
        .required('Phone is required')
        .min(10, 'Phone must be at least 10 digits')
        .max(11, 'Phone must be at most 11 digits')
        .test('is-phone', 'Invalid phone format', function (value) {
            if (!value) return true;

            const numericRegex = /^\d+$/;
            return numericRegex.test(value);
        }),
    gender: yup.string().oneOf(Object.values(Gender)).required('Gender is required'),
    facebookURL: yup.string().required('facebookURL is required').url(),
    note: yup.string(),
});

const Contact = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<myForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<myForm> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Name</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input {...field} size="large" placeholder="Enter Name" />}
                    />
                    <p className="text-red-600 text-sm">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Email</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input {...field} size="large" placeholder="Enter your email" />}
                    />
                    <p className="text-red-600 text-sm">{errors.email?.message}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Phone</label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <Input {...field} size="large" placeholder="Enter your phone number" />}
                    />
                    <p className="text-red-600 text-sm">{errors.phone?.message}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Gender</label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                showSearch
                                allowClear
                                size="large"
                                placeholder="Select your gender"
                                optionFilterProp="children"
                                options={Object.keys(Gender).map((gender) => ({
                                    value: Gender[gender as keyof typeof Gender], // Access enum value using key
                                    label: gender,
                                }))}
                            />
                        )}
                    />
                    <p className="text-red-600 text-sm">{errors.gender?.message}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold">Facebook URL</label>
                <Controller
                    name="facebookURL"
                    control={control}
                    render={({ field }) => <Input {...field} size="large" placeholder="Enter your facebook URL" />}
                />
                <p className="text-red-600 text-sm">{errors.facebookURL?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold">Note</label>
                <Controller
                    name="note"
                    control={control}
                    render={({ field }) => <TextArea {...field} rows={6} size="large" maxLength={9} />}
                />
                <p className="text-red-600 text-sm">{errors.note?.message}</p>
            </div>

            <button
                type="submit"
                className="flex place-content-center p-2 rounded-3xl transition bg-black text-white font-semibold text-base hover:bg-primary"
            >
                Xác nhận
            </button>
        </form>
    );
};

export default Contact;

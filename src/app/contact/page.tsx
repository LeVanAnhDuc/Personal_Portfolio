'use client';

import React from 'react';
import { Input } from 'antd';
import { Select } from 'antd';

const { TextArea } = Input;

const Contact = () => {
    return (
        <form action="" className="grid gap-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Name</label>
                    <Input required size="large" placeholder="Enter Name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Email</label>
                    <Input required size="large" placeholder="Enter your email" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Phone</label>
                    <Input required size="large" placeholder="Enter your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Gender</label>
                    <Select
                        showSearch
                        allowClear
                        size="large"
                        placeholder="Select your gender"
                        optionFilterProp="children"
                        options={[
                            {
                                value: 'Male',
                                label: 'Male',
                            },
                            {
                                value: 'Female',
                                label: 'Female',
                            },
                            {
                                value: 'Other',
                                label: 'Other',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold">Facebook URL</label>
                <Input required size="large" placeholder="Enter your facebook URL" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold">Note</label>
                <TextArea rows={6} size="large" required maxLength={6} />
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

"use client";

import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
    userType: Yup.string().required("Please select your type."),
    name: Yup.string().required("Name is required."),
    contact: Yup.string()
        .required("Email or Phone is required.")
        .test(
            "valid-contact",
            "Enter a valid email or phone number.",
            (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation
                const phoneRegex = /^[0-9]{10,15}$/; // Phone validation
                return emailRegex.test(value) || phoneRegex.test(value);
            }
        ),
    timeRange: Yup.string().required("Time range is required."),
    need: Yup.string().required("Please select what you need."),
});

const GetOffer = () => {
    const handleSubmit = (values: any) => {
        console.log("Form Data:", values);
    };

    return (
        <Formik
            initialValues={{
                userType: "",
                name: "",
                contact: "",
                timeRange: "",
                need: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, setFieldValue, values }) => (
                <Form className="bg-white shadow-lg flex items-center justify-center rounded-2xl flex-col w-[95%] md:w-9/12 p-5 sm:p-10 lg:w-7/12 xl:w-5/12 2xl:w-4/12">
                    <div className="w-full mb-1 flex items-start    flex-col ">
                        <label htmlFor="" className="text-black font-semibold m-2">
                            I am
                        </label>
                        <Select
                            label="Select your type"
                            fullWidth
                            selectedKeys={values.userType ? [values.userType] : undefined}
                            onSelectionChange={(key) => setFieldValue("userType", key.currentKey)}
                            className="rounded-xl "
                        >
                            <SelectItem key="Private">Private</SelectItem>
                            <SelectItem key="Company">Company</SelectItem>
                            <SelectItem key="Student">Student</SelectItem>
                        </Select>
                        {errors.userType && touched.userType && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.userType}
                            </div>
                        )}
                    </div>

                    <div className="w-full mb-1 flex items-start    flex-col ">

                        <label htmlFor="" className="text-black font-semibold m-2">
                            Enter your name
                        </label>
                        <Input
                            label="Enter name"
                            fullWidth
                            className="rounded-xl "
                            value={values.name}
                            onChange={(e) => setFieldValue("name", e.target.value)}
                            isInvalid={touched.name && !!errors.name}
                            errorMessage={errors.name}
                        />
                    </div>

                    <div className="w-full mb-1 flex items-start    flex-col ">
                        <label htmlFor="" className="text-black font-semibold m-2">
                            Enter email or phone number
                        </label>
                        <Input
                            label="Email Address / Phone Number"
                            fullWidth
                            className="rounded-xl "
                            value={values.contact}
                            onChange={(e) => setFieldValue("contact", e.target.value)}
                            isInvalid={touched.contact && !!errors.contact}
                            errorMessage={errors.contact}
                        />
                    </div>

                    <div className="w-full mb-1 flex items-start    flex-col ">

                        <label htmlFor="" className="text-black font-semibold m-2">
                            Enter time range
                        </label>
                        <Input
                            label="Time Range"
                            fullWidth
                            className="rounded-xl "
                            value={values.timeRange}
                            onChange={(e) => setFieldValue("timeRange", e.target.value)}
                            isInvalid={touched.timeRange && !!errors.timeRange}
                            errorMessage={errors.timeRange}
                        />
                    </div>

                    <div className="w-full mb-4 flex items-start    flex-col ">
                        <label htmlFor="" className="text-black font-semibold m-2">
                            I need
                        </label>
                        <Select
                            label="Select your need"
                            // label="I need"
                            // placeholder="Select your need"
                            fullWidth
                            className="rounded-xl "
                            selectedKeys={values.need ? [values.need] : undefined}
                            onSelectionChange={(key) => setFieldValue("need", key.currentKey)}
                        >
                            <SelectItem key="Transport">Transport</SelectItem>
                            <SelectItem key="Cleaning">Cleaning</SelectItem>
                            <SelectItem key="Moving Helper">Moving Helper</SelectItem>
                        </Select>
                        {errors.need && touched.need && (
                            <div className="text-red-500 text-sm mt-1">{errors.need}</div>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="overflow-hidden bg-[#4B4B4B] flex items-center justify-center gap-2.5 self-stretch px-20 py-3 mt-6 w-full text-lg font-semibold text-white hover:scale-105 transition-all duration-500 rounded-3xl max-md:px-5"
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default GetOffer;

"use client";

import React, { useState } from "react";
import {
    Input,
    Button,
    Select,
    SelectItem,
    Checkbox,
    CheckboxGroup,
} from "@nextui-org/react";

const WorkWithUs = () => {
    const [formData, setFormData] = useState<any>({
        name: "",
        address: "",
        email: "",
        phone: "",
        vehicleNumber: "",
        licenseNumber: "",
        userType: "",
        workBasis: "",
        services: [],
    });

    const [isTerm, setIsTerm] = useState<boolean>(false);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const handleChange = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const servicesOptions = [
        { key: "Transport", value: "Transport" },
        { key: "Cleaning", value: "Cleaning" },
        { key: "Helper", value: "Moving Helper" },
    ];

    const handleSubmit = () => {
        if (!isTerm) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        console.log("Form Data:", formData);
    };

    const handleServiceChange = (newValues: string[]) => {
        handleChange("services", newValues);

        if (newValues.length === servicesOptions.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const handleSelectAllChange = (checked: boolean) => {
        setSelectAll(checked);
        handleChange(
            "services",
            checked ? servicesOptions.map((service) => service.value) : []
        );
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-9/12 p-5 sm:p-10 lg:w-7/12 xl:w-6/12 2xl:w-4/12">
            {/* Name Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your name</label>
                <Input
                    label="Your Full Name"
                    fullWidth
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </div>

            {/* Address Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your address</label>
                <Input
                    label="Your Address"
                    fullWidth
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                />
            </div>

            {/* Email Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your email</label>
                <Input
                    label="example@example.com"
                    fullWidth
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>

            {/* Phone Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your phone number</label>
                <Input
                    label="123-456-7890"
                    fullWidth
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            {/* Services Section */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Type of work you want</label>
                <Checkbox
                    isSelected={selectAll}
                    onChange={(e) => handleSelectAllChange(e.target.checked)}
                    className="mb-1"
                >
                    Select All
                </Checkbox>
                <CheckboxGroup
                    value={formData.services}
                    onChange={handleServiceChange}
                >
                    {servicesOptions.map((service) => (
                        <Checkbox key={service.key} value={service.value}>
                            {service.value}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            </div>

            {/* Driving License Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Do you have a driving license?</label>
                <Select
                    label="Select an option"
                    fullWidth
                    selectedKeys={formData.userType ? [formData.userType] : undefined}
                    onSelectionChange={(key) => handleChange("userType", key.currentKey)}
                >
                    <SelectItem key="yes">Yes</SelectItem>
                    <SelectItem key="no">No</SelectItem>
                </Select>
            </div>

            {/* Work Basis Field */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Work basis</label>
                <Select
                    label="Select an option"
                    fullWidth
                    selectedKeys={formData.workBasis ? [formData.workBasis] : undefined}
                    onSelectionChange={(key) => handleChange("workBasis", key.currentKey)}
                >
                    <SelectItem key="full_time">Full Time</SelectItem>
                    <SelectItem key="part_time">Part Time</SelectItem>
                    <SelectItem key="hourly">Hourly</SelectItem>
                </Select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center justify-start w-full mt-4">
                <Checkbox
                    isSelected={isTerm}
                    onChange={() => setIsTerm(!isTerm)}
                    className="mb-0.5"
                >
                    I agree to the terms and conditions.
                </Checkbox>
            </div>

            {/* Submit Button */}
            <Button
                onClick={handleSubmit}
                className="w-full mt-8 bg-[#4B4B4B] text-white text-lg"
            >
                Submit
            </Button>
        </div>
    );
};

export default WorkWithUs;

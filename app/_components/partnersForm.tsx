"use client";

import React, { useState } from "react";
import {
    Input,
    Button,
    Select,
    SelectItem,
    Checkbox,
    Textarea,
} from "@nextui-org/react";

const PartnerForm = () => {
    const [formData, setFormData] = useState<any>({
        userType: "",
        name: "",
        email: "",
        phone: "",
        vehicleNumber: "",
        licenseNumber: "",
    });

    const [isTerm, setIsTerm] = useState<boolean>(false);

    const handleChange = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-9/12 p-5 sm:p-10 lg:w-7/12 xl:w-6/12 2xl:w-4/12">
            {/* User Type Selection */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold text-start mb-2">
                    I am a
                </label>
                <Select
                    label="Select Who you are"
                    fullWidth
                    selectedKeys={formData.userType ? [formData.userType] : undefined}
                    onSelectionChange={(key) =>
                        handleChange("userType", key.currentKey as string)
                    }
                >
                    <SelectItem key="Private">Private Individual</SelectItem>
                    <SelectItem key="Company">Company</SelectItem>
                    <SelectItem key="Student">Student</SelectItem>
                </Select>
            </div>

            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your name</label>
                <Input
                    label="Name"
                    fullWidth
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </div>

            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">
                    Enter Your Email
                </label>
                <Input
                    label="Enter Email"
                    fullWidth
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>

            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">
                    Enter Your Phone Number
                </label>
                <Input
                    label="Enter Phone"
                    fullWidth
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            {/* Vehicle Number */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">
                    Enter Vehicle Number
                </label>
                <Input
                    label="Vehicle Number"
                    fullWidth
                    value={formData.vehicleNumber}
                    onChange={(e) => handleChange("vehicleNumber", e.target.value)}
                />
            </div>

            {/* License Number */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">
                    Enter License Number
                </label>
                <Input
                    label="License Number"
                    fullWidth
                    value={formData.licenseNumber}
                    onChange={(e) => handleChange("licenseNumber", e.target.value)}
                />
            </div>



            <div className="flex items-center justify-start w-full mt-4">
                <Checkbox
                    isSelected={isTerm}
                    onChange={() => setIsTerm(!isTerm)}
                    className="mb-0.5"
                >
                    I agree to the terms and conditions.
                </Checkbox>
            </div>

            <Button
                onClick={handleSubmit}
                className="w-full mt-8 bg-[#4B4B4B] text-white text-lg"
            >
                Submit
            </Button>
        </div>
    );
};

export default PartnerForm;

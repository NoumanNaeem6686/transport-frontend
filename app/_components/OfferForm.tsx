"use client";

import React, { useState } from "react";
import { Input, Button, Select, SelectItem, Checkbox, CheckboxGroup, Textarea } from "@nextui-org/react";

const GetOffer = () => {
    const [formData, setFormData] = useState<any>({
        userType: "",
        name: "",
        email: "",
        phone: "",
        timeRange: "000",
        services: [],
        from: "",
        to: "",
        vanType: "",
        helpers: "",
        workers: "",
        spaceSize: "",
        specialRequirements: "",
    });

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
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col  md:w-9/12 p-5 sm:p-10 lg:w-6/12 ">
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold text-start mb-2">I am a</label>
                <Select
                    label="Select Who you are"
                    fullWidth
                    selectedKeys={formData.userType ? [formData.userType] : undefined}
                    onSelectionChange={(key) => handleChange("userType", key.currentKey)}
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

                <label className="text-black font-semibold mb-2">Enter Your Email</label>
                <Input
                    label="Enter Email"
                    fullWidth
                    value={formData.contact}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>
            <div className="w-full mb-4 flex flex-col items-start">

                <label className="text-black font-semibold mb-2">Enter Your Phone Number</label>
                <Input
                    label="Enter Phone"
                    fullWidth
                    value={formData.contact}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            <div className="w-full mb-4 flex flex-col items-start">

                <label className="text-black font-semibold mb-2">Best time range</label>
                <Input
                    type="datetime-local"
                    label="Time Range"
                    fullWidth
                    value={formData.timeRange}
                    onChange={(e) => handleChange("timeRange", e.target.value)}
                />
            </div>

            <div className="w-full mb-4 flex flex-col items-start">

                <label className="text-black font-semibold mb-2">Select service(s)</label>

                <CheckboxGroup
                    value={formData.services}
                    onChange={(newValues) => handleChange("services", newValues)}
                >
                    <Checkbox value="Transport">Transport</Checkbox>
                    <Checkbox value="Cleaning">Cleaning</Checkbox>
                    <Checkbox value="Helper">Helper</Checkbox>
                </CheckboxGroup>
            </div>

            {formData.services.includes("Transport") && (
                <>
                    <div className="w-full mb-4 flex flex-col items-start">

                        <label className="text-black font-semibold mb-2">From</label>
                        <Input
                            label="Pickup Location"
                            fullWidth
                            value={formData.from}
                            onChange={(e) => handleChange("from", e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4 flex flex-col items-start">

                        <label className="text-black font-semibold mb-2">To</label>
                        <Input
                            label="Drop Location"
                            fullWidth
                            value={formData.to}
                            onChange={(e) => handleChange("to", e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">Van type</label>
                        <Select
                            fullWidth
                            label="Select Van Type"
                            selectedKeys={formData.vanType ? [formData.vanType] : undefined}
                            onSelectionChange={(key) => handleChange("vanType", key.currentKey)}
                        >
                            <SelectItem key="Small">Small Van</SelectItem>
                            <SelectItem key="Medium">Medium Van</SelectItem>
                            <SelectItem key="Large">Large Van</SelectItem>
                        </Select>
                    </div>
                </>
            )}

            {formData.services.includes("Cleaning") && (
                <>
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">Number of cleaners</label>
                        <Input
                            label="Cleaners"
                            type="number"
                            fullWidth
                            value={formData.workers}
                            onChange={(e) => handleChange("workers", e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">Space size (sqm)</label>
                        <Input
                            label="Space Size"
                            type="number"
                            fullWidth
                            value={formData.spaceSize}
                            onChange={(e) => handleChange("spaceSize", e.target.value)}
                        />
                    </div>
                </>
            )}

            {formData.services.includes("Helper") && (
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Number of helpers</label>
                    <Input
                        label="Helpers"
                        type="number"
                        fullWidth
                        value={formData.helpers}
                        onChange={(e) => handleChange("helpers", e.target.value)}
                    />
                </div>
            )}

            <div className="w-full mb-4 flex flex-col items-start">

                <label className="text-black font-semibold mb-2">Special requirements:</label>
                <Textarea
                    label="Special Requirements"
                    fullWidth
                    value={formData.specialRequirements}
                    onChange={(e) => handleChange("specialRequirements", e.target.value)}
                    rows={4}
                />

            </div>

            <Button onClick={handleSubmit} className="w-full mt-8 bg-[#4B4B4B] text-white text-lg">
                Submit
            </Button>
        </div>
    );
};

export default GetOffer;

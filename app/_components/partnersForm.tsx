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
import { toast } from "sonner";

const PartnerForm = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<any>({
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

    const handleSubmit = async () => {
        if (!isTerm) {
            toast.error("You must agree to the terms and conditions.");
            return;
        }
        if (!formData.name || !formData.email || !formData.phone) {
            toast.error("Name,Email and phone number is required.");
            return;
        }
        console.log("Form Data:", formData);
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/partner`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message ? errorData.message : "Error during submission");
                throw new Error(errorData.message || "Failed to submit data");
            }

            const result = await response.json();
            toast.error("Submission successful");
            setFormData({
                name: "",
                email: "",
                phone: "",
                vehicleNumber: "",
                licenseNumber: "",
            })
            console.log("Submission successful:", result);
        } catch (error: any) {
            console.error("Error during submission:", error.message);
            toast.error(error.message ? error.message : "Error during submission");

        } finally {
            setLoading(false)

        }
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-9/12 p-5 sm:p-10 lg:w-7/12 xl:w-6/12 2xl:w-4/12">
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
                {
                    loading ? "Submitting..." : "Submit"
                }
            </Button>
        </div>
    );
};

export default PartnerForm;

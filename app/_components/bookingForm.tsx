"use client"

import React, { useState, useEffect } from "react";
import {
    Input,
    Button,
    Select,
    SelectItem,
    Textarea,
    Checkbox,
} from "@nextui-org/react";

interface GetOfferProps {
    slug: string;
}

const Booking: React.FC<GetOfferProps> = ({ slug }) => {
    console.log("🚀 ~ slug:", slug);
    const [formData, setFormData] = useState<any>({
        userType: "",
        name: "",
        email: "",
        phone: "",
        timeRange: "000",
        from: "",
        to: "",
        distance: "",
        vanType: "",
        helpers: "",
        workers: "",
        spaceSize: "",
        specialRequirements: "",
        isWorking: false,
    });

    const [price, setPrice] = useState<number>(0);
    const [originalPrice, setOriginalPrice] = useState<number>(0);

    const handleChange = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const calculatePrice = () => {
        let calculatedPrice = 0;

        if (slug === "transport") {
            const distance = parseFloat(formData.distance) || 0;
            calculatedPrice = distance * 10; // e.g., $10 per km
            if (formData.vanType === "Large") calculatedPrice += 50;
        } else if (slug === "cleaning") {
            const workers = parseInt(formData.workers) || 0;
            const spaceSize = parseFloat(formData.spaceSize) || 0;
            calculatedPrice = workers * 20; // e.g., $20 per cleaner
            if (spaceSize) calculatedPrice += spaceSize * 0.5; // e.g., $0.5 per sqm
        } else if (slug === "helper") {
            const helpers = parseInt(formData.helpers) || 0;
            calculatedPrice = helpers * 15; // e.g., $15 per helper
        }

        setOriginalPrice(calculatedPrice); // Store original price before discount

        // Apply 50% discount if user is working
        if (formData.isWorking) {
            calculatedPrice = calculatedPrice * 0.5;
        }

        setPrice(calculatedPrice);
    };

    useEffect(() => {
        calculatePrice();
    }, [formData, slug]);

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        console.log("Final Price:", price);
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-9/12 p-5 sm:p-10 lg:w-6/12">
            {/* <h2 className="text-xl font-bold mb-4">{slug.toUpperCase()} Booking</h2> */}

            {/* User Type */}
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

            {/* Name */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter your name</label>
                <Input
                    label="Name"
                    fullWidth
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter Your Email</label>
                <Input
                    label="Enter Email"
                    fullWidth
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>

            {/* Phone */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Enter Your Phone Number</label>
                <Input
                    label="Enter Phone"
                    fullWidth
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            {/* Time Range */}
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

            {/* Transport Form Fields */}
            {slug === "transport" && (
                <>
                    {/* From */}
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">From</label>
                        <Input
                            label="Pickup Location"
                            fullWidth
                            value={formData.from}
                            onChange={(e) => handleChange("from", e.target.value)}
                        />
                    </div>

                    {/* To */}
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">To</label>
                        <Input
                            label="Drop Location"
                            fullWidth
                            value={formData.to}
                            onChange={(e) => handleChange("to", e.target.value)}
                        />
                    </div>

                    {/* Distance */}
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">Distance (km)</label>
                        <Input
                            label="Enter Distance in km"
                            type="number"
                            fullWidth
                            value={formData.distance}
                            onChange={(e) => handleChange("distance", e.target.value)}
                        />
                    </div>

                    {/* Van Type */}
                    <div className="w-full mb-4 flex flex-col items-start">
                        <label className="text-black font-semibold mb-2">Van type</label>
                        <Select
                            label="Select Van Type"
                            fullWidth
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

            {/* Cleaning Form Fields */}
            {slug === "cleaning" && (
                <>
                    {/* Number of Cleaners */}
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

                    {/* Space Size */}
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

            {/* Helper Form Fields */}
            {slug === "helper" && (
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

            {/* Special Requirements */}
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

            {/* Working Discount Checkbox */}
            <div className="w-full mb-4 flex items-center">
                <Checkbox
                    isSelected={formData.isWorking}
                    onChange={(isSelected) => handleChange("isWorking", isSelected)}
                >
                    Are you working? (Get 50% discount)
                </Checkbox>
            </div>

            {/* Price Display */}
            <div className="w-full mb-4">
                {formData.isWorking && originalPrice !== price ? (
                    <h3 className="text-black font-bold">
                        Estimated Price:{" "}
                        <span style={{ textDecoration: "line-through" }}>
                            ${originalPrice.toFixed(2)}
                        </span>{" "}
                        ${price.toFixed(2)}
                    </h3>
                ) : (
                    <h3 className="text-black font-bold">
                        Estimated Price: ${price.toFixed(2)}
                    </h3>
                )}
            </div>

            <Button
                onClick={handleSubmit}
                className="w-full mt-8 bg-[#4B4B4B] text-white text-lg"
            >
                Proceed
            </Button>
        </div>
    );
};

export default Booking;

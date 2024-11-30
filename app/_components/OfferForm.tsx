"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  CheckboxGroup,
  Textarea,
} from "@nextui-org/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import TextField from "@mui/material/TextField";
import { renderTimeViewClock } from "@mui/x-date-pickers";
const GetOffer = () => {
  const [formData, setFormData] = useState<any>({
    userType: "",
    name: "",
    email: "",
    phone: "",
    // timeRange: "",
    // timeRange: "000",
    dateRange: "",
    services: [],
    from: "",
    to: "",
    vanType: "",
    helpers: "",
    workers: "",
    spaceSize: "",
    specialRequirements: "",
    frequency: "",
  });

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isTerm, setIsTerm] = useState<boolean>(false);
  const [value, setValue] = useState();

  const handleChange = (key: string, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleServiceChange = (newValues: any) => {
    // Update services in formData
    handleChange("services", newValues);

    // Update "Select All" checkbox based on services selection
    if (newValues.length === servicesOptions.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      handleChange(
        "services",
        servicesOptions.map((service) => service.value)
      );
    } else {
      handleChange("services", []);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  const servicesOptions = [
    { key: "Transport", value: "Transport" },
    { key: "Cleaning", value: "Cleaning" },
    { key: "Helper", value: "Helper" },
  ];

  const frequencyOptions = [
    { key: "Monthly", value: "Monthly" },
    { key: "Weekly", value: "Weekly" },
    { key: "One-time", value: "One-time" },
  ];

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

      {/* Name Input */}
      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">Enter your name</label>
        <Input
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      {/* Email Input */}
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

      {/* Phone Input */}
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

      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">Best Date range</label>
        <Input
          type="date"
          label="Date Range"
          fullWidth
          value={formData.dateRange}
          onChange={(e) => handleChange("dateRange", e.target.value)}
        />
      </div>
      <div className="w-full mb-4 flex flex-col items-start text-black">
        <label className="text-black font-semibold mb-2">Best time range</label>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            // label="With Time Clock"
            sx={{
              width: "100%",
              borderRadius: "25px",
            }}
            value={formData.timeRange}
            onChange={(newValue) => handleChange("timeRange", newValue)}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticTimePicker orientation="landscape"
                        value={formData.timeRange}
                        onChange={(newValue) => handleChange("timeRange", newValue)}
                    />
                    {/* <StaticTimePicker
                        orientation="landscape"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        displayStaticWrapperAs="desktop"
                        renderInput={(params) => <TextField {...params} />}
                    /> 
                </LocalizationProvider> */}
      </div>

      {/* Services Selection */}
      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">
          Select service(s)
        </label>
        <Checkbox
          isSelected={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
          className="mb-0.5"
        >
          Select All
        </Checkbox>
        <CheckboxGroup value={formData.services} onChange={handleServiceChange}>
          {servicesOptions.map((service) => (
            <Checkbox key={service.key} value={service.value}>
              {service.value}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>

      {/* Frequency Selection */}
      {formData.services.length > 0 && (
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">
            Frequery Of Work
          </label>
          <Select
            label="Frequency"
            fullWidth
            selectedKeys={formData.frequency ? [formData.frequency] : undefined}
            onSelectionChange={(key) =>
              handleChange("frequency", key.currentKey as string)
            }
          >
            {frequencyOptions.map((freq) => (
              <SelectItem key={freq.key}>{freq.value}</SelectItem>
            ))}
          </Select>
        </div>
      )}

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
          {/* Uncomment and use if vanType is needed
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">Van type</label>
            <Select
              fullWidth
              label="Select Van Type"
              selectedKeys={formData.vanType ? [formData.vanType] : undefined}
              onSelectionChange={(key) =>
                handleChange("vanType", key.currentKey as string)
              }
            >
              <SelectItem key="Small">Small Van</SelectItem>
              <SelectItem key="Medium">Medium Van</SelectItem>
              <SelectItem key="Large">Large Van</SelectItem>
            </Select>
          </div>
          */}
        </>
      )}

      {formData.services.includes("Cleaning") && (
        <>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">
              Number of cleaners
            </label>
            <Input
              label="Cleaners"
              type="number"
              fullWidth
              value={formData.workers}
              onChange={(e) => handleChange("workers", e.target.value)}
              min={1}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">
              Space size (sqm)
            </label>
            <Input
              label="Space Size"
              type="number"
              fullWidth
              value={formData.spaceSize}
              onChange={(e) => handleChange("spaceSize", e.target.value)}
              min={1}
            />
          </div>
        </>
      )}
      {formData.services.includes("Helper") && (
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">
            Number of helpers
          </label>
          <Input
            label="Helpers"
            type="number"
            fullWidth
            value={formData.helpers}
            onChange={(e) => handleChange("helpers", e.target.value)}
            min={1}
          />
        </div>
      )}

      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">
          Special requirements:
        </label>
        <Textarea
          label="Special Requirements"
          fullWidth
          value={formData.specialRequirements}
          onChange={(e) => handleChange("specialRequirements", e.target.value)}
          rows={4}
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

export default GetOffer;

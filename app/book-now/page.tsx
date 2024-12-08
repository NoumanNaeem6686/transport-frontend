"use client"
import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Checkbox } from '@nextui-org/react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ServicesCard } from '../_components/servicesCard';
import { Trash, X } from 'lucide-react';
import { LocalizationProvider, renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { toast } from 'sonner';

const pricing = {
    transport: {
        ratePerKm: 10,
        smallVan: 50,
        largeVan: 100,
    },
    helper: {
        ratePerHelperPerHour: 15,
    },
    cleaning: {
        ratePerSqFt: 1,
        ratePerCleaner: 20,
    },
};

interface Service {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface FormData {
    distance?: number;
    from?: string;
    to?: string;
    helpers?: number;
    hours?: number;
    area?: number;
    cleaners?: number;
}

interface SelectedService extends Service, FormData { }

const requiredFields: { [key: string]: (keyof FormData)[] } = {
    transport: ['from', 'to', 'distance'],
    helper: ['helpers', 'hours'],
    cleaning: ['area', 'cleaners'],
};

const BookingPage: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const [formData, setFormData] = useState<FormData>({});
    const [totalCost, setTotalCost] = useState(0);
    const [time, setTime] = useState<any>()
    const [isWorking, setIsWorking] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });

    const services: Service[] = [
        {
            id: 'transport',
            name: 'Transport',
            description: 'Book a transport service. We offer reliable and efficient transportation solutions for your needs.',
            image: '/get-car.jpg',
        },
        {
            id: 'helper',
            name: 'Helper',
            description: 'Hire helpers for moving. Our team assists in packing, loading, and unloading efficiently and safely.',
            image: '/helper.jpg',
        },
        {
            id: 'cleaning',
            name: 'Cleaning',
            description: 'Get your space cleaned. We provide thorough cleaning services to make your place spotless and fresh.',
            image: '/cleaning.jpg',
        },
    ];

    const handleOpenForm = (service: Service) => {
        setCurrentService(service);
        const existingService = selectedServices.find((s) => s.id === service.id);
        if (existingService) {
            const { id, name, description, image, ...existingFormData } = existingService;
            setFormData(existingFormData);
        } else {
            setFormData({});
        }
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
        setCurrentService(null);
    };

    const handleAddService = () => {
        if (currentService) {
            const updatedServices = [...selectedServices];
            const serviceIndex = updatedServices.findIndex((s) => s.id === currentService.id);
            if (serviceIndex !== -1) {
                // Update existing service
                updatedServices[serviceIndex] = { ...currentService, ...formData };
            } else {
                // Add new service
                updatedServices.push({ ...currentService, ...formData });
            }
            setSelectedServices(updatedServices);
        }
        setVisible(false);
        setFormData({});
    };

    useEffect(() => {
        calculateTotal();
    }, [selectedServices, isWorking]);

    const handleInputChange = (key: keyof FormData, value: string | number) => {
        setFormData({ ...formData, [key]: value });
    };

    const calculateTotal = () => {
        let total = 0;
        selectedServices.forEach((service) => {
            if (service.id === 'transport') {
                total += (service.distance || 0) * pricing.transport.ratePerKm;

            }
            if (service.id === 'helper') {
                total += (service.helpers || 0) * (service.hours || 0) * pricing.helper.ratePerHelperPerHour;
            }
            if (service.id === 'cleaning') {
                total += (service.area || 0) * pricing.cleaning.ratePerSqFt;
                if (service.cleaners) {
                    total += (service.cleaners || 0) * pricing.cleaning.ratePerCleaner;
                }
            }
        });
        if (isWorking) {
            total = total * 0.5; // Apply 50% discount
        }
        setTotalCost(total);
    };

    const areFieldsFilled = () => {
        if (currentService) {
            const fields = requiredFields[currentService.id];
            return fields.every((field) => formData[field] !== undefined && formData[field] !== '');
        }
        return false;
    };

    const handleDeleteService = (serviceId: string) => {
        setSelectedServices(selectedServices.filter((s) => s.id !== serviceId));
    };

    const handleSubmit = async () => {
        if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.date) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const bookingData = {
            userInfo: {
                ...userInfo,
                time: dayjs(time).format("HH:mm"),
            },
            selectedServices,
            totalCost,
            isWorking,
        };

        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to create booking.");
                throw new Error(errorData.message || "Failed to create booking.");
            }

            const result = await response.json();
            toast.success("Booking created successfully!");
            console.log("Booking result:", result);
        } catch (error) {
            console.error("Error creating booking:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-20 min-h-screen flex flex-col md:flex-row p-4 gap-4">
            {/* Left Section: User Info and Service Cards */}


            <div className="flex flex-col w-full md:w-6/12 xl:w-7/12 ">
                <Card className="p-4 flex flex-col gap-2">

                    <div className='mb-8 ml-3'>

                        <h1 className='text-3xl font-bold sm:text-4xl'>
                            Book <span className='text-sky-800'>Now</span>
                        </h1>
                        <p className='mt-1 '>
                            Book for a service now!
                        </p>
                    </div>
                    <Input
                        label="Name"
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="Email"
                        type="email"
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="Phone"
                        type="tel"
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="Date for service"
                        type="date"
                        onChange={(e) => setUserInfo({ ...userInfo, date: e.target.value })}
                        className="mb-2"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label="Time for service"
                            sx={{
                                width: "100%",
                                borderRadius: "25px"
                            }}
                            value={time}
                            onChange={(newValue) => setTime(newValue)}
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                            }}
                        />
                    </LocalizationProvider>



                    {selectedServices.length > 0 ? (
                        selectedServices.map((service, index) => {
                            // Existing code for displaying selected services...
                            let serviceCost = 0;
                            let costBreakdown = '';

                            if (service.id === 'transport') {
                                const distanceCost = (service.distance || 0) * pricing.transport.ratePerKm;

                                serviceCost = distanceCost;

                                costBreakdown = `Distance Cost: ${service.distance || 0} km * $${pricing.transport.ratePerKm}/km = $${distanceCost}\n`
                                    + `Total: $${serviceCost}`;
                            }
                            else if (service.id === 'helper') {
                                serviceCost = (service.helpers || 0) * (service.hours || 0) * pricing.helper.ratePerHelperPerHour;
                                costBreakdown = `${service.helpers || 0} helpers * ${service.hours || 0} hours * $${pricing.helper.ratePerHelperPerHour}/hr = $${serviceCost}`;
                            }
                            else if (service.id === 'cleaning') {
                                const areaCost = (service.area || 0) * pricing.cleaning.ratePerSqFt;
                                const cleanerCost = (service.cleaners || 0) * pricing.cleaning.ratePerCleaner;
                                serviceCost = areaCost + cleanerCost;
                                costBreakdown = `Area Cost: ${service.area || 0} sq ft * $${pricing.cleaning.ratePerSqFt}/sq ft = $${areaCost}\n`
                                    + `Cleaner Cost: ${service.cleaners || 0} cleaners * $${pricing.cleaning.ratePerCleaner} = $${cleanerCost}\n`
                                    + `Total: $${serviceCost}`;
                            }

                            return (
                                <Card key={index} className="p-4 mb-2 bg-[#f0f2f4]">
                                    <div className="flex justify-between items-center">
                                        <h5 className='font-bold text-xl text-sky-800 mb-3'>{service.name}</h5>
                                        <button className=' text-[#1CAC78] flex items-center justify-center p-2 rounded-full hover:scale-95'
                                            onClick={() => handleDeleteService(service.id)}
                                        >
                                            <X className='h-5 w-5' />
                                        </button>
                                    </div>
                                    <ul>
                                        {Object.entries(service)
                                            .filter(([key]) => !['id', 'name', 'description', 'image'].includes(key))
                                            .map(([key, value]) => (
                                                <li key={key} className='text-lg capitalize'>
                                                    {key}: {value}
                                                </li>
                                            ))}
                                    </ul>
                                    <p className='mt-2 whitespace-pre-line'>{costBreakdown}</p>
                                </Card>
                            );
                        })
                    ) : (
                        <div className="p-4 flex w-full items-center justify-end">
                            <p>Select a Service.</p>
                        </div>
                    )}
                    {selectedServices.length > 0 && (
                        <>
                            <Checkbox
                                isSelected={isWorking}
                                onChange={(e) => setIsWorking(e.target.checked)}
                                className="mb-2"
                            >
                                If you are working, you have 50% off
                            </Checkbox>
                            <h4 className="mt-4 text-end pr-4">
                                Total Cost: ${totalCost}
                                {isWorking && <span className="text-green-600"> (50% off applied)</span>}
                            </h4>

                            <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center w-full justify-end">
                                <button
                                    onClick={handleSubmit}

                                    className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded-lg bg-sky-800 border-solid min-h-[46px] max-md:px-5">
                                    {
                                        loading ? "Booking..." : "Book Now"
                                    }
                                </button>
                            </div>
                        </>
                    )}
                </Card>
            </div>

            <div className=" items-end lg:px-20 text-sm text-gray-50 flex flex-col gap-4 w-full md:w-6/12 xl:w-5/12 max-md:pl-5">
                <div className="flex flex-col justify-center items-start py-10 w-full md:bg-sky-800 md:w-[350px] rounded-xl max-md:pr-5">
                    <div className="flex flex-col justify-center gap-6">
                        {services.map((service, index) => (
                            <div className="w-full md:-ml-10" key={index}>
                                <ServicesCard service={service} handleOpenForm={handleOpenForm} pricing={pricing} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={visible} onClose={handleClose}>
                <ModalContent>
                    <ModalHeader>
                        <h4 className='text-xl sm:text-2xl font-bold '>Add <span className='text-sky-800'>
                            {currentService?.name} {" "}
                        </span>
                            Details</h4>
                    </ModalHeader>
                    <ModalBody>
                        {currentService?.id === 'transport' && (
                            <>
                                <Input
                                    label="From"
                                    value={formData.from || ''}
                                    onChange={(e) => handleInputChange('from', e.target.value)}
                                    className="mb-2"
                                />
                                <Input
                                    label="To"
                                    value={formData.to || ''}
                                    onChange={(e) => handleInputChange('to', e.target.value)}
                                    className="mb-2"
                                />
                                <Input
                                    label="Distance (km)"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.distance !== undefined ? formData.distance : ''}
                                    onChange={(e) => handleInputChange('distance', parseFloat(e.target.value))}
                                    className="mb-2"
                                />

                            </>
                        )}
                        {currentService?.id === 'helper' && (
                            <>
                                <Input
                                    label="Number of Helpers"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.helpers !== undefined ? formData.helpers : ''}
                                    onChange={(e) => handleInputChange('helpers', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                                <Input
                                    label="Hours Required"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.hours !== undefined ? formData.hours : ''}
                                    onChange={(e) => handleInputChange('hours', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                            </>
                        )}
                        {currentService?.id === 'cleaning' && (
                            <>
                                <Input
                                    label="Area (sq ft)"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.area !== undefined ? formData.area : ''}
                                    onChange={(e) => handleInputChange('area', parseFloat(e.target.value))}
                                    className="mb-2"
                                />
                                <Input
                                    label="Number of Cleaners"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.cleaners !== undefined ? formData.cleaners : ''}
                                    onChange={(e) => handleInputChange('cleaners', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <div className="flex gap-3 items-center self-start mt-8 text-base font-normal text-center">
                            <button onClick={handleClose} className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-5 py-2.5 my-auto  text-white bg-sky-800 rounded-xl max-md:px-5">
                                Cancel

                            </button>
                            <button onClick={handleAddService} disabled={!areFieldsFilled()} className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-5 py-2.5 my-auto  text-white rounded-xl border border-[#1CAC78] bg-[#1CAC78] border-solid max-md:px-5">
                                Add Service

                            </button>
                        </div>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default BookingPage;

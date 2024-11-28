'use client';

import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Select, SelectItem } from '@nextui-org/react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/react';
import { ServicesCard } from '../_components/servicesCard';

const pricing = {
    transport: {
        ratePerKm: 10,
        smallVan: 50,
        mediumVan: 75,
        largeVan: 100,
    },
    helper: {
        ratePerHelperPerHour: 15,
    },
    cleaning: {
        ratePerSqFt: 1,
        ratePerCleaner: 20, // Added rate per cleaner
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
    vanType?: string;
    helpers?: number;
    hours?: number;
    area?: number;
    cleaners?: number;
}

interface SelectedService extends Service, FormData { }

const BookingPage: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [visible, setVisible] = useState(false);
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const [formData, setFormData] = useState<FormData>({});
    const [totalCost, setTotalCost] = useState(0);

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
        // Check if the service is already selected
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
    }, [selectedServices]);

    const handleInputChange = (key: keyof FormData, value: string | number) => {
        setFormData({ ...formData, [key]: value });
    };

    const calculateTotal = () => {
        let total = 0;
        selectedServices.forEach((service) => {
            if (service.id === 'transport') {
                total += (service.distance || 0) * pricing.transport.ratePerKm;
                if (service.vanType === 'small') total += pricing.transport.smallVan;
                if (service.vanType === 'medium') total += pricing.transport.mediumVan;
                if (service.vanType === 'large') total += pricing.transport.largeVan;
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
        setTotalCost(total);
    };

    return (
        <div className="mt-20 min-h-screen flex flex-col md:flex-row p-4 gap-4">
            {/* Left Section: User Info and Service Cards */}
            <div className="flex flex-col gap-4 w-full md:w-4/12 xl:w-5/12">
                {services.map((service, index) => (
                    <div className="w-full" key={index}>
                        <ServicesCard service={service} handleOpenForm={handleOpenForm} />
                    </div>
                ))}
            </div>

            <div className="flex flex-col w-full md:w-8/12 xl:w-7/12 ">
                <Card className="p-4 flex flex-col gap-2">
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
                    <Input
                        label="Time for service"
                        type="time"
                        onChange={(e) => setUserInfo({ ...userInfo, time: e.target.value })}
                        className="mb-2"
                    />
                    {selectedServices.length > 0 ? (
                        selectedServices.map((service, index) => (
                            <Card key={index} className="p-4 mb-2">
                                <h5 className='font-semibold text-xl mb-3'>{service.name}</h5>
                                <ul>
                                    {Object.entries(service)
                                        .filter(([key]) => !['id', 'name', 'description', 'image'].includes(key))
                                        .map(([key, value]) => (
                                            <li key={key} className='text-lg capitalize'>
                                                {key}: {value}
                                            </li>
                                        ))}
                                </ul>
                            </Card>
                        ))
                    ) : (
                        <div className="p-4 flex w-full items-center justify-center">
                            <p>No services selected yet.</p>
                        </div>
                    )}
                    {selectedServices.length > 0 && (
                        <>
                            <h4 className="mt-4 text-end pr-4">Total Cost: ${totalCost}</h4>
                            <Button className="w-full mt-8 bg-[#4B4B4B] text-white text-lg">Book Now</Button>
                        </>
                    )}
                </Card>
            </div>

            <Modal isOpen={visible} onClose={handleClose}>
                <ModalContent>
                    <ModalHeader>
                        <h4>Add {currentService?.name} Details</h4>
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
                                <Select
                                    fullWidth
                                    label="Select Van Type"
                                    selectedKeys={formData.vanType ? [formData.vanType] : undefined}
                                    onSelectionChange={(key) =>
                                        handleInputChange("vanType", key.currentKey as string)

                                    }
                                >
                                    <SelectItem key="small">Small Van</SelectItem>
                                    <SelectItem key="medium">Medium Van</SelectItem>
                                    <SelectItem key="large">Large Van</SelectItem>
                                </Select>
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
                        <Button onClick={handleClose} color="danger">
                            Cancel
                        </Button>
                        <Button onClick={handleAddService}>Add Service</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default BookingPage;

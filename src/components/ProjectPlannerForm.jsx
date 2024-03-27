import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function ProjectPlannerForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        occupation: '',
        completionDate: '',
        projectDetails: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const redoStep = () => {
        setStep(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div className="relative min-h-screen flex" style={{ backgroundColor: '#F2E0D6FF' }}>
            <div className="container max-w-screen-xl mx-auto my-auto relative flex flex-col w-4/5">
                <div className="text-6xl font-BG  whitespace-pre-line text-center tracking-tighter">
                    Project Planner
                </div>
                <form onSubmit={handleSubmit} className="mt-12 md:w-4/5 mx-auto rounded-3xl" style={{ backgroundColor: '#ebe9d8' }}>
                    {step === 1 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 1/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8'}}>
                                <div className="h-full bg-black rounded-3xl w-1/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Let’s start at the very beginning
                            </div>

                            <div>
                                {/* Name input field */}
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8'}}
                                    value={formData.name} // This correctly points to formData.name
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Number input field */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Number"
                                    name="number" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8'}}
                                    value={formData.number} // This should point to formData.number
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Occupation input field */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Occupation"
                                    name="occupation" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8'}}
                                    value={formData.occupation} // This should point to formData.occupation
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={nextStep} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 2/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8'}}>
                                <div className="h-full bg-black rounded-3xl w-2/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Let’s talk budget & timelines
                            </div>
                            <div>
                                <div className="mt-12 flex items-center justify-center">
                                    <label className="text-base ">I want to launch my project on
                                    </label>
                                    <input
                                        type="date"
                                        id="completionDate"
                                        name="completionDate"
                                        value={formData.completionDate}
                                        onChange={handleChange}
                                        className="rounded-xl px-2 py-2  focus:outline-none"
                                        style={{ width: '300px', backgroundColor: '#e0cfc8', marginLeft: '10px' }} // Adjust the margin as needed

                                    />
                                </div>

                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 3/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8'}}>
                                <div className="h-full bg-black rounded-3xl w-3/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Give us the deets!
                            </div>
                            <div>
                                <textarea
                                    type="text"
                                    placeholder="Please provide a summary of your project"
                                    name="projectDetails" // This should match your formData property
                                    className="mt-4 border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none "
                                    rows={8} // Specify the number of rows here
                                    style={{ backgroundColor: '#e0cfc8'}}
                                    value={formData.projectDetails} // This should point to formData.number
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="mt-12 text-base  text-center">
                                Your submission has been received! We will aim to get back to you within 3 working days.
                            </div>
                            <div>
                                <div className="flex justify-center mt-12">
                                    <button type="button" onClick={redoStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                        Redo the planner
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ProjectPlannerForm;

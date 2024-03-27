import React, { useState } from 'react';

function InteractiveForm() {
    const [step, setStep] = useState(1); // State to manage the current step of the form
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
        setStep(step + 1); // Move to the next step
    };

    const prevStep = () => {
        setStep(step - 1); // Move to the previous step
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data when submitted
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
            <div className="w-64 border border-gray-300 p-4 rounded">
                {step === 1 && (
                    <>
                        {/* Name input field */}
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        {/* Number input field */}
                        <div>
                            <label htmlFor="number">Number:</label>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        {/* Occupation input field */}
                        <div>
                            <label htmlFor="occupation">Occupation:</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <button type="button" onClick={nextStep} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        {/* Date of completion input field */}
                        <div>
                            <label htmlFor="completionDate">Date of Completion:</label>
                            <input
                                type="date"
                                id="completionDate"
                                name="completionDate"
                                value={formData.completionDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <button type="button" onClick={prevStep} className="mt-4 mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Previous
                        </button>
                        <button type="button" onClick={nextStep} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Next
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        {/* Project details input field */}
                        <div>
                            <label htmlFor="projectDetails">Project Details:</label>
                            <textarea
                                id="projectDetails"
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <button type="button" onClick={prevStep} className="mt-4 mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Previous
                        </button>
                        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </>
                )}
            </div>
        </form>
    );
}

export default InteractiveForm;

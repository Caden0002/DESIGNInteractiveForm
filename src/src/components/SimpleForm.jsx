import React, { useState } from 'react';

function SimpleForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data when submitted
        // You can add further form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
            <div className="w-64 border border-gray-300 p-4 rounded">
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

                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default SimpleForm;

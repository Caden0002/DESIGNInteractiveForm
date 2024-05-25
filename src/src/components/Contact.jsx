import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 1 && (
                <div>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Name"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {currentStep === 2 && (
                <div>
                    <input
                        type="text"
                        {...register('number', { required: 'Number is required' })}
                        placeholder="Number"
                    />
                    {errors.number && <p>{errors.number.message}</p>}
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {currentStep === 3 && (
                <div>
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Message"
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                    <button type="submit">Submit</button>
                </div>
            )}
        </form>
    );
}


export default Contact;

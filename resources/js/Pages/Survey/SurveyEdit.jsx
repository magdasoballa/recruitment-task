import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const SurveyEdit = ({ survey }) => {
    const { data, setData, put, errors, processing } = useForm({
        question1: survey.question1,
        question2: survey.question2,
        question3: survey.question3,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('survey.update', survey.id));
    };

    return (
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Edytuj Ankietę</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="question1" className="block text-lg font-medium text-gray-700">Pytanie 1</label>
                    <input
                        type="text"
                        id="question1"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.question1}
                        name="question1"
                        onChange={(e) => setData('question1', e.target.value)}
                        required
                    />
                    {errors.question1 && <p className="text-red-500 text-sm">{errors.question1}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="question2" className="block text-lg font-medium text-gray-700">Pytanie 2</label>
                    <input
                        type="text"
                        id="question2"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.question2}
                        name="question2"
                        onChange={(e) => setData('question2', e.target.value)}
                        required
                    />
                    {errors.question2 && <p className="text-red-500 text-sm">{errors.question2}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="question3" className="block text-lg font-medium text-gray-700">Pytanie 3</label>
                    <input
                        type="text"
                        id="question3"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.question3}
                        name="question3"
                        onChange={(e) => setData('question3', e.target.value)}
                        required
                    />
                    {errors.question3 && <p className="text-red-500 text-sm">{errors.question3}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                    {processing ? 'Przesyłanie...' : 'Zaktualizuj Ankietę'}
                </button>
            </form>
        </div>
    );
};

export default SurveyEdit;

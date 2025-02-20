import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const SurveyEdit = ({ survey }) => {
    const { data, setData, put, errors, processing } = useForm({
        age: survey.age,
        experieence: survey.experieence,
        languages: survey.languages,
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
                    <label htmlFor="age" className="block text-lg font-medium text-gray-700">Pytanie 1</label>
                    <input
                        type="text"
                        id="age"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.age}
                        name="age"
                        onChange={(e) => setData('age', e.target.value)}
                        required
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="experieence" className="block text-lg font-medium text-gray-700">Pytanie 2</label>
                    <input
                        type="text"
                        id="experieence"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.experieence}
                        name="experieence"
                        onChange={(e) => setData('experieence', e.target.value)}
                        required
                    />
                    {errors.experieence && <p className="text-red-500 text-sm">{errors.experieence}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="languages" className="block text-lg font-medium text-gray-700">Pytanie 3</label>
                    <input
                        type="text"
                        id="languages"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={data.languages}
                        name="languages"
                        onChange={(e) => setData('languages', e.target.value)}
                        required
                    />
                    {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
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

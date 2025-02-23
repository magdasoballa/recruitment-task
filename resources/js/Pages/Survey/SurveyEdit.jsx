import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const SurveyEdit = ({ survey }) => {
    const { data, setData, put, errors, processing } = useForm({
        age: survey.age,
        experience: survey.experience,
        languages: survey.languages ? survey.languages.split(',') : [],

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        data.languages = data.languages.join(',');

        put(route('survey.update', survey.id));
    };

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        let newLanguages = [...data.languages];
        if (checked) {
            newLanguages.push(value);
        } else {
            newLanguages = newLanguages.filter((lang) => lang !== value);
        }
        setData('languages', newLanguages);
    };

    return (
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Edytuj Ankietę</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 1: Podaj przedział wiekowy</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="18-25"
                                checked={data.age === "18-25"}
                                onChange={(e) => setData('age', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">18-25</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="26-35"
                                checked={data.age === "26-35"}
                                onChange={(e) => setData('age', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">26-35</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="36-50"
                                checked={data.age === "36-50"}
                                onChange={(e) => setData('age', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">36-50</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="51-65"
                                checked={data.age === "51-65"}
                                onChange={(e) => setData('age', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">51-65</span>
                        </label>
                    </div>
                    {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 2: Lata doświadczenia</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="1-3"
                                checked={data.experience === "1-3"}
                                onChange={(e) => setData('experience', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">1-3</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="3-5"
                                checked={data.experience === "3-5"}
                                onChange={(e) => setData('experience', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">3-5</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="5-7"
                                checked={data.experience === "5-7"}
                                onChange={(e) => setData('experience', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">5-7</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="7-10"
                                checked={data.experience === "7-10"}
                                onChange={(e) => setData('experience', e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">7-10</span>
                        </label>
                    </div>
                    {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 3: Języki</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="pl"
                                checked={data.languages.includes("pl")}
                                onChange={handleLanguageChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Polski</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="eng"
                                checked={data.languages.includes("eng")}
                                onChange={handleLanguageChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Angielski</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="de"
                                checked={data.languages.includes("de")}
                                onChange={handleLanguageChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Niemiecki</span>
                        </label>
                    </div>
                    {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                    {processing ? 'Przesyłanie...' : 'Wyślij odpowiedzi'}
                </button>
            </form>
        </div>
    );
};

export default SurveyEdit;

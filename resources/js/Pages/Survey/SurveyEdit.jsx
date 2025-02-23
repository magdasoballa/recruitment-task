import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const SurveyEdit = ({ survey }) => {
    const { data, setData, put, errors, processing, clearErrors } = useForm({
        age: survey.age,
        experience: survey.experience,
        languages: survey.languages ? survey.languages.split(',') : [],
        specialization: survey.specialization ? survey.specialization.split(',') : [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        data.languages = Array.isArray(data.languages) ? data.languages : [];
        data.specialization = Array.isArray(data.specialization) ? data.specialization : [];
        data.languages = data.languages.join(',');
        data.specialization = data.specialization.join(',');
        put(route('survey.update', survey.id));
    };

    const handleCheckboxChange = (field, value, checked) => {
        let newArray = [...data[field]];
        if (checked) {
            newArray.push(value);
        } else {
            newArray = newArray.filter((item) => item !== value);
        }
        setData(field, newArray);
        if (field === 'languages') {
            if (newArray.length > 0) {
                clearErrors('languages');
            }
        }
    };

    return (
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Edytuj Ankietę</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 1: Podaj przedział wiekowy</label>
                    <div className="mt-2">
                        {["18-25", "26-35", "36-50", "51-65"].map((age) => (
                            <label key={age} className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    value={age}
                                    checked={data.age === age}
                                    onChange={(e) => setData('age', e.target.value)}
                                    className="form-radio"
                                />
                                <span className="ml-2">{age}</span>
                            </label>
                        ))}
                    </div>
                    {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 2: Lata doświadczenia</label>
                    <div className="mt-2">
                        {["1-3", "3-5", "5-7", "7-10"].map((exp) => (
                            <label key={exp} className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    value={exp}
                                    checked={data.experience === exp}
                                    onChange={(e) => setData('experience', e.target.value)}
                                    className="form-radio"
                                />
                                <span className="ml-2">{exp}</span>
                            </label>
                        ))}
                    </div>
                    {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 3: Języki</label>
                    <div className="mt-2">
                        {["pl", "eng", "de"].map((lang) => (
                            <label key={lang} className="inline-flex items-center mr-4">
                                <input
                                    type="checkbox"
                                    value={lang}
                                    checked={data.languages.includes(lang)}
                                    onChange={(e) => handleCheckboxChange('languages', lang, e.target.checked)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{lang === "pl" ? "Polski" : lang === "eng" ? "Angielski" : "Niemiecki"}</span>
                            </label>
                        ))}
                    </div>
                    {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Pytanie 4: Specjalizacje</label>
                    <div className="mt-2">
                        {[
                            { key: "nursing", label: "Pielęgniarstwo" },
                            { key: "elder care", label: "Opieka nad osobami starszymi" },
                            { key: "physiotherapy", label: "Fizjoterapia" },
                            { key: "psychology", label: "Psychologia" },
                        ].map((spec) => (
                            <label key={spec.key} className="inline-flex items-center mr-4">
                                <input
                                    type="checkbox"
                                    value={spec.key}
                                    checked={data.specialization.includes(spec.key)}
                                    onChange={(e) => handleCheckboxChange('specialization', spec.key, e.target.checked)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{spec.label}</span>
                            </label>
                        ))}
                    </div>
                    {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization}</p>}
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

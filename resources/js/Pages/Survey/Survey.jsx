import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

const SurveyForm = () => {
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const { post, processing, errors } = useForm({
        question1: '',
        question2: '',
        question3: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('survey.store'), {
            question1: question1,
            question2: question2,
            question3: question3,
        })
            .then(() => {
                setIsSuccess(true);
            })
            .catch(() => {
                setIsSuccess(false);
            });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-white">
                    Dashboard
                </h2>
            }
        >
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Ankieta</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="question1" className="block text-lg font-medium text-gray-700">Pytanie 1</label>
                    <input
                        type="text"
                        id="question1"
                        className="mt-2 w-full p-3 border rounded-lg"
                        value={question1}
                        name="question1"
                        onChange={(e) => setQuestion1(e.target.value)}
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
                        value={question2}
                        name="question2"
                        onChange={(e) => setQuestion2(e.target.value)}
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
                        value={question3}
                        name="question3"
                        onChange={(e) => setQuestion3(e.target.value)}
                        required
                    />
                    {errors.question3 && <p className="text-red-500 text-sm">{errors.question3}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                    {processing ? 'Przesyłanie...' : 'Wyślij odpowiedzi'}
                </button>
            </form>

            {isSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
                    Dziękujemy za wypełnienie ankiety!
                </div>
            )}
        </div>
        </AuthenticatedLayout>
    );
};

export default SurveyForm;

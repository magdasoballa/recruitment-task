import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Link} from "@inertiajs/react";

const SurveyCompleted = ({ survey }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-white">
                    Dashboard
                </h2>
            }
        >
        <div>
            <h1>Ankieta zakończona</h1>
            <p>Dziękujemy za wypełnienie ankiety! Oto Twoje odpowiedzi:</p>

            <div>
                <p><strong>Pytanie 1:</strong> {survey.age}</p>
                <p><strong>Pytanie 2:</strong> {survey.experience}</p>
                <p><strong>Pytanie 3:</strong> {survey.languages}</p>
            </div>

            <div>
                <p>Twoja ankieta została zapisana. Dziękujemy!</p>
            </div>
        </div>
            <Link href={route('survey.edit', { id: survey.id })} className="text-blue-500 hover:underline">
                Edytuj Ankietę
            </Link>
        </AuthenticatedLayout>
    );
}

export default SurveyCompleted;

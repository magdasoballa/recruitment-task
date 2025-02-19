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
                <p><strong>Pytanie 1:</strong> {survey.question1}</p>
                <p><strong>Pytanie 2:</strong> {survey.question2}</p>
                <p><strong>Pytanie 3:</strong> {survey.question3}</p>
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

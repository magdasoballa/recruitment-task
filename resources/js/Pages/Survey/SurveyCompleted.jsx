import React, {useEffect, useState} from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Link, router} from "@inertiajs/react";
import {route} from "ziggy-js";

const SurveyCompleted = ({ survey }) => {
    const [matchedCaregivers, setMatchedCaregivers] = useState([]);

    useEffect(() => {

        router.get(route('caregivers.index'), {
            languages: survey?.languages,
            experience: survey?.experience,
            age: survey?.age,
        }, {
            preserveState: true,
            onSuccess: (page) => {
                setMatchedCaregivers(page.props.matchedCaregivers);
            }
        });
    }, []);
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
                <p><strong>Pytanie 1:</strong> {survey?.age}</p>
                <p><strong>Pytanie 2:</strong> {survey?.experience}</p>
                <p><strong>Pytanie 3:</strong> {survey?.languages}</p>

            </div>

            <div>
                <p>Twoja ankieta została zapisana. Dziękujemy!</p>
            </div>
        </div>
            <Link href={route('survey.edit',{ id: survey?.id })} className="text-blue-500 hover:underline">
                Edytuj Ankietę
            </Link>

            <div>
                <h1>Twoje dopasowani opiekunowie</h1>
                <ul>
                    {matchedCaregivers && matchedCaregivers.length > 0 ? (
                        matchedCaregivers.map((caregiver, index) => {
                            const languagesArray = Array.isArray(caregiver.languages)
                                ? caregiver.languages
                                : JSON.parse(caregiver.languages || "[]");

                            return (
                                <li key={index}>
                                    <h2>{caregiver.name}</h2>
                                    <p>Wiek: {caregiver.age}</p>
                                    <p>Doświadczenie: {caregiver.experience_years} lat</p>
                                    <p>Języki: {languagesArray.join(', ')}</p>
                                    <p>Ocena: {caregiver.rating}</p>
                                </li>
                            );
                        })
                    ) : (
                        <p>Brak dopasowanych opiekunów.</p>
                    )}

                </ul>
            </div>
        </AuthenticatedLayout>
    );
}

export default SurveyCompleted;

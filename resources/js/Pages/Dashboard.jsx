import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-white">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gradient-to-b from-purple-600 to-indigo-600">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-8 text-gray-800">
                            <div className="text-xl font-semibold text-purple-700 mb-4">
                                Witaj w panelu kontrolnym!
                            </div>
                            <div className="text-lg text-gray-600">
                                Jesteś zalogowany!
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-gray-500">
                                    Tu możesz zarządzać swoimi zadaniami, edytować je, oznaczać jako zakończone i usuwać.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-white">
                    Profil użytkownika
                </h2>
            }
        >
            <Head title="Profil" />

            <div className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white p-6 shadow-lg sm:rounded-lg">
                        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                            Zaktualizuj informacje profilowe
                        </h3>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl mx-auto"
                        />
                    </div>

                    <div className="bg-white p-6 shadow-lg sm:rounded-lg">
                        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                            Zmień hasło
                        </h3>
                        <UpdatePasswordForm className="max-w-xl mx-auto" />
                    </div>

                    <div className="bg-white p-6 shadow-lg sm:rounded-lg">
                        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                            Usuń konto
                        </h3>
                        <DeleteUserForm className="max-w-xl mx-auto" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import { Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-custom-purple mb-6">
                Welcome to the To-Do App
            </h1>

            <div className="flex gap-4">
                {canLogin && (
                    <Link
                        href={route('login')}
                        className="px-6 py-2 bg-custom-purple text-white rounded-md hover:bg-purple-700 focus:outline-none"
                    >
                        Login
                    </Link>
                )}

                {canRegister && (
                    <Link
                        href={route('register')}
                        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none"
                    >
                        Register
                    </Link>
                )}
            </div>
        </div>
    );
}

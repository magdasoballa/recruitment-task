import { Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister }) {
    return (
        <div>
            <h1>Welcome to the To-Do App</h1>
            
            <div>
                {canLogin && (
                    <Link href={route('login')} className="btn btn-primary">
                        Login
                    </Link>
                )}

                {canRegister && (
                    <Link href={route('register')} className="btn btn-secondary ms-2">
                        Register
                    </Link>
                )}
            </div>
        </div>
    );
}

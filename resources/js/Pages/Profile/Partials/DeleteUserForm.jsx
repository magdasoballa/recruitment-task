import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Usuń Konto
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Po usunięciu konta wszystkie jego zasoby i dane zostaną
                    trwale usunięte. Przed usunięciem konta, proszę pobrać
                    wszelkie dane lub informacje, które chcesz zachować.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Usuń Konto
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Czy na pewno chcesz usunąć swoje konto?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Po usunięciu konta wszystkie jego zasoby i dane zostaną
                        trwale usunięte. Proszę wprowadzić swoje hasło, aby
                        potwierdzić, że chcesz trwale usunąć swoje konto.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Hasło"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Hasło"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Anuluj
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Usuń Konto
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}

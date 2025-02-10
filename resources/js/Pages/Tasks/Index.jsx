import { useForm } from '@inertiajs/react';

export default function TaskList({ tasks }) {
    const { data, setData, post, patch, delete: destroy } = useForm({ title: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Wysyłanie zadania do backendu z przypisaniem do użytkownika
        post('/tasks', { title: data.title });
    };

    const handleComplete = (taskId, completedStatus) => {
        patch(`/tasks/${taskId}`, {
            completed: !completedStatus
        });
    };

    const handleDelete = (taskId) => {
        destroy(`/tasks/${taskId}`);
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            {/* Formularz do dodawania zadania */}
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="border p-2 w-full"
                    placeholder="Nowe zadanie..."
                    required
                />
                <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">Dodaj</button>
            </form>
            
            {/* Lista zadań */}
            <ul>
                {tasks?.map((task) => (
                    <li key={task.id} className="flex justify-between p-2 border-b">
                        <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                        <div>
                            <button
                                onClick={() => handleComplete(task.id, task.completed)}
                                className="p-1 bg-green-500 text-white mx-1"
                            >
                                {task.completed ? "✓" : "×"}
                            </button>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="p-1 bg-red-500 text-white"
                            >
                                🗑
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

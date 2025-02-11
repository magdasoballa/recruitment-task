import { useForm } from "@inertiajs/react";
import { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function TaskList({ tasks }) {
    const {
        data,
        setData,
        post,
        patch,
        delete: destroy,
    } = useForm({ title: "" });
    const [editingTaskId, setEditingTaskId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTaskId) {
            patch(`/tasks/${editingTaskId}`, { title: data.title });
        } else {
            post("/tasks", { title: data.title });
        }
        setEditingTaskId(null);
        setData({ title: "" });
    };

    const handleComplete = (taskId, completedStatus) => {
        patch(`/tasks/${taskId}/toggle-completion`, {
            completed: !completedStatus,
        });
    };

    const handleDelete = (taskId) => {
        destroy(`/tasks/${taskId}`);
    };

    const handleEdit = (task) => {
        setEditingTaskId(task.id);
        setData({ title: task.title });
    };

    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-2xl font-semibold text-white">
                Profil użytkownika
            </h2>
        }
    >
        <Head title="Profil" />
        <div className="max-w-lg mx-auto p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
            <div className="mb-6 text-white">
              
            </div>

            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="w-full p-3 rounded-lg border-2 border-purple-300 focus:border-purple-500 text-gray-800"
                    placeholder={
                        editingTaskId ? "Edytuj zadanie..." : "Nowe zadanie..."
                    }
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-semibold transition duration-200"
                >
                    {editingTaskId ? "Zaktualizuj zadanie" : "Dodaj zadanie"}
                </button>
            </form>

            <ul>
                {tasks?.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-md hover:bg-purple-50 transition duration-150"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() =>
                                    handleComplete(task.id, task.completed)
                                }
                                className="mr-4 text-purple-500 focus:ring-purple-500"
                            />
                            <span
                                className={
                                    task.completed
                                        ? "line-through text-gray-500"
                                        : "text-gray-900"
                                }
                            >
                                {task.title}
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(task)}
                                className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-400 transition duration-150"
                            >
                                Edytuj
                            </button>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className=" text-white p-2 rounded-md hover:bg-red-400 transition duration-150"
                            >
                                🗑
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </AuthenticatedLayout>
    );
}

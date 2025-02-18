import { useForm } from "@inertiajs/react";
import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TaskDetail from "@/Pages/Tasks/TaskDetail";

const TaskList = ({ tasks }) => {
    const { data, setData, post, patch } = useForm({ title: "" });
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

    return (
        <AuthenticatedLayout
            header={<h2 className="text-2xl font-semibold text-white">Twoje zadania</h2>}
        >
            <Head title="Zadania" />
            <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
                <div className="mb-6 text-white text-lg font-semibold">
                    {editingTaskId ? "Edytuj zadanie" : "Dodaj nowe zadanie"}
                </div>

                <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full p-3 rounded-lg border-2 border-purple-300 focus:border-purple-500 text-gray-800"
                        placeholder={editingTaskId ? "Edytuj zadanie..." : "Nowe zadanie..."}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-semibold transition duration-200"
                    >
                        {editingTaskId ? "Zaktualizuj zadanie" : "Dodaj zadanie"}
                    </button>
                </form>

                <ul className="space-y-4">
                    {tasks?.map((task) => (
                        <TaskDetail
                            key={task.id}
                            task={task}
                            setEditingTaskId={setEditingTaskId} 
                            setData={setData} 
                        />
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default TaskList;

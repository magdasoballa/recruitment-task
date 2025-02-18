import { useForm } from "@inertiajs/react";
import CommentForm from "@/Components/CommentForm";

const TaskDetail = ({ task, setEditingTaskId, setData }) => {
    const { patch,delete: destroy,
    } = useForm({ title: task.title });

    const handleComplete = (taskId, completedStatus) => {
        patch(`/tasks/${taskId}/toggle-completion`, {
            completed: !completedStatus,
        });
    };

    const handleDelete = (taskId) => {
        destroy(`/tasks/${taskId}`, {
            onSuccess: () => {
                setEditingTaskId(null);
                setData({ title: "" });
            },
        });
    };

    const handleEdit = (task) => {
        setEditingTaskId(task.id);  
        setData({ title: task.title }); 
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleComplete(task.id, task.completed)}
                        className="mr-4 text-purple-500 focus:ring-purple-500"
                    />
                    <span
                        className={`text-lg font-semibold ${
                            task.completed ? "line-through text-gray-400" : "text-gray-900"
                        }`}
                    >
                        {task.title}
                    </span>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEdit(task)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-400 transition duration-150"
                    >
                        ✏️ Edytuj
                    </button>
                    <button
                        onClick={() => handleDelete(task.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition duration-150"
                    >
                        🗑 Usuń
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                <h3 className="text-md font-semibold mb-2 text-gray-700">Komentarze</h3>
                <ul className="space-y-2">
                    {task?.comments?.length > 0 ? (
                        task.comments.map((comment) => (
                            <li key={comment.id} className="bg-white p-2 rounded-md shadow-sm">
                                {comment.content}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">Brak komentarzy</p>
                    )}
                </ul>
            </div>

            <div className="mt-4">
                <CommentForm taskId={task.id} />
            </div>
        </div>
    );
};

export default TaskDetail;

import React from "react";
import { useForm } from "@inertiajs/react";

const CommentForm = ({ taskId }) => {
    const { data, setData, post, errors } = useForm({
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("tasks.comments.store", { task: taskId }), {
            content: data.content,
            onSuccess: () => setData({ content: "" }),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <textarea
                value={data.content}
                onChange={(e) => setData("content", e.target.value)}
                placeholder="Dodaj komentarz..."
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows="3"
            />
            {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
            <button
                type="submit"
                className="mt-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition duration-200 w-full"
            >
                💬 Dodaj komentarz
            </button>
        </form>
    );
};

export default CommentForm;

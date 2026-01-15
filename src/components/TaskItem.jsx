import { useState } from "react";

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div
      className="
        flex items-center justify-between
        bg-white rounded-xl px-4 py-3
        shadow-sm border
        hover:shadow-md hover:-translate-y-[1px]
        transition-all
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-indigo-600 cursor-pointer"
        />

        <span
          className={`text-sm ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </div>

      {/* RIGHT */}
      <button
        onClick={() => onDelete(task.id)}
        className="
          text-sm text-red-500
          opacity-0 group-hover:opacity-100
          hover:text-red-600
          transition
        "
      >
        Sil
      </button>
    </div>
  );
}

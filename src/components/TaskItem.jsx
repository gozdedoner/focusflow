import { useState } from "react";

const CATEGORY_STYLES = {
  work: {
    badge: "bg-yellow-100 text-yellow-800",
    ring: "ring-yellow-200/60",
  },
  personal: {
    badge: "bg-pink-100 text-pink-800",
    ring: "ring-pink-200/60",
  },
  study: {
    badge: "bg-purple-100 text-purple-800",
    ring: "ring-purple-200/60",
  },
  health: {
    badge: "bg-green-100 text-green-800",
    ring: "ring-green-200/60",
  },
};

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div
      className={`
        group flex items-center justify-between
        bg-white dark:bg-cardDark
        rounded-xl px-4 py-3
        shadow-sm border
        ring-1 ${CATEGORY_STYLES[task.category]?.ring}
        hover:shadow-md hover:-translate-y-[1px]
        transition-all
      `}
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-indigo-600 cursor-pointer"
        />

        {/* CATEGORY BADGE */}
        <span
          className={`
            text-xs px-2 py-0.5 rounded-full font-medium
            ${CATEGORY_STYLES[task.category]?.badge}
          `}
        >
          {task.category}
        </span>

        {/* TITLE */}
        <span
          className={`text-sm ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800 dark:text-gray-100"
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

import { useState } from "react";

export default function TaskList({ tasks, onDelete, onToggle }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  return (
    <ul className="mt-4 space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`
            group
            animate-fade-in
            flex items-center justify-between
            rounded-xl px-4 py-3
            shadow-sm
            transition-all duration-300
            ${
              task.completed
                ? "opacity-60 bg-primarySoft/10 dark:bg-white/5"
                : "opacity-100 bg-bgLight dark:bg-bgDark hover:scale-[1.01] hover:shadow-md"
            }
          `}
        >
          <div className="flex items-center gap-3 w-full">
            {/* CHECKBOX */}
            {editingId !== task.id && (
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="
    w-5 h-5
    accent-primary
    cursor-pointer
    transition-transform
    active:scale-90
  "
              />
            )}

            {/* TITLE / EDIT */}
            {editingId === task.id ? (
              <input
                autoFocus
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && editValue.trim()) {
                    task.title = editValue; // local update
                    setEditingId(null);
                  }
                  if (e.key === "Escape") {
                    setEditingId(null);
                  }
                }}
                className="
                  flex-1 bg-transparent
                  border-b border-primary
                  text-sm outline-none
                  text-gray-800 dark:text-gray-100
                "
              />
            ) : (
              <span
                onClick={() => {
                  setEditingId(task.id);
                  setEditValue(task.title);
                }}
                className={`
                  flex-1 cursor-pointer text-sm transition-all duration-300
                  ${
                    task.completed
                      ? "line-through text-gray-400 dark:text-gray-500"
                      : "text-gray-800 dark:text-gray-100 hover:text-primary"
                  }
                `}
              >
                {task.title}
              </span>
            )}
          </div>

          {/* DELETE */}
          {editingId !== task.id && (
            <button
              onClick={() => onDelete(task.id)}
              className="
                text-xs text-red-400
                opacity-0 group-hover:opacity-100
                hover:text-red-600
                transition
              "
            >
              Sil
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

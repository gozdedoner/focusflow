import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  // 🌗 Dark mode persist
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 💾 Tasks persist
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  // 📊 Progress calculations
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // 🔀 Sort tasks (active first, completed last)
  const sortedTasks = [
    ...tasks.filter((t) => !t.completed),
    ...tasks.filter((t) => t.completed),
  ];

  // ➕ Add task
  const addTask = (title) => {
    if (!title.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  };

  // ❌ Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ✅ Toggle task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-cardDark p-6 shadow-xl shadow-primary/10 transition-colors">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">FocusFlow</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Günlük görevlerini odakla ve tamamla
            </p>
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              bg-primarySoft/40 dark:bg-primary/20
              hover:scale-105 transition
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* FORM */}
        <TaskForm onAdd={addTask} />

        {/* PROGRESS */}
        {tasks.length > 0 && (
          <div className="mt-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>
                {completedCount} / {totalCount} tamamlandı
              </span>
              <span>%{progressPercent}</span>
            </div>

            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
              <div
                className="
                  h-full rounded-full
                  bg-gradient-to-r from-primary to-primarySoft
                  shadow-[0_0_12px_rgba(124,122,242,0.6)]
                  transition-all duration-700
                "
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {progressPercent === 100 && (
              <p className="mt-2 text-center text-xs text-primary animate-fade-in">
                🎉 Bugünkü tüm görevleri tamamladın. Harika iş!
              </p>
            )}
          </div>
        )}

        {/* EMPTY STATE / LIST */}
        {tasks.length === 0 ? (
          <div className="animate-fade-in mt-6 text-center text-sm text-gray-400">
            <p className="text-base font-medium">
              Bugün için henüz görev yok ✨
            </p>
            <p className="mt-1 text-xs opacity-70">
              Odaklanmak için ilk görevi ekle
            </p>
          </div>
        ) : (
          <div className="animate-fade-in mt-4">
            <TaskList
              tasks={sortedTasks}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}

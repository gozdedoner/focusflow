import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("work");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onAdd(value, category);
    setValue("");
    setCategory("work");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Yeni görev ekle..."
        className="
          flex-1 px-4 py-2 rounded-lg
          border border-gray-300
          focus:outline-none
          focus:ring-2 focus:ring-primarySoft
          transition
        "
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          px-3 py-2 rounded-lg
          border border-gray-300
          bg-white
          focus:outline-none
          focus:ring-2 focus:ring-primarySoft
          transition
        "
      >
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
        <option value="health">Health</option>
      </select>

      <button
        type="submit"
        className="
          bg-primary text-white
          px-4 py-2 rounded-lg
          hover:bg-primarySoft
          active:scale-95
          transition
        "
      >
        Ekle
      </button>
    </form>
  );
}

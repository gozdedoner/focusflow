import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onAdd(value);
    setValue(""); // input temizlensin
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

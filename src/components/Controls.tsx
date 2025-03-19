"use client";

import React from "react";

interface ControlsProps {
  isActive: boolean;
  mode: "work" | "break";
  onToggle: () => void;
  onReset: () => void;
  onModeToggle: () => void;
}

export default function Controls({
  isActive,
  mode,
  onToggle,
  onReset,
  onModeToggle
}: ControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-md font-medium transition-colors ${
          isActive
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {isActive ? "停止" : "開始"}
      </button>

      <button
        onClick={onReset}
        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 font-medium"
      >
        リセット
      </button>

      <button
        onClick={onModeToggle}
        className={`px-4 py-2 rounded-md font-medium transition-colors ${
          mode === "work"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
      >
        {mode === "work" ? "休憩モードへ" : "作業モードへ"}
      </button>
    </div>
  );
}

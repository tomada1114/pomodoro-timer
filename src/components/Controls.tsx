"use client";

import React from "react";

interface ControlsProps {
  isActive: boolean;
  onToggle: () => void;
  onReset: () => void;
}

export default function Controls({ isActive, onToggle, onReset }: ControlsProps) {
  return (
    <div className="flex gap-4">
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
    </div>
  );
}

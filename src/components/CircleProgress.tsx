"use client";

import React from "react";

interface CircleProgressProps {
  progress: number; // 0から1の範囲の進捗率
  mode: "work" | "break";
}

export default function CircleProgress({ progress, mode }: CircleProgressProps) {
  // SVGの設定
  const size = 200; // SVGのサイズ
  const strokeWidth = 8; // 円の線の太さ
  const radius = (size - strokeWidth) / 2; // 円の半径
  const circumference = 2 * Math.PI * radius; // 円周の長さ

  // モードに応じた色の設定
  const color = mode === "work" ? "#ef4444" : "#22c55e"; // 作業: 赤、休憩: 緑

  // 進捗に応じた円弧の長さを計算
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* 背景の円 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb" // 薄いグレー
          strokeWidth={strokeWidth}
        />

        {/* 進捗を示す円弧 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-linear"
        />
      </svg>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Controls from "./Controls";

interface TimerState {
  mode: "work" | "break";
  timeLeft: number;
  isActive: boolean;
  workDuration: number; // デフォルト: 25分（1500秒）
  breakDuration: number; // デフォルト: 5分（300秒）
}

export default function TimerApp() {
  const [timerState, setTimerState] = useState<TimerState>({
    mode: "work",
    timeLeft: 1500, // 25分
    isActive: false,
    workDuration: 1500, // 25分
    breakDuration: 300, // 5分
  });

  // タイマーのカウントダウン処理
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerState.isActive && timerState.timeLeft > 0) {
      interval = setInterval(() => {
        setTimerState((prev) => ({
          ...prev,
          timeLeft: prev.timeLeft - 1,
        }));
      }, 1000);
    } else if (timerState.isActive && timerState.timeLeft === 0) {
      // タイマー終了時の処理
      switchMode();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState.isActive, timerState.timeLeft]);

  // モード切り替え
  const switchMode = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      mode: prev.mode === "work" ? "break" : "work",
      timeLeft:
        prev.mode === "work" ? prev.breakDuration : prev.workDuration,
      isActive: true, // 自動的に次のモードを開始
    }));
  }, []);

  // タイマー開始/停止
  const toggleTimer = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  }, []);

  // タイマーリセット
  const resetTimer = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      timeLeft: prev.mode === "work" ? prev.workDuration : prev.breakDuration,
      isActive: false,
    }));
  }, []);

  // 残り時間を分:秒形式に変換
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-2xl font-bold">
        {timerState.mode === "work" ? "作業時間" : "休憩時間"}
      </h1>
      <div className="text-4xl font-bold">
        {formatTime(timerState.timeLeft)}
      </div>
      <Controls
        isActive={timerState.isActive}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </div>
  );
}

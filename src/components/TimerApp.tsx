"use client";

import React, { useState, useEffect, useCallback } from "react";
import Controls from "./Controls";
import CircleProgress from "./CircleProgress";
import { playNotificationSound } from "@/utils/sound";

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
      playNotificationSound(); // 通知音を再生
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

  // 手動でモードを切り替え
  const toggleMode = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      mode: prev.mode === "work" ? "break" : "work",
      timeLeft:
        prev.mode === "work" ? prev.breakDuration : prev.workDuration,
      isActive: false, // 切り替え時にタイマーを停止
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

  // 進捗率を計算（0〜1の範囲）
  const calculateProgress = (): number => {
    const totalDuration =
      timerState.mode === "work"
        ? timerState.workDuration
        : timerState.breakDuration;
    return 1 - timerState.timeLeft / totalDuration;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-2xl font-bold">
        {timerState.mode === "work" ? "作業時間" : "休憩時間"}
      </h1>

      <div className="relative">
        <CircleProgress
          progress={calculateProgress()}
          mode={timerState.mode}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-4xl font-bold">
            {formatTime(timerState.timeLeft)}
          </span>
        </div>
      </div>

      <Controls
        isActive={timerState.isActive}
        mode={timerState.mode}
        onToggle={toggleTimer}
        onReset={resetTimer}
        onModeToggle={toggleMode}
      />
    </div>
  );
}

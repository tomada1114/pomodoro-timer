"use client";

/**
 * 通知音を再生する関数
 * Web Audio APIを使用して、ビープ音を生成して再生します
 */
export function playNotificationSound(): void {
  try {
    // AudioContextを作成
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

    // オシレーターを作成（音源）
    const oscillator = audioContext.createOscillator();
    // ゲインノードを作成（音量調整）
    const gainNode = audioContext.createGain();

    // オシレーターの設定
    oscillator.type = 'sine'; // サイン波（滑らかな音）
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // 周波数（Hz）

    // 音量の設定（0〜1）
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    // 音量の減衰（フェードアウト）
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

    // オシレーターとゲインノードを接続
    oscillator.connect(gainNode);
    // ゲインノードを出力に接続
    gainNode.connect(audioContext.destination);

    // 再生開始
    oscillator.start();
    // 1秒後に停止
    oscillator.stop(audioContext.currentTime + 1);

    console.log('通知音を再生しました');
  } catch (error) {
    console.error('通知音の再生に失敗しました', error);
  }
}

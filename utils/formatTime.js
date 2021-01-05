export function formatTime(time = 0) {
  const minutes = Math.floor(Number(time) / 60);
  const seconds = Math.floor(Number(time) % 60);

  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}

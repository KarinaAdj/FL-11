function formatTime(minutes) {
  let day = Math.floor(minutes / (24 * 60));
  let hour = Math.floor((minutes % (24 * 60)) / 60);
  let minute = (minutes % (24 * 60)) % 60;

  return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`;
}

console.log(formatTime(3601));

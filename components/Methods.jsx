export function rdate(date) {
  const dt = new Date(date);
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const hour = dt.getHours();
  const minute = dt.getMinutes();
  return (
    dt.getFullYear() +
    "-" +
    (month > 9 ? month : "0" + month) +
    "-" +
    (day > 9 ? day : "0" + day) +
    " " +
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (minute > 9 ? minute : "0" + minute)
  );
}

function daysInMonth(month, year) {
  let date = new Date(year, month, 0).getDate();
  console.log(date);
}
daysInMonth(2, 2021);

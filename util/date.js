export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusMonth(date, months) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1 - months,
    date.getDate()
  );
}

export const convert = (str) => {
  let date = JSON.stringify(str);
  date = date.slice(1, 11);
  return date;
};

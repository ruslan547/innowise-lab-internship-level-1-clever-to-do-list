const INCREMENT = 1;

export const createDates = (date) => {
  const stopDay = date.getDate();
  const result = [];
  do {
    result.push(new Date(date));
    date.setDate(date.getDate() + INCREMENT);
  } while (date.getDate() !== stopDay);

  return result;
};

export const addDates = (dates, setDates) => {
  const target = document.querySelector('.calendar');
  const maxScrollLeft = target.scrollWidth - target.clientWidth;
  if (target.scrollLeft === maxScrollLeft) {
    const lastDate = dates[dates.length - 1];
    const lastDageCopy = new Date(lastDate);
    lastDageCopy.setDate(lastDageCopy.getDate() + INCREMENT);
    const newDates = createDates(lastDageCopy);
    setDates([...dates, ...newDates]);
  }
};

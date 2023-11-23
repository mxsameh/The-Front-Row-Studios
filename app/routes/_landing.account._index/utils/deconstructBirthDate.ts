interface IDate {
  year: string;
  month: string;
  day: string;
}
const deconstructBirthDate = (date: string): IDate | null => {
  // Date '1999-7-18'
  // YYYY-MM-DD
  if (!date) return null;
  const dateArray = date.split('-');
  const deconstructedDate = {
    year: dateArray[0],
    month: dateArray[1],
    day: dateArray[2],
  };
  return deconstructedDate;
};
export default deconstructBirthDate;

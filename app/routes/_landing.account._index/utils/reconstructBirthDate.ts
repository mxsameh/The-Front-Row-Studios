const reconstructBirthDate = (year: string, month: string, day: string) => {
  if (!year || !month || !day) return null;
  const birthDate = `${year}-${month}-${day}`;
  return birthDate;
};
export default reconstructBirthDate;

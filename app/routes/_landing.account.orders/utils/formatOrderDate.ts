const formatOrderDate = (inputDateString: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const inputDate = new Date(inputDateString);

  const month = months[inputDate.getMonth()];
  const day = inputDate.getDate();
  const hours = inputDate.getHours() % 12 || 12;
  const minutes = inputDate.getMinutes();
  const ampm = inputDate.getHours() >= 12 ? 'pm' : 'am';

  const formattedString = `${month} ${day} at ${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${ampm}`;

  return formattedString;
};
export default formatOrderDate;

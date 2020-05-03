/**
  Parses a date string (MM/DD/YY) with the local timezone
*/

const gmtString = () => {   // returns a local GMT string
  const offsetMins = new Date().getTimezoneOffset();
  const isNeg = offsetMins > 0;
  const hours = Math.abs(offsetMins) / 60;
  let fullHours = Math.floor(hours).toString();
  fullHours = (fullHours.length === 1) ? '0' + fullHours : fullHours;
  let mins = ((hours % 1) * 60).toString();
  mins = (mins.length === 1) ? '0' + mins : mins;

  return `GMT${isNeg ? '-' : '+'}${fullHours}${mins}`;
}

const localDate = (dateString) => new Date(`${dateString} ${gmtString()}`);

export default localDate;


/**
  Parses a UTC time string and corrects it to the local timezone
*/

const parseCorrectDateString = (dateString: String): Date => {

  const dateObj = new Date(dateString);
  // timezone offset in ms
  const msOffset = dateObj.getTimezoneOffset() * 60 * 1000;
  // correct datetime for user timezone
  return new Date(dateObj.getTime() + msOffset);
}


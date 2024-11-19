export const convertSecondsToMinutes = (seconds) => {
  if (typeof seconds !== "number" || seconds < 0) {
    throw new Error("Input must be a non-negative number");
  }
  // Calculate the minutes, rounding up
  const minutes = Math.ceil(seconds / 60);

  // Return as a two-digit string
  return minutes.toString().padStart(2, "0");
};

export const getDayOfWeek = (dateString) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error(
      'Input must be a valid date string in "YYYY-MM-DD" format.'
    );
  }

  // Split the date into components (year, month, day)
  const [year, month, day] = dateString.split("-").map(Number);

  // Create a UTC Date object to avoid timezone issues
  const date = new Date(Date.UTC(year, month - 1, day));

  // Array of day abbreviations in all caps
  const daysOfWeekAbbreviations = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  // Get the day of the week (0 is Sunday, 6 is Saturday)
  const dayIndex = date.getUTCDay();

  return daysOfWeekAbbreviations[dayIndex];
};

export const formatDateToMMDDYYYY = (dateString) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error(
      'Input must be a valid date string in "YYYY-MM-DD" format.'
    );
  }

  // Split the date into components
  const [year, month, day] = dateString.split("-");

  // Return formatted date
  return `${month}/${day}/${year}`;
};

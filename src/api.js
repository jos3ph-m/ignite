// Base URL
const base_url = 'https://api.rawg.io/api';

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    `0${day}`;
  } else {
    return day;
  }
};

// Popular Games

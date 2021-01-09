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

// Popular Games

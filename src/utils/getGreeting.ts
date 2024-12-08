export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "صبح بخیر";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "ظهر بخیر";
  } else if (currentHour >= 17 && currentHour < 20) {
    return "عصر بخیر";
  } else {
    return "شب بخیر";
  }
};

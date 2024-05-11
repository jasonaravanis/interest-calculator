const getYears = (months: number): number => {
  if (months < 0) {
    throw new Error(
      `Cannot convert ${months} to years as it is a negative value`
    );
  }
  return months / 12;
};

export { getYears };

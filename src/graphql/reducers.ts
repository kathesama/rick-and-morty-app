const characterGenderReducer = (rawData: string[]): string[]  => rawData.filter((x, i, a) => a.indexOf(x) === i);

export {
  // eslint-disable-next-line import/prefer-default-export
  characterGenderReducer,
};

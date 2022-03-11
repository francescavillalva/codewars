/*
8kyu total pressure calculation
12 may 2022

*/

const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return ((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * 0.082 * (temp + 273.15) / volume
}
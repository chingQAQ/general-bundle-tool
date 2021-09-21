/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  coverageDirectory: 'report',
  preset: 'ts-jest',
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};
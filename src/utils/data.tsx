import { QuestionDescriptionInterface } from './interface';

export const questionDescription: QuestionDescriptionInterface = {
  no: 2,
  title: 'Check Prime Number',
  status: 'easy',
  description: [
    'Given an integer number, determine whether it is a prime number or not.',
    'A prime number is a number that is greater than 1 and has no positive divisors other than 1 and itself.',
    'Return true if the number is prime, otherwise return false.',
  ],
  examples: [
    {
      input: 'number = 7',
      output: 'true',
      explanation:
        "7 is only divisible by 1 and itself, so it's a prime number.",
    },
    {
      input: 'number = 10',
      output: 'false',
      explanation:
        "10 is divisible by 1, 2, 5, and 10, so it's not a prime number.",
    },
    {
      input: 'number = 2',
      output: 'true',
      explanation: '2 is the smallest and only even prime number.',
    },
  ],
};

export const languages = [
  'C++',
  'Java',
  'C',
  'Python',
  'Node.js',
  'JavaScript',
  'TypeScript',
];

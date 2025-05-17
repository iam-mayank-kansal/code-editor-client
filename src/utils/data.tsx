import { QuestionDescriptionInterface } from './interface';

export const questionDescription: QuestionDescriptionInterface = {
  no: 2,
  title: 'Check Prime Number',
  difficulty: 'Easy',
  functionSignature: 'function isPrime(n: number): boolean',
  description: [
    'Given an integer number, determine whether it is a prime number or not.',
    'A prime number is a number that is greater than 1 and has no positive divisors other than 1 and itself.',
    'Return true if the number is prime, otherwise return false.',
  ],
  constraints: ['1 ≤ n ≤ 10^6'],
  hints: [
    'A prime number has only 2 divisors.',
    'Try checking up to the square root of the number.',
  ],
  tags: ['math', 'primes', 'logic'],
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
  ],
  testCases: [
    {
      index: 1,
      type: 'public',
      inputs: [{ key: 'n', value: 2 }],
      expectedOutput: true,
    },
    {
      index: 2,
      type: 'private',
      inputs: [{ key: 'n', value: 999983 }],
      expectedOutput: true,
    },
  ],
  boilerplate: {
    javascript: `function isPrime(n) {
  // your code here
}`,
    python: `def is_prime(n):
    # your code here`,
  },
  submissions: [
    {
      language: 'javascript',
      code: `function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
      status: 'Accepted',
      submittedAt: '2025-05-16T10:32:00Z',
    },
    {
      language: 'python',
      code: `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True`,
      status: 'Wrong Answer',
      submittedAt: '2025-05-16T09:50:00Z',
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

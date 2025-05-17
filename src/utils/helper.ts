export function getDefaultScript(language: string): string {
  switch (language.toLowerCase()) {
    case 'python':
      return `# Write your Python code here
def is_prime(n):
    # Your code here
    return True`;

    case 'javascript':
    case 'node.js':
      return `// Write your JavaScript code here
function isPrime(n) {
  // Your code here
  return true;
}`;

    case 'typescript':
      return `// Write your TypeScript code here
function isPrime(n: number): boolean {
  // Your code here
  return true;
}`;

    case 'cpp':
    case 'c++':
      return `// Write your C++ code here
#include <iostream>
using namespace std;

bool isPrime(int n) {
  // Your code here
  return true;
}`;

    case 'c':
      return `// Write your C code here
#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
  // Your code here
  return true;
}`;

    case 'java':
      return `// Write your Java code here
public static boolean isPrime(int n) {
  // Your code here
  return true;
}`;

    default:
      throw new Error('Invalid language ' + language);
  }
}


export function getDefaultInput(language: string): string {
  switch (language.toLowerCase()) {
    case 'python':
    case 'cpp':
    case 'c++':
    case 'c':
    case 'java':
    case 'javascript':
    case 'node.js':
    case 'typescript':
      return ''; // No input needed
    default:
      throw new Error('Invalid language ' + language);
  }
}

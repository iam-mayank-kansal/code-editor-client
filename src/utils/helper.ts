export function getDefaultScript(language: string): string {
  switch (language.toLowerCase()) {
    case 'python':
      return '# Write your Python code here\nprint(12 + 2)';

    case 'javascript':
    case 'node.js':
      return '// Write your JavaScript code here\nconsole.log(12 + 2);';

    case 'typescript':
      return '// Write your TypeScript code here\nconsole.log(12 + 2);';

    case 'cpp':
    case 'c++':
      return '// Write your C++ code here\n#include <iostream>\n\nint main() {\n  std::cout << 12 + 2;\n  return 0;\n}';

    case 'c':
      return '// Write your C code here\n#include <stdio.h>\n\nint main() {\n  printf("%d", 12 + 2);\n  return 0;\n}';

    case 'java':
      return '// Write your Java code here\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(12 + 2);\n  }\n}';

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

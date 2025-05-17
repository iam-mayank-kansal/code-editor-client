export interface TestInputInterface {
  key: string;
  value: any;
}

export interface TestCaseInterface {
  index: number;
  type: 'public' | 'private';
  inputs: TestInputInterface[];
  expectedOutput: any;
}

export interface ExamplesInterface {
  input: string;
  output: string;
  explanation: string;
}

export interface BoilerplateInterface {
  [language: string]: string;
}

export interface SubmissionInterface {
  language: string;
  code: string;
  status: 'Accepted' | 'Wrong Answer' | 'Runtime Error' | 'Time Limit Exceeded';
  submittedAt: string; // ISO string or readable format
}

export interface QuestionDescriptionInterface {
  no: number;
  title: string;
  difficulty: string;
  functionSignature: string;
  description: string[];
  constraints: string[];
  hints: string[];
  tags: string[];
  examples: ExamplesInterface[];
  testCases: {
    index: number;
    type: 'public' | 'private';
    inputs: { key: string; value: any }[];
    expectedOutput: any;
  }[];
  boilerplate: {
    javascript: string;
    python: string;
    [key: string]: string;
  };
  submissions?: SubmissionInterface[]; // optional, can be empty initially
}


export interface CodeResponseInterface {
  output: string;
  logs: string;
  runtime: string;
}
export interface CodeEditorTabInterface {
  showLanguageOption: boolean;
  setshowLanguageOption: (value: boolean) => void;
  activeTab: number;
  setactiveTab: (value: number) => void;
  language: string;
  code: string;
  setLangauge: (value: string) => void;
  codeResponse: CodeResponseInterface;
  setCodeResponse: (value: CodeResponseInterface) => void;
}

export interface DesciptionAndSubmissionTabInterface {
  activeTab: number;
  setactiveTab: (value: number) => void;
}

export interface CodeInterface {
  language: string;
  code: string;
  setCode: (value: string) => void;
}

export interface CodeEditorPartInterface {
  currentLanguage: string;
  setcurrentLanguage: (value: string) => void;
}

export interface TestInputsInterface {
  key : string,
  value : string | number
}
export interface TestCaseDataInterface {
  index : number,
  inputs : TestInputsInterface[]
}
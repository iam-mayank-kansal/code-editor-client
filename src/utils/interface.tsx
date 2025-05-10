import { Anek_Malayalam } from "next/font/google"

export interface Examples {
  input: string,
  output: string,
  explanation: string,
}
export interface QuestionDescriptionInterface {
  no: number,
  title: string,
  status: string,
  description: string[],
  examples: Examples[]
}

export interface LanguagesInterface {
  name: string,
  code: number
}

export interface CodeEditorTabInterface {
  showLanguageOption: boolean,
  setshowLanguageOption: (value: boolean) => void,
  currentLanguage: string,
  setcurrentLanguage: (value: string) => void
}

export interface DesciptionAndSubmissionTabInterface {
  activeTab: number,
  setactiveTab: (value: number) => void
}

export interface CodeEditorPartInterface {
  currentLanguage: string,
  setcurrentLanguage: (value: string) => void
}
'use client';
import { useEffect, useState } from 'react';
import CodeEditorTab from '../Code-Tab';
import { getDefaultScript } from '@/utils/helper';
import CodeOutput from '../Result';
import TestCases from '../Test-Cases';
import Code from '../Code';
import { CodeResponseInterface } from '@/utils/interface';

export default function CodeEditorPart() {
  const [showLanguageOption, setshowLanguageOption] = useState<boolean>(false);
  const [activeTab, setactiveTab] = useState<number>(0);
  const [language, setLanguage] = useState<string>('C++');
  const [code, setCode] = useState<string>('');
  const [codeResponse, setCodeResponse] = useState<CodeResponseInterface>({
    output: 'Not Compiled Anything Yet',
    logs: '',
    runtime: '0s',
  });

  useEffect(() => {
    setCode(getDefaultScript(language));
  }, [language]);

  return (
    <div className="overflow-hidden rounded-xl border-2 w-[50%] h-full">
      <div className="min-h-[90vh] h-full">
        {/* tab for code  */}
        <CodeEditorTab
          showLanguageOption={showLanguageOption}
          setshowLanguageOption={setshowLanguageOption}
          activeTab={activeTab}
          setactiveTab={setactiveTab}
          language={language}
          code={code}
          setLangauge={setLanguage}
          codeResponse={codeResponse}
          setCodeResponse={setCodeResponse}
        />
        {/* Multiple Area show based on Tab Selection : Code, TestCases, Result  */}
        {activeTab == 0 ? (
          <Code language={language} code={code} setCode={setCode} />
        ) : activeTab == 1 ? (
          <TestCases />
        ) : (
          <CodeOutput codeResponse={codeResponse} />
        )}
      </div>
    </div>
  );
}

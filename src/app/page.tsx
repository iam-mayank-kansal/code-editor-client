'use client';
import { useState } from 'react';
import CodeEditorPart from '@/components/Code-Part';
import DesciptionAndSubmissionPart from '@/components/Des-Sub-Part';

export default function Home() {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div className="m-2">
      {/* <h1>Compiler</h1> */}
      <section className="flex gap-1 h-[90vh]">
        {/* left part code desciptions and submissions */}
        <DesciptionAndSubmissionPart
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        />

        {/* right part code writting */}
        <CodeEditorPart />
      </section>
    </div>
  );
}

"use client"
import { useState } from "react";
import CodeEditorPart from "@/components/Code-Part-2";
import DesciptionAndSubmissionPart from "@/components/Des-Sub-Part-1";

export default function Home() {

  const [activeTab, setactiveTab] = useState(0);
  const [currentLanguage, setcurrentLanguage] = useState("C++");



  return (
    <div className="m-2">
      <h1>Compiler</h1>
      <section className="flex gap-1 h-[90vh]">
        {/* left part code desciptions and submissions */}
        <DesciptionAndSubmissionPart activeTab={activeTab} setactiveTab={setactiveTab} />
        
        {/* right part code writting */}
       <CodeEditorPart currentLanguage={currentLanguage} setcurrentLanguage={setcurrentLanguage} />

      </section>
    </div>
  );
}

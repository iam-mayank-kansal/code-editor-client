import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import CodeEditorTab from "../Code-Tab";
import { CodeEditorPartInterface } from "@/utils/interface";

export default function CodeEditorPart({ currentLanguage, setcurrentLanguage }: CodeEditorPartInterface) {
    const [showLanguageOption, setshowLanguageOption] = useState(false);
    return (
    <div className="overflow-hidden w-[50%] h-full">
        <div className=" bg-gray-900 rounded-xl min-h-[90vh] h-full">
            {/* tab for code  */}
            <CodeEditorTab showLanguageOption={showLanguageOption} setshowLanguageOption={setshowLanguageOption} currentLanguage={currentLanguage} setcurrentLanguage={setcurrentLanguage} />
            {/* code writing area  */}
            <div className="border-2 border-gray-900 rounded-xl h-full">
                 <Editor height="fit" defaultLanguage="javascript" defaultValue="// some comment" theme="custom-dark"/>;
            </div>
        </div>
    </div>

    )

}
import { languages } from "@/utils/data"
import { CodeEditorTabInterface, LanguagesInterface } from "@/utils/interface"
import { ChevronDown, Code, Maximize } from "lucide-react"

export default function CodeEditorTab({ showLanguageOption, setshowLanguageOption, currentLanguage, setcurrentLanguage }: CodeEditorTabInterface) {
    return (
        <div className="bg-gray-700 flex items-center justify-between  text-white px-2 py-1 gap-2">
            {/* left  */}
            <div
                className={`flex gap-4 items-center cursor-pointer p-2 rounded-md px-3`}>
                <Code className="text-green-600" />
                <h4>Code</h4>
            </div>

            {/* right  */}
            <div className="flex gap-2 items-center cursor-pointer ">
                <div
                    className="flex gap-1 relative duration-100 hover:bg-gray-800 p-2 rounded-md px-3"
                    onClick={() => setshowLanguageOption(!showLanguageOption)}>
                    <span>{currentLanguage}</span>
                    <ChevronDown className="text-sm" />
                    <div className={`absolute top-[120%] z-10 right-0 bg-gray-700 w-fit h-fit min-w-sm p-1 gap-4 ${showLanguageOption ? "grid grid-cols-3" : "hidden"}`}>
                        {
                            languages.map((language: LanguagesInterface, languageIndex: number) => {
                                return (
                                    <span
                                        className="hover:bg-gray-900 p-2 rounded-md text-center"
                                        key={languageIndex}
                                        onClick={() => setcurrentLanguage(language.name)}>
                                        {language.name}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>

                <Maximize className="cursor-pointer mr-3 h-5 text-gray-300 hover:text-white" />
            </div>
        </div>
    )
}
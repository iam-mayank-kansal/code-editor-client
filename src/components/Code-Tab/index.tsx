import { languages } from "@/utils/data"
import { CodeEditorTabInterface } from "@/utils/interface"
import axios from "axios"
import { ChevronDown, Code, Maximize, SquareCheck, SquareChevronRight } from "lucide-react"
import toast from "react-hot-toast"

export default function CodeEditorTab({ showLanguageOption, setshowLanguageOption, activeTab, setactiveTab, code, language, setLangauge, setCodeResponse }: CodeEditorTabInterface) {

    const executecode = async () => {
        if (!(code.length > 0)) {
            toast("❌ Please Enter some Code to run")
        }

        const CodeResponse = await axios.post("http://localhost:8080/api/run", { code, language });
        console.log(CodeResponse?.data?.data);
        setCodeResponse(CodeResponse?.data?.data)


    }

    return (
        <div className="bg-gray-700 flex items-center justify-between  text-white px-2 py-1 gap-2">
            {/* left  */}
            <div className="flex items-center gap-2">
                <button className="bg-green-600 p-1 px-3 cursor-pointer rounded-md hover:bg-green-700" onClick={() => executecode()}>RUN</button>
                <div
                    className={`flex gap-4 items-center cursor-pointer duration-100 hover:bg-gray-800 p-2 rounded-md px-3 ${activeTab == 0 ? "text-white" : "text-gray-400"}`} onClick={() => setactiveTab(0)}>
                    <Code className="text-green-600" />
                    <h4>Code</h4>
                </div>
                <div>|</div>
                <div
                    className={`flex gap-4 items-center cursor-pointer duration-100 hover:bg-gray-800 p-2 rounded-md px-3 ${activeTab == 1 ? "text-white" : "text-gray-400"}`} onClick={() => setactiveTab(1)}>
                    <SquareCheck  className="text-green-600" />
                    <h4>Test Cases</h4>
                </div>
                <div>|</div>
                <div
                    className={`flex gap-4 items-center cursor-pointer duration-100 hover:bg-gray-800 p-2 rounded-md px-3 ${activeTab == 2 ? "text-white" : "text-gray-400"}`} onClick={() => setactiveTab(2)}>
                    <SquareChevronRight className="text-green-600" />
                    <h4>Result</h4>
                </div>

            </div>

            {/* right  */}
            <div className="flex gap-2 items-center cursor-pointer ">
                <div
                    className="flex gap-1 relative duration-100 hover:bg-gray-800 p-2 rounded-md px-3"
                    onClick={() => setshowLanguageOption(!showLanguageOption)}>
                    <span className="capitalize">{language}</span>
                    <ChevronDown className="text-sm" />
                    <div className={`absolute top-[120%] z-10 right-0 bg-gray-700 w-fit h-fit min-w-sm p-1 gap-4 ${showLanguageOption ? "grid grid-cols-3" : "hidden"}`}>
                        {
                            languages.map((languageName: string, languageIndex: number) => {
                                return (
                                    <span
                                        className="hover:bg-gray-900 p-2 rounded-md text-center"
                                        key={languageIndex}
                                        onClick={() => setLangauge(languageName)}>
                                        {languageName}
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
import { QuestionDescriptionInterface } from "@/utils/interface"

export default function Desciption({ data, activeTab }: { data: QuestionDescriptionInterface, activeTab: number }) {
    return (
        <div className={`bg-gray-900 pb-12 overflow-auto h-full p-6 text-white ${activeTab == 0 ? "flex flex-col gap-4" : "hidden"}`}>
            <h2 className="text-3xl font-bold">{data.no}. {data.title}</h2>
            <div>
                <span className={`capitalize text-sm bg-gray-700 p-1 px-3 rounded-4xl ${data.status == "easy" ? "text-green-400" : data.status == "medium" ? "text-yellow-400" : "text-red-400"}`}>
                    {data.status}
                </span>
            </div>
            <div>
                {
                    data.description.map((description, desciptionIndex) => {
                        return (
                            <p className="text-[18px] mb-2 text-gray-200" key={desciptionIndex}>{description}</p>
                        )
                    })
                }
            </div>

            <div className="mt-4 text-gray-300">
                {
                    data.examples.map((example, exampleIndex) => {
                        return (
                            <div key={exampleIndex} className="mb-4">
                                <h4 className="text-xl font-bold">Example {exampleIndex + 1}:</h4>
                                <div className="text-[18px] ml-6 mt-2">
                                    <p><span className="text-gray-50 font-semibold">Input: </span>{example.input}</p>
                                    <p><span className="text-gray-50 font-semibold">Output: </span>{example.input}</p>
                                    <p><span className="text-gray-50 font-semibold">Explanation: </span>{example.explanation}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
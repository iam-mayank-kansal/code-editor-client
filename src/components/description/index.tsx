import { QuestionDescriptionInterface } from '@/utils/interface';

export default function Description({
  data,
  activeTab,
}: {
  data: QuestionDescriptionInterface;
  activeTab: number;
}) {
  return (
    <div
      className={`bg-gray-900 pb-12 overflow-auto h-full p-6 text-white ${
        activeTab === 0 ? 'flex flex-col gap-4' : 'hidden'
      }`}
    >
      <h2 className="text-3xl font-bold">
        {data.no}. {data.title}
      </h2>

      <div className="flex items-center gap-4 flex-wrap">
        <span
          className={`capitalize text-sm bg-gray-700 p-1 px-3 rounded-4xl ${
            data.difficulty === 'Easy'
              ? 'text-green-400'
              : data.difficulty === 'Medium'
              ? 'text-yellow-400'
              : 'text-red-400'
          }`}
        >
          {data.difficulty}
        </span>

        {data.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-green-700 text-white px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        {data.description.map((description, index) => (
          <p className="text-[18px] mb-2 text-gray-200" key={index}>
            {description}
          </p>
        ))}
      </div>

      <div className="mt-4 text-gray-300">
        {data.examples.map((example, exampleIndex) => (
          <div key={exampleIndex} className="mb-4">
            <h4 className="text-xl font-bold">Example {exampleIndex + 1}:</h4>
            <div className="text-[18px] ml-6 mt-2">
              <p>
                <span className="text-gray-50 font-semibold">Input: </span>
                {example.input}
              </p>
              <p>
                <span className="text-gray-50 font-semibold">Output: </span>
                {example.output}
              </p>
              <p>
                <span className="text-gray-50 font-semibold">Explanation: </span>
                {example.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {data.constraints?.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xl font-bold text-gray-100">Constraints</h4>
          <ul className="list-disc ml-6 text-gray-300 mt-2">
            {data.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {data.hints?.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xl font-bold text-gray-100">Hints</h4>
          <ul className="list-disc ml-6 text-gray-300 mt-2">
            {data.hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

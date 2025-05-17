"use client"
import { QuestionDescriptionInterface, SubmissionInterface } from "@/utils/interface";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function Submissions({
  data,
  activeTab,
}: {
  data: QuestionDescriptionInterface;
  activeTab: number;
}) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);

  if (!data?.submissions || data.submissions.length === 0) {
    return (
      <div
        className={`bg-gray-900 p-6 pb-12 overflow-auto h-full text-white ${activeTab === 1 ? "flex flex-col" : "hidden"
          }`}
      >
        <div>No Submissions Available</div>
      </div>
    );
  }

  // Copy to clipboard helper
  const copyToClipboard = (code: string, id: string | number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div
      className={`bg-gray-900 p-6 pb-12 overflow-auto h-full text-white ${activeTab === 1 ? "flex flex-col gap-4" : "hidden"
        }`}
    >
      {data.submissions.map((submission: SubmissionInterface, submissionIndex: number) => (
        <div
          key={submissionIndex}
          className="bg-gray-800 rounded-lg p-4 shadow-md"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-300">
                Submitted at:{" "}
                <span className="font-semibold text-white">
                  {new Date(submission.submittedAt).toLocaleString()}
                </span>
              </p>
              <p>
                Status:{" "}
                <span
                  className={`font-semibold ${submission.status === "Accepted"
                      ? "text-green-400"
                      : submission.status === "Wrong Answer"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                >
                  {submission.status}
                </span>
              </p>
              <p>Language: {submission.language}</p>
            </div>
            <button
              onClick={() =>
                setExpandedId(expandedId === submissionIndex ? null : submissionIndex)
              }
              className="text-blue-400 hover:text-blue-600 transition mr-4 cursor-pointer"
            >
              {expandedId === submissionIndex ? "Hide Code" : "Show Code"}
            </button>
          </div>
          {expandedId === submissionIndex && (
            <div className="relative mt-3">
              <button
                onClick={() => copyToClipboard(submission.code, submissionIndex)}
                className="absolute top-2 right-2 p-1 rounded bg-gray-700 hover:bg-gray-600 transition flex items-center gap-1 text-gray-300 cursor-pointer"
                aria-label="Copy code"
              >
                <Copy size={16} />
                {copiedId === submissionIndex && (
                  <span className="text-green-400 ml-1 text-xs font-semibold">
                    Copied!
                  </span>
                )}
              </button>
              <pre className="max-h-60 overflow-auto rounded bg-gray-900 p-4 text-sm whitespace-pre-wrap font-mono">
                {submission.code}
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

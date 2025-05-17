"use client";
import { TestCaseDataInterface } from "@/utils/interface";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestCases() {
  const defaultData: TestCaseDataInterface[] = [
    {
      index: 1,
      inputs: [{ key: "n", value: 2 }],
    },
    {
      index: 2,
      inputs: [{ key: "n", value: 3 }],
    },
  ];

  const [testCasesData, setTestCasesData] = useState<TestCaseDataInterface[]>(() => {
    const saved = sessionStorage.getItem("testCasesData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [newTaskInput, setNewTaskInput] = useState<string>("");
  const [showAddTestCaseDialog, setShowAddTestCaseDialog] = useState<boolean>(false);

  useEffect(() => {
    // Update sessionStorage whenever testCasesData changes
    sessionStorage.setItem("testCasesData", JSON.stringify(testCasesData));
  }, [testCasesData]);

  useEffect(() => {
    // when click on button body scroll stop 
    document.body.style.overflow = showAddTestCaseDialog ? "hidden" : "auto";
  }, [showAddTestCaseDialog]);

  const selectedTestCase = testCasesData.find(
    (testCase) => testCase.index === selectedIndex
  );

  // adding a new test case 
  const addTask = () => {
    if (newTaskInput.trim() !== "") {
      const newData = [
        ...testCasesData,
        {
          index: testCasesData.length + 1,
          inputs: [
            {
              key: testCasesData[0]?.inputs[0]?.key || "n",
              value: newTaskInput,
            },
          ],
        },
      ];
      setTestCasesData(newData);
      setNewTaskInput("");
      setShowAddTestCaseDialog(false);
    }
  };

  return (
    <div className="h-full w-full p-6 bg-gray-900 text-white flex flex-col relative">
      {showAddTestCaseDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
      )}

      <h3 className="text-xl">Test Cases</h3>

      <div className="mt-3 flex gap-4">
        {testCasesData.map((testCase) => (
          <span
            key={testCase.index}
            onClick={() => setSelectedIndex(testCase.index)}
            className={`rounded-xl p-2 px-4 cursor-pointer ${selectedIndex === testCase.index
              ? "bg-gray-900 border-2 border-gray-700"
              : "bg-gray-700 border-2 border-gray-700"
              }`}
          >
            Test-{testCase.index}
          </span>
        ))}

        <span
          className="rounded-xl bg-gray-700 p-2 px-4 cursor-pointer flex items-center"
          onClick={() => setShowAddTestCaseDialog(true)}
        >
          <Plus />
        </span>
      </div>

      {showAddTestCaseDialog && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative bg-white text-black p-6 rounded-xl shadow-xl w-[90%] max-w-md z-30">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Add New Test Case</h3>

            <label className="text-sm text-gray-700">Input Value</label>
            <input
              type="text"
              placeholder="Enter the test input value"
              className="border border-gray-300 rounded-lg p-3 mt-1 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full cursor-pointer"
                onClick={() => setShowAddTestCaseDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full cursor-pointer"
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="mt-5">
        <h3 className="text-xl">Input</h3>
        <div className="w-[90%] bg-gray-700 p-3 pl-4 rounded-xl mt-2 text-[18px] flex gap-2 flex-wrap">
          {selectedTestCase?.inputs.map((input, idx) => (
            <span key={idx}>
              {input.key} = {input.value}
            </span>
          )) || <span>No inputs</span>}
        </div>
      </div>
    </div>
  );
}

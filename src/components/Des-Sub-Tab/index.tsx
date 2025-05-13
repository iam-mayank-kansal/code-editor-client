import { DesciptionAndSubmissionTabInterface } from '@/utils/interface';
import { CircleCheck, Maximize, ReceiptText } from 'lucide-react';

export default function DesciptionAndSubmissionTab({
  activeTab,
  setactiveTab,
}: DesciptionAndSubmissionTabInterface) {
  return (
    <div className="sticky top-0 bg-gray-700 flex items-center justify-between  text-white px-2 py-1 gap-2">
      <div className="flex items-center gap-2">
        <div
          className={`flex gap-1 items-center cursor-pointer duration-100 hover:bg-gray-800 p-2 rounded-md px-3 ${activeTab == 0 ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setactiveTab(0)}
        >
          <ReceiptText className="text-blue-600" />
          <span>Description</span>
        </div>
        <div>|</div>
        <div
          className={`flex gap-1 items-center cursor-pointer duration-100 hover:bg-gray-800 p-2 rounded-md px-3 ${activeTab == 1 ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setactiveTab(1)}
        >
          <CircleCheck className="text-green-600" />
          <span>Submissions</span>
        </div>
      </div>
      <Maximize className="cursor-pointer mr-3 h-5 text-gray-300 hover:text-white" />
    </div>
  );
}

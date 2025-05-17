import { questionDescription } from '@/utils/data';
import Desciption from '../description';
import Submissions from '../submission';
import DesciptionAndSubmissionTab from '../Des-Sub-Tab';
import { DesciptionAndSubmissionTabInterface } from '@/utils/interface';

export default function DesciptionAndSubmissionPart({
  activeTab,
  setactiveTab,
}: DesciptionAndSubmissionTabInterface) {
  return (
    <div className="w-[50%] bg-gray-900 rounded-xl h-[90vh] pb-5 overflow-hidden ">
      {/* header for switching tabs for description and submissions  */}
      <DesciptionAndSubmissionTab
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      <div className="h-full">
        {/* tab for Desciption  */}
        <Desciption data={questionDescription} activeTab={activeTab} />
        {/* tab for Submission  */}
        <Submissions data={questionDescription} activeTab={activeTab} />
      </div>
    </div>
  );
}

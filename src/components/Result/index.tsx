import { CodeResponseInterface } from '@/utils/interface';

export default function CodeResult({
  codeResponse,
}: {
  codeResponse: CodeResponseInterface;
}) {
  return (
    <div className="h-full w-full p-6 bg-gray-900 text-white flex flex-col">
      <div className="bg-white p-4 text-black mb-4">
        <h4 className="text-xxl font-bold uppercase">
          Execution Time :{' '}
          <span className="font-normal lowercase">{codeResponse?.runtime}</span>
        </h4>
      </div>
      <div>
        <h4 className="text-xxl font-bold mb-2 uppercase">Result </h4>
        <div className="bg-white text-black h-full w-full min-h-[430px] rounded-md p-3">
          <h4 className="font-semibold text-xll">
            {codeResponse.output != '' ? codeResponse?.output : 'loading...'}
          </h4>
        </div>
      </div>
    </div>
  );
}

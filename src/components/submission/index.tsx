export default function Submissions({ activeTab }: { activeTab: number }) {
  return (
    <div
      className={`bg-gray-900 p-6 pb-12 overflow-auto  h-full text-white ${activeTab == 1 ? 'flex flex-col' : 'hidden'}`}
    >
      <div>No Submission Available</div>
    </div>
  );
}

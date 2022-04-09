export default function Table({ students }) {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
                Name
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                NRP / Student ID
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {students.map((student) => {
              return (
                <tr key={student.nrp}>
                  <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                    {student.name}
                  </td>
                  <td className="border-b border-slate-100 p-4 text-slate-500">
                    {student.nrp}
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

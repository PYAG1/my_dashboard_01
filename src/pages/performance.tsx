import {
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import WorkedHours from "../components/performace/WorkedHoursChart";
import EmployeeList from "../components/performace/employeeList";
import LeadBySales from "../components/performace/leadyBySales";

export default function Performance() {
  return (
    <div className=" w-full px-2 lg:px-6 min-h-screen">
      <div className=" w-full flex flex-col gap-3 lg:flex-row justify-between mb-5">
        <div className=" space-y-1">
          <p className=" text-dark text-3xl font-medium">Team Performance</p>
          <p className=" text-zinc-400">Let's see how your team is growing</p>
        </div>

        <div className=" flex items-center gap-3">
          <button className=" flex items-center gap-2 bg-white p-2 border border-1 rounded-md">
            <ArrowDownTrayIcon className=" w-5 h-5" />
            <p className=" font-medium text-sm">Export data</p>
          </button>
          <button className=" h-8 w-8 bg-white rounded-full border border-1 flex items-center justify-center ">
            <Cog6ToothIcon className="h-5 w-5 " />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
  <div className="h-80 rounded-lg grid grid-rows-2 gap-5">
    <div className="w-full h-full relative isolate overflow-hidden rounded-xl bg-primary/40 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 row-span-2">
      <div className="absolute inset-y-0 right-8 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-15deg] bg-secondary/60 shadow-xl shadow-secondary/50 ring-1 ring-primary/40 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="absolute inset-y-0 right-24 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-20deg] bg-secondary/70 shadow-xl shadow-primary/60 ring-1 ring-primary/50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/75 to-primary/60" />
      
      <div className="text-white flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <p className="text-xl">Total Members</p>
          <div className="w-10 h-10 flex justify-center items-center bg-white/15 rounded-full">
            <UserIcon className="w-6 h-6" />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-2 mt-2">
          <p className="text-3xl">4,500</p>
        </div>
      </div>
    </div>

    <div className="shadow h-[9.5rem] rounded-xl bg-white border p-4 flex flex-col justify-between relative">
      <div>
        <h2 className="text-lg font-semibold">On Leave</h2>
        <p className="text-3xl">300</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="p-2 bg-red-100 border w-max rounded-full text-red-600">
            <p>- 0.2%</p>
          </div>
          <p className="text-sm">Increase than last month</p>
        </div>
      </div>
    </div>
  </div>

  <div className="h-80 rounded-lg bg-white">
    <WorkedHours />
  </div>
  <div className="h-80 relative rounded-lg bg-gray-200 lg:col-span-2">
    <LeadBySales />
  </div>
</div>


      <EmployeeList />
    </div>
  );
}

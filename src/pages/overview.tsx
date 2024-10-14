import { ArrowDownTrayIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PieChartComponent, YearlySummary } from "../components/overview/OvervierCharts";
import { Graph } from "iconsax-react";

const BarChartdata = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Overview() {
  return (
    <div className=" w-full px-2 lg:px-6 pb-10">
      <div className=" w-full flex flex-col gap-3 lg:flex-row justify-between mb-5">
        <div className=" space-y-1">
          <p className=" text-dark text-3xl font-medium">Sales Overview</p>
          <p className=" text-zinc-400">Let's see the statistic performance</p>
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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-60 rounded-lg bg-gray-200">
          <div className="w-full h-full relative isolate overflow-hidden rounded-lg bg-primary/40 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 row-span-2">
            <div className="absolute inset-y-0 right-8 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-15deg] bg-secondary/60 shadow-xl shadow-secondary/50 ring-1 ring-primary/40 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="absolute inset-y-0 right-24 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-20deg] bg-secondary/70 shadow-xl shadow-primary/60 ring-1 ring-primary/50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/75 to-primary/60" />

            <div className="text-white shadow flex flex-col justify-between h-full">
            <div className=" flex justify-between">
                <p className="text-xl">Total Members</p>

                <div className=" w-10 h-10 flex justify-center items-center bg-white/15 rounded-full">
                  <Graph className=" w-6 h-6" />
                </div>
              </div>

              <div className=" w-fullflex flex-col justify-center items-center gap-2">
                <p className="text-3xl mt-2">$12,345.00</p>
                <div className=" w-full flex gap-3 items-center ">
                  <div className=" p-2 bg-white/25 w-max rounded-full">
                    + 0.2%
                  </div>
                  <p className=" text-lg">Increase than last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-60 shadow rounded-lg bg-white border border-1 p-4 flex flex-col justify-between relative">
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>
                <stop stopColor="rgba(253, 242, 243, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,49L60,73.5C120,98,240,147,360,204.2C480,261,600,327,720,310.3C840,294,960,196,1080,130.7C1200,65,1320,33,1440,16.3C1560,0,1680,0,1800,8.2C1920,16,2040,33,2160,81.7C2280,131,2400,212,2520,253.2C2640,294,2760,294,2880,277.7C3000,261,3120,229,3240,236.8C3360,245,3480,294,3600,269.5C3720,245,3840,147,3960,163.3C4080,180,4200,310,4320,359.3C4440,408,4560,376,4680,367.5C4800,359,4920,376,5040,326.7C5160,278,5280,163,5400,171.5C5520,180,5640,310,5760,334.8C5880,359,6000,278,6120,245C6240,212,6360,229,6480,253.2C6600,278,6720,310,6840,302.2C6960,294,7080,245,7200,187.8C7320,131,7440,65,7560,49C7680,33,7800,65,7920,65.3C8040,65,8160,33,8280,65.3C8400,98,8520,196,8580,245L8640,294L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
            ></path>
          </svg>
          <div className="flex flex-col justify-between h-full z-10">
  <h2 className="h-10 text-lg font-semibold">On Leave</h2>
  
  <div>
    <p className="text-3xl">300</p>
    <div className="w-full items-center gap-2 flex mt-2">
      <div className="p-2 bg-red-100 border border-1 w-max rounded-full text-red-600">
        <p>- 0.2%</p> 
      </div>
      <p className="text-sm">Increase than last month</p>
    </div>
  </div>
</div>

        </div>

        <SalesChart />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5">
        <div className="h-full rounded-lg bg-gray-200 lg:col-span-2">
          <YearlySummary/>
        </div>
        <div className="h-full rounded-lg bg-gray-200">
          <PieChartComponent/>
        </div>
      </div>
    </div>
  );
}

const SalesChart = () => {
  return (
    <div className=" w-full h-60 bg-white border border-1 ">
      <ResponsiveContainer width="100%" height="100%" className={"py-3"}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
       
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#1898bd"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#4885ec"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#485dec"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

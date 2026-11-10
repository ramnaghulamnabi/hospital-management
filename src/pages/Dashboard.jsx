import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
const barData = [{name:"Mon", patients:20},{name:"Tue", patients:32},{name:"Wed", patients:28},{name:"Thu", patients:40},{name:"Fri", patients:25}];
const pieData = [{name:"Recovered", value:70},{name:"Treatment", value:30}];
function Dashboard() {
  return (
    <div className="flex"><Sidebar />
      <div className="ml-[230px] flex-1 p-5 bg-slate-100 min-h-screen">
        <Navbar title="Dashboard" />
        <div className="grid grid-cols-4 gap-4 mb-5">
          <div className="bg-white p-5 rounded-xl shadow"><p className="text-gray-500 text-sm">Total Patients</p><h1 className="text-3xl font-bold">1,240</h1></div>
          <div className="bg-white p-5 rounded-xl shadow"><p className="text-gray-500 text-sm">Total Doctors</p><h1 className="text-3xl font-bold">45</h1></div>
          <div className="bg-white p-5 rounded-xl shadow"><p className="text-gray-500 text-sm">Today Appointments</p><h1 className="text-3xl font-bold">28</h1></div>
          <div className="bg-white p-5 rounded-xl shadow"><p className="text-gray-500 text-sm">Total Revenue</p><h1 className="text-3xl font-bold">Rs 85,000</h1></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow"><h3 className="font-bold mb-3">Weekly Patients Chart</h3><div className="h-[220px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={barData}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="patients" fill="#0ea5e9"/></BarChart></ResponsiveContainer></div></div>
          <div className="bg-white p-5 rounded-xl shadow"><h3 className="font-bold mb-3">Patient Status</h3><div className="h-[220px]"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80}><Cell fill="#22c55e"/><Cell fill="#facc15"/></Pie><Tooltip/></PieChart></ResponsiveContainer></div></div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
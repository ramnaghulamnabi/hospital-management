import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Doctors() {
  const [filter, setFilter] = useState("All");

  const doctors = [
    { id: 1, name: "Dr. Sara", spec: "Cardiologist", days: "Mon - Fri", timing: "10:00 AM - 02:00 PM", available: "Available" },
    { id: 2, name: "Dr. Bilal", spec: "Dentist", days: "Mon, Wed, Fri", timing: "04:00 PM - 08:00 PM", available: "Available" },
    { id: 3, name: "Dr. Ayesha", spec: "General", days: "Tue - Sat", timing: "09:00 AM - 01:00 PM", available: "Available" },
    { id: 4, name: "Dr. Ahmed", spec: "Cardiologist", days: "Sat - Sun", timing: "11:00 AM - 03:00 PM", available: "On Leave" },
  ];

  const filtered = filter === "All" ? doctors : doctors.filter((d) => d.spec === filter);

  return (
    <div className="flex"><Sidebar />
      <div className="ml-[230px] flex-1 p-5 bg-slate-100 min-h-screen">
        <Navbar title="Doctors" />

        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-3 border rounded-lg mb-4 bg-white">
          <option>All</option><option>Cardiologist</option><option>Dentist</option><option>General</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          {filtered.map((d) => (
            <div key={d.id} className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{d.name}</h3>
                <span className={d.available === "Available" ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold" : "bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold"}>
                  {d.available}
                </span>
              </div>
              <p className="text-gray-500 mt-1">{d.spec}</p>
              <div className="mt-3 bg-slate-50 p-3 rounded-lg text-sm">
                <p>📅 <b>Days:</b> {d.days}</p>
                <p className="mt-1">⏰ <b>Timing:</b> {d.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Doctors;
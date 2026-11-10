import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Appointments() {
  const [list, setList] = useState([
    { id: 1, patient: "Ahmed Ali", doctor: "Dr. Sara", date: "2026-11-12", status: "Pending" },
    { id: 2, patient: "Fatima Khan", doctor: "Dr. Bilal", date: "2026-11-13", status: "Confirmed" },
  ]);

  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("Dr. Sara");
  const [date, setDate] = useState("");
  const [editId, setEditId] = useState(null);

  // Book ya Update dono isi se hoga
  const saveAppointment = () => {
    if (!patient || !date) return alert("Patient aur Date likhen");

    if (editId) {
      // Edit wala case: purani appointment ki date update karo
      setList(list.map((x) => x.id === editId ? { ...x, patient, doctor, date, status: "Rescheduled" } : x));
      setEditId(null);
    } else {
      setList([...list, { id: list.length + 1, patient, doctor, date, status: "Pending" }]);
    }
    setPatient(""); setDate(""); setDoctor("Dr. Sara");
  };

  const startEdit = (a) => {
    setEditId(a.id);
    setPatient(a.patient);
    setDoctor(a.doctor);
    setDate(a.date);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex"><Sidebar />
      <div className="ml-[230px] flex-1 p-5 bg-slate-100 min-h-screen">
        <Navbar title="Appointments" />

        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="font-bold mb-3">{editId ? "Edit Appointment - Date Change Karen" : "Book Appointment"}</h3>
          <input placeholder="Patient Name" value={patient} onChange={(e) => setPatient(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="w-full p-3 mb-2 border rounded-lg">
            <option>Dr. Sara</option><option>Dr. Bilal</option><option>Dr. Ayesha</option>
          </select>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <button onClick={saveAppointment} className="bg-sky-500 text-white px-5 py-2 rounded-lg">
            {editId ? "Save Changes" : "Book"}
          </button>
          {editId && <button onClick={() => { setEditId(null); setPatient(""); setDate(""); }} className="bg-gray-300 px-4 py-2 rounded-lg ml-2">Cancel Edit</button>}
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <table className="w-full">
            <thead><tr className="text-left border-b"><th className="p-3">Patient</th><th>Doctor</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {list.map((a) => (
                <tr key={a.id} className="border-b">
                  <td className="p-3">{a.patient}</td><td>{a.doctor}</td><td>{a.date}</td><td>{a.status}</td>
                  <td className="flex gap-2 py-2">
                    <button onClick={() => startEdit(a)} className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Edit</button>
                    <button onClick={() => setList(list.map(x => x.id === a.id ? { ...x, status: "Confirmed" } : x))} className="bg-green-500 text-white px-2 py-1 rounded text-sm">Confirm</button>
                    <button onClick={() => setList(list.filter(x => x.id !== a.id))} className="bg-red-500 text-white px-2 py-1 rounded text-sm">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Appointments;
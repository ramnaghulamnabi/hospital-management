import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-[230px] bg-slate-900 text-white h-screen fixed p-5">
      <h2 className="text-xl mb-8 text-sky-400 font-bold">🏥 Hospital MS</h2>
      <Link to="/dashboard" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">📊 Dashboard</Link>
      <Link to="/patients" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">👨‍👩‍👧 Patients</Link>
      <Link to="/doctors" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">👨‍⚕️ Doctors</Link>
      <Link to="/appointments" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">📅 Appointments</Link>
      <Link to="/billing" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">🧾 Billing</Link>
      <Link to="/" className="block p-3 rounded-lg mb-2 hover:bg-slate-800">🚪 Logout</Link>
    </div>
  );
}
export default Sidebar;
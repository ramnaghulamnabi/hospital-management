import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return alert("Email likhen");
    localStorage.setItem("role", role);
    navigate("/dashboard");
  };
  return (
    <div className="h-screen flex justify-center items-center bg-slate-900">
      <div className="bg-white p-8 w-[380px] rounded-2xl text-center">
        <h2 className="text-2xl font-bold">🏥 Hospital Management</h2>
        <p className="text-gray-500 mb-5 text-sm">Role-based Mock Login</p>
        <form onSubmit={handleLogin}>
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 border rounded-lg" />
          <input type="password" placeholder="Password: 12345" className="w-full p-3 mb-3 border rounded-lg" />
          <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full p-3 mb-3 border rounded-lg">
            <option>Admin</option><option>Doctor</option><option>Receptionist</option>
          </select>
          <button className="w-full bg-sky-500 text-white p-3 rounded-lg">Login as {role}</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
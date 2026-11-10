import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function Patients() {
  const [patients, setPatients] = useState([
    {id:1, name:"Ahmed Ali", age:32, disease:"Fever", doctor:"Dr. Sara"},
    {id:2, name:"Fatima Khan", age:25, disease:"Sugar", doctor:"Dr. Bilal"},
    {id:3, name:"Usman Raza", age:40, disease:"Flu", doctor:"Dr. Ayesha"},
    {id:4, name:"Ayesha Noor", age:29, disease:"Fever", doctor:"Dr. Sara"},
  ]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState(""); const [age, setAge] = useState(""); const [disease, setDisease] = useState("");
  const [editId, setEditId] = useState(null);
  const filtered = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.disease.toLowerCase().includes(search.toLowerCase()));
  const savePatient = () => {
    if(!name || !age) return alert("Name aur Age likhen");
    if(editId){ setPatients(patients.map(p=>p.id===editId ? {...p, name, age, disease} : p)); setEditId(null); }
    else { setPatients([...patients, {id:patients.length+1, name, age, disease: disease||"General", doctor:"Dr. Sara"}]); }
    setName(""); setAge(""); setDisease("");
  };
  const exportCSV = () => {
    const csv = "ID,Name,Age,Disease\n" + patients.map(p=>`${p.id},${p.name},${p.age},${p.disease}`).join("\n");
    const blob = new Blob([csv], {type:"text/csv"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="patients.csv"; a.click();
  };
  return (
    <div className="flex"><Sidebar />
      <div className="ml-[230px] flex-1 p-5 bg-slate-100 min-h-screen">
        <Navbar title="Patients Management" />
        <div className="flex gap-2 mb-4">
          <input placeholder="Search by Name / Disease..." value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 p-3 border rounded-lg bg-white" />
          <button onClick={exportCSV} className="bg-green-600 text-white px-4 rounded-lg">Export CSV</button>
        </div>
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="font-bold mb-3">{editId ? "Edit Patient" : "Add New Patient"}</h3>
          <input placeholder="Patient Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <input placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <input placeholder="Disease" value={disease} onChange={(e)=>setDisease(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <button onClick={savePatient} className="bg-sky-500 text-white px-5 py-2 rounded-lg">{editId ? "Update" : "+ Add Patient"}</button>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold">All Patients ({filtered.length})</h3>
          <table className="w-full mt-4"><thead><tr className="text-left border-b"><th className="p-3">ID</th><th>Name</th><th>Age</th><th>Disease</th><th>Action</th></tr></thead>
          <tbody>{filtered.map(p=>(<tr key={p.id} className="border-b"><td className="p-3">{p.id}</td><td>{p.name}</td><td>{p.age}</td><td>{p.disease}</td><td className="flex gap-2 py-2"><button onClick={()=>{setEditId(p.id); setName(p.name); setAge(p.age); setDisease(p.disease);}} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button><button onClick={()=>setPatients(patients.filter(x=>x.id!==p.id))} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button></td></tr>))}</tbody></table>
        </div>
      </div>
    </div>
  );
}
export default Patients;
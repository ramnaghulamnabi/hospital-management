import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function Billing() {
  const [invoices, setInvoices] = useState([
    {id:101, patient:"Ahmed Ali", amount:5000, status:"Paid"},
    {id:102, patient:"Fatima Khan", amount:3000, status:"Unpaid"},
  ]);
  const [patient, setPatient] = useState(""); const [amount, setAmount] = useState("");
  const addInvoice = () => {
    if(!patient || !amount) return alert("Patient aur Amount likhen");
    setInvoices([...invoices, {id:100+invoices.length+1, patient, amount, status:"Unpaid"}]); setPatient(""); setAmount("");
  };
  return (
    <div className="flex"><Sidebar />
      <div className="ml-[230px] flex-1 p-5 bg-slate-100 min-h-screen">
        <Navbar title="Billing" />
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="font-bold mb-3">Create Invoice</h3>
          <input placeholder="Patient Name" value={patient} onChange={(e)=>setPatient(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <input placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full p-3 mb-2 border rounded-lg" />
          <button onClick={addInvoice} className="bg-sky-500 text-white px-5 py-2 rounded-lg">+ Create Invoice</button>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between"><h3 className="font-bold">Invoice List</h3><button onClick={()=>window.print()} className="bg-slate-800 text-white px-4 py-1 rounded">Print / PDF</button></div>
          <table className="w-full mt-4"><thead><tr className="text-left border-b"><th className="p-3">Invoice ID</th><th>Patient</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>{invoices.map(inv=>(<tr key={inv.id} className="border-b"><td className="p-3">#{inv.id}</td><td>{inv.patient}</td><td>Rs {inv.amount}</td><td>{inv.status}</td><td><button onClick={()=>setInvoices(invoices.map(x=>x.id===inv.id?{...x,status:"Paid"}:x))} className="bg-green-500 text-white px-3 py-1 rounded">Mark Paid</button></td></tr>))}</tbody></table>
        </div>
      </div>
    </div>
  );
}
export default Billing;
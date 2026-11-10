function Navbar({ title }) {
  return (
    <div className="bg-white p-4 rounded-xl flex justify-between items-center mb-5 shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>👨‍⚕️ Admin | Dr. Ahmed</div>
    </div>
  );
}

export default Navbar;

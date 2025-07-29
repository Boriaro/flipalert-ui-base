export default function Toolbar() {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-wrap items-center gap-4">
      <select className="border border-gray-300 rounded p-2">
        <option>Preset 1</option>
        <option>Preset 2</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}

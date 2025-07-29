import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import DataGrid from "./components/DataGrid";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="flex-1 px-8 py-4 space-y-6">
        <Toolbar />
        <DataGrid />
      </main>
    </div>
  );
}

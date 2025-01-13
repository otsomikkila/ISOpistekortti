import { SimpleCard } from "./components/Card";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center p-8">ISOpistekortti</h1>
      <p className="text-center">Jotain tekemistä teillekin ens vuodeksi :D</p>
      <ul>
        <li>
          <SimpleCard />
        </li>
        <li>
          <SimpleCard />
        </li>
        <li>
          <SimpleCard />
        </li>
      </ul>
    </div>
  );
}

export default App

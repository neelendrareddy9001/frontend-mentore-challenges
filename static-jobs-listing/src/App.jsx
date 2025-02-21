import ActiveState from "./component/ActiveState";
import JobList from "./component/JobList";

function App() {
  return (
    <div className="App">
      <div className="bg-header bg-darkCyan h-36 smm:w-[100%]"></div>
      <ActiveState />
      <JobList />
    </div>
  );
}

export default App;

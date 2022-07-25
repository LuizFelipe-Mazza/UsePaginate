import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsePaginate from "./Page/UsePaginate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <UsePaginate useBordersButtons={true} current={1} total={40} pageSize={1} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

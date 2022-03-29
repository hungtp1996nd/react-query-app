import './App.css';
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TraditionalRequest from "./components/TraditionalRequest";
import RQRequest from "./components/RQRequest";
import HomePage from "./components/HomePage";
import Header from './components/Header'
import SuperHeroDetail from "./components/SuperHeroDetail";
import RQParallel from "./components/RQParallel";
import DynamicAndMultiQuery from "./components/DynamicAndMultiQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="traditional" element={<TraditionalRequest />} />
          <Route path="rq" element={<RQRequest />} />
          <Route path="rq/:heroId" element={<SuperHeroDetail />} />
          <Route path="rq-parallel" element={<RQParallel />} />
          <Route path="rq-multi-dynamic" element={<DynamicAndMultiQuery heroIds={[1, 3]} />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
}

export default App;

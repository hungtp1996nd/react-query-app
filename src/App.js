import './App.css';
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TraditionalRequest from "./components/TraditionalRequest";
import RQRequest from "./components/RQRequest";
import HomePage from "./components/HomePage";
import Header from './components/Header'

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
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
}

export default App;

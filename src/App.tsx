import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import Home from "./pages/Home.tsx";

// Create a client
const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;

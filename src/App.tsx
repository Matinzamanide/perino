import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/layout/layout";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Layout>{router}</Layout>
    </>
  );
}

export default App;

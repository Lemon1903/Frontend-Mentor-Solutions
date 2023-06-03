import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/ui/Error";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex flex-1 flex-col space-y-12 px-4 py-8 md:px-16 md:py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<CountryDetailsPage />} />
          <Route
            path="*"
            element={
              <Error
                message="Page Not Found"
                cause="Sorry, the page you are looking for doesn't exist. The page might have been removed, had its name changed, or is currently unavailable."
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import { Show, UserButton, useAuth } from "@clerk/react";
import { Header, Navbar } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import { Link } from "react-router-dom";
import clerkLogo from "./assets/clerk-logo.png";
import { NavbarLinks } from "./components/navbar-links";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col items-center">
      <Header>
        <Link to="/">
          <h1>
            <img src={clerkLogo} alt="Clerk" height={30} width={103} />
          </h1>
        </Link>
        <Navbar>
          <NavbarLinks userId={userId!} />
        </Navbar>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </Header>
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in/*" element={<SignInPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

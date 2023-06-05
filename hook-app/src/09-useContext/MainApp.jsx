import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage'
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
        {/* Pusimos links porque asi no se refreshea la pagina cada vez que vamos */}
        <NavBar />
        <hr />

        <Routes>
            {/* El path de '/' va a apuntar al HomePage */}
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />

            {/* Esto quiere decir que cualquier cosa que escribas en el buscador te mandará a esta página */}
            <Route path="/*" element={ <Navigate to="about" />} />
        </Routes>
    </UserProvider>
  )
}

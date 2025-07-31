import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SessionProvider, useSession } from "./hooks/useSession";

import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SavedRecipes from "./components/SavedRecipes";
import About from "./components/About";
import Login from "./components/Login";

function ProtectedRoute({ children }) {
  const { session } = useSession();
  return session ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <SessionProvider>
      <Router>
        <div className="min-h-screen font-sans bg-amber-50 bg-opacity-20">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Generator />
                </>
              }
            />
            <Route path="/generator" element={<Generator />} />
            <Route
              path="/saved-recipes"
              element={
                <ProtectedRoute>
                  <SavedRecipes />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SessionProvider>
  );
}

export default App;

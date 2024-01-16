import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthLayout from "./pages/AuthLayout";
import RootLayout from "./pages/RootLayout";
import SignInForm from "./features/SignInForm";
import SignUpForm from "./features/SignUpForm";

const App = () => {
  return (
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />}/>
          </Route>


           {/*private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<div>HomePage</div>} />
          </Route>
        </Routes>
      </main>
  );
};

export default App;

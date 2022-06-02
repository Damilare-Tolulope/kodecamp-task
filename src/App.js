import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/stage13B/components/contexts/AuthContext";
import Home from "./components/stage13B/components/landing/Home";
import Login from "./components/stage13B/components/Login/Login";
import PrivateRoute from "./components/stage13B/components/PrivateRoute";
import Signup from "./components/stage13B/components/Signup/Signup";
import Courses from "./components/stage13B/components/user/Courses";
import Dashboard from "./components/stage13B/components/user/Dashboard";
import EachCourse from "./components/stage13B/components/user/EachCourse";
import Profile from "./components/stage13B/components/user/Profile";

const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <PrivateRoute>
                  <Courses />
                </PrivateRoute>
              }
            />
            <Route
              path="/eachcourse"
              element={
                <PrivateRoute>
                  <EachCourse />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/landing" element={<Home />} />
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;

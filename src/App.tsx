import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import "./index.css";
import BankSetting from "./pages/settings/BankSetting";
import LimitSetting from "./pages/settings/LimitSetting";
import FeeSetting from "./pages/settings/FeeSetting";
import Login from "./pages/login/Login";
// import LoginNasabahMonitor from "./pages/monitor/LoginNasabahMonitor";
import DataNasabahMonitor from "./pages/monitor/DataNasabahMonitor";
// import LoginAdminMonitor from "./pages/monitor/LoginAdminMonitor";
import DataAdminMonitor from "./pages/monitor/DataAdminMonitor";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/setting/bank" element={<BankSetting />} />
                <Route path="/setting/limit" element={<LimitSetting />} />
                <Route path="/setting/fee" element={<FeeSetting />} />
                {/* <Route
                    path="/list-login/nasabah"
                    element={<LoginNasabahMonitor />}
                /> */}
                <Route
                    path="/list-user/nasabah"
                    element={<DataNasabahMonitor />}
                />
                {/* <Route
                    path="/list-login/admin"
                    element={<LoginAdminMonitor />}
                /> */}
                <Route path="/list-user/admin" element={<DataAdminMonitor />} />
            </Routes>
        </Router>
    );
}

export default App;

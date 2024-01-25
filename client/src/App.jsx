import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./pages/bar/Bar";
import Form from "./pages/form/Form";
import Line from "./pages/line/Line";
import Pie from "./pages/pie/Pie";
import FAQ from "./pages/faq/FAQ";
import Geography from "./pages/geography/Geography";
import Calendar from "./pages/calendar/Calendar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <Router>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <Sidebar />
                        <main className="content">
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                <Route
                                    path="/invoices"
                                    element={<Invoices />}
                                />
                                <Route
                                    path="/contacts"
                                    element={<Contacts />}
                                />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/line" element={<Line />} />
                                <Route path="/form" element={<Form />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route
                                    path="/geography"
                                    element={<Geography />}
                                />
                                <Route
                                    path="/calendar"
                                    element={<Calendar />}
                                />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Router>
    );
}

export default App;

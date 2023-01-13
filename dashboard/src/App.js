import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import LeftSidebar from "./scenes/global/LeftSidebar";
import MediaQuery from '@mui/material/useMediaQuery'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const UseMediaQuery  = MediaQuery('(min-width:800px)')

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <LeftSidebar isSidebar={isSidebar}  MediaQuery={UseMediaQuery}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} MediaQuery={UseMediaQuery}/>
            </Routes>
          </main>
          <Sidebar isSidebar={isSidebar} MediaQuery={UseMediaQuery}/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./Components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./globalStyles";
import LoadingPage from "./SideComponents/LoadingPage";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("./Components/Main"));
const AboutPage = lazy(() => import("./Components/AboutPage"));
const ProjectsPage = lazy(() => import("./Components/ProjectsPage"));
const WorksPage = lazy(() => import("./Components/WorksPage"));
const Skills = lazy(() => import("./Components/Skills"));
const Music = lazy(() => import("./SideComponents/Music"));

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<LoadingPage />}>
          <Music />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/ProjectsPage" element={<ProjectsPage />} />
              <Route path="/WorksPage" element={<WorksPage />} />
              <Route path="/Skills" element={<Skills />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>

    </>
  )
}

export default App;


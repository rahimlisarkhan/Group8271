import { Suspense, lazy } from "react";
import { Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { ROUTER } from "./constant/router.js";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notfound"));
const Articles = lazy(() => import("./pages/articles"));
const ArticleDetail = lazy(() => import("./pages/articles/detail"));
const ArticleCreate = lazy(() => import("./pages/articles/create"));

function App() {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      }
    >
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.ABOUT} element={<About />} />
        {/* <Route path="/faq" element={<HomePage />} />

        <Route path="/favorites" element={<HomePage />} /> */}

        <Route path={ROUTER.ARTICLES} element={<Articles />} />
        <Route path={ROUTER.ARTICLE_CREATE} element={<ArticleCreate />} />
        <Route path={ROUTER.ARTICLES + "/:id"} element={<ArticleDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
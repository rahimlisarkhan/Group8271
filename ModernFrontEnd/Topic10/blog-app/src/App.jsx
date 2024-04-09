import { Suspense, lazy } from "react";
import { Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { ROUTER } from "./constant/router.js";
import FavPage from "./pages/favorites/index.jsx";
import SettingPage from "./pages/setting/index.jsx";
import Loading from "./components/Loading/index.jsx";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notfound"));
const Articles = lazy(() => import("./pages/articles"));
const ArticleDetail = lazy(() => import("./pages/articles/detail"));
const ArticleCreate = lazy(() => import("./pages/articles/create"));
const Faq = lazy(() => import("./pages/faq"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.ABOUT} element={<About />} />
        <Route path={ROUTER.FAQ} element={<Faq />} />

        <Route path={ROUTER.ARTICLES} element={<Articles />} />
        <Route path={ROUTER.FAV} element={<FavPage />} />
        <Route path={ROUTER.ARTICLE_CREATE} element={<ArticleCreate />} />
        <Route path={ROUTER.ARTICLES + "/:id"} element={<ArticleDetail />} />

        <Route path={ROUTER.SETTING} element={<SettingPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;

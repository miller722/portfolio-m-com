import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TabsContainer from "./components/Tabs/TabsContainer";
import { tabLists, socialNetworksList } from "./data/data-lists";
import './App.css';


const Offer = lazy(() => import("./components/Tabs/Offer"));
const MyContacts = lazy(() => import("./components/Tabs/MyContacts"));
const Portfolio = lazy(() => import("./components/Tabs/Portfolio"));
const Resume = lazy(() => import("./components/Tabs/Resume"));


function App() {

  const indicateComponent = (path: string) => {
    if (path === "offer") {
      return <Offer />;
    } else if (path === "contacts") {
      return <MyContacts />;
    } else if (path === "portfolio") {
      return <Portfolio />;
    } else if (path === "cv") {
      return <Resume />;
    }
  };
  return (
    <>
      <Router>
        <TabsContainer tabLists={tabLists} socialNetworksList={socialNetworksList}>
          <Routes>
            {tabLists.map((tabList) => (
              <Route
                key={tabList.tabKey}
                path={tabList.tabKey}
                element={
                  <Suspense fallback={<h2>🌀 Loading...</h2>}>
                    {indicateComponent(tabList.tabKey)}
                  </Suspense>
                }
              />
            ))}

          </Routes>
        </TabsContainer>
      </Router>
    </>
  )
}

export default App
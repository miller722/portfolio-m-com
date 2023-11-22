import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TabsContainer from "./components/Tabs/TabsContainer";
import { tabLists, socialNetworksList } from "./data/tab-lists";
import './App.css';


const Offer = lazy(() => import("./components/Tabs/Offer"));


function App() {
  // const indicateComponent = (path) => {
  //   if (path === "dummyTable") {
  //     return <DummyTable />;
  //   } else if (path === "dummyList") {
  //     return <DummyList />;
  //   } else if (path === "dummyChart") {
  //     return <DummyChart />;
  //   }
  // };
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
                    {<Offer />}
                  </Suspense>
                }
              />
            ))}
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </TabsContainer>
      </Router>
    </>
  )
}

export default App
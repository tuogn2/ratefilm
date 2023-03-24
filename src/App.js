import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import DefaulLayout from './Component/Layout/DefaulLayout';
import { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = DefaulLayout
            if (route.Layout) {
              Layout = route.Layout
            } else if (route.Layout === null) {
              Layout = Fragment
            }
           
            var Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page  />
              </Layout>
            } >
              
            </Route>
          })}
        </Routes>
        
      </div>
    {/* </BrowserRouter> */}
          
      </HashRouter>
  );
}

export default App;

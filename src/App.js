import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './learn/http/index.js'
import "./assets/style/index.scss";
import React, { Suspense } from "react";
const About =React.lazy(()=>import('./learn/About/About'));

const Contact =React.lazy(()=>import('./learn/Contact/Contact'));
const Test =React.lazy(()=>import('./learn/Test/Test'));
const Base =React.lazy(()=>import('./learn/Base/Base'));
const Admin =React.lazy(()=>import('./learn/layout/Admin/Admin'));
const UserPost =React.lazy(()=>import('./learn/UserPost/UserPost'));

const x = 1;
function App() {
  return (
    <Suspense fallback={'...'}>

    <div className="App">
      {/*  Inline Styles */}

      <header
        className={"App-header " + 5 === 5 ? " 1" : " 2"}
        style={{ color: "#099" }}
      >
        <BrowserRouter>
          <Routes>
            {(() => {
              if (x === 1) {
                return (
                  <>
                    <Route path="/Admin" element={<Admin />}>
                      <Route path="Home" element={<Test />} />
                      <Route path="Test" element={<Test />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="about" element={<About />} />
                      <Route path="UserPost" element={<UserPost />} />
                      
                      <Route path="" element={<Navigate replace to="Home" />} />
                    </Route>
                    <Route
                      path="/"
                      element={<Navigate replace to="/Admin" />}
                    />
                    <Route
                      path="*"
                      element={<Navigate replace to="/Admin" />}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <Route path="/Base" element={<Base />}>
                      <Route path="Home" element={<Test />} />
                      <Route path="Test" element={<Test />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="about" element={<About />} />
                      <Route path="" element={<Navigate replace to="Home" />} />
                    </Route>
                    <Route path="/" element={<Navigate replace to="/Base" />} />
                    <Route path="*" element={<Navigate replace to="/Base" />} />
                  </>
                );
              }
            })()}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </Suspense>

  );
}

export default App;

import React from "react";
import { Router, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import NewsContainer from "./components/News/NewsContainer";
import NewsPublisher from "./components/News/NewsPublisher";
import NewsFrontPageContainer from "./components/NewsFrontPageContainer";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<NewsFrontPageContainer/>}/>
          <Route path="/:publisher" element={<NewsPublisher />} />
        </Routes>
      </ErrorBoundary>
      </BrowserRouter>
    </div>
        
  );
}

export default App;

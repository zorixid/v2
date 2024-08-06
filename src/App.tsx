import React from "react";
import LoadingProvider from "app/components/providers/LoadingProvider";
import ScrollToTopProvider from "app/components/providers/ScrollToTopProvider";
import { ScrollProvider } from "app/components/providers/Scroll.provider";
import ToastrProvider from "app/components/providers/ToastrProvider";
import Home from "app/pages/home";

const App = () => {
  return (
    <React.StrictMode>
      <ScrollProvider>
        <LoadingProvider>
          <ToastrProvider>
            <ScrollToTopProvider>
              <Home />
            </ScrollToTopProvider>
          </ToastrProvider>
        </LoadingProvider>
      </ScrollProvider>
    </React.StrictMode>
  );
};

export default App;

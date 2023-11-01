import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div>
      {isMobile ? (
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      ) : (
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      )}
    </div>
  );
}

export default App;

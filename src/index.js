import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import ErrorPage from "./components/router/error-page";
import Contact from "./components/router/contact";
import Root from "./components/router/root";
import Posts from "./components/router/posts";
import { loaderPostData, SumOfData } from "./components/router/helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/reactpage",
        element: <App />,
      },
      {
        path: "/custompage/:contactId",
        element: <Posts />,
        errorElement: <ErrorPage />,
        loader: loaderPostData,
        action: SumOfData,
        children: [
          {
            path: "contact/:contactId",
            element: <Contact />,
          },
        ],
      },
      {
        path: "contact/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { MainLayout } from "../../MainLayout";
import { routes } from "../../config/routes";
import { StaffPage } from "../../pages/StaffPage/StaffPage";
import { DoctorsPage } from "../../pages/DoctorsPage/DoctorsPage";

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: routes.main, element: <MainPage /> },
        { path: routes.staff, element: <StaffPage /> },
        { path: routes.doctors, element: <DoctorsPage /> },
      ],
    },
  ]
);

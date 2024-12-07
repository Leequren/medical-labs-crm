import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { MainLayout } from "../../MainLayout";
import { routes } from "../../config/routes";
import { StaffPage } from "../../pages/StaffPage/StaffPage";
import { DoctorsPage } from "../../pages/DoctorsPage/DoctorsPage";
import { TechniquesPage } from "../../pages/TechniquesPage/TechniquesPage";
import { TypesWorkPage } from "../../pages/TypesWorkPage/TypesWorkPage";
import { CategoryTechniquesPage } from "../../pages/CategoryTechniquesPage/CategoryTechniquesPage";

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: routes.main, element: <MainPage /> },
        { path: routes.staff, element: <StaffPage /> },
        { path: routes.doctors, element: <DoctorsPage /> },
        { path: routes.techniques, element: <TechniquesPage /> },
        { path: routes.typesWork, element: <TypesWorkPage /> },
        { path: routes.categoryTechniques, element: <CategoryTechniquesPage /> },
      ],
    },
  ]
);

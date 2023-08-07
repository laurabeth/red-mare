import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

import {
  AdminDashboard,
  AdminLogin,
  Appraisals,
  Coaching,
  Home,
  NotFound,
  SalesAndLeasing,
  Training,
} from "../../features";
import { Layout } from "../../Layout";

const Elements = () => {
  return (
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/appraisals" element={<Appraisals />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/sales-and-leasing" element={<SalesAndLeasing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/admin" element={<AdminLogin />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Route>
  );
};

const router = createBrowserRouter(createRoutesFromElements(<Elements />));

export const RouterProvider = () => <ReactRouterProvider router={router} />;

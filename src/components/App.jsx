import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import { ProductDetails } from "../pages/ProductDetails";
import { Mission } from "../pages/Mission";
import { Team } from "../pages/Team";
import { Reviews } from "../pages/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

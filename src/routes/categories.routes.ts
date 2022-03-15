import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const categoriesRepository = new CategoriesRepository();
  return categoriesRepository.create(request, response);
});

export { categoriesRoutes };

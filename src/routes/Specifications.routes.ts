import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationServices } from "../modules/cars/services/CreateSpecificationServices";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationServices = new CreateSpecificationServices(
    specificationsRepository
  );

  createSpecificationServices.execute({ name, description });
  return response.status(201).send();
});

export { specificationRoutes };

import { Request, Response } from "express";

import { Category } from "../model/Category";

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create(request: Request, response: Response) {
    const { name, description } = request.body;

    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return response.json(category);
  }
}

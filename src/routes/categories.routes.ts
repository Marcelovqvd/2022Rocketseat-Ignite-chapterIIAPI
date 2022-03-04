import { request, response, Router } from 'express'
import { Category } from '../model/Category'

const categoriesRoutes = Router()

const categories: Category[] = []

categoriesRoutes.get("/", (request, response) => {
  return response.json({categories})
})

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body

  const category: Category = new Category()

  category.name = name
  category.description = description
  category.created_at = new Date()
  category.id

  categories.push(category)  
  console.log(categories)
  return response.status(201).json({msg: category})
})

export { categoriesRoutes }
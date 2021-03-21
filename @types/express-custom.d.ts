import { Router } from 'express'

export interface IWheatherRouter {
  routes(): void
  getRouter(): Router
}

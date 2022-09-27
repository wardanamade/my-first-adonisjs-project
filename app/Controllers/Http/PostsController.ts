import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return 'index'
  }

  public async show({}: HttpContextContract) {
    return 'show'
  }

  public async store({}: HttpContextContract) {
    return 'store'
  }

  public async update({}: HttpContextContract) {
    return 'update'
  }

  public async destroy({}: HttpContextContract) {
    return 'destroy'
  }
}

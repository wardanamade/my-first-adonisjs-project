import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return 'index'
  }

  public async show({}: HttpContextContract) {
    return 'show'
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, email, password } = request.all()

    const user = await User.create({ name, email, password })

    return response.created(user)
  }

  public async update({}: HttpContextContract) {
    return 'update'
  }

  public async destroy({}: HttpContextContract) {
    return 'destroy'
  }
}

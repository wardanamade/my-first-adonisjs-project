import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Post from 'App/Models/Post'

Factory.blueprint(User, (faker: { email: () => any }) => {
  return {
    email: faker.email(),
    password: 'secret',
  }
}

Factory.blueprint(Post, (faker: { sentence: () => any; paragraph: () => any }) => {
  return {
    title: faker.sentence(),
    body: faker.paragraph(),
  }
}

Factory.blueprint('App/Models/Comment', (faker) => {
  return {
    body: faker.paragraph(),
  }
}

Factory.blueprint('App/Models/Tag', (faker) => {
  return {
    name: faker.word(),
  }
}

Factory.blueprint('App/Models/PostTag', (faker) => {
  return {
    postId: faker.integer({ min: 1, max: 10 }),
    tagId: faker.integer({ min: 1, max: 10 }),
  }
}

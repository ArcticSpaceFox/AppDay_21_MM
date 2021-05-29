import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const questions = () => {
  return db.question.findMany()
}

export const question = ({ id }) => {
  return db.question.findUnique({
    where: { id },
  })
}

export const createQuestion = ({ input }) => {
  return db.question.create({
    data: input,
  })
}

export const updateQuestion = ({ id, input }) => {
  return db.question.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestion = ({ id }) => {
  return db.question.delete({
    where: { id },
  })
}

export const Question = {
  tags: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).tags(),
  author: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).author(),
  answers: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).answers(),
}

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const responses = () => {
  return db.response.findMany()
}

export const response = ({ id }) => {
  return db.response.findUnique({
    where: { id },
  })
}

export const createResponse = ({ input }) => {
  return db.response.create({
    data: input,
  })
}

export const updateResponse = ({ id, input }) => {
  return db.response.update({
    data: input,
    where: { id },
  })
}

export const deleteResponse = ({ id }) => {
  return db.response.delete({
    where: { id },
  })
}

export const Response = {
  question: (_obj, { root }) =>
    db.response.findUnique({ where: { id: root.id } }).question(),
  author: (_obj, { root }) =>
    db.response.findUnique({ where: { id: root.id } }).author(),
}

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const studiengruppes = () => {
  return db.studiengruppe.findMany()
}

export const studiengruppe = ({ id }) => {
  return db.studiengruppe.findUnique({
    where: { id },
  })
}

export const createStudiengruppe = ({ input }) => {
  return db.studiengruppe.create({
    data: input,
  })
}

export const updateStudiengruppe = ({ id, input }) => {
  return db.studiengruppe.update({
    data: input,
    where: { id },
  })
}

export const deleteStudiengruppe = ({ id }) => {
  return db.studiengruppe.delete({
    where: { id },
  })
}

export const Studiengruppe = {
  members: (_obj, { root }) =>
    db.studiengruppe.findUnique({ where: { id: root.id } }).members(),
  tags: (_obj, { root }) =>
    db.studiengruppe.findUnique({ where: { id: root.id } }).tags(),
}

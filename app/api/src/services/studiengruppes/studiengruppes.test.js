import {
  studiengruppes,
  studiengruppe,
  createStudiengruppe,
  updateStudiengruppe,
  deleteStudiengruppe,
} from './studiengruppes'

describe('studiengruppes', () => {
  scenario('returns all studiengruppes', async (scenario) => {
    const result = await studiengruppes()

    expect(result.length).toEqual(Object.keys(scenario.studiengruppe).length)
  })

  scenario('returns a single studiengruppe', async (scenario) => {
    const result = await studiengruppe({ id: scenario.studiengruppe.one.id })

    expect(result).toEqual(scenario.studiengruppe.one)
  })

  scenario('creates a studiengruppe', async (scenario) => {
    const result = await createStudiengruppe({
      input: { name: 'String9809820' },
    })

    expect(result.name).toEqual('String9809820')
  })

  scenario('updates a studiengruppe', async (scenario) => {
    const original = await studiengruppe({ id: scenario.studiengruppe.one.id })
    const result = await updateStudiengruppe({
      id: original.id,
      input: { name: 'String72029452' },
    })

    expect(result.name).toEqual('String72029452')
  })

  scenario('deletes a studiengruppe', async (scenario) => {
    const original = await deleteStudiengruppe({
      id: scenario.studiengruppe.one.id,
    })

    const result = await studiengruppe({ id: original.id })

    expect(result).toEqual(null)
  })
})

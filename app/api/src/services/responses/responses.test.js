import {
  responses,
  response,
  createResponse,
  updateResponse,
  deleteResponse,
} from './responses'

describe('responses', () => {
  scenario('returns all responses', async (scenario) => {
    const result = await responses()

    expect(result.length).toEqual(Object.keys(scenario.response).length)
  })

  scenario('returns a single response', async (scenario) => {
    const result = await response({ id: scenario.response.one.id })

    expect(result).toEqual(scenario.response.one)
  })

  scenario('creates a response', async (scenario) => {
    const result = await createResponse({
      input: { authorId: 'scenario.response.two.authorId', content: 'String' },
    })

    expect(result.authorId).toEqual('scenario.response.two.authorId')
    expect(result.content).toEqual('String')
  })

  scenario('updates a response', async (scenario) => {
    const original = await response({ id: scenario.response.one.id })
    const result = await updateResponse({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a response', async (scenario) => {
    const original = await deleteResponse({ id: scenario.response.one.id })
    const result = await response({ id: original.id })

    expect(result).toEqual(null)
  })
})

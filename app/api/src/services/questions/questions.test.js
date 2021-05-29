import {
  questions,
  question,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './questions'

describe('questions', () => {
  scenario('returns all questions', async (scenario) => {
    const result = await questions()

    expect(result.length).toEqual(Object.keys(scenario.question).length)
  })

  scenario('returns a single question', async (scenario) => {
    const result = await question({ id: scenario.question.one.id })

    expect(result).toEqual(scenario.question.one)
  })

  scenario('creates a question', async (scenario) => {
    const result = await createQuestion({
      input: {
        title: 'String',
        description: 'String',
        authorId: 'scenario.question.two.authorId',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.authorId).toEqual('scenario.question.two.authorId')
  })

  scenario('updates a question', async (scenario) => {
    const original = await question({ id: scenario.question.one.id })
    const result = await updateQuestion({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a question', async (scenario) => {
    const original = await deleteQuestion({ id: scenario.question.one.id })
    const result = await question({ id: original.id })

    expect(result).toEqual(null)
  })
})

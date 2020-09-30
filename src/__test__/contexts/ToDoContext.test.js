import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'

jest.mock('axios')

describe("TodoContext", () => {
  it('Successfully fetch API data', async () => {
    const data = {
      data: [
        {id: 1, title: "hello", complete: false},
        {id: 2, title: "world", complete: false},
      ],
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
  })
})

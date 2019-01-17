import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

///////////////////////////////////////////
/////// Shallow rendering

test('Should render correctly', () => {
    const renderer = new ReactShallowRenderer()

    renderer.render(<Header />)

    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

///////////////////////////////////////////
/////// Snapshot rendering
// Tracks changes in data from components


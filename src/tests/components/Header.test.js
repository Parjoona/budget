import React from 'react'
import { shallow } from 'enzyme'

// import ReactShallowRenderer from 'react-test-renderer/shallow'

import Header from '../../components/Header'

///////////////////////////////////////////
/////// Shallow rendering
// Takes a look at the component
/////// Snapshot rendering
// Tracks changes in data from components

test('Should render correctly', () => {
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    const wrapper = shallow(<Header/>)
    // expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper).toMatchSnapshot()
})

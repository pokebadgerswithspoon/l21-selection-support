import React from 'react'
import Div from '../components/Div'

// eslint-disable-next-line react/prop-types
const createDiv = (props) => ({ children }) => <Div {...props}>{children}</Div>

export default createDiv

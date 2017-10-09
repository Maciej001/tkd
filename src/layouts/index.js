import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="React Training - Workshop"
      meta={[
        { name: 'description', content: 'Run by The Brain Pro - Lukasz Gandecki, Codecamps - Maciej Nowakowski' },
        { name: 'keywords', content: 'React Training, Tech(K)now Day, October 2017, The Brain Pro, Lukasz Gandecki' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

import React from 'react'
import ExternalLink from './ExternalLink'

const JobRow = ({ title, location, team, link }) => {
  return (
    <div className='row job-row'>
      <div className='col-9'>
        <h5>{title}</h5>
        <div className='details'>{location} &nbsp; {team}</div>
      </div>
      <div className='col-3 text-right'>
        <ExternalLink to={link}>
          <div className='btn btn-primary'>APPLY</div>
        </ExternalLink>
      </div>
    </div>
  )
}

export default JobRow

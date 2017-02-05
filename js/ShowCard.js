import React from 'react'
const { string } = React.PropTypes
//shape = obj that is described

const ShowCard = React.createClass({
  propTypes: {
      poster: string,
      title: string,
      year: string,
      description: string
  },
  render() {
    const { poster, title, year, description } = this.props
    return(
      <div  className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <h3>{title}</h3>
        <h4>{year}</h4>
        <p>{description}</p>
      </div>
    )
  }
})

export default ShowCard

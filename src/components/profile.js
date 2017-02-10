import React from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from '../actions/forhumans_api'

class Profile extends React.Component {
  componentDidMount(){
    this.props.fetchProfiles()
  }

  render() {
    const profiles = this.props.profiles

    return (
      <div>
        <ul>
          { profiles.map((cocktail, i) => <li key={ i } >{ cocktail }</li>) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profiles: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfiles: function(){
      let action = fetchProfiles()
      dispatch( action )      
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Profile )

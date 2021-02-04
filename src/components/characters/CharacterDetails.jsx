import React, { Component } from 'react';

export default class DetailPage extends Component {
  state = {
    character: {}
  }

  fetchCharacter = async() => {
    // eslint-disable-next-line max-len
    const response = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${this.props.match.params.id}`);
    const res = await response.json();
    console.log(res);
    this.setState({ character: res });
  }

  componentDidMount = async() => {
    await this.fetchCharacter();
  }

  render() {
    return (
      <>
        <figure>
          <img src={this.state.character.photoUrl} />
          <figcaption>{this.state.character.name}</figcaption>
        </figure>
      </>
    );
  }
}

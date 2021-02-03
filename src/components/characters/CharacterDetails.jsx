import React, { Component } from 'react';

export default class DetailPage extends Component {
  state = {
    character: {}
  }

  fetchCharacter = async() => {
    // eslint-disable-next-line max-len
    const response = await fetch.get(`https://last-airbender-api.herokuapp.com/api/v1/characters/${this.props.match.params.id}`);
    console.log(response);
    await this.setState({ character: response });
  }

  componentDidMount = async() => {
    await this.fetchCharacter();
  }

  render() {
    return (
      <>
        <h1>hello</h1>
        <figure>
          <img src={this.state.character.photoUrl} />
          <figcaption>{this.state.character.name}</figcaption>
        </figure>
      </>
    );
  }
}

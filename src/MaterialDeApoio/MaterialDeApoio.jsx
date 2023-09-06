import React, { Component } from 'react';
import './MaterialDeApoio.css'

class MaterialApoio extends Component {
  constructor() {
    super();
    this.state = {
      exibirMateriais: false,
      exibirLinks: false,
      materiais: ['Material 1.pdf', 'Material 2.pdf', 'Material 3.pdf'],
      youtube: ['https://www.youtube.com/'],
      twitter: ['https://twitter.com/home?lang=pt'],
    };
  }

  toggleMateriais = () => {
    this.setState({ exibirMateriais: !this.state.exibirMateriais });
  };

  toggleLinks = () => {
    this.setState({ exibirLinks: !this.state.exibirLinks });
  };

  render() {
    return (
      <div>

        <button className='material-button' onClick={this.toggleMateriais}>Materiais de Apoio</button>

        {this.state.exibirMateriais && (
          <ul>
            {this.state.materiais.map((material, index) => (
              <li key={index}>
                <a href={material} download>
                  {material}
                </a>
              </li>
            ))}
          </ul>
        )}


        <button className='link-button' onClick={this.toggleLinks}>Links</button>

        {this.state.exibirLinks && (
          <ul>
            {this.state.youtube.map((youtube, index) => (
              <li key={index}>
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
            ))}

            {this.state.twitter.map((twitter, index) => (
              <li key={index}>
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  Twitter   
                </a>
              </li>
            ))}
          </ul>

        )}
      </div>
    );
  }
}

export default MaterialApoio;

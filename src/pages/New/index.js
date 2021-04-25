import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import {FiPower, FiGithub } from 'react-icons/fi'

import './style.css';
import { Link } from 'react-router-dom';


const images = [
  '//conteudo.imguol.com.br/c/entretenimento/1d/2019/11/20/street-fighter-v-1574281893732_v2_900x506.jpg',
  '//reviewbox.com.br/wp-content/uploads/2019/11/0-Jogos-PS4-Nymbursky-687811-scaled.jpg',
  '//cdn3.dualshockers.com/wp-content/uploads/2019/06/Call-of-Duty-Modern-Warfare-1.jpg',
  '//psu.com/app/uploads/2019/07/CallofDutyModernWarfare_7.png',
  '//image-cdn.essentiallysports.com/wp-content/uploads/20200403160813/call_of_duty_modern_warfare_multiplayer_beta.jpeg',
  '//gamespot1.cbsistatic.com/uploads/original/123/1239113/3644486-warzone.jpg',
  '//images.hdqwalls.com/download/watch-dogs-2-ps4-pro-po-2560x1080.jpg',
  '//img2.goodfon.com/wallpaper/nbig/b/e1/watch-dogs-2-ubisoft-game-4949.jpg'
];

 class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <>
      <p>
        Entre na galeria e viaje você também! :)
      </p>
      <div>
        <button className= "gl" type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Gallery
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

            <Link className="link" to="/login">
                        <FiPower size={18} color="#341783"/>
                    Sair
            </Link>
        
        <a className='git' href="https://github.com/emersomcarvalho">
            <FiGithub size={18} color="#341783"/> Meu GitHub </a>
            <br/>
            <br/>
           <p className='stack'>
        <strong>Stack's: Node.js + React.js + Autenticação + MongoDB Atlas </strong>
      </p>    
       
      </div>
      </>
    );
  }
}

export default New;
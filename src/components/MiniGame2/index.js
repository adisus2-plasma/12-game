import React, { Component } from 'react';
import GageBar from './GageBar'
import Monster_Test from './Monster_Test'
import MonsterTexture from './MonsterTexture'
import Player from './Player'
import styled from 'styled-components';

const liff = window.liff;

const MonsterMovement = styled.div`

`

const PlayerMoveMent = styled.div`
  top: 20vh;
  left: 5vw;
  position: fixed;
  animation: player 2s infinite linear;

@keyframes player {
    0%   {
        transform: translateY(0);
    }
    50%  {
        transform: translateY(20vw);
    }
    100% {
        transform: translateY(0);
    }
  }
`

export default class MiniGame2 extends Component {

  constructor() {
    super();
    this.state = {
      isLoad: false,
    }
    this.player = [];
    this.monsters = [];
  }

  componentDidMount() {
    // if(liff){
    //   liff
    //     .init({
    //       liffId: '1653691835-vZ4GNK7z'
    //   })
    //   .then(async () => {
    //     if(!liff.isLoggedIn()){
    //       console.log("not liff")
    //       //รอpathเกมน้อง
    //       // window.location.replace("/");
    //     } else {
    //         this.setState({
    //           isLoad:false
    //         })
    //     }
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    // }
    // this.intervalId = setInterval(this.createObject.bind(this), 1000);
  }

  render() {
    if (this.state.isLoad) {
      return <p>loading</p>
    } else {
      return (
        <div>
          <PlayerMoveMent>
            <Player />
          </PlayerMoveMent>
          <MonsterMovement>
            {/* <Monster_Test/> */}
            <MonsterTexture />
          </MonsterMovement>
          <GageBar />
          <h1>minigame 2 page</h1>
        </div>
      );
    }
  }
}
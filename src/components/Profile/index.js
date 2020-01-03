import React, { Component } from 'react';
import profileService from '../../services/profileService';
import Progressbar from './Progressbar';
import Character from './Character';
import styled from 'styled-components';
import SideNavbar from './SideNavbar';

const CenterComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const liff = window.liff;
export default class Profile extends Component {
  state = {
    user_id: "U0d2f062bb2921e6f1e48d70c7a030ab2",
    user_test_data: {},
    sample_id: 1,
    percentExp: 0,
    user_level: 0,
    user_str: 0,
    user_dex: 0,
    user_luk: 0
  };

  componentDidMount() {
    // this.getProfileData(this.state.sample_id);
    liff
      .init({
        liffId: '1653691835-vZ4GNK7z'
      })
      .then(async () => {
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.getProfileData(this.getProfile());
  }

  getProfile() {
    liff.getProfile().then(dataInfo => {
      return dataInfo.userId;
    });
  }

  async getProfileData(id) {
    let data = await profileService.getProfile(id);
    this.setState({
      user_id : data.id,
      user_test_data: data.data,
      percentExp: (data.exp * data.maxExp) / 100,
      user_level: data.level,
      user_str: data.str,
      user_dex: data.dex,
      user_luk: data.luk
    });
  }

  render() {
    return (
      <div className='container'>
        <SideNavbar />
        <CenterComponent>
          <Progressbar
            color='warning'
            percent={this.state.percentExp}
            level={this.state.user_level}
            status='Level'
          />
          {this.state.user_id} <br />
          
          user_id: {this.state.id} <br />
          team: {this.state.team} <br />
          energy: {this.state.energy} <br />
          max_energy: {this.state.maxEnergy} <br />
          <Character level={this.state.user_level} />{' '}
          <Progressbar
            color='warning'
            percent={this.state.user_str}
            level={this.state.user_str}
            status='str'
          />
          <Progressbar
            color='warning'
            percent={this.state.user_dex}
            level={this.state.user_dex}
            status='dex'
          />
          <Progressbar
            color='warning'
            percent={this.state.user_luk * 10}
            level={this.state.user_luk}
            status='luk'
          />
        </CenterComponent>{' '}
      </div>
    );
  }
}

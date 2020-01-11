import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import profileService from '../../services/profileService';

const StyledNavbar = styled(Navbar)`
    background-color : red;
`

export default class Menubar extends Component {
    state = {
        showModal: false,
    };

    handleClose = () => {
        //wait for minigame path
        this.setState({ showModal: false });
    }

    handleShow = () => {
        this.setState({ showModal: true });
    }

    async getMinigamePage(id){
            const {user_energy , user_max_energy , user_id , cooldown_time} = this.props.user_data
            console.log("cooldown"+cooldown_time)
            if(user_energy == user_max_energy){
                let date = new Date();
                date.setHours(date.getHours()+1);
                console.log("current date"+new Date())
                console.log("setCooldownFirstTime"+date)
                this.props.setCooldownTime(date);
            }
            this.setState({ showModal: false });
            await profileService.useEnergy(id);
            //ส่งเวลาuse energyไปด้วย (เวลาที่กดuseEnergy ครั้งแรกที่ energyยังเป็นอยู่ max==energy)
            //เวลาปจบ.-เวลาที่cooldownสำเร็จ สมมุติว่าตั้งcooldownไว้1ชม.แต่ผ่านไป2ชม. 
            //เอาชม.การcooldown ไปหารกับอิค่าที่-มาได้ เหลือเศษเท่าไร เอาไปเป็นเวลา นับถอยหลังเอาจน.เต็มไปเพิ่มenergy*จำนวน
            //เวลาปจบ.ไป+กับเศษเหลือ -> เวลาcooldown energyลูกถัดไป (เวลาใหม่ )
            
            this.props.newEnergy();
            console.log(this.props.user_data.user_energy)
            console.log(profileService.getProfile(id))
            //window.location.replace("http://localhost:3000/login");
    }

    getScoreBoardPage() {
        window.location.replace("")
    }

    getHistoryPage() {
        window.location.replace("")
    }

    render() {
        console.log(this.props.user_data)
        return (
            <div>
                <StyledNavbar fixed="bottom" className="justify-content-center">
                    <div className="d-flex">
                        <button className="btn btn-link" onClick={function () { console.log("click") }}>
                            <img
                                src="https://img.icons8.com/cute-clipart/64/000000/home.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </button>
                        <button className="btn btn-link" onClick={this.handleShow}>
                            <img
                                src="https://img.icons8.com/cute-clipart/64/000000/controller.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </button>
                        <button className="btn btn-link" onClick={this.getScoreBoardPage}>
                            <img
                                src="https://img.icons8.com/cute-clipart/64/000000/map.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </button>
                        <button className="btn btn-link" onClick={this.getHistoryPage}>
                            <img
                                src="https://img.icons8.com/color/48/000000/activity-history.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </button>
                    </div>
                </StyledNavbar>
                <Modal show={this.state.showModal} onHide={this.handleClose} centered>
                    <Modal.Body>Use 1 energy to play minigame</Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>this.getMinigamePage(this.props.user_id)}>
                            play
                        </button>
                        <button variant="primary" onClick={this.handleClose}>
                            cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}



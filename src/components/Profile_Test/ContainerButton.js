import React, { Component } from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    top: 90%;
    
`
export default class ContainerButton extends Component {

    state = {
        id: [ ]
    }

    componentDidMount() {
        this.setState({
            id: this.props.id
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                {
                this.state.id.map((data, i) => (
                    <Icon key={i} src={data.src} />
                    )
                    )
                }
                </Container>
            </React.Fragment>
        )
    }
}
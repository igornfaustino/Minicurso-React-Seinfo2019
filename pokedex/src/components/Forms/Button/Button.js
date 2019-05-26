import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class ButtonRounded extends Component {
    render() {
        return (
            <div>
                <Button style={{
                    borderRadius: "10px 30px 30px 10px"
                }} {...this.props} />
            </div>
        )
    }
}

export default ButtonRounded

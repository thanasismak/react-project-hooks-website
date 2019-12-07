import React, { Component } from 'react';
import { useTheme, useStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Icon, Avatar, Dialog, Box } from '@material-ui/core';

class OnHover extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        // this.onClose = this.onClose.bind(this);
        this.state = {
            open: true,
            selectedValue: 0,
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        const { theme } = this.props;
        const {selectedValue} = this.state;
                
        return (
            <div>
                <div
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    
                </div>
                {
                    this.state.isHovering &&
                    <div>
                        
                    </div>
                }
            </div>
        );
    }
}

export default OnHover;
import React, { PureComponent } from "react";
import propTypes from 'prop-types';
import { withStyles, css, withStylespropTypes } from "./withStyles";
import Spacing from './Spacing.jsx';
import Text from './Text';

class Toast extends PureComponet {
    render() {
        const{ message, styles, warning } = this.props;
        return (
            <div {...css(styles.overlay)}>
                <div {...css(styles.wrapper, warning && styles.warning)}>
                    <Spacing vertical={4}></Spacing>
                
                </div>
            </div>
        )
    }
}
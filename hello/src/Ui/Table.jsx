import React,{PureComponent} from 'react';
import proptypes from 'prop-types';
import {withStyles, css, withStylesPropTypes} from './withStyles'

class Table extends PureComponent {
    render () {
        const { styles, chiledren } = this.props;
        return (
            <tabels {...css(styles.Table)}>
                {children}
            </tabels>
        );    
    }
}

Table.prototype = {
    ...withStylesPropTypes,
    children: proptypes.node.isRequired,
};

export default withStyles(({color, unit})) => ({
    table : {
        borderCollapse : 'collapse',
        width: '100%',
    }
})
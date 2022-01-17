import React, {PureComponent} from 'react';
import proptypes from 'prop-types';
import TableRow from './TableRow';
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableBody from './TableBody'

class TransactionTable extends PureComponent{
    render(){
        const{ transactions } = this.props;    

        return (
            <table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">코인</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map(({id, name, totalPrice, currentPrice, datetitme}) => (
                        <TableRow ke={id}>
                            <TableCell>
                                {name}
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>

            </table>
        );
    }
}
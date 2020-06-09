import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class PaymentForm extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Informações do cartão
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardName" label="Nome do Titular do Cartão" fullWidth
                                   autoComplete="cc-name"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardNumber"
                            label="Numero do cartão"
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="expDate" label="Data de Validade" fullWidth autoComplete="cc-exp"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="3 numeros atrás do cartão"
                            fullWidth
                            autoComplete="cc-csc"
                        />
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}
export default PaymentForm
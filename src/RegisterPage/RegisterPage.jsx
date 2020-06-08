import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {Checkbox} from '@material-ui/core';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                cpf: '',
                senha: '',
                userName: '',
                rg: '',
                contact: ''
            },
            submitted: false,
            isChecked: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleChecked(e){
        if(e.target.checked){

            this.setState({isChecked: true})


        }
        else{
            this.setState({isChecked: false})

        }
    }



    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.isChecked + ' iniciando')
        this.setState({submitted: true});
        const {user,isChecked} = this.state;
        if (user.cpf && user.senha && user.userName && user.rg && user.contact) {
            this.props.register(user, isChecked);
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Cadastro</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.cpf ? ' has-error' : '')}>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" className="form-control" name="cpf" value={user.cpf}
                               onChange={this.handleChange}/>
                        {submitted && !user.cpf &&
                        <div className="help-block">Cpf é obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.senha ? ' has-error' : '')}>
                        <label htmlFor="senha">SENHA:</label>
                        <input type="password" className="form-control" name="senha" value={user.senha}
                               onChange={this.handleChange}/>
                        {submitted && !user.senha &&
                        <div className="help-block">Senha é obrigatoria</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                        <label htmlFor="userName">NOME:</label>
                        <input type="text" className="form-control" name="userName" value={user.userName}
                               onChange={this.handleChange}/>
                        {submitted && !user.userName &&
                        <div className="help-block">Nome é obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.rg ? ' has-error' : '')}>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" className="form-control" name="rg" value={user.rg}
                               onChange={this.handleChange}/>
                        {submitted && !user.rg &&
                        <div className="help-block">Rg e obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.contact ? ' has-error' : '')}>
                        <label htmlFor="contact">EMAIL:</label>
                        <input type="text" className="form-control" name="contact" value={user.contact}
                               onChange={this.handleChange}/>
                        {submitted && !user.contact &&
                        <div className="help-block">Email e obrigatorio</div>
                        }
                    </div>
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="usertype" onChange= {this.handleChecked} />
                            <span>Deseja criar Conta de Vendedor</span>
                        </label>
                    </li>


                    <div className="form-group">
                        <button className="btn btn-primary">Registrar</button>
                        {registering &&
                        <img
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        }
                        <Link to="/login" className="btn btn-link">Cancelar</Link>
                    </div>
                </form>
            </div>
    );
    }
    }

    function mapState(state) {
        const {registering} = state.registration;
        return {registering};
    }

    const actionCreators = {
        register: userActions.register
    }

    const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
    export {connectedRegisterPage as RegisterPage};
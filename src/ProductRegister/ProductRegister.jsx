import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {productAction} from '../_actions';
import {Checkbox} from '@material-ui/core';
import {getRole} from "../_helpers";

class ProductRegister extends React.Component {
    constructor(props) {
        super(props);
        let name = JSON.parse(getRole())
        console.log(name.name)
        this.state = {
            product: {
                title: '',
                desc: '',
                price: '',
                qtd: '',
                img: '',
                name: name.name
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {product} = this.state;
        this.setState({
            product: {
                ...product,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {product} = this.state;
        if (product.title && product.desc && product.price && product.qtd && product.img) {
            this.props.createProduct(product);
        }
        this.setState({
            product: {
                title: '',
                desc: '',
                price: '',
                qtd: '',
                img: ''
            },
            submitted: false,
        })
    }

    render() {
        const {registering} = this.props;
        const {product, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Cadastro de Produtos</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !product.title ? ' has-error' : '')}>
                        <label htmlFor="title">Nome do produto:</label>
                        <input type="text" className="form-control" name="title" value={product.title}
                               onChange={this.handleChange}/>
                        {submitted && !product.title &&
                        <div className="help-block">Nome do produto é obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !product.desc ? ' has-error' : '')}>
                        <label htmlFor="desc">Descrição:</label>
                        <input type="text" className="form-control" name="desc" value={product.desc}
                               onChange={this.handleChange}/>
                        {submitted && !product.desc &&
                        <div className="help-block">descrição é obrigatoria</div>
                        }
                          </div>
                    <div className={'form-group' + (submitted && !product.price ? ' has-error' : '')}>
                        <label htmlFor="price">Valor do produto:</label>
                        <input type="text" className="form-control" name="price" value={product.price}
                               onChange={this.handleChange}/>
                        {submitted && !product.price &&
                        <div className="help-block">Valor do produto é obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !product.qtd ? ' has-error' : '')}>
                        <label htmlFor="qtd">Quantidade:</label>
                        <input type="text" className="form-control" name="qtd" value={product.qtd}
                               onChange={this.handleChange}/>
                        {submitted && !product.qtd &&
                        <div className="help-block">Quantidade  é obrigatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !product.img ? ' has-error' : '')}>
                        <label htmlFor="img">Link da imagem do produto:</label>
                        <input type="text" className="form-control" name="img" value={product.img}
                               onChange={this.handleChange}/>
                        {submitted && !product.img &&
                        <div className="help-block">Link da iamgem do produto e obrigatorio</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Registrar</button>
                        {registering &&
                        <img
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        }
                        <Link to="/" className="btn btn-link">Cancelar</Link>
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
    createProduct: productAction.createProduct
}

const connectedProductRegister = connect(mapState, actionCreators)(ProductRegister);
export {connectedProductRegister as ProductRegister};
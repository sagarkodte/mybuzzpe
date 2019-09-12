import React, { Component } from 'react'
import axios from 'axios';
import serverUrl from '../config';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Router from 'next/router'
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            subCatename: [],
            subcatclick: false,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        this.categories()
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    categories = () => {
        axios.get(serverUrl.url + '/api/category/main').then(res => {
            var cata = res.data.data;
            ////console.log(cata)
            this.setState({ categories: cata });
            //console.log(this.state.categories)
        }).catch(error => {
            return error;
        });
    }

    subCategories = (item) => {
        //console.log(item)
        
        axios.post(serverUrl.url + '/api/category/children', {
            category: item.path,
        })
            .then((response) => {
                this.setState(prevState => ({
                    modal: !prevState.modal
                }));
                console.log(response.data.data);
                this.setState({ subCatename: response.data.data })
                console.log(this.state.subCatename);
            })
            .catch((error) => {
                //console.log(error);
            });
    }
    showQ = (path) => {
        //console.log(path);
        Router.push({
            pathname: '/category',
            search: '?path='+path,
            //state: { detail: path }
          });
        // axios.post(serverUrl.url + '/api/question/list', {
        //     category: path,
        // })
        //     .then((response) => {
                
        //         //console.log(response.data.data);
        //     })
        //     .catch((error) => {
        //         //console.log(error);
        //     });
        //alert(99);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {
                        this.state.categories.map((item, i) =>
                            <div onClick={() => this.subCategories(item)}  className="col-md-4 text-center" key={i}>
                                <img src={item.icon} />
                                <h6>{item.name}</h6>
                            </div>
                        )
                    }
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalBody>
                            <Catalist clk={this.showQ} data={this.state.subCatename} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default Categories

function Catalist(props) {
    console.log(props)
    const data = props.data;
    const clk = props.clk;
    if (data) {
        const listItems = data.map((singlecat, index) =>
            <li onClick={() => clk(singlecat.path)} key={index}>{singlecat.name}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    } else {
        return (
            <ul>hello</ul>
        );
    }
}

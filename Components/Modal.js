import React, { Component } from 'react'
import axios from 'axios';
import serverUrl from '../config';
import Router from 'next/router'
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: [],
            catData: {}
        };
        //this.setState({catData: this.props.subCateName});
    }

    showQ = (path) => {
        console.log(path);
        axios.post(serverUrl.url + '/api/question/list', {
            category: path,
          })
          .then( (response) => {
            Router.push('/category');
            console.log(response.data.data);
          })
          .catch( (error) => {
            console.log(error);
          });
        //alert(99);
    }

    
    render() {
        console.log(this.props.subCateName);
        // let sub = null
        // if(this.props.subCateName){
        //     sub = this.props.subCateName.map((index,i)=>{
        //         {index.name}
        //     })
        // }
        return (
            <React.Fragment>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <Catalist clk={this.showQ} data={this.props.subCateName}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Modal;


function Catalist(props) {
    const data = props.data;
    const clk = props.clk;
    console.log(props)
    if(data){
        const listItems = data.map((singlecat, index) =>
            <li onClick={()=> clk(singlecat.path)} key={index}>{singlecat.name}</li>
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
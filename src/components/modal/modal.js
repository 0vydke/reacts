import React from 'react';
import './modal.scss';
import link from '../../assets/img/icons/link.svg';


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            headerText: 'Connection Integration',
            img: '',
            bodyText: 'A place to manage all the bots, & other apps',
            bodyText2: 'Syncs data between apps & create powerful automated workflows',
            linkType: true
        }
    }

    setLinkType(value){
        this.setState({
            linkType: value
        });
    }
    openModal=()=>{
        this.setState({
            showModal: true
        })
    }
    closeModal=()=>{
        this.setState({
            showModal: false
        })
    }
    render(){
        return (
            <div className={("modal-holder " + (this.state.showModal ? 'show' : ''))}>
                <div className="modal">
                    <div className="header">
                        <img src={link} alt="" />
                        <h6>{ this.state.headerText }</h6>
                        <button className='close' onClick={this.closeModal}>x</button>
                    </div>
                
                    <div className="body">
                        <div className='button-holder'>
                            <button onClick={() => this.setLinkType(true)} className={(this.state.linkType ? 'enabled' : '')}>Quick Link</button>
                            <button onClick={() => this.setLinkType(false)} className={(!this.state.linkType ? 'enabled' : '')}>Manual Link</button>
                        </div>
                        <div className="graphic">

                        </div>
                        {this.state.linkType===true &&
                        <p>
                            { this.state.bodyText }
                        </p>
                        }
                        {this.state.linkType===false &&
                        <p>
                            { this.state.bodyText2 }
                        </p>
                        }
                    </div>
                    <div className="footer">
                        <button type='submit' className='submit'>Connect Integration</button>
                    </div>
                </div>
            </div>
        );
    }
}  
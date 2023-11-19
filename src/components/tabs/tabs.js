import React from 'react';
import './tabs.scss';

const info = [
    {
        header: "Forest",
        text: "Forest, complex ecological system and natural resource in which trees are the dominant life-form.",
        image: "forest.jpg",
    },
    {
        header: "Meadow",
        text: "A meadow is an open habitat or field, vegetated by grasses, herbs, and other non-woody plants.",
        image: "meadow.jpg",
    },
    {
        header: "Swamp",
        text: "A swamp is an area of land permanently saturated, or filled, with water. Many swamps are even covered by water.",
        image: "swamp.jpg",
    }
]
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0, // Default selected tab index
        };
    }

    handleTabClick = (index) => {
        this.setState({
            selectedIndex: index,
        });
    };
    render(){
        const { selectedIndex } = this.state;
        const selectedInfo = info[selectedIndex];
        return (
            <div className='tab-holder'>
                <div className='tab-header'>
                    <h3>About</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                </div>
                <div className='tab-content'>
                    <div className='image-content' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/tabs/`+selectedInfo.image+`)`}} alt={selectedInfo.header}></div>
                    <div className='side-content'>
                    <div className="tabs">
                            {info.map((tab, index) => (
                                <button className={index === selectedIndex ? 'active' : ''}
                                key={index} onClick={() => this.handleTabClick(index)}>
                                    {tab.header}
                                </button>
                            ))}
                        </div>
                        <div className="content">
                            <h3>{selectedInfo.header}</h3>
                            <p>{selectedInfo.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}  
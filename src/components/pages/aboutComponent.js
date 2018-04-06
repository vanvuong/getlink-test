import React from 'react';
import aboutUrl from '../../assets/images/about.png';
import './About.scss';

class AboutComponent extends React.Component {
    render() {
        return (
            <div className="about" style={{background: "url(" + aboutUrl + ") center center no-repeat"}}>
                <div className="info">
                    <h1 className="title1">BUILD YOUR</h1>
                    <h1 className="title2">DREAM TEAM</h1>
                    <p>Find Tech Talents & Candidates in Asia - Recruitment Platform for Digital Specialists</p>
                </div>
            </div>
        );
    }
}
export default AboutComponent;
import React from 'react';
import './Companies.scss';
import companyUrl from '../../assets/images/company.png';

class CompaniesComponent extends React.Component {
    render() {
        return (
            <div className="row companies">
                <div className="col-sm-6 company-img" style={{backgroundImage: "url(" + companyUrl + ")"}}></div>
                <div className="col-sm-6 company-info">
                    <h1 className="text1">FIND A</h1>
                    <h1 className="text2">MEANINGFUL JOB</h1>
                    <p>Connect your dots. Join a team with a bigger mission and make an impact that lasts.</p>
                </div>
            </div>
        );
    }
}
export default CompaniesComponent;
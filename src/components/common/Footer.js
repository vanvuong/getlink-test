import React from 'react';
import './Footer.scss';
import FooterItem from './FooterItem';

class Footer extends React.Component {
    render() {
        const {footerItems} = this.props;

        return (
            <div className="row footer">
                {
                    footerItems.map((item) => (
                        <FooterItem footerItem={item} key={item.id}/>
                    ))
                }

                <div className="footer-link col-sm-3">
                    <h5>Links</h5>
                    <a className="footer-icon-follow" href="https://www.facebook.com/GetLinksInc" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="footer-icon-follow" href="https://twitter.com/GetLinks_Co" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="footer-icon-follow" href="https://www.instagram.com/getlinks.co/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        );
    }
}
export default Footer;

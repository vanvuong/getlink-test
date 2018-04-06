import React from 'react';

class FooterItem extends React.Component {
    render() {
        const {footerItem} = this.props;

        return (
            <div className="footer-item col-sm-3">
                <h5>{footerItem.title}</h5>
                <p>{footerItem.text1}</p>
                <p>{footerItem.text2}</p>
                <p>{footerItem.text3}</p>
            </div>
        );
    }
}
export default FooterItem;

import React from 'react';
import './Content.scss';
import Card from './Card';

class Content extends React.Component {
    render() {
        const {items} = this.props;

        return (
            <div className="row content">
                {
                    items.map((item) => (
                        <Card item={item} key={item.id}/>
                    ))
                }
            </div>
        );
    }
}
export default Content;

import React from 'react';

class Card extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className="item col-sm-3">
                <div className="card">
                    <img className="card-img-top" src={item.imgUrl} alt={item.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;

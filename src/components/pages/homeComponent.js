import React from 'react';
import './homeComponent.scss';
import IntroArea from '../common/IntroArea';
import Content from '../common/Content';
import cardImg from '../../assets/images/card.jpg';

const items = [
    {
        id: 1,
        title: 'Card 1',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Rachel'
    },
    {
        id: 2,
        title: 'Card 2',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Ross Smith'
    },
    {
        id: 3,
        title: 'Card 3',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Yoey'
    },
    {
        id: 4,
        title: 'Card 4',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Chanler'
    },
    {
        id: 5,
        title: 'Card 5',
        text: 'CSome quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Angela'
    },{
        id: 6,
        title: 'Card 6',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Tony'
    },{
        id: 7,
        title: 'Card 7',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Jancie'
    },{
        id: 8,
        title: 'Card 8',
        text: 'Some quick example text to build on the card title.',
        imgUrl: cardImg,
        author: 'Monica Smith'
    }
];

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <IntroArea />
                <Content items={items} />
            </div>
        );
    }
}
export default HomeComponent;

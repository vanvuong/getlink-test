import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const footerItems = [
    {
        id: 1,
        title: 'Introduction',
        text1: 'The life is so hard.',
        text2: 'Dream of wonderful world.',
        text3: 'Never stop learning.'
    },
    {
        id: 2,
        title: 'About us',
        text1: 'The life is so hard.',
        text2: 'Dream of wonderful world.',
        text3: 'Never stop learning.'
    },
    {
        id: 3,
        title: 'Contact',
        text1: 'The life is so hard.',
        text2: 'Dream of wonderful world.',
        text3: 'Never stop learning.'
    },
];

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <section>
                    {this.props.children}
                </section>
                <Footer footerItems={footerItems} />
            </div>
        );
    }
}
export default App;

import React, { Component } from 'react';


class PageNotFound extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="notFound container">
                <h1 className="error">404 Error</h1>
                <h3 className="subError">The page you're looking for does not exist.</h3>
            </section>
        )
    }
}

export default PageNotFound
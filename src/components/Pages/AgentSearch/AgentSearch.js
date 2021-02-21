import React, { Component } from 'react'
import SearchForm from '../../SearchForm/SearchForm'
import SearchResults from '../../SearchResults/SearchResults'
import SearchSort from '../../SearchSort/SearchSort'

class AgentSearch extends Component {
    render() {
        return (
            <>
                <section className='container'>
                    <h1>Find Agents</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto dolor labore totam illum distinctio, fugit veniam impedit similique enim consequuntur ab facilis obcaecati deleniti! Odit asperiores obcaecati voluptatum facere fuga, dolor maiores earum delectus provident cum porro laboriosam, placeat excepturi nostrum harum ad eligendi voluptatibus! Vero id tempore tenetur?</p>
                    <hr />
                    <SearchSort />
                    <SearchForm />
                    <hr />
                </section>
                <section className="container">
                    <SearchResults />
                </section>
            </>
        )
    }
}

export default AgentSearch
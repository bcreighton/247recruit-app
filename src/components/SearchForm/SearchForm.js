import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import './SearchForm.css';

class SearchForm extends Component {
  static contextType = RecruitContext;

  state = {
    error: null,
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
        name,
        office,
    } = e.target;

    const search = {
      name: name.value,
      brokerage: office.value,
    }
    this.setState({error: null})
    this.context.agentSearch(search, this.context.searchSortOption)
  }

  handleReset = e => {
    e.preventDefault();
    this.context.resetForm(e.target.name, e.target.office);
  }

  render() {
    return (
      <section className="container searchForm">
        <form 
          id="searchForm"
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
        >
    
        <fieldset id='details'>
          <legend>Details</legend>

          <input 
            type="text" 
            id='name' 
            name='name' 
          />
          <label 
            htmlFor="name">
            Name
          </label>

          <input 
            type="text" 
            id='office' 
            name='office' 
          />
          <label 
            htmlFor="office">
            Brokerage
          </label>
        </fieldset>

          <div className="btnContainer">
              <button type='submit'>Search</button>
              <button type='reset'>Reset</button>
          </div>
        </form>
      </section>
    )
  }
}

export default SearchForm
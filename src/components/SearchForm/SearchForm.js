import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';

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
        // city,
        // state,
        // zip,
        // county,
        // volume_min,
        // volume_max,
        // transactions_min,
        // transactions_max,
        // experience_min,
        // experience_max
    } = e.target;

    const search = {
      name: name.value,
      brokerage: office.value,
      // city: city.value,
      // state: state.value,
      // zip: zip.value,
      // county: county.value,
      // volume_min: volume_min.value,
      // volume_max: volume_max.value,
      // transactions_min: transactions_min.value,
      // transactions_max: transactions_max.value,
      // experience_min: experience_min.value,
      // experience_max: experience_max.value,
    }
    this.setState({error: null})
    this.context.agentSearch(search, this.context.searchSortOption)
  }

  render() {
    return (
      <section className="container">
        <form 
          id="searchForm"
          onSubmit={this.handleSubmit}  
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
            Office
          </label>

          {/* <input 
            type="text" 
            id='city' 
            name='city' 
          />
          <label 
            htmlFor="city">
            City
          </label>

          <input 
            type="text" 
            id='state' 
            name='state' 
          />
          <label 
            htmlFor="state">
            State
          </label>

          <input 
            type="text" 
            id='zip' 
            name='zip' 
          />
          <label 
            htmlFor="zip">
            Zip
          </label>

          <input 
            type="text" 
            id='county' 
            name='county' 
          />
          <label 
            htmlFor="county">
            County
          </label> */}
        </fieldset>

         {/*  <fieldset id='volume'>
            <legend>Volume</legend>

            <input 
              type="number" 
              min='0' 
              max='50000' 
              id='volume_min' 
              name='volume_min' 
            />
            <label 
              htmlFor="volume_min">
              Min
            </label>

            <input 
              type="number" 
              min='500' 
              max='100000' 
              id='volume_max' 
              name='volume_max' 
            />
            <label 
              htmlFor="volume_max">
              Max
            </label>
          </fieldset>

          <fieldset id='transactions'>
            <legend>Transactions</legend>

            <input 
              type="number" 
              min='0' 
              max='50' 
              id='transactions_min' 
              name='transactions_min' 
            />
            <label 
              htmlFor="transactions_min">
              Min
            </label>

            <input 
              type="number" 
              min='5' 
              max='10000' 
              id='transactions_max' 
              name='transactions_max' 
            />
            <label 
              htmlFor="transactions_max">
              Max
            </label>
          </fieldset>

          <fieldset id='experience'>
            <legend>Experience</legend>

            <input 
              type="number" 
              min='0' 
              max='50' 
              id='experience_min' 
              name='experience_max' 
            />
            <label 
              htmlFor="experience_min">
              Min
            </label>

            <input 
              type="number" 
              min='5' 
              max='10000' 
              id='experience_max' 
              name='experience_max' 
            />
            <label 
              htmlFor="experience_max">
              Max
            </label>
          </fieldset> */}

          <button type='submit'>Search</button>
          <button type='reset'>Reset</button>

        </form>
      </section>
    )
  }
}

export default SearchForm
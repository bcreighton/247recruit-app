import React, { Component } from 'react'

class SearchForm extends Component {

  state = {
    
  }

  render() {
    return (
      <section className="container">
        <form action="" id="searchForm">
          <input type="text" id='first_name' name='search_first_name' />
          <label htmlFor="first_name">First Name</label>

          <input type="text" id='last_name' name='search_last_name' />
          <label htmlFor="last_name">Last Name</label>

          <input type="text" id='office' name='search_office' />
          <label htmlFor="office">Office</label>

          <input type="text" id='city' name='search_city' />
          <label htmlFor="city">City</label>

          <input type="text" id='state' name='search_state' />
          <label htmlFor="state">State</label>

          <input type="text" id='zip' name='search_zip' />
          <label htmlFor="zip">Zip</label>

          <input type="text" id='county' name='search_county' />
          <label htmlFor="county">County</label>

          <fieldset id='production'>
            <legend>Production</legend>

            <input type="number" min='0' max='50000' id='production_min' name='search_production_min' />
            <label htmlFor="production_min">Min</label>

            <input type="number" min='500' max='100000' id='production_max' name='search_production_max' />
            <label htmlFor="production_max">Max</label>
          </fieldset>

          <fieldset id='transactions'>
            <legend>Transactions</legend>

            <input type="number" min='0' max='50' id='transactions_min' name='search_transactions_min' />
            <label htmlFor="transactions_min">Min</label>

            <input type="number" min='5' max='10000' id='transactions_max' name='search_transactions_max' />
            <label htmlFor="transactions_max">Max</label>
          </fieldset>

          <fieldset id='experience'>
            <legend>Experience</legend>

            <input type="number" min='0' max='50' id='experience_min' name='search_experience_max' />
            <label htmlFor="experience_min">Min</label>

            <input type="number" min='5' max='10000' id='experience_max' name='search_experience_max' />
            <label htmlFor="experience_max">Max</label>
          </fieldset>

          <button type='submit'>Search</button>
          <button type='reset'>Reset</button>

        </form>
      </section>
    )
  }
}

export default SearchForm
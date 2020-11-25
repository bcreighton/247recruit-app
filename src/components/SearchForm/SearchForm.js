import React, { Component } from 'react'

class SearchForm extends Component {
  render() {
    return (
      <section className="container">
        <form action="" id="searchForm">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id='first_name' name='search_first_name' />

          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id='last_name' name='search_last_name' />

          <label htmlFor="office">Office:</label>
          <input type="text" id='office' name='search_office' />

          <label htmlFor="city">City:</label>
          <input type="text" id='city' name='search_city' />

          <label htmlFor="state">State:</label>
          <input type="text" id='state' name='search_state' />

          <label htmlFor="zip">Zip:</label>
          <input type="text" id='zip' name='search_zip' />

          <label htmlFor="county">County:</label>
          <input type="text" id='county' name='search_county' />

          <fieldset id='production'>
            <legend>Production</legend>

            <label htmlFor="production_min">Min:</label>
            <input type="number" min='0' max='50000' id='production_min' name='search_production_min' />

            <label htmlFor="production_max">Max:</label>
            <input type="number" min='500' max='100000' id='production_max' name='search_production_max' />
          </fieldset>

          <fieldset id='transactions'>
            <legend>Transactions</legend>

            <label htmlFor="transactions_min">Min:</label>
            <input type="number" min='0' max='50' id='transactions_min' name='search_transactions_min' />

            <label htmlFor="transactions_max">Max:</label>
            <input type="number" min='5' max='10000' id='transactions_max' name='search_transactions_max' />
          </fieldset>

          <fieldset id='experience'>
            <legend>Experience</legend>

            <label htmlFor="experience_min">Min:</label>
            <input type="number" min='0' max='50' id='experience_min' name='search_experience_max' />

            <label htmlFor="experience_max">Max:</label>
            <input type="number" min='5' max='10000' id='experience_max' name='search_experience_max' />
          </fieldset>

          <button type='reset'>Reset</button>
          <button type='submit'>Search</button>
        </form>
      </section>
    )
  }
}

export default SearchForm
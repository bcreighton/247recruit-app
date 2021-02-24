import React, { Component } from 'react';
import RecruitContext from '../../context/RecruitContext';
import './SearchSort.css';

class SearchSort extends Component {
  static contextType = RecruitContext;

  handleClick = e => {
    this.context.setSort(e.target.value);
  }

  render() {
    return (
      <section className="container">
        <fieldset id='sortOptions' className='sortOptions'>
              <legend>Sort by:</legend>

              <div className="sortOptions__option">
              <input type="radio" value="Ascending" id="sort_ascending" name="sort" checked={this.context.searchSortOption === 'Ascending'} onChange={this.handleClick} />
                <label htmlFor="sort_ascending">
                  Ascending
                </label>
              </div>
              <div className="sortOptions__option">
                <input type="radio" value="Descending" id="sort_descending" name="sort" checked={this.context.searchSortOption === 'Descending'} onChange={this.handleClick} />
                <label htmlFor="sort_descending">
                  Descending
                </label>
              </div>
              <div className="sortOptions__option">
                <input type="radio" value="Transactions" id="sort_transactions" name="sort" checked={this.context.searchSortOption === 'Transactions'} onChange={this.handleClick} />
                <label htmlFor="sort_transactions">
                  Transactions
                </label>
              </div>
              <div className="sortOptions__option">
                <input type="radio" value="Volume" id="sort_volume" name="sort" checked={this.context.searchSortOption === 'Volume'} onChange={this.handleClick} />
                <label htmlFor="sort_volume">
                  Volume
                </label>
              </div>
          </fieldset>
        </section>
    );
  }
}

export default SearchSort;
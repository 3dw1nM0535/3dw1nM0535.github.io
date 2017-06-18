import React from 'react';

class RecipeItem extends React.Component {
  render() {
    return(
      <div className='card spacing'>
        <h3 className="card-header">{this.props.item.menu}</h3>
        <div className='card-block'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">

            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RecipeItem;
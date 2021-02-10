import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import './list.scss';

const List = ({ data, titleKey }) => {
  return (
    <div className="list__container">
      {
        data.map((item) => {
          return (
            <ListItem
              key={item.created}
              itemInfo={item}
              itemTitle={item[titleKey]}
            />
          )
        })
      }

    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  titleKey: PropTypes.string.isRequired,
}


export default List;
import React, { useState, useEffect }   from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../store/allItems';

function Items() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.allItems);


  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
    <div>Items</div>
    {items ? items.map(item =>(
      <div key={item.id}>
      {item.name}
      </div>
  )) : <div>no items</div>
    }
    </div>)
}

export default Items

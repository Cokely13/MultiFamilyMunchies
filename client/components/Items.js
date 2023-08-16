// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchItems } from '../store/allItems';

// function Items() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.allItems);

//   useEffect(() => {
//     dispatch(fetchItems());
//   }, []);

//   const handleAddToList = (itemId) => {
//     // Implement the logic to add the item to the list here
//     console.log(`Adding item with ID ${itemId} to the list`);
//   };

//   return (
//     <div>
//       <div>Items</div>
//       {items ? (
//         items.map((item) => (
//           <div key={item.id}>
//             {item.name}
//             <button onClick={() => handleAddToList(item.id)}>Add Item to List</button>
//           </div>
//         ))
//       ) : (
//         <div>No items</div>
//       )}
//     </div>
//   );
// }

// export default Items;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../store/allItems';

function Items() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const [listName, setListName] = useState('');
  const [listCreated, setListCreated] = useState(false);

  const handleCreateList = () => {
    // Implement the logic to create the list with the entered name
    console.log(`Creating list with name: ${listName}`);
    setListCreated(true);
  };

  const renderListContent = () => {
    return (
      <div>
        {items ? (
          items.map((item) => (
            <div key={item.id}>
              {item.name}
              <button>Add Item to List</button>
            </div>
          ))
        ) : (
          <div>No items</div>
        )}
      </div>
    );
  };

  return (
    <div>
      {!listCreated ? (
        <div>
          <div>Enter List Name:</div>
          <input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
          <button onClick={handleCreateList}>Create List</button>
        </div>
      ) : (
        renderListContent()
      )}
    </div>
  );
}

export default Items;


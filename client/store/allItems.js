import Axios from "axios";

const SET_ITEMS ="SET_ITEMS"
const CREATE_ITEM = "CREATE_ITEM"
const DELETE_ITEM = "DELETE_ITEM"


export const setItems = (item) =>{
  return{
    type: SET_ITEMS,
    item
  }
};

const _createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item,
  };
};

const _deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item
  };
};

export const fetchItems = () => {
  return async (dispatch) => {
        const {data}= await Axios.get("/api/items");
        dispatch(setItems(data));
  };
};

export const createItem = (item) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/items", item);
    dispatch(_createItem(created));
    // history.push("/items");
  };
};

export const deleteItem = (id, history) => {
  return async (dispatch) => {
    const { data: item } = await Axios.delete(`/api/items/${id}`);
    dispatch(_deleteItem(item));
    history.push("/items");
  };
};


const initialState = [];
export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return action.item;
      case CREATE_ITEM:
        return [...state, action.item];
        case DELETE_ITEM:
      return state.filter((item) => item.id !== action.item.id)
      ;
      default:
        return state;
    }
  }

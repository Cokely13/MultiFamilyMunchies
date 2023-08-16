import Axios from "axios";

const SET_LISTS ="SET_LISTS"
const CREATE_LIST = "CREATE_LIST"
const DELETE_LIST = "DELETE_LIST"


export const setLists = (list) =>{
  return{
    type: SET_LISTS,
    list
  }
};

const _createList = (list) => {
  return {
    type: CREATE_LIST,
    list,
  };
};

const _deleteList = (list) => {
  return {
    type: DELETE_LIST,
    list
  };
};

export const fetchLists = () => {
  return async (dispatch) => {
        const {data}= await Axios.get("/api/lists");
        dispatch(setLists(data));
  };
};

export const createList = (list) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/lists", list);
    dispatch(_createList(created));
    // history.push("/lists");
  };
};

export const deleteList = (id, history) => {
  return async (dispatch) => {
    const { data: list } = await Axios.delete(`/api/lists/${id}`);
    dispatch(_deleteList(list));
    history.push("/lists");
  };
};


const initialState = [];
export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS:
      return action.list;
      case CREATE_LIST:
        return [...state, action.list];
        case DELETE_LIST:
      return state.filter((list) => list.id !== action.list.id)
      ;
      default:
        return state;
    }
  }

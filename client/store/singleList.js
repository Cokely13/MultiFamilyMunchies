import axios from "axios";

// Action Types
const SET_SINGLE_LIST = "SET_SINGLE_LIST";
const UPDATE_SINGLE_LIST = "UPDATE_SINGLE_LIST";
const TOKEN = "token";

// Action creators
export const _setSingleList= (listdata) => {
  return {
    type: SET_SINGLE_LIST,
    listdata,
  };
};

const _updateSingleList = (listdata) => {
  return {
    type: UPDATE_SINGLE_LIST,
    listdata,
  };
};

//Thunks
export const fetchList = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/lists/${id}`);
    dispatch(_setSingleList(data));
  };
};

export const updateSingleList = (list, history) => {
  return async (dispatch) => {
    try {
        await axios.put(`/api/lists/${list.id}`, list);
        const { data: listData } = await axios.get(`/api/lists/${list.id}`);
        dispatch(_updateSingleList(listData));
        history.push(`/lists/${list.id}`)
      }
     catch (error) {
      console.log("LIST", list)
    }
  };
};

// reducer
const initialState = [];
const singleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_LIST:
      return action.listdata;
    case UPDATE_SINGLE_LIST:
      return action.listdata;
    default:
      return state;
  }
};

export default singleListReducer;

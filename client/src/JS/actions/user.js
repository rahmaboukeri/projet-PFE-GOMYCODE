import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_ALL_USERS,
  GET_ONE_USER
} from "../actionTypes/user";

import axios from "axios";

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  console.log(history);
  try {
    const result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    history.push("/profile");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/Profile");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const options = {
      
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};


//Get All Users
export const getAllUsers = () => async (dispatch) =>{
  try {
      const result = await axios.get('/api/user/')
      dispatch({type : GET_ALL_USERS , payload: result.data})
  } catch (error) {
      console.log(error)
  }
}

//Update User
export const updateUser = ( id, newUser ) => async (dispatch) =>{
    try {
        await axios.put(`/api/user/update/${id}`, newUser)
        dispatch(currentUser())
    } catch (error) {
        console.log(error)
    }
}
export const getOneUser =(id)=> async(dispatch)=>
{
    dispatch({type: LOAD_USER})
    try {
        const res = await axios.get(`/api/user/${id}`)
        dispatch({type : GET_ONE_USER,payload : res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};

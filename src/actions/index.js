import axios from "axios";
import {
  FETCH_LAUNCHES_REQEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_ERROR,
} from "./../actionTypes";

export const fetchLaunchesAction = () => {
  return (dispatch) => {
    axios
      .get(`https://ll.thespacedevs.com/2.2.0/launch/?format=api`)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

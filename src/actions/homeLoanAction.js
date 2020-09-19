import axios from "axios";
import { homeLoanUrl } from "../constant";

export const SAVE = "SAVE";

function save(payload = null) {
  return {
    type: SAVE,
    payload
  };
}

export const fetchData = (pageNo) => {

  return async (dispatch, getState) => {

    const state = getState();

    if (state && state.params && state.params.page_count < pageNo)  return

    let {data} = await axios.get(`${homeLoanUrl}${pageNo}`);

    dispatch(save({...data}));
  };
};

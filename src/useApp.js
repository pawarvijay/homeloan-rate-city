import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/homeLoanAction";

export const useApp = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const next = () => dispatch(fetchData(data.params.page + 1));

  const prev = () => dispatch(fetchData(data.params.page - 1));

  const first = () => dispatch(fetchData(1));

  const last = () => dispatch(fetchData(data.meta.page_count));

  const jump = (page) => dispatch(fetchData(page));

  useEffect(() => {
    dispatch(fetchData(1));
  }, [dispatch]);

  return [data, first, prev, next, last, jump];
};

import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
export const useIcrashedDispatch = () => useDispatch<AppDispatch>();
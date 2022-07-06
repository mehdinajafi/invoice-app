import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStore, AppDispatch } from "./";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

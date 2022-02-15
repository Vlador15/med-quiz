import { useSelector } from "react-redux";

export function useStoreAuth() {
	return useSelector(state => state.auth.auth);
}

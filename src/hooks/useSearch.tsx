import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const useSearch = () => {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useSearch must be used inside SearchProvider");
    return ctx;
};
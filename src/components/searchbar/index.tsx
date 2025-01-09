import SearchIcon from "../../assets/search.svg";
import { useState } from "react";

function SearchBar() {
    const [value, setValue] = useState("");
    return (
        <>
            <div className="flex items-center justify-start gap-1 rounded-lg bg-grey-backdrop px-2 py-0.5">
                <img src={SearchIcon} className="h-4 w-4" />
                <input
                    type="text"
                    value={value}
                    className="w-full max-w-24 border-none bg-grey-backdrop text-grey outline-none placeholder:text-grey"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                />
                <div>
                    <p className="text-base text-grey">⌘/</p>
                </div>
            </div>
        </>
    );
}

export default SearchBar;

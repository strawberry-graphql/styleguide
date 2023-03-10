"use client";

import { useState } from "react";
import { Modal } from "../modal/modal";
import { SearchBox } from "../search-box/search-box";
import { SearchInput } from "./search-input";

export const SearchBoxTrigger = () => {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  return (
    <>
      <SearchInput
        placeholder="Search"
        onFocus={(e) => {
          e.preventDefault();
          e.target.blur();
          setSearchBoxOpen(true);
        }}
      />

      <Modal
        open={searchBoxOpen}
        onClose={() => setSearchBoxOpen(false)}
        naked
      >
        <SearchBox />
      </Modal>
    </>
  );
};

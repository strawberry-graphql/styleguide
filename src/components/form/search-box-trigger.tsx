"use client";

import { useEffect, useState } from "react";
import { Modal } from "../modal/modal";
import { SearchBox } from "../search-box/search-box";
import { SearchInput } from "./search-input";

export const SearchBoxTrigger = ({
  triggerOnly = false,
}: {
  triggerOnly?: boolean;
}) => {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const cmdAndKPressed =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (cmdAndKPressed) {
        event.preventDefault();
        setSearchBoxOpen((prev) => !prev);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      {triggerOnly ? null : (
        <SearchInput
          placeholder="Search"
          onClick={(e) => {
            e.preventDefault();

            setSearchBoxOpen(true);
          }}
        />
      )}

      <Modal open={searchBoxOpen} onClose={() => setSearchBoxOpen(false)} naked>
        <SearchBox />
      </Modal>
    </>
  );
};

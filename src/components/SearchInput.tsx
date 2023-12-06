import React from "react";

export default function SearchInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Search Subreddit"
        className="input input-bordered input-error max-w-xs w-[250px] sm:w-[300px]"
      />
    </>
  );
}

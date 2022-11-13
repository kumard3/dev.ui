import React from "react";

export default function CirlceImage() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-6/12 sm:w-4/12 px-4">
        <img
          src="https://images.unsplash.com/photo-1645491223603-218aa69dcec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80"
          alt="image"
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="mb-8">
        <div className="flex items-center">
          <span className="text-3xl font-semibold mr-4">{i + 1}.</span>
          <div className="flex items-center justify-between  w-2/3 p-5 ">
            <h6 className="text-2xl font-semibold mb-2">{t.title}</h6>
            <p className="text-base font-medium">{t.desc}</p>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold ml-auto"
          >
            Delete
          </button>
        </div>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black p-5 text-5xl text-white font-bold text-center">
        My To Do List
      </h1>
      <form onSubmit={submitHandler} className="p-4">
        <input
          type="text"
          className="w-full text-2xl border-zinc-800 border-4 mb-4 px-4 py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-2xl border-zinc-800 border-4 mb-4 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="w-full bg-black text-white px-4 py-3 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-4 bg-slate-200 flex-wrap">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;

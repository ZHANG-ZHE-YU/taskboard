'use client' // 宣告為客戶端元件
import Image from "next/image";
import {useState} from "react";
import TaskList from "../components/TaskList";

export default function Home() {
  // tasks: 任務列表, newTask: 新任務
  const [tasks,setTasks]=useState([]);
  const [newTask, setNewTask]=useState('');

  // addTask: 新增任務
  const addTask=()=> {
    const updatedTasks=[...tasks, newTask]; // 複製 tasks 並加入 newTask
    setTasks(updatedTasks); // 更新 tasks
    setNewTask(''); // 清空 newTask
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Task board</h1>
      <div className="flex gap-10 mb-20">
        <input
          className="border p-10 flex-5"
          placeholder="Enter a task"
          value={newTask} // 輸入框的值
          onChange={(e)=>setNewTask(e.target.value)} // 更新 newTask
        />
        <button
          className="bg-blue-500 text-white px-10"
          onClick={addTask} // 點擊新增任務
        >
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} /> {/* 顯示任務列表 */}
    </main>
  );
}
import React, { useState, useCallback } from "react";
import ChildrenComponent from "./ChildrenComponent";
import MemoComponent from "./MemoComponent";
function ParentComponent({ getData, children }) {
  console.log("render ParentComponent");
  const [single, setSingle] = useState([]);
  const handleGetSingleList = () => {
    getData("unknown")
      .then((res) => res.json())
      .then((res) => {
        const singleData = res.data;
        setSingle(singleData);
      });
  };
  return (
    <>
      <div>
        <h1>single list</h1>
        <p>list: {JSON.stringify(single)}</p>
        <button onClick={handleGetSingleList}>get single list</button>
        <div>about users: </div>
        {children}
      </div>
    </>
  );
}
function UserData({ getData }) {
  console.log("render UserData");
  const [users, setUsers] = useState([]);
  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((jsonRes) => {
        const data = jsonRes.data;
        setUsers(data);
      });
  };
  return (
    <>
      <h3>User</h3>
      <button onClick={handleClick}>get User data</button>
      <div>data: {JSON.stringify(users)} </div>
    </>
  );
}

export default function App() {
  console.log("Render App");
  const [appList, setAppList] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);
  const hanleAppClick = () => {
    setRenderCount(() => renderCount + 1);
    setAppList("App has been rerendered");
  };
  return (
    <>
      <h1>App rerender</h1>
      {appList !== "" && (
        <p>
          {appList} {renderCount} times
        </p>
      )}
      <button onClick={hanleAppClick}>click on app</button>
      <ParentComponent getData={getData}>
        <UserData getData={getData} />
        <ChildrenComponent getData={getData} />
      </ParentComponent>
      <MemoComponent />
    </>
  );
}

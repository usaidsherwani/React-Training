import React, { useState } from "react";
import usersData from "../MOCK_DATA.json";
import Data from "../index.json";
import scenarioData from "../scenario.json";
import Editor from "@monaco-editor/react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import Menu from "./Menu";
import useRightClickMenu from "./useRightClickMenu";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { FaRegCopy, FaList, FaEllipsisV, FaShareAlt } from "react-icons/fa";
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";
// import { Draggable } from "react-drag-reorder";
// import {Card} from 'react-native-shadow-cards';
const fs = require("fs");
const basePath = `./testing`;

function Sortable() {
  const { x, y, showMenu } = useRightClickMenu();
  const [data, setData] = useState(usersData);
  const [lp, setLp] = useState(Data);
  const [sd, setSd] = useState(scenarioData);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  const filing = () => {
    console.log(lp);
    // let paths = lp.learning_paths.Kubernetes.map((l)=> l.learning_path_id)
    // console.log(paths);
    // Object.keys(lp.learning_paths).map((key)=>{
    //     console.log(lp.learning_paths[key].map((l)=>{
    //         console.log(l.learning_path_id);
    //     }));
    // })
    let scenarios = scenarioData.scenarios;
    console.log(scenarios);
    scenarios.map((s) => {
      console.log(s.scenario_id);
    });
  };
  const handleClick = (e) => {
    return <Menu x={e.pageX} y={e.pageY} showMenu={true} />;
    // console.log("event", e);
    // if (e.type === "click") {
    //   console.log("Left click");
    // } else if (e.type === "contextmenu") {
    //   console.log("Right click");

    // }
  };
  const copyCoupon = (e, data) => {
    var coupon = data.copy;
    navigator.clipboard.writeText(coupon);
    alert(`Coupon code ${coupon} copied to your clipboard`);
  };

  const handleDelete = (e, data) => {
    var coupon = data.name;
    alert(`Coupon code ${coupon} deleted`);
  };

  const context = () => {
    return (
      <>
        <ContextMenu id="contextmenu">
          <MenuItem data={{ copy: "MI50" }} onClick={copyCoupon}>
            <FaRegCopy className="copy" />
            <span>Copy</span>
          </MenuItem>
          <MenuItem>
            <FaEllipsisV className="openwith" />
            <span>Open with</span>
          </MenuItem>
          <MenuItem>
            <FaList className="watchlist" />
            <span>Add to watchlist</span>
          </MenuItem>
          <MenuItem>
            <RiSendPlaneFill className="send" />
            <span>Send</span>
          </MenuItem>
          <MenuItem data={{ name: "M150" }} onClick={handleDelete}>
            <RiDeleteBin6Line className="delete" />
            <span>Delete</span>
          </MenuItem>
          <MenuItem>
            <FaShareAlt className="share" />
            <span>Share</span>
          </MenuItem>
        </ContextMenu>
        <ContextMenu id="contextmenu2">
          <MenuItem data={{ copy: "MI51" }} onClick={copyCoupon}>
            <FaRegCopy className="copy" />
            <span>Copy</span>
          </MenuItem>
          <MenuItem>
            <FaEllipsisV className="openwith" />
            <span>Open with</span>
          </MenuItem>
          <MenuItem>
            <FaList className="watchlist" />
            <span>Add to watchlist</span>
          </MenuItem>
          <MenuItem>
            <RiSendPlaneFill className="send" />
            <span>Send</span>
          </MenuItem>
          <MenuItem>
            <RiDeleteBin6Line className="delete" />
            <span>Delete</span>
          </MenuItem>
          <MenuItem>
            <FaShareAlt className="share" />
            <span>Share</span>
          </MenuItem>
        </ContextMenu>
      </>
    );
  };
  return (
    <>
      {/* <div>
            {filing()}
            <table>
                <thead>
                    <th onClick={() => sorting("first_name")}>Fisrt Name</th>
                    <th onClick={() => sorting("last_name")}>Last Name</th>
                    <th onClick={() => sorting("email")}>Email</th>
                    <th onClick={() => sorting("gender")}>Gender</th>
                </thead>

                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> */}
      {/* <Editor
                height='98vh'
                width='100%'
                defaultLanguage='markdown'
                defaultValue="hello"
            /> */}
      {/* <MarkdownEditor
                value="heloworld"
                onChange={(e)=>setOrder(e)}
            /> */}
      {/* <button onContextMenu={handleClick}>Click me</button> */}

      <>
      {/* <Card style={{padding: 10, margin: 10}}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card> */}
      


        {/* <div>
          <Draggable>
            {data.map((word, idx) => {
              console.log('index',idx)
              return (
                <div key={idx} className="flex-item">
                  {word.id}
                </div>
              );
            })}
          </Draggable>
        </div> */}

        {/* <button onContextMenu={handleClick}>Click me</button> */}
        {/* <Menu x={x} y={y} showMenu={showMenu} /> */}
        {/* <ContextMenuTrigger id="contextmenu">
          <div className="coupon">MI50</div>
        </ContextMenuTrigger>
        <ContextMenuTrigger id="contextmenu2">
          <div className="coupon1">MI51</div>
        </ContextMenuTrigger>

        {context()} */}
      </>
    </>
  );
}

export default Sortable;

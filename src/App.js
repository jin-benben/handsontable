import React, { Component, useRef, useState } from "react";
import "./App.css";
import { HotColumn, HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import { Modal, Tabs } from "antd";
import { Button } from "antd";

const myData = [[1, 1, 1, 1, 1]];

const App = () =>{
  const [modalVisible,setModalVisible]=useState(false)
  const myTable1 = useRef();
  const myTable2 = useRef();
  const myTable3 = useRef();
  const onChange=()=>{
    myTable2.current?.hotInstance.render();
    myTable1.current?.hotInstance.render();
  }
  

   
    return (
      <div style={{ padding: "30px" }}>
        <Button
          onClick={() =>setModalVisible(true)}
        >
          TEST
        </Button>
        <Modal open={modalVisible} onCancel={
          () => setModalVisible(false)
        }>
          <HotTable
            ref={myTable1}
            data={myData}
            width='500'
            height='500'
            colHeaders
            rowHeaders
          />
        </Modal>
        <Tabs onChange={onChange} items={[
          {
            label: "test1",
            key: "test1",
            children: (
              <HotTable
                ref={myTable2}
                data={myData}
                width='500'
                height='500'
                colHeaders
                rowHeaders
              />

            )
          },
          {
            label: "test2",
            key: "test2",
            children: (
              <HotTable
                ref={myTable3}
                data={myData}
                width='500'
                height='500'
                colHeaders
                rowHeaders
              />
            )
          }
        ]} />
      </div>
    );
}

export default App;

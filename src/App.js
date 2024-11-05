import React, { useState } from "react";
import "./App.css";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import { Modal } from "antd";
import { Button } from "antd";
import { myData} from './data.ts'


const columns = [
  { data: "a", },
  { data: "b", },
  { data: "c" },
  { data: "d" },
  { data: "e" },
  { data: "f" },
  { data: "g" },
  { data: "h" },
  { data: "i" },
  { data: "j" },
  { data: "k" },
  { data: "l" },
  { data: "m" },
  { data: "n" },
  { data: "o" },
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const look = () => {
    setModalVisible(true)
  }
  return (
    <div style={{ padding: "30px" }}>
      <Button onClick={look}>open</Button>
      <HotTable
        data={myData}
        columns={columns}
        colHeaders
        rowHeaders
      />
      <Modal title="test" width={600} open={modalVisible} onClose={() => setModalVisible(false)}>
        <HotTable
          data={myData}
          columns={columns}
        
          height={300}
          colHeaders
          rowHeaders
        />
      </Modal>
    </div>
  );
}

export default App;

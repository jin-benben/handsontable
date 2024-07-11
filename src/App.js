import React, { Component } from "react";
import "./App.css";
import { HotColumn, HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import { Modal, Tabs } from "antd";
import { Button } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.myTable = React.createRef();
    this.state = {
      modalVisible: false
    };
  }
  render() {
    const myData = [[1, 1, 1, 1, 1]];
    return (
      <div style={{ padding: "30px" }}>
        <Button
          onClick={() => {
            this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }));
          }}
        >
          TEST
        </Button>
        <Modal open={this.state.modalVisible} onCancel={
          () => {
            this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }));
          }
        }>
          <HotTable
            data={myData}
            width='500'
            height='500'
            colHeaders
            rowHeaders
          />
        </Modal>
        <Tabs items={[
          {
            label: "test1",
            key: "test1",
            children: (
              <HotTable
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
}

export default App;

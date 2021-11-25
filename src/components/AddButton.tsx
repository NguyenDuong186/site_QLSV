import { Button, Modal } from "antd";
import { Component } from "react";
import AddTask from "./AddTask";

type Iprops = {
  addData: (student: object) => void;
};

class AddButton extends Component<Iprops> {
  state = {
    addModal: false,
  };
  showModal = () => {
    this.setState({ addModal: true });
  };

  handleOk = () => {
    this.setState({ addModal: false });
  };

  handleCancel = () => {
    this.setState({ addModal: false });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} icon="plus">
          Thêm
        </Button>
        <Modal
          title="Thêm sinh viên"
          visible={this.state.addModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          footer={null}
          destroyOnClose={true}
        >
          <AddTask addData={this.props.addData} handleOk={this.handleOk} />
        </Modal>
      </div>
    );
  }
}

export default AddButton;

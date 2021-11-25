import {
  Table,
  Divider,
  Modal,
  Button,
  Popconfirm,
  message,
  Tooltip,
} from "antd";

import { Component } from "react";
import EditTask from "./EditTask";

type Record = {
  key: string;
  id: string;
  fullname: string;
  birthday: string;
  Sex: string;
  studentID: number;
  class: string;
  subject: string;
};

type IProps = {
  data: object[];
  editData: (student: object) => void;
  deleteData: (id: string) => void;
};

class DataTable extends Component<IProps> {
  state = { editModal: false, student: {} };
  showModal = (student: object) => {
    this.setState({ student });
    this.setState({ editModal: true });
  };

  handleOk = () => {
    this.setState({ editModal: false });
  };

  handleCancel = () => {
    this.setState({ editModal: false });
  };

  confirm = (id: string) => {
    this.props.deleteData(id);
    message.success("Xóa thành công!");
  };

  render() {
    const columns = [
      {
        title: "Họ tên",
        dataIndex: "fullname",
        key: "fullname",
      },
      {
        title: "Ngày sinh",
        dataIndex: "birthday",
        key: "birthday",
      },
      {
        title: "Giới tính",
        dataIndex: "Sex",
        key: "Sex",
      },
      {
        title: "StudentID",
        dataIndex: "studentID",
        key: "studentID",
      },
      {
        title: "Lớp học",
        dataIndex: "class",
        key: "class",
      },
      {
        title: "Môn học",
        dataIndex: "subject",
        key: "subject",
      },
      {
        title: "Action",
        key: "action",
        render: (_tex: string, record: Record) => (
          <span>
            <Tooltip title="Chỉnh sửa">
              <Button
                type="primary"
                onClick={() => this.showModal(record)}
                icon="edit"
              ></Button>
              {this.state.student === record ? (
                <Modal
                  title="Chỉnh sửa thông tin"
                  visible={this.state.editModal}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  maskClosable={false}
                  footer={null}
                  destroyOnClose={true}
                >
                  <EditTask
                    student={this.state.student}
                    editData={this.props.editData}
                    handleOk={this.handleOk}
                  />
                </Modal>
              ) : (
                ""
              )}
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="Xóa">
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa?"
                onConfirm={() => this.confirm(record.id)}
                okText="Xóa"
                cancelText="Hủy bỏ"
                placement="bottom"
              >
                <Button type="danger" icon="delete"></Button>
              </Popconfirm>
            </Tooltip>
          </span>
        ),
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={this.props.data as Record[]}
        rowKey="id"
      />
    );
  }
}

export default DataTable;

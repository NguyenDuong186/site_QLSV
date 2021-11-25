import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { FormComponentProps } from "antd/es/form";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

interface UserFormProps extends FormComponentProps {
  addData: (student: object) => void;
  handleOk: () => void;
}

class UserForm extends React.Component<UserFormProps, any> {
  state = {
    valueRadio: "",
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, Values) => {
      if (!err) {
        const student = {
          id: uuidv4(),
          fullname: Values.fullname,
          birthday: Values.birthday._d.toLocaleDateString(),
          Sex: Values.Sex,
          studentID: Values.studentID,
          class: Values.class,
          subject: Values.subject,
        };

        this.props.addData(student);
        this.props.handleOk();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 4,
          offset: 20,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Họ Và tên" labelAlign="left">
          {getFieldDecorator("fullname", {
            rules: [
              {
                required: true,
                message: "vui lòng nhập tên của bạn",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Ngày sinh" labelAlign="left">
          {getFieldDecorator("birthday", {
            rules: [
              {
                required: true,
                message: "Vui lòng nhập ngày sinh của bạn",
              },
            ],
          })(
            <DatePicker
              format="YYYY-MM-DD"
              placeholder="Chọn ngày"
              style={{ width: "100%" }}
            />
          )}
        </Form.Item>
        <Form.Item label="Giới tính" labelAlign="left">
          {getFieldDecorator("Sex", {
            rules: [
              {
                required: true,
                message: "Vui lòng chọn giới tính của bạn",
              },
            ],
          })(
            <Radio.Group
              onChange={(e) => this.setState({ valueRadio: e.target.value })}
              value={this.state.valueRadio}
            >
              <Radio value={"Nam"}>Nam</Radio>
              <Radio value={"Nữ"}>Nữ</Radio>
              <Radio value={"Khác"}>Khác</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Mã số sinh viên" labelAlign="left">
          {getFieldDecorator("studentID", {
            rules: [
              {
                required: true,
                message: "Vui lòng nhập mã sinh viên của bạn",
              },
              {
                len: 8,
                message: "Hãy nhập đúng số của bạn",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Lớp" labelAlign="left">
          {getFieldDecorator("class", {
            rules: [
              {
                required: true,
                message: "Hãy chọn lớp của bạn",
              },
            ],
          })(
            <Select placeholder="select your class">
              <Option value="12A1">Lớp 12A1</Option>
              <Option value="12A2">Lớp 12A2</Option>
              <Option value="12A3">Lớp 12A3</Option>
              <Option value="11A1">Lớp 11A1</Option>
              <Option value="11A2">Lớp 11A2</Option>
              <Option value="11A3">Lớp 11A3</Option>
              <Option value="10A1">Lớp 10A1</Option>
              <Option value="10A2">Lớp 10A2</Option>
              <Option value="10A3">Lớp 10A3</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Môn học" labelAlign="left">
          {getFieldDecorator("subject", {
            rules: [
              {
                required: true,
                message: "Hãy chọn môn học của bạn",
              },
            ],
          })(
            <Select placeholder="select your Subject">
              <Option value="Toán">Toán</Option>
              <Option value="Ngoại Ngữ">Ngoại Ngữ</Option>
              <Option value="Công Nghệ">Công Nghệ</Option>
              <Option value="Vật Lý">Vật Lý</Option>
              <Option value="Hóa Học">Hóa Học</Option>
              <Option value="Lịch Sử">Lịch Sử</Option>
              <Option value="Sinh Học">Sinh Học</Option>
              <Option value="Địa Lý">Địa Lý</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block>
            Lưu
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const AddTask = Form.create<UserFormProps>({})(UserForm);

export default AddTask;

import DataTable from "./DataTable";
import { Layout } from "antd";
import AddButton from "./AddButton";
import { Component } from "react";

const { Header, Content, Footer } = Layout;

class AppLayout extends Component {
  state = {
    students: [],
    textSearch: "",
    filter: [],
  };
  componentDidMount() {
    const dataInit = [
      {
        id: "8ecc459e-8a96-4187-9d5a-60b2fa53e812",
        fullname: "Nguyễn A",
        birthday: "7/21/2006",
        Sex: "Khác",
        studentID: 11111111,
        class: "10A1",
        subject: "Vật Lý",
      },
      {
        id: "06c07dc7-6690-435d-bdc3-f7dea579e1aa",
        fullname: "Nguyễn B",
        birthday: "7/12/2005",
        Sex: "Nữ",
        studentID: 22222222,
        class: "11A2",
        subject: "Hóa Học",
      },
      {
        id: "4994cdfa-88dd-435e-b0ae-af51716d1ab4",
        fullname: "Nguyễn C",
        birthday: "7/12/2006",
        Sex: "Nam",
        studentID: 33333333,
        class: "10A3",
        subject: "Lịch Sử",
      },
      {
        id: "8f357aff-0be3-4b70-9fb2-bbdaa942fb48",
        fullname: "Nguyễn D",
        birthday: "7/13/2004",
        Sex: "Nữ",
        studentID: 44444444,
        class: "12A2",
        subject: "Ngữ Văn",
      },
      {
        id: "3d5c562c-1fe0-4b2c-b046-795e6357b217",
        fullname: "Nguyễn E",
        birthday: "7/5/2004",
        Sex: "Nam",
        studentID: 55555555,
        class: "12A3",
        subject: "Toán",
      },
    ];
    const data = localStorage.getItem("students");
    const students = data ? JSON.parse(data) : dataInit;
    this.setState({ students });
    console.log(dataInit);
  }

  addData = (student: object) => {
    const students: object[] = [...this.state.students];
    students.push(student);
    this.setState({ students });
    localStorage.setItem("students", JSON.stringify(students));
  };

  editData = (student: any) => {
    const students: object[] = [...this.state.students];
    const i = students.findIndex((obj: any) => obj.id === student.id);
    students.splice(i, 1, student);
    this.setState({ students });
    localStorage.setItem("students", JSON.stringify(students));
  };

  deleteData = (id: string) => {
    const oldData: object[] = [...this.state.students];
    const students = oldData.filter((student: any) => student.id !== id);
    this.setState({ students });
    localStorage.setItem("students", JSON.stringify(students));
  };

  render() {
    const { students, textSearch, filter } = this.state;
    return (
      <div>
        <Header className="header">
          <h1>Quản lý sinh viên</h1>
        </Header>
        <Content className="content">
          <div className="header-content">
            <AddButton addData={(student: object) => this.addData(student)} />
          </div>
          <DataTable
            data={textSearch ? filter : students}
            editData={this.editData}
            deleteData={this.deleteData}
          />
        </Content>
        <Footer className="footer"></Footer>
      </div>
    );
  }
}

export default AppLayout;

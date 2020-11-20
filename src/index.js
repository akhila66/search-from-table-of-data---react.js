import React from "react";
import ReactDOM from "react-dom";
import { Input } from "semantic-ui-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./bootstrap.min.css";

const originalData = [
  { firstName: "play", status: "Pending", visits: 9 },
  { firstName: "time", status: "Pending", visits: 6 },
  { firstName: "bake", status: "Submitted", visits: 3 },
  { firstName: "eat", status: "Approved", visits: 175 },
  { firstName: "sleep", status: "Cancelled", visits: 345 },
  { firstName: "aasaaa", status: "Cancelled", visits: 157 },
  { firstName: "pillow", status: "Approved", visits: 153 },
  { firstName: "paint", status: "Submitted", visits: 78 },
  { firstName: "plant", status: "Pending", visits: 435 },
  { firstName: "water", status: "Submitted", visits: 155 },
  { firstName: "protect", status: "Approved", visits: 17585 },
  { firstName: "hiro", status: "Approved", visits: 6 },
  { firstName: "jelebi", status: "Pending", visits: 4 },
  { firstName: "lala", status: "Pending", visits: 345 },
  { firstName: "cooper", status: "Approved", visits: 50 },
  { firstName: "mjika", status: "Approved", visits: 175 },
  { firstName: "papa", status: "Cancelled", visits: 123 },
  { firstName: "mika", status: "Cancelled", visits: 157 },
  { firstName: "dango", status: "Approved", visits: 9 },
  { firstName: "fvmsm,fnvl", status: "Submitted", visits: 155 },
  { firstName: "rahul", status: "Pending", visits: 242 },
  { firstName: "venkat", status: "Submitted", visits: 155 },
  { firstName: "shiro", status: "Approved", visits: 123 },
  { firstName: "kafka", status: "Approved", visits: 6 },
  { firstName: "node", status: "Pending", visits: 155 },
  { firstName: "baby", status: "Submitted", visits: 345 },
  { firstName: "raju", status: "Approved", visits: 175 },
  { firstName: "floor", status: "Cancelled", visits: 345 },
  { firstName: "table", status: "Cancelled", visits: 45 },
  { firstName: "neelam", status: "Approved", visits: 67 },
  { firstName: "face", status: "Submitted", visits: 1 },
  { firstName: "legs", status: "Pending", visits: 45 },
  { firstName: "react", status: "Submitted", visits: 155 },
  { firstName: "bujili", status: "Approved", visits: 17585 },
  { firstName: "akhila", status: "Approved", visits: 175 },
  { firstName: "akhilaanusha", status: "Pending", visits: 155 },
  { firstName: "love", status: "Pending", visits: 89 },
  { firstName: "efwefwef", status: "Approved", visits: 50 },
  { firstName: "cake", status: "Approved", visits: 175 },
  { firstName: "chocolate", status: "Cancelled", visits: 165 },
  { firstName: "afF", status: "Cancelled", visits: 47 },
  { firstName: "nice", status: "Approved", visits: 12 },
  { firstName: "fvmsm,fnvl", status: "Submitted", visits: 45 },
  { firstName: "tata tata", status: "Pending", visits: 67 },
  { firstName: "bye bye", status: "Submitted", visits: 23 },
  { firstName: "tata", status: "Approved", visits: 45 },
  { firstName: "suki", status: "Approved", visits: 90 }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: originalData,
      columns: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    let columns = [
      {
        Header: "First Name",
        accessor: "firstName",
        sortable: false,
        show: true,
        displayValue: " First Name"
      },
      {
        Header: "Status",
        accessor: "status",
        sortable: false,
        show: true,
        displayValue: "Status "
      },
      {
        Header: "Visits",
        accessor: "visits",
        sortable: false,
        show: true,
        displayValue: " Visits "
      }
    ];
    this.setState({ columns });
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = originalData.filter(value => {
      return (
        value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.visits
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.setState({ data: filteredData });
  };

  render() {
    let { data, columns, searchInput } = this.state;
    return (

        <div class="container" >
        <br></br>
        <Input 
          class="form-control col mr-2"
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
        <br></br>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="table table-striped table-responsive"
        />
      </div>
      

      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

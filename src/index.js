import React from "react";
import ReactDOM from "react-dom";
import { Input } from "semantic-ui-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./styles.css";

const originalData = [
  { firstName: "aaaaa", status: "Pending", visits: 155 },
  { firstName: "aabFaa", status: "Pending", visits: 155 },
  { firstName: "adaAAaaa", status: "Submitted", visits: 345 },
  { firstName: "aAaaaa", status: "Approved", visits: 175 },
  { firstName: "adaSaaa", status: "Cancelled", visits: 345 },
  { firstName: "aasaaa", status: "Cancelled", visits: 157 },
  { firstName: "aweaaaaaewea", status: "Approved", visits: 153 },
  { firstName: "aaaaaa", status: "Submitted", visits: 155 },
  { firstName: "aaaeweaa", status: "Pending", visits: 435 },
  { firstName: "aabFaa", status: "Submitted", visits: 155 },
  { firstName: "adaAAadsdweaa", status: "Approved", visits: 17585 },
  { firstName: "aAaaaa", status: "Approved", visits: 175 },
  { firstName: "aaaaa", status: "Pending", visits: 155 },
  { firstName: "aabFaa", status: "Pending", visits: 345 },
  { firstName: "efwefwef", status: "Approved", visits: 50 },
  { firstName: "aAaaaa", status: "Approved", visits: 175 },
  { firstName: "adaSaaa", status: "Cancelled", visits: 165 },
  { firstName: "afF", status: "Cancelled", visits: 157 },
  { firstName: "dfsdhfkjdf", status: "Approved", visits: 234 },
  { firstName: "fvmsm,fnvl", status: "Submitted", visits: 155 },
  { firstName: "aaaeweaa", status: "Pending", visits: 242 },
  { firstName: "aabFaa", status: "Submitted", visits: 155 },
  { firstName: "rjwlkgjw", status: "Approved", visits: 17585 },
  { firstName: "aAaaaa", status: "Approved", visits: 175 }
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

        <div class="row">
        
        <div class="column">
    
        <Input 
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />

        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
      </div>

      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

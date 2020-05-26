import React, { Component } from "react";
import JobList from "../job-list/job-listings.component";
import SearchBox from "../search-box/search-box.component";
import "./jobs.styles.css";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      searchJobs: ""
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => this.setState({ jobs: data }));
  }

  render() {
    const { jobs, searchJobs } = this.state;
    const filterJobs = jobs.filter(job =>
      job.company.toLowerCase().includes(searchJobs.toLowerCase())
    );
    return (
      <div>
        <div className="Input">
          <SearchBox
            className="SearchMode"
            type="searchJob"
            placeholder="Search Tech"
            handlechange={e =>
              this.setState({
                searchJobs: e.target.value
              })
            }
          />
        </div>
        <h1>Here is my Job Listings Page</h1>
        <JobList jobs={filterJobs} />
      </div>
    );
  }
}

export default Jobs;

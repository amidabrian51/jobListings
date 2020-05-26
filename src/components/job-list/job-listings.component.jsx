import React from "react";

import JobCard from "../job-card/job-card.component";

const JobListing = props => (
  <div>
    {props.jobs.map(({ id, ...otherJobProps }) => (
      <JobCard key={id} {...otherJobProps} />
    ))}
  </div>
);

export default JobListing;

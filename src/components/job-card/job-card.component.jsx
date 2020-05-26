import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./job-card.styles.css";

const JobCard = ({
  company,
  position,
  postedAt,
  contract,
  location,
  logo,
  featured,
  new: newJob,
  languages = [],
  id
}) => (
  <div className="container">
    <div className="card">
      <div className="companyName">
        <img src={logo} alt="logo" width="100" height="100" />
      </div>
      <div className="content">
        <div className="newFeatured">
          <h2>{company}</h2>
          {newJob ? <button className="myButton">New!</button> : null}
          {featured ? <button className="myDarkButton">Featured</button> : null}
        </div>
        <div className="jobNames">
          <h1>{position}</h1>
          <div className="techNames">
            {languages &&
              languages.map((language, id) => (
                <CustomButton key={id}> {language}</CustomButton>
              ))}
          </div>
        </div>
        <div className="details">
          <h3>{postedAt} &#183;</h3>
          <h3>{contract} &#183;</h3>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default JobCard;

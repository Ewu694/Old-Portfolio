import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import SearchIcon from "@material-ui/icons/Search";
import SecurityIcon from "@material-ui/icons/Security";

export const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor= "#EAD4C7">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(234, 212, 199)', color: '#C16630' }}
          contentArrowStyle={{ borderRight: "25px solid  rgb(234, 212, 199)"}}
          date="2017 - 2021"
          iconStyle={{ background: "#EAD4C7", color: "#721305" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            James Madison High School
          </h3> 
          <h4 className="vertical-timeline-element-subtitle">
            3787 Bedford Ave, Brooklyn, NY 11229 
          </h4>
          <p>
             Obtained High School Diploma
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(234, 212, 199)', color: '#C16630' }}
          contentArrowStyle={{ borderRight: "25px solid  rgb(234, 212, 199)"}}
          date="2021 - Present"
          iconStyle={{ background: "#EAD4C7", color: "#721305" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hunter College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            695 Park Avenue, New York, NY 10065
          </h4>

          <p className="vertical-timeline-element-title">
            Currently Pursuing a Bachelor's Degree in Computer Science
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(234, 212, 199)', color: '#C16630' }}
          contentArrowStyle={{ borderRight: "25px solid  rgb(234, 212, 199)"}}
          date="2023 - Present"
          iconStyle={{ background: "#EAD4C7", color: "#721305" }}
          icon={<SecurityIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Codepath Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cybersecurity
          </h4>
          <p>Currently on the path to earn a certificate in Cybersecurity</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(234, 212, 199)', color: '#C16630' }}
          contentArrowStyle={{ borderRight: "25px solid  rgb(234, 212, 199)"}}
          date="2023 - present"
          iconStyle={{ background: "#EAD4C7", color: "#721305" }}
          icon={<SearchIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Currently Looking For a Internship!
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NY, USA
          </h4>
          <p>
            I hope to work with you soon :)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}


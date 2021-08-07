import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Work at Amazon <span>2019-present</span></h2>
                        <p>I joined Amazon as a Full-stack Software Engineer in the CSOS team. My work has been majorly to build systems that support Amazon devices.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Graduate student at University of Guelph <span>2018-2019</span></h2>
                        <p>Designed and explored the multi-objective nature of Coevolutionary Systems. Data Preprocessing and Information prediction. Implemented a Genetic Algorithm for Job Scheduling with memory reserve.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Reach <span>2016-2017</span></h2>
                        <p>Lead front-end developer of Reach (a company that designed an application for saving money, preparing for events, and tracking expenses)(www.findreach.com ).
Designed a system that processed over 1 million user’s transaction data using PHP and MySQL to generate organized data for users.
Designed the first Android Documentation file for the company to help ensure easy handover.
</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div> <div className="timeline-label">
                        <h2>Bachelors of Science, Computer Science with Mathematics <span>2012-2016</span></h2>
                        <p>Minored in Mathematics and majored in CS. Took classes in Data Structures, OOP, Linear Algebra, Groups and Rings
</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

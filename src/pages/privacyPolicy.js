import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PrivacyPolicy = ({ router: { asPath } }) => {
  return (
    <Fragment>
      <div className="container">
        <Breadcrumbs isPage={true} pageName={asPath.replace(/-|\//gi, " ")} />

        <div className="container">
          <div className="row">
            <div className="col text-center my-5">
              <h2>Privacy Policy</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="pp-text">
                Our Privacy Policy was last updated and posted on October 15, 2018. It governs the privacy terms of our
                Website, located at https://www.iclick.ae, sub-domains, and any associated web-based and mobile
                applications (collectively, “Website”), as owned and operated by iClick Electronics. Any capitalised
                terms not defined in our Privacy Policy, have the meaning as specified in our Terms of Service.
              </p>
              <p className="pp-text">
                Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to
                understand how we collect, use, communicate and disclose and make use of personal information. We use
                your Personal Information only for providing and improving the Site. By using the Site, you agree to the
                collection and use of information in accordance with this policy. Unless otherwise defined in this
                Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
                accessible at https://www.iclick.ae. The following outlines our privacy policy.
              </p>
              <p className="pp-text">
                <ol className="ol-list">
                  <li>
                    Before or at the time of collecting personal information, we will identify the purposes for which
                    information is being collected.
                  </li>
                  <li>
                    We will collect and use of personal information solely with the objective of fulfilling those
                    purposes specified by us and for other compatible purposes, unless we obtain the consent of the
                    individual concerned or as required by law.
                  </li>
                  <li>
                    We will only retain personal information as long as necessary for the fulfilment of those purposes.
                  </li>

                  <li>
                    We will collect personal information by lawful and fair means and, where appropriate, with the
                    knowledge or consent of the individual concerned.
                  </li>
                  <li>
                    Personal data should be relevant to the purposes for which it is to be used, and, to the extent
                    necessary for those purposes, should be accurate, complete, and up-to-date.
                  </li>
                  <li>
                    We will protect personal information by reasonable security safeguards against loss or theft, as
                    well as unauthorised access, disclosure, copying, use or modification.
                  </li>
                </ol>
              </p>
              <p className="pp-text">
                We will make readily available to customers information about our policies and practices relating to the
                management of personal information.
              </p>
            </div>
          </div>

          <div className="row mt-5 mb-10">
            <div className="col-md-12">
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default PrivacyPolicy;

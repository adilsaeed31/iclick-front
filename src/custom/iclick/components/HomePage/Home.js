import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  homepage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
})

const HomePage = () => (
  <Typography variant="caption">
    <div className="homepage">
      <p>Home Page</p>
    </div>
  </Typography>
)

HomePage.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HomePage)

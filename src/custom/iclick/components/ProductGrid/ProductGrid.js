import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";
import PageLoading from "custom/iclick/components/PageLoading";
import PageStepper from "custom/iclick/components/PageStepper";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
import SortBySelector from "custom/iclick/components/SortBySelector";
import ProductGridEmptyMessage from "./ProductGridEmptyMessage";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  filters: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing.unit * 2
  }
});

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
 
});



@withStyles(styles, { name: "SkProductGrid" })
@track()
export default class ProductGrid extends Component {

  constructor()
  {
    super();
    this.state={
      filterName:[{name:'CATEGORIES', children:[{name:'Accessories (8)'}]},{name:'PRICE',children:[{name:'Accessories (8)'}]},{name:'SIZE',children:[{name:'Accessories (8)'}]},{name:'BRAND',children:[{name:'Accessories (8)'}]},{name:'COLOR',children:[{name:'Accessories (8)'}]},{name:'FEATURED',children:[{name:'Accessories (8)'}]}],
    }
  }
  static propTypes = {
    catalogItems: PropTypes.arrayOf(PropTypes.object),
    currencyCode: PropTypes.string.isRequired,
    initialSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    pageInfo: PropTypes.shape({
      startCursor: PropTypes.string,
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool,
      hasPreviousPage: PropTypes.bool,
      loadNextPage: PropTypes.func,
      loadPreviousPage: PropTypes.func
    }),
    pageSize: PropTypes.number.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  }

  renderFilters() {
    const { classes, pageSize, setPageSize, setSortBy, sortBy } = this.props;
    
    return (
      <Grid container spacing={8} className={classes.filters}>
        <Grid item>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
        </Grid>
        <Grid item>
          <SortBySelector sortBy={sortBy} onChange={setSortBy} />
        </Grid>
      </Grid>
    );
  }

  @trackProductClicked()
  onItemClick = (event, product) => {} // eslint-disable-line no-unused-vars

  renderMainArea() {
    const { catalogItems, initialSize, isLoadingCatalogItems, pageInfo } = this.props;
    const classes = useStyles();

    if (isLoadingCatalogItems) return <PageLoading />;

    const products = (catalogItems || []).map((item) => item.node.product);
    if (products.length === 0) return <ProductGridEmptyMessage />;
    return (
      
      <Fragment>
        <Grid container spacing={24}>
          <Grid item sm={3}>
              <Grid container spacing={4}>
                  <Grid item sm={12}>
                          {
                            this.state.filterName.map((x,i)=>{
                             return <SideFilterMenu key={i} category={x}/>
                            })
                          }              
                  </Grid>
              </Grid>
          </Grid>
          <Grid item sm={9}>
            <CatalogGrid
              initialSize={initialSize}
              onItemClick={this.onItemClick}
              products={products}
              placeholderImageURL="/static/images/placeholder.gif"
              {...this.props}
            />
          </Grid>
         
        </Grid>
        {pageInfo && <PageStepper pageInfo={pageInfo} />}
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderFilters()}
        {this.renderMainArea()}
      </Fragment>
    );
  }
}


const SideFilterMenu=(props)=>{
  return (
    <ExpansionPanel>
                    <ExpansionPanelSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{props.category.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {
                          props.category.children && props.category.children.map((x,i)=>{
                            return <Link key={i} component="button">{x.name}</Link>
                          })
                        }
                      
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
  )
}
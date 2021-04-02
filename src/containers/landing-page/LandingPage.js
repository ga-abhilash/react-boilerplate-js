import React, {PureComponent} from 'react';
import {GET} from "../../services/rest.service";

/**
 * PURE COMPONENT WILL RE-RENDER ONLY WHEN NEEDED
 * WILL INCREASE PERFORMANCE
 */
class ProductItem extends PureComponent {
  render() {
    const {index, product} = this.props;
    return (
        <div key={index} className="list-group">
          <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{product.productName}</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
              risus
              varius
              blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </div>
        </div>
    )
  }
}

/**
 * FUNCTIONAL COMPONENT WILL RE-RENDER ON EACH RE-RENDER
 * WILL DECREASE PERFORMANCE
 */
// const ProductItem = ({product, index}) => (
//     <div key={index} className="list-group">
//       <div className="list-group-item list-group-item-action flex-column align-items-start active">
//         <div className="d-flex w-100 justify-content-between">
//           <h5 className="mb-1">{product.productName}</h5>
//           <small>3 days ago</small>
//         </div>
//         <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
//           risus
//           varius
//           blandit.</p>
//         <small>Donec id elit non mi porta.</small>
//       </div>
//     </div>
// );

class LandingPage extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      count: 1,
    };
  }

  componentDidMount() {
    /**
     * USE THIS FOR CALLING APIs
     */
    GET('/products')
        .then(res => {
          this.setState({
            products: res,
          });
        }, err => {
          console.error(err);
        })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // this.props
    // prevState
    // setState
  }

  handleClick = () => {
    this.setState({
      count: 2
    }, () => {
      // here you will get new and updated state value
      console.info(this.state.count);
    });

    // here you will get old value as setState are async
    console.info(this.state.count);
  };


  render() {
    const {products, count} = this.state;

    return (
        <div className={'container'}>
          <h1>Count: {count}</h1>
          <div className="row">
            <div className="col-12">
              <button onClick={this.handleClick}>
                click
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {
                products.map((product, index) => <ProductItem key={product.id}
                                                              index={index}
                                                              product={product}/>)
              }
            </div>
          </div>

        </div>
    )
  }
}

export default LandingPage;

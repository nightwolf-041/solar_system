import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import classes from './products.module.css'
import SingleProduct from './SingleProduct'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import * as purchseActionCreators from '../../storeConfigure/actionCreators/purchaseActionCreator'
import anime from 'animejs'
import Modal from '../UI/modal/Modal'
import ModalBackdrop from '../UI/modalBackdrop/ModalBackdrop'

import menuIcon from '../../assets/images/icons/menu.png'
import shopcartIcon from '../../assets/images/icons/shop-cart3.png' 
import { setTimeout } from 'timers';


const Products = (props) => {

  let [cartCollapse, setCartCollapse] = React.useState(false)
  let [discounter, setDiscounter] = React.useState(false)
  let [modalShow, setModalShow] = React.useState(false)
  let [discountAlert, setdiscountAlert] = React.useState('empty')
  let discountInput = React.useRef()
  let discountAlertRef = React.useRef()

  let products = {...props.products}
  let activeProducts = []
  Object.keys(products).map(product => {
    if(products[product].count !== 0) {
      activeProducts.push(products[product])
      return activeProducts
    }
    return activeProducts
  })

  const cartCollapseHandler = () => {
    setCartCollapse(!cartCollapse)
  }

  let buttonDisabled = false
  if (activeProducts.length < 1) {
    buttonDisabled = activeProducts.length < 1
  }

 const discountHandler = (e) => {
   let discount = 'mamal'

  if(discountInput.current.value === discount){
    setdiscountAlert('success')
    return new Promise(() => {
      setDiscounter(true)
      props.onDiscount()
      discountInput.current.value = ''
      anime({
        targets: discountAlertRef.current,
        backgroundColor: '#4CAF50',
        left: '0',
      })
      setTimeout(() => {
        anime({
          targets: discountAlertRef.current,
          left: '-60%',
          backgroundColor: '#4CAF50'
        })
      }, 3000);
    }).then(() => {
      discount = null
    })

 } else if(discountInput.current.value === ''){
  setdiscountAlert('empty')
  anime({
    targets: discountAlertRef.current,
    backgroundColor: '#f44336',
    left: '0',
  })
  setTimeout(() => {
    anime({
      targets: discountAlertRef.current,
      left: '-60%',
      backgroundColor: '#f44336'
    })
  }, 3000);

 } else{
  setdiscountAlert('fail')
  anime({
    targets: discountAlertRef.current,
    backgroundColor: '#FF8F00',
    left: '0',
  })
  setTimeout(() => {
    anime({
      targets: discountAlertRef.current,
      left: '-60%',
      backgroundColor: '#FF8F00'
    })
  }, 3000);
  discountInput.current.value = ''
 }
}

React.useEffect(() => {
  if(activeProducts.length < 1) {
    setDiscounter(false)
  }
}, [props])

const redirectHandler = () => {
  return props.history.push('/login')
}

const shopContinueHandler = () => {
  setModalShow(true)
}

const modalHideHandler = () => {
  setModalShow(false)
}

  return (
    <div className={classes.productsMain}>

      {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}
      <BottomMenu />

      {modalShow ? <Modal clicked={modalHideHandler} totalPrice={
        discounter ?
        props.discountTotalPrices :
        props.totalPrice}/> : null}
        
      {modalShow ? <ModalBackdrop clicked={modalHideHandler}/> : null}

     <div className={classes.shopheader}>
      <img src={menuIcon} alt="menu" className={classes.menuIcon}
            onClick={props.onShowMenu} />

        <div className={classes.cartBox}>
          <img src={shopcartIcon} alt="shopCart" className={classes.shopCart} 
          onClick={cartCollapseHandler}/>
          <span className={classes.shopCartCounter}>
            {Object.keys(products).map(product => products[product].count).reduce((arr, tot) => arr + tot)}
          </span>
        </div>
     </div>

     <div className={
       cartCollapse ?
       classes.shopCartInfoBox :
       classes.shopCartInfoBoxCollapse}>
       <div className={classes.shopCartInfoItems}>
         <div className={classes.shopCartInfoHeader}>
           <span className={classes.shopInfoHeaderItemsMain}>
             نام محصول
           </span>
           <span className={classes.shopInfoHeaderItems}>
             تعداد
           </span>
           <span className={classes.shopInfoHeaderItems}>
             قیمت
           </span>
         </div>

         <div className={classes.shopCartInfoBody}>
            {
              activeProducts.length > 0 ?
            activeProducts.map((product, index) => (
              <div className={classes.shopCartInfoBodyItem} key={index}>

                <div className={classes.shopCartInfoBodyProduct}>
                  <img src={product.image} alt=""
                  className={classes.shopCartInfoBodyProductimage} />
                  <h6 className={classes.shopCartInfoBodyProductname}>
                    {product.name}
                  </h6>
                </div>
              
                <div className={classes.shopCartInfoBodyProductcountBox}>
                  <span className={classes.shopCartInfoBodyProductcount}>
                    {product.count}
                  </span>
                </div>

                <span className={classes.shopCartInfoBodyProductprice}>
                  {product.statePriceCounter + ' تومان'}
                </span>

                <button className={classes.shopCartInfoBodyButton}
                onClick={() => props.onDeleteProduct(product.id, product)}>&times;</button>

              </div>
            )) :
            <h4 className={classes.emptyCartMessage}>
              لطفا ابتدا محصولی را انتخاب کتید
            </h4>
            }
         </div>

         <div className={classes.shopCartInfoTotalPriceBox}>
           <span className={classes.shopCartInfoTotalPriceValue}>
             {
              discounter ?
              Math.max(props.discountTotalPrices, 0) + ' تومان' :
              Math.max(props.totalPrice, 0) + ' تومان'
             }
           </span>
           <span className={classes.shopCartInfoTotalPriceTitle}>
             قیمت کلی
           </span>
         </div>

         <div className={classes.shopCartInfoDiscountBox}>
           {activeProducts.length > 0 ?
           <>
            <h6 className={classes.shopCartInfoDiscountTtitle}>کد تخفیف</h6>
            <input type="text" className={classes.shopCartInfoDiscountInput}
            ref={discountInput}/>
            <button className={classes.shopCartInfoDiscountBotton}
              onClick={(e) => discountHandler(e)}>
                اعمال
            </button> 
            </>
            : null 
          } 

           {
             props.token !== null ?
             <button className={classes.shopCartInfoEndProduct}
              disabled={buttonDisabled}
              onClick={shopContinueHandler}>
                ادامه خرید
             </button> :
              
             <button className={classes.shopCartInfoEndProduct}
             onClick={redirectHandler}>
                ابتدا وارد شوید
             </button>
           }

         </div>
       </div>
     </div>

      <div className={classes.productsKeeper}>
        {
          Object.keys(products).map((product, index) => {
            return <SingleProduct
              cartImage = {products[product].image}
              cartTitle = {products[product].name}
              cartDesc = {products[product].desc}
              cartPrice = {products[product].uiPrice}
              key={index}
              incClicked={() => props.onIncrement(product)}
              decClicked={() => props.onDecrement(product)}
            />
          })
        } 
      </div>

      <div ref={discountAlertRef} className={classes.discountStateAlert}>
        {discountAlert === 'empty' ?
        'کد تخفیف را وارد کنید' : null}
        {discountAlert === 'fail' ?
        'کد تخفیف نامعتبر است' : null}
        {discountAlert === 'success' ?
        'تخفیف اعمال شد' : null}
      </div>
    </div>
  );
}

const mapState = state => {
  return {
    products: state.purchase.products,
    totalPrice: state.purchase.totalPrices,
    discountTotalPrices: state.purchase.discountTotalPrices,
    showMenu: state.uiReducer.showMenu,
    token: state.authReducer.token
  }
}

const mapDispatch = dispatch => {
  return {
      onShowMenu: () => dispatch(uiActionCreators.showMenu()),
      onHideMenu: () => dispatch(uiActionCreators.hideMenu()),
      onIncrement: (productName) => dispatch(purchseActionCreators.increment(productName)),
      onDecrement: (productName) => dispatch(purchseActionCreators.decrement(productName)),
      onDeleteProduct: (id, productName) => dispatch(purchseActionCreators.deleteProduct(id, productName)),
      onDiscount: (value) => dispatch(purchseActionCreators.discount(value))
  }
}

export default connect(mapState, mapDispatch)(withRouter(Products));
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import './carousel.css'

import rocketIcon from '../../../assets/images/icons/rocket-icon3-min.png'


class Carousel extends React.Component {
    state = {
        galleryItems: [1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
        galery: [...this.props.gallery].map((i) => (<img src={i} alt="" className="items" />))
    }

    responsive = {
        0: { items: 1,stagePadding:{paddingLeft: 30, paddingRight: 0 } },
        600: { items: 2 },
        900: {items: 3},
        1024: { items: 4 },
        1600: { items: 5 },
        1900: { items: 6 }
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    render() {
        return (
            <div className="sliderBox">
                <div className="sliderTitle">
                    <h2 className="text-white text-center mb-5">گالری</h2>
                    <img src={rocketIcon} alt="" className="rocketIcon" />
                </div>
                
                <AliceCarousel
                    items={this.state.galery}
                    responsive={this.responsive}
                    stagePadding= {{paddingLeft: 0, paddingRight: 0 }}
                    buttonsDisabled ={true}
                    autoPlayInterval={3000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    stopAutoPlayOnHover={false}
                    fadeOutAnimation={true}
                    mouseDragEnabled={false}
                    playButtonEnabled={false}
                    disableAutoPlayOnAction={false}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                />
            </div>

        )
    }
}

export default Carousel
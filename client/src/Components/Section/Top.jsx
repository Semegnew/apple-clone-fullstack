import React from 'react'
//image
import tv from '../../Resource/images/icons/apple-tv-logo.png'
import watch from '../../Resource/images/icons/watch-series5-logo.png'
import arcade from '../../Resource/images/icons/arcade.png'
import banker from '../../Resource/images/home/banker.png'

import Toppart from './Toppart'
import Middle from './Middle'

const Top = () => {
  return (
    <>
        <Toppart 
            bgcontainer='first-hightlight-wrapper'
            news='NEW'
            title='iPad Pro'
            description=''
            
            pricedesc=''
            
            firstlink='Learn more'
            secondlink='Order'
            caption1='iPad Pro available starting 3.25'
            caption2='Magic Keyboard coming in May'
            priceclassname=''
            linkwraper='links-wrapper'
            titleclassname='title-wraper bold black'
            descclassname='links-wrapper'
        />

        <Toppart 
            bgcontainer='second-hightlight-wrapper'
            news='NEW'
            title='MacBook Air'
            description='Twice the speed. Twice the storage.'
            pricedesc='From $999.'
            firstlink='Learn more'
            secondlink='Buy'
            caption1=''
            caption2=''  
            linkwraper='links-wrapper'
            titleclassname='title-wraper bold black'
            descclassname='description-wrapper black'
            priceclassname='price-wrapper grey'
        />
        <Toppart 
            bgcontainer='third-hightlight-wrapper'
            news=''
            title='iPhone 11 Pro'
            description='Pro cameras. Pro display. Pro performance.'
            pricedesc='From $24.95/mo. or $599 with trade‑in.'
            firstlink='Learn more'
            secondlink='Buy'
            caption1=''
            caption2=''  
            linkwraper='links-wrapper'
            titleclassname='title-wraper bold white'
            descclassname='description-wrapper white'
            priceclassname='price-wrapper white'
        />
        <Middle
            middleclassname='fourth-heghlight-wrapper'
            logo =''
            title='iPhone 11 '
            description='Just the right amount of everything.'
            pricedesciption='From $18.70/mo. or $499 with trade‑in.'
            linkwraper='links-wrapper'
            firstlink='Learn more'
            secondlink='Apply now'
            logobot=''
            caption=''
            playlink=''
            titleclassname='title-wraper'
            descriptionclassname='description-wraper white'

            title1='Get the latest CDC response to COVID-19.'
            logo1=''
            description1=''
            pricedesciption1=''
            linkwraper1='links-wrapper white'
            firstlink1='Watch the PSA'
            secondlink1=''
            titleclassname1='title-wraper white'
            logobot1=''
            caption1=''

        />
    
    <Middle
            middleclassname='fifth-heghlight-wrapper'
            logo ={tv}
            title=''
            description=''
            pricedesciption=''
            linkwraper='bankerlinks'
            firstlink=''
            secondlink=''
            logobot={banker}
            caption='Watch now on the Apple TV App'
            playlink='watch-more-wrapper'
            titleclassname='bankerlinks'
            descriptionclassname='description-wraper white bankerlinks'

            title1=''
            logo1={watch}
            description1='With the Always-On Retina display.
            You’ve never seen a watch like this.'
            pricedesciption1=''
            linkwraper1='links-wrapper'
            firstlink1='Learn more'
            secondlink1='Buy'
            titleclassname1='title-wraper'
            logobot1=''
            caption1=''

        />

        <Middle
            middleclassname='sixth-heghlight-wrapper'
            logo ={arcade}
            title=''    
            description='Agent 8 is a small hero on a big mission.'
            pricedesciption=''
            linkwraper='links-wrapper'
            firstlink='Play now2'
            secondlink='Learn about Apple Arcade'
            logobot=''
            caption=''
            playlink=''
            titleclassname='title-wraper white'
            descriptionclassname='description-wraper white'

            title1='Apple Card Monthly Installments'
            logo1=''
            description1='Pay for your next iPhone over time, '
            pricedesciption1='interest-free with Apple Card.'
           
            firstlink1='Learn more'
            secondlink1='Apply now' 
            linkwraper1='links-wrapper'
            titleclassname1='title-wraper'
            logobot1=''
            caption1=''
            descriptionclassname1='description-wraper'


        />
    
    </>
  )
}

export default Top
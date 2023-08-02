import React from 'react'

const Toppart = (props) => {
  return (
    <>
    <section class={props.bgcontainer}>
		<div class="container">

			<div class="new-alert">
				{props.news}
			</div>

			<div class={props.titleclassname}>
				{props.title}
			</div> 

			<div class={props.descclassname}>
				{props.description}
			</div>

			<div class={props.priceclassname}>
				{props.pricedesc}
			</div>

			<div className={props.linkwraper}>
                <ul>
                    <li><a href="">{props.firstlink}</a></li>
                    <li><a href="">{props.secondlink}</a></li>
                </ul>
            </div>
            <div class="ipod-caption row">
				<div class="col-sm-12 col-md-6 text-md-right">{props.caption1}</div>
				<div class="col-sm-12 col-md-6 text-md-left">{props.caption2}</div>
			</div>
		</div>
	</section>
    
    
    
    
    </>
  )
}

export default Toppart
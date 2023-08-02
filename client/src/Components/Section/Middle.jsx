import React from 'react'

const Middle = (props) => {
  return (
    <>
        <section class={props.middleclassname}>
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
                        	<div class="logo-wrapper">
								<img src={props.logo}/>
							</div>
							<div class={props.titleclassname}>
							{props.title}
						</div> 
						<div class={props.descriptionclassname}>
							{props.description}
						</div>
						<div class="price-wrapper">
							{props.pricedesciption}
						</div>

						<div className={props.linkwraper}>
                            <ul>
                                <li><a href="">{props.firstlink}</a></li>
                                <li><a href="">{props.secondlink}</a></li>
                            </ul>
                        </div>
						<div class="top-logo-wrapper">
							
						</div>

						<div class="tvshow-logo-wraper">
							<img src={props.logobot} />
						</div>

						<div class={props.playlink}>
							<a href="#">{props.caption}</a>
						</div>
						
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
								<img src={props.logo1}/>
							</div>
						</div>
                        <div class={props.titleclassname1}>
							{props.title1}
						</div> 
						<div class={props.descriptionclassname1}>
                             {props.description1}
						</div>
                        <div class="price-wrapper">
							{props.pricedesciption1}
						</div>
						<div className={props.linkwraper1}>
                            <ul>
                                <li><a href="">{props.firstlink1}</a></li>
                                <li><a href="">{props.secondlink1}</a></li>
                            </ul>
                        </div>
						<div class="tvshow-logo-wraper">
							<img src={props.logobot1} />
						</div>

					
					</div>
				</div>					
			</div>
		</div> 
	</section>
    
    
    </>
  )
}

export default Middle
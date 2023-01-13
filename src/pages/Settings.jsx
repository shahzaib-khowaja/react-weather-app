import React from 'react';
import Footer from '../components/footer';
import 
const Settings = () =>{


    return (
        <React.Fragment>
            <section className="container-fluid">

            <section className="app-header d-flex justify-content-between">
					<div className="toggle-btn ">
					<svg height={"30"} id="Layer_1" version="1.1" onClick={navigateHome}viewBox="0 0 512 512" width={"30"} xmlns="http://www.w3.org/2000/svg" ><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
						
					</div>
					<section className="city-locaton">
						<h5 className="fw-bold fs-5">Lagos, 9ja</h5>
					</section>
					<div className="toggle-btn ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={"24px"}
							height={"24px"}
							viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" />
						</svg>
					</div>
				</section>
                    change settings!

                    <Footer/>
            </section>
        </React.Fragment>
    )
}

export default Settings;
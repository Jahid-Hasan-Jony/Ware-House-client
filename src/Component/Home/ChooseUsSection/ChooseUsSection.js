import React from 'react';
import './ChooseUsSection.css'

const ChooseUsSection = () => {
    return (
        <div className='py-3'>
            <div className="team-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Why Choose Us</h2>
                        <p className="text-center">Here are some Specialities to help you for choosing us</p>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/cQF4hMd/medal.png" />
                                <h3 className="name">Quality Products</h3>
                                <p className="title">Quality</p>
                                <p className="description">Product quality helps companies earn customer loyalty, establish brand recognition and manage their costs. Customers often buy more from companies they know and trust, and businesses can reduce costs regarding product returns, defects and losses.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/6FZXNwD/fast-delivery.png" />
                                <h3 className="name">Fast Delivery</h3>
                                <p className="title">Service</p>
                                <p className="description">We understand how much important it is for you to deliver product to your customer safely. W eensure you that we take good care of your parcel to deliver without any harm.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/v1NxVLs/call-center.png" />
                                <h3 className="name">24/7 Service</h3>
                                <p className="title">Support</p>
                                <p className="description">We strive to keep our clients happy all the time and we are 24x7 available at your service to offer complete support no matter when you need it. We are prompt in our response because we understand the value of your time and money.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;
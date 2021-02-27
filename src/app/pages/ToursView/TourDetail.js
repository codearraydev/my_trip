import { useSelector, useDispatch} from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import React, { useEffect, useState,useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import DestDecs from '../../components/DestinationDetails/DestDecs';
import { getDestInformationApi } from '../../../shared/actions/TourDetailsActions';
import { makeStyles } from '@material-ui/core/styles';
import TourPackages from "../../components/TourDetails/TourPackages";


// import { Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, ModalProps, ModalDialogProps } from 'react-bootstrap';
import { Button, Modal } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
const TourDetail = props => {
    const classes = useStyles();
    const { id } = props.match.params
    const destInfo = useSelector(state => {
        console.log(state.TourInfo)
        return state.TourInfo;
    });    //getting user profile
    const dispatch = useDispatch();
    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(getDestInformationApi(id))
    }, [id])

    const bookTourNow = () => {
        if (destInfo.TourInfo.tour)
            props.history.push({
                pathname: "/tour-booking",
                state: { tour: destInfo.TourInfo.tour[0] }
            })
    }



    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
              </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [fisrtLoad, setFirstLoad] = useState(true)
    useLayoutEffect(() => {
        if (fisrtLoad) {
            window.scrollTo(0, 0)
            setFirstLoad(false)
        }
        setFirstLoad(false)

    });

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Tours</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Tours</li>
                    </ul>
                </div>
            </div>
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-md-9">
                            <div className="tab-container style1" id="travel-guide">
                                <div className="tab-content">
                                    <div className="tab-pane fade active in" id="travel-guide-info">
                                        <div className="image-container">
                                            {
                                                destInfo.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {
                                                typeof (destInfo.TourInfo.tour) !== 'undefined' ? (
                                                    destInfo.TourInfo.tour.map((item, index) => {
                                                        return <img style={{ width: 882, height: 320, objectFit: 'cover' }} src={"https://mytrip.pk/api/app/Controllers/uploads/" + item.tour_cover} alt={item.tour_location} />
                                                    })
                                                ) : null
                                            }
                                        </div>
                                        <div className="main-content">
                                            {
                                                destInfo.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {
                                                !destInfo.isGetting &&
                                                <>
                                                    {
                                                        typeof (destInfo.TourInfo.tour) !== 'undefined' ? (
                                                            destInfo.TourInfo.tour.map((item, index) => {
                                                                return <>
                                                                    <DestDecs destinationName={item.tour_location} descriptionDetails={item.tour_description} />
                                                                    {/* <div className="long-description">
                                                                        <h2>Tour Plan</h2>
                                                                        <ToursPlan destinationName={"Important Information"} descriptionDetails={"<ul id=\"proList\" style=\"list-style-type: disc\"><li>Abbottabad</li><li>Mansehra</li><li>Balakot</li><li>Kaghan</li><li>Naran</li></ul> "} />
                                                                    </div> */}
                                                                    <DestDecs destinationName={"Important Information"} descriptionDetails={item.tour_imp} />
                                                                </>
                                                            })
                                                        ) : null
                                                    }
                                                </>
                                            }
                                            {
                                                !destInfo.isGetting &&
                                                <div className="long-description">
                                                    {
                                                        typeof (destInfo.TourInfo.package) !== 'undefined' && destInfo.TourInfo.package.length ? (
                                                            <>
                                                                <h2>Available Packages</h2>
                                                                <div className="block">
                                                                    <div className="row image-box style1">
                                                                        {
                                                                            destInfo.TourInfo.package.map((item, index) => {
                                                                                return <TourPackages
                                                                                    packagePicture={"https://mytrip.pk/api/app/Controllers/uploads/" + item.package_image}
                                                                                    thumbPicture={"https://mytrip.pk/api/app/Controllers/uploads/" + item.package_thumb}  
                                                                                    packageName={item.package_name}
                                                                                    onPress={bookTourNow}
                                                                                />



                                                                            })
                                                                        }


                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : null
                                                    }

                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <DestSidebar /> */}
                        <div className="sidebar col-md-3">
                            {/* <div className="travelo-box">
                                <a onClick={bookTourNow} className="button yellow full-width uppercase btn-small">Book Tour Now</a>
                            </div> */}
                           <div className="travelo-box contact-box">
                                <h4>Need Travel Help?</h4>
                                <p>We would be more than happy to help you. Our customer support staff is at your service to help you.</p>
                                <address className="contact-details">
                                    <span className="contact-phone"><i className="soap-icon-phone" /> 03-111-483-222</span>
                                    <br />
                                    <a className="contact-email" href="#">info@mytrip.pk</a>
                                </address>
                            </div>
                            <div className="travelo-box book-with-us-box">
                                <h4>Why Book with us?</h4>
                                <ul>
                                    <li>
                                        <i className="soap-icon-hotel-1 circle" />
                                        <h5 className="title"><a href="#">Best Hotels</a></h5>
                                        <p>MyTrip.pk deal only with best hotels of any destination to avoid bad customer experience.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-savings circle" />
                                        <h5 className="title"><a href="#">Expert Drivers</a></h5>
                                        <p>Our drivers have years of experience and serve as guides.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-support circle" />
                                        <h5 className="title"><a href="#">Helpline</a></h5>
                                        <p>We have 24/7 helpline for customer support</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    );
}
export default TourDetail;

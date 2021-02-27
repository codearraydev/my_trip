import { useState, useEffect, useLayoutEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import renderHTML from "react-render-html";
import { fetchAboutUS } from "../../shared/actions/AboutActions";
const AboutUs = props => {

    const aboutUs = useSelector(state => state.About);    //getting user profile
    const dispatch = useDispatch();

    const [fisrtLoad, setFirstLoad] = useState(true)
    useLayoutEffect(() => {
        if (fisrtLoad) {
            window.scrollTo(0, 0)
            setFirstLoad(false)
        }
        setFirstLoad(false)

    });

    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(fetchAboutUS())
    }, [])
    return (
        <div id="page-wrapper">
            <SubHeader />
            <div class="page-title-container">
                <div class="container">
                    <div class="page-title pull-left">
                        <h2 class="entry-title">About Us</h2>
                    </div>
                    <ul class="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li class="active">About Us</li>
                    </ul>
                </div>
            </div>

            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="large-block image-box style6">
                            <article className="box">

                                <div style={{ padding: 10 }} className="col-sm-12 col-md-12">
                                    {
                                        aboutUs.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                    }
                                    {
                                        !aboutUs.isGetting && typeof (aboutUs.About.page) !== 'undefined' ? (
                                            aboutUs.About.page.map((item, index) => {
                                                return <>
                                                    <h4 className="box-title">Who We Are?</h4>
                                                    <p style={{ textAlign: 'justify' }}>   {renderHTML(item.page_description)}</p>
                                                </>

                                            })
                                        ) : null



                                    }

                                </div>
                            </article>


                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}

export default AboutUs;

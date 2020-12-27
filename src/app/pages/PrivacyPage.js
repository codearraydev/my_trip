import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import renderHTML from "react-render-html";
import { fetchPrivacyPage } from "../../shared/actions/PrivacyActions";
const PrivacyPage = props => {

    const privacyPage = useSelector(state => state.Privacy);    //getting user profile
    const dispatch = useDispatch();

    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(fetchPrivacyPage())
    }, [])
    return (
        <div id="page-wrapper">
            <SubHeader />
            <div class="page-title-container">
                <div class="container">
                    <div class="page-title pull-left">
                        <h2 class="entry-title">Privacy Policy</h2>
                    </div>
                    <ul class="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li class="active">Privacy Policy</li>
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
                                        privacyPage.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                    }
                                    {
                                        // !importantPage.isGetting && <p>Hello</p>
                                        !privacyPage.isGetting && typeof (privacyPage.Privacy.page) !== 'undefined' ? (
                                            privacyPage.Privacy.page.map((item, index) => {
                                                return <>

                                                    <div >   {renderHTML(item.page_description)}</div>
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

export default PrivacyPage;

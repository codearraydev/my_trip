import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import renderHTML from "react-render-html";
import { fetchFaqFromApi } from "../../shared/actions/FaqActions";
import Questions from '../components/Faq/Questions';
const Faqpage = props => {

    const faqList = useSelector(state => state.Faq);    //getting user profile
    const dispatch = useDispatch();

    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(fetchFaqFromApi())
    }, [])
    return (
        <div id="page-wrapper">
            <SubHeader />
            <div class="page-title-container">
                <div class="container">
                    <div class="page-title pull-left">
                        <h2 class="entry-title">Frequently Asked Questions</h2>
                    </div>
                    <ul class="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li class="active">FAQ's</li>
                    </ul>
                </div>
            </div>

            <section id="content">
                <div className="container">
                    <div id="main" class="faqs style1">
                        <div className="row">


                            <div id="main" className="faqs style1">
                                <div className="travelo-box question-list">
                                    <div className="toggle-container">
                                        {/* <Questions /> */}


                                        {
                                            faqList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                        }
                                        {

                                            typeof (faqList.Faq) !== 'undefined' && faqList.Faq.length ? (
                                                faqList.Faq.map((item, index) => {
                                                    // console.log(item.dest_cover_image);
                                                    return (

                                                        <Questions
                                                            linkId={'#' + item.faq_id}
                                                            id={item.faq_id}
                                                            questions={item.faq_q}
                                                            answer={item.faq_a}
                                                        />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}

export default Faqpage;

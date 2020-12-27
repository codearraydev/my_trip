import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import ArticleContent from "../../components/BlogDetails/ArticleContent";

import { fetchBlogsReadFromApi } from "../../../shared/actions/BlogReadActions";


const SideHome = props => {
    const { slug } = props.match.params
    const blogRead = useSelector(state => state.Post);    //getting user profile
    const dispatch = useDispatch();


    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(fetchBlogsReadFromApi(slug))
    }, [slug])

    return (
        <div id="page-wrapper">
            <SubHeader />

            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Blog Detail</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li className="active">Blog Detail</li>
                    </ul>
                </div>
            </div>



            <section id="content">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-sm-12 col-md-12">

                            <div className="post" style={{ backgroundColor: '#fff' }}>
                                {
                                    blogRead.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                }
                                {
                                    !blogRead.isGetting &&


                                        typeof (blogRead.Post.blog) !== 'undefined' ? (
                                            blogRead.Post.blog.map((item, index) => {
                                                return <ArticleContent
                                                    photo={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.blog_featured_image}
                                                    blogTitle={item.blog_title}
                                                    blogPost={item.blog_description}
                                                />

                                            })
                                        ) : null
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default SideHome;

import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";

import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import Article from "../../components/BlogDetails/Article";
import { fetchBlogsFromApi } from "../../../shared/actions/BlogActions";


const BlogsHome = props => {

    //redux
    const blogList = useSelector(state => state.Blogs);    //getting user profile
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogsFromApi())
    }, [])

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Blogs</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li className="active">Blog</li>
                    </ul>
                </div>
            </div>


            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="page">
                            <span style={{ display: 'none' }} className="entry-title page-title">Blog Full Width</span>
                            <span style={{ display: 'none' }} className="vcard"><span className="fn"><a rel="author" title="Posts by admin" href="#">admin</a></span></span>
                            <span style={{ display: 'none' }} className="updated">2014-06-20T13:35:34+00:00</span>


                            {
                                typeof (blogList.Blogs) !== 'undefined' && blogList.Blogs.length ? (
                                    blogList.Blogs.map((item, index) => {
                                        // console.log(item.dest_cover_image);
                                        return (

                                            <Article
                                                blogPicture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.blog_featured_image}
                                                blogTitle={item.blog_title}
                                                blogLink={'/blog/' + item.blog_slug}
                                            />
                                        )
                                    })
                                ) : null
                            }



                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </div>
    );
}

export default BlogsHome;

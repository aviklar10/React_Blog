/**
 * Created by aviklar10 on 09/03/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
        console.log('time to call action creator to fetch posts');
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
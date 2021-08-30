import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';

class ResultsPosts extends Component {

    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })
        return posts;
    }

    render () {
        return (
            <ul className="results-posts">
                <div className="results-post__wrapper">
                    <div className="results-postsZ__posts">
                        {this.renderPosts()}
                    </div>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);
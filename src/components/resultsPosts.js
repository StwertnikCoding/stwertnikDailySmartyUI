import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsPosts extends Component {
    render () {
        return (
            <ul className="results-posts">
                <div className="results-post__wrapper">
                    <div className="results-postsZ__posts">
                        RESULTS TO HERE
                    </div>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ResultsPosts);
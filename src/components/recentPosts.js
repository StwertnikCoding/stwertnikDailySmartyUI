import React, { Component } from 'react';

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
          <div className="recent-posts-wrapper">
              <div className="recent-posts-heading">
                  Recent Posts
              </div>

              <ul>
                  <li>Recent Posts 0</li>
                  <li>Recent Posts 1</li>
                  <li>Recent Posts 2</li>
              </ul>
          </div>
        
      </div>
    );
  }
}
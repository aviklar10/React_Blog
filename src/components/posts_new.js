/**
 * Created by aviklar10 on 11/03/2017.
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

// Should be similar to add organization component
class PostsNew extends Component {
    render() {
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        // equvivalent to -> const handleSubmit = this.props.handleSubmit;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    {/*// {...title} equvivalent to onChange={title.onChange}*/}
                    <input type="text" className="form-control" {...title}/>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

// whenever user change one of the below fields the application global state is being changed.
// connect: first argument is mapStateToProps. 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
},null, {createPost})(PostsNew);
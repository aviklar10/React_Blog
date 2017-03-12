import { combineReducers } from 'redux';
import PostsRducer from './reducer_posts';
import { reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
  posts: PostsRducer,
    form: formReducer
});

export default rootReducer;

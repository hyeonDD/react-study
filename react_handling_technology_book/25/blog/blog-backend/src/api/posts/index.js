import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIN from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIN, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIN, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIN, postsCtrl.checkOwnPost, postsCtrl.update);
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;

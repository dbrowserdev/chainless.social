/**
 * Unwalled.Garden API shim (v1)
 * © Copyright Blue Link Labs 2019
 * 
 * ## Example usage:
 * 
 * import {posts, followgraph} from 'dat://unwalled.garden'
 *
 * posts.addPost({content: {body: 'Hello, world!'}})
 * followgraph.follow('dat://beakerbrowser.com')
 *
 * ## What is this?
 * 
 * This module is a thin wrapper around Beaker browser's builtin APIs.
 * It requires Beaker browser v0.9+ to work.
 *
 * ## Why does this exist?
 * 
 * The Web platform community is still deciding how to build a "standard
 * library" which can be imported by ES modules. As part of the Extensible
 * Web Manifesto, a goal for an stdlib is to use shim solutions which can
 * smoothly upgrade to native Web APIs if/when they are adopted. In that
 * spirit, the Beaker team wanted a solution for its new Web APIs that
 * wasn't just a new set of builtin global objects. By wrapping the
 * `navigator.importSystemAPI()` call in this shim, we gave ourselves some
 * freedom to adopt the future stdlib solutions.
 * 
 * ## Why are these APIs implemented in the browser?
 * 
 * The existing Web APIs for running unwalled.garden's database are
 * not suitable enough for our goals. We gave it a shot (see
 * https://github.com/beakerbrowser/libfritter) and found that indexeddb
 * couldn't perform the way we needed. Rather than try to create new
 * database primitives, we decided to build high-level APIs into the
 * browser directly. By having consumers import from this wrapper, we left
 * open the possibility that these APIs could move into userland.
 */
export const posts = navigator.importSystemAPI('unwalled-garden-posts')
export const followgraph = navigator.importSystemAPI('unwalled-garden-followgraph')
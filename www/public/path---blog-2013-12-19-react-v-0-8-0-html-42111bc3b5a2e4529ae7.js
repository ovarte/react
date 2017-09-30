webpackJsonp([2452804526654],{"./node_modules/json-loader/index.js!./.cache/json/blog-2013-12-19-react-v-0-8-0-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>I’ll start by answering the obvious question:</p>\n<blockquote>\n<p>What happened to 0.6 and 0.7?</p>\n</blockquote>\n<p>It’s become increasingly obvious since our launch in May that people want to use React on the server. With the server-side rendering abilities, that’s a perfect fit. However using the same copy of React on the server and then packaging it up for the client is surprisingly a harder problem. People have been using our <code>react-tools</code> module which includes React, but when browserifying that ends up packaging all of <code>esprima</code> and some other dependencies that aren’t needed on the client. So we wanted to make this whole experience better.</p>\n<p>We talked with <a href="https://github.com/jeffbski">Jeff Barczewski</a> who was the owner of the <code>react</code> module on npm. He was kind enough to transition ownership to us and release his package under a different name: <code>autoflow</code>. I encourage you to <a href="https://github.com/jeffbski/autoflow">check it out</a> if you’re writing a lot of asynchronous code. In order to not break all of <code>react</code>’s current users of 0.7.x, we decided to bump our version to 0.8 and skip the issue entirely. We’re also including a warning if you use our <code>react</code> module like you would use the previous package.</p>\n<p>In order to make the transition to 0.8 for our current users as painless as possible, we decided to make 0.8 primarily a bug fix release on top of 0.5. No public APIs were changed (even if they were already marked as deprecated). We haven’t added any of the new features we have in master, though we did take the opportunity to pull in some improvements to internals.</p>\n<p>We hope that by releasing <code>react</code> on npm, we will enable a new set of uses that have been otherwise difficult. All feedback is welcome!</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>\n<p>Added support for more attributes:</p>\n<ul>\n<li><code>rows</code> &#x26; <code>cols</code> for <code>&#x3C;textarea></code></li>\n<li><code>defer</code> &#x26; <code>async</code> for <code>&#x3C;script></code></li>\n<li><code>loop</code> for <code>&#x3C;audio></code> &#x26; <code>&#x3C;video></code></li>\n<li><code>autoCorrect</code> for form fields (a non-standard attribute only supported by mobile WebKit)</li>\n</ul>\n</li>\n<li>Improved error messages</li>\n<li>Fixed Selection events in IE11</li>\n<li>Added <code>onContextMenu</code> events</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Addons</h3>\n<ul>\n<li>Fixed bugs with TransitionGroup when children were undefined</li>\n<li>Added support for <code>onTransition</code></li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-tools</h3>\n<ul>\n<li>Upgraded <code>jstransform</code> and <code>esprima-fb</code></li>\n</ul>\n<h3 id="jsxtransformer"><a href="#jsxtransformer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSXTransformer</h3>\n<ul>\n<li>Added support for use in IE8</li>\n<li>Upgraded browserify, which reduced file size by ~65KB (16KB gzipped)</li>\n</ul>',excerpt:"I’ll start by answering the obvious question: What happened to 0.6 and 0.7? It’s become increasingly obvious since our launch in May that people want to use React on the server. With the server-side rendering abilities, that’s a perfect fit. However using the same copy of React on the server and then packaging it up for the client is surprisingly a harder problem. People have been using our   module which includes React, but when browserifying that ends up packaging all of   and some other…",frontmatter:{title:"React v0.8",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"December 18, 2013",path:"_posts/2013-12-19-react-v0.8.0.md"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2013/12/19/react-v0.8.0.html"}}}});
//# sourceMappingURL=path---blog-2013-12-19-react-v-0-8-0-html-42111bc3b5a2e4529ae7.js.map
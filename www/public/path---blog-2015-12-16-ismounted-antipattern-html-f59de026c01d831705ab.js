webpackJsonp([0x8f963e49e7e3],{"./node_modules/json-loader/index.js!./.cache/json/blog-2015-12-16-ismounted-antipattern-html.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>As we move closer to officially deprecating isMounted, it’s worth understanding why the function is an antipattern, and how to write code without the isMounted function.</p>\n<p>The primary use case for <code>isMounted()</code> is to avoid calling <code>setState()</code> after a component has unmounted, because calling <code>setState()</code> after a component has unmounted will emit a warning. The “setState warning” exists to help you catch bugs, because calling <code>setState()</code> on an unmounted component is an indication that your app/component has somehow failed to clean up properly. Specifically, calling <code>setState()</code> in an unmounted component means that your app is still holding a reference to the component after the component has been unmounted - which often indicates a memory leak!</p>\n<p>To avoid the error message, people often add lines like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// This is bad.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Checking <code>isMounted</code> before calling <code>setState()</code> does eliminate the warning, but it also defeats the purpose of the warning, since now you will never get the warning (even when you should!)</p>\n<p>Other uses of <code>isMounted()</code> are similarly erroneous; using <code>isMounted()</code> is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.</p>\n<p>An easy migration strategy for anyone upgrading their code to avoid <code>isMounted()</code> is to track the mounted status yourself.  Just set a <code>_isMounted</code> property to true in <code>componentDidMount</code> and set it to false in <code>componentWillUnmount</code>, and use this variable to check your component’s status.</p>\n<p>An optimal solution would be to find places where <code>setState()</code> might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in <code>componentWillUnmount</code>, prior to unmounting.</p>\n<p>For instance, if you are using a Flux store in your component, you must unsubscribe in <code>componentWillUnmount</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    mydatastore<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    mydatastore<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If you use ES6 promises, you may need to wrap your promise in order to make it cancelable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> cancelablePromise <span class="token operator">=</span> <span class="token function">makeCancelable</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>r <span class="token operator">=></span> component<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncancelablePromise\n  <span class="token punctuation">.</span>promise\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'resolved\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'isCanceled\'</span><span class="token punctuation">,</span> reason<span class="token punctuation">.</span>isCanceled<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncancelablePromise<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Cancel the promise</span>\n</code></pre>\n      </div>\n<p>Where <code>makeCancelable</code> was originally <a href="https://github.com/facebook/react/issues/5465#issuecomment-157888325">defined by @istarkov</a> as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> makeCancelable <span class="token operator">=</span> <span class="token punctuation">(</span>promise<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> hasCanceled_ <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> wrappedPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n      val <span class="token operator">=></span> hasCanceled_ <span class="token operator">?</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isCanceled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      error <span class="token operator">=></span> hasCanceled_ <span class="token operator">?</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isCanceled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    promise<span class="token punctuation">:</span> wrappedPromise<span class="token punctuation">,</span>\n    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      hasCanceled_ <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As an added bonus for getting your code cleaned up early, getting rid of <code>isMounted()</code> makes it one step easier for you to upgrade to ES6 classes, where using <code>isMounted()</code> is already prohibited.  Happy coding!</p>',excerpt:"As we move closer to officially deprecating isMounted, it’s worth understanding why the function is an antipattern, and how to write code without the isMounted function. The primary use case for   is to avoid calling   after a component has unmounted, because calling   after a component has unmounted will emit a warning. The “setState warning” exists to help you catch bugs, because calling   on an unmounted component is an indication that your app/component has somehow failed to clean up…",frontmatter:{title:"isMounted is an Antipattern",next:null,prev:null,author:[{frontmatter:{name:"Jim Sproch",url:"http://www.jimsproch.com"}}]},fields:{date:"December 15, 2015",path:"_posts/2015-12-16-ismounted-antipattern.md"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2015/12/16/ismounted-antipattern.html"}}}});
//# sourceMappingURL=path---blog-2015-12-16-ismounted-antipattern-html-f59de026c01d831705ab.js.map
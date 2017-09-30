webpackJsonp([66851021271919],{"./node_modules/json-loader/index.js!./.cache/json/docs-react-dom-html.json":function(e,n){e.exports={data:{markdownRemark:{html:'<p>如果你用一个<code>&#x3C;script></code>标签导入React, 所有的顶阶的API都能在<code>ReactDOM</code>的全局范围内被调用。 如果你用的是\nnpm搭配ES6标准，你可以用<code>import ReactDOM from \'react-dom\'</code>。如果是npm和ES5，你可以用<code>var ReactDOM = require(\'react-dom\')</code>。</p>\n<h2 id="总览"><a href="#%E6%80%BB%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总览</h2>\n<p><code>react-dom</code>这个软件包提供了针对DOM的方法，可以在你应用的顶级域中调用，也可以在有需要的情况下用作跳出React模型的出口。你的大部分组件都不应该需要使用这个包。</p>\n<ul>\n<li><a href="#render"><code>render()</code></a></li>\n<li><a href="#unmountcomponentatnode"><code>unmountComponentAtNode()</code></a></li>\n<li><a href="#finddomnode"><code>findDOMNode()</code></a></li>\n</ul>\n<h3 id="浏览器兼容"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器兼容</h3>\n<p>React兼容所有常用的浏览器，包括IE9及以上的版本。</p>\n<blockquote>\n<p>注意</p>\n<p>我们不支持那些不兼容ES5方法的老版浏览器，但如果你的应用包含了polyfill，例如<a href="https://github.com/es-shims/es5-shim">es5-shim 和 es5-sham</a>，你可能会发现你的应用仍然可以在这些浏览器中正常运行。如果你选择这么干，你就只能孤军奋战了。</p>\n</blockquote>\n<hr>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<h3 id="render"><a href="#render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>render()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  container<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>callback<span class="token punctuation">]</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>渲染一个React元素，添加到位于提供的<code>container</code>里的DOM元素中，并返回这个组件的一个 <a href="/react/docs/more-about-refs.html">引用</a> (或者对于<a href="/react/docs/components-and-props.html#functional-and-class-components">无状态组件</a>返回<code>null</code>).</p>\n<p>如果这个React元素之前已经被渲染到<code>container</code>里去了，这段代码就会进行一次更新，并且只会改变那些反映元素最新状态所必须的DOM元素。</p>\n<p>回调函数是可选的。如果你提供了，程序会在渲染或更新之后执行这个函数。</p>\n<blockquote>\n<p>注意:</p>\n<p><code>ReactDOM.render()</code> 控制你传进来的容器节点里的的内容。第一次被调用时，内部所有已经存在的DOM元素都会被替换掉。之后的调用会使用React的DOM比较算法进行高效的更新。</p>\n<p><code>ReactDOM.render()</code>不会修改容器节点（只修改容器的子项）。你可以在不覆盖已有子节点的情况下添加一个组件到已有的DOM节点中去。</p>\n<p><code>ReactDOM.render()</code> 目前会返回一个引用， 指向 <code>ReactComponent</code>的根实例。但是这个返回值是历史遗留，应该避免使用。因为未来版本的React可能会在某些情况下进行异步渲染。如果你真的需要一个指向 <code>ReactComponent</code> 的根实例的引用，推荐的方法是添加一个 <a href="/react/docs/more-about-refs.html#the-ref-callback-attribute">callback ref</a>到根元素上。</p>\n</blockquote>\n<hr>\n<h3 id="unmountcomponentatnode"><a href="#unmountcomponentatnode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>unmountComponentAtNode()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>从DOM元素中移除已挂载的React组件，清除它的事件处理器和state。如果容器内没有挂载任何组件，这个函数什么都不会干。\n有组件被卸载的时候返回<code>true</code>，没有组件可供卸载时返回 <code>false</code>。</p>\n<hr>\n<h3 id="finddomnode"><a href="#finddomnode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>findDOMNode()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">findDOMNode</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果这个组件已经被挂载到DOM中，函数会返回对应的浏览器中生成的DOM元素 。\n当你需要从DOM中读取值时，比如表单的值，或者计算DOM元素的尺寸，这个函数会非常有用。\n<strong>大多数情况下，你可以添加一个指向DOM节点的引用，从而完全避免使用<code>findDOMNode</code> 这个函数.</strong> 当 <code>render</code> 返回 <code>null</code> 或者 <code>false</code> 时, <code>findDOMNode</code> 也返回 <code>null</code>.</p>\n<blockquote>\n<p>注意:</p>\n<p><code>findDOMNode</code> 是用于操作底层DOM节点的备用方案。在大部分情况下都不提倡使用这个方案，因为它破坏了组件的抽象化。</p>\n<p><code>findDOMNode</code> 只对挂载过的组件有效（也就是已经添加到DOM中去的组件）。如果你试图对一个未挂载的组件调用这个函数\n（比如在一个还未创建的组件的 <code>render()</code> 函数中中调用 <code>findDOMNode()</code>），程序会抛出一个异常。</p>\n<p><code>findDOMNode</code> 不能用于函数式的组件中。</p>\n</blockquote>',frontmatter:{title:"ReactDOM",next:null,prev:null},fields:{path:"docs/reference-react-dom.md"}}},pathContext:{slug:"docs/react-dom.html"}}}});
//# sourceMappingURL=path---docs-react-dom-html-df758cbdaff9bf0b2115.js.map
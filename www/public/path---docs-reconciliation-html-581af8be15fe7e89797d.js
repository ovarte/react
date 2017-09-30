webpackJsonp([87197319253818],{"./node_modules/json-loader/index.js!./.cache/json/docs-reconciliation-html.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>React提供了一组声明式API以让你不必关心每次更新的变化。这使得应用的编写容易了很多，但在React中如何实现并不是很清晰。这篇文章解释了React对比算法的选择以让组件更新可预测并使得高性能应用足够快。</p>\n<h2 id="目的"><a href="#%E7%9B%AE%E7%9A%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>目的</h2>\n<p>当你使用React，在单一时间点你可以考虑<code>render()</code>函数作为创建React元素的树。在下一次状态或属性更新，<code>render()</code>函数将返回一个不同的React元素的树。React需要算出如何高效更新UI以匹配最新的树。</p>\n<p>有一些解决将一棵树转换为另一棵树的最小操作数算法问题的通用方案。然而，树中元素个数为n，<a href="http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf">最先进的算法</a> 的时间复杂度为O(n<sup>3</sup>) 。</p>\n<p>若我们在React中使用，展示1000个元素则需要进行10亿次的比较。这操作太过昂贵，相反，React基于两点假设，实现了一个启发的O(n)算法：</p>\n<ol>\n<li>两个不同类型的元素将产生不同的树。</li>\n<li>通过渲染器附带<code>key</code>属性，开发者可以示意哪些子元素可能是稳定的。</li>\n</ol>\n<p>实践中，上述假设适用于大部分应用场景。</p>\n<h2 id="对比算法"><a href="#%E5%AF%B9%E6%AF%94%E7%AE%97%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对比算法</h2>\n<p>当对比两棵树时，React首先比较两个根节点。根据不同类型的根元素，其行为也不同。</p>\n<h3 id="元素的不同类型"><a href="#%E5%85%83%E7%B4%A0%E7%9A%84%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>元素的不同类型</h3>\n<p>每当根元素有不同类型，React将卸载旧树并重新构建新树。从<code>&#x3C;a></code>到<code>&#x3C;img></code>或从<code>&#x3C;Article></code>到<code>&#x3C;Comment></code>，或从<code>&#x3C;Button></code> 到 <code>&#x3C;div></code>，任何的调整都会导致全部重建。</p>\n<p>当树被卸载，旧的DOM节点将被销毁。组件实例将会接收到<code>componentWillUnmount()</code>方法。当构建一棵新树，新的DOM节点被插入到DOM中。组件实例将接收到<code>componentWillMount()</code>以及之后的<code>componentDidMount()</code>。任何有关旧树的状态都将被丢弃。</p>\n<p>下面任何组件的根节点将会被卸载同时他们的状态将销毁。例如，在进行对比：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Counter</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Counter</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>这将会销毁旧的<code>Counter</code>并重装新节点。</p>\n<h3 id="相同类型的dom元素"><a href="#%E7%9B%B8%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84dom%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>相同类型的DOM元素</h3>\n<p>当比较两个相同类型的React DOM元素时，React则会观察二者的属性，保持相同的底层DOM节点，并仅更新变化的属性。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stuff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stuff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>通过比较两个元素，React知道仅更改底层DOM元素的<code>className</code>。</p>\n<p>当更新<code>style</code>时，React同样知道仅更新变更的属性。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code>&lt;div style={{\'{{\'}}color: \'red\', fontWeight: \'bold\'}} />\n\n&lt;div style={{\'{{\'}}color: \'green\', fontWeight: \'bold\'}} />\n</code></pre>\n      </div>\n<p>当在调整两个元素时，React知道仅改变<code>color</code>样式而不是<code>fontWeight</code>。</p>\n<p>在处理完DOM元素后，React递归其子元素。</p>\n<h3 id="相同类型的组件元素"><a href="#%E7%9B%B8%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%BB%84%E4%BB%B6%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>相同类型的组件元素</h3>\n<p>当组件更新时，实例仍保持一致，以让状态能够在渲染之间保留。React更新底层组件实例的属性以满足新元素，并在底层实例上调用<code>componentWillReceiveProps()</code> 和 <code>componentWillUpdate()</code> 方法。</p>\n<p>接下来，<code>render()</code>方法被调用，同时对比算法会递归处理之前的结果和新的结果。</p>\n<h3 id="递归子节点"><a href="#%E9%80%92%E5%BD%92%E5%AD%90%E8%8A%82%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>递归子节点</h3>\n<p>默认时。当递归DOM节点的子节点，React仅在同一时间点递归两个子节点列表，并在有不同时产生一个变更。</p>\n<p>例如，当在子节点末尾增加一个元素，两棵树的转换效果很好：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>first<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>first<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>React将会匹配两棵树的<code>&#x3C;li>first&#x3C;/li></code>，并匹配两棵树的<code>&#x3C;li>second&#x3C;/li></code> 节点，并插入<code>&#x3C;li>third&#x3C;/li></code>节点树。</p>\n<p>若原生实现，在开始插入元素会使得性能更棘手。例如，两棵树的转换效果则比较糟糕：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Duke<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Villanova<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Connecticut<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Duke<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Villanova<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>React会调整每个子节点，而非意识到可以完整保留<code>&#x3C;li>Duke&#x3C;/li></code> 和 <code>&#x3C;li>Villanova&#x3C;/li></code>子树。低效成了一个问题。</p>\n<h3 id="keys"><a href="#keys" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keys</h3>\n<p>为解决该问题，React支持了一个<code>key</code>属性。当子节点有key时，React使用key来匹配原本树的子节点和新树的子节点。例如，增加一个<code>key</code>在之前效率不高的样例中能让树的转换变得高效：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Duke<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2016<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Villanova<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2014<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Connecticut<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Duke<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2016<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Villanova<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>现在React知道带有<code>\'2014\'</code>的key的元素是新的，并仅移动带有<code>\'2015\'</code>和<code>\'2016\'</code>的key的元素。</p>\n<p>实践中，发现key通常不难。你将展示的元素可能已经带有一个唯一的ID，因此key可以来自于你的数据中：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>当这已不再是问题，你可以增加一个新的ID属性到数据层或内容的部分哈希值以生成key。key必须在其兄弟节点中是唯一的，而非全局唯一。</p>\n<p>万不得已，你可以传递他们在数组中的索引作为key。若元素没有重排，该方法效果不错，但重排会使得其变慢。</p>\n<h2 id="权衡"><a href="#%E6%9D%83%E8%A1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>权衡</h2>\n<p>牢记协调算法的实现细节非常重要。React可能会在每次操作时渲染整个应用；而结果仍是相同的。为保证大多数场景效率能更快，我们通常提炼启发式的算法。</p>\n<p>在目前实现中，可以表明一个事实，即子树在其兄弟节点中移动，但你无法告知其移动到哪。该算法会重渲整个子树。</p>\n<p>由于React依赖于该启发式算法，若其背后的假设没得到满足，则其性能将会受到影响：</p>\n<ol>\n<li>\n<p>算法无法尝试匹配不同组件类型的子元素。若你发现两个输出非常相似的组件类型交替出现，你可能希望使其成为相同类型。实践中，我们并非发现这是一个问题。</p>\n</li>\n<li>\n<p>Keys应该是稳定的，可预测的，且唯一的。不稳定的key（类似由<code>Math.random()</code>生成的）将使得大量组件实例和DOM节点进行不必要的重建，使得性能下降并丢失子组件的状态。</p>\n</li>\n</ol>',frontmatter:{title:"协调（Reconciliation）",next:null,prev:null},fields:{path:"docs/reconciliation.md"}}},pathContext:{slug:"docs/reconciliation.html"}}}});
//# sourceMappingURL=path---docs-reconciliation-html-581af8be15fe7e89797d.js.map
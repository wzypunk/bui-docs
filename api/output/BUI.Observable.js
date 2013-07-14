Ext.data.JsonP.BUI_Observable({"tagname":"class","name":"BUI.Observable","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"abstract":true},"private":null,"id":"class-BUI.Observable","members":{"cfg":[{"name":"handler","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-handler"},{"name":"listeners","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-listeners"}],"property":[{"name":"_eventMap","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_eventMap"},{"name":"_events","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_events"}],"method":[{"name":"addEvents","tagname":"method","owner":"BUI.Observable","meta":{"protected":true},"id":"method-addEvents"},{"name":"addTarget","tagname":"method","owner":"BUI.Observable","meta":{"protected":true},"id":"method-addTarget"},{"name":"clearListeners","tagname":"method","owner":"BUI.Observable","meta":{"protected":true},"id":"method-clearListeners"},{"name":"fire","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-fire"},{"name":"off","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-off"},{"name":"on","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-on"},{"name":"publish","tagname":"method","owner":"BUI.Observable","meta":{"protected":true},"id":"method-publish"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":73,"files":[{"filename":"observable.js","href":"observable.html#BUI-Observable"}],"html_meta":{"abstract":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":["BUI.Base"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BUI.Base' rel='BUI.Base' class='docClass'>BUI.Base</a></div><h4>Files</h4><div class='dependency'><a href='source/observable.html#BUI-Observable' target='_blank'>observable.js</a></div></pre><div class='doc-contents'><p>支持事件的对象，参考观察者模式\n - 此类提供事件绑定\n - 提供事件冒泡机制</p>\n\n<pre><code>  var control = new Control();\n  control.on('click',function(ev){\n  \n  });\n\n  control.off();  //移除所有事件\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-handler' class='name expandable'>handler</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>点击事件的处理函数，快速配置点击事件而不需要写listeners属性\n\n   var list = new BUI.List.SimpleList({\n     handler : function(ev){} //click 事件\n...</div><div class='long'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     handler : function(ev){} //click 事件\n   });\n   list.render();\n </code></pre>\n\n</div></div></div><div id='cfg-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>初始化事件,快速注册事件\n\n   var list = new BUI.List.SimpleList({\n     listeners : {\n       itemclick : function(ev){},\n       it...</div><div class='long'><p>初始化事件,快速注册事件</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     listeners : {\n       itemclick : function(ev){},\n       itemrendered : function(ev){}\n     },\n     items : []\n   });\n   list.render();\n </code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_eventMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-property-_eventMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_eventMap' class='name expandable'>_eventMap</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>绑定的事件 ...</div><div class='long'><p>绑定的事件</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-_events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-property-_events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_events' class='name expandable'>_events</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>支持的事件名列表 ...</div><div class='long'><p>支持的事件名列表</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEvents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>events</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>添加支持的事件 ...</div><div class='long'><p>添加支持的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>事件</p>\n</div></li></ul></div></div></div><div id='method-addTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-addTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addTarget' class='name expandable'>addTarget</a>( <span class='pre'>target</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>添加冒泡的对象 ...</div><div class='long'><p>添加冒泡的对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>冒泡的事件源</p>\n</div></li></ul></div></div></div><div id='method-clearListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-clearListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-clearListeners' class='name expandable'>clearListeners</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>移除所有绑定的事件 ...</div><div class='long'><p>移除所有绑定的事件</p>\n</div></div></div><div id='method-fire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, eventData</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</div><div class='description'><div class='short'>触发事件\n\n  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick'); ...</div><div class='long'><p>触发事件</p>\n\n<pre><code>  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>eventData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件触发时传递的数据</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>移除绑定的事件\n\n //移除所有事件\n list.off();\n \n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',c...</div><div class='long'><p>移除绑定的事件</p>\n\n<pre><code> //移除所有事件\n list.off();\n \n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',callback);//需要保存回调函数的引用\n\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>添加绑定事件\n\n  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered item...</div><div class='long'><p>添加绑定事件</p>\n\n<pre><code>  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered itemupdated',function(){\n    //列表项创建、更新时触发操作\n  });\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Observable'>BUI.Observable</span><br/><a href='source/observable.html#BUI-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventType, cfg</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>配置事件是否允许冒泡 ...</div><div class='long'><p>配置事件是否允许冒泡</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>支持冒泡的事件</p>\n</div></li><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>bubbles</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否支持冒泡</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>"});
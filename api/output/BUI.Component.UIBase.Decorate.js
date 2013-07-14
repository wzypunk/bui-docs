Ext.data.JsonP.BUI_Component_UIBase_Decorate({"tagname":"class","name":"BUI.Component.UIBase.Decorate","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.Decorate","members":{"cfg":[{"name":"srcNode","tagname":"cfg","owner":"BUI.Component.UIBase.Decorate","meta":{},"id":"cfg-srcNode"}],"property":[{"name":"decorateCfgFields","tagname":"property","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"property-decorateCfgFields"},{"name":"isDecorateChild","tagname":"property","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"property-isDecorateChild"},{"name":"srcNode","tagname":"property","owner":"BUI.Component.UIBase.Decorate","meta":{},"id":"property-srcNode"}],"method":[{"name":"decorateChildren","tagname":"method","owner":"BUI.Component.UIBase.Decorate","meta":{"private":true},"id":"method-decorateChildren"},{"name":"decorateInternal","tagname":"method","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"method-decorateInternal"},{"name":"findXClassByNode","tagname":"method","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"method-findXClassByNode"},{"name":"getDecorateConfig","tagname":"method","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"method-getDecorateConfig"},{"name":"getDecorateElments","tagname":"method","owner":"BUI.Component.UIBase.Decorate","meta":{"protected":true},"id":"method-getDecorateElments"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":126,"files":[{"filename":"decorate.js","href":"decorate.html#BUI-Component-UIBase-Decorate"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Component.Controller"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Component.Controller' rel='BUI.Component.Controller' class='docClass'>BUI.Component.Controller</a></div><h4>Files</h4><div class='dependency'><a href='source/decorate.html#BUI-Component-UIBase-Decorate' target='_blank'>decorate.js</a></div></pre><div class='doc-contents'><p>将DOM对象封装成控件</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-srcNode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-cfg-srcNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-cfg-srcNode' class='name not-expandable'>srcNode</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'><p>配置控件的根节点的DOM</p>\n\n<pre><code>new Form.Form({\n  srcNode : '#J_Form'\n}).render();\n</code></pre>\n\n</div><div class='long'><p>配置控件的根节点的DOM</p>\n\n<pre><code>new Form.Form({\n  srcNode : '#J_Form'\n}).render();\n</code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-decorateCfgFields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-property-decorateCfgFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-property-decorateCfgFields' class='name expandable'>decorateCfgFields</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>此配置项配置使用那些srcNode上的节点作为配置项\n - 当时用 decorate 时，取 srcNode上的节点的属性作为控件的配置信息\n - 默认id,name,value,title 都会作为属性传入\n - 使用 'data-...</div><div class='long'><p>此配置项配置使用那些srcNode上的节点作为配置项\n - 当时用 decorate 时，取 srcNode上的节点的属性作为控件的配置信息\n - 默认id,name,value,title 都会作为属性传入\n - 使用 'data-cfg' 作为整体的配置属性</p>\n\n<pre><code>    <input id=\"c1\" type=\"text\" name=\"txtName\" id=\"id\",data-cfg=\"{allowBlank:false}\" />\n    //会生成以下配置项：\n    {\n        name : 'txtName',\n        id : 'id',\n        allowBlank:false\n    }\n    new Form.Field({\n       src:'#c1'\n    }).render();\n </code></pre>\n\n<p>Defaults to: <code>{value: {'id': true, 'name': true, 'value': true, 'title': true}}</code></p></div></div></div><div id='property-isDecorateChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-property-isDecorateChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-property-isDecorateChild' class='name expandable'>isDecorateChild</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>是否根据DOM生成子控件 ...</div><div class='long'><p>是否根据DOM生成子控件</p>\n<p>Defaults to: <code>{value: false}</code></p></div></div></div><div id='property-srcNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-property-srcNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-property-srcNode' class='name expandable'>srcNode</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'>配置控件的根节点的DOM ...</div><div class='long'><p>配置控件的根节点的DOM</p>\n<p>Defaults to: <code>{view: true}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decorateChildren' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-method-decorateChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-method-decorateChildren' class='name expandable'>decorateChildren</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>封装子控件 ...</div><div class='long'><p>封装子控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><div class='sub-desc'><p>component's root element.</p>\n</div></li></ul></div></div></div><div id='method-decorateInternal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-method-decorateInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-method-decorateInternal' class='name expandable'>decorateInternal</a>( <span class='pre'>el</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>封装所有的子控件 ...</div><div class='long'><p>封装所有的子控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><div class='sub-desc'><p>Root element of current component.</p>\n</div></li></ul></div></div></div><div id='method-findXClassByNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-method-findXClassByNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-method-findXClassByNode' class='name expandable'>findXClassByNode</a>( <span class='pre'>childNode</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取子控件的xclass类型 ...</div><div class='long'><p>获取子控件的xclass类型</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childNode</span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><div class='sub-desc'><p>子控件的根节点</p>\n</div></li></ul></div></div></div><div id='method-getDecorateConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-method-getDecorateConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-method-getDecorateConfig' class='name expandable'>getDecorateConfig</a>( <span class='pre'>el</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取控件的配置信息 ...</div><div class='long'><p>获取控件的配置信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDecorateElments' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Decorate'>BUI.Component.UIBase.Decorate</span><br/><a href='source/decorate.html#BUI-Component-UIBase-Decorate-method-getDecorateElments' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Decorate-method-getDecorateElments' class='name expandable'>getDecorateElments</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取封装成子控件的节点集合 ...</div><div class='long'><p>获取封装成子控件的节点集合</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>节点集合</p>\n</div></li></ul></div></div></div></div></div></div></div>"});
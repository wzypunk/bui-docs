Ext.data.JsonP.BUI_Chart_Legend({"tagname":"class","name":"BUI.Chart.Legend","autodetected":{},"files":[{"filename":"legend.js","href":"legend.html#BUI-Chart-Legend"}],"extends":"BUI.Chart.PlotItem","mixins":["BUI.Chart.ActivedGroup"],"members":[{"name":"align","tagname":"property","owner":"BUI.Chart.Legend","id":"property-align","meta":{}},{"name":"back","tagname":"property","owner":"BUI.Chart.Legend","id":"property-back","meta":{}},{"name":"dx","tagname":"property","owner":"BUI.Chart.Legend","id":"property-dx","meta":{}},{"name":"dy","tagname":"property","owner":"BUI.Chart.Legend","id":"property-dy","meta":{}},{"name":"isGroup","tagname":"property","owner":"BUI.Graphic.Group","id":"property-isGroup","meta":{}},{"name":"items","tagname":"property","owner":"BUI.Chart.Legend","id":"property-items","meta":{}},{"name":"layout","tagname":"property","owner":"BUI.Chart.Legend","id":"property-layout","meta":{}},{"name":"x","tagname":"property","owner":"BUI.Graphic.Group","id":"property-x","meta":{}},{"name":"y","tagname":"property","owner":"BUI.Graphic.Group","id":"property-y","meta":{}},{"name":"addItem","tagname":"method","owner":"BUI.Chart.Legend","id":"method-addItem","meta":{}},{"name":"animate","tagname":"method","owner":"BUI.Graphic.Group","id":"method-animate","meta":{}},{"name":"clearActivedItem","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-clearActivedItem","meta":{}},{"name":"containsElement","tagname":"method","owner":"BUI.Graphic.Group","id":"method-containsElement","meta":{}},{"name":"getActiveItems","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-getActiveItems","meta":{"protected":true}},{"name":"getActived","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-getActived","meta":{}},{"name":"isItemActived","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-isItemActived","meta":{"protected":true}},{"name":"move","tagname":"method","owner":"BUI.Graphic.Group","id":"method-move","meta":{}},{"name":"setActivedItem","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-setActivedItem","meta":{}},{"name":"setItemActived","tagname":"method","owner":"BUI.Chart.ActivedGroup","id":"method-setItemActived","meta":{"protected":true}},{"name":"translate","tagname":"method","owner":"BUI.Graphic.Group","id":"method-translate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Chart.Legend","component":false,"superclasses":["BUI.Graphic.Group","BUI.Chart.PlotItem"],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='docClass'>BUI.Graphic.Group</a><div class='subclass '><a href='#!/api/BUI.Chart.PlotItem' rel='BUI.Chart.PlotItem' class='docClass'>BUI.Chart.PlotItem</a><div class='subclass '><strong>BUI.Chart.Legend</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='docClass'>BUI.Chart.ActivedGroup</a></div><h4>Files</h4><div class='dependency'><a href='source/legend.html#BUI-Chart-Legend' target='_blank'>legend.js</a></div></pre><div class='doc-contents'><p>图例</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-align' class='name expandable'>align</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>对齐方式,top,left,right,bottom ...</div><div class='long'><p>对齐方式,top,left,right,bottom</p>\n<p>Defaults to: <code>{value: &#39;bottom&#39;}</code></p></div></div></div><div id='property-back' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-back' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-back' class='name expandable'>back</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>边框的配置项，一般是一个正方形 ...</div><div class='long'><p>边框的配置项，一般是一个正方形</p>\n<p>Defaults to: <code>{value: {stroke: &#39;#909090&#39;, fill: &#39;#fff&#39;}}</code></p></div></div></div><div id='property-dx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-dx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-dx' class='name expandable'>dx</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>对齐位置的偏移量x ...</div><div class='long'><p>对齐位置的偏移量x</p>\n<p>Defaults to: <code>{value: 0}</code></p></div></div></div><div id='property-dy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-dy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-dy' class='name expandable'>dy</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>对齐位置的偏移量y ...</div><div class='long'><p>对齐位置的偏移量y</p>\n<p>Defaults to: <code>{value: 0}</code></p></div></div></div><div id='property-isGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-property-isGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-property-isGroup' class='name expandable'>isGroup</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否Group ...</div><div class='long'><p>是否Group</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-items' class='name expandable'>items</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>子项的配置项 ...</div><div class='long'><p>子项的配置项</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-property-layout' class='name expandable'>layout</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>布局方式： horizontal，vertical ...</div><div class='long'><p>布局方式： horizontal，vertical</p>\n<p>Defaults to: <code>{value: &#39;horizontal&#39;}</code></p></div></div></div><div id='property-x' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-property-x' class='name expandable'>x</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿x轴的偏移量 ...</div><div class='long'><p>沿x轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-y' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-property-y' class='name expandable'>y</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿y轴的偏移量 ...</div><div class='long'><p>沿y轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.Legend'>BUI.Chart.Legend</span><br/><a href='source/legend.html#BUI-Chart-Legend-method-addItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.Legend-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加图例 ...</div><div class='long'><p>添加图例</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>图例项的配置信息</p>\n</div></li></ul></div></div></div><div id='method-animate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-method-animate' class='name expandable'>animate</a>( <span class='pre'>params, ms, easing, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>执行动画,对于分组来说，animate仅支持平移动画\n\n\n    group.animate({\n        x : 100,\n        y : 100\n    },400); ...</div><div class='long'><p>执行动画,对于分组来说，animate仅支持平移动画</p>\n\n<p><code>\n    group.animate({\n        x : 100,\n        y : 100\n    },400);\n</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>动画的参数</p>\n</div></li><li><span class='pre'>ms</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>毫秒数</p>\n</div></li><li><span class='pre'>easing</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>路径函数</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-clearActivedItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-clearActivedItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-clearActivedItem' class='name expandable'>clearActivedItem</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>清除激活的元素 ...</div><div class='long'><p>清除激活的元素</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-containsElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-method-containsElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-method-containsElement' class='name expandable'>containsElement</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否包含指定的DOM ...</div><div class='long'><p>是否包含指定的DOM</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>dom元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-getActiveItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-getActiveItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-getActiveItems' class='name expandable'>getActiveItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取可以被激活的元素 ...</div><div class='long'><p>获取可以被激活的元素</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]</span><div class='sub-desc'><p>可以被激活的元素集合</p>\n</div></li></ul></div></div></div><div id='method-getActived' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-getActived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-getActived' class='name expandable'>getActived</a>( <span class='pre'></span> ) : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取激活的元素 ...</div><div class='long'><p>获取激活的元素</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a></span><div class='sub-desc'><p>激活的元素</p>\n</div></li></ul></div></div></div><div id='method-isItemActived' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-isItemActived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-isItemActived' class='name expandable'>isItemActived</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>是否激活 ...</div><div class='long'><p>是否激活</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a><div class='sub-desc'><p>可以被激活的元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]</span><div class='sub-desc'><p>可以被激活的元素集合</p>\n</div></li></ul></div></div></div><div id='method-move' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-method-move' class='name expandable'>move</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动的到位置 ...</div><div class='long'><p>移动的到位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到y</p>\n</div></li></ul></div></div></div><div id='method-setActivedItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-setActivedItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-setActivedItem' class='name expandable'>setActivedItem</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置激活的元素 ...</div><div class='long'><p>设置激活的元素</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a><div class='sub-desc'><p>可以被激活的元素</p>\n</div></li></ul></div></div></div><div id='method-setItemActived' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Chart.ActivedGroup' rel='BUI.Chart.ActivedGroup' class='defined-in docClass'>BUI.Chart.ActivedGroup</a><br/><a href='source/activedgroup.html#BUI-Chart-ActivedGroup-method-setItemActived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.ActivedGroup-method-setItemActived' class='name expandable'>setItemActived</a>( <span class='pre'>item, actived</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置激活状态 ...</div><div class='long'><p>设置激活状态</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a><div class='sub-desc'><p>可以被激活的元素</p>\n</div></li><li><span class='pre'>actived</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否激活</p>\n</div></li></ul></div></div></div><div id='method-translate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Graphic.Group' rel='BUI.Graphic.Group' class='defined-in docClass'>BUI.Graphic.Group</a><br/><a href='source/group.html#BUI-Graphic-Group-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Graphic.Group-method-translate' class='name expandable'>translate</a>( <span class='pre'>dx, dy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动 ...</div><div class='long'><p>移动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿x轴平移的距离</p>\n</div></li><li><span class='pre'>dy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿y轴平移的距离</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
/*! For license information please see component---src-templates-blog-post-js-1d332764dfc608e1f6a9.js.LICENSE.txt */
"use strict";(self.webpackChunkcontentful_starter_gatsby_blog=self.webpackChunkcontentful_starter_gatsby_blog||[]).push([[989],{2924:function(e,t,n){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var E=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));o(E);E.BLOCKS;var a=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));o(a);a.INLINES;var l=i((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));o(l);var L=i((function(e,t){var n,o=r&&r.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],n[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],n[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],n),t.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=o([E.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,a.INLINES.HYPERLINK,a.INLINES.ENTRY_HYPERLINK,a.INLINES.ASSET_HYPERLINK,a.INLINES.EMBEDDED_ENTRY,"text"]}));o(L);L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var u=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(u);var O=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(O);var S=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));o(S);var _=i((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(a.INLINES,e.nodeType)},t.isBlock=function(e){return n(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));o(_);_.isText,_.isBlock,_.isInline;var c=i((function(e,t){var n=r&&r.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=r&&r.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=r&&r.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},c=r&&r.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},d=r&&r.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return E.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return a.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return d(l).default}}),i(L,t),i(u,t),i(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return d(S).default}});var B=c(_);t.helpers=B}));o(c);var d=c.helpers;c.EMPTY_DOCUMENT,c.MARKS,c.INLINES,c.BLOCKS;t.a=function e(t,n){return void 0===n&&(n=" "),t&&t.content?t.content.reduce((function(r,o,i){var E;if(d.isText(o))E=o.value;else if((d.isBlock(o)||d.isInline(o))&&!(E=e(o,n)).length)return r;var a=t.content[i+1];return r+E+(a&&d.isBlock(a)?n:"")}),""):""}},9352:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(4578),o=n(7294),i=n(1883),E=n(7361),a=n.n(E),l=n(2924),L=n(2013),u=n.n(L),O=n(7719),S=n(4112),_=n(8183),c=n(3544),d=n(2464),B=n(5917),C=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n=a()(this.props,"data.contentfulBlogPost"),r=a()(this.props,"data.previous"),E=a()(this.props,"data.next"),L=(0,l.a)(JSON.parse(n.description.raw)),C=u()(n.body.body).minutes;return console.log(n.body),o.createElement(c.Z,{location:this.props.location},o.createElement(_.Z,{title:n.title,description:L,image:"http:"+n.heroImage.resize.src}),o.createElement(d.Z,{image:null===(e=n.heroImage)||void 0===e?void 0:e.gatsbyImage,title:n.title,content:n.description}),o.createElement("div",{className:"blog-post-module--container--2348d"},o.createElement("span",{className:"blog-post-module--meta--5f023"},null===(t=n.author)||void 0===t?void 0:t.name," ·"," ",o.createElement("time",{dateTime:n.rawDate},n.publishDate)," –"," ",C," minute read"),o.createElement("div",{className:"blog-post-module--article--75029"},o.createElement("div",{className:"blog-post-module--body--7e623"},o.createElement(O.D,{remarkPlugins:[S.Z]},n.body.body)),o.createElement(B.Z,{tags:n.tags}),(r||E)&&o.createElement("nav",null,o.createElement("ul",{className:"blog-post-module--articleNavigation--db4e2"},r&&o.createElement("li",null,o.createElement(i.rU,{to:"/blog/"+r.slug,rel:"prev"},"← ",r.title)),E&&o.createElement("li",null,o.createElement(i.rU,{to:"/blog/"+E.slug,rel:"next"},E.title," →")))))))},t}(o.Component),s=C},2013:function(e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e,t){return t.some((function(t){var n=t[0],r=t[1];return n<=e&&e<=r}))}t.__esModule=!0,t.readingTimeWithCount=t.countWords=void 0;var o=function(e){return r(e.charCodeAt(0),[[12352,12447],[19968,40959],[44032,55203],[131072,191456]])},i=function(e){return" \n\r\t".includes(e)};function E(e,t){void 0===t&&(t={});for(var n=0,E=0,a=e.length-1,l=t.wordBound,L=void 0===l?i:l;L(e[E]);)E++;for(;L(e[a]);)a--;for(var u=e+"\n",O=E;O<=a;O++)if((o(u[O])||!L(u[O])&&(L(u[O+1])||o(u[O+1])))&&n++,o(u[O]))for(;O<=a&&(r(u[O+1].charCodeAt(0),[[33,47],[58,64],[91,96],[123,126],[12288,12351],[65280,65519]])||L(u[O+1]));)O++;return{total:n}}function a(e,t){void 0===t&&(t={});var n=t.wordsPerMinute,r=void 0===n?200:n,o=e.total/r,i=Math.round(60*o*1e3);return{minutes:Math.ceil(parseFloat(o.toFixed(2))),time:i}}t.countWords=E,t.readingTimeWithCount=a,t.default=function(e,t){void 0===t&&(t={});var r=E(e,t);return n(n({},a(r,t)),{words:r})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1d332764dfc608e1f6a9.js.map
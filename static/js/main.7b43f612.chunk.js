(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{22:function(t,e,o){t.exports={arrow:"ScrollTopArrow_arrow__1AwV-"}},29:function(t,e,o){},30:function(t,e,o){},31:function(t,e,o){},34:function(t,e,o){},35:function(t,e,o){},36:function(t,e,o){},37:function(t,e,o){},56:function(t,e,o){},60:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(10),c=o.n(r),s=(o(28),o(7)),i=o(3),l=o(4),u=o(6),d=o(5),h=(o(29),o(30),o(31),o(1)),p=function(t){var e=t.formValue,o=t.onInputHandler;return Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:o,value:e})},b=(o(33),function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={query:""},t.onInputHandler=function(e){var o=e.target;t.setState({query:o.value})},t.onSubmitHandler=function(e){e.preventDefault(),t.props.onSubmit(t.state.query)},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitHandler,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"material-icons",children:"search"})}),Object(h.jsx)(p,{formValue:this.state.query,onInputHandler:this.onInputHandler})]})})}}]),o}(n.Component)),f=b;o(34);function j(t){var e=t.onClick;return Object(h.jsx)("button",{className:"Button",type:"button",onClick:e,children:"Load more"})}o(35),o(36);var m=function(t){var e=t.url,o=t.description,n=t.onClick;return Object(h.jsx)("li",{onClick:n,className:"gallery-item",children:Object(h.jsx)("img",{src:e,alt:o,className:"ImageGalleryItem-image"})})},g=m;m.defaultProps={description:"photo preview"};var y=function(t){var e=t.photoData,o=t.children,n=t.setLargeImage;return Object(h.jsxs)("ul",{className:"ImageGallery",children:[e.map((function(t){return Object(h.jsx)(g,{onClick:function(){return n(t.largeImageURL,t.tags)},url:t.webformatURL,description:t.tags},t.id)})),o]})},O=(o(37),o(21));function v(){return Object(h.jsx)(O.a,{foregroundColor:"#cac0c0",viewBox:"0 0 720 520",className:"LoaderPart",speed:1,children:Object(h.jsx)("rect",{x:"0",y:"0",rx:"2",ry:"2",width:"720",height:"520"})})}var w=function(){var t=Object(s.a)(Array(12).keys());return Object(h.jsx)(h.Fragment,{children:t.map((function(t){return Object(h.jsx)(v,{},t)}))})},x=o(12),k=o.n(x);k.a.defaults.baseURL="https://pixabay.com/api";var S=function(t,e){return k.a.get("/?image_type=photo&key=".concat("23244571-e0b1f6062f2659059b6ad356b","&orientation=horizontal&q=").concat(t,"&page=").concat(e,"&per_page=12"))},C=(o(56),document.querySelector("#root-modal")),M=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).closeKeydownModal=function(e){return"Escape"===e.code&&t.props.onClick()},t.closeOverlayModal=function(e){return e.target===e.currentTarget&&t.props.onClick()},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeKeydownModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeKeydownModal)}},{key:"render",value:function(){return Object(r.createPortal)(Object(h.jsx)("div",{onClick:this.closeOverlayModal,className:"Overlay",children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),C)}}]),o}(n.Component),L=o(22),I=o.n(L);function N(t){var e=t.color,o=t.bgColor,n=t.borderRadius;return Object(h.jsx)("div",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:I.a.arrow,style:{backgroundColor:o,borderRadius:n},children:Object(h.jsx)("span",{style:{color:e,fontSize:"42px"},className:"material-icons",children:"expand_less"})})}N.defaultProps={color:"#fff",bgColor:"#333",borderRadius:"50%"};var q=o(23),D=(o(58),o(59),function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isLoading:!1,photoData:[],page:1,showLoadMoreButton:!1,query:"",error:"",largeImage:"",showModal:!1,description:""},t.onSubmit=function(e){t.setState({query:e,error:"",page:1,photoData:[]})},t.onClickLoadMore=function(){t.setState((function(t){return{page:t.page+1}}))},t.findImages=function(){var e=t.state.page;t.setState({isLoading:!0,showLoadMoreButton:!1}),S(t.state.query,e).then((function(e){var o=e.data;t.setState((function(t){return{photoData:[].concat(Object(s.a)(t.photoData),Object(s.a)(o.hits)),showLoadMoreButton:12===o.hits.length&&!0,error:0===o.hits.length&&"Opps, nothing found"}})),window.scrollBy({top:260,behavior:"smooth"})})).catch((function(){return t.setState({error:"Oops, something went wrong"})})).finally((function(){return t.setState({isLoading:!1})}))},t.setLargeImage=function(e,o){t.toggleModal(),t.setState({largeImage:e,description:o})},t.toggleModal=function(){return t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){Object(q.info)({text:"Type your query and find photos"})}},{key:"componentDidUpdate",value:function(t,e){this.state.query!==e.query&&(this.findImages(),window.scrollTo(0,0)),this.state.page!==e.page&&1!==this.state&&this.findImages()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{onSubmit:this.onSubmit}),this.state.error&&Object(h.jsx)("h2",{className:"errorMesage",children:this.state.error}),!this.state.error&&Object(h.jsx)(y,{setLargeImage:this.setLargeImage,photoData:this.state.photoData,children:this.state.isLoading&&Object(h.jsx)(w,{})}),this.state.showLoadMoreButton&&Object(h.jsx)(j,{onClick:this.onClickLoadMore}),this.state.showModal&&Object(h.jsx)(M,{onClick:this.toggleModal,children:Object(h.jsx)("img",{src:this.state.largeImage,alt:this.state.description})}),Object(h.jsx)(N,{borderRadius:"50%",color:"white",bgColor:"#3f51b5"})]})}}]),o}(n.Component)),B=D;c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.7b43f612.chunk.js.map
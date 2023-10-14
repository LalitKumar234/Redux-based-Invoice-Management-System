(this["webpackJsonpredux-based-invoice-management-system"]=this["webpackJsonpredux-based-invoice-management-system"]||[]).push([[0],{105:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(22),c=s.n(a),l=(s(95),s(13)),o=s(17),r=s(18),d=s(19),j=(s(49),s(96),s(5)),h=s(82),b=s(14),m=s(3),u=s(6),x=s(10),p=s(58),O=s(44),v=s(24),f=s(23),y=s(12),N=s(88),w=s(39),g=s(40),C=s(38),I=s(2),A=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(I.jsxs)(C.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(I.jsx)(C.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(I.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(I.jsx)(y.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}]),s}(n.a.Component),T=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(I.jsx)(D,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(I.jsxs)("div",{children:[Object(I.jsxs)(w.a,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"ITEM"}),Object(I.jsx)("th",{children:"QTY"}),Object(I.jsx)("th",{children:"PRICE/RATE"}),Object(I.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(I.jsx)("tbody",{children:i})]}),Object(I.jsx)(f.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}]),s}(n.a.Component),D=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"onDelEvent",value:function(){this.props.onDelEvent(this.props.item)}},{key:"render",value:function(){return Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{style:{width:"100%"},children:[Object(I.jsx)(A,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(I.jsx)(A,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(I.jsx)("td",{style:{minWidth:"70px"},children:Object(I.jsx)(A,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(I.jsx)("td",{style:{minWidth:"130px"},children:Object(I.jsx)(A,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(I.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(I.jsx)(g.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}]),s}(n.a.Component),F=T,E=s(87),S=s(70),R=s.n(S),k=s(77);function q(){R()(document.querySelector("#invoiceCapture")).then((function(e){var t=e.toDataURL("image/png",1),s=new k.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;var i=s.getImageProperties(t),n=s.internal.pageSize.getWidth(),a=i.height*n/i.width;s.addImage(t,"PNG",0,0,n,a),s.save("invoice-001.pdf")}))}var z=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e,t,s,i,n,a,c,l,o,r,d=this;return Object(I.jsxs)("div",{children:[Object(I.jsxs)(E.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(I.jsxs)("div",{id:"invoiceCapture",children:[Object(I.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(I.jsxs)("div",{className:"w-100",children:[Object(I.jsx)("h4",{className:"fw-bold my-2",children:(null===(e=this.props.info)||void 0===e?void 0:e.billFrom)||"John Uberbacher"}),Object(I.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",(null===(t=this.props.info)||void 0===t?void 0:t.invoiceNumber)||""]})]}),Object(I.jsxs)("div",{className:"text-end ms-4",children:[Object(I.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(I.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency||""," ",this.props.total||""]})]})]}),Object(I.jsxs)("div",{className:"p-4",children:[Object(I.jsxs)(O.a,{className:"mb-4",children:[Object(I.jsxs)(v.a,{md:4,children:[Object(I.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(I.jsx)("div",{children:(null===(s=this.props.info)||void 0===s?void 0:s.billTo)||""}),Object(I.jsx)("div",{children:(null===(i=this.props.info)||void 0===i?void 0:i.billToAddress)||""}),Object(I.jsx)("div",{children:(null===(n=this.props.info)||void 0===n?void 0:n.billToEmail)||""})]}),Object(I.jsxs)(v.a,{md:4,children:[Object(I.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(I.jsx)("div",{children:(null===(a=this.props.info)||void 0===a?void 0:a.billFrom)||""}),Object(I.jsx)("div",{children:(null===(c=this.props.info)||void 0===c?void 0:c.billFromAddress)||""}),Object(I.jsx)("div",{children:(null===(l=this.props.info)||void 0===l?void 0:l.billFromEmail)||""})]}),Object(I.jsxs)(v.a,{md:4,children:[Object(I.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(I.jsx)("div",{children:(null===(o=this.props.info)||void 0===o?void 0:o.dateOfIssue)||""})]})]}),Object(I.jsxs)(w.a,{className:"mb-0",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"QTY"}),Object(I.jsx)("th",{children:"DESCRIPTION"}),Object(I.jsx)("th",{className:"text-end",children:"PRICE"}),Object(I.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(I.jsx)("tbody",{children:Array.isArray(this.props.items)&&this.props.items.map((function(e,t){return Object(I.jsxs)("tr",{id:t,children:[Object(I.jsx)("td",{style:{width:"70px"},children:e.quantity}),Object(I.jsxs)("td",{children:[e.name," - ",e.description]}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[d.props.currency||""," ",e.price||""]}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[d.props.currency||""," ",e.price*e.quantity||""]})]},t)}))})]}),Object(I.jsx)(w.a,{children:Object(I.jsxs)("tbody",{children:[Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:"\xa0"}),Object(I.jsx)("td",{children:"\xa0"}),Object(I.jsx)("td",{children:"\xa0"})]}),Object(I.jsxs)("tr",{className:"text-end",children:[Object(I.jsx)("td",{}),Object(I.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency||""," ",this.props.subTotal||""]})]}),0!=this.props.taxAmmount&&Object(I.jsxs)("tr",{className:"text-end",children:[Object(I.jsx)("td",{}),Object(I.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency||""," ",this.props.taxAmmount||""]})]}),0!=this.props.discountAmmount&&Object(I.jsxs)("tr",{className:"text-end",children:[Object(I.jsx)("td",{}),Object(I.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency||""," ",this.props.discountAmmount||""]})]}),Object(I.jsxs)("tr",{className:"text-end",children:[Object(I.jsx)("td",{}),Object(I.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(I.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency||""," ",this.props.total||""]})]})]})}),(null===(r=this.props.info)||void 0===r?void 0:r.notes)&&Object(I.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes||""})]})]}),Object(I.jsx)("div",{className:"pb-4 px-4",children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(v.a,{md:6,children:Object(I.jsxs)(f.a,{variant:"primary",className:"d-block w-100",onClick:q,children:[Object(I.jsx)(g.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Send Invoice"]})}),Object(I.jsx)(v.a,{md:6,children:Object(I.jsxs)(f.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:q,children:[Object(I.jsx)(g.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(I.jsx)("hr",{className:"mt-4 mb-3"})]})}}]),s}(n.a.Component),B=s(43),M=s(37),L=Object(M.b)({name:"invoice",initialState:{invoices:[]},reducers:{addInvoice:function(e,t){var s=Object(m.a)({},t.payload);e.invoices.push(s)},allInvoices:function(e){return e.invoices},editInvoice:function(e,t){var s=t.payload,i=s.id,n=s.updatedInvoice,a=e.invoices.findIndex((function(e){return e.id===i}));-1!==a&&(e.invoices[a]=Object(m.a)(Object(m.a)({},e.invoices[a]),n))},deleteInvoice:function(e,t){e.invoices=e.invoices.filter((function(e){return e.id!==t.payload}))}}}),P=L.actions,U=P.addInvoice,W=P.editInvoice,G=P.deleteInvoice,J=P.allInvoices,Y=L.reducer,$=["currentRoute","isOpen"],Q=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){var i;Object(l.a)(this,s),(i=t.call(this,e)).editField=function(e){i.setState(Object(x.a)({},e.target.name,e.target.value)),i.handleCalculateTotal()},i.onCurrencyChange=function(e){i.setState(e)},i.openModal=function(e){e.preventDefault(),i.handleCalculateTotal(),i.setState({isOpen:!0});var t=i.state,s=(t.currentRoute,t.isOpen,Object(u.a)(t,$));"edit-invoice"===i.state.currentRoute?i.props.editInvoice({id:i.state.id||"",updatedInvoice:s}):i.props.addInvoice(Object(m.a)(Object(m.a)({},s),{},{id:Object(M.c)()}))},i.closeModal=function(e){return i.setState({isOpen:!1})};var n=i.props.invoices;console.log("All Invoices:",n.payload.invoices);var a=window.location.href.split("/")[4],c=n.payload.invoices.find((function(e){return e.id===a}));return i.state={currentRoute:window.location.href.split("/")[3],isOpen:!1,currency:(null===c||void 0===c?void 0:c.currency)||"$",currentDate:(null===c||void 0===c?void 0:c.currentDate)||"",invoiceNumber:(null===c||void 0===c?void 0:c.invoiceNumber)||1,dateOfIssue:(null===c||void 0===c?void 0:c.dateOfIssue)||"",billTo:(null===c||void 0===c?void 0:c.billTo)||"",billToEmail:(null===c||void 0===c?void 0:c.billToEmail)||"",billToAddress:(null===c||void 0===c?void 0:c.billToAddress)||"",billFrom:(null===c||void 0===c?void 0:c.billFrom)||"",billFromEmail:(null===c||void 0===c?void 0:c.billFromEmail)||"",billFromAddress:(null===c||void 0===c?void 0:c.billFromAddress)||"",notes:(null===c||void 0===c?void 0:c.notes)||"",total:(null===c||void 0===c?void 0:c.total)||"0.00",subTotal:(null===c||void 0===c?void 0:c.subTotal)||"0.00",taxRate:(null===c||void 0===c?void 0:c.taxRate)||"",taxAmmount:(null===c||void 0===c?void 0:c.taxAmmount)||"0.00",discountRate:(null===c||void 0===c?void 0:c.discountRate)||"",discountAmmount:(null===c||void 0===c?void 0:c.discountAmmount)||"0.00",id:(null===c||void 0===c?void 0:c.id)||Object(M.c)()},i.state.items=(null===c||void 0===c?void 0:c.items)||[{id:0,name:"",description:"",price:"1.00",quantity:1}],i.editField=i.editField.bind(Object(p.a)(i)),i}return Object(o.a)(s,[{key:"componentDidMount",value:function(e){this.handleCalculateTotal()}},{key:"handleRowDel",value:function(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}},{key:"handleAddEvent",value:function(e){var t=[].concat(Object(b.a)(this.state.items),[{id:Object(M.c)(),name:"",description:"",price:"1.00",quantity:1}]);this.setState({items:t}),this.setState(this.state.items)}},{key:"handleCalculateTotal",value:function(){var e=this,t=this.state.items,s=0;t.map((function(e){s=parseFloat(s+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(s).toFixed(2)},(function(){e.setState({taxAmmount:parseFloat(parseFloat(s)*(e.state.taxRate/100)).toFixed(2)},(function(){e.setState({discountAmmount:parseFloat(parseFloat(s)*(e.state.discountRate/100)).toFixed(2)},(function(){e.setState({total:s-e.state.discountAmmount+parseFloat(e.state.taxAmmount)})}))}))}))}},{key:"onItemizedItemEdit",value:function(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s==t.name&&e.id==t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}},{key:"render",value:function(){var e=this;return Object(I.jsx)(y.a,{onSubmit:this.openModal,children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(v.a,{md:8,lg:9,children:Object(I.jsxs)(N.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(I.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(I.jsxs)("div",{class:"d-flex flex-column",children:[Object(I.jsx)("div",{className:"d-flex flex-column",children:Object(I.jsxs)("div",{class:"mb-2",children:[Object(I.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(I.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(I.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(I.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(I.jsx)(y.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:function(t){return e.editField(t)},style:{maxWidth:"150px"},required:"required"})]})]}),Object(I.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(I.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(I.jsx)(y.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:function(t){return e.editField(t)},min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(I.jsx)("hr",{className:"my-4"}),Object(I.jsxs)(O.a,{className:"mb-5",children:[Object(I.jsxs)(v.a,{children:[Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(I.jsx)(y.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(I.jsx)(y.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(I.jsx)(y.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(I.jsx)(y.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(I.jsx)(y.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(I.jsx)(y.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]})]}),Object(I.jsx)(F,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(I.jsx)(O.a,{className:"mt-4 justify-content-end",children:Object(I.jsxs)(v.a,{lg:6,children:[Object(I.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(I.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(I.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(I.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(I.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(I.jsxs)("span",{children:[Object(I.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(I.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(I.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(I.jsxs)("span",{children:[Object(I.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(I.jsx)("hr",{}),Object(I.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(I.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(I.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(I.jsx)("hr",{className:"my-4"}),Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Notes:"}),Object(I.jsx)(y.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:function(t){return e.editField(t)},as:"textarea",className:"my-2",rows:1})]})}),Object(I.jsx)(v.a,{md:4,lg:3,children:Object(I.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(I.jsx)("div",{className:"d-flex flex-row align-items-center gap-3",children:"edit-invoice"===this.state.currentRoute?Object(I.jsx)(f.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Update and Save"}):Object(I.jsx)(f.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review and Save"})}),Object(I.jsx)(z,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(I.jsxs)(y.a.Group,{className:"mb-3",children:[Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Currency:"}),Object(I.jsxs)(y.a.Select,{onChange:function(t){return e.onCurrencyChange({currency:t.target.value})},className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(I.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(I.jsx)("option",{value:"\xa3",children:"GBP (British Pound Sterling)"}),Object(I.jsx)("option",{value:"\xa5",children:"JPY (Japanese Yen)"}),Object(I.jsx)("option",{value:"$",children:"CAD (Canadian Dollar)"}),Object(I.jsx)("option",{value:"$",children:"AUD (Australian Dollar)"}),Object(I.jsx)("option",{value:"$",children:"SGD (Signapore Dollar)"}),Object(I.jsx)("option",{value:"\xa5",children:"CNY (Chinese Renminbi)"}),Object(I.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(I.jsxs)(y.a.Group,{className:"my-3",children:[Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(I.jsxs)(C.a,{className:"my-1 flex-nowrap",children:[Object(I.jsx)(y.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(I.jsx)(C.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(I.jsxs)(y.a.Group,{className:"my-3",children:[Object(I.jsx)(y.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(I.jsxs)(C.a,{className:"my-1 flex-nowrap",children:[Object(I.jsx)(y.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(I.jsx)(C.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}]),s}(n.a.Component),H={addInvoice:U,editInvoice:W},V=Object(B.b)((function(e){return{invoices:J(e)}}),H)(Q),X=function(){return Object(I.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(I.jsx)(h.a,{children:Object(I.jsx)(V,{})})})},K=s(8),Z=s(114),_=s(113),ee=s(46),te=s(84),se=s(85),ie=s(83),ne=s(86);var ae=function(){var e,t,s,n,a,c,l=Object(B.d)(J).payload,o=Object(B.c)(),r=Object(j.n)(),d=Object(i.useState)(!1),h=Object(K.a)(d,2),b=h[0],u=h[1],x=Object(i.useState)(),p=Object(K.a)(x,2),O=p[0],v=p[1];return console.log("All Invoices:",l.invoices),Object(I.jsxs)("div",{className:"App d-flex flex-column justify-content-start w-75 mt-5",children:[Object(I.jsx)(z,{showModal:b,closeModal:function(e){return u(!1)},info:l.invoices[O],items:null===(e=l.invoices[O])||void 0===e?void 0:e.items,currency:null===(t=l.invoices[O])||void 0===t?void 0:t.currency,subTotal:null===(s=l.invoices[O])||void 0===s?void 0:s.subTotal,taxAmmount:null===(n=l.invoices[O])||void 0===n?void 0:n.taxAmmount,discountAmmount:null===(a=l.invoices[O])||void 0===a?void 0:a.discountAmmount,total:null===(c=l.invoices[O])||void 0===c?void 0:c.total}),Object(I.jsxs)("div",{className:"d-flex justify-content-between my-3",children:[Object(I.jsx)("h3",{children:"#Invoices"}),Object(I.jsxs)(f.a,{variant:"primary",className:"d-flex gap-2 align-items-center fw-bold",onClick:function(){return r("/create-invoice")},children:[Object(I.jsx)(ie.a,{size:20}),"Create new Invoice"]})]}),Object(I.jsxs)(w.a,{stripped:!0,hover:!0,size:"sm",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"200",className:"p-3",children:"Invoice No"}),Object(I.jsx)("th",{width:"170",className:"p-3",children:"Billing to"}),Object(I.jsx)("th",{width:"170",className:"p-3",children:"Date"}),Object(I.jsx)("th",{width:"150",className:"p-3",children:"Amount"}),Object(I.jsx)("th",{width:"300",className:"p-3",children:"Action"})]})}),Object(I.jsx)("tbody",{children:l.invoices.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{className:"p-3 no-border",children:["#",null===e||void 0===e?void 0:e.invoiceNumber]}),Object(I.jsx)("td",{className:"p-3 no-border",children:null===e||void 0===e?void 0:e.billTo}),Object(I.jsx)("td",{className:"p-3 no-border",children:null===e||void 0===e?void 0:e.dateOfIssue}),Object(I.jsx)("td",{className:"p-3 no-border",children:null===e||void 0===e?void 0:e.subTotal}),Object(I.jsxs)("td",{className:"p-3 no-border d-flex gap-3",children:[Object(I.jsx)(Z.a,{delay:{hide:200,show:100},overlay:function(e){return Object(I.jsx)(_.a,Object(m.a)(Object(m.a)({},e),{},{children:"View"}))},placement:"bottom",children:Object(I.jsx)(f.a,{className:"text-white btn btn-success",onClick:function(){return function(e,t){u(t),v(e)}(t,!0)},children:Object(I.jsx)(te.a,{size:17,className:"cursor"})})}),Object(I.jsx)(Z.a,{delay:{hide:200,show:100},overlay:function(e){return Object(I.jsx)(_.a,Object(m.a)(Object(m.a)({},e),{},{children:"Edit"}))},placement:"bottom",children:Object(I.jsx)(ee.b,{to:"/edit-invoice/".concat(e.id),children:Object(I.jsx)(f.a,{children:Object(I.jsx)(se.a,{size:16})})})}),Object(I.jsx)(Z.a,{delay:{hide:200,show:100},overlay:function(e){return Object(I.jsx)(_.a,Object(m.a)(Object(m.a)({},e),{},{children:"Create new invoice from this"}))},placement:"bottom",children:Object(I.jsx)(ee.b,{to:"/create-new-from-existing/".concat(e.id),children:Object(I.jsx)(f.a,{children:Object(I.jsx)(ne.a,{size:20})})})}),Object(I.jsx)(Z.a,{delay:{hide:200,show:100},overlay:function(e){return Object(I.jsx)(_.a,Object(m.a)(Object(m.a)({},e),{},{children:"Delete"}))},placement:"bottom",children:Object(I.jsx)(f.a,{className:"text-white btn btn-danger",onClick:function(){return o(G(e.id))},children:Object(I.jsx)(g.c,{size:18})})})]})]},e.id)}))})]})]})},ce=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(I.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(I.jsxs)(j.c,{children:[Object(I.jsx)(j.a,{exact:!0,path:"/",element:Object(I.jsx)(ae,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/create-invoice",element:Object(I.jsx)(X,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/edit-invoice/:id",element:Object(I.jsx)(X,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/create-new-from-existing/:id",element:Object(I.jsx)(X,{})})]})})}}]),s}(i.Component),le=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,502)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),i(e),n(e),a(e),c(e)}))},oe=Object(M.a)({reducer:Y});c.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(B.a,{store:oe,children:Object(I.jsx)(ee.a,{children:Object(I.jsx)(ce,{})})})}),document.getElementById("root")),le()},95:function(e,t,s){},96:function(e,t,s){}},[[105,1,3]]]);
//# sourceMappingURL=main.43532835.chunk.js.map
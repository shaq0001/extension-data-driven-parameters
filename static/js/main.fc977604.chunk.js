(this["webpackJsonpdata-driven-parameters"]=this["webpackJsonpdata-driven-parameters"]||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(16),s=a(17),l=a(19),i=a(18),r=(a(85),a(0)),o=a(80),c=a(2),u=a(83),d=a(11),m=a(37),h=a(1),p=function(e){return r.createElement("div",{className:"selected"},r.createElement("p",null,r.createElement("i",null,"The ",e.selecting," ",r.createElement("b",null,e.selected)," has been selected")),r.createElement(h.Button,{onClick:e.onClear,style:{visibility:e.nextConfig?"hidden":"visible",marginLeft:"12px"}},"Clear"))};p.displayName="Selected";var f=function(e){var t={className:"dropdown-select",disabled:!e.enabled,kind:"line",onChange:e.onChange,onSelect:e.onChange,value:e.selected},a={disabled:!e.enabled||""===e.selected,kind:"filledGreen",onClick:e.onClick,style:{marginLeft:"12px"}};return r.createElement("div",{className:"selector"},r.createElement(h.DropdownSelect,t,e.list.map((function(e){return r.createElement("option",{key:e},e)}))),r.createElement(h.Button,a,"Set"))};f.displayName="Selector";var g=function(e){return r.createElement(r.Fragment,null,r.createElement("span",null,"Select a ",e.selecting),function(e){var t=e.config,a=e.enabled,n=e.list,s=e.nextConfig,l=e.onChange,i=e.onClear,o=e.onClick,c=e.selected,u=e.selecting;return t?r.createElement(p,{nextConfig:s,onClear:i,selected:c,selecting:u}):r.createElement(f,{enabled:a,list:n,onChange:l,onClick:o,selected:c})}(e))};g.displayName="Setting";var y=window.tableau,b="Loading...",v=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={allLabel:"(All)",applyButton:!1,applyButtonLabel:"Apply",autoUpdate:!1,bg:"#ffffff",configured:!1,dataType:"string",delimiter:"|",displayField:"",field:"",field_config:!1,field_enabled:!1,field_list:[],updateOnSelectionFix:!1,includeAllValue:!1,listenParam:!1,listenParamName:"",listenParamList:[],matchParam:!1,multiselect:!1,param_config:!1,param_enabled:!1,param_list:[],parameter:"",selectedTabIndex:0,showDisplayValues:!1,sort:"asc",txt:"#333333",updateOnChange:!1,useFormattedValues:!1,worksheet:"",ws_config:!1,ws_enabled:!1,ws_list:[]},e.bgChange=function(t){e.setState({bg:t.target.value})},e.txtChange=function(t){e.setState({txt:t.target.value})},e.paramChange=function(t){e.setState({parameter:t.target.value},e.listenParameter)},e.fieldChange=function(t){e.setState({field:t.target.value})},e.wsChange=function(t){e.setState({worksheet:t.target.value})},e.sortChange=function(t){e.setState({sort:t.target.value})},e.textInputChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.checkboxChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.checked))},e.listInputChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.tabChange=function(t){e.setState({selectedTabIndex:t})},e.setParam=function(){var t=y.extensions.dashboardContent.dashboard;""!==e.state.parameter&&t.findParameterAsync(e.state.parameter).then((function(t){e.setState({dataType:t.dataType,includeAllValue:"string"===t.dataType&&e.state.includeAllValue,multiselect:"string"===t.dataType&&e.state.multiselect,param_config:!0}),e.populateWS()}))},e.clearParam=function(){e.setState({param_config:!1,param_enabled:!0,ws_enabled:!1}),e.populateParamList()},e.setWS=function(){""!==e.state.worksheet&&(e.setState({ws_config:!0}),e.populateFieldList())},e.clearWS=function(){e.setState({field_enabled:!1,ws_config:!1,ws_enabled:!0}),e.populateWS()},e.setField=function(){var t=y.extensions.dashboardContent.dashboard;""!==e.state.field&&e.setState({configured:!0,field_config:!0}),t.worksheets.find((function(t){return t.name===e.state.worksheet})).getSummaryDataAsync().then((function(t){var a,n=[],s=Object(d.a)(t.columns);try{for(s.s();!(a=s.n()).done;){var l=a.value;n.push(l.fieldName)}}catch(i){s.e(i)}finally{s.f()}n.sort(),e.setState({displayField:n[0],field_list:n})}))},e.clearField=function(){e.setState({configured:!1,field_config:!1,field_enabled:!0}),e.populateFieldList()},e.submit=function(){y.extensions.settings.set("allLabel",e.state.allLabel),y.extensions.settings.set("applyButton",e.state.applyButton&&e.state.multiselect),y.extensions.settings.set("applyButtonLabel",e.state.applyButtonLabel),y.extensions.settings.set("autoUpdate",e.state.autoUpdate),y.extensions.settings.set("bg",e.state.bg),y.extensions.settings.set("configured","true"),y.extensions.settings.set("dataType",e.state.dataType||"string"),y.extensions.settings.set("delimiter",e.state.delimiter),y.extensions.settings.set("displayField",e.state.displayField),y.extensions.settings.set("includeAllValue",e.state.includeAllValue&&"string"===e.state.dataType),y.extensions.settings.set("listenParam",e.state.listenParam),y.extensions.settings.set("listenParamName",e.state.listenParamName||""),y.extensions.settings.set("matchParam",e.state.matchParam),y.extensions.settings.set("multiselect",e.state.multiselect&&"string"===e.state.dataType),y.extensions.settings.set("selField",e.state.field),y.extensions.settings.set("selParam",e.state.parameter),y.extensions.settings.set("selWorksheet",e.state.worksheet),y.extensions.settings.set("showDisplayValues",e.state.showDisplayValues),y.extensions.settings.set("sort",e.state.sort),y.extensions.settings.set("txt",e.state.txt),y.extensions.settings.set("updateOnChange",e.state.updateOnChange),y.extensions.settings.set("updateOnSelectionFix",e.state.updateOnSelectionFix),y.extensions.settings.set("useFormattedValues",e.state.useFormattedValues&&"string"===e.state.dataType),y.extensions.settings.saveAsync().then((function(){y.extensions.ui.closeDialog(e.state.worksheet)}))},e.clearSettings=function(){e.setState({configured:!1,displayField:"",field:"",field_config:!1,field_enabled:!1,field_list:[],param_config:!1,param_list:[],parameter:"",showDisplayValues:!1,worksheet:"",ws_config:!1,ws_enabled:!1,ws_list:[]}),e.populateParamList()},e}return Object(s.a)(a,[{key:"testParamSettings",value:function(){var e=this,t=y.extensions.dashboardContent.dashboard,a=y.extensions.settings.getAll();this.state.configured?t.findParameterAsync(a.selParam).then((function(t){t&&"all"===t.allowableValues.type?(e.setState({dataType:t.dataType,param_config:!0,parameter:t.name},e.listenParameter),e.testWSSettings()):(e.populateParamList(),e.setState({configured:!1}))})):this.populateParamList()}},{key:"populateParamList",value:function(){var e=this,t=y.extensions.dashboardContent.dashboard;this.setState({param_list:[b],parameter:b}),t.getParametersAsync().then((function(t){var a,n=[],s=Object(d.a)(t);try{for(s.s();!(a=s.n()).done;){var l=a.value;"all"===l.allowableValues.type&&n.push(l.name)}}catch(i){s.e(i)}finally{s.f()}n.sort(),n.length>0?e.setState({param_enabled:!0,param_list:n,parameter:n[0]},e.listenParameter):e.setState({param_enabled:!1,param_list:["No open input parameters found!"],parameter:"No open input parameters found!"})}))}},{key:"testWSSettings",value:function(){var e=y.extensions.dashboardContent.dashboard,t=y.extensions.settings.getAll();this.state.configured?e.worksheets.find((function(e){return e.name===t.selWorksheet}))?(this.setState({worksheet:t.selWorksheet,ws_config:!0,ws_enabled:!1}),this.testFieldSettings()):(this.populateWS(),this.setState({configured:!1})):this.populateWS()}},{key:"populateWS",value:function(){var e=y.extensions.dashboardContent.dashboard;this.setState({worksheet:b,ws_list:[b]});var t,a=[],n=Object(d.a)(e.worksheets);try{for(n.s();!(t=n.n()).done;){var s=t.value;a.push(s.name)}}catch(l){n.e(l)}finally{n.f()}a.sort(),a.length>0?this.setState({worksheet:a[0],ws_enabled:!0,ws_list:a}):this.setState({worksheet:"No worksheets found!",ws_enabled:!1,ws_list:["No worksheets found!"]})}},{key:"testFieldSettings",value:function(){var e=this,t=y.extensions.dashboardContent.dashboard,a=y.extensions.settings.getAll();this.state.configured?t.worksheets.find((function(t){return t.name===e.state.worksheet})).getSummaryDataAsync().then((function(t){if(t.columns.find((function(e){return e.fieldName===a.selField}))){var n,s=[],l=Object(d.a)(t.columns);try{for(l.s();!(n=l.n()).done;){var i=n.value;s.push(i.fieldName)}}catch(r){l.e(r)}finally{l.f()}s.sort(),e.setState({configured:!0,field:a.selField,field_config:!0,field_enabled:!1,field_list:s})}else e.populateFieldList(),e.setState({configured:!1})})):this.populateFieldList()}},{key:"populateFieldList",value:function(){var e,t=this,a=y.extensions.dashboardContent.dashboard;this.setState({field:b,field_list:[b]}),a.findParameterAsync(this.state.parameter).then((function(n){return e=n.dataType,a.worksheets.find((function(e){return e.name===t.state.worksheet})).getSummaryDataAsync()})).then((function(a){var n,s=[],l=Object(d.a)(a.columns);try{for(l.s();!(n=l.n()).done;){var i=n.value;i.dataType===e&&s.push(i.fieldName)}}catch(r){l.e(r)}finally{l.f()}s.sort(),s.length>0?t.setState({field:s[0],field_enabled:!0,field_list:s}):t.setState({field:"No fields found that match parameter!",field_enabled:!1,field_list:["No fields found that match parameter!"]})}))}},{key:"listenParameter",value:function(){var e=this;y.extensions.dashboardContent.dashboard.getParametersAsync().then((function(t){var a,n=[],s=Object(d.a)(t);try{for(s.s();!(a=s.n()).done;){var l=a.value;l.name!==e.state.parameter&&n.push(l.name)}}catch(i){s.e(i)}finally{s.f()}n.sort(),e.setState({listenParamList:n,listenParamName:n.includes(e.state.listenParamName)?e.state.listenParamName:n[0]})}))}},{key:"componentWillMount",value:function(){var e=this;y.extensions.initializeDialogAsync().then((function(){var t=y.extensions.settings.getAll();"true"===t.configured?(e.setState({allLabel:t.allLabel||"(All)",applyButton:"true"===t.applyButton||!1,applyButtonLabel:t.applyButtonLabel||"Apply",autoUpdate:"true"===t.autoUpdate||!1,bg:t.bg||"#ffffff",configured:!0,dataType:t.dataType,delimiter:t.delimiter||"|",displayField:t.displayField||"",includeAllValue:"true"===t.includeAllValue||!1,listenParam:"true"===t.listenParam||!1,listenParamName:t.listenParamName||"",matchParam:"true"===t.matchParam||!1,multiselect:"true"===t.multiselect||!1,showDisplayValues:"true"===t.showDisplayValues||!1,sort:t.sort||"asc",txt:t.txt||"#333333",updateOnChange:"true"===t.updateOnChange||!1,updateOnSelectionFix:!t.updateOnSelectionFix||("true"===t.updateOnSelectionFix||!1),useFormattedValues:"true"===t.useFormattedValues||!1}),e.testParamSettings()):e.populateParamList()}))}},{key:"render",value:function(){var e=[r.createElement("div",{className:"content"},r.createElement(g,{selecting:"parameter",onClick:this.setParam,onClear:this.clearParam,config:this.state.param_config,nextConfig:this.state.ws_config,selected:this.state.parameter,enabled:this.state.param_enabled&&!this.state.param_config,list:this.state.param_list,onChange:this.paramChange}),r.createElement(g,{selecting:"worksheet",onClick:this.setWS,onClear:this.clearWS,config:this.state.ws_config,nextConfig:this.state.field_config,selected:this.state.worksheet,enabled:this.state.ws_enabled,list:this.state.ws_list,onChange:this.wsChange}),r.createElement(g,{selecting:"field",onClick:this.setField,onClear:this.clearField,config:this.state.field_config,selected:this.state.field,enabled:this.state.field_enabled,list:this.state.field_list,onChange:this.fieldChange})),r.createElement("div",{className:"content"},r.createElement("div",{className:"option"},"Sorting:",r.createElement(h.Radio,{checked:"asc"===this.state.sort,onChange:this.sortChange,name:"sorting",value:"asc",style:{margin:"0px 12px"}},"Ascending (A-Z)"),r.createElement(h.Radio,{checked:"desc"===this.state.sort,onChange:this.sortChange,name:"sorting",value:"desc",style:{margin:"0px 12px"}},"Descending (Z-A)")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"updateOnSelectionFix",checked:this.state.updateOnSelectionFix,onChange:this.checkboxChange,style:{flexGrow:1}},"Filter list based on worksheet selections")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"autoUpdate",checked:this.state.autoUpdate,onChange:this.checkboxChange,style:{flexGrow:1}},"Automatically reset values on dashboard load.")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"updateOnChange",disabled:this.state.multiselect,checked:this.state.updateOnChange,onChange:this.checkboxChange,style:{flexGrow:1}},"Update list of values after selection is made. (Dropdown only)")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"matchParam",checked:this.state.matchParam,onChange:this.checkboxChange,style:{flexGrow:1}},"Update selection if source parameter changes.")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"listenParam",disabled:!this.state.param_config,checked:this.state.listenParam,onChange:this.checkboxChange,style:{marginRight:"10px"}},"Update list when a parameter changes."),r.createElement("div",{style:{display:"flex",width:"150px"}},r.createElement(h.DropdownSelect,{name:"listenParamName",className:"dropdown-select",disabled:!this.state.listenParam||!this.state.param_config,kind:"line",onChange:this.listInputChange,value:this.state.listenParamName,style:{flexGrow:1}},this.state.listenParamList.map((function(e){return r.createElement("option",{key:e},e)}))))),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"showDisplayValues",disabled:!this.state.field_config,checked:this.state.showDisplayValues,onChange:this.checkboxChange,style:{marginRight:"10px"}},"Use different field for display values"),r.createElement("div",{style:{display:"flex",width:"150px"}},r.createElement(h.DropdownSelect,{name:"displayField",className:"dropdown-select",disabled:!this.state.showDisplayValues||!this.state.field_config,kind:"line",onChange:this.listInputChange,value:this.state.displayField,style:{flexGrow:1}},this.state.field_list.map((function(e){return r.createElement("option",{key:e},e)}))))),r.createElement("div",{className:"option"},r.createElement("p",null,r.createElement("i",null,"For use with string parameters only:"))),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"useFormattedValues",disabled:"string"!==this.state.dataType,checked:this.state.useFormattedValues&&"string"===this.state.dataType,onChange:this.checkboxChange,style:{flexGrow:1}},"Use aliased values")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"includeAllValue",disabled:"string"!==this.state.dataType,checked:this.state.includeAllValue&&"string"===this.state.dataType,onChange:this.checkboxChange,style:{marginRight:"10px"}},'Include "(All)" in parameter list'),r.createElement("span",{children:"Label:",style:{marginRight:"5px",color:"string"===this.state.dataType&&this.state.includeAllValue?"inherit":"rgba(0, 0, 0, 0.35)"}}),r.createElement(h.TextField,{name:"allLabel",kind:"line",onChange:this.textInputChange,className:"delimiter-text-field",value:this.state.allLabel,disabled:"string"!==this.state.dataType||!this.state.includeAllValue,maxLength:20,style:{width:150}})),r.createElement("p",{style:{marginLeft:"20px"}},r.createElement("i",null,"Note: This is only a placeholder for calculations.")),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"multiselect",disabled:"string"!==this.state.dataType,checked:this.state.multiselect&&"string"===this.state.dataType,onChange:this.checkboxChange,style:{marginRight:"10px"}},"Allow for multiple selections."),r.createElement("span",{children:"Delimiter:",style:{marginRight:"5px",color:this.state.multiselect?"inherit":"rgba(0, 0, 0, 0.35)"}}),r.createElement(h.TextField,{name:"delimiter",kind:"line",onChange:this.textInputChange,className:"delimiter-text-field",value:this.state.delimiter,disabled:!this.state.multiselect||"string"!==this.state.dataType,maxLength:1,style:{width:20}})),r.createElement("div",{className:"option"},r.createElement(h.Checkbox,{name:"applyButton",disabled:!this.state.multiselect,checked:this.state.applyButton&&this.state.multiselect,onChange:this.checkboxChange,style:{marginRight:"10px"}},"Show apply button."),r.createElement("span",{children:"Label:",style:{marginRight:"5px",color:this.state.multiselect&&this.state.applyButton?"inherit":"rgba(0, 0, 0, 0.35)"}}),r.createElement(h.TextField,{name:"applyButtonLabel",kind:"line",onChange:this.textInputChange,className:"delimiter-text-field",value:this.state.applyButtonLabel,disabled:!this.state.multiselect||!this.state.applyButton,maxLength:20,style:{width:150}}))),r.createElement("div",{className:"content"},r.createElement("div",{className:"format"},r.createElement("div",{className:"formattext"},"Background Color"),r.createElement("div",null,r.createElement("input",{type:"color",value:this.state.bg,onChange:this.bgChange,style:{backgroundColor:this.state.bg}}))),r.createElement("div",{className:"format"},r.createElement("div",{className:"formattext"},"Text Color"),r.createElement("div",null,r.createElement("input",{type:"color",value:this.state.txt,onChange:this.txtChange,style:{backgroundColor:this.state.txt}}))))];return r.createElement(r.Fragment,null,r.createElement("div",{className:"container"},r.createElement("div",null,r.createElement("div",{className:"header"},"Data-Driven Parameter Configuration",r.createElement("div",{className:"tooltip"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Dialogs_x5F_Info",width:"15",height:"15",viewBox:"0 0 15 15"},r.createElement("rect",{id:"Line",x:"7",y:"6",width:"1",height:"5",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),r.createElement("rect",{id:"Dot_2_",x:"7",y:"4",width:"1",height:"1",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),r.createElement("path",{id:"Circle",d:"M7.5,1C3.9,1,1,3.9,1,7.5S3.9,14,7.5,14 S14,11.1,14,7.5S11.1,1,7.5,1z M7.5,13C4.5,13,2,10.5,2,7.5C2,4.5,4.5,2,7.5,2S13,4.5,13,7.5C13,10.5,10.5,13,7.5,13z",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"})),r.createElement("span",{className:"tooltiptext"},r.createElement("b",null,"How to Use"),r.createElement("ol",null,r.createElement("li",null,'Select a Tableau parameter to manipulate. This parameter must already exists and must allow "all" values.'),r.createElement("li",null,"Select a worksheet with the data you want to use in your parameter."),r.createElement("li",null,"Select a field to use to populate the parameter. Field data type must match the data type of parameter.")),r.createElement("br",null),r.createElement("p",null,"Note: Mac Desktop 2018.3 and lower, please use arrow keys and 'Enter' to select options")))),r.createElement("div",{className:"tabs"},r.createElement(h.Tabs,{activation:"automatic",alignment:"left",onTabChange:this.tabChange,selectedTabIndex:this.state.selectedTabIndex,tabs:[{content:"Configure"},{content:"Options"},{content:"Formatting"}]},e[this.state.selectedTabIndex]))),r.createElement("div",{className:"footer"},r.createElement("div",{className:"btncluster"},r.createElement(h.Button,{onClick:this.clearSettings,style:{marginRight:"auto"}},"Clear Settings"),r.createElement(h.Button,{kind:"filledGreen",onClick:this.submit,disabled:!this.state.configured||!this.state.ws_config,style:{marginLeft:"12px"}},"OK")))))}}]),a}(r.Component),x=a(56),C=a.n(x),E=a(81),k=(a(143),window.tableau),w=[function(){},function(){},function(){},function(){}],S={value:"Parameter needs configuration",displayValue:"Parameter needs configuration"},P={value:"Loading...",displayValue:"Loading..."};function N(e){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{b:parseInt(t[3],16),g:parseInt(t[2],16),r:parseInt(t[1],16)}:null}(e);return t?"rgb(".concat(Math.min(Math.floor(t.r/2)+127,255),", ").concat(Math.min(Math.floor(t.g/2)+127,255),", ").concat(Math.min(Math.floor(t.b/2)+127,255),")"):"#ffffff"}var V=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={allLabel:"Apply",applyButton:!1,applyButtonLabel:"(All)",bg:"#ffffff",configured:!1,currentVal:[P],disabled:!0,firstInit:!0,list:[P],multiselect:!1},e.configure=function(){var t="".concat(window.location.origin).concat("/extension-data-driven-parameters","/#/config");k.extensions.ui.displayDialogAsync(t,"",{height:610,width:450}).then((function(t){e.setup()})).catch((function(t){switch("true"!==k.extensions.settings.get("configured")&&e.setState({currentVal:[S],disabled:!0,list:[S]}),t.errorCode){case k.ErrorCodes.DialogClosedByUser:console.log("Dialog was closed by user.");break;default:console.error(t.message)}}))},e.getParamData=function(){var t=k.extensions.settings.getAll(),a=k.extensions.dashboardContent.dashboard.worksheets.find((function(e){return e.name===t.selWorksheet}));a?a.getSummaryDataAsync({ignoreSelection:"true"===t.ignoreSelection}).then((function(t){e.populateParam(t)})):e.setState({currentVal:[S],disabled:!0,list:[S]})},e.setCurrentValue=function(){var t=k.extensions.settings.getAll(),a=k.extensions.dashboardContent.dashboard,n=e.state.list,s=[];a.findParameterAsync(t.selParam).then((function(a){if(e.state.firstInit&&"true"===t.autoUpdate)s=["true"===t.includeAllValue?n[1].value:n[0].value];else{if("true"===t.multiselect){var l,i=[],r=Object(d.a)(a.currentValue.value.split(t.delimiter));try{var o=function(){var e=l.value;n.find((function(t){return t.value.toString()===e||t.value===e}))&&i.push(e)};for(r.s();!(l=r.n()).done;)o()}catch(c){r.e(c)}finally{r.f()}s=i}else n.find((function(e){return e.value.toString()===a.currentValue.value||e.value===a.currentValue.value}))&&(s=[a.currentValue.value]);0===s.length&&(s=["true"===t.includeAllValue?n[1].value:n[0].value])}a.changeValueAsync(t.multiselect?s.join(t.delimiter):s.toString()).then(console.log),e.setState({disabled:!1,firstInit:!1,currentVal:s})}))},e.matchListener=function(){var t=k.extensions.settings.getAll();k.extensions.dashboardContent.dashboard.findParameterAsync(t.selParam).then((function(a){var n=e.state.multiselect?a.currentValue.value.split(t.delimiter):[a.currentValue.value];e.setState({currentVal:n})}))},e.updateParam=function(t){var a,n,s=k.extensions.settings.getAll(),l=k.extensions.dashboardContent.dashboard,i=[],r=Object(d.a)(t.target.options);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.selected&&i.push(o.value)}}catch(c){r.e(c)}finally{r.f()}e.setState({currentVal:i}),a=i.join(s.delimiter),l.findParameterAsync(s.selParam).then((function(t){t?"false"===s.applyButton&&t.changeValueAsync(a).then(console.log):e.setState({currentVal:[S],disabled:!0,list:[S]}),"true"===s.updateOnChange&&(e.state.multiselect||e.getParamData())}))},e.apply=function(){var t=k.extensions.settings.getAll();k.extensions.dashboardContent.dashboard.findParameterAsync(t.selParam).then((function(a){a.changeValueAsync(e.state.currentVal.join(t.delimiter)).then(console.log)}))},e}return Object(s.a)(a,[{key:"findParameter",value:function(){var e=this,t=k.extensions.settings.getAll();k.extensions.dashboardContent.dashboard.findParameterAsync(t.selParam).then((function(t){t&&"all"===t.allowableValues.type?(e.getParamData(),e.resetListeners()):e.setState({currentVal:[S],disabled:!0,list:[S]})}))}},{key:"populateParam",value:function(e){var t=k.extensions.settings.getAll(),a=e.columns.find((function(e){return e.fieldName===t.selField}));this.setState({currentVal:[P],disabled:!0,list:[P]}),a?this.createList(a,e):this.setState({currentVal:[S],disabled:!0,list:[S]})}},{key:"createList",value:function(e,t){var a,n=k.extensions.settings.getAll(),s=t.columns.find((function(e){return e.fieldName===n.displayField})),l=[],i=Object(d.a)(t.data);try{for(i.s();!(a=i.n()).done;){var r=a.value,o="true"===n.useFormattedValues?r[e.index].formattedValue:r[e.index].value,c=o;s&&"true"===n.showDisplayValues&&(c=r[s.index].formattedValue),l.push({displayValue:c,value:o})}}catch(u){i.e(u)}finally{i.f()}l=l.filter((function(e,t,a){return a.indexOf(a.find((function(t){return t.value===e.value})))===t})),!n.dataType||"int"!==n.dataType&&"float"!==n.dataType?n.sort&&"desc"===n.sort?l.sort((function(e,t){return e.value<t.value?1:-1})):l.sort((function(e,t){return e.value>t.value?1:-1})):(l=l.map((function(e){return{value:Number(e.value),displayValue:e.displayValue}})),n.sort&&"desc"===n.sort?l.sort((function(e,t){return t.value-e.value})):l.sort((function(e,t){return e.value-t.value})),"float"===n.dataType&&(l=l.map((function(e){return{value:e.value.toLocaleString(k.extensions.environment.locale),displayValue:e.displayValue}})))),"true"===n.includeAllValue&&l.unshift({value:this.state.allLabel,displayValue:this.state.allLabel}),this.setState({list:l},this.setCurrentValue)}},{key:"registerListeners",value:function(){var e=Object(E.a)(C.a.mark((function e(){var t,a,n,s=this;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=k.extensions.settings.getAll(),a=k.extensions.dashboardContent.dashboard,n=a.worksheets.find((function(e){return e.name===t.selWorksheet})),a.findParameterAsync(t.selParam).then((function(e){n&&e?(t.updateOnSelectionFix&&"true"!==t.updateOnSelectionFix||(w[0]=n.addEventListener(k.TableauEventType.FilterChanged,s.getParamData),w[1]=n.addEventListener(k.TableauEventType.MarkSelectionChanged,s.getParamData)),"true"===t.matchParam&&(w[2]=e.addEventListener(k.TableauEventType.ParameterChanged,s.matchListener)),"true"===t.listenParam&&a.findParameterAsync(t.listenParamName).then((function(e){w[3]=e.addEventListener(k.TableauEventType.ParameterChanged,s.getParamData)}))):s.setState({currentVal:[S],disabled:!0,list:[S]})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"resetListeners",value:function(){var e,t=Object(d.a)(w);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(a){t.e(a)}finally{t.f()}this.registerListeners()}},{key:"setup",value:function(){var e=k.extensions.settings.getAll();document.body.style.backgroundColor=e.bg,document.body.style.color=e.txt,this.setState({allLabel:e.allLabel||"(All)",applyButton:"true"===e.applyButton||!1,applyButtonLabel:e.applyButtonLabel||"Apply",bg:e.bg?N(e.bg):"#ffffff",configured:!0,multiselect:"true"===e.multiselect||!1}),this.findParameter()}},{key:"componentWillMount",value:function(){var e=this;k.extensions.initializeAsync({configure:this.configure}).then((function(){"true"===k.extensions.settings.getAll().configured?e.setup():(e.setState({currentVal:[S],disabled:!0,list:[S]}),e.configure())}))}},{key:"render",value:function(){var e=r.createElement("div",{style:{flexDirection:"column"}},r.createElement("select",{multiple:!0,id:"multi-select-parameter",className:"parameter",value:this.state.currentVal,onChange:this.updateParam,disabled:this.state.disabled,style:{backgroundColor:this.state.bg,color:"inherit"}},this.state.list.map((function(e){return r.createElement("option",{key:e.value||e.value,value:e.value},e.displayValue)}))),r.createElement(h.Button,{kind:"filled",onClick:this.apply,style:{display:this.state.applyButton?"block":"none",marginTop:"6px",width:"60px",height:"20px",marginLeft:"auto"}},this.state.applyButtonLabel)),t=r.createElement("div",null,r.createElement(h.DropdownSelect,{id:"single-select-parameter",className:"singleParameter",disabled:this.state.disabled||this.state.multiselect,kind:"outline",onChange:this.updateParam,value:this.state.currentVal[0],style:{backgroundColor:this.state.bg,color:"inherit",fontSize:"11px"}},this.state.list.map((function(e){return r.createElement("option",{key:e.value,value:e.value},e.displayValue)}))));return r.createElement(r.Fragment,null,this.state.multiselect?e:t)}}]),a}(r.Component),_=(a(144),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"icontainer"},r.createElement("div",{className:"box"},r.createElement("div",{className:"left"},r.createElement("h1",{className:"iheader"},"Data-Driven Parameters"),r.createElement("span",{className:"tagline"},"Automatically update your parameters based on your data!")),r.createElement("div",{className:"right"},r.createElement("h4",{className:"big"},"What is it?"),r.createElement("p",null,"This extension allows you to add a parameter to a Tableau dashboard whose domain is based on your data. Added a new product line? No longer do you need to manually edit the parameter to update it, with this extension your parameter values update automatically!"),r.createElement("h4",{className:"big"},"Using the Extension"),r.createElement("ol",null,r.createElement("li",null,"Create an open input (All) parameter with a data type matching the field you want to use to populate it."),r.createElement("li",null,"Drag in a new Extension object to your dashboard."),r.createElement("li",null,"Find the manifest (.trex) file you downloaded above."),r.createElement("li",null,"Select the parameter you created above for the extension to manipulate."),r.createElement("li",null,"Select the worksheet that holds the field you want to base your parameter on."),r.createElement("li",null,"Select the field you want to base your parameter on."),r.createElement("li",null,"Optional: Configure your text and background colors."),r.createElement("li",null,"Click 'OK'.")),r.createElement("p",null,r.createElement("b",null,"Note:")," You can add as many instances of this extension as you like!"),r.createElement("div",{className:"gh"},"Get this extension and more in the ",r.createElement("a",{href:"https://extensiongallery.tableau.com/"},"Extension Gallery"),".")))))}}]),a}(r.Component)),A=function(){return r.createElement(r.Fragment,null,r.createElement(c.a,{path:"/",exact:!0,component:_}),r.createElement(c.a,{path:"/parameter",component:V}),r.createElement(c.a,{path:"/config",component:v}))},L=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.createElement(u.a,null,r.createElement(A,null))}}]),a}(r.Component);o.render(r.createElement(L,null),document.getElementById("container"))},84:function(e,t,a){e.exports=a(149)}},[[84,1,2]]]);
//# sourceMappingURL=main.fc977604.chunk.js.map
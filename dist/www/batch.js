!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2);e.writeBatchLog=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=["[Batch]"].concat(Array.prototype.slice.call(arguments,1));!0===a.Consts.DevelopmentMode&&!0===t?console.debug.apply(console,i):!1===t&&console.log.apply(console,i)},e.sendToBridge=function(t,e,n){cordova.exec(t||function(){},function(){},a.Consts.BatchPluginName,"BA_"+e,null!=n?n:[{}])},e.isString=function(t){return t instanceof String||"string"==typeof t},e.isNumber=function(t){return t instanceof Number||"number"==typeof t&&!isNaN(t)},e.isBoolean=function(t){return t instanceof Boolean||"boolean"==typeof t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.SetConfig="setConfig",t.Start="start",t.OptIn="optIn",t.OptOut="optOut",t.OptOutWipeData="optOutAndWipeData"}(e.Core||(e.Core={})),function(t){t.GetLastKnownPushToken="push.getLastKnownPushToken",t.SetIOSNotifTypes="push.setIOSNotifTypes",t.SetAndroidNotifTypes="push.setAndroidNotifTypes",t.Register="push.register",t.DismissNotifications="push.dismissNotifications",t.ClearBadge="push.clearBadge"}(e.Push||(e.Push={})),function(t){t.SetDoNotDisturbEnabled="messaging.setDoNotDisturbEnabled",t.ShowPendingMessage="messaging.showPendingMessage"}(e.Messaging||(e.Messaging={})),function(t){t.Fetch="inbox.fetch",t.FetchForUserID="inbox.fetchForUserIdentifier"}(e.Inbox||(e.Inbox={})),function(t){t.Edit="user.edit",t.TrackEvent="user.track.event",t.TrackLegacyEvent="user.track.legacy_event",t.TrackTransaction="user.track.transaction",t.TrackLocation="user.track.location",t.DataDebug="user.data.debug",t.GetInstallationID="user.getInstallationID"}(e.User||(e.User={})),function(t){t.SetLanguage="SET_LANGUAGE",t.SetRegion="SET_REGION",t.SetIdentifier="SET_IDENTIFIER",t.SetAttribute="SET_ATTRIBUTE",t.RemoveAttribute="REMOVE_ATTRIBUTE",t.ClearAttribute="CLEAR_ATTRIBUTES",t.AddTag="ADD_TAG",t.RemoveTag="REMOVE_TAG",t.ClearTags="CLEAR_TAGS",t.ClearTagCollection="CLEAR_TAG_COLLECTION"}(e.UserDataOperation||(e.UserDataOperation={})),function(t){t.SetupCallback="_setupCallback"}(e.Internal||(e.Internal={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Consts={AttributeKeyRegexp:/^[a-zA-Z0-9_]{1,30}$/,AttributeStringMaxLength:64,BatchPluginName:"Batch",DevelopmentMode:!0,EventDataMaxTags:10,EventDataMaxValues:10,EventDataStringMaxLength:64},e.default=e.Consts},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={Android:"android",iOS:"ios",isCurrent:function(t){return cordova.platformId.toLowerCase()===t}};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,o=n(1),r=n(0);!function(t){t[t.NONE=0]="NONE",t[t.SOUND=1]="SOUND",t[t.VIBRATE=2]="VIBRATE",t[t.LIGHTS=4]="LIGHTS",t[t.ALERT=8]="ALERT"}(a=e.AndroidNotificationTypes||(e.AndroidNotificationTypes={})),function(t){t[t.NONE=0]="NONE",t[t.BADGE=1]="BADGE",t[t.SOUND=2]="SOUND",t[t.ALERT=4]="ALERT"}(i=e.iOSNotificationTypes||(e.iOSNotificationTypes={}));var s=function(){function t(){this.AndroidNotificationTypes=a,this.iOSNotificationTypes=i}return t.prototype.registerForRemoteNotifications=function(){r.sendToBridge(null,o.Push.Register,null)},t.prototype.setAndroidNotificationTypes=function(t){"number"!=typeof t?r.writeBatchLog(!1,"notifTypes must be a number (of the AndroidNotificationTypes enum)"):r.sendToBridge(null,o.Push.SetAndroidNotifTypes,[{notifTypes:t}])},t.prototype.setiOSNotificationTypes=function(t){"number"==typeof t?r.sendToBridge(null,o.Push.SetIOSNotifTypes,[{notifTypes:t}]):r.writeBatchLog(!1,"notifTypes must be a number (of the iOSNotificationTypes enum)")},t.prototype.clearBadge=function(){r.sendToBridge(null,o.Push.ClearBadge,null)},t.prototype.dismissNotifications=function(){r.sendToBridge(null,o.Push.DismissNotifications,null)},t.prototype.getLastKnownPushToken=function(t){r.sendToBridge(t,o.Push.GetLastKnownPushToken,null)},t}();e.PushModule=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(1),o=n(0);!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.CAMPAIGN=1]="CAMPAIGN",t[t.TRANSACTIONAL=2]="TRANSACTIONAL"}(a=e.InboxNotificationSource||(e.InboxNotificationSource={}));var r=function(){function t(){this.NotificationSource=a}return t.prototype.fetchNotifications=function(t){var e=this;o.sendToBridge(function(n){e.handleFetchCallback(n,t)},i.Inbox.Fetch,null)},t.prototype.fetchNotificationsForUserIdentifier=function(t,e,n){var a=this;o.sendToBridge(function(t){a.handleFetchCallback(t,n)},i.Inbox.FetchForUserID,[{id:t,auth:e}])},t.prototype.handleFetchCallback=function(t,e){var n,a=this;if("function"!=typeof e)throw new Error("callback is a required parameter, and must be a function");try{n=JSON.parse(t)}catch(t){return void e(new Error("Internal bridge error"),void 0)}if(o.isString(n.error))e(new Error(n.error));else{var i=n.notifications;if(Array.isArray(i)){var r=[];i.forEach(function(t){try{r.push(a.parseBridgeNotification(t))}catch(t){}}),e(void 0,r)}else e(new Error("Internal error: malformed notifications"))}},t.prototype.parseBridgeNotification=function(t){if("object"!=typeof t)throw new Error("Raw notification is not an object");var e=t.body;if(!o.isString(t.body))throw new Error("An Inbox Notification must at least have a body");var n=t.identifier;if(!o.isString(t.identifier))throw new Error("An Inbox Notification must at least have an identifier");var i=t.date;if(!o.isNumber(i))throw new Error("An Inbox Notification must at least have a date");var r=t.is_unread;if("boolean"!=typeof r)throw new Error("An Inbox Notification must at least have a read flag");var s=t.source;if(!o.isNumber(s))throw new Error("An Inbox Notification must at least have a source");s!==a.CAMPAIGN&&s!==a.TRANSACTIONAL&&s!==a.UNKNOWN&&(s=a.UNKNOWN);var u={body:e,date:new Date(i),identifier:n,isUnread:r,payload:{},source:s};return o.isString(t.ios_attachment_url)&&(u.iOSAttachmentURL=t.ios_attachment_url),"object"==typeof t.payload&&(u.payload=t.payload),o.isString(t.title)&&(u.title=t.title),u},t}();e.InboxModule=r},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var actions_1=__webpack_require__(1),consts_1=__webpack_require__(2),helpers_1=__webpack_require__(0),CallbackAction;!function(t){t.Log="_log",t.Eval="_eval",t.DispatchPush="_dispatchPush",t.DispatchMessagingEvent="_dispatchMessagingEvent",t.OnBridgeFailure="onBridgeFailure"}(CallbackAction=exports.CallbackAction||(exports.CallbackAction={}));var CallbackHandler=function(){function CallbackHandler(){}return CallbackHandler.prototype.setup=function(){cordova.exec(this.handleCallback,function(){},consts_1.Consts.BatchPluginName,actions_1.Internal.SetupCallback,[{}])},CallbackHandler.prototype.handleCallback=function(callbackData){switch(callbackData.action!==CallbackAction.Log&&helpers_1.writeBatchLog(!0,"Got callback from Batch",callbackData),callbackData.action){case CallbackAction.DispatchPush:var pushPayload=callbackData.payload;for(var key in pushPayload)if(pushPayload.hasOwnProperty(key)){var value=pushPayload[key];if("string"==typeof value)try{pushPayload[key]=JSON.parse(value),"object"!=typeof pushPayload[key]&&(pushPayload[key]=value)}catch(t){}else"number"!=typeof value&&"boolean"!=typeof value||(pushPayload[key]=String(value))}var hasLandingMessage=!1;!0===callbackData.hasLandingMessage&&(hasLandingMessage=!0),cordova.fireDocumentEvent("batchPushReceived",{hasLandingMessage:hasLandingMessage,payload:pushPayload});break;case CallbackAction.DispatchMessagingEvent:var lifecycleEventName=callbackData.lifecycleEvent,publicEventName=void 0;if("shown"==lifecycleEventName)publicEventName="batchMessageShown";else{if("closed"!=lifecycleEventName){helpers_1.writeBatchLog(!0,"Unknown messaging lifecycle event, can't forward",callbackData.lifecycleEvent);break}publicEventName="batchMessageClosed"}var payload={};helpers_1.isString(callbackData.messageIdentifier)&&(payload.messageIdentifier=callbackData.messageIdentifier),cordova.fireDocumentEvent(publicEventName,payload);break;case CallbackAction.Log:console.log(callbackData.message);break;case CallbackAction.Eval:eval(callbackData.command);break;case CallbackAction.OnBridgeFailure:helpers_1.writeBatchLog(!1,"Internal Bridge error",callbackData.result)}},CallbackHandler}();exports.CallbackHandler=CallbackHandler},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),i=n(4),o=function(){function t(){}return t.prototype.setDoNotDisturbEnabled=function(t){},t.prototype.showPendingMessage=function(){},t}(),r=function(){function t(){this.AndroidNotificationTypes=i.AndroidNotificationTypes,this.iOSNotificationTypes=i.iOSNotificationTypes}return t.prototype.registerForRemoteNotifications=function(){},t.prototype.setAndroidNotificationTypes=function(t){},t.prototype.setiOSNotificationTypes=function(t){},t.prototype.clearBadge=function(){},t.prototype.dismissNotifications=function(){},t.prototype.getLastKnownPushToken=function(t){},t}(),s=function(){function t(){this.eventData=c}return t.prototype.getInstallationID=function(t){},t.prototype.getEditor=function(){return new l},t.prototype.printDebugInformation=function(){},t.prototype.trackEvent=function(t,e,n){},t.prototype.trackTransaction=function(t,e){},t.prototype.trackLocation=function(t){},t}(),u=function(){function t(){this.NotificationSource=a.InboxNotificationSource}return t.prototype.fetchNotifications=function(t){},t.prototype.fetchNotificationsForUserIdentifier=function(t,e,n){},t}(),c=function(){function t(){}return t.prototype.addTag=function(t){return this},t.prototype.put=function(t,e){return this},t}(),l=function(){function t(){}return t.prototype.setLanguage=function(t){return this},t.prototype.setRegion=function(t){return this},t.prototype.setIdentifier=function(t){return this},t.prototype.setAttribute=function(t,e){return this},t.prototype.removeAttribute=function(t){return this},t.prototype.clearAttributes=function(){return this},t.prototype.addTag=function(t,e){return this},t.prototype.removeTag=function(t,e){return this},t.prototype.clearTags=function(){return this},t.prototype.clearTagCollection=function(t){return this},t.prototype.save=function(){return this},t}(),f=function(){function t(){this.push=new r,this.user=new s,this.messaging=new o,this.inbox=new u}return t.prototype.on=function(t,e){},t.prototype.off=function(t){},t.prototype.setConfig=function(t){},t.prototype.start=function(){console.log("Batch is not supported in this environement")},t.prototype.optIn=function(){},t.prototype.optOut=function(){},t.prototype.optOutAndWipeData=function(){},t}();e.default=f},function(t,e,n){"use strict";var a=this&&this.__assign||Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=i(n(2)),s=n(0),u=function(){function t(t){if(!0!==t)throw new Error("Do not instanciate BatchUserDataEditor yourself: use batch.user.getEditor()");this._operationQueue=[]}return t.prototype.setLanguage=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Language must be a string or null"),this):(this._enqueueOperation(o.UserDataOperation.SetLanguage,{value:t}),this)},t.prototype.setRegion=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Region must be a string or null"),this):(this._enqueueOperation(o.UserDataOperation.SetRegion,{value:t}),this)},t.prototype.setIdentifier=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Identifier must be a string or null"),this):(this._enqueueOperation(o.UserDataOperation.SetIdentifier,{value:t}),this)},t.prototype.setAttribute=function(t,e){if(!r.default.AttributeKeyRegexp.test(t||""))return s.writeBatchLog(!1,"BatchUserDataEditor - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this;if(void 0===t||null===t)return s.writeBatchLog(!1,"BatchUserDataEditor - Value argument cannot be undefined or null"),this;if(void 0===e)return s.writeBatchLog(!1,"BatchUserDataEditor - A value is required"),this;var n={value:e,key:t,type:""};if(e instanceof Date)n.value=e.getTime(),n.type="date";else{if("number"==typeof e&&isNaN(e))return s.writeBatchLog(!1,"BatchUserDataEditor - Value cannot be NaN"),this;if(s.isNumber(e))n.type=e%1==0?"integer":"float";else if(s.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return s.writeBatchLog(!1,"BatchUserDataEditor - String attributes can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring attribute '"+t+"'."),this;n.type="string"}else{if(!(e instanceof Boolean||"boolean"==typeof e))return s.writeBatchLog(!1,"BatchUserDataEditor - Value argument must be one of these types: number, string, boolean, date"),this;n.type="boolean"}}return this._enqueueOperation(o.UserDataOperation.SetAttribute,n),this},t.prototype.removeAttribute=function(t){return r.default.AttributeKeyRegexp.test(t||"")?(this._enqueueOperation(o.UserDataOperation.RemoveAttribute,{key:t}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this)},t.prototype.clearAttributes=function(){return this._enqueueOperation(o.UserDataOperation.ClearAttribute,{}),this},t.prototype.addTag=function(t,e){return s.isString(t)?r.default.AttributeKeyRegexp.test(t||"")?void 0===e?(s.writeBatchLog(!1,"BatchUserDataEditor - A tag is required"),this):s.isString(e)?0===e.length||e.length>r.default.AttributeStringMaxLength?(s.writeBatchLog(!1,"BatchUserDataEditor - Tags can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring tag '"+e+"'."),this):(this._enqueueOperation(o.UserDataOperation.AddTag,{collection:t,tag:e}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Tag argument must be a string"),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this)},t.prototype.removeTag=function(t,e){if("string"!=typeof t&&!(t instanceof String))return s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this;if(!r.default.AttributeKeyRegexp.test(t||""))return s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this;if(void 0===e)return s.writeBatchLog(!1,"BatchUserDataEditor - A tag is required"),this;if(s.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return s.writeBatchLog(!1,"BatchUserDataEditor - Tags can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring tag '"+e+"'."),this}else s.writeBatchLog(!1,"BatchUserDataEditor - Tag argument must be a string");return this._enqueueOperation(o.UserDataOperation.RemoveTag,{collection:t,tag:e}),this},t.prototype.clearTags=function(){return this._enqueueOperation(o.UserDataOperation.ClearTags,{}),this},t.prototype.clearTagCollection=function(t){return"string"!=typeof t?(s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this):r.default.AttributeKeyRegexp.test(t||"")?(this._enqueueOperation(o.UserDataOperation.ClearTagCollection,{collection:t}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this)},t.prototype.save=function(){return s.sendToBridge(null,o.User.Edit,[{operations:this._operationQueue}]),this._operationQueue=[],this},t.prototype._enqueueOperation=function(t,e){var n=a({operation:t},e);this._operationQueue.push(n)},t}();e.BatchUserDataEditor=u},function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i,o=a(n(2)),r=n(0);!function(t){t.String="s",t.Boolean="b",t.Integer="i",t.Float="f"}(i=e.TypedEventAttributeType||(e.TypedEventAttributeType={}));var s=function(){function t(){this._tags={},this._attributes={}}return t.prototype.addTag=function(t){return void 0===t?(r.writeBatchLog(!1,"BatchEventData - A tag is required"),this):r.isString(t)?0===t.length||t.length>o.default.EventDataStringMaxLength?(r.writeBatchLog(!1,"BatchEventData - Tags can't be empty or longer than "+o.default.EventDataStringMaxLength+" characters. Ignoring tag '"+t+"'."),this):Object.keys(this._tags).length>=o.default.EventDataMaxTags?(r.writeBatchLog(!1,"BatchEventData - Event data cannot hold more than "+o.default.EventDataMaxTags+" tags. Ignoring tag: '"+t+"'"),this):(this._tags[t.toLowerCase()]=!0,this):(r.writeBatchLog(!1,"BatchEventData - Tag argument must be a string"),this)},t.prototype.put=function(t,e){if(!r.isString(t))return r.writeBatchLog(!1,"BatchEventData - Key must be a string"),this;if(!o.default.AttributeKeyRegexp.test(t||""))return r.writeBatchLog(!1,"BatchEventData - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this;if(void 0===e||null===e)return r.writeBatchLog(!1,"BatchEventData - Value cannot be undefined or null"),this;if(t=t.toLowerCase(),Object.keys(this._tags).length>=o.default.EventDataMaxValues&&!this._attributes.hasOwnProperty(t))return r.writeBatchLog(!1,"BatchEventData - Event data cannot hold more than "+o.default.EventDataMaxValues+" attributes. Ignoring attribute: '"+t+"'"),this;var n;if(r.isString(e))n={type:i.String,value:e};else if(r.isNumber(e))n={type:e%1==0?i.Integer:i.Float,value:e};else{if(!r.isBoolean(e))return r.writeBatchLog(!1,"BatchEventData - Invalid attribute value type. Must be a string, number or boolean"),this;n={type:i.Boolean,value:e}}return n&&(this._attributes[t]=n),this},t.prototype._toInternalRepresentation=function(){return{attributes:this._attributes,tags:Object.keys(this._tags)}},t}();e.BatchEventData=s},function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=a(n(2)),s=n(9),u=n(8),c=function(){function t(){this.eventData=s.BatchEventData}return t.prototype.getInstallationID=function(t){o.sendToBridge(t,i.User.GetInstallationID,null)},t.prototype.getEditor=function(){return new u.BatchUserDataEditor(!0)},t.prototype.printDebugInformation=function(){o.sendToBridge(null,i.User.DataDebug,null)},t.prototype.trackEvent=function(t,e,n){if(o.isString(t)&&r.default.AttributeKeyRegexp.test(t||"")){var a={name:t};if(o.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return void o.writeBatchLog(!1,"BatchUserDataEditor - Label can't be longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring event '"+t+"'.");a.label=e}else if(null!=e&&void 0!==e)return void o.writeBatchLog(!1,"BatchUser - If supplied, label argument must be a string. Ignoring event '"+t+"'.");if(n instanceof s.BatchEventData)a.event_data=n._toInternalRepresentation();else if("object"==typeof n)return a.data=n,void o.sendToBridge(null,i.User.TrackLegacyEvent,[a]);o.sendToBridge(null,i.User.TrackEvent,[a])}else o.writeBatchLog(!1,"BatchUser - Invalid event name. Please make sure that the name is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring event '"+t+"'")},t.prototype.trackTransaction=function(t,e){if(void 0!==t)if(o.isNumber(t)&&!isNaN(t)){var n={amount:t};"object"==typeof e&&(n.data=e),o.sendToBridge(null,i.User.TrackTransaction,[n])}else o.writeBatchLog(!1,"BatchUser - Amount must be a valid number. Ignoring transaction.");else o.writeBatchLog(!1,"BatchUser - Amount must be a valid number. Ignoring transaction.")},t.prototype.trackLocation=function(t){"object"==typeof t?"number"!=typeof t.latitude||isNaN(t.latitude)?o.writeBatchLog(!1,"BatchUser - Invalid latitude. Skipping."):"number"!=typeof t.longitude||isNaN(t.longitude)?o.writeBatchLog(!1,"BatchUser - Invalid longitude. Skipping."):!t.precision||"number"==typeof t.precision&&!isNaN(t.precision)?!t.date||t.date instanceof Date?o.sendToBridge(null,i.User.TrackLocation,[{date:t.date?t.date.getTime():void 0,latitude:t.latitude,longitude:t.longitude,precision:t.precision}]):o.writeBatchLog(!1,"BatchUser - Invalid date. Skipping."):o.writeBatchLog(!1,"BatchUser - Invalid precision. Skipping."):o.writeBatchLog(!1,"BatchUser - Invalid trackLocation argument. Skipping.")},t}();e.UserModule=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(0),o=function(){function t(){}return t.prototype.setDoNotDisturbEnabled=function(t){"boolean"==typeof t?i.sendToBridge(null,a.Messaging.SetDoNotDisturbEnabled,[{enabled:t}]):i.writeBatchLog(!1,"Batch.Messaging - setDoNotDisturbEnabled: parameter must be a boolean")},t.prototype.showPendingMessage=function(){i.sendToBridge(null,a.Messaging.ShowPendingMessage,null)},t}();e.MessagingModule=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=function(){function t(){this._eventListeners={}}return t.prototype.on=function(t,e){return"string"!=typeof t?(a.writeBatchLog(!1,"Event name must be a string if supplied"),this):(this._eventListeners[t]=this._eventListeners[t]||[],this._eventListeners[t].push(e),this)},t.prototype.off=function(t){return void 0===t?(this._eventListeners={},this):"string"!=typeof t?(a.writeBatchLog(!1,"Event name must be a string if supplied"),this):(this._eventListeners[t]=[],this)},t.prototype.emit=function(t,e){a.writeBatchLog(!0,"Calling back developer implementation - "+t,e),(this._eventListeners[t]||[]).forEach(function(n){n(t,e)})},t}();e.EventEmitter=i},function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(12),r=n(0),s=n(5),u=n(11),c=n(4),l=n(10),f=a(n(3)),p=function(){function t(){this.push=new c.PushModule,this.user=new l.UserModule,this.messaging=new u.MessagingModule,this.inbox=new s.InboxModule,this._config=null,this._eventEmitter=new o.EventEmitter}return t.prototype.on=function(t,e){this._eventEmitter.on(t,e)},t.prototype.off=function(t){this._eventEmitter.off(t)},t.prototype.setConfig=function(t){if("object"==typeof t){var e={androidAPIKey:null,canUseAdvertisingIdentifier:!0,iOSAPIKey:null};for(var n in t)e.hasOwnProperty(n)?e[n]=t[n]:this.log(!1,"Unknown key found in the config object : "+n);this._config=e}else r.writeBatchLog(!1,"Config must be an object.")},t.prototype.start=function(){if(null===this._config)return r.writeBatchLog(!1,"You must call setConfig before calling start."),this;var t=f.default.isCurrent(f.default.Android)?this._config.androidAPIKey:this._config.iOSAPIKey;"string"==typeof t?(r.sendToBridge(null,i.Core.SetConfig,[{APIKey:t,useAndroidID:!1,useIDFA:!0===this._config.canUseAdvertisingIdentifier}]),r.sendToBridge(null,i.Core.Start,null)):r.writeBatchLog(!1,"No API key was specified for the current platform.")},t.prototype.optIn=function(){r.sendToBridge(null,i.Core.OptIn,null)},t.prototype.optOut=function(){r.sendToBridge(null,i.Core.OptOut,null)},t.prototype.optOutAndWipeData=function(){r.sendToBridge(null,i.Core.OptOutWipeData,null)},t.prototype.log=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];r.writeBatchLog.apply(void 0,[t].concat(e))},t}();e.default=p},function(t,e,n){"use strict";var a,i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=i(n(13)),r=i(n(7)),s=n(6),u=i(n(3));u.default.isCurrent(u.default.iOS)||u.default.isCurrent(u.default.Android)?(a=new o.default,(new s.CallbackHandler).setup()):a=new r.default,t.exports=a}]));
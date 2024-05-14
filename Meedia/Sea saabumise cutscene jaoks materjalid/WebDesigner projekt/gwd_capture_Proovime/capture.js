'use strict';
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var goog = goog || {}, goog$global = this || self;
function goog$isArrayLike(val) {
  var type = typeof val;
  type = "object" != type ? type : val ? Array.isArray(val) ? "array" : type : "null";
  return "array" == type || "object" == type && "number" == typeof val.length;
}
function goog$isObject(val) {
  var type = typeof val;
  return "object" == type && null != val || "function" == type;
}
function goog$bindNative_(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments);
}
function goog$bindJs_(fn, selfObj, var_args) {
  if (!fn) {
    throw Error();
  }
  if (2 < arguments.length) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  }
  return function() {
    return fn.apply(selfObj, arguments);
  };
}
function goog$bind(fn, selfObj, var_args) {
  goog$bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog$bindNative_ : goog$bindJs_;
  return goog$bind.apply(null, arguments);
}
function goog$exportSymbol(publicPath, object) {
  publicPath = publicPath.split(".");
  var cur = goog$global;
  publicPath[0] in cur || "undefined" == typeof cur.execScript || cur.execScript("var " + publicPath[0]);
  for (var part; publicPath.length && (part = publicPath.shift());) {
    publicPath.length || void 0 === object ? cur[part] && cur[part] !== Object.prototype[part] ? cur = cur[part] : cur = cur[part] = {} : cur[part] = object;
  }
}
function goog$inherits(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
  childCtor.base = function(me, methodName, var_args) {
    for (var args = Array(arguments.length - 2), i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }
    return parentCtor.prototype[methodName].apply(me, args);
  };
}
;var module$exports$ninja$capture$AppError$AppError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
var module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl$SafeAttributePrefix = class {
};
class module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl extends module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl$SafeAttributePrefix {
  constructor(attrPrefix) {
    super();
    this.privateDoNotAccessOrElseWrappedAttrPrefix = attrPrefix;
  }
  toString() {
    return this.privateDoNotAccessOrElseWrappedAttrPrefix;
  }
}
;function module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix(templ) {
  return new module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl(templ[0].toLowerCase());
}
;const module$contents$goog$array_indexOf = Array.prototype.indexOf ? function(arr, obj) {
  return Array.prototype.indexOf.call(arr, obj, void 0);
} : function(arr, obj) {
  if ("string" === typeof arr) {
    return "string" !== typeof obj || 1 != obj.length ? -1 : arr.indexOf(obj, 0);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && arr[i] === obj) {
      return i;
    }
  }
  return -1;
};
function module$contents$goog$array_remove(arr, obj) {
  obj = module$contents$goog$array_indexOf(arr, obj);
  let rv;
  (rv = 0 <= obj) && module$contents$goog$array_removeAt(arr, obj);
  return rv;
}
function module$contents$goog$array_removeAt(arr, i) {
  return 1 == Array.prototype.splice.call(arr, i, 1).length;
}
function module$contents$goog$array_splice(arr, index, howMany, var_args) {
  Array.prototype.splice.apply(arr, module$contents$goog$array_slice(arguments, 1));
}
function module$contents$goog$array_slice(arr, start, opt_end) {
  return 2 >= arguments.length ? Array.prototype.slice.call(arr, start) : Array.prototype.slice.call(arr, start, opt_end);
}
function module$contents$goog$array_binarySearch(arr, target, opt_compareFn) {
  opt_compareFn = opt_compareFn || module$contents$goog$array_defaultCompare;
  let left = 0, right = arr.length, found;
  for (; left < right;) {
    const middle = left + (right - left >>> 1);
    let compareResult;
    compareResult = opt_compareFn(target, arr[middle]);
    0 < compareResult ? left = middle + 1 : (right = middle, found = !compareResult);
  }
  return found ? left : -left - 1;
}
function module$contents$goog$array_equals(arr1) {
  var arr2 = module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS;
  if (!goog$isArrayLike(arr1) || !goog$isArrayLike(arr2) || arr1.length != arr2.length) {
    return !1;
  }
  const l = arr1.length, equalsFn = module$contents$goog$array_defaultCompareEquality;
  for (let i = 0; i < l; i++) {
    if (!equalsFn(arr1[i], arr2[i])) {
      return !1;
    }
  }
  return !0;
}
function module$contents$goog$array_defaultCompare(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function module$contents$goog$array_defaultCompareEquality(a, b) {
  return a === b;
}
function module$contents$goog$array_binaryInsert(array, value, opt_compareFn) {
  opt_compareFn = module$contents$goog$array_binarySearch(array, value, opt_compareFn);
  0 > opt_compareFn && module$contents$goog$array_splice(array, -(opt_compareFn + 1), 0, value);
}
;function module$contents$goog$object_unsafeClone(obj) {
  if (!obj || "object" !== typeof obj) {
    return obj;
  }
  if ("function" === typeof obj.clone) {
    return obj.clone();
  }
  if ("undefined" !== typeof Map && obj instanceof Map) {
    return new Map(obj);
  }
  if ("undefined" !== typeof Set && obj instanceof Set) {
    return new Set(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  const clone = Array.isArray(obj) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(obj) || obj instanceof DataView ? {} : new obj.constructor(obj.length);
  for (const key in obj) {
    clone[key] = module$contents$goog$object_unsafeClone(obj[key]);
  }
  return clone;
}
const module$contents$goog$object_PROTOTYPE_FIELDS = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function module$contents$goog$object_extend(target, var_args) {
  let key, source;
  for (let i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (key in source) {
      target[key] = source[key];
    }
    for (let j = 0; j < module$contents$goog$object_PROTOTYPE_FIELDS.length; j++) {
      key = module$contents$goog$object_PROTOTYPE_FIELDS[j], Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }
}
;function goog$string$internal$isEmptyOrWhitespace(str) {
  return /^[\s\xa0]*$/.test(str);
}
var goog$string$internal$AMP_RE_ = /&/g, goog$string$internal$LT_RE_ = /</g, goog$string$internal$GT_RE_ = />/g, goog$string$internal$QUOT_RE_ = /"/g, goog$string$internal$SINGLE_QUOTE_RE_ = /'/g, goog$string$internal$NULL_RE_ = /\x00/g, goog$string$internal$ALL_RE_ = /[\x00&<>"']/;
var JSCompiler_inline_result$jscomp$13, obj$jscomp$inline_105;
a: {
  for (var parts$jscomp$inline_955 = ["CLOSURE_FLAGS"], cur$jscomp$inline_956 = goog$global, i$jscomp$inline_957 = 0; i$jscomp$inline_957 < parts$jscomp$inline_955.length; i$jscomp$inline_957++) {
    if (cur$jscomp$inline_956 = cur$jscomp$inline_956[parts$jscomp$inline_955[i$jscomp$inline_957]], null == cur$jscomp$inline_956) {
      obj$jscomp$inline_105 = null;
      break a;
    }
  }
  obj$jscomp$inline_105 = cur$jscomp$inline_956;
}
var val$jscomp$inline_106 = obj$jscomp$inline_105 && obj$jscomp$inline_105[610401301];
JSCompiler_inline_result$jscomp$13 = null != val$jscomp$inline_106 ? val$jscomp$inline_106 : !1;
function module$contents$goog$labs$userAgent$util_getNativeUserAgentString() {
  var navigator = goog$global.navigator;
  return navigator && (navigator = navigator.userAgent) ? navigator : "";
}
var JSCompiler_inline_result$jscomp$14;
const navigator$jscomp$inline_108 = goog$global.navigator;
JSCompiler_inline_result$jscomp$14 = navigator$jscomp$inline_108 ? navigator$jscomp$inline_108.userAgentData || null : null;
function module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(str) {
  return JSCompiler_inline_result$jscomp$13 ? JSCompiler_inline_result$jscomp$14 ? JSCompiler_inline_result$jscomp$14.brands.some(({brand}) => brand && -1 != brand.indexOf(str)) : !1 : !1;
}
function module$contents$goog$labs$userAgent$util_matchUserAgent(str) {
  return -1 != module$contents$goog$labs$userAgent$util_getNativeUserAgentString().indexOf(str);
}
;function module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() {
  return JSCompiler_inline_result$jscomp$13 ? !!JSCompiler_inline_result$jscomp$14 && 0 < JSCompiler_inline_result$jscomp$14.brands.length : !1;
}
function module$contents$goog$labs$userAgent$browser_matchOpera() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Opera");
}
function module$contents$goog$labs$userAgent$browser_matchFirefox() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("Firefox") || module$contents$goog$labs$userAgent$util_matchUserAgent("FxiOS");
}
function module$contents$goog$labs$userAgent$browser_matchChrome() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand("Chromium") : (module$contents$goog$labs$userAgent$util_matchUserAgent("Chrome") || module$contents$goog$labs$userAgent$util_matchUserAgent("CriOS")) && !(module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? 0 : module$contents$goog$labs$userAgent$util_matchUserAgent("Edge")) || module$contents$goog$labs$userAgent$util_matchUserAgent("Silk");
}
;var module$exports$ninja$capture$captureConstants$ATTRIBUTE_PREFIXES = [module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`full-res-`];
function JSCompiler_StaticMethods_sequenceIndexToTimeMs(JSCompiler_StaticMethods_sequenceIndexToTimeMs$self, sequenceIndex) {
  return (JSCompiler_StaticMethods_sequenceIndexToTimeMs$self.indices_.startFrame + JSCompiler_StaticMethods_sequenceIndexToTimeMs$self.indices_.increment * sequenceIndex) / JSCompiler_StaticMethods_sequenceIndexToTimeMs$self.frameRate() * 1E3 + JSCompiler_StaticMethods_sequenceIndexToTimeMs$self.frameTimeOffset_.numerator / JSCompiler_StaticMethods_sequenceIndexToTimeMs$self.frameTimeOffset_.denominator * 1E3;
}
var module$exports$ninja$capture$FrameSequence$FrameSequence = class {
  constructor(indices, frameRate, frameTimeOffset) {
    this.indices_ = indices;
    this.frameRate_ = frameRate;
    this.frameTimeOffset_ = frameTimeOffset;
  }
  length() {
    return this.indices_.numFrames;
  }
  frameRate() {
    return this.frameRate_.numerator / this.frameRate_.denominator;
  }
};
var module$exports$ninja$debug$log$warning = msg => {
  module$contents$ninja$debug$log_logToShell("warning", module$contents$ninja$debug$log_getLogString(msg));
};
const module$contents$ninja$debug$log_getLogString = message => {
  var location = "", splitStack = (new module$exports$ninja$debug$log$ErrorWrapper(message)).stack.split(RegExp("\\s+at\\s*"));
  if (3 < splitStack.length) {
    location = splitStack[3];
    splitStack = location.lastIndexOf("/");
    -1 === splitStack && (splitStack = location.indexOf("("));
    -1 === splitStack && (splitStack = 0);
    let locationEnd = location.lastIndexOf(")");
    -1 === locationEnd && (locationEnd = location.length);
    location = ` (${location.substring(splitStack + 1, locationEnd)})`;
  }
  return `Web app${location}: ${message}`;
}, module$contents$ninja$debug$log_logToShell = (level, message) => {
  const gwdShell = goog$global.ninjaShell;
  gwdShell && "function" === typeof gwdShell.log && gwdShell.log(level, message);
};
var module$exports$ninja$debug$log$ErrorWrapper = class extends Error {
  constructor(message) {
    super(message);
  }
};
let module$contents$ninja$capture$log_instanceIndex;
const module$contents$ninja$capture$log_getLogString = message => `[Capture instance ${module$contents$ninja$capture$log_instanceIndex}] ${message}`;
goog$exportSymbol("ninja.events.topic.Assets", {ASSET_ADDED:"assetadded", ASSET_IMPORT_ERROR:"assetimporterror", ASSET_MOVED:"assetmoved", ASSET_REMOVED:"assetremoved", ASSET_ATTRIBUTE_UPDATED:"assetattributeupdated", ASSET_REFRESHED:"assetrefreshed", LOCAL_ASSET_FOLDER_ADDED:"localassetfolderadded", LOCAL_ASSET_FOLDER_MOVED:"localassetfoldermoved", LOCAL_ASSET_FOLDER_REMOVED:"localassetfolderremoved"});
goog$exportSymbol("ninja.events.topic.Binding", {BINDING_CHANGE:"bindingchange", SAMPLE_PAYLOAD_CHANGE:"samplepayloadchange", SAMPLE_PAYLOAD_LIBRARY_CHANGE:"samplepayloadlibrarychange", SAMPLE_PAYLOAD_SELECTED:"samplepayloadselected"});
goog$exportSymbol("ninja.events.topic.Document", {DOCUMENTREADYFORRENDER:"documentreadyforrender", CONTENTSCHANGEDONDISK:"documentcontentschangedondisk", DOCUMENTADDED:"documentadded", DOCUMENTCHANGE:"documentchange", DOCUMENTREMOVED:"documentremoved", DOCUMENTVIEWCHANGE:"documentviewchange", DOCUMENTVIEWCHANGEERROR:"documentviewchangeerror", DOCUMENTDESIGNVIEWREQUESTED:"documentdesignviewrequested", DOCUMENTUNDOREDOSTATECHANGE:"documentundoredostatechange", DOCUMENTADENVIRONMENTCHANGE:"documentadenvironmentchange", 
CLOSE_DOCUMENT_WITHOUT_SAVE:"closedocumentwithoutsave"});
goog$exportSymbol("ninja.events.topic.DomContainer", {DOM_CONTAINER_CHANGE:"domcontainerchange"});
goog$exportSymbol("ninja.events.topic.Element", {ELEMENT_GUIDE_TOGGLED:"elementguidetoggled", ELEMENT_REPLACED:"elementreplaced", DOM_REORDERED:"domreordered"});
goog$exportSymbol("ninja.events.topic.Groups", {GROUP_RENAMED:"grouprenamed", GROUPS_INITIALIZED:"groupsinitialized", GROUPS_LIST_CHANGED:"groupslistchanged", GROUPS_START_ISOLATED_EDIT:"groupsstartisolatededit", GROUPS_STOP_ISOLATED_EDIT:"groupsstopisolatededit"});
goog$exportSymbol("ninja.events.topic.HelpPrompt", {SHOW_HELP_PROMPT:"showhelpprompt", CONTEXTUAL_HELP_PROMPT_DISMISSED:"contextualhelppromptdismissed", MOUSEOVER_HELP_PROMPT_DISMISSED:"mousoverhelppromptdismissed"});
goog$exportSymbol("ninja.events.topic.Menu", {ADD_JS:"addJs", ADD_VARIANT_BINDING:"addVariantBinding", CLOSEALL:"closeall", CLOSEFILE:"closefile", CLOSEFILES:"closefiles", NEWFILE:"newfile", NEWFROMTEMPLATE:"newfromtemplate", OPENFILE:"openfile", CONVERT_DOCTYPE_VIDEO:"convertToVideo", CONVERT_DOCTYPE_IMAGE_AD:"convertToImageAd", CONVERT_ADMOB:"convertToAdmob", CONVERT_ADWORDS:"convertToAdwords", CONVERT_GENERIC:"convertToGeneric", CONVERT_DOUBLECLICK:"convertToDoubleclick", IMPORT:"import", PREVIEW:"preview", 
PUBLISH_LOCAL:"publishLocal", PUBLISH_DRIVE:"publishToDrive", PUBLISH_STUDIO:"publishToStudio", PUBLISH_DBM:"publishToDbm", PUBLISH_CM:"publishToCm", EXPORT_IMAGES:"exportimages", SAVEALL:"saveall", SAVEAS:"saveas", SAVEASZIP:"saveaszip", SAVEASTEMPLATE:"saveastemplate", SAVEFILE:"savefile", QUITSHELL:"quitshell", CREATE_GROUP:"createGroup", BREAK_APART:"breakApart", ADD_IMAGE_MASK:"addImageMask", ADD_GRADIENT_MASK:"addGradientMask", FIND:"find", FIND_REPLACE:"findReplace", WRAP:"wrap", STAGE_VIEW:"stageview", 
ZOOM_ACTUAL_SIZE:"zoomactualsize", ZOOM_IN:"zoomin", ZOOM_OUT:"zoomout", ABOUTBOX:"aboutbox", HELP_AMP:"helpAmp", HELP_FORUMS:"helpForums", HELP_PANEL:"helpPanel", HELP_RELEASE_NOTES:"helpReleaseNotes", HELP_TOPICS:"helpTopics", HELP_TOS:"helpTOS", HELP_PRIVACY:"helpPrivacy", OPEN_PREFERENCES_DIALOG:"openPreferencesDialog", OPEN_KEYBOARD_SHORTCUTS_EDITOR:"openKeyboardShortcutsEditor", TIMELINE_INSERT:"timelineInsert", TIMELINE_DELETE:"timelineDelete", OPEN_WORKSPACE_ADD_DIALOG:"openWorkspaceAddDialog", 
OPEN_WORKSPACE_DELETE_DIALOG:"openWorkspaceDeleteDialog", UPDATE_TEMPLATES:"updateTemplates"});
goog$exportSymbol("ninja.events.topic.Page", {PAGE_ADDED:"pageadded", PAGE_DUPLICATED:"pageduplicated", PAGE_PROPERTY_CHANGE:"pagepropertychange", PAGE_REMOVED:"pageremoved", PAGE_CHANGED:"pagechanged", PAGE_DECK_PROPERTY_CHANGE:"pagedeckpropertychange"});
goog$exportSymbol("ninja.events.topic.Parallax", {OPEN_PARALLAX_DIALOG:"openparallaxdialog"});
var module$exports$ninja$events$topic$Preferences = {PREFERENCE_CHANGE:"preferencechange", ANIMATION_MODE_PREFERENCE_CHANGE:"animationmodepreferencechange", APP_SCOPE_READY:"appscopeready", RESTART_SHELL:"restartshell"};
goog$exportSymbol("ninja.events.topic.Preferences", module$exports$ninja$events$topic$Preferences);
goog$exportSymbol("ninja.events.topic.Preview", module$exports$ninja$events$topic$Preferences);
goog$exportSymbol("ninja.events.topic.Responsive", {ACTIVE_MEDIA_RULE_CHANGE:"activemediarulechange", ATTRIBUTE_OVERRIDE_CHANGE:"attributeoverridechange", CONTACT_SHEET_ANIMATION_STOPPED:"contactsheetanimationstopped", CONTACT_SHEET_READY:"contactsheetready", CONTACT_SHEET_TOGGLED:"contactsheettoggled", DOCUMENT_RESPONSIVE_STATE_CHANGE:"documentresponsivestatechange", MEDIA_RULES_CHANGE:"mediarulechange", RANGE_RULES_DIALOG_CHANGE:"rangerulesdialogchange", SIZE_DETAILS_CHANGE:"sizedetailschange", 
VIEWPORT_RESIZER_TOGGLED:"viewportresizertoggled"});
goog$exportSymbol("ninja.events.topic.Selection", {SELECTION_CHANGE:"selectionchange", SELECTION_CHANGE_FROM_PANEL:"selectionchangefrompanel", SELECTION_TOOL_MOUSEDOWN:"selectiontoolmousedown", SELECTION_TOOL_MOUSEUP:"selectiontoolmouseup"});
goog$exportSymbol("ninja.events.topic.Stage", {ZOOM_CHANGED:"zoomchanged", OUTLINES_CHANGED:"outlineschanged", STAGE_MASKED_CHANGED:"stagemaskedchanged"});
goog$exportSymbol("ninja.events.topic.Text", {CONTENT_CHANGED:"textcontentchanged", FONTS_MENU_BUTTON_INPUT_CHANGED:"fontsmenubuttoninputchanged", KEYBOARD_SHORTCUT_PRESSED:"keyboardshortcutpressed", OPEN_FONTS_MENU:"openfontsmenu", TEXT_EDIT_EVENT:"texteditevent", TEXT_ENTERED:"textentered", TEXT_FIELD_CHANGED:"textfieldchanged", TEXT_PREFLIGHT_STYLE_CHANGED:"textpreflightstylechanged", TEXT_STAGE_PREVIEW_CHANGED:"textsttagepreviewchanged", WEB_FONT_CHANGED:"webfontchanged"});
goog$exportSymbol("ninja.events.topic.UserEvents", {HANDLER_ADDED:"userEventHandlerAdded", HANDLER_REMOVED:"userEventHandlerRemoved", HANDLER_EDITED:"userEventHandlerEdited", HANDLER_ORDER_CHANGED:"userEventHandlersOrderChanged"});
goog$exportSymbol("ninja.events.topic.Viewport", {RESIZE:"viewportresize", VIEWPORT_LIST_CHANGE:"viewportlistchange"});
goog$exportSymbol("ninja.events.topic.Wrap", {WRAP_ELEMENT_CHANGED:"wrapelementchanged"});
const module$contents$ninja$string$path_WINDOWS_DRIVE_LETTER_RE = RegExp("^[A-Z]:", "i");
function module$exports$ninja$string$path$baseName(path) {
  const i = path.lastIndexOf("windows" === (goog$global.navigator.platform.includes("Win") ? "windows" : "unix") ? "\\" : "/") + 1;
  return path.slice(i);
}
function module$exports$ninja$string$path$join(var_args) {
  let path = arguments[0] || "";
  const separator = "windows" === (goog$global.navigator.platform.includes("Win") ? "windows" : "unix") ? "\\" : "/", checkDriveLetter = "\\" == separator;
  for (let i = 1; i < arguments.length; i++) {
    const arg = arguments[i];
    arg.startsWith(separator) || checkDriveLetter && module$contents$ninja$string$path_WINDOWS_DRIVE_LETTER_RE.test(arg) ? path = arg : "" == path || path.endsWith(separator) ? path += arg : path += separator + arg;
  }
  return path;
}
;document.implementation.createHTMLDocument();
module$exports$ninja$string$path$join("Google Web Designer", "components");
function module$exports$ninja$constants$getAppDataFolder() {
  const ninjaShell = goog$global.ninjaShell;
  return ninjaShell ? ninjaShell.appDataFolder : "";
}
;var module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath = () => module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "ampcomponentmanifests");
const module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath = (folderName, isLibrary = !1) => {
  isLibrary ? module$exports$ninja$string$path$join(module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "gwdcomponents_v1"), "libs", folderName, "manifest.json") : module$exports$ninja$string$path$join(module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "gwdcomponents_v1"), folderName, "manifest.json");
}, module$contents$ninja$publish$TypeRegistry_getUiManifestPath = folderName => {
  module$exports$ninja$string$path$join(module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "uicomponents"), folderName, "manifest.json");
}, module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath = folderName => {
  module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "gwdcomponents_v1", "gwdtransitiongallery", "gwdtransitioneffect", folderName, "manifest.json");
}, module$contents$ninja$publish$TypeRegistry_getV1ImageEffectTypeManifestPath = folderName => {
  module$exports$ninja$string$path$join(module$exports$ninja$constants$getAppDataFolder(), "gwdcomponents_v1", "gwdimageeffect", "gwdimageeffecttype", folderName, "manifest.json");
};
goog$exportSymbol("ninja.publish.TypeRegistry.CUSTOM_ELEMENT_TYPES", {AMP_AD_EXIT:"amp-ad-exit", AMP_CAROUSEL:"amp-carousel", AMP_GWD_ANIMATION:"amp-gwd-animation", AMP_IMG:"amp-img", AMP_PAGEDECK:"amp-pagedeck", AMP_VIDEO:"amp-video", AMP_YOUTUBE:"amp-youtube", CI_STARRATINGS:"ci-starratings", GWD_360GALLERY:"gwd-360gallery", GWD_3D_HOTSPOT:"gwd-3d-hotspot", GWD_3D_HOTSPOT_CONTAINER:"gwd-3d-hotspot-container", GWD_3D_MODEL:"gwd-3d-model", GWD_3D_MODEL_VIEWER:"gwd-3d-model-viewer", GWD_ADDTOCALENDAR:"gwd-addtocalendar", 
GWD_ATTACHED:"gwd-attached", GWD_AUDIO:"gwd-audio", GWD_BACKDROP:"gwd-backdrop", GWD_BEZIERPATH:"gwd-bezierpath", GWD_CAROUSELGALLERY:"gwd-carouselgallery", GWD_COUNTER:"gwd-counter", GWD_CUEPOINT:"gwd-cuepoint", GWD_DATA_BINDER:"gwd-data-binder", GWD_DATESWAP:"gwd-dateswap", GWD_EXIT:"gwd-exit", GWD_FONT_LOADER:"gwd-font-loader", GWD_GALLERYNAVIGATION:"gwd-gallerynavigation", GWD_GENERICAD:"gwd-genericad", GWD_GESTURE:"gwd-gesture", GWD_GOOGLEAD:"gwd-google-ad", GWD_GPA_DATA_PROVIDER:"gwd-gpa-data-provider", 
GWD_HOTSPOT:"gwd-hotspot", GWD_IFRAME:"gwd-iframe", GWD_IMAGE:"gwd-image", GWD_IMAGE_EFFECT:"gwd-image-effect", GWD_IMAGEBUTTON:"gwd-imagebutton", GWD_LINE:"gwd-line", GWD_MAP:"gwd-map", GWD_METRIC_CONFIGURATION:"gwd-metric-configuration", GWD_METRIC_EVENT:"gwd-metric-event", GWD_OVAL:"gwd-oval", GWD_PAGE:"gwd-page", GWD_PAGEDECK:"gwd-pagedeck", GWD_PARALLAX:"gwd-parallax", GWD_PARTICLEEFFECTS:"gwd-particleeffects", GWD_PARTICLES:"gwd-particles", GWD_RECTANGLE:"gwd-rectangle", GWD_RESPONSIVE_ATTRIBUTES_HELPER:"gwd-responsive-attributes-helper", 
GWD_SPRITESHEET:"gwd-spritesheet", GWD_STARRATINGS:"gwd-starratings", GWD_STREETVIEW:"gwd-streetview", GWD_STUDIO_ENABLER_DATA_PROVIDER:"gwd-studio-enabler-data-provider", GWD_SWIPEGALLERY:"gwd-swipegallery", GWD_SWIRL:"gwd-swirl", GWD_TAPAREA:"gwd-taparea", GWD_TAPTOCALL:"gwd-taptocall", GWD_TEXT_HELPER:"gwd-text-helper", GWD_TIMER:"gwd-timer", GWD_TRANSITIONGALLERY:"gwd-transitiongallery", GWD_VARIANT_DATA_PROVIDER:"gwd-variant-data-provider", GWD_VIDEO:"gwd-video", GWD_YOUTUBE:"gwd-youtube", GWD_YOUTUBE_LIVESTREAM:"gwd-youtube-livestream"});
goog$exportSymbol("ninja.publish.TypeRegistry.UiElement", {BUTTON:"button", CHECKBOX:"checkbox", LABEL:"label", NUMBER:"number", RADIO:"radio", RANGE:"range", SELECT:"select", TEXT:"text"});
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdtaparea");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdgesture");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdimagebutton");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdtaptocall");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdspritesheet");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdimage");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdswipegallery");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdgallerynavigation");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdcarouselgallery");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd360gallery");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdvideo");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdcuepoint");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdhotspot");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdyoutube");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdaudio");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdmap");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdstreetview");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdaddtocalendar");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdiframe");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdgooglead");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdgenericad");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdpage");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdpagedeck");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdgpadataprovider");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdstudioenablerdataprovider");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdvariantdataprovider");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwddatabinder");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdtexthelper");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdfontloader");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdattached");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd3dmodel");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd3dmodelviewer");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd3dhotspot");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd3dhotspotcontainer");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdparallax");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwddateswap");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdstarratings");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdtransitiongallery");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdparticleeffects");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath(module$exports$ninja$string$path$join("gwdparticleeffects", "gwdparticles"));
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdimageeffect");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdresponsiveattributeshelper");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdswirl");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwdyoutubelivestream");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-ad-exit-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-carousel-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-gwd-animation-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-img-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-pagedeck-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-video-manifest.json");
module$exports$ninja$string$path$join(module$exports$ninja$publish$TypeRegistry$getAmpManifestsRootPath(), "amp-youtube-manifest.json");
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("defaultlibs_v1", !0);
module$contents$ninja$publish$TypeRegistry_getV1GwdManifestPath("gwd_webcomponents_v1", !0);
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("button");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("checkbox");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("label");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("number");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("radio");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("range");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("select");
module$contents$ninja$publish$TypeRegistry_getUiManifestPath("text");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdfade");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdwipe");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwddoorwipe");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdiriswipe");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdradialwipe");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdstripewipe");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdpush");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdsplitpush");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdrotate");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdzigzag");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdslice");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdblinds");
module$contents$ninja$publish$TypeRegistry_getV1TransitionEffectManifestPath("gwdvenetianblinds");
module$contents$ninja$publish$TypeRegistry_getV1ImageEffectTypeManifestPath("gwdbreathe");
module$contents$ninja$publish$TypeRegistry_getV1ImageEffectTypeManifestPath("gwdreveal");
module$contents$ninja$publish$TypeRegistry_getV1ImageEffectTypeManifestPath("gwdbeforeandafter");
module$contents$ninja$publish$TypeRegistry_getV1ImageEffectTypeManifestPath("gwdwave");
function goog$string$subs(str, var_args) {
  const splitParts = str.split("%s");
  let returnString = "";
  const subsArguments = Array.prototype.slice.call(arguments, 1);
  for (; subsArguments.length && 1 < splitParts.length;) {
    returnString += splitParts.shift() + subsArguments.shift();
  }
}
function goog$string$makeSafe(obj) {
  return null == obj ? "" : String(obj);
}
function goog$string$toCamelCase(str) {
  return String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase();
  });
}
;goog$string$toCamelCase("gwd-google-ad");
goog$exportSymbol("ninja.model.preferences.preferencesConstants.Scope", {APP:0, DOCUMENT:1, SHELL:2});
goog$exportSymbol("ninja.model.preferences.preferencesConstants.Keys", {ADVANCED_VERBOSELOGGING:"advanced.verboseLogging", ADVANCED_OVERRIDEZOOM:"advanced.overrideZoom", ADVANCED_ZOOMLEVEL:"advanced.zoomLevel", ADVANCED_CURRENTZOOMLEVEL:"advanced.currentZoomLevel", APPLICATION_LAYOUT:"application.drawer.layout", APPLICATION_VERSION:"application.version", BEAUTIFY_PAD_PARENTHESES:"beautify.padParentheses", BEAUTIFY_INDENT_SIZE:"beautify.indentSize", BEAUTIFY_END_WITH_NEWLINE:"beautify.endWithNewline", 
BEAUTIFY_BRACE_STYLE:"beautify.braceStyle", BEAUTIFY_WRAP_LINES:"beautify.wrapLines", BEAUTIFY_WRAP_LINE_LENGTH:"beautify.wrapLineLength", BEAUTIFY_WRAP_STYLE:"beautify.wrapStyle", BEAUTIFY_SCRIPT_INDENT:"beautify.scriptIndent", BEAUTIFY_NEWLINE_CSS_SELECTORS:"beautify.newlineCssSelectors", BEAUTIFY_NEWLINE_CSS_RULES:"beautify.newlineCssRules", BINDINGS_SAMPLE_PAYLOAD:"bindings.samplePayload", CODEMIRROR_AUTOCLOSEBRACKETS:"codemirror.autoCloseBrackets", CODEMIRROR_AUTOCLOSETAGS:"codemirror.autoCloseTags", 
CODEMIRROR_HIGHLIGHTSELECTIONMATCHES:"codemirror.highlightSelectionMatches", CODEMIRROR_KEYMAP:"codemirror.keymap", CODEMIRROR_LINEWRAP:"codemirror.linewrap", CODEMIRROR_REMEMBERZOOM:"codemirror.rememberZoom", CODEMIRROR_SHOWTRAILINGSPACE:"codemirror.showTrailingSpace", CODEMIRROR_SMARTINDENT:"codemirror.smartIndent", CODEMIRROR_THEME:"codemirror.theme", CODEMIRROR_USESPACESFORTAB:"codemirror.useSpacesForTab", CODEMIRROR_ZOOM:"codemirror.zoom", CODEVIEW_AUTOCOMPLETE:"codeview.autocomplete", CODEVIEW_QUICKSCROLL:"codeview.quickScroll", 
COLOR_APP_CUSTOMCOLORPALETTES:"color.appCustomColorPalettes", COLOR_CUSTOMCOLORPALETTES:"color.customColorPalettes", COMPONENTS_VERSION:"components.version", COMPONENTS_COMPONENTFOR3DASSETS:"components.componentFor3dAssets", COMPONENTS_DELETEUNUSED3DTEXTURES:"components.deleteUnused3dTextures", CONTACT_SHEET_OPENED:"contactSheet.opened", CONTACT_SHEET_ORIENTATION:"contactSheet.orientation", CONTACT_SHEET_SIZE:"contactSheet.size", DESIGN_SHOWRULERS:"design.showrulers", DESIGN_3DGRID:"design.3dgrid", 
DESIGN_GRIDSIZE:"design.gridSize", DESIGN_USERPADDINGLEFT:"design.userpaddingleft", DESIGN_USERPADDINGTOP:"design.userpaddingtop", DESIGN_SCROLLLEFT:"design.scrollleft", DESIGN_SCROLLTOP:"design.scrolltop", DESIGN_ZOOM:"design.zoom", DEV_SETTINGS_AUTOMATION_INPUT_PATH:"devsettings.automationInputPath", DEV_SETTINGS_AUTOMATION_KNOWN_GOOD_PATH:"devsettings.automationKnownGoodPath", DEV_SETTINGS_AUTOMATION_OUTPUT_PATH:"devsettings.automationOutputPath", DEV_SETTINGS_AUTOMATION_SCRIPTS_PATH:"devsettings.automationScriptsPath", 
DEV_SETTINGS_BOOKMARKS:"devsettings.bookmarks", DEV_SETTINGS_CONTINUE_ON_FAILURE:"devsettings.continueOnFailure", DEV_SETTINGS_INITIAL_URL:"devsettings.initialUrl", DEV_SETTINGS_PLAYBACK_SPEED:"devsettings.playbackSpeed", DEV_SETTINGS_PORT:"devsettings.port", DEV_SETTINGS_USE_BUILT_IN_DEV_TOOLS:"devsettings.useBuiltInDevTools", DOCUMENTLIST_RECENTFILES:"documentlist.recentFiles", DYNAMIC_PANEL_LAYOUT:"dynamicPanel.layout", DRAWER_LAYOUT:"drawer.layout", DRAWER_BOTTOM_LAYOUT:"drawer.bottomLayout", 
DYNAMICDIALOG_HEIGHT:"dynamicDialog.height", DYNAMICDIALOG_WIDTH:"dynamicDialog.width", EVENTSDIALOG_HEIGHT:"eventsDialog.height", EVENTSDIALOG_WIDTH:"eventsDialog.width", EVENTS_PANEL_LAYOUT:"eventsPanel.layout", GENERAL_CUSTOMTEMPLATEPATH:"general.customTemplatePath", GENERAL_LAUNCHRECENTFILE:"general.launchRecentFile", GENERAL_REMEMBERTOOLOPTIONS:"general.rememberToolOptions", GENERAL_NEWFILEADTYPE:"general.newFileAdType", GENERAL_NEWFILEENVIRONMENT:"general.newFileEnvironment", HELPPROMPTS_DISMISSED:"helpPrompts.dismissed", 
IMAGE_OPENED:"image.opened", IMAGE_CAPTURE_BASENAME:"image.capture.baseName", IMAGE_CAPTURE_COMPRESSIONRATE:"image.capture.compressionRate", IMAGE_CAPTURE_FORMAT:"image.capture.format", IMAGE_CAPTURE_LOCATION:"image.capture.location", IMAGE_CAPTURE_SELECTEDVARIANTS:"image.capture.selectedVariants", INTERNAL_BOOKMARKS:"internal.bookmarks", KEYBOARDSHORTCUTS_SAVEDSHORTCUTS:"keyboardShortcuts.savedShortcuts", KEYBOARDSHORTCUTS_ACTIVESHORTCUTS:"keyboardShortcuts.activeShortcuts", LIBRARY_COLUMNWIDTHS:"library.columnWidths", 
LIBRARY_DOWNLOADEDASSETS:"library.downloadedAssets", LIBRARY_GROUPSPATH:"library.GroupsPath", LIBRARY_OPENDIRECTORIES:"library.openDirectories", LIBRARY_PANELWIDTH:"library.panelWidth", LIBRARY_SORTCOLUMN:"library.sortColumn", LIBRARY_SORTDIRECTION:"library.sortDirection", LIBRARY_LAYOUT:"library.layout", LS_DEFAULTNEWFILELOCATION:"ls.defaultNewFileLocation", LS_PREVIEWBROWSER:"ls.previewBrowser", LS_RIGHTPANELSCONTAINER:"ls.rightPanelsContainer", LS_STAGEELEMENTOUTLINES:"ls.stageElementOutlines", 
LS_TIMELINE_GRIDSNAPPING:"ls.timeline.keyframeSnapping", LS_TIMELINE_PANELHEIGHT:"ls.timeline.panelHeight", LS_USERLEVEL:"ls.userLevel", OAUTH_LOGGED_IN:"oauth.loggedIn", OUTLINER_SORT_DOM_ORDER:"outliner.sortDomOrder", PREVIEW_BUNDLE_ID:"preview.bundleId", PUBLISH_DRIVE_ADDBORDER:"publish.drive.addBorder", PUBLISH_DRIVE_BORDERCOLOR:"publish.drive.borderColor", PUBLISH_DRIVE_CREATEZIP:"publish.drive.createZip", PUBLISH_DRIVE_EXPORTMOZILLA:"publish.drive.exportMozilla", PUBLISH_DRIVE_EXPORTWEBKIT:"publish.drive.exportWebkit", 
PUBLISH_DRIVE_FLATTEN:"publish.drive.flatten", PUBLISH_DRIVE_INLINEFILES:"publish.drive.inlineFiles", PUBLISH_DRIVE_LOCATION:"publish.drive.location", PUBLISH_DRIVE_MINIFY:"publish.drive.minify", PUBLISH_DRIVE_NAME:"publish.drive.name", PUBLISH_DRIVE_POLITELOAD:"publish.drive.politeLoad", PUBLISH_DRIVE_USELIGHTBORDER:"publish.drive.useLightBorder", PUBLISH_LOCAL_ADDBORDER:"publish.local.addBorder", PUBLISH_LOCAL_BORDERCOLOR:"publish.local.borderColor", PUBLISH_LOCAL_CREATEZIP:"publish.local.createZip", 
PUBLISH_LOCAL_EXPORTMOZILLA:"publish.local.exportMozilla", PUBLISH_LOCAL_EXPORTWEBKIT:"publish.local.exportWebkit", PUBLISH_LOCAL_FLATTEN:"publish.local.flatten", PUBLISH_LOCAL_INLINEFILES:"publish.local.inlineFiles", PUBLISH_LOCAL_LOCATION:"publish.local.location", PUBLISH_LOCAL_MINIFY:"publish.local.minify", PUBLISH_LOCAL_NAME:"publish.local.name", PUBLISH_LOCAL_POLITELOAD:"publish.local.politeLoad", PUBLISH_LOCAL_RESPONSIVE_AS_FIXED_SIZED:"publish.local.isResponsivePublishedAsFixedSized", PUBLISH_LOCAL_RESPONSIVE_UNSELECTED_SIZES:"publish.local.responsiveUnselectedSizes", 
PUBLISH_LOCAL_USELIGHTBORDER:"publish.local.useLightBorder", PUBLISH_LOCAL_WIDTH:"publish.local.width", PUBLISH_LOCAL_HEIGHT:"publish.local.height", PUBLISH_LOCAL_SKIPLOADINGDELAY:"publish.local.skipLoadingDelay", PUBLISH_STUDIO_ADDBORDER:"publish.studio.addBorder", PUBLISH_STUDIO_BORDERCOLOR:"publish.studio.borderColor", PUBLISH_STUDIO_CREATEZIP:"publish.studio.createZip", PUBLISH_STUDIO_EXPORTMOZILLA:"publish.studio.exportMozilla", PUBLISH_STUDIO_EXPORTWEBKIT:"publish.studio.exportWebkit", PUBLISH_STUDIO_FLATTEN:"publish.studio.flatten", 
PUBLISH_STUDIO_INLINEFILES:"publish.studio.inlineFiles", PUBLISH_STUDIO_LOCATION:"publish.studio.location", PUBLISH_STUDIO_MINIFY:"publish.studio.minify", PUBLISH_STUDIO_NAME:"publish.studio.name", PUBLISH_STUDIO_POLITELOAD:"publish.studio.politeLoad", PUBLISH_STUDIO_USELIGHTBORDER:"publish.studio.useLightBorder", PUBLISH_DBM_ADDBORDER:"publish.dbm.addBorder", PUBLISH_DBM_BORDERCOLOR:"publish.dbm.borderColor", PUBLISH_DBM_CREATEZIP:"publish.dbm.createZip", PUBLISH_DBM_EXPORTMOZILLA:"publish.dbm.exportMozilla", 
PUBLISH_DBM_EXPORTWEBKIT:"publish.dbm.exportWebkit", PUBLISH_DBM_FLATTEN:"publish.dbm.flatten", PUBLISH_DBM_INLINEFILES:"publish.dbm.inlineFiles", PUBLISH_DBM_LOCATION:"publish.dbm.location", PUBLISH_DBM_MINIFY:"publish.dbm.minify", PUBLISH_DBM_NAME:"publish.dbm.name", PUBLISH_DBM_POLITELOAD:"publish.dbm.politeLoad", PUBLISH_DBM_USELIGHTBORDER:"publish.dbm.useLightBorder", PUBLISH_DBM_ISCUSTOMFORMAT:"publish.dbm.isCustomFormat", PUBLISH_DBM_FORMAT_ADVERTISER_ID:"publish.dbm.formatAdvertiserId", PUBLISH_DBM_FORMAT_PARTNER_ID:"publish.dbm.formatPartnerId", 
PUBLISH_CM_ADDBORDER:"publish.cm.addBorder", PUBLISH_CM_BORDERCOLOR:"publish.cm.borderColor", PUBLISH_CM_EXPORTMOZILLA:"publish.cm.exportMozilla", PUBLISH_CM_EXPORTWEBKIT:"publish.cm.exportWebkit", PUBLISH_CM_INLINEFILES:"publish.cm.inlineFiles", PUBLISH_CM_POLITELOAD:"publish.cm.politeLoad", PUSH_TO_ACS_CUSTOMER_ACCOUNT_ID:"pushToAcs.customerAccountId", RESPONSIVE_PREVIEWEDSIZES:"responsive.previewedSizes", RESPONSIVE_SELECTED_SIZES:"responsive.selectedSizes", RULER_GUIDES_HORIZONTAL:"ruler.guides.horizontal", 
RULER_GUIDES_VERTICAL:"ruler.guides.vertical", RULER_GUIDES_SHOW:"ruler.guides.show", RULER_GUIDES_LOCK:"ruler.guides.lock", RULER_GUIDES_COLOR:"ruler.guides.color", SCOPE_VERSION:"scope.version", SNAP:"snap.snap", SNAP_THRESHOLD:"snap.threshold", SNAP_PARENT_SIBLINGS_ONLY:"snap.snapParentSiblingsOnly", SNAP_ALIGN:"snap.snapAlign", SNAP_EQUAL_SIZE:"snap.snapEqualSize", SNAP_EQUAL_SPACING:"snap.snapEqualSpacing", SNAP_GRID:"snap.snapGrid", SNAP_GUIDES:"snap.guides", SNAP_OBJECTS:"snap.snapObjects", 
STAGE_MASK:"stage.mask", TEMPLATE_METADATA:"template.metadata", TEMPLATE_MODE:"template.mode", TIMELINE_ANIMATIONMODE:"timeline.animationMode", TIMELINE_COLLAPSE_STATE:"timeline.collapseState", TIMELINE_LAYERWIDTH:"timeline.layerWidth", TIMELINE_SHOWONLYANIMATEDLAYERS:"timeline.showOnlyAnimatedLayers", TIMELINE_LOOP_PREVIEW:"timeline.loopPreview", TIMELINE_CUSTOM_EASES:"timeline.customEases", TIMELINE_ZOOM_LEVEL:"timeline.zoomLevel", TIMELINE_OBJECTSNAPPING:"timeline.objectSnapping", TIMELINE_PREVIEW_RANGES:"timeline.previewRanges", 
TOOL_SELECTION_ALIGNTOCONTAINER:"tool.selection.alignToContainer", TOOL_SELECTION_FLUIDLAYOUT:"tool.selection.fluidLayout", TOOL_SELECTION_TRANSFORMCONTROL:"tool.selection.transformControl", TOOL_TEXT_OPTIONSSTATE:"tool.text.optionsState", VIDEO_FPS:"video.fps", VIDEO_OPENED:"video.opened", VIDEO_PREVIEW_RESOLUTION:"video.preview.resolution", VIDEO_PUBLISH_LOCAL_FRAMERATESCALE:"video.publish.local.frameRateScale", VIDEO_PUBLISH_LOCAL_FRAMESIZESCALE:"video.publish.local.frameSizeScale", VIDEO_PUBLISH_LOCAL_LOCATION:"video.publish.local.location", 
VIDEO_PUBLISH_LOCAL_NAME:"video.publish.local.name", VIDEO_PUBLISH_LOCAL_ONLYOUTPUTPREVIEWRANGE:"video.publish.local.onlyOutputPreviewRange", VIDEO_PUBLISH_LOCAL_H264PROFILE:"video.publish.local.h264Profile", VIDEO_PUBLISH_LOCAL_VIDEOBITRATE:"video.publish.local.videoBitrate", VIDEO_PUBLISH_LOCAL_AUDIOBITRATE:"video.publish.local.audioBitrate", VIDEO_PUBLISH_LOCAL_SELECTEDVARIANTS:"video.publish.local.selectedVariants", VIDEO_PUBLISH_LOCAL_OUTPUTFORMAT:"video.publish.local.outputFormat", VIDEO_PUBLISH_LOCAL_UNSELECTEDSIZES:"video.publish.local.unselectedSizes", 
VIDEO_PUBLISH_LOCAL_GIFLOOP:"video.publish.local.gifLoop", VIDEO_PUBLISH_LOCAL_GIFMAXCOLORS:"video.publish.local.gifMaxColors", VIDEO_PUBLISH_LOCAL_GIFDITHER:"video.publish.local.gifDither", VIEWPORT_HEIGHT:"viewport.height", VIEWPORT_WIDTH:"viewport.width", VIEWPORT_RESIZER_SHOWN:"viewportresizer.shown", WORKSPACE_ACTIVE_LAYOUT_NAME:"workspace.activeLayoutName", WORKSPACE_CUSTOMIZED_LAYOUTS:"workspace.customizedLayouts", WORKSPACE_LATEST_LAYOUT:"workspace.latestLayout", WORKSPACE_USER_SAVED_PRESETS:"workspace.userSavedPresets"});
goog$exportSymbol("ninja.model.preferences.preferencesConstants.ElementOutlineTypes", {NO_OUTLINES:"noOutlines", OUTLINES_ONLY:"outlinesOnly", OUTLINES_WITH_LABELS:"outlinesWithLabels"});
function goog$Disposable() {
  this.disposed_ = this.disposed_;
  this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
}
goog$Disposable.prototype.disposed_ = !1;
goog$Disposable.prototype.disposeInternal = function() {
  if (this.onDisposeCallbacks_) {
    for (; this.onDisposeCallbacks_.length;) {
      this.onDisposeCallbacks_.shift()();
    }
  }
};
function goog$events$Event(type, opt_target) {
  this.type = type;
  this.JSC$2369_currentTarget = this.target = opt_target;
  this.defaultPrevented = !1;
}
goog$events$Event.prototype.JSC$2371_preventDefault = function() {
  this.defaultPrevented = !0;
};
goog$exportSymbol("ninja.model.av.avConstants.AUDIO_TRACK_TAG_NAME", "gwd-audio-track");
var module$exports$ninja$model$av$avConstants$AV_ATTRIBUTE_PREFIXES = [module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`clip-`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`double`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`duration`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`effect`, 
module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`end`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`in-`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`is-`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`link-`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`minimized`, 
module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`muted`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`source`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`start`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`track-height`, module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix`volume`];
function goog$math$clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function goog$math$lerp(a, b, x) {
  return a + x * (b - a);
}
;function JSCompiler_StaticMethods_load_(JSCompiler_StaticMethods_load_$self) {
  JSCompiler_StaticMethods_load_$self.loadPromise_ = new Promise(resolve => {
    const resolvePromise = loadState => {
      JSCompiler_StaticMethods_load_$self.loadState_ = loadState;
      JSCompiler_StaticMethods_load_$self.loadPromise_ = null;
      JSCompiler_StaticMethods_load_$self.video_.removeEventListener("loadedmetadata", loadCallback);
      JSCompiler_StaticMethods_load_$self.video_.removeEventListener("error", errorCallback);
      resolve();
    }, loadCallback = () => {
      JSCompiler_StaticMethods_load_$self.canvas_.width = JSCompiler_StaticMethods_load_$self.video_.videoWidth;
      JSCompiler_StaticMethods_load_$self.canvas_.height = JSCompiler_StaticMethods_load_$self.video_.videoHeight;
      const fullResHeight = JSCompiler_StaticMethods_load_$self.clip_.getAttribute("full-res-height"), fullResWidth = JSCompiler_StaticMethods_load_$self.clip_.getAttribute("full-res-width");
      "none" === JSCompiler_StaticMethods_load_$self.clip_.parentElement.getAttribute("clip-scaling") && fullResHeight && fullResWidth && (JSCompiler_StaticMethods_load_$self.canvas_.style.width = `${fullResWidth}px`, JSCompiler_StaticMethods_load_$self.canvas_.style.height = `${fullResHeight}px`);
      JSCompiler_StaticMethods_load_$self.canvas_.style.display = "";
      resolvePromise("loaded");
    }, errorCallback = () => {
      resolvePromise("error");
    };
    JSCompiler_StaticMethods_load_$self.video_.addEventListener("loadedmetadata", loadCallback);
    JSCompiler_StaticMethods_load_$self.video_.addEventListener("error", errorCallback);
    JSCompiler_StaticMethods_load_$self.video_.setAttribute("src", JSCompiler_StaticMethods_load_$self.clip_.getAttribute("source"));
  });
}
function JSCompiler_StaticMethods_JSC$2379_seek(JSCompiler_StaticMethods_JSC$2379_seek$self, timeMs) {
  if (JSCompiler_StaticMethods_JSC$2379_seek$self.seekPromise_) {
    return Promise.reject();
  }
  const oldTimeMs = JSCompiler_StaticMethods_JSC$2379_seek$self.video_.currentTime / 1E3, updateTime = new Promise(resolve => {
    const needsToLoad = "notLoaded" === JSCompiler_StaticMethods_JSC$2379_seek$self.loadState_;
    needsToLoad && JSCompiler_StaticMethods_load_(JSCompiler_StaticMethods_JSC$2379_seek$self);
    (JSCompiler_StaticMethods_JSC$2379_seek$self.loadPromise_ || Promise.resolve()).then(() => {
      "loaded" === JSCompiler_StaticMethods_JSC$2379_seek$self.loadState_ ? (timeMs = goog$math$clamp(timeMs, 0, 1E3 * JSCompiler_StaticMethods_JSC$2379_seek$self.video_.duration), !needsToLoad && .1 >= Math.abs(1E3 * JSCompiler_StaticMethods_JSC$2379_seek$self.video_.currentTime - timeMs) ? resolve(!0) : (JSCompiler_StaticMethods_JSC$2379_seek$self.video_.requestVideoFrameCallback(() => {
        resolve(!0);
      }), JSCompiler_StaticMethods_JSC$2379_seek$self.video_.currentTime = (needsToLoad && .1 > timeMs ? .1 : timeMs) / 1E3)) : resolve(!1);
    });
  });
  JSCompiler_StaticMethods_JSC$2379_seek$self.seekPromise_ = Promise.race([updateTime, new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new module$exports$ninja$capture$AppError$AppError(3, `Timed out seeking ${JSCompiler_StaticMethods_JSC$2379_seek$self.video_.getAttribute("src")} from ` + `${oldTimeMs} to ${timeMs}`));
    }, 1E4);
  })]).then(success => {
    success && JSCompiler_StaticMethods_JSC$2379_seek$self.canvas_.getContext("2d").drawImage(JSCompiler_StaticMethods_JSC$2379_seek$self.video_, 0, 0, JSCompiler_StaticMethods_JSC$2379_seek$self.canvas_.width, JSCompiler_StaticMethods_JSC$2379_seek$self.canvas_.height);
    JSCompiler_StaticMethods_JSC$2379_seek$self.seekPromise_ = null;
  });
  return JSCompiler_StaticMethods_JSC$2379_seek$self.seekPromise_;
}
var module$exports$ninja$capture$BackingVideo$BackingVideo = class {
  constructor(clip) {
    this.clip_ = clip;
    this.video_ = document.createElement("video");
    this.canvas_ = document.createElement("canvas");
    this.loadPromise_ = null;
    this.loadState_ = "notLoaded";
    this.seekPromise_ = null;
    this.video_.style.display = "none";
    this.video_.autoplay = !1;
    this.video_.controls = !1;
    this.clip_.appendChild(this.video_);
    this.canvas_.style.display = "none";
    this.canvas_.style.position = "absolute";
    this.canvas_.style.width = "100%";
    this.canvas_.style.height = "100%";
    this.clip_.appendChild(this.canvas_);
  }
};
function goog$vec$Float32Array(p0) {
  this.length = p0.length || p0;
  for (let i = 0; i < this.length; i++) {
    this[i] = p0[i] || 0;
  }
}
goog$vec$Float32Array.prototype.set = function(values, opt_offset) {
  opt_offset = opt_offset || 0;
  for (let i = 0; i < values.length && opt_offset + i < this.length; i++) {
    this[opt_offset + i] = values[i];
  }
};
goog$vec$Float32Array.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (goog$vec$Float32Array.BYTES_PER_ELEMENT = 4, goog$vec$Float32Array.prototype.BYTES_PER_ELEMENT = 4, goog$vec$Float32Array.prototype.set = goog$vec$Float32Array.prototype.set, goog$vec$Float32Array.prototype.toString = goog$vec$Float32Array.prototype.toString, goog$exportSymbol("Float32Array", goog$vec$Float32Array));
function goog$vec$Float64Array(p0) {
  this.length = p0.length || p0;
  for (let i = 0; i < this.length; i++) {
    this[i] = p0[i] || 0;
  }
}
goog$vec$Float64Array.prototype.set = function(values, opt_offset) {
  opt_offset = opt_offset || 0;
  for (let i = 0; i < values.length && opt_offset + i < this.length; i++) {
    this[opt_offset + i] = values[i];
  }
};
goog$vec$Float64Array.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
  try {
    goog$vec$Float64Array.BYTES_PER_ELEMENT = 8;
  } catch (float64ArrayError) {
  }
  goog$vec$Float64Array.prototype.BYTES_PER_ELEMENT = 8;
  goog$vec$Float64Array.prototype.set = goog$vec$Float64Array.prototype.set;
  goog$vec$Float64Array.prototype.toString = goog$vec$Float64Array.prototype.toString;
  goog$exportSymbol("Float64Array", goog$vec$Float64Array);
}
;function goog$vec$vec2d$create() {
  return new Float64Array(2);
}
function goog$vec$vec2d$createFromValues(v0, v1) {
  const vec = goog$vec$vec2d$create();
  goog$vec$vec2d$setFromValues(vec, v0, v1);
  return vec;
}
function goog$vec$vec2d$clone(vec) {
  const newVec = goog$vec$vec2d$create();
  newVec[0] = vec[0];
  newVec[1] = vec[1];
  return newVec;
}
function goog$vec$vec2d$setFromValues(vec, v0, v1) {
  vec[0] = v0;
  vec[1] = v1;
  return vec;
}
function goog$vec$vec2d$distanceSquared(vec0, vec1) {
  const x = vec0[0] - vec1[0];
  vec0 = vec0[1] - vec1[1];
  return x * x + vec0 * vec0;
}
;function goog$vec$vec3d$create() {
  return new Float64Array(3);
}
function goog$vec$vec3d$createFromValues(v0, v1, v2) {
  const vec = goog$vec$vec3d$create();
  vec[0] = v0;
  vec[1] = v1;
  vec[2] = v2;
  return vec;
}
function goog$vec$vec3d$subtract(vec0, vec1) {
  var resultVec = goog$vec$vec3d$create();
  resultVec[0] = vec0[0] - vec1[0];
  resultVec[1] = vec0[1] - vec1[1];
  resultVec[2] = vec0[2] - vec1[2];
  return resultVec;
}
function goog$vec$vec3d$scale(vec0, scalar, resultVec) {
  resultVec[0] = vec0[0] * scalar;
  resultVec[1] = vec0[1] * scalar;
  resultVec[2] = vec0[2] * scalar;
}
function goog$vec$vec3d$normalize(vec0) {
  var resultVec = goog$vec$vec3d$create();
  const x = vec0[0], y = vec0[1];
  vec0 = vec0[2];
  const ilen = 1 / Math.sqrt(x * x + y * y + vec0 * vec0);
  resultVec[0] = x * ilen;
  resultVec[1] = y * ilen;
  resultVec[2] = vec0 * ilen;
  return resultVec;
}
function goog$vec$vec3d$dot(v0, v1) {
  return v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];
}
function goog$vec$vec3d$cross(v0, v1, resultVec) {
  const x0 = v0[0], y0 = v0[1];
  v0 = v0[2];
  const x1 = v1[0], y1 = v1[1];
  v1 = v1[2];
  resultVec[0] = y0 * v1 - v0 * y1;
  resultVec[1] = v0 * x1 - x0 * v1;
  resultVec[2] = x0 * y1 - y0 * x1;
  return resultVec;
}
;function goog$vec$vec4d$createFromValues(v1, v2) {
  const vec = new Float64Array(4);
  vec[0] = 0;
  vec[1] = v1;
  vec[2] = v2;
  vec[3] = 1;
  return vec;
}
;function goog$vec$mat4d$createIdentity() {
  const mat = new Float64Array(16);
  mat[0] = mat[5] = mat[10] = mat[15] = 1;
  return mat;
}
function goog$vec$mat4d$addMat(mat0, mat1, resultMat) {
  resultMat[0] = mat0[0] + mat1[0];
  resultMat[1] = mat0[1] + mat1[1];
  resultMat[2] = mat0[2] + mat1[2];
  resultMat[3] = mat0[3] + mat1[3];
  resultMat[4] = mat0[4] + mat1[4];
  resultMat[5] = mat0[5] + mat1[5];
  resultMat[6] = mat0[6] + mat1[6];
  resultMat[7] = mat0[7] + mat1[7];
  resultMat[8] = mat0[8] + mat1[8];
  resultMat[9] = mat0[9] + mat1[9];
  resultMat[10] = mat0[10] + mat1[10];
  resultMat[11] = mat0[11] + mat1[11];
  resultMat[12] = mat0[12] + mat1[12];
  resultMat[13] = mat0[13] + mat1[13];
  resultMat[14] = mat0[14] + mat1[14];
  resultMat[15] = mat0[15] + mat1[15];
}
goog$vec$vec3d$create();
goog$vec$vec3d$create();
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
function module$exports$ninja$math$mathUtils$fpSign(a, tol = 1E-7) {
  tol = 0 <= tol ? tol : 1E-7;
  return a < -tol ? -1 : a > tol ? 1 : 0;
}
function module$exports$ninja$math$mathUtils$fpCmp(a, b, tol = 1E-7) {
  return module$exports$ninja$math$mathUtils$fpSign(a - b, tol);
}
function module$exports$ninja$math$mathUtils$equalsWithinTol(a, b, tol = 1E-7) {
  return 0 == module$exports$ninja$math$mathUtils$fpSign(a - b, tol);
}
function module$exports$ninja$math$mathUtils$cleanseFloatingPoint(n, sigDig = 10) {
  let isArray = !1;
  Array.isArray(n) ? (isArray = !0, n = n.slice(0)) : n = [n];
  for (let i = 0; i < n.length; i++) {
    var num = n[i];
    if (1E-4 > Math.abs(num)) {
      num = "0";
    } else {
      const rNum = Math.round(num);
      num != rNum && 1E-7 > Math.abs(num - rNum) && (num = rNum);
      num = Math.round(num + "e" + sigDig) + "e-" + sigDig;
    }
    n[i] = Number(num);
  }
  return isArray ? n : n[0];
}
function module$exports$ninja$math$mathUtils$makeDimension4(vec) {
  const dimen = vec.length;
  if (4 > dimen) {
    for (var i = 0; i < 3 - dimen; i++) {
      vec.push(0);
    }
    vec.push(1);
  } else if (4 < dimen) {
    for (i = 0; i < dimen - 4; i++) {
      vec.pop();
    }
  }
  return vec;
}
function module$exports$ninja$math$mathUtils$vecDot(v0, v1) {
  if (4 > v0.length || 4 > v1.length) {
    throw Error("dimension error in VecUtils.vecDot");
  }
  let sum = 0;
  for (let i = 0; 4 > i; i++) {
    sum += v0[i] * v1[i];
  }
  return sum;
}
function module$exports$ninja$math$mathUtils$transformHomogeneousPoint(srcPt, mat) {
  const pt = srcPt.slice(0);
  module$exports$ninja$math$mathUtils$makeDimension4(pt);
  srcPt = module$exports$ninja$math$mathUtils$vecDot(pt, [mat[0], mat[4], mat[8], mat[12]]);
  const y = module$exports$ninja$math$mathUtils$vecDot(pt, [mat[1], mat[5], mat[9], mat[13]]), z = module$exports$ninja$math$mathUtils$vecDot(pt, [mat[2], mat[6], mat[10], mat[14]]);
  mat = module$exports$ninja$math$mathUtils$vecDot(pt, [mat[3], mat[7], mat[11], mat[15]]);
  return [srcPt, y, z, mat];
}
function module$exports$ninja$math$mathUtils$applyHomogeneousCoordinate(hPt) {
  const w = hPt[3];
  hPt[0] /= w;
  hPt[1] /= w;
  hPt[2] /= w;
  hPt[3] = 1;
  return hPt;
}
function module$exports$ninja$math$mathUtils$cssToMatrix(css) {
  let mat = null;
  try {
    const index1 = css.indexOf("perspective(");
    if (-1 < index1) {
      const index2 = css.indexOf(")", index1);
      -1 < index2 && (css = css.substring(index2 + 1).replace(/^[\s\xa0]+/, ""));
    }
    const cssMat = new WebKitCSSMatrix(css);
    var mat$jscomp$0 = new Float64Array(16), v10 = cssMat.m12, v20 = cssMat.m13, v30 = cssMat.m14, v01 = cssMat.m21, v11 = cssMat.m22, v21 = cssMat.m23, v31 = cssMat.m24, v02 = cssMat.m31, v12 = cssMat.m32, v22 = cssMat.m33, v32 = cssMat.m34, v03 = cssMat.m41, v13 = cssMat.m42, v23 = cssMat.m43, v33 = cssMat.m44;
    mat$jscomp$0[0] = cssMat.m11;
    mat$jscomp$0[1] = v10;
    mat$jscomp$0[2] = v20;
    mat$jscomp$0[3] = v30;
    mat$jscomp$0[4] = v01;
    mat$jscomp$0[5] = v11;
    mat$jscomp$0[6] = v21;
    mat$jscomp$0[7] = v31;
    mat$jscomp$0[8] = v02;
    mat$jscomp$0[9] = v12;
    mat$jscomp$0[10] = v22;
    mat$jscomp$0[11] = v32;
    mat$jscomp$0[12] = v03;
    mat$jscomp$0[13] = v13;
    mat$jscomp$0[14] = v23;
    mat$jscomp$0[15] = v33;
    mat = mat$jscomp$0;
  } catch (e) {
  }
  return mat;
}
function module$exports$ninja$math$mathUtils$decomposeTransform(mat) {
  const tX = mat[12], tY = mat[13], tZ = mat[14];
  let sX = Math.sqrt(mat[0] * mat[0] + mat[1] * mat[1] + mat[2] * mat[2]);
  const sY = Math.sqrt(mat[4] * mat[4] + mat[5] * mat[5] + mat[6] * mat[6]), sZ = Math.sqrt(mat[8] * mat[8] + mat[9] * mat[9] + mat[10] * mat[10]);
  var zeroXScale = module$exports$ninja$math$mathUtils$equalsWithinTol(sX, 0, 1E-7), zeroYScale = module$exports$ninja$math$mathUtils$equalsWithinTol(sY, 0, 1E-7), zeroZScale = module$exports$ninja$math$mathUtils$equalsWithinTol(sZ, 0, 1E-7), zeroScaleCount = (zeroXScale ? 1 : 0) + (zeroYScale ? 1 : 0) + (zeroZScale ? 1 : 0);
  if (1 < zeroScaleCount) {
    return {translation:[tX, tY, tZ], rotation:[0, 0, 0], scale:[sX, sY, sZ]};
  }
  var row1 = goog$vec$vec3d$createFromValues(mat[0], mat[1], mat[2]), row2 = goog$vec$vec3d$createFromValues(mat[4], mat[5], mat[6]), row3 = goog$vec$vec3d$createFromValues(mat[8], mat[9], mat[10]);
  goog$vec$vec3d$scale(row1, zeroXScale ? 1 : 1 / sX, row1);
  goog$vec$vec3d$scale(row2, zeroYScale ? 1 : 1 / sY, row2);
  goog$vec$vec3d$scale(row3, zeroZScale ? 1 : 1 / sZ, row3);
  1 == zeroScaleCount && (zeroXScale ? goog$vec$vec3d$cross(row2, row3, row1) : zeroYScale ? goog$vec$vec3d$cross(row3, row1, row2) : goog$vec$vec3d$cross(row1, row2, row3));
  zeroXScale = new Float64Array(16);
  zeroXScale[0] = mat[0];
  zeroXScale[1] = mat[1];
  zeroXScale[2] = mat[2];
  zeroXScale[3] = mat[3];
  zeroXScale[4] = mat[4];
  zeroXScale[5] = mat[5];
  zeroXScale[6] = mat[6];
  zeroXScale[7] = mat[7];
  zeroXScale[8] = mat[8];
  zeroXScale[9] = mat[9];
  zeroXScale[10] = mat[10];
  zeroXScale[11] = mat[11];
  zeroXScale[12] = mat[12];
  zeroXScale[13] = mat[13];
  zeroXScale[14] = mat[14];
  zeroXScale[15] = mat[15];
  mat = zeroXScale;
  mat[0] = row1[0];
  mat[1] = row1[1];
  mat[2] = row1[2];
  mat[4] = row2[0];
  mat[5] = row2[1];
  mat[6] = row2[2];
  mat[8] = row3[0];
  mat[9] = row3[1];
  mat[10] = row3[2];
  row1 = mat[0];
  row2 = mat[1];
  row3 = mat[2];
  zeroXScale = mat[3];
  zeroYScale = mat[4];
  zeroZScale = mat[5];
  zeroScaleCount = mat[6];
  const m31 = mat[7], m02 = mat[8], m12 = mat[9], m22 = mat[10], m32 = mat[11], m03 = mat[12], m13 = mat[13], m23 = mat[14], m33 = mat[15];
  0 > (row1 * zeroZScale - row2 * zeroYScale) * (m22 * m33 - m32 * m23) - (row1 * zeroScaleCount - row3 * zeroYScale) * (m12 * m33 - m32 * m13) + (row1 * m31 - zeroXScale * zeroYScale) * (m12 * m23 - m22 * m13) + (row2 * zeroScaleCount - row3 * zeroZScale) * (m02 * m33 - m32 * m03) - (row2 * m31 - zeroXScale * zeroZScale) * (m02 * m23 - m22 * m03) + (row3 * m31 - zeroXScale * zeroScaleCount) * (m02 * m13 - m12 * m03) && (sX = -sX, mat[0] = -mat[0], mat[1] = -mat[1], mat[2] = -mat[2]);
  0 > module$exports$ninja$math$mathUtils$fpCmp(mat[2], 1) ? 0 < module$exports$ninja$math$mathUtils$fpCmp(mat[2], -1) ? (row1 = Math.atan2(mat[6], mat[10]), row2 = Math.atan2(-mat[2], Math.sqrt(mat[6] * mat[6] + mat[10] * mat[10])), mat = Math.atan2(mat[1], mat[0])) : (row1 = 0, row2 = .5 * Math.PI, mat = -Math.atan2(-mat[9], mat[5])) : (row1 = 0, row2 = -.5 * Math.PI, mat = Math.atan2(-mat[9], mat[5]));
  return {translation:[tX, tY, tZ], rotation:[row1, row2, mat], scale:[sX, sY, sZ]};
}
function module$exports$ninja$math$mathUtils$paramPointProjectionOnLine(pt, segP0, segP1) {
  return ((pt[0] - segP0[0]) * (segP1[0] - segP0[0]) + (pt[1] - segP0[1]) * (segP1[1] - segP0[1])) / goog$vec$vec2d$distanceSquared(segP0, segP1);
}
goog$exportSymbol("ninja.math.mathUtils.applyHomogeneousCoordinate", module$exports$ninja$math$mathUtils$applyHomogeneousCoordinate);
goog$exportSymbol("ninja.math.mathUtils.cleanseFloatingPoint", module$exports$ninja$math$mathUtils$cleanseFloatingPoint);
goog$exportSymbol("ninja.math.mathUtils.cssToMatrix", module$exports$ninja$math$mathUtils$cssToMatrix);
goog$exportSymbol("ninja.math.mathUtils.decomposeTransform", module$exports$ninja$math$mathUtils$decomposeTransform);
goog$exportSymbol("ninja.math.mathUtils.distPointToSegment", function(pt, segP0, segP1) {
  if (goog$vec$vec2d$distanceSquared(segP0, segP1) < 1E-7 * 1E-7) {
    segP1 = segP0;
  } else {
    var f = goog$math$clamp(module$exports$ninja$math$mathUtils$paramPointProjectionOnLine(pt, segP0, segP1), 0, 1), resultVec = goog$vec$vec2d$create();
    const x = segP0[0];
    segP0 = segP0[1];
    resultVec[0] = (segP1[0] - x) * f + x;
    resultVec[1] = (segP1[1] - segP0) * f + segP0;
    segP1 = resultVec;
  }
  return Math.sqrt(goog$vec$vec2d$distanceSquared(segP1, pt));
});
goog$exportSymbol("ninja.math.mathUtils.equalsWithinTol", module$exports$ninja$math$mathUtils$equalsWithinTol);
goog$exportSymbol("ninja.math.mathUtils.fpCmp", module$exports$ninja$math$mathUtils$fpCmp);
goog$exportSymbol("ninja.math.mathUtils.fpSign", module$exports$ninja$math$mathUtils$fpSign);
goog$exportSymbol("ninja.math.mathUtils.hasTranslation", function(mat, tol = 1E-7) {
  return 0 != module$exports$ninja$math$mathUtils$fpCmp(mat[12], 0, tol) || 0 != module$exports$ninja$math$mathUtils$fpCmp(mat[13], 0, tol) || 0 != module$exports$ninja$math$mathUtils$fpCmp(mat[14], 0, tol);
});
goog$exportSymbol("ninja.math.mathUtils.hasRotation", function(mat, tol = 1E-7) {
  return !mat || 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[1], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[2], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[3], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[4], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[6], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[7], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[8], 0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[9], 
  0, tol) && 0 === module$exports$ninja$math$mathUtils$fpCmp(mat[11], 0, tol) ? !1 : !0;
});
goog$exportSymbol("ninja.math.mathUtils.isIdentityMatrix", function(mat, tol = 1E-7) {
  return 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[0], 1, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[1], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[2], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[3], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[4], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[5], 1, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[6], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[7], 
  0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[8], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[9], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[10], 1, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[11], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[12], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[13], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[14], 0, tol) && 0 == module$exports$ninja$math$mathUtils$fpCmp(mat[15], 
  1, tol);
});
goog$exportSymbol("ninja.math.mathUtils.lineIntersection2D", function(line1Pt1, line1Pt2, line2Pt1, line2Pt2, tol = 1E-7) {
  const denom = (line2Pt2[1] - line2Pt1[1]) * (line1Pt2[0] - line1Pt1[0]) - (line2Pt2[0] - line2Pt1[0]) * (line1Pt2[1] - line1Pt1[1]);
  if (Math.abs(denom) <= tol) {
    return null;
  }
  line2Pt1 = (line2Pt2[0] - line2Pt1[0]) * (line1Pt1[1] - line2Pt1[1]) - (line2Pt2[1] - line2Pt1[1]) * (line1Pt1[0] - line2Pt1[0]);
  line2Pt1 /= denom;
  return goog$vec$vec2d$createFromValues(line1Pt1[0] + line2Pt1 * (line1Pt2[0] - line1Pt1[0]), line1Pt1[1] + line2Pt1 * (line1Pt2[1] - line1Pt1[1]));
});
goog$exportSymbol("ninja.math.mathUtils.makeDimension4", module$exports$ninja$math$mathUtils$makeDimension4);
goog$exportSymbol("ninja.math.mathUtils.matricesAreEqual", function(m1, m2, tol = 1E-7) {
  if (m1.length != m2.length) {
    return !1;
  }
  for (let i = 0; i < m1.length; i++) {
    if (0 != module$exports$ninja$math$mathUtils$fpCmp(m1[i], m2[i], tol)) {
      return !1;
    }
  }
  return !0;
});
goog$exportSymbol("ninja.math.mathUtils.vectorsAreEqual", function(v1, v2, tol = 1E-7) {
  if (v1.length != v2.length) {
    return !1;
  }
  for (let i = 0; i < v1.length; i++) {
    if (0 != module$exports$ninja$math$mathUtils$fpCmp(v1[i], v2[i], tol)) {
      return !1;
    }
  }
  return !0;
});
goog$exportSymbol("ninja.math.mathUtils.paramPointProjectionOnLine", module$exports$ninja$math$mathUtils$paramPointProjectionOnLine);
goog$exportSymbol("ninja.math.mathUtils.quadraticRoots", function(a, b, c, range) {
  function saveRoot(r) {
    range ? 0 <= module$exports$ninja$math$mathUtils$fpCmp(r, range[0]) && 0 >= module$exports$ninja$math$mathUtils$fpCmp(r, range[1]) && roots.push(r) : roots.push(r);
  }
  const roots = [], discr = b * b - 4 * a * c;
  if (0 > discr) {
    return roots;
  }
  if (0 == module$exports$ninja$math$mathUtils$fpSign(a)) {
    return module$exports$ninja$math$mathUtils$fpSign(b) && roots.push(-c / b), roots;
  }
  c = Math.sqrt(discr);
  saveRoot((-b + c) / (2 * a));
  0 != module$exports$ninja$math$mathUtils$fpSign(discr) && saveRoot((-b - c) / (2 * a));
  return roots;
});
goog$exportSymbol("ninja.math.mathUtils.subdivideBezierSegment", function(seg, dimen, param) {
  var pts = seg.slice(0);
  if (0 == module$exports$ninja$math$mathUtils$fpSign(param) || 0 == module$exports$ninja$math$mathUtils$fpCmp(param, 1)) {
    return pts;
  }
  seg = pts.length / dimen;
  var i1 = dimen * seg - dimen;
  const first = pts.slice(0, dimen);
  i1 = pts.slice(i1, i1 + dimen);
  let delta = [];
  for (; 1 < seg;) {
    let index = dimen;
    for (let i = 1; i < seg; i++) {
      for (let j = 0; j < dimen; j++) {
        delta.push(pts[index + j - dimen] + param * (pts[index + j] - pts[index + j - dimen]));
      }
      index += dimen;
    }
    seg--;
    for (pts = 0; pts < dimen; pts++) {
      first.push(delta[pts]), 1 < seg && i1.unshift(delta[seg * dimen - 1 - pts]);
    }
    pts = delta;
    delta = [];
  }
  return first.concat(i1);
});
goog$exportSymbol("ninja.math.mathUtils.transformAndDivideHomogeneousPoint", function(pt, mat) {
  return module$exports$ninja$math$mathUtils$applyHomogeneousCoordinate(module$exports$ninja$math$mathUtils$transformHomogeneousPoint(pt, mat));
});
goog$exportSymbol("ninja.math.mathUtils.transformHomogeneousPoint", module$exports$ninja$math$mathUtils$transformHomogeneousPoint);
goog$exportSymbol("ninja.math.mathUtils.getVecRotationMatrix", function(vec0, vec1) {
  var v0 = goog$vec$vec3d$normalize(vec0), v1 = goog$vec$vec3d$normalize(vec1);
  vec0 = goog$vec$vec3d$dot(v0, v1);
  vec1 = goog$vec$mat4d$createIdentity();
  if (0 != module$exports$ninja$math$mathUtils$fpCmp(vec0, 1)) {
    if (0 == module$exports$ninja$math$mathUtils$fpCmp(vec0, -1)) {
      vec0 = goog$vec$vec3d$createFromValues(1, 0, 0);
      v1 = goog$vec$vec3d$cross(vec0, v0, goog$vec$vec3d$create());
      var x = v1[0], y = v1[1], z = v1[2];
      0 == module$exports$ninja$math$mathUtils$fpCmp(Math.sqrt(x * x + y * y + z * z), 0) && (vec0[0] = 0, vec0[1] = 1, vec0[2] = 0, goog$vec$vec3d$cross(vec0, v0, v1));
      vec0 = v1[0];
      v0 = v1[1];
      v1 = v1[2];
      z = Math.PI;
      x = Math.cos(z);
      y = 1 - x;
      z = Math.sin(z);
      vec1[0] = vec0 * vec0 * y + x;
      vec1[1] = vec0 * v0 * y + v1 * z;
      vec1[2] = vec0 * v1 * y - v0 * z;
      vec1[3] = 0;
      vec1[4] = vec0 * v0 * y - v1 * z;
      vec1[5] = v0 * v0 * y + x;
      vec1[6] = v0 * v1 * y + vec0 * z;
      vec1[7] = 0;
      vec1[8] = vec0 * v1 * y + v0 * z;
      vec1[9] = v0 * v1 * y - vec0 * z;
      vec1[10] = v1 * v1 * y + x;
      vec1[11] = 0;
      vec1[12] = 0;
      vec1[13] = 0;
      vec1[14] = 0;
      vec1[15] = 1;
    } else {
      var v2 = goog$vec$vec3d$cross(v0, v1, goog$vec$vec3d$create());
      v0 = new Float64Array(16);
      v1 = v2[2];
      x = -v2[1];
      y = -v2[2];
      z = v2[0];
      var v02 = v2[1];
      v2 = -v2[0];
      v0[0] = 0;
      v0[1] = v1;
      v0[2] = x;
      v0[3] = 0;
      v0[4] = y;
      v0[5] = 0;
      v0[6] = z;
      v0[7] = 0;
      v0[8] = v02;
      v0[9] = v2;
      v0[10] = 0;
      v0[11] = 0;
      v0[12] = 0;
      v0[13] = 0;
      v0[14] = 0;
      v0[15] = 0;
      v1 = new Float64Array(16);
      x = v0[0];
      y = v0[1];
      z = v0[2];
      v02 = v0[3];
      v2 = v0[4];
      const a11 = v0[5], a21 = v0[6], a31 = v0[7], a02 = v0[8], a12 = v0[9], a22 = v0[10], a32 = v0[11], a03 = v0[12], a13 = v0[13], a23 = v0[14], a33 = v0[15], b00 = v0[0], b10 = v0[1], b20 = v0[2], b30 = v0[3], b01 = v0[4], b11 = v0[5], b21 = v0[6], b31 = v0[7], b02 = v0[8], b12 = v0[9], b22 = v0[10], b32 = v0[11], b03 = v0[12], b13 = v0[13], b23 = v0[14], b33 = v0[15];
      v1[0] = x * b00 + v2 * b10 + a02 * b20 + a03 * b30;
      v1[1] = y * b00 + a11 * b10 + a12 * b20 + a13 * b30;
      v1[2] = z * b00 + a21 * b10 + a22 * b20 + a23 * b30;
      v1[3] = v02 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
      v1[4] = x * b01 + v2 * b11 + a02 * b21 + a03 * b31;
      v1[5] = y * b01 + a11 * b11 + a12 * b21 + a13 * b31;
      v1[6] = z * b01 + a21 * b11 + a22 * b21 + a23 * b31;
      v1[7] = v02 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
      v1[8] = x * b02 + v2 * b12 + a02 * b22 + a03 * b32;
      v1[9] = y * b02 + a11 * b12 + a12 * b22 + a13 * b32;
      v1[10] = z * b02 + a21 * b12 + a22 * b22 + a23 * b32;
      v1[11] = v02 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
      v1[12] = x * b03 + v2 * b13 + a02 * b23 + a03 * b33;
      v1[13] = y * b03 + a11 * b13 + a12 * b23 + a13 * b33;
      v1[14] = z * b03 + a21 * b13 + a22 * b23 + a23 * b33;
      v1[15] = v02 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
      vec0 = 1 / (1 + vec0);
      v1[0] *= vec0;
      v1[1] *= vec0;
      v1[2] *= vec0;
      v1[3] *= vec0;
      v1[4] *= vec0;
      v1[5] *= vec0;
      v1[6] *= vec0;
      v1[7] *= vec0;
      v1[8] *= vec0;
      v1[9] *= vec0;
      v1[10] *= vec0;
      v1[11] *= vec0;
      v1[12] *= vec0;
      v1[13] *= vec0;
      v1[14] *= vec0;
      v1[15] *= vec0;
      goog$vec$mat4d$addMat(vec1, v0, vec1);
      goog$vec$mat4d$addMat(vec1, v1, vec1);
    }
  }
  return vec1;
});
goog$exportSymbol("ninja.math.mathUtils.isPointInTriangle", function(pt, p0, p1, p2) {
  pt = goog$vec$vec3d$subtract(pt, p0);
  p1 = goog$vec$vec3d$subtract(p1, p0);
  var v2 = goog$vec$vec3d$subtract(p2, p0);
  p0 = goog$vec$vec3d$dot(pt, p1);
  pt = goog$vec$vec3d$dot(pt, v2);
  p2 = goog$vec$vec3d$dot(p1, p1);
  p1 = goog$vec$vec3d$dot(p1, v2);
  v2 = goog$vec$vec3d$dot(v2, v2);
  const denom = v2 * p2 - p1 * p1;
  p2 = (p2 * pt - p1 * p0) / denom;
  p0 = (v2 * p0 - p1 * pt) / denom;
  return 0 <= p2 && 0 <= p0 && 1 >= p2 + p0;
});
goog$exportSymbol("ninja.math.mathUtils.getAngleBetweenPoints", function(pt0, pt1) {
  pt0 = Math.atan2(pt1[1], pt1[0]) - Math.atan2(pt0[1], pt0[0]);
  0 > pt0 && (pt0 += 2 * Math.PI);
  return pt0;
});
function JSCompiler_StaticMethods_curveParameterAtValue(JSCompiler_StaticMethods_curveParameterAtValue$self, val) {
  let u = (val - JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0]) / (JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[3] - JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0]);
  for (var i = 0; 8 > i; i++) {
    var valDiff = JSCompiler_StaticMethods_curveParameterAtValue$self.value(u) - val;
    if (1E-8 > Math.abs(valDiff)) {
      return goog$math$clamp(u, 0, 1);
    }
    var u$jscomp$0 = u;
    u$jscomp$0 = goog$math$clamp(u$jscomp$0, 0, 1);
    var q0 = 3 * (JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[1] - JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0]), q1 = 3 * (JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[2] - JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[1]);
    let q2 = 3 * (JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[3] - JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[2]);
    q0 = goog$math$lerp(q0, q1, u$jscomp$0);
    q1 = goog$math$lerp(q1, q2, u$jscomp$0);
    u -= valDiff / goog$math$lerp(q0, q1, u$jscomp$0);
  }
  if ((u$jscomp$0 = JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0] < JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[3]) && val < JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0] || !u$jscomp$0 && val > JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[0]) {
    return 0;
  }
  if (u$jscomp$0 && val > JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[3] || !u$jscomp$0 && val < JSCompiler_StaticMethods_curveParameterAtValue$self.ctrlPts[3]) {
    return 1;
  }
  i = 0;
  valDiff = 1;
  for (q0 = 0; 28 > q0 && !(u = (i + valDiff) / 2, q1 = JSCompiler_StaticMethods_curveParameterAtValue$self.value(u), 1E-8 > Math.abs(q1 - val)); q0++) {
    u$jscomp$0 && q1 < val || !u$jscomp$0 && q1 > val ? i = u : valDiff = u;
  }
  return u;
}
var module$exports$ninja$runtime$math$baseBezierSegment$BaseBezierSegment = class {
  constructor(ctrlPts) {
    const newVec = new Float64Array(4);
    newVec[0] = ctrlPts[0];
    newVec[1] = ctrlPts[1];
    newVec[2] = ctrlPts[2];
    newVec[3] = ctrlPts[3];
    this.ctrlPts = newVec;
  }
  value(u) {
    u = goog$math$clamp(u, 0, 1);
    let p0 = goog$math$lerp(this.ctrlPts[0], this.ctrlPts[1], u), p1 = goog$math$lerp(this.ctrlPts[1], this.ctrlPts[2], u), p2 = goog$math$lerp(this.ctrlPts[2], this.ctrlPts[3], u);
    p0 = goog$math$lerp(p0, p1, u);
    p1 = goog$math$lerp(p1, p2, u);
    return goog$math$lerp(p0, p1, u);
  }
};
class module$exports$ninja$math$BezierSegment extends module$exports$ninja$runtime$math$baseBezierSegment$BaseBezierSegment {
  constructor() {
    super(module$contents$ninja$math$BezierSegment_DEFAULT_CONTROL_POINTS);
  }
}
var vec$jscomp$inline_277 = [0, 1 / 3, 2 / 3, 1];
const newVec$jscomp$inline_278 = new Float64Array(4);
newVec$jscomp$inline_278[0] = vec$jscomp$inline_277[0];
newVec$jscomp$inline_278[1] = vec$jscomp$inline_277[1];
newVec$jscomp$inline_278[2] = vec$jscomp$inline_277[2];
newVec$jscomp$inline_278[3] = vec$jscomp$inline_277[3];
const module$contents$ninja$math$BezierSegment_DEFAULT_CONTROL_POINTS = newVec$jscomp$inline_278;
function goog$math$Rect(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.width = w;
  this.height = h;
}
goog$math$Rect.prototype.clone = function() {
  return new goog$math$Rect(this.left, this.top, this.width, this.height);
};
goog$math$Rect.prototype.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog$math$Rect.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog$math$Rect.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog$math$Rect.prototype.scale = function(sx, opt_sy) {
  opt_sy = "number" === typeof opt_sy ? opt_sy : sx;
  this.left *= sx;
  this.width *= sx;
  this.top *= opt_sy;
  this.height *= opt_sy;
  return this;
};
class module$exports$ninja$math$Bounds extends goog$math$Rect {
  unionPoint(pt) {
    const left = Math.min(this.left, pt[0]), right = Math.max(this.getRight(), pt[0]), top = Math.min(this.top, pt[1]);
    pt = Math.max(this.getBottom(), pt[1]);
    this.left = left;
    this.width = right - left;
    this.top = top;
    this.height = pt - top;
  }
  clone() {
    return new module$exports$ninja$math$Bounds(this.left, this.top, this.width, this.height);
  }
  getLeft() {
    return this.left;
  }
  getTop() {
    return this.top;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getRight() {
    return this.left + this.width;
  }
  getBottom() {
    return this.top + this.height;
  }
  getPoints3D() {
    return [goog$vec$vec3d$createFromValues(this.left, this.top, 0), goog$vec$vec3d$createFromValues(this.left, this.top + this.height, 0), goog$vec$vec3d$createFromValues(this.left + this.width, this.top + this.height, 0), goog$vec$vec3d$createFromValues(this.left + this.width, this.top, 0)];
  }
}
module$exports$ninja$math$Bounds.prototype.getPoints3D = module$exports$ninja$math$Bounds.prototype.getPoints3D;
module$exports$ninja$math$Bounds.prototype.getBottom = module$exports$ninja$math$Bounds.prototype.getBottom;
module$exports$ninja$math$Bounds.prototype.getRight = module$exports$ninja$math$Bounds.prototype.getRight;
module$exports$ninja$math$Bounds.prototype.getHeight = module$exports$ninja$math$Bounds.prototype.getHeight;
module$exports$ninja$math$Bounds.prototype.getWidth = module$exports$ninja$math$Bounds.prototype.getWidth;
module$exports$ninja$math$Bounds.prototype.getTop = module$exports$ninja$math$Bounds.prototype.getTop;
module$exports$ninja$math$Bounds.prototype.getLeft = module$exports$ninja$math$Bounds.prototype.getLeft;
module$exports$ninja$math$Bounds.prototype.unionPoint = module$exports$ninja$math$Bounds.prototype.unionPoint;
module$exports$ninja$math$Bounds.createFromPoints = function(points) {
  const bounds = new module$exports$ninja$math$Bounds(points[0][0], points[0][1], 0, 0);
  for (let i = 1; i < points.length; i++) {
    bounds.unionPoint(points[i]);
  }
  return bounds;
};
goog$exportSymbol("ninja.math.Bounds", module$exports$ninja$math$Bounds);
class module$exports$ninja$math$BezierSegment2d {
  constructor(controlPoints) {
    this.JSC$2407_xBezier_ = new module$exports$ninja$math$BezierSegment();
    this.JSC$2407_yBezier_ = new module$exports$ninja$math$BezierSegment();
    if (controlPoints) {
      var vec = this.JSC$2407_xBezier_.ctrlPts, v1 = controlPoints.c1[0], v2 = controlPoints.c2[0], v3 = controlPoints.c3[0];
      vec[0] = controlPoints.c0[0];
      vec[1] = v1;
      vec[2] = v2;
      vec[3] = v3;
      vec = this.JSC$2407_yBezier_.ctrlPts;
      v1 = controlPoints.c1[1];
      v2 = controlPoints.c2[1];
      v3 = controlPoints.c3[1];
      vec[0] = controlPoints.c0[1];
      vec[1] = v1;
      vec[2] = v2;
      vec[3] = v3;
    }
  }
  value(u, result = goog$vec$vec2d$create()) {
    return goog$vec$vec2d$setFromValues(result, this.JSC$2407_xBezier_.value(u), this.JSC$2407_yBezier_.value(u));
  }
}
class module$contents$ninja$math$BezierSegment2d_ControlPoints {
  constructor(c0 = goog$vec$vec2d$create(), c1 = goog$vec$vec2d$create(), c2 = goog$vec$vec2d$create(), c3 = goog$vec$vec2d$create()) {
    this.c0 = c0;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
  }
  clone(toCopy) {
    this.c0 = goog$vec$vec2d$clone(toCopy.c0);
    this.c1 = goog$vec$vec2d$clone(toCopy.c1);
    this.c2 = goog$vec$vec2d$clone(toCopy.c2);
    this.c3 = goog$vec$vec2d$clone(toCopy.c3);
  }
}
goog$exportSymbol("ninja.math.BezierSegment2d.ControlPoints", module$contents$ninja$math$BezierSegment2d_ControlPoints);
function module$exports$ninja$anim$CssEasing$CssEasing$createFromCssStyle(style) {
  style = style.trim();
  if ("ease" == style || "linear" == style || "ease-in" == style || "ease-out" == style || "ease-in-out" == style || "step-start" == style || "step-end" == style) {
    return new module$exports$ninja$anim$CssEasing$CssEasing(style);
  }
  if (0 != style.indexOf("cubic-bezier")) {
    return null;
  }
  style = style.substring(12).trim();
  var argStringLength = style.length;
  if (2 > argStringLength || "(" != style[0] || ")" != style[argStringLength - 1]) {
    return null;
  }
  style = style.substring(1, argStringLength - 1).trim();
  argStringLength = style.split(",");
  if (4 != argStringLength.length) {
    return null;
  }
  style = [];
  for (const token of argStringLength) {
    argStringLength = parseFloat(token);
    if (isNaN(argStringLength)) {
      return null;
    }
    style.push(argStringLength);
  }
  return new module$exports$ninja$anim$CssEasing$CssEasing("cubic-bezier", {c0:style[0], c1:style[1], c2:style[2], c3:style[3]});
}
var module$exports$ninja$anim$CssEasing$CssEasing = class {
  constructor(easingType, controlPoints) {
    this.easingType_ = easingType;
    this.controlPoints_ = "cubic-bezier" === easingType ? controlPoints || {c0:1 / 3, c1:1 / 3, c2:2 / 3, c3:2 / 3} : null;
    easingType = new module$contents$ninja$math$BezierSegment2d_ControlPoints();
    goog$vec$vec2d$setFromValues(easingType.c0, 0, 0);
    goog$vec$vec2d$setFromValues(easingType.c3, 1, 1);
    switch(this.easingType_) {
      case "linear":
        goog$vec$vec2d$setFromValues(easingType.c1, 0, 0);
        goog$vec$vec2d$setFromValues(easingType.c2, 1, 1);
        break;
      case "ease":
        goog$vec$vec2d$setFromValues(easingType.c1, .25, .1);
        goog$vec$vec2d$setFromValues(easingType.c2, .25, 1);
        break;
      case "ease-in":
        goog$vec$vec2d$setFromValues(easingType.c1, .42, 0);
        goog$vec$vec2d$setFromValues(easingType.c2, 1, 1);
        break;
      case "ease-in-out":
        goog$vec$vec2d$setFromValues(easingType.c1, .42, 0);
        goog$vec$vec2d$setFromValues(easingType.c2, .58, 1);
        break;
      case "ease-out":
        goog$vec$vec2d$setFromValues(easingType.c1, 0, 0);
        goog$vec$vec2d$setFromValues(easingType.c2, .58, 1);
        break;
      case "cubic-bezier":
        goog$vec$vec2d$setFromValues(easingType.c1, this.controlPoints_.c0, this.controlPoints_.c1), goog$vec$vec2d$setFromValues(easingType.c2, this.controlPoints_.c2, this.controlPoints_.c3);
    }
    this.bezier_ = new module$exports$ninja$math$BezierSegment2d(easingType);
  }
  clone() {
    let ctrlPts = void 0;
    this.controlPoints_ && (ctrlPts = module$contents$goog$object_unsafeClone(this.controlPoints_));
    return new module$exports$ninja$anim$CssEasing$CssEasing(this.easingType_, ctrlPts);
  }
};
goog$exportSymbol("ninja.model.css.cssConstants.TRANSFORM_PROPERTY", "transform");
goog$exportSymbol("ninja.model.css.cssConstants.PERSPECTIVE", "perspective");
goog$exportSymbol("ninja.model.css.cssConstants.TRANSFORM_ORIGIN_PROPERTY", "transform-origin");
goog$exportSymbol("ninja.model.css.cssConstants.TRANSFORM_ORIGIN_DEFAULT_STYLE", "50% 50%");
goog$exportSymbol("ninja.model.css.cssConstants.BACKGROUND_COLOR_PROPERTY", "background-color");
goog$exportSymbol("ninja.model.css.cssConstants.FILL_PROPERTY", "fill");
goog$exportSymbol("ninja.model.css.cssConstants.STROKE_PROPERTY", "stroke");
var module$exports$ninja$anim$animConstants$ANIMATION_PROPERTIES_DEFAULTS = {animationName:"none", delay:0, direction:"normal", duration:0, fillMode:"forwards", iterationCount:1, timingFunction:"linear"}, module$exports$ninja$anim$animConstants$ANIMATABLE_ELEMENT_PROPERTIES = new Set("backdrop-filter background-color background-image background-position background-position-x background-position-y border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-width border-color border-left-color border-left-width border-radius border-right-color border-right-width border-top-color border-top-left-radius border-top-right-radius border-top-width border-width bottom clip-path color fill filter flex-grow flex-shrink font-size height left letter-spacing line-height margin margin-bottom margin-left margin-right margin-top max-height max-width min-height min-width mix-blend-mode opacity padding padding-bottom padding-left padding-right padding-top right stroke text-indent top transform transform-origin transform-origin-x transform-origin-y transform-origin-z visibility width -webkit-backdrop-filter -webkit-filter --gwd-hidden-css-filter".split(" ")), 
module$exports$ninja$anim$animConstants$ANIMATABLE_MASK_PROPERTIES = new Set(["clip-path", "-webkit-mask-image", "-webkit-mask-position", "-webkit-mask-size"]), module$exports$ninja$anim$animConstants$ANIMATABLE_CANVAS_PROPERTIES = new Set("bottom height left margin margin-bottom margin-left margin-right margin-top opacity padding padding-bottom padding-left padding-right padding-top right top transform transform-origin transform-origin-x transform-origin-y transform-origin-z width".split(" ")), 
module$exports$ninja$anim$animConstants$ANIMATABLE_AMP_PROPERTIES = new Set(["opacity", "transform", "visibility"]), module$exports$ninja$anim$animConstants$COMPUTABLE_ANIMATION_PROPERTIES = new Set("--gwd-hidden-css-filter -webkit-mask-image -webkit-mask-position -webkit-mask-size left right top bottom width height opacity transform border-bottom-left-radius border-bottom-right-radius border-top-left-radius border-top-right-radius margin-bottom margin-left margin-right margin-top padding-bottom padding-left padding-right padding-top visibility".split(" "));
function module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() {
  return JSCompiler_inline_result$jscomp$13 ? !!JSCompiler_inline_result$jscomp$14 && !!JSCompiler_inline_result$jscomp$14.platform : !1;
}
function module$contents$goog$labs$userAgent$platform_isAndroid() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Android" === JSCompiler_inline_result$jscomp$14.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Android");
}
function module$contents$goog$labs$userAgent$platform_isIphone() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("iPhone") && !module$contents$goog$labs$userAgent$util_matchUserAgent("iPod") && !module$contents$goog$labs$userAgent$util_matchUserAgent("iPad");
}
function module$contents$goog$labs$userAgent$platform_isIos() {
  return module$contents$goog$labs$userAgent$platform_isIphone() || module$contents$goog$labs$userAgent$util_matchUserAgent("iPad") || module$contents$goog$labs$userAgent$util_matchUserAgent("iPod");
}
function module$contents$goog$labs$userAgent$platform_isMacintosh() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "macOS" === JSCompiler_inline_result$jscomp$14.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Macintosh");
}
function module$contents$goog$labs$userAgent$platform_isWindows() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Windows" === JSCompiler_inline_result$jscomp$14.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Windows");
}
function module$contents$goog$labs$userAgent$platform_isChromeOS() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Chrome OS" === JSCompiler_inline_result$jscomp$14.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("CrOS");
}
function module$contents$goog$labs$userAgent$platform_getVersion() {
  var userAgentString = module$contents$goog$labs$userAgent$util_getNativeUserAgentString(), version = "";
  module$contents$goog$labs$userAgent$platform_isWindows() ? (version = /Windows (?:NT|Phone) ([0-9.]+)/, version = (userAgentString = version.exec(userAgentString)) ? userAgentString[1] : "0.0") : module$contents$goog$labs$userAgent$platform_isIos() ? (version = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, version = (userAgentString = version.exec(userAgentString)) && userAgentString[1].replace(/_/g, ".")) : module$contents$goog$labs$userAgent$platform_isMacintosh() ? (version = /Mac OS X ([0-9_.]+)/, 
  version = (userAgentString = version.exec(userAgentString)) ? userAgentString[1].replace(/_/g, ".") : "10") : -1 != module$contents$goog$labs$userAgent$util_getNativeUserAgentString().toLowerCase().indexOf("kaios") ? (version = /(?:KaiOS)\/(\S+)/i, version = (userAgentString = version.exec(userAgentString)) && userAgentString[1]) : module$contents$goog$labs$userAgent$platform_isAndroid() ? (version = /Android\s+([^\);]+)(\)|;)/, version = (userAgentString = version.exec(userAgentString)) && userAgentString[1]) : 
  module$contents$goog$labs$userAgent$platform_isChromeOS() && (version = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, version = (userAgentString = version.exec(userAgentString)) && userAgentString[1]);
  return version || "";
}
;function goog$reflect$sinkValue(x) {
  goog$reflect$sinkValue[" "](x);
  return x;
}
goog$reflect$sinkValue[" "] = function() {
};
var goog$userAgent$OPERA = module$contents$goog$labs$userAgent$browser_matchOpera(), goog$userAgent$IE = module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE"), goog$userAgent$EDGE = module$contents$goog$labs$userAgent$util_matchUserAgent("Edge"), goog$userAgent$GECKO = module$contents$goog$labs$userAgent$util_matchUserAgent("Gecko") && !(-1 != 
module$contents$goog$labs$userAgent$util_getNativeUserAgentString().toLowerCase().indexOf("webkit") && !module$contents$goog$labs$userAgent$util_matchUserAgent("Edge")) && !(module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE")) && !module$contents$goog$labs$userAgent$util_matchUserAgent("Edge"), goog$userAgent$WEBKIT = -1 != module$contents$goog$labs$userAgent$util_getNativeUserAgentString().toLowerCase().indexOf("webkit") && 
!module$contents$goog$labs$userAgent$util_matchUserAgent("Edge"), JSCompiler_inline_result$jscomp$27;
a: {
  var version$jscomp$inline_322 = "", arr$jscomp$inline_323 = function() {
    var userAgent = module$contents$goog$labs$userAgent$util_getNativeUserAgentString();
    if (goog$userAgent$GECKO) {
      return /rv:([^\);]+)(\)|;)/.exec(userAgent);
    }
    if (goog$userAgent$EDGE) {
      return /Edge\/([\d\.]+)/.exec(userAgent);
    }
    if (goog$userAgent$IE) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
    }
    if (goog$userAgent$WEBKIT) {
      return /WebKit\/(\S+)/.exec(userAgent);
    }
    if (goog$userAgent$OPERA) {
      return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
    }
  }();
  arr$jscomp$inline_323 && (version$jscomp$inline_322 = arr$jscomp$inline_323 ? arr$jscomp$inline_323[1] : "");
  if (goog$userAgent$IE) {
    var docMode$jscomp$inline_324, doc$jscomp$inline_992 = goog$global.document;
    docMode$jscomp$inline_324 = doc$jscomp$inline_992 ? doc$jscomp$inline_992.documentMode : void 0;
    if (null != docMode$jscomp$inline_324 && docMode$jscomp$inline_324 > parseFloat(version$jscomp$inline_322)) {
      JSCompiler_inline_result$jscomp$27 = String(docMode$jscomp$inline_324);
      break a;
    }
  }
  JSCompiler_inline_result$jscomp$27 = version$jscomp$inline_322;
}
var goog$userAgent$VERSION = JSCompiler_inline_result$jscomp$27;
function goog$style$getComputedStyle(element, property) {
  var doc = 9 == element.nodeType ? element : element.ownerDocument || element.document;
  return doc.defaultView && doc.defaultView.getComputedStyle && (element = doc.defaultView.getComputedStyle(element, null)) ? element[property] || element.getPropertyValue(property) || "" : "";
}
var goog$style$lengthUnitRegex_ = /[^\d]+$/;
function goog$style$getLengthUnits(value) {
  return (value = value.match(goog$style$lengthUnitRegex_)) && value[0] || null;
}
;goog$exportSymbol("ninja.model.css.units.UnitType", {CM:"cm", DEG:"deg", GRAD:"grad", IN:"in", MM:"mm", MS:"ms", PC:"pc", PERCENT:"%", PT:"pt", PX:"px", RAD:"rad", S:"s", TURN:"turn"});
var module$exports$ninja$model$css$units$CssLength = class {
  constructor(numericValue, units) {
    this.numericValue_ = numericValue;
    this.units_ = units;
  }
  getUnits() {
    return this.units_;
  }
  getNumericValue() {
    return this.numericValue_;
  }
};
module$exports$ninja$model$css$units$CssLength.prototype.getNumericValue = module$exports$ninja$model$css$units$CssLength.prototype.getNumericValue;
module$exports$ninja$model$css$units$CssLength.prototype.getUnits = module$exports$ninja$model$css$units$CssLength.prototype.getUnits;
goog$exportSymbol("ninja.model.css.units.CssLength", module$exports$ninja$model$css$units$CssLength);
goog$exportSymbol("ninja.model.css.units.OffsetProperties", {HEIGHT:"height", LEFT:"left", MAX_HEIGHT:"max-height", MAX_WIDTH:"max-width", MIN_HEIGHT:"min-height", MIN_WIDTH:"min-width", PADDING_BOTTOM:"padding-bottom", PADDING_LEFT:"padding-left", PADDING_RIGHT:"padding-right", PADDING_TOP:"padding-top", TOP:"top", WIDTH:"width"});
const module$contents$ninja$model$css$units_BORDER_BOX_WIDTH_PROPERTIES = ["padding-left", "padding-right", "border-left-width", "border-right-width"], module$contents$ninja$model$css$units_BORDER_BOX_HEIGHT_PROPERTIES = ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"];
function module$exports$ninja$model$css$units$extractMeasurement(input) {
  const val = parseFloat(input);
  (input = goog$style$getLengthUnits(input)) && (input = input.trim() || null);
  return {value:val, unit:input};
}
function module$exports$ninja$model$css$units$extractValueAndUnits(cssLength) {
  var measurement = module$exports$ninja$model$css$units$extractMeasurement(cssLength);
  cssLength = measurement.value;
  if (isNaN(cssLength)) {
    return null;
  }
  measurement = measurement.unit;
  return null != measurement ? new module$exports$ninja$model$css$units$CssLength(cssLength, measurement) : null;
}
goog$exportSymbol("ninja.model.css.units.extractValueAndUnits", module$exports$ninja$model$css$units$extractValueAndUnits);
function module$exports$ninja$model$css$units$getLengthAsString(cssLength) {
  return cssLength.numericValue_ + "" + cssLength.units_;
}
goog$exportSymbol("ninja.model.css.units.getLengthAsString", module$exports$ninja$model$css$units$getLengthAsString);
goog$exportSymbol("ninja.model.css.units.makeLengthFromNumberAndUnits", function(numericValue, units) {
  return new module$exports$ninja$model$css$units$CssLength(numericValue, units);
});
var module$exports$ninja$model$css$units$getBorderBoxDimension = (element, property) => {
  let borderBoxDimension = parseFloat(goog$style$getComputedStyle(element, property));
  if (isNaN(borderBoxDimension)) {
    return null;
  }
  property = "width" === property ? module$contents$ninja$model$css$units_BORDER_BOX_WIDTH_PROPERTIES : module$contents$ninja$model$css$units_BORDER_BOX_HEIGHT_PROPERTIES;
  for (const props of property) {
    property = parseFloat(goog$style$getComputedStyle(element, props)), isNaN(property) || (borderBoxDimension += property);
  }
  return borderBoxDimension;
};
function module$exports$ninja$model$css$units$convertToUnits(units, cssLength, element, property) {
  var numericVal = null;
  let unitsChanged = !1;
  switch(units) {
    case "px":
      unitsChanged = "px" != cssLength.units_;
      var {isMask} = {isMask:!1};
      units = cssLength.numericValue_;
      cssLength = cssLength.units_;
      numericVal = null;
      if ("px" == cssLength) {
        numericVal = units;
      } else if ("%" == cssLength) {
        var parentDimension;
        isMask ? parentDimension = module$exports$ninja$model$css$units$getBorderBoxDimension(element, module$contents$ninja$model$css$units_getReferenceStyleName(property)) : parentDimension = module$contents$ninja$model$css$units_getReferenceDimension(element, property);
        null !== parentDimension && (numericVal = units / 100 * parentDimension);
      }
      break;
    case "%":
      unitsChanged = "%" != cssLength.units_;
      ({isMask:parentDimension} = {isMask:!1});
      units = cssLength.numericValue_;
      cssLength = cssLength.units_;
      numericVal = null;
      "%" == cssLength ? numericVal = units : "px" == cssLength && (parentDimension ? isMask = module$exports$ninja$model$css$units$getBorderBoxDimension(element, module$contents$ninja$model$css$units_getReferenceStyleName(property)) : isMask = module$contents$ninja$model$css$units_getReferenceDimension(element, property), null !== isMask && (numericVal = 0 === isMask ? 0 : 100 * units / isMask));
      break;
    default:
      module$exports$ninja$debug$log$warning(`convertToUnits called with unsupported units: ${units}`);
  }
  return null != numericVal ? (unitsChanged && (numericVal = Number(numericVal.toFixed(2))), numericVal) : null;
}
goog$exportSymbol("ninja.model.css.units.convertToUnits", module$exports$ninja$model$css$units$convertToUnits);
function module$contents$ninja$model$css$units_getReferenceDimension(element, property) {
  let offsetParent = null;
  "BODY" == element.nodeName ? offsetParent = element : element.offsetParent ? offsetParent = element.offsetParent : offsetParent = element.parentNode;
  if (null != offsetParent) {
    return element = parseFloat(goog$style$getComputedStyle(offsetParent, module$contents$ninja$model$css$units_getReferenceStyleName(property))), isNaN(element) ? null : element;
  }
  module$exports$ninja$debug$log$warning("Element does not have an offset parent.");
  return null;
}
function module$contents$ninja$model$css$units_getReferenceStyleName(property) {
  switch(property) {
    case "left":
    case "max-width":
    case "min-width":
    case "padding-bottom":
    case "padding-left":
    case "padding-right":
    case "padding-top":
    case "width":
      return "width";
    case "height":
    case "max-height":
    case "min-height":
    case "top":
      return "height";
    default:
      return "width";
  }
}
;const module$contents$ninja$model$threeD$elementBoundUtil_getValueInPixels = style => "px" !== goog$style$getLengthUnits(style) ? 0 : parseFloat(style), module$contents$ninja$model$threeD$elementBoundUtil_WIDTH_RELATED_PADDING_AND_BORDER = ["border-left-width", "border-right-width", "padding-left", "padding-right"], module$contents$ninja$model$threeD$elementBoundUtil_HEIGHT_RELATED_PADDING_AND_BORDER = ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"];
var module$exports$ninja$model$threeD$elementBoundUtil$getBounds = element => {
  let width, height;
  const computedWidth = goog$style$getComputedStyle(element, "width");
  width = "auto" === computedWidth ? element.offsetWidth || 0 : module$contents$ninja$model$threeD$elementBoundUtil_getValueInPixels(computedWidth);
  const computedHeight = goog$style$getComputedStyle(element, "height");
  height = "auto" === computedHeight ? element.offsetHeight || 0 : module$contents$ninja$model$threeD$elementBoundUtil_getValueInPixels(computedHeight);
  if ("content-box" === goog$style$getComputedStyle(element, "box-sizing")) {
    if ("auto" !== computedWidth) {
      for (const widthProp of module$contents$ninja$model$threeD$elementBoundUtil_WIDTH_RELATED_PADDING_AND_BORDER) {
        width += module$contents$ninja$model$threeD$elementBoundUtil_getValueInPixels(goog$style$getComputedStyle(element, widthProp));
      }
    }
    if ("auto" !== computedHeight) {
      for (const heightProp of module$contents$ninja$model$threeD$elementBoundUtil_HEIGHT_RELATED_PADDING_AND_BORDER) {
        height += module$contents$ninja$model$threeD$elementBoundUtil_getValueInPixels(goog$style$getComputedStyle(element, heightProp));
      }
    }
  }
  return new module$exports$ninja$math$Bounds(0, 0, width, height);
};
goog$exportSymbol("ninja.model.threeD.elementBoundUtil.getBounds", module$exports$ninja$model$threeD$elementBoundUtil$getBounds);
goog$exportSymbol("ninja.model.threeD.gwdTransformConstants.ComponentFunctions", {TRANSLATE_2D:"translate", TRANSLATE_3D:"translate3d", ROTATE_X:"rotateX", ROTATE_Y:"rotateY", ROTATE_Z:"rotateZ", SCALE_3D:"scale3d"});
goog$exportSymbol("ninja.model.threeD.gwdTransformConstants.IDENTITY_TRANSFORM_VALUE", "translate3d(0px,0px,0px)");
var module$exports$ninja$model$threeD$gwdTransformConstants$FUNCTION_AND_ARGS_REGEX = /(\([a-zA-Z,0-9.\s%-]*\))/;
const module$contents$ninja$model$threeD$GwdTransform_IDENTITY_MATRIX = goog$vec$mat4d$createIdentity(), module$contents$ninja$model$threeD$GwdTransform_FUNCTION_REGEX = /\([a-zA-Z,0-9.\s%-]*\)/, module$contents$ninja$model$threeD$GwdTransform_EXPECTED_FUNCTIONS_EXCLUDING_MOTION_PATH = "translate translate3d rotateZ rotateY rotateX scale3d".split(" "), module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS = ["translate", "translate", "rotateZ", "translate"], module$contents$ninja$model$threeD$GwdTransform_TOL = 
Math.pow(10, -6);
function module$contents$ninja$model$threeD$GwdTransform_GwdTransform$decomposeMatrixToChannels_(matrix, referenceTransform) {
  matrix = module$exports$ninja$math$mathUtils$decomposeTransform(matrix);
  var rotation = matrix.rotation, translation = matrix.translation;
  matrix = matrix.scale;
  translation = {x:{value:translation[0], unit:"px"}, y:{value:translation[1], unit:"px"}, z:{value:translation[2], unit:"px"}};
  rotation = [180 * rotation[0] / Math.PI, 180 * rotation[1] / Math.PI, 180 * rotation[2] / Math.PI];
  var referenceEulers = [0, 0, 0];
  referenceTransform && (referenceTransform = referenceTransform.getRotation(), referenceEulers = [referenceTransform.x.value, referenceTransform.y.value, referenceTransform.z.value]);
  var eulers = rotation;
  referenceTransform = referenceEulers;
  rotation = eulers.slice(0);
  for (referenceEulers = 0; 3 > referenceEulers; referenceEulers++) {
    var mod = (rotation[referenceEulers] - referenceTransform[referenceEulers]) % 360;
    180 < mod ? mod -= 360 : -180 > mod && (mod += 360);
    rotation[referenceEulers] = referenceTransform[referenceEulers] + mod;
  }
  eulers = [180 + eulers[0], 180 - eulers[1], 180 + eulers[2]];
  for (referenceEulers = 0; 3 > referenceEulers; referenceEulers++) {
    mod = (eulers[referenceEulers] - referenceTransform[referenceEulers]) % 360, 180 < mod ? mod -= 360 : -180 > mod && (mod += 360), eulers[referenceEulers] = referenceTransform[referenceEulers] + mod;
  }
  rotation = Math.abs(eulers[0] - referenceTransform[0]) + Math.abs(eulers[1] - referenceTransform[1]) + Math.abs(eulers[2] - referenceTransform[2]) < Math.abs(rotation[0] - referenceTransform[0]) + Math.abs(rotation[1] - referenceTransform[1]) + Math.abs(rotation[2] - referenceTransform[2]) ? eulers : rotation;
  return {motionPath:{transformOriginDelta:{x:{value:0, unit:"px"}, y:{value:0, unit:"px"}}, translation:{x:{value:0, unit:"px"}, y:{value:0, unit:"px"}}, rotationZ:{value:0, unit:"deg"}}, percentTranslation:{x:{value:0, unit:"%"}, y:{value:0, unit:"%"}}, translation, rotation:{x:{value:rotation[0], unit:"deg"}, y:{value:rotation[1], unit:"deg"}, z:{value:rotation[2], unit:"deg"}}, scale:{x:{value:matrix[0], unit:null}, y:{value:matrix[1], unit:null}, z:{value:matrix[2], unit:null}}};
}
function module$contents$ninja$model$threeD$GwdTransform_GwdTransform$createFromMatrix(matrix, referenceTransform) {
  const result = new module$contents$ninja$model$threeD$GwdTransform_GwdTransform();
  referenceTransform = module$contents$ninja$model$threeD$GwdTransform_GwdTransform$decomposeMatrixToChannels_(matrix, referenceTransform);
  result.setTranslation(referenceTransform.translation);
  result.setRotation(referenceTransform.rotation);
  result.setScale(referenceTransform.scale);
  referenceTransform = result.getMatrix();
  for (let i = 0; i < referenceTransform.length; i++) {
    if (!module$exports$ninja$math$mathUtils$equalsWithinTol(matrix[i], referenceTransform[i], 1E-4)) {
      module$exports$ninja$debug$log$warning("Creating a GwdTransform from a matrix that is not a pure translation, rotation, and scale");
      break;
    }
  }
  return result;
}
function JSCompiler_StaticMethods_areTransformFunctionsCanonical_(JSCompiler_StaticMethods_areTransformFunctionsCanonical_$self) {
  const functionArray = JSCompiler_StaticMethods_areTransformFunctionsCanonical_$self.initTransformValue_.split(module$contents$ninja$model$threeD$GwdTransform_FUNCTION_REGEX).map(str => str.trim()).filter(str => !!str);
  JSCompiler_StaticMethods_hasInitialMotionPath_(JSCompiler_StaticMethods_areTransformFunctionsCanonical_$self) ? functionArray.splice(0, module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS.length) : "perspective" === functionArray[0] ? functionArray.splice(0, 1) : "translate" === functionArray[0] && "scale" === functionArray[1] && "translate" === functionArray[2] && "perspective" === functionArray[3] && functionArray.splice(0, 4);
  let index = 0;
  for (const fn of functionArray) {
    index = module$contents$ninja$model$threeD$GwdTransform_EXPECTED_FUNCTIONS_EXCLUDING_MOTION_PATH.findIndex((expectedFunction, i) => i >= index && expectedFunction === fn);
    if (-1 === index) {
      return !1;
    }
    index++;
  }
  return !0;
}
function JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self) {
  const argsArray = JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self.initTransformValue_.split(module$exports$ninja$model$threeD$gwdTransformConstants$FUNCTION_AND_ARGS_REGEX).map(str => str.trim());
  var argIndex = 0;
  if (JSCompiler_StaticMethods_hasInitialMotionPath_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self)) {
    if (!(JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[1]), 2, new Set(["px"])) && JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[3]), 2, new Set(["px"])) && JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[5]), 1, new Set(["deg"])) && JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[7]), 
    2, new Set(["px"])))) {
      return !1;
    }
    argIndex = JSCompiler_StaticMethods_extractArguments_(argsArray[1]);
    JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self = JSCompiler_StaticMethods_extractArguments_(argsArray[7]);
    if (!module$exports$ninja$math$mathUtils$equalsWithinTol(argIndex[0].value, -JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[0].value, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(argIndex[1].value, -JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[1].value, module$contents$ninja$model$threeD$GwdTransform_TOL)) {
      return !1;
    }
    argIndex = 2 * module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS.length;
  } else {
    if ("translate" === argsArray[0] && "scale" === argsArray[2] && "translate" === argsArray[4]) {
      if (!JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[1]), 2, new Set(["px", "%"])) || !JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[3]), 1, new Set([null])) || !JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[5]), 2, new Set(["px", "%"]))) {
        return !1;
      }
      JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self = JSCompiler_StaticMethods_extractArguments_(argsArray[1]);
      var trans2 = JSCompiler_StaticMethods_extractArguments_(argsArray[5]);
      if (!module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[0].value, -trans2[0].value, module$contents$ninja$model$threeD$GwdTransform_TOL) || JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[0].unit !== trans2[0].unit || !module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[1].value, -trans2[1].value, module$contents$ninja$model$threeD$GwdTransform_TOL) || 
      JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self[1].unit !== trans2[1].unit) {
        return !1;
      }
      argIndex += 6;
    }
    if ("perspective" === argsArray[argIndex]) {
      if (!JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_extractArguments_(argsArray[argIndex + 1]), 1, new Set(["px"]))) {
        return !1;
      }
      argIndex += 2;
    }
  }
  for (; argIndex + 1 < argsArray.length; argIndex += 2) {
    JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self = JSCompiler_StaticMethods_extractArguments_(argsArray[argIndex + 1]);
    trans2 = !1;
    switch(argsArray[argIndex]) {
      case "translate":
        trans2 = JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self, 2, new Set(["%"]));
        break;
      case "translate3d":
        trans2 = JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self, 3, new Set(["px"]));
        break;
      case "rotateX":
      case "rotateY":
      case "rotateZ":
        trans2 = JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self, 1, new Set(["rad", "deg", "turn"]));
        break;
      case "scale3d":
        trans2 = JSCompiler_StaticMethods_areFunctionArgumentsValid_(JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_$self, 3, new Set([null]));
    }
    if (!trans2) {
      return !1;
    }
  }
  return !0;
}
function JSCompiler_StaticMethods_hasInitialMotionPath_(JSCompiler_StaticMethods_hasInitialMotionPath_$self) {
  JSCompiler_StaticMethods_hasInitialMotionPath_$self = JSCompiler_StaticMethods_hasInitialMotionPath_$self.initTransformValue_.split(module$contents$ninja$model$threeD$GwdTransform_FUNCTION_REGEX).map(str => str.trim()).filter(str => !!str);
  return module$contents$goog$array_equals(JSCompiler_StaticMethods_hasInitialMotionPath_$self.slice(0, module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS.length));
}
function JSCompiler_StaticMethods_areFunctionArgumentsValid_(args, numArgs, allowedUnits) {
  return args.length !== numArgs ? !1 : args.every(arg => arg && !isNaN(arg.value) && (allowedUnits.has(arg.unit) || 0 === arg.value && null === arg.unit));
}
function JSCompiler_StaticMethods_extractArguments_(argStr) {
  const index1 = argStr.indexOf("("), index2 = argStr.indexOf(")", index1);
  if (-1 === index1 || index2 <= index1) {
    return [];
  }
  argStr = argStr.substr(index1 + 1, index2 - index1 - 1);
  return argStr.split(/\s*,\s*/).map(module$exports$ninja$model$css$units$extractMeasurement);
}
function JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_(JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self) {
  var motionPathChannel = {transformOriginDelta:{x:{value:0, unit:"px"}, y:{value:0, unit:"px"}}, translation:{x:{value:0, unit:"px"}, y:{value:0, unit:"px"}}, rotationZ:{value:0, unit:"deg"}};
  let percentTransArg = [{value:0, unit:"%"}, {value:0, unit:"%"}], translateArg = [{value:0, unit:"px"}, {value:0, unit:"px"}, {value:0, unit:"px"}];
  const rotateArg = [{value:0, unit:"deg"}, {value:0, unit:"deg"}, {value:0, unit:"deg"}];
  let scaleArg = [{value:1, unit:null}, {value:1, unit:null}, {value:1, unit:null}];
  const argumentArray = JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self.initTransformValue_.split(module$exports$ninja$model$threeD$gwdTransformConstants$FUNCTION_AND_ARGS_REGEX).map(str => str.trim());
  "translate" === argumentArray[0] && "scale" === argumentArray[2] && "translate" === argumentArray[4] && argumentArray.splice(0, 6);
  if (JSCompiler_StaticMethods_hasInitialMotionPath_(JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self)) {
    motionPathChannel = JSCompiler_StaticMethods_extractArguments_(argumentArray[1]);
    JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self = JSCompiler_StaticMethods_extractArguments_(argumentArray[3]);
    var rotation = JSCompiler_StaticMethods_extractArguments_(argumentArray[5]);
    motionPathChannel = {transformOriginDelta:{x:motionPathChannel[0], y:motionPathChannel[1]}, translation:{x:JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self[0], y:JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self[1]}, rotationZ:rotation[0]};
    argumentArray.splice(0, 2 * module$contents$ninja$model$threeD$GwdTransform_EXPECTED_MOTION_PATH_FUNCTIONS.length);
  }
  for (JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self = 0; JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self + 1 < argumentArray.length; JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self += 2) {
    switch(rotation = JSCompiler_StaticMethods_extractArguments_(argumentArray[JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self + 1]), argumentArray[JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self]) {
      case "translate":
        percentTransArg[0].value = rotation[0].value;
        percentTransArg[1].value = rotation[1].value;
        break;
      case "translate3d":
        translateArg[0].value = rotation[0].value;
        translateArg[1].value = rotation[1].value;
        translateArg[2].value = rotation[2].value;
        break;
      case "rotateX":
      case "rotateY":
      case "rotateZ":
        let index = 0;
        "rotateY" === argumentArray[JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self] ? index = 1 : "rotateZ" === argumentArray[JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_$self] && (index = 2);
        rotation[0].value = JSCompiler_StaticMethods_convertToDeg_(rotation[0]);
        rotation[0].unit = "deg";
        rotateArg[index] = rotation[0];
        break;
      case "scale3d":
        scaleArg = rotation;
    }
  }
  return {motionPath:motionPathChannel, percentTranslation:{x:percentTransArg[0], y:percentTransArg[1]}, translation:{x:translateArg[0], y:translateArg[1], z:translateArg[2]}, rotation:{x:rotateArg[0], y:rotateArg[1], z:rotateArg[2]}, scale:{x:scaleArg[0], y:scaleArg[1], z:scaleArg[2]}};
}
function JSCompiler_StaticMethods_convertToDeg_(arg) {
  switch(arg.unit) {
    case "turn":
      return 360 * arg.value;
    case "rad":
      return 180 * arg.value / Math.PI;
    default:
      return arg.value;
  }
}
function JSCompiler_StaticMethods_getMeasurementCss(measurement) {
  if (isNaN(measurement.value)) {
    return "";
  }
  const cleansedValue = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(measurement.value);
  return Number(cleansedValue.toPrecision(6)) + (measurement.unit || "");
}
function JSCompiler_StaticMethods_hasMotionPath_(JSCompiler_StaticMethods_hasMotionPath_$self) {
  const transformOriginDelta = JSCompiler_StaticMethods_hasMotionPath_$self.channels_.motionPath.transformOriginDelta, translation = JSCompiler_StaticMethods_hasMotionPath_$self.channels_.motionPath.translation;
  JSCompiler_StaticMethods_hasMotionPath_$self = JSCompiler_StaticMethods_hasMotionPath_$self.channels_.motionPath.rotationZ;
  return !module$exports$ninja$math$mathUtils$equalsWithinTol(transformOriginDelta.x.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(transformOriginDelta.y.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(translation.x.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(translation.y.value, 0, 
  module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_StaticMethods_hasMotionPath_$self.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
}
function JSCompiler_StaticMethods_get2DChannelCss_(channel) {
  return "translate(" + JSCompiler_StaticMethods_getMeasurementCss(channel.x) + "," + JSCompiler_StaticMethods_getMeasurementCss(channel.y) + ")";
}
function JSCompiler_StaticMethods_getChannelsCss_(JSCompiler_StaticMethods_getChannelsCss_$self, requiredFunctions, element) {
  var motionPathStr = "";
  if (JSCompiler_StaticMethods_hasMotionPath_(JSCompiler_StaticMethods_getChannelsCss_$self)) {
    motionPathStr = JSCompiler_StaticMethods_getChannelsCss_$self.channels_.motionPath;
    var oppositeOriginDelta = {x:{value:-motionPathStr.transformOriginDelta.x.value, unit:"px"}, y:{value:-motionPathStr.transformOriginDelta.y.value, unit:"px"}};
    motionPathStr = JSCompiler_StaticMethods_get2DChannelCss_(motionPathStr.transformOriginDelta) + " " + JSCompiler_StaticMethods_get2DChannelCss_(motionPathStr.translation) + " rotateZ(" + JSCompiler_StaticMethods_getMeasurementCss(motionPathStr.rotationZ) + ") " + JSCompiler_StaticMethods_get2DChannelCss_(oppositeOriginDelta);
  }
  oppositeOriginDelta = "";
  var percentTrans = JSCompiler_StaticMethods_getChannelsCss_$self.channels_.percentTranslation;
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasPercentTranslation() || requiredFunctions.includes("translate")) {
    oppositeOriginDelta = percentTrans.x, percentTrans = percentTrans.y, element && (element = module$exports$ninja$model$threeD$elementBoundUtil$getBounds(element), oppositeOriginDelta = {value:oppositeOriginDelta.value / 100 * element.width, unit:"px"}, percentTrans = {value:percentTrans.value / 100 * element.height, unit:"px"}), oppositeOriginDelta = "translate(" + JSCompiler_StaticMethods_getMeasurementCss(oppositeOriginDelta) + "," + JSCompiler_StaticMethods_getMeasurementCss(percentTrans) + 
    ")";
  }
  element = "";
  percentTrans = JSCompiler_StaticMethods_getChannelsCss_$self.channels_.translation;
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasTranslation() || requiredFunctions.includes("translate3d")) {
    element = "translate3d(" + JSCompiler_StaticMethods_getMeasurementCss(percentTrans.x) + "," + JSCompiler_StaticMethods_getMeasurementCss(percentTrans.y) + "," + JSCompiler_StaticMethods_getMeasurementCss(percentTrans.z) + ")";
  }
  percentTrans = "";
  var rot = JSCompiler_StaticMethods_getChannelsCss_$self.channels_.rotation;
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasRotationZ() || requiredFunctions.includes("rotateZ")) {
    percentTrans += "rotateZ(" + JSCompiler_StaticMethods_getMeasurementCss(rot.z) + ") ";
  }
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasRotationY() || requiredFunctions.includes("rotateY")) {
    percentTrans += "rotateY(" + JSCompiler_StaticMethods_getMeasurementCss(rot.y) + ") ";
  }
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasRotationX() || requiredFunctions.includes("rotateX")) {
    percentTrans += "rotateX(" + JSCompiler_StaticMethods_getMeasurementCss(rot.x) + ")";
  }
  rot = "";
  const scale = JSCompiler_StaticMethods_getChannelsCss_$self.channels_.scale;
  if (JSCompiler_StaticMethods_getChannelsCss_$self.hasScale() || requiredFunctions.includes("scale3d")) {
    rot = "scale3d(" + JSCompiler_StaticMethods_getMeasurementCss(scale.x) + "," + JSCompiler_StaticMethods_getMeasurementCss(scale.y) + "," + JSCompiler_StaticMethods_getMeasurementCss(scale.z) + ")";
  }
  return (motionPathStr + " " + oppositeOriginDelta + " " + element + " " + percentTrans + " " + rot).trim().replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
}
function JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_$self) {
  "not_canonical_not_edited" === JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_$self.JSC$2437_state_ && (JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_$self.JSC$2437_state_ = "not_canonical_edited");
}
function JSCompiler_StaticMethods_applyDiffToChannel2D_(channel2D, channelDiff2D, {isDelta}) {
  return {x:JSCompiler_StaticMethods_applyDiffToMeasurement_(channel2D.x, channelDiff2D.x, {isDelta}), y:JSCompiler_StaticMethods_applyDiffToMeasurement_(channel2D.y, channelDiff2D.y, {isDelta})};
}
function JSCompiler_StaticMethods_applyDiffToChannel_(channel, channelDiff, {isDelta}) {
  return {x:JSCompiler_StaticMethods_applyDiffToMeasurement_(channel.x, channelDiff.x, {isDelta}), y:JSCompiler_StaticMethods_applyDiffToMeasurement_(channel.y, channelDiff.y, {isDelta}), z:JSCompiler_StaticMethods_applyDiffToMeasurement_(channel.z, channelDiff.z, {isDelta})};
}
function JSCompiler_StaticMethods_applyDiffToMeasurement_(measurement, measurementDiff, {isDelta}) {
  return measurementDiff ? {value:isDelta ? measurement.value + measurementDiff.value : measurementDiff.value, unit:measurementDiff.unit} : measurement;
}
function JSCompiler_StaticMethods_applyChannelDiffs(JSCompiler_StaticMethods_applyChannelDiffs$self, diffs) {
  const isDelta = diffs.isDelta;
  diffs.percentTranslation && JSCompiler_StaticMethods_applyChannelDiffs$self.setPercentTranslation(JSCompiler_StaticMethods_applyDiffToChannel2D_(JSCompiler_StaticMethods_applyChannelDiffs$self.getPercentTranslation(), diffs.percentTranslation, {isDelta}));
  diffs.translation && JSCompiler_StaticMethods_applyChannelDiffs$self.setTranslation(JSCompiler_StaticMethods_applyDiffToChannel_(JSCompiler_StaticMethods_applyChannelDiffs$self.getTranslation(), diffs.translation, {isDelta}));
  diffs.rotation && JSCompiler_StaticMethods_applyChannelDiffs$self.setRotation(JSCompiler_StaticMethods_applyDiffToChannel_(JSCompiler_StaticMethods_applyChannelDiffs$self.getRotation(), diffs.rotation, {isDelta}));
  diffs.scale && JSCompiler_StaticMethods_applyChannelDiffs$self.setScale(JSCompiler_StaticMethods_applyDiffToChannel_(JSCompiler_StaticMethods_applyChannelDiffs$self.getScale(), diffs.scale, {isDelta}));
  if (diffs.motionPath) {
    const {transformOriginDelta, translation, rotationZ} = module$contents$goog$object_unsafeClone(JSCompiler_StaticMethods_applyChannelDiffs$self.channels_.motionPath);
    JSCompiler_StaticMethods_applyChannelDiffs$self.channels_.motionPath = module$contents$goog$object_unsafeClone({transformOriginDelta:JSCompiler_StaticMethods_applyDiffToChannel2D_(transformOriginDelta, diffs.motionPath.transformOriginDelta, {isDelta}), translation:JSCompiler_StaticMethods_applyDiffToChannel2D_(translation, diffs.motionPath.translation, {isDelta}), rotationZ:JSCompiler_StaticMethods_applyDiffToMeasurement_(rotationZ, diffs.motionPath.rotationZ, {isDelta})});
    JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(JSCompiler_StaticMethods_applyChannelDiffs$self);
  }
}
function JSCompiler_StaticMethods_getInterpolatedChannelDiff2D_(oldChannel2D, newChannel2D, x, {isDelta}) {
  return {x:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldChannel2D.x, newChannel2D.x, x, {isDelta}), y:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldChannel2D.y, newChannel2D.y, x, {isDelta})};
}
function JSCompiler_StaticMethods_getInterpolatedChannelDiff_(oldChannel, newChannel, x, {isDelta}) {
  return {x:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldChannel.x, newChannel.x, x, {isDelta}), y:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldChannel.y, newChannel.y, x, {isDelta}), z:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldChannel.z, newChannel.z, x, {isDelta})};
}
function JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_(oldMeasurement, newMeasurement, x, {isDelta}) {
  return module$exports$ninja$math$mathUtils$equalsWithinTol(oldMeasurement.value, newMeasurement.value, module$contents$ninja$model$threeD$GwdTransform_TOL) ? null : {value:module$exports$ninja$math$mathUtils$cleanseFloatingPoint((isDelta ? newMeasurement.value - oldMeasurement.value : newMeasurement.value) * x, 4), unit:newMeasurement.unit};
}
class module$contents$ninja$model$threeD$GwdTransform_GwdTransform {
  constructor(transformValue = "") {
    this.initTransformValue_ = transformValue ? transformValue.trim() : "";
    this.JSC$2437_state_ = JSCompiler_StaticMethods_areTransformFunctionsCanonical_(this) && JSCompiler_StaticMethods_areTransformFunctionArgumentsCanonical_(this) ? "canonical" : "not_canonical_not_edited";
    "canonical" === this.JSC$2437_state_ ? transformValue = JSCompiler_StaticMethods_getInitialChannelsFromCanonicalTransform_(this) : (transformValue = module$exports$ninja$math$mathUtils$cssToMatrix(this.initTransformValue_) || goog$vec$mat4d$createIdentity(), transformValue = module$contents$ninja$model$threeD$GwdTransform_GwdTransform$decomposeMatrixToChannels_(transformValue));
    this.channels_ = transformValue;
  }
  clone() {
    return new module$contents$ninja$model$threeD$GwdTransform_GwdTransform(this.getCss());
  }
  getCss(requiredFunctions = []) {
    return "not_canonical_not_edited" === this.JSC$2437_state_ ? this.initTransformValue_ : JSCompiler_StaticMethods_getChannelsCss_(this, requiredFunctions, null);
  }
  hasTranslation() {
    const translation = this.channels_.translation;
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(translation.x.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(translation.y.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(translation.z.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  hasPercentTranslation() {
    const percentTranslation = this.channels_.percentTranslation;
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(percentTranslation.x.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(percentTranslation.y.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  hasRotationX() {
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(this.channels_.rotation.x.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  hasRotationY() {
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(this.channels_.rotation.y.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  hasRotationZ() {
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(this.channels_.rotation.z.value, 0, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  hasScale() {
    const scale = this.channels_.scale;
    return !module$exports$ninja$math$mathUtils$equalsWithinTol(scale.x.value, 1, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(scale.y.value, 1, module$contents$ninja$model$threeD$GwdTransform_TOL) || !module$exports$ninja$math$mathUtils$equalsWithinTol(scale.z.value, 1, module$contents$ninja$model$threeD$GwdTransform_TOL);
  }
  isIdentity() {
    if ("not_canonical_not_edited" === this.JSC$2437_state_) {
      const mat = this.getMatrix();
      for (let i = 0; i < mat.length; i++) {
        if (!module$exports$ninja$math$mathUtils$equalsWithinTol(mat[i], module$contents$ninja$model$threeD$GwdTransform_IDENTITY_MATRIX[i], 1E-4)) {
          return !1;
        }
      }
      return !0;
    }
    return !this.hasPercentTranslation() && !this.hasTranslation() && !this.hasRotationX() && !this.hasRotationY() && !this.hasRotationZ() && !this.hasScale() && !JSCompiler_StaticMethods_hasMotionPath_(this);
  }
  getTranslation() {
    return module$contents$goog$object_unsafeClone(this.channels_.translation);
  }
  getPercentTranslation() {
    return module$contents$goog$object_unsafeClone(this.channels_.percentTranslation);
  }
  getRotation() {
    return module$contents$goog$object_unsafeClone(this.channels_.rotation);
  }
  getScale() {
    return module$contents$goog$object_unsafeClone(this.channels_.scale);
  }
  getMatrix(element) {
    element = "not_canonical_not_edited" === this.JSC$2437_state_ ? this.initTransformValue_ : JSCompiler_StaticMethods_getChannelsCss_(this, [], element || null);
    return element ? (element = module$exports$ninja$math$mathUtils$cssToMatrix(element)) ? element : goog$vec$mat4d$createIdentity() : goog$vec$mat4d$createIdentity();
  }
  getRotationMatrix() {
    var channels = this.channels_.rotation;
    const result = goog$vec$mat4d$createIdentity();
    var angle = channels.z.value * Math.PI / 180, m00 = result[0], m10 = result[1], m20 = result[2], m30 = result[3], m01 = result[4], m11 = result[5], m21 = result[6], m31 = result[7], c = Math.cos(angle);
    angle = Math.sin(angle);
    result[0] = m00 * c + m01 * angle;
    result[1] = m10 * c + m11 * angle;
    result[2] = m20 * c + m21 * angle;
    result[3] = m30 * c + m31 * angle;
    result[4] = m00 * -angle + m01 * c;
    result[5] = m10 * -angle + m11 * c;
    result[6] = m20 * -angle + m21 * c;
    result[7] = m30 * -angle + m31 * c;
    angle = channels.y.value * Math.PI / 180;
    m00 = result[0];
    m10 = result[1];
    m20 = result[2];
    m30 = result[3];
    m01 = result[8];
    m11 = result[9];
    m21 = result[10];
    m31 = result[11];
    c = Math.cos(angle);
    angle = Math.sin(angle);
    result[0] = m00 * c + m01 * -angle;
    result[1] = m10 * c + m11 * -angle;
    result[2] = m20 * c + m21 * -angle;
    result[3] = m30 * c + m31 * -angle;
    result[8] = m00 * angle + m01 * c;
    result[9] = m10 * angle + m11 * c;
    result[10] = m20 * angle + m21 * c;
    result[11] = m30 * angle + m31 * c;
    c = channels.x.value * Math.PI / 180;
    channels = result[4];
    m00 = result[5];
    m10 = result[6];
    m20 = result[7];
    m30 = result[8];
    m01 = result[9];
    m11 = result[10];
    m21 = result[11];
    m31 = Math.cos(c);
    c = Math.sin(c);
    result[4] = channels * m31 + m30 * c;
    result[5] = m00 * m31 + m01 * c;
    result[6] = m10 * m31 + m11 * c;
    result[7] = m20 * m31 + m21 * c;
    result[8] = channels * -c + m30 * m31;
    result[9] = m00 * -c + m01 * m31;
    result[10] = m10 * -c + m11 * m31;
    result[11] = m20 * -c + m21 * m31;
    return result;
  }
  getScaleMatrix() {
    const result = goog$vec$mat4d$createIdentity();
    result[0] = this.channels_.scale.x.value;
    result[5] = this.channels_.scale.y.value;
    result[10] = this.channels_.scale.z.value;
    return result;
  }
  setTranslation(translation) {
    this.channels_.translation = module$contents$goog$object_unsafeClone(translation);
    JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(this);
  }
  setPercentTranslation(percentTranslation) {
    this.channels_.percentTranslation = module$contents$goog$object_unsafeClone(percentTranslation);
    JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(this);
  }
  setRotation(rotation) {
    this.channels_.rotation = module$contents$goog$object_unsafeClone(rotation);
    JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(this);
  }
  setScale(scale) {
    this.channels_.scale = module$contents$goog$object_unsafeClone(scale);
    JSCompiler_StaticMethods_maybeUpdateNonCanonicalTransformStateToEdited_(this);
  }
  roundTranslationChannels() {
    const translation = this.channels_.translation;
    translation.x.value = Math.round(translation.x.value);
    translation.y.value = Math.round(translation.y.value);
    translation.z.value = Math.round(translation.z.value);
    return this;
  }
  applyTranslationDeltasToTranslationOrMotionPath({useMotionPath}, x, y, z) {
    useMotionPath ? JSCompiler_StaticMethods_applyChannelDiffs(this, {isDelta:!0, rotation:null, scale:null, translation:{x:null, y:null, z:{value:z, unit:"px"}}, percentTranslation:null, motionPath:{transformOriginDelta:{x:null, y:null}, translation:{x:{value:x, unit:"px"}, y:{value:y, unit:"px"}}, rotationZ:null}}) : JSCompiler_StaticMethods_applyChannelDiffs(this, {isDelta:!0, rotation:null, scale:null, translation:{x:{value:x, unit:"px"}, y:{value:y, unit:"px"}, z:{value:z, unit:"px"}}, percentTranslation:null, 
    motionPath:null});
  }
}
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.applyTranslationDeltasToTranslationOrMotionPath = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.applyTranslationDeltasToTranslationOrMotionPath;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.roundTranslationChannels = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.roundTranslationChannels;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setScale = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setScale;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setRotation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setRotation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setPercentTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setPercentTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.setTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getScaleMatrix = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getScaleMatrix;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getRotationMatrix = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getRotationMatrix;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getMatrix = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getMatrix;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getScale = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getScale;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getRotation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getRotation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getPercentTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getPercentTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.isIdentity = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.isIdentity;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasScale = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasScale;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationZ = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationZ;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationY = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationY;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationX = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasRotationX;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasPercentTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasPercentTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasTranslation = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.hasTranslation;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getCss = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.getCss;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.clone = module$contents$ninja$model$threeD$GwdTransform_GwdTransform.prototype.clone;
module$contents$ninja$model$threeD$GwdTransform_GwdTransform.createFromMatrix = module$contents$ninja$model$threeD$GwdTransform_GwdTransform$createFromMatrix;
goog$exportSymbol("ninja.model.threeD.GwdTransform", module$contents$ninja$model$threeD$GwdTransform_GwdTransform);
var module$exports$ninja$anim$animUtil$convertCssTimeToMilliseconds = timeString => timeString.match("ms") ? Number(timeString.replace("ms", "")) : timeString.match("[^m]s") ? 1E3 * Number(timeString.replace("s", "")) : 0;
function module$exports$ninja$anim$animUtil$compareKeyTimes(timeMs1, timeMs2) {
  return -1 === module$exports$ninja$math$mathUtils$fpCmp(Math.abs(timeMs1 - timeMs2), .1) ? 0 : timeMs1 > timeMs2 ? 1 : -1;
}
const module$contents$ninja$anim$animUtil_NONE_ANIM_REGEX = /(^none($|\s)|\s+none$)/;
var module$exports$ninja$anim$animUtil$getAnimationPropertiesAtIndex = (style, index) => {
  const properties = Object.assign({}, module$exports$ninja$anim$animConstants$ANIMATION_PROPERTIES_DEFAULTS);
  if (style) {
    const animNames = style.getPropertyValue("animation-name").split(", ");
    var val = animNames[index];
    if (val && !module$contents$ninja$anim$animUtil_NONE_ANIM_REGEX.test(val)) {
      properties.animationName = animNames[index];
      val = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-delay", index);
      properties.delay = null !== val ? module$exports$ninja$anim$animUtil$convertCssTimeToMilliseconds(val) : properties.delay;
      val = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-direction", index);
      properties.direction = null !== val ? val : properties.direction;
      val = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-duration", index);
      properties.duration = null !== val ? module$exports$ninja$anim$animUtil$convertCssTimeToMilliseconds(val) : properties.duration;
      val = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-fill-mode", index);
      properties.fillMode = null !== val ? val : properties.fillMode;
      if (val = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-iteration-count", index)) {
        "infinite" === val ? properties.iterationCount = val : (val = parseInt(val, 10), isNaN(val) || (properties.iterationCount = val));
      }
      style = module$contents$ninja$anim$animUtil_getValueAtIndex(style, "animation-timing-function", index);
      properties.timingFunction = null !== style ? style : properties.timingFunction;
    }
  }
  return properties;
};
const module$contents$ninja$anim$animUtil_getValueAtIndex = (style, property, index) => {
  style = style.getPropertyValue(property).split(", ");
  return index < style.length && "initial" !== style[index] ? style[index] : null;
};
function module$exports$ninja$anim$animUtil$maybeReplaceMatrix(transformStr, requiredFcns) {
  if (transformStr.includes("matrix")) {
    var matrix = module$exports$ninja$math$mathUtils$cssToMatrix(transformStr);
    if (matrix) {
      requiredFcns = module$contents$ninja$model$threeD$GwdTransform_GwdTransform$createFromMatrix(matrix).getCss(requiredFcns);
      a: {
        matrix = module$exports$ninja$math$mathUtils$cssToMatrix(transformStr);
        const matrix2 = module$exports$ninja$math$mathUtils$cssToMatrix(requiredFcns);
        if (matrix && matrix2) {
          for (let i = 0; i < matrix.length; i++) {
            if (!module$exports$ninja$math$mathUtils$equalsWithinTol(matrix[i], matrix2[i], 1E-4)) {
              matrix = !1;
              break a;
            }
          }
          matrix = !0;
        } else {
          matrix = !1;
        }
      }
      if (matrix) {
        return requiredFcns;
      }
    }
  }
  return transformStr;
}
var module$exports$ninja$anim$animUtil$getKeyTimeMs = (keyText, duration, delay) => module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round((duration * goog$math$clamp(Number(keyText.replace("%", "")) / 100, 0, 1) + delay) / .1));
const module$contents$ninja$anim$avClipAnimUtil_MAX_CIRCLE_MASK_PERCENT_RADIUS = 1 / Math.sqrt(2) * 100;
function module$contents$ninja$anim$avClipAnimUtil_getClipStartTime(clip) {
  let $jscomp$optchain$tmpm1376196326$0;
  return (null == ($jscomp$optchain$tmpm1376196326$0 = clip.transitions.start) ? 0 : $jscomp$optchain$tmpm1376196326$0.isDouble) ? clip.startTime - clip.transitions.start.duration : clip.startTime;
}
function module$contents$ninja$anim$avClipAnimUtil_getClipEndTime(clip) {
  let $jscomp$optchain$tmpm1376196326$1;
  return (null == ($jscomp$optchain$tmpm1376196326$1 = clip.transitions.end) ? 0 : $jscomp$optchain$tmpm1376196326$1.isDouble) ? clip.startTime + clip.duration + clip.transitions.end.duration : clip.startTime + clip.duration;
}
function module$contents$ninja$anim$avClipAnimUtil_addTransitionProperties(properties, transition, progress) {
  var isIncoming = "start" === transition.position;
  switch(transition.effect) {
    case "fade":
      transition.isDouble ? isIncoming ? (properties["z-index"] = "1", properties.opacity = String(progress)) : properties["z-index"] = "0" : properties.opacity = String(isIncoming ? progress : 1 - progress);
      break;
    case "iris-wipe":
      transition.isDouble ? isIncoming ? (properties["z-index"] = "1", properties["clip-path"] = `circle(${(module$contents$ninja$anim$avClipAnimUtil_MAX_CIRCLE_MASK_PERCENT_RADIUS * progress).toFixed(3)}% at 50% 50%)`) : properties["z-index"] = "0" : properties["clip-path"] = `circle(${(module$contents$ninja$anim$avClipAnimUtil_MAX_CIRCLE_MASK_PERCENT_RADIUS * (isIncoming ? progress : 1 - progress)).toFixed(3)}% at 50% 50%)`;
      break;
    case "rect-wipe-down":
    case "rect-wipe-left":
    case "rect-wipe-right":
    case "rect-wipe-up":
      isIncoming = "start" === transition.position;
      var incomingInset = transition.isDouble && 1E-5 < progress && .99999 > progress ? `calc(${100 * (1 - progress)}% - 0.5px)` : `${100 * (1 - progress)}%`;
      progress = `${100 * progress}%`;
      switch(transition.effect) {
        case "rect-wipe-down":
          properties["clip-path"] = isIncoming ? `inset(0 0 ${incomingInset} 0)` : `inset(${progress} 0 0 0)`;
          break;
        case "rect-wipe-left":
          properties["clip-path"] = isIncoming ? `inset(0 0 0 ${incomingInset})` : `inset(0 ${progress} 0 0)`;
          break;
        case "rect-wipe-right":
          properties["clip-path"] = isIncoming ? `inset(0 ${incomingInset} 0 0)` : `inset(0 0 0 ${progress})`;
          break;
        case "rect-wipe-up":
          properties["clip-path"] = isIncoming ? `inset(${incomingInset} 0 0 0)` : `inset(0 0 ${progress} 0)`;
      }break;
    case "slide-down":
    case "slide-left":
    case "slide-right":
    case "slide-up":
      switch(isIncoming = transition.isDouble && 1E-5 < progress && .99999 > progress, incomingInset = "start" === transition.position, transition.effect) {
        case "slide-down":
          properties.transform = (isIncoming && incomingInset ? "translateY(0.5px)" : "") + `translateY(${100 * (incomingInset ? progress - 1 : progress)}%)`;
          break;
        case "slide-left":
          properties.transform = (isIncoming && incomingInset ? "translateX(-0.5px)" : "") + `translateX(${100 * (incomingInset ? 1 - progress : -progress)}%)`;
          break;
        case "slide-right":
          properties.transform = (isIncoming && incomingInset ? "translateX(0.5px)" : "") + `translateX(${100 * (incomingInset ? progress - 1 : progress)}%)`;
          break;
        case "slide-up":
          properties.transform = (isIncoming && incomingInset ? "translateY(-0.5px)" : "") + `translateY(${100 * (incomingInset ? 1 - progress : -progress)}%)`;
      }
  }
}
function module$contents$ninja$anim$avClipAnimUtil_setEmptyTransitionPropertiesIfNotAlreadySet(properties, transition) {
  const isStart = "start" === transition.position;
  let propertiesToClear = [];
  switch(transition.effect) {
    case "fade":
      propertiesToClear = transition.isDouble ? isStart ? ["opacity", "z-index"] : ["z-index"] : ["opacity"];
      break;
    case "iris-wipe":
      propertiesToClear = transition.isDouble ? isStart ? ["clip-path", "z-index"] : ["z-index"] : ["clip-path"];
      break;
    case "rect-wipe-down":
    case "rect-wipe-left":
    case "rect-wipe-right":
    case "rect-wipe-up":
      propertiesToClear = ["clip-path"];
      break;
    case "slide-down":
    case "slide-left":
    case "slide-right":
    case "slide-up":
      propertiesToClear = ["transform"];
  }
  for (const prop of propertiesToClear) {
    properties[prop] || (properties[prop] = "");
  }
}
;var module$exports$ninja$capture$VideoClipController$VideoClipController = class {
  constructor(element, properties, frameSequence) {
    this.JSC$2457_element_ = element;
    this.JSC$2457_frameSequence_ = frameSequence;
    this.startTimeMs_ = module$contents$ninja$anim$avClipAnimUtil_getClipStartTime(properties);
    var $jscomp$optchain$tmp858453898$0;
    this.inTimeMs_ = (null == ($jscomp$optchain$tmp858453898$0 = properties.transitions.start) ? 0 : $jscomp$optchain$tmp858453898$0.isDouble) ? properties.inTime - properties.transitions.start.duration : properties.inTime;
    this.endTimeMs_ = module$contents$ninja$anim$avClipAnimUtil_getClipEndTime(properties);
    this.isHold_ = properties.isHold;
    this.backingVideo_ = new module$exports$ninja$capture$BackingVideo$BackingVideo(this.JSC$2457_element_);
    this.lastSequenceIndexInClip_ = this.firstSequenceIndexInClip_ = this.currentSequenceIndex_ = -1;
    this.isActive_ = !0;
    element = this.JSC$2457_frameSequence_.frameRate();
    properties = this.JSC$2457_frameSequence_;
    properties = properties.frameTimeOffset_.numerator / properties.frameTimeOffset_.denominator * 1E3;
    frameSequence = Math.floor((this.endTimeMs_ - properties + .1) / 1E3 * element);
    $jscomp$optchain$tmp858453898$0 = this.JSC$2457_frameSequence_.indices_.startFrame;
    const frameIncrement = this.JSC$2457_frameSequence_.indices_.increment;
    this.firstSequenceIndexInClip_ = Math.max(0, Math.ceil((Math.ceil((this.startTimeMs_ - properties - .1) / 1E3 * element) - $jscomp$optchain$tmp858453898$0) / frameIncrement));
    this.lastSequenceIndexInClip_ = Math.min(this.JSC$2457_frameSequence_.length() - 1, Math.floor((frameSequence - $jscomp$optchain$tmp858453898$0) / frameIncrement));
    element = JSCompiler_StaticMethods_sequenceIndexToTimeMs(this.JSC$2457_frameSequence_, this.lastSequenceIndexInClip_);
    .1 >= Math.abs(element - this.endTimeMs_) && this.lastSequenceIndexInClip_--;
    this.isActive_ = this.firstSequenceIndexInClip_ <= this.lastSequenceIndexInClip_;
  }
  isActive() {
    return this.isActive_;
  }
};
function JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_getIndexAtTime_$self, time) {
  return module$contents$goog$array_binarySearch(JSCompiler_StaticMethods_getIndexAtTime_$self.animKeys_, time, (time, k2) => module$exports$ninja$anim$animUtil$compareKeyTimes(time, k2.time));
}
function JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(JSCompiler_StaticMethods_JSC$2465_getKeyAtTime$self, time) {
  time = JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_JSC$2465_getKeyAtTime$self, time);
  return JSCompiler_StaticMethods_JSC$2465_getKeyAtTime$self.animKeys_[time] || null;
}
function JSCompiler_StaticMethods_addKeyAtTime(JSCompiler_StaticMethods_addKeyAtTime$self, time, value, easing) {
  value = {time, value, easing};
  time = JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_addKeyAtTime$self, time);
  0 > time ? 0 === JSCompiler_StaticMethods_addKeyAtTime$self.animKeys_.length ? JSCompiler_StaticMethods_addKeyAtTime$self.animKeys_.push(value) : module$contents$goog$array_binaryInsert(JSCompiler_StaticMethods_addKeyAtTime$self.animKeys_, value, (t1, t2) => t1.time > t2.time ? 1 : -1) : JSCompiler_StaticMethods_addKeyAtTime$self.animKeys_[time] = value;
}
function JSCompiler_StaticMethods_getKeyTimes(JSCompiler_StaticMethods_getKeyTimes$self) {
  const keytimes = [];
  for (const animKey of JSCompiler_StaticMethods_getKeyTimes$self.animKeys_) {
    keytimes.push(animKey.time);
  }
  return keytimes;
}
function JSCompiler_StaticMethods_getFirstKey(JSCompiler_StaticMethods_getFirstKey$self) {
  let $jscomp$nullish$tmp4;
  return null != ($jscomp$nullish$tmp4 = JSCompiler_StaticMethods_getFirstKey$self.animKeys_[0]) ? $jscomp$nullish$tmp4 : null;
}
function JSCompiler_StaticMethods_getLastKey(JSCompiler_StaticMethods_getLastKey$self) {
  let $jscomp$nullish$tmp5;
  return null != ($jscomp$nullish$tmp5 = JSCompiler_StaticMethods_getLastKey$self.animKeys_[JSCompiler_StaticMethods_getLastKey$self.animKeys_.length - 1]) ? $jscomp$nullish$tmp5 : null;
}
function JSCompiler_StaticMethods_setKeyTime(JSCompiler_StaticMethods_setKeyTime$self, oldTime, newTime) {
  oldTime = JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_setKeyTime$self, oldTime);
  if (0 > oldTime) {
    return !1;
  }
  var i2 = JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_setKeyTime$self, newTime);
  if (0 <= i2 && oldTime != i2 || (i2 = JSCompiler_StaticMethods_setKeyTime$self.animKeys_[oldTime - 1] || null) && (newTime < i2.time || 0 === module$exports$ninja$anim$animUtil$compareKeyTimes(newTime, i2.time)) || (i2 = JSCompiler_StaticMethods_setKeyTime$self.animKeys_[oldTime + 1] || null) && (newTime > i2.time || 0 === module$exports$ninja$anim$animUtil$compareKeyTimes(newTime, i2.time))) {
    return !1;
  }
  i2 = JSCompiler_StaticMethods_setKeyTime$self.animKeys_[oldTime];
  JSCompiler_StaticMethods_setKeyTime$self.animKeys_[oldTime] = {time:newTime, value:i2.value, easing:i2.easing};
  return !0;
}
class module$exports$ninja$anim$AnimTrack {
  constructor() {
    this.animKeys_ = [];
  }
}
;const module$contents$ninja$model$timeline2$visibilityRange_UNDEFINED_RANGE = {start:-Infinity, end:Infinity};
function JSCompiler_StaticMethods_isRangeValid_({start, end}) {
  return (-Infinity === start || 0 <= start) && 10 <= end - start;
}
function JSCompiler_StaticMethods_getRangeStr_({start, end}) {
  return `${isFinite(start) ? start : ""}${","}${isFinite(end) ? end : ""}`;
}
function JSCompiler_StaticMethods_getStartTimeMs(JSCompiler_StaticMethods_getStartTimeMs$self) {
  return isFinite(JSCompiler_StaticMethods_getStartTimeMs$self.range_.start) ? JSCompiler_StaticMethods_getStartTimeMs$self.range_.start : 0;
}
function JSCompiler_StaticMethods_expandToIncludeTime(JSCompiler_StaticMethods_expandToIncludeTime$self, time) {
  const start = JSCompiler_StaticMethods_expandToIncludeTime$self.range_.start, end = JSCompiler_StaticMethods_expandToIncludeTime$self.range_.end, newRange = {start, end};
  time < start ? newRange.start = time : time > end && (newRange.end = time);
  if (!JSCompiler_StaticMethods_isRangeValid_(newRange)) {
    throw Error(`The provided visibility range is invalid: ${JSON.stringify(newRange)}`);
  }
  JSCompiler_StaticMethods_expandToIncludeTime$self.range_ = Object.assign({}, newRange);
}
function JSCompiler_StaticMethods_getVisibilityKeys(JSCompiler_StaticMethods_getVisibilityKeys$self, userKeyTimes, {propertyIsAnimated}) {
  const visibleValue = JSCompiler_StaticMethods_getVisibilityKeys$self.getBaseStyle_();
  if (!visibleValue) {
    return module$exports$ninja$debug$log$warning("Visibility base style getter returned an empty value."), null;
  }
  const start = JSCompiler_StaticMethods_getVisibilityKeys$self.range_.start, end = JSCompiler_StaticMethods_getVisibilityKeys$self.range_.end, addStartKey = isFinite(start), addEndKey = isFinite(end), easing = new module$exports$ninja$anim$CssEasing$CssEasing("step-end");
  let endKey = JSCompiler_StaticMethods_getVisibilityKeys$self = null;
  addStartKey && (JSCompiler_StaticMethods_getVisibilityKeys$self = {time:userKeyTimes.length && 0 === module$exports$ninja$math$mathUtils$fpCmp(start, userKeyTimes[0], .1) ? Math.max(0, start - 2) : start, value:visibleValue, easing}, propertyIsAnimated || addEndKey || (endKey = {time:(userKeyTimes.length ? userKeyTimes[userKeyTimes.length - 1] : start) + 2, value:visibleValue, easing}));
  addEndKey && (endKey = {time:end, value:"hidden", easing}, propertyIsAnimated || addStartKey || (JSCompiler_StaticMethods_getVisibilityKeys$self = {time:Math.max(0, userKeyTimes.length ? userKeyTimes[0] - 2 : end - 2), value:visibleValue, easing}));
  var $jscomp$optchain$tmp1032584009$0, $jscomp$optchain$tmp1032584009$1;
  let $jscomp$nullish$tmp6;
  var $jscomp$nullish$tmp7;
  a: {
    if (propertyIsAnimated = null != ($jscomp$nullish$tmp6 = null == ($jscomp$optchain$tmp1032584009$0 = JSCompiler_StaticMethods_getVisibilityKeys$self) ? void 0 : $jscomp$optchain$tmp1032584009$0.time) ? $jscomp$nullish$tmp6 : null, $jscomp$optchain$tmp1032584009$0 = null != ($jscomp$nullish$tmp7 = null == ($jscomp$optchain$tmp1032584009$1 = endKey) ? void 0 : $jscomp$optchain$tmp1032584009$1.time) ? $jscomp$nullish$tmp7 : null, userKeyTimes.length) {
      $jscomp$optchain$tmp1032584009$1 = [];
      if (null !== propertyIsAnimated && ($jscomp$nullish$tmp7 = propertyIsAnimated + 2, userKeyTimes[0] < $jscomp$nullish$tmp7)) {
        if ($jscomp$nullish$tmp7 <= userKeyTimes[1] - .1) {
          $jscomp$optchain$tmp1032584009$1.push({time:userKeyTimes[0], newTime:$jscomp$nullish$tmp7});
        } else {
          module$exports$ninja$debug$log$warning("A conflicting key at the start time cannot be moved.");
          userKeyTimes = null;
          break a;
        }
      }
      if (null !== $jscomp$optchain$tmp1032584009$0 && ($jscomp$nullish$tmp7 = userKeyTimes[userKeyTimes.length - 1], $jscomp$optchain$tmp1032584009$0 -= 2, $jscomp$optchain$tmp1032584009$0 < $jscomp$nullish$tmp7)) {
        if ($jscomp$optchain$tmp1032584009$0 >= userKeyTimes[userKeyTimes.length - 2] + .1) {
          $jscomp$optchain$tmp1032584009$1.push({time:$jscomp$nullish$tmp7, newTime:$jscomp$optchain$tmp1032584009$0});
        } else {
          module$exports$ninja$debug$log$warning("A conflicting key at the end time cannot be moved.");
          userKeyTimes = null;
          break a;
        }
      }
      userKeyTimes = $jscomp$optchain$tmp1032584009$1;
    } else {
      userKeyTimes = [];
    }
  }
  if (!userKeyTimes) {
    return null;
  }
  $jscomp$optchain$tmp1032584009$1 = [];
  JSCompiler_StaticMethods_getVisibilityKeys$self && $jscomp$optchain$tmp1032584009$1.push(JSCompiler_StaticMethods_getVisibilityKeys$self);
  endKey && $jscomp$optchain$tmp1032584009$1.push(endKey);
  return {keys:$jscomp$optchain$tmp1032584009$1, conflicts:userKeyTimes};
}
var module$exports$ninja$model$timeline2$visibilityRange$VisibilityRange = class {
  constructor() {
    this.range_ = module$contents$ninja$model$timeline2$visibilityRange_UNDEFINED_RANGE;
    this.getBaseStyle_ = () => "";
  }
  isWithinRange(time) {
    return time >= this.range_.start - .1 && time < this.range_.end - .1;
  }
};
module$exports$ninja$model$timeline2$visibilityRange$VisibilityRange.prototype.isWithinRange = module$exports$ninja$model$timeline2$visibilityRange$VisibilityRange.prototype.isWithinRange;
var module$exports$ninja$anim$animTracks$DocumentModelAdapter = class {
};
const module$contents$ninja$anim$animTracks_isInvalidOrDisabled = property => property.startsWith("--gwd-disabled-") || property.startsWith("--gwd-invalid-");
function JSCompiler_StaticMethods_clearTracks_(JSCompiler_StaticMethods_clearTracks_$self) {
  JSCompiler_StaticMethods_clearTracks_$self.JSC$2481_tracks_.clear();
  JSCompiler_StaticMethods_clearTracks_$self.keyCounter_.clear();
}
function JSCompiler_StaticMethods_insertAnimKey(JSCompiler_StaticMethods_insertAnimKey$self, property, time, value, easing, {autoInsertFirstKey} = {autoInsertFirstKey:!0}, {isVisibilityKey} = {isVisibilityKey:!1}) {
  if (JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_insertAnimKey$self) || !JSCompiler_StaticMethods_canHaveAnimKey_(JSCompiler_StaticMethods_insertAnimKey$self, property, value, {isVisibilityKey})) {
    return !1;
  }
  let track = JSCompiler_StaticMethods_insertAnimKey$self.JSC$2481_tracks_.get(property);
  track || (track = new module$exports$ninja$anim$AnimTrack(), JSCompiler_StaticMethods_insertAnimKey$self.JSC$2481_tracks_.set(property, track));
  time = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(time / .1));
  isVisibilityKey || JSCompiler_StaticMethods_expandToIncludeTime(JSCompiler_StaticMethods_insertAnimKey$self.visibilityRange_, time);
  autoInsertFirstKey && "motion-path" !== property && !module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property) && (property = JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_insertAnimKey$self), property = property.length ? property[0] : JSCompiler_StaticMethods_getStartTimeMs(JSCompiler_StaticMethods_insertAnimKey$self.visibilityRange_), autoInsertFirstKey = 0 === track.animKeys_.length, time > property && autoInsertFirstKey && (JSCompiler_StaticMethods_addKeyAtTime(track, 
  property, value, easing), JSCompiler_StaticMethods_addUniqueKey_(JSCompiler_StaticMethods_insertAnimKey$self, property)));
  JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(track, time) || JSCompiler_StaticMethods_addUniqueKey_(JSCompiler_StaticMethods_insertAnimKey$self, time);
  JSCompiler_StaticMethods_addKeyAtTime(track, time, value, easing);
  return !0;
}
function JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_getUniqueKeyTimes$self) {
  return [...JSCompiler_StaticMethods_getUniqueKeyTimes$self.keyCounter_.keys()].sort((a, b) => a - b);
}
function JSCompiler_StaticMethods_updateWebAnimationsInput(JSCompiler_StaticMethods_updateWebAnimationsInput$self) {
  const visibilityKeysAdded = JSCompiler_StaticMethods_addVisibilityKeys(JSCompiler_StaticMethods_updateWebAnimationsInput$self), times = JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_(JSCompiler_StaticMethods_updateWebAnimationsInput$self), startTime = times[0], endTime = times[times.length - 1], animatableProperties = [...JSCompiler_StaticMethods_updateWebAnimationsInput$self.JSC$2481_tracks_.keys()].filter(property => "motion-path" !== property && !module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property));
  JSCompiler_StaticMethods_updateWebAnimationsInput$self.webAnimationsInput_ = {keyframes:times.map(time => {
    const keyframe = {};
    keyframe.offset = (time - startTime) / (endTime - startTime);
    var JSCompiler_inline_result = null;
    var JSCompiler_object_inline_isMixed_1338 = !1;
    for (const property of JSCompiler_StaticMethods_updateWebAnimationsInput$self.JSC$2481_tracks_.keys()) {
      var key = JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(JSCompiler_StaticMethods_updateWebAnimationsInput$self.JSC$2481_tracks_.get(property), time);
      if (key && key.easing) {
        JSCompiler_inline_result || (JSCompiler_inline_result = key.easing);
        var JSCompiler_inline_result$jscomp$0 = JSCompiler_inline_result;
        key = key.easing;
        JSCompiler_inline_result$jscomp$0.easingType_ != key.easingType_ ? JSCompiler_inline_result$jscomp$0 = !1 : "cubic-bezier" != JSCompiler_inline_result$jscomp$0.easingType_ ? JSCompiler_inline_result$jscomp$0 = !0 : (JSCompiler_inline_result$jscomp$0 = JSCompiler_inline_result$jscomp$0.controlPoints_, key = key.controlPoints_, JSCompiler_inline_result$jscomp$0 = module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_inline_result$jscomp$0.c0, key.c0, 1E-6) && module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_inline_result$jscomp$0.c1, 
        key.c1, 1E-6) && module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_inline_result$jscomp$0.c2, key.c2, 1E-6) && module$exports$ninja$math$mathUtils$equalsWithinTol(JSCompiler_inline_result$jscomp$0.c3, key.c3, 1E-6));
        if (!JSCompiler_inline_result$jscomp$0) {
          JSCompiler_inline_result = null;
          JSCompiler_object_inline_isMixed_1338 = !0;
          break;
        }
      }
    }
    JSCompiler_inline_result = !JSCompiler_inline_result || JSCompiler_object_inline_isMixed_1338 ? new module$exports$ninja$anim$CssEasing$CssEasing("linear") : JSCompiler_inline_result;
    "cubic-bezier" != JSCompiler_inline_result.easingType_ ? JSCompiler_inline_result = JSCompiler_inline_result.easingType_ : (JSCompiler_inline_result = JSCompiler_inline_result.controlPoints_, JSCompiler_inline_result = "cubic-bezier(" + module$exports$ninja$math$mathUtils$cleanseFloatingPoint(JSCompiler_inline_result.c0, 4) + ", " + module$exports$ninja$math$mathUtils$cleanseFloatingPoint(JSCompiler_inline_result.c1, 4) + ", " + module$exports$ninja$math$mathUtils$cleanseFloatingPoint(JSCompiler_inline_result.c2, 
    4) + ", " + module$exports$ninja$math$mathUtils$cleanseFloatingPoint(JSCompiler_inline_result.c3, 4) + ")");
    keyframe.easing = JSCompiler_inline_result;
    for (const property of animatableProperties) {
      JSCompiler_inline_result = goog$string$toCamelCase(property.replace("-webkit-", "")), (JSCompiler_object_inline_isMixed_1338 = JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(JSCompiler_StaticMethods_updateWebAnimationsInput$self.JSC$2481_tracks_.get(property), time)) ? JSCompiler_object_inline_isMixed_1338.value && "initial" !== JSCompiler_object_inline_isMixed_1338.value && (keyframe[JSCompiler_inline_result] = JSCompiler_object_inline_isMixed_1338.value) : JSCompiler_object_inline_isMixed_1338 || 
      1 !== keyframe.offset && 0 !== keyframe.offset || (JSCompiler_object_inline_isMixed_1338 = JSCompiler_StaticMethods_updateWebAnimationsInput$self.JSC$2481_tracks_.get(property), (JSCompiler_object_inline_isMixed_1338 = 0 === keyframe.offset ? JSCompiler_StaticMethods_getFirstKey(JSCompiler_object_inline_isMixed_1338) : JSCompiler_StaticMethods_getLastKey(JSCompiler_object_inline_isMixed_1338)) && JSCompiler_object_inline_isMixed_1338.value && "initial" !== JSCompiler_object_inline_isMixed_1338.value && 
      (keyframe[JSCompiler_inline_result] = JSCompiler_object_inline_isMixed_1338.value));
    }
    return keyframe;
  }), delay:0 < times.length ? startTime : 0, duration:1 < times.length ? endTime - startTime : 0};
  visibilityKeysAdded && JSCompiler_StaticMethods_removeVisibilityKeys(JSCompiler_StaticMethods_updateWebAnimationsInput$self);
}
function JSCompiler_StaticMethods_addUniqueKey_(JSCompiler_StaticMethods_addUniqueKey_$self, time) {
  const count = JSCompiler_StaticMethods_addUniqueKey_$self.keyCounter_.get(time);
  JSCompiler_StaticMethods_addUniqueKey_$self.keyCounter_.set(time, void 0 !== count ? count + 1 : 1);
}
function JSCompiler_StaticMethods_getKeyframeTimes(JSCompiler_StaticMethods_getKeyframeTimes$self, property) {
  return (JSCompiler_StaticMethods_getKeyframeTimes$self = JSCompiler_StaticMethods_getKeyframeTimes$self.JSC$2481_tracks_.get(property)) ? JSCompiler_StaticMethods_getKeyTimes(JSCompiler_StaticMethods_getKeyframeTimes$self) : [];
}
function JSCompiler_StaticMethods_deleteUniqueKey_(JSCompiler_StaticMethods_deleteUniqueKey_$self, time) {
  const count = JSCompiler_StaticMethods_deleteUniqueKey_$self.keyCounter_.get(time);
  void 0 !== count && (1 >= count ? JSCompiler_StaticMethods_deleteUniqueKey_$self.keyCounter_.delete(time) : JSCompiler_StaticMethods_deleteUniqueKey_$self.keyCounter_.set(time, count - 1));
}
function JSCompiler_StaticMethods_getKeyedProperties(JSCompiler_StaticMethods_getKeyedProperties$self) {
  return new Set([...JSCompiler_StaticMethods_getKeyedProperties$self.JSC$2481_tracks_.keys()]);
}
function JSCompiler_StaticMethods_JSC$2498_getKeyAtTime(JSCompiler_StaticMethods_JSC$2498_getKeyAtTime$self, property, time) {
  return (JSCompiler_StaticMethods_JSC$2498_getKeyAtTime$self = JSCompiler_StaticMethods_JSC$2498_getKeyAtTime$self.JSC$2481_tracks_.get(property)) ? JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(JSCompiler_StaticMethods_JSC$2498_getKeyAtTime$self, time) : null;
}
function JSCompiler_StaticMethods_canHaveAnimKey_(JSCompiler_StaticMethods_canHaveAnimKey_$self, property, value, {isVisibilityKey}) {
  if (module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property) || "motion-path" === property) {
    return !0;
  }
  if (!isVisibilityKey && "-webkit-mask-image" === property || ("fill" === property || "stroke" === property) && value.includes("gradient")) {
    return !1;
  }
  switch(JSCompiler_StaticMethods_canHaveAnimKey_$self.trackType_) {
    case "ampElement":
      return module$exports$ninja$anim$animConstants$ANIMATABLE_AMP_PROPERTIES.has(property);
    case "canvas":
      return module$exports$ninja$anim$animConstants$ANIMATABLE_CANVAS_PROPERTIES.has(property);
    case "element":
      return module$exports$ninja$anim$animConstants$ANIMATABLE_ELEMENT_PROPERTIES.has(property);
    case "mask":
      return module$exports$ninja$anim$animConstants$ANIMATABLE_MASK_PROPERTIES.has(property);
    default:
      return !1;
  }
}
function JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_warnIfReadOnly_$self) {
  return JSCompiler_StaticMethods_warnIfReadOnly_$self.visibilityKeysSnapshot_ ? (module$exports$ninja$debug$log$warning("AnimTracks cannot be edited while visibility keys are merged in."), !0) : !1;
}
function JSCompiler_StaticMethods_deleteAnimKey(JSCompiler_StaticMethods_deleteAnimKey$self, property, time) {
  if (!JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_deleteAnimKey$self)) {
    time = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(time / .1));
    var track = JSCompiler_StaticMethods_deleteAnimKey$self.JSC$2481_tracks_.get(property);
    if (track) {
      var index = JSCompiler_StaticMethods_getIndexAtTime_(track, time);
      (0 > index ? 0 : module$contents$goog$array_removeAt(track.animKeys_, index)) && JSCompiler_StaticMethods_deleteUniqueKey_(JSCompiler_StaticMethods_deleteAnimKey$self, time);
      time = JSCompiler_StaticMethods_getKeyTimes(track);
      1 !== time.length || module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property) || (index = JSCompiler_StaticMethods_getIndexAtTime_(track, time[0]), 0 > index || module$contents$goog$array_removeAt(track.animKeys_, index), JSCompiler_StaticMethods_deleteUniqueKey_(JSCompiler_StaticMethods_deleteAnimKey$self, time[0]));
      0 === JSCompiler_StaticMethods_getKeyTimes(track).length && JSCompiler_StaticMethods_deleteAnimKey$self.JSC$2481_tracks_.delete(property);
      1 === JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_deleteAnimKey$self).length && 0 === JSCompiler_StaticMethods_getKeyedProperties(JSCompiler_StaticMethods_deleteAnimKey$self).size && JSCompiler_StaticMethods_clearTracks_(JSCompiler_StaticMethods_deleteAnimKey$self);
    }
  }
}
function JSCompiler_StaticMethods_shiftAnimKey(JSCompiler_StaticMethods_shiftAnimKey$self, property, originalTime, newTime) {
  JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_shiftAnimKey$self) || (property = JSCompiler_StaticMethods_shiftAnimKey$self.JSC$2481_tracks_.get(property), originalTime = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(originalTime / .1)), newTime = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(newTime / .1)), property && JSCompiler_StaticMethods_setKeyTime(property, originalTime, newTime) && (JSCompiler_StaticMethods_deleteUniqueKey_(JSCompiler_StaticMethods_shiftAnimKey$self, 
  originalTime), JSCompiler_StaticMethods_addUniqueKey_(JSCompiler_StaticMethods_shiftAnimKey$self, newTime)));
}
function JSCompiler_StaticMethods_editAnimKeyEasing(JSCompiler_StaticMethods_editAnimKeyEasing$self, time, easing) {
  if (!JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_editAnimKeyEasing$self) && (JSCompiler_StaticMethods_editAnimKeyEasing$self = JSCompiler_StaticMethods_editAnimKeyEasing$self.JSC$2481_tracks_.get("visibility"))) {
    const index = JSCompiler_StaticMethods_getIndexAtTime_(JSCompiler_StaticMethods_editAnimKeyEasing$self, time);
    0 <= index && (JSCompiler_StaticMethods_editAnimKeyEasing$self.animKeys_[index] = {time, value:JSCompiler_StaticMethods_editAnimKeyEasing$self.animKeys_[index].value, easing});
  }
}
function JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_(JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_$self) {
  const motionPathTrack = JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_$self.JSC$2481_tracks_.get("motion-path"), times = JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_$self);
  return motionPathTrack ? times.filter(time => !JSCompiler_StaticMethods_JSC$2465_getKeyAtTime(motionPathTrack, time) || 1 < JSCompiler_StaticMethods_getUniqueTimesExcludingMotionPathKeys_$self.keyCounter_.get(time)) : times;
}
function JSCompiler_StaticMethods_copyValuesToLastKeyframe(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self) {
  if (JSCompiler_StaticMethods_warnIfReadOnly_(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self)) {
    return [];
  }
  var uniqueTimes = JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self);
  if (0 === uniqueTimes.length) {
    return [];
  }
  const copiedLastKeyProperties = [];
  uniqueTimes = uniqueTimes[uniqueTimes.length - 1];
  for (const property of JSCompiler_StaticMethods_copyValuesToLastKeyframe$self.JSC$2481_tracks_.keys()) {
    if ("motion-path" === property || module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property) || JSCompiler_StaticMethods_JSC$2498_getKeyAtTime(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self, property, uniqueTimes)) {
      continue;
    }
    const key = JSCompiler_StaticMethods_getLastKey(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self.JSC$2481_tracks_.get(property));
    JSCompiler_StaticMethods_insertAnimKey(JSCompiler_StaticMethods_copyValuesToLastKeyframe$self, property, uniqueTimes, key.value, key.easing);
    copiedLastKeyProperties.push(property);
  }
  return copiedLastKeyProperties;
}
function JSCompiler_StaticMethods_addVisibilityKeys(JSCompiler_StaticMethods_addVisibilityKeys$self) {
  var {includeInitialStyles} = {includeInitialStyles:!0};
  if (JSCompiler_StaticMethods_addVisibilityKeys$self.visibilityKeysSnapshot_) {
    return !1;
  }
  var rangeModel = JSCompiler_StaticMethods_addVisibilityKeys$self.visibilityRange_;
  if (!isFinite(rangeModel.range_.start) && !isFinite(rangeModel.range_.end)) {
    return !1;
  }
  var keyedProps = JSCompiler_StaticMethods_getKeyedProperties(JSCompiler_StaticMethods_addVisibilityKeys$self), allUserKeyTimes = JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_addVisibilityKeys$self), propertyIsAnimated = keyedProps.has("visibility");
  allUserKeyTimes = JSCompiler_StaticMethods_getVisibilityKeys(rangeModel, allUserKeyTimes, {propertyIsAnimated});
  if (!allUserKeyTimes) {
    return !1;
  }
  const keys = allUserKeyTimes.keys, conflicts = allUserKeyTimes.conflicts;
  allUserKeyTimes = [...JSCompiler_StaticMethods_addVisibilityKeys$self.keyCounter_.keys()].filter(time => 0 === JSCompiler_StaticMethods_addVisibilityKeys$self.keyCounter_.get(time));
  const stepEndEasing = new module$exports$ninja$anim$CssEasing$CssEasing("step-end");
  propertyIsAnimated = null;
  if (isFinite(Object.assign({}, rangeModel.range_).end)) {
    var $jscomp$optchain$tmpm461956423$0;
    const lastVisibilityKey = null == ($jscomp$optchain$tmpm461956423$0 = JSCompiler_StaticMethods_addVisibilityKeys$self.JSC$2481_tracks_.get("visibility")) ? void 0 : JSCompiler_StaticMethods_getLastKey($jscomp$optchain$tmpm461956423$0);
    lastVisibilityKey && (propertyIsAnimated = lastVisibilityKey.easing, JSCompiler_StaticMethods_editAnimKeyEasing(JSCompiler_StaticMethods_addVisibilityKeys$self, lastVisibilityKey.time, stepEndEasing));
  }
  $jscomp$optchain$tmpm461956423$0 = [];
  for (const conflict of conflicts) {
    for (const keyedProp of keyedProps) {
      JSCompiler_StaticMethods_shiftAnimKey(JSCompiler_StaticMethods_addVisibilityKeys$self, keyedProp, conflict.time, conflict.newTime);
    }
    $jscomp$optchain$tmpm461956423$0.push(conflict);
  }
  keyedProps = [];
  for (const {time, value, easing} of keys) {
    JSCompiler_StaticMethods_insertAnimKey(JSCompiler_StaticMethods_addVisibilityKeys$self, "visibility", time, value, easing, {autoInsertFirstKey:!1}, {isVisibilityKey:!0}), keyedProps.push(time);
  }
  if (includeInitialStyles = includeInitialStyles && .1 <= JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_addVisibilityKeys$self)[0]) {
    rangeModel = isFinite(rangeModel.range_.start) ? "hidden" : rangeModel.getBaseStyle_(), JSCompiler_StaticMethods_insertAnimKey(JSCompiler_StaticMethods_addVisibilityKeys$self, "visibility", 0, rangeModel, stepEndEasing, {autoInsertFirstKey:!1}, {isVisibilityKey:!0});
  }
  rangeModel = JSCompiler_StaticMethods_copyValuesToLastKeyframe(JSCompiler_StaticMethods_addVisibilityKeys$self);
  JSCompiler_StaticMethods_addVisibilityKeys$self.visibilityKeysSnapshot_ = {emptyKeyTimes:allUserKeyTimes, visibilityKeyTimes:keyedProps, copiedLastKeyProperties:rangeModel, shifts:$jscomp$optchain$tmpm461956423$0, lastKeyEasing:propertyIsAnimated, initialVisibilityStylesAdded:includeInitialStyles};
  return !0;
}
function JSCompiler_StaticMethods_removeVisibilityKeys(JSCompiler_StaticMethods_removeVisibilityKeys$self) {
  if (JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_) {
    var visibilityKeyTimes = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.visibilityKeyTimes, shifts = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.shifts, lastKeyEasing = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.lastKeyEasing, copiedLastKeyProperties = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.copiedLastKeyProperties, initialVisibilityStylesAdded = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.initialVisibilityStylesAdded, 
    emptyKeyTimes = JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_.emptyKeyTimes;
    JSCompiler_StaticMethods_removeVisibilityKeys$self.visibilityKeysSnapshot_ = null;
    if (copiedLastKeyProperties.length) {
      var keyframeTimes = JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_removeVisibilityKeys$self);
      keyframeTimes = keyframeTimes[keyframeTimes.length - 1];
      for (const property of copiedLastKeyProperties) {
        JSCompiler_StaticMethods_deleteAnimKey(JSCompiler_StaticMethods_removeVisibilityKeys$self, property, keyframeTimes);
      }
    }
    for (const time of visibilityKeyTimes) {
      JSCompiler_StaticMethods_deleteAnimKey(JSCompiler_StaticMethods_removeVisibilityKeys$self, "visibility", time);
    }
    visibilityKeyTimes = JSCompiler_StaticMethods_getKeyedProperties(JSCompiler_StaticMethods_removeVisibilityKeys$self);
    for (const {time, newTime} of shifts) {
      for (const keyedProp of visibilityKeyTimes) {
        JSCompiler_StaticMethods_shiftAnimKey(JSCompiler_StaticMethods_removeVisibilityKeys$self, keyedProp, newTime, time);
      }
    }
    lastKeyEasing && (shifts = JSCompiler_StaticMethods_getLastKey(JSCompiler_StaticMethods_removeVisibilityKeys$self.JSC$2481_tracks_.get("visibility")), JSCompiler_StaticMethods_editAnimKeyEasing(JSCompiler_StaticMethods_removeVisibilityKeys$self, shifts.time, lastKeyEasing));
    initialVisibilityStylesAdded && JSCompiler_StaticMethods_deleteAnimKey(JSCompiler_StaticMethods_removeVisibilityKeys$self, "visibility", 0);
    for (const time of emptyKeyTimes) {
      lastKeyEasing = JSCompiler_StaticMethods_removeVisibilityKeys$self, emptyKeyTimes = time, {autoInsertFirstKey:initialVisibilityStylesAdded} = {autoInsertFirstKey:!1}, JSCompiler_StaticMethods_warnIfReadOnly_(lastKeyEasing) || (emptyKeyTimes = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(emptyKeyTimes / .1)), lastKeyEasing.keyCounter_.has(emptyKeyTimes) || (JSCompiler_StaticMethods_expandToIncludeTime(lastKeyEasing.visibilityRange_, emptyKeyTimes), lastKeyEasing.keyCounter_.set(emptyKeyTimes, 
      0), emptyKeyTimes = JSCompiler_StaticMethods_getStartTimeMs(lastKeyEasing.visibilityRange_), initialVisibilityStylesAdded && !lastKeyEasing.keyCounter_.has(emptyKeyTimes) && lastKeyEasing.keyCounter_.set(emptyKeyTimes, 0)));
    }
  }
}
function JSCompiler_StaticMethods_getWebAnimationsProperties(JSCompiler_StaticMethods_getWebAnimationsProperties$self) {
  return new Set([...JSCompiler_StaticMethods_getWebAnimationsProperties$self.JSC$2481_tracks_.keys()].filter(property => "motion-path" !== property && !module$contents$ninja$anim$animTracks_isInvalidOrDisabled(property)));
}
function JSCompiler_StaticMethods_getBoundingKeyframeTimes(JSCompiler_StaticMethods_getBoundingKeyframeTimes$self, time, property) {
  JSCompiler_StaticMethods_getBoundingKeyframeTimes$self = property ? JSCompiler_StaticMethods_getKeyframeTimes(JSCompiler_StaticMethods_getBoundingKeyframeTimes$self, property) : JSCompiler_StaticMethods_getUniqueKeyTimes(JSCompiler_StaticMethods_getBoundingKeyframeTimes$self);
  property = JSCompiler_StaticMethods_getBoundingKeyframeTimes$self.length;
  if (time > JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[property - 1]) {
    return {left:JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[property - 1], right:Infinity};
  }
  for (let i = 0; i < property; i++) {
    if (JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i] === time) {
      return {left:0 === i ? 0 : JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i - 1], right:i === property - 1 ? Infinity : JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i + 1]};
    }
    if (JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i] > time) {
      return {left:0 === i ? 0 : JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i - 1], right:JSCompiler_StaticMethods_getBoundingKeyframeTimes$self[i]};
    }
  }
  return {left:0, right:0};
}
var module$exports$ninja$anim$animTracks$AnimTracks = class {
  constructor(trackType) {
    this.trackType_ = trackType;
    this.JSC$2481_tracks_ = new Map();
    this.keyCounter_ = new Map();
    this.visibilityRange_ = new module$exports$ninja$model$timeline2$visibilityRange$VisibilityRange();
    this.webAnimationsInput_ = {keyframes:[], delay:0, duration:0};
    this.visibilityKeysSnapshot_ = null;
  }
};
const module$contents$ninja$anim$AnimationEvaluator_CSS_NON_NUMERIC_VALUES = new Set(["auto", "initial", "inherit", "unset"]), module$contents$ninja$anim$AnimationEvaluator_MASK_SIZE_AND_POSITION_PROPERTIES = new Set(["-webkit-mask-position", "-webkit-mask-size"]), module$contents$ninja$anim$AnimationEvaluator_DISCRETE_ANIMATION_PROPERTIES = new Set(["-webkit-mask-image", "--gwd-hidden-css-filter"]);
class module$contents$ninja$anim$AnimationEvaluator_DocumentModelAdapter {
}
function JSCompiler_StaticMethods_matchUnits_(property, value, valueToMatch, element) {
  var prevCssLength = module$exports$ninja$model$css$units$extractValueAndUnits(valueToMatch);
  valueToMatch = module$exports$ninja$model$css$units$extractValueAndUnits(value);
  return prevCssLength && valueToMatch && prevCssLength.units_ !== valueToMatch.units_ && (prevCssLength = prevCssLength.units_, property = module$exports$ninja$model$css$units$convertToUnits(prevCssLength, valueToMatch, element, property)) ? module$exports$ninja$model$css$units$getLengthAsString(new module$exports$ninja$model$css$units$CssLength(property.valueOf(), prevCssLength)) : value;
}
function JSCompiler_StaticMethods_computeIntermediateAnimatedValue_(JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self, startTime, endTime, time, property) {
  var leftKey = JSCompiler_StaticMethods_JSC$2498_getKeyAtTime(JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.JSC$2500_tracks_, property, startTime), rightKey = JSCompiler_StaticMethods_JSC$2498_getKeyAtTime(JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.JSC$2500_tracks_, property, endTime);
  if (!leftKey || !rightKey) {
    return null;
  }
  var startValue = leftKey.value;
  rightKey = rightKey.value;
  var $jscomp$nullish$tmp8;
  leftKey = null != ($jscomp$nullish$tmp8 = leftKey.easing) ? $jscomp$nullish$tmp8 : new module$exports$ninja$anim$CssEasing$CssEasing("linear");
  startTime = (time - startTime) / (endTime - startTime);
  "step-start" == leftKey.easingType_ ? startTime = 0 <= startTime ? 1 : 0 : "step-end" == leftKey.easingType_ ? startTime = 1 <= startTime ? 1 : 0 : (endTime = leftKey.bezier_, startTime = endTime.JSC$2407_yBezier_.value(JSCompiler_StaticMethods_curveParameterAtValue(endTime.JSC$2407_xBezier_, startTime)));
  if ("visibility" === property) {
    endTime = goog$math$clamp(startTime, 0, 1);
    if (0 === endTime) {
      return startValue;
    }
    if (1 === endTime) {
      return rightKey;
    }
    if ("visible" === startValue || "visible" === rightKey) {
      return "visible";
    }
    if ("inherit" === startValue || "inherit" === rightKey) {
      return "inherit";
    }
    if ("hidden" === startValue && "hidden" === rightKey) {
      return "hidden";
    }
  }
  if (module$contents$ninja$anim$AnimationEvaluator_CSS_NON_NUMERIC_VALUES.has(startValue) || module$contents$ninja$anim$AnimationEvaluator_CSS_NON_NUMERIC_VALUES.has(rightKey)) {
    return null;
  }
  if ("opacity" === property) {
    return module$exports$ninja$math$mathUtils$cleanseFloatingPoint(goog$math$lerp(parseFloat(startValue), parseFloat(rightKey), startTime), 4).toString();
  }
  if ("transform" === property) {
    return startValue = new module$contents$ninja$model$threeD$GwdTransform_GwdTransform(startValue), leftKey = new module$contents$ninja$model$threeD$GwdTransform_GwdTransform(rightKey), "canonical" !== startValue.JSC$2437_state_ || "canonical" !== leftKey.JSC$2437_state_ ? startTime = null : ({isDelta:rightKey} = {isDelta:!0}, JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self = JSCompiler_StaticMethods_getInterpolatedChannelDiff2D_(startValue.getPercentTranslation(), leftKey.getPercentTranslation(), 
    startTime, {isDelta:rightKey}), property = JSCompiler_StaticMethods_getInterpolatedChannelDiff_(startValue.getTranslation(), leftKey.getTranslation(), startTime, {isDelta:rightKey}), endTime = JSCompiler_StaticMethods_getInterpolatedChannelDiff_(startValue.getRotation(), leftKey.getRotation(), startTime, {isDelta:rightKey}), time = JSCompiler_StaticMethods_getInterpolatedChannelDiff_(startValue.getScale(), leftKey.getScale(), startTime, {isDelta:rightKey}), $jscomp$nullish$tmp8 = module$contents$goog$object_unsafeClone(startValue.channels_.motionPath), 
    leftKey = module$contents$goog$object_unsafeClone(leftKey.channels_.motionPath), startTime = {transformOriginDelta:JSCompiler_StaticMethods_getInterpolatedChannelDiff2D_($jscomp$nullish$tmp8.transformOriginDelta, leftKey.transformOriginDelta, startTime, {isDelta:rightKey}), translation:JSCompiler_StaticMethods_getInterpolatedChannelDiff2D_($jscomp$nullish$tmp8.translation, leftKey.translation, startTime, {isDelta:rightKey}), rotationZ:JSCompiler_StaticMethods_getInterpolatedMeasurementDiff_($jscomp$nullish$tmp8.rotationZ, 
    leftKey.rotationZ, startTime, {isDelta:rightKey})}, startTime = {isDelta:rightKey, percentTranslation:JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self, translation:property, rotation:endTime, scale:time, motionPath:startTime}, startValue = startValue.clone(), JSCompiler_StaticMethods_applyChannelDiffs(startValue, startTime), startTime = startValue), startTime && startTime.getCss();
  }
  if (module$contents$ninja$anim$AnimationEvaluator_MASK_SIZE_AND_POSITION_PROPERTIES.has(property)) {
    startValue = startValue.split(" ");
    rightKey = rightKey.split(" ");
    JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self = [];
    for (property = 0; property < startValue.length; property++) {
      time = rightKey[property], endTime = module$exports$ninja$model$css$units$extractValueAndUnits(startValue[property]), time = module$exports$ninja$model$css$units$extractValueAndUnits(time), endTime.units_ === time.units_ ? (time = goog$math$lerp(endTime.numericValue_, time.numericValue_, startTime), time = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(time, 2), time = module$exports$ninja$model$css$units$getLengthAsString(new module$exports$ninja$model$css$units$CssLength(time, endTime.units_))) : 
      ($jscomp$nullish$tmp8 = goog$math$lerp(endTime.numericValue_, 0, startTime), $jscomp$nullish$tmp8 = module$exports$ninja$math$mathUtils$cleanseFloatingPoint($jscomp$nullish$tmp8, 2), $jscomp$nullish$tmp8 = module$exports$ninja$model$css$units$getLengthAsString(new module$exports$ninja$model$css$units$CssLength($jscomp$nullish$tmp8, endTime.units_)), endTime = goog$math$lerp(0, time.numericValue_, startTime), endTime = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(endTime, 2), endTime = 
      module$exports$ninja$model$css$units$getLengthAsString(new module$exports$ninja$model$css$units$CssLength(endTime, time.units_)), time = `calc(${$jscomp$nullish$tmp8} + ${endTime})`), JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.push(time);
    }
    return JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.join(" ");
  }
  if (module$contents$ninja$anim$AnimationEvaluator_DISCRETE_ANIMATION_PROPERTIES.has(property)) {
    return .5 > startTime ? startValue : rightKey;
  }
  rightKey = JSCompiler_StaticMethods_matchUnits_(property, rightKey, startValue, JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.JSC$2500_element_);
  startValue = module$exports$ninja$model$css$units$extractValueAndUnits(startValue);
  JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self = module$exports$ninja$model$css$units$extractValueAndUnits(rightKey);
  return startValue && JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self ? (rightKey = startValue.units_, startTime = goog$math$lerp(startValue.numericValue_, JSCompiler_StaticMethods_computeIntermediateAnimatedValue_$self.numericValue_, startTime), startTime = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(startTime, 2), module$exports$ninja$model$css$units$getLengthAsString(new module$exports$ninja$model$css$units$CssLength(startTime, rightKey))) : null;
}
function JSCompiler_StaticMethods_getAnimatedValuesAtTime_(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self, time) {
  const properties = {};
  if (!JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_element_.parentElement) {
    return properties;
  }
  JSCompiler_StaticMethods_addVisibilityKeys(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_);
  const {iterations, fill, direction} = JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.adapter_.timingDictionary_, {delay, duration} = JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_.webAnimationsInput_;
  var timingInput = {iterations, fill, direction, delay, duration}, unevaluatedProperties = [];
  var JSCompiler_inline_result = timingInput.delay;
  var iterations$jscomp$0 = timingInput.iterations, duration$jscomp$0 = timingInput.duration;
  time <= JSCompiler_inline_result || iterations$jscomp$0 < Number.POSITIVE_INFINITY && time > JSCompiler_inline_result + iterations$jscomp$0 * duration$jscomp$0 ? JSCompiler_inline_result = time : (iterations$jscomp$0 = (time - JSCompiler_inline_result) % duration$jscomp$0, JSCompiler_inline_result += 0 === iterations$jscomp$0 ? duration$jscomp$0 : iterations$jscomp$0);
  duration$jscomp$0 = JSCompiler_StaticMethods_getWebAnimationsProperties(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_);
  for (var property$jscomp$0 of duration$jscomp$0) {
    duration$jscomp$0 = JSCompiler_inline_result;
    iterations$jscomp$0 = JSCompiler_StaticMethods_getKeyframeTimes(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_, property$jscomp$0);
    duration$jscomp$0 < iterations$jscomp$0[0] ? duration$jscomp$0 = iterations$jscomp$0[0] : duration$jscomp$0 > iterations$jscomp$0[iterations$jscomp$0.length - 1] && (duration$jscomp$0 = iterations$jscomp$0[iterations$jscomp$0.length - 1]);
    var $jscomp$inline_1035 = void 0;
    if ((iterations$jscomp$0 = null == ($jscomp$inline_1035 = JSCompiler_StaticMethods_JSC$2498_getKeyAtTime(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_, property$jscomp$0, duration$jscomp$0)) ? void 0 : $jscomp$inline_1035.value) && "initial" !== iterations$jscomp$0) {
      properties[property$jscomp$0] = iterations$jscomp$0;
    } else {
      if (module$exports$ninja$anim$animConstants$COMPUTABLE_ANIMATION_PROPERTIES.has(property$jscomp$0)) {
        const {left:startTime, right:endTime} = JSCompiler_StaticMethods_getBoundingKeyframeTimes(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_, duration$jscomp$0, property$jscomp$0);
        duration$jscomp$0 = JSCompiler_StaticMethods_computeIntermediateAnimatedValue_(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self, startTime, endTime, duration$jscomp$0, property$jscomp$0);
        null !== duration$jscomp$0 ? properties[property$jscomp$0] = duration$jscomp$0 : unevaluatedProperties.push(property$jscomp$0);
      } else {
        unevaluatedProperties.push(property$jscomp$0);
      }
    }
  }
  if (unevaluatedProperties.length) {
    JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_ || (JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_ = JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_element_.ownerDocument.createElement(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_element_.tagName), JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_.style.visibility = "hidden", JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_.style.position = 
    "absolute", property$jscomp$0 = window.getComputedStyle(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_element_), JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_.style.setProperty("border", property$jscomp$0.getPropertyValue("border")), JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_element_.parentElement.appendChild(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_));
    JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyPlayer_ || (JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyPlayer_ = JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_.animate(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.JSC$2500_tracks_.webAnimationsInput_.keyframes, timingInput), JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyPlayer_.pause());
    JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyPlayer_.currentTime = time;
    timingInput = window.getComputedStyle(JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyElement_);
    for (const property of unevaluatedProperties) {
      "motion-path" !== property && (property$jscomp$0 = timingInput[property], module$contents$ninja$anim$AnimationEvaluator_CSS_NON_NUMERIC_VALUES.has(property$jscomp$0) || ("transform" === property ? unevaluatedProperties = module$exports$ninja$anim$animUtil$maybeReplaceMatrix(property$jscomp$0, []) : (unevaluatedProperties = JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self, JSCompiler_inline_result = unevaluatedProperties.JSC$2500_tracks_, duration$jscomp$0 = time, $jscomp$inline_1035 = 
      JSCompiler_inline_result.JSC$2481_tracks_.get(property), void 0 === $jscomp$inline_1035 || duration$jscomp$0 <= JSCompiler_StaticMethods_getFirstKey($jscomp$inline_1035).time ? $jscomp$inline_1035 = null : (iterations$jscomp$0 = JSCompiler_StaticMethods_getLastKey($jscomp$inline_1035), duration$jscomp$0 > iterations$jscomp$0.time ? $jscomp$inline_1035 = iterations$jscomp$0 : (JSCompiler_inline_result = JSCompiler_StaticMethods_getBoundingKeyframeTimes(JSCompiler_inline_result, duration$jscomp$0, 
      property), $jscomp$inline_1035 = JSCompiler_StaticMethods_JSC$2465_getKeyAtTime($jscomp$inline_1035, JSCompiler_inline_result.left))), unevaluatedProperties = $jscomp$inline_1035 && unevaluatedProperties.dummyElement_ ? JSCompiler_StaticMethods_matchUnits_(property, property$jscomp$0, $jscomp$inline_1035.value, unevaluatedProperties.dummyElement_) : property$jscomp$0), properties[property] = unevaluatedProperties));
    }
    JSCompiler_StaticMethods_getAnimatedValuesAtTime_$self.dummyPlayer_.cancel();
  }
  return properties;
}
class module$exports$ninja$anim$AnimationEvaluator {
  constructor(element, tracks, adapter) {
    this.JSC$2500_element_ = element;
    this.JSC$2500_tracks_ = tracks;
    this.adapter_ = adapter;
    this.dummyPlayer_ = this.dummyElement_ = null;
  }
}
;const module$contents$ninja$math$BezierHitTester_HitControlPointType = {ALL:"all", NO_TANGENTS:"no_tangents"};
goog$exportSymbol("ninja.math.BezierHitTester.HitControlPointType", module$contents$ninja$math$BezierHitTester_HitControlPointType);
module$contents$ninja$math$BezierHitTester_HitControlPointType.ALL = "all";
module$contents$ninja$math$BezierHitTester_HitControlPointType.NO_TANGENTS = "no_tangents";
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(0, 0));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.58, 1), goog$vec$vec2d$createFromValues(1, 1));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.42, 0), goog$vec$vec2d$createFromValues(1, 1), goog$vec$vec2d$createFromValues(1, 1));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.25, .25), goog$vec$vec2d$createFromValues(.75, .75), goog$vec$vec2d$createFromValues(1, 1));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.42, 0), goog$vec$vec2d$createFromValues(.58, 1), goog$vec$vec2d$createFromValues(1, 1));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.29, .5), goog$vec$vec2d$createFromValues(.5, .5));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(.5, .5), goog$vec$vec2d$createFromValues(.71, .5), goog$vec$vec2d$createFromValues(1, 1), goog$vec$vec2d$createFromValues(1, 1));
new module$contents$ninja$math$BezierSegment2d_ControlPoints(goog$vec$vec2d$createFromValues(0, 0), goog$vec$vec2d$createFromValues(.25, 0), goog$vec$vec2d$createFromValues(.75, 0), goog$vec$vec2d$createFromValues(1, 0));
goog$exportSymbol("module$exports$ninja$model$library$LibraryTypes.Asset.DisplayType", {AUDIO:"audio", CSS:"css", FOLDER:"folder", STUDIO_ASSET:"studioasset", GENERIC:"generic", GROUP:"group", HDR:"hdr", HTML:"html", IMAGE:"image", JAVASCRIPT:"javascript", NONE:"none", TEXT:"text", THREED:"threed", VIDEO:"video"});
var module$exports$ninja$model$library$LibraryTypes$Asset$SUPPORTED_FILETYPE_MAP = {aac:"audio", avi:"video", bmp:"image", css:"none", gif:"image", glb:"threed", hdr:"hdr", htm:"none", html:"none", jpeg:"image", jpg:"image", js:"none", json:"none", m4a:"audio", m4v:"video", mov:"video", mp3:"audio", mp4:"video", mpeg:"video", oga:"audio", ogg:"audio", ogv:"video", png:"image", qt:"video", svg:"image", txt:"none", vorbis:"none", wav:"audio", wave:"audio", webm:"video", webp:"image", wma:"none", wmv:"video"};
const module$contents$ninja$model$av$avClipParser_ATTR_SPEC = new Map([["clip-id", {type:String, required:!0}], ["clip-scaling", {type:String, required:!1}], ["double", {type:Boolean, required:!1}], ["duration", {type:Number, required:!0}], ["effect", {type:String, required:!0}], ["end", {type:Boolean, required:!1}], ["in-time", {type:Number, required:!1}], ["is-hold", {type:Boolean, required:!1}], ["link-id", {type:String, required:!1}], ["muted", {type:Boolean, required:!1}], ["source", {type:String, 
required:!0}], ["start", {type:Boolean, required:!1}], ["start-time", {type:Number, required:!0}], ["volume", {type:Number, required:!1}], ["volume-envelope", {type:String, required:!1}]]);
function module$contents$ninja$model$av$avClipParser_getAttr(el, attr) {
  const {type, required} = module$contents$ninja$model$av$avClipParser_ATTR_SPEC.get(attr);
  switch(type) {
    case Number:
      var numValue = parseFloat(el.getAttribute(attr));
      if (!isNaN(numValue)) {
        return numValue;
      }
      if (!required) {
        return 0;
      }
      break;
    case Boolean:
      return el.hasAttribute(attr);
    case String:
      if (numValue = (el.getAttribute(attr) || "").trim(), !required || 0 < numValue.length) {
        return numValue;
      }
  }
  throw Error(`Invalid value for attribute "${attr}": "${el.getAttribute(attr)}"`);
}
function module$contents$ninja$model$av$avClipParser_parseAvClip(el) {
  try {
    const source = module$contents$ninja$model$av$avClipParser_getAttr(el, "source");
    {
      var combinedBaseName = module$exports$ninja$string$path$baseName(source).replace(/\.+/g, ".");
      const separatorIndex = combinedBaseName.lastIndexOf(".");
      var JSCompiler_inline_result = "image" === module$exports$ninja$model$library$LibraryTypes$Asset$SUPPORTED_FILETYPE_MAP[(0 >= separatorIndex ? "" : combinedBaseName.substr(separatorIndex + 1)).toLowerCase()] ? "image" : "video";
    }
    const inTime = module$contents$ninja$model$av$avClipParser_getAttr(el, "in-time"), duration = module$contents$ninja$model$av$avClipParser_getAttr(el, "duration");
    var JSCompiler_temp_const = module$contents$ninja$model$av$avClipParser_getAttr(el, "clip-id"), JSCompiler_temp_const$jscomp$0 = module$contents$ninja$model$av$avClipParser_getAttr(el, "start-time"), JSCompiler_temp_const$jscomp$1 = module$contents$ninja$model$av$avClipParser_getAttr(el, "is-hold");
    combinedBaseName = {start:null, end:null};
    var transitionElements = el.getElementsByTagName("gwd-av-transition");
    for (const transitionEl of transitionElements) {
      try {
        var JSCompiler_inline_result$jscomp$0 = {position:module$contents$ninja$model$av$avClipParser_getAttr(transitionEl, "start") ? "start" : "end", effect:module$contents$ninja$model$av$avClipParser_getAttr(transitionEl, "effect"), duration:module$contents$ninja$model$av$avClipParser_getAttr(transitionEl, "duration"), isDouble:module$contents$ninja$model$av$avClipParser_getAttr(transitionEl, "double")};
      } catch (e) {
        module$exports$ninja$debug$log$warning(`Could not parse clip transition: ${e.message}`), JSCompiler_inline_result$jscomp$0 = null;
      }
      if (transitionElements = JSCompiler_inline_result$jscomp$0) {
        "start" === transitionElements.position ? combinedBaseName.start = transitionElements : combinedBaseName.end = transitionElements;
      }
    }
    var JSCompiler_temp_const$jscomp$2 = module$contents$ninja$model$av$avClipParser_getAttr(el, "link-id"), JSCompiler_temp_const$jscomp$3 = module$contents$ninja$model$av$avClipParser_getAttr(el, "volume");
    if ("audio" !== JSCompiler_inline_result) {
      var JSCompiler_temp = "";
    } else {
      var JSCompiler_temp$jscomp$0;
      if (!(JSCompiler_temp$jscomp$0 = el.getAttribute("volume-envelope"))) {
        var str = JSON.stringify({edges:[], start:[inTime, 0], end:[inTime + duration, 0]});
        el = str;
        goog$string$internal$ALL_RE_.test(el) && (-1 != el.indexOf("&") && (el = el.replace(goog$string$internal$AMP_RE_, "&amp;")), -1 != el.indexOf("<") && (el = el.replace(goog$string$internal$LT_RE_, "&lt;")), -1 != el.indexOf(">") && (el = el.replace(goog$string$internal$GT_RE_, "&gt;")), -1 != el.indexOf('"') && (el = el.replace(goog$string$internal$QUOT_RE_, "&quot;")), -1 != el.indexOf("'") && (el = el.replace(goog$string$internal$SINGLE_QUOTE_RE_, "&#39;")), -1 != el.indexOf("\x00") && (el = 
        el.replace(goog$string$internal$NULL_RE_, "&#0;")));
        str = el;
        JSCompiler_temp$jscomp$0 = str;
      }
      JSCompiler_temp = JSCompiler_temp$jscomp$0;
    }
    return {id:JSCompiler_temp_const, source, startTime:JSCompiler_temp_const$jscomp$0, inTime, isHold:JSCompiler_temp_const$jscomp$1, duration, clipType:JSCompiler_inline_result, transitions:combinedBaseName, linkId:JSCompiler_temp_const$jscomp$2, volume:JSCompiler_temp_const$jscomp$3, volumeEnvelope:JSCompiler_temp};
  } catch (e) {
    return module$exports$ninja$debug$log$warning(`Could not parse clip: ${e.message}`), null;
  }
}
;var module$exports$ninja$runtime$math$bezierSegment2d$BezierSegment2d = class {
  constructor(x1, y1, x2, y2) {
    this.JSC$2515_xBezier_ = new module$exports$ninja$runtime$math$baseBezierSegment$BaseBezierSegment(goog$vec$vec4d$createFromValues(x1, x2));
    this.JSC$2515_yBezier_ = new module$exports$ninja$runtime$math$baseBezierSegment$BaseBezierSegment(goog$vec$vec4d$createFromValues(y1, y2));
  }
};
var module$exports$ninja$runtime$math$pseudoRandom$PseudoRandom = class {
  constructor(seed) {
    this.seed_ = 1;
    this.origMathObj_ = null;
    this.seed_ = Math.round(seed) % 2147483646;
    0 >= this.seed_ && (this.seed_ += 2147483646);
  }
  install(mathObj) {
    this.origMathObj_ && mathObj !== this.origMathObj_ && this.origMathObj_ && (this.origMathObj_.random = this.mathRandom_, this.origMathObj_ = null);
    this.origMathObj_ || (this.origMathObj_ = mathObj, this.mathRandom_ = mathObj.random, mathObj.random = () => this.random());
  }
  random() {
    var high = Math.floor(this.seed_ / 44488);
    high = 48271 * (this.seed_ - 44488 * high) - 3399 * high;
    this.seed_ = 0 < high ? high : high + 2147483647;
    return (this.seed_ - 1) / 2147483646;
  }
};
var module$exports$ninja$runtime$texteffects$textEffectsConstants$TRANSLATION_EFFECTS = new Set(["drop-in", "line-up", "spread"]), module$exports$ninja$runtime$texteffects$textEffectsConstants$ROTATION_EFFECTS = new Set(["flip", "roll", "spin"]);
const module$contents$ninja$runtime$texteffects$textEffectsTrack_createSet = items => {
  const returnValue = new Set();
  for (const item of items) {
    returnValue.add(item);
  }
  return returnValue;
}, module$contents$ninja$runtime$texteffects$textEffectsTrack_inlineTextTags = module$contents$ninja$runtime$texteffects$textEffectsTrack_createSet("A ABBR B BDI BDO BUTTON CITE CODE DATA DFN EM I INPUT KBD LABEL MARK Q RP RT RUBY S SAMP SMALL SPAN STRONG SUB SUP TEXTAREA TIME U VAR".split(" ")), module$contents$ninja$runtime$texteffects$textEffectsTrack_selfClosingTags = module$contents$ninja$runtime$texteffects$textEffectsTrack_createSet("AREA BASE BR COL EMBED HR IMG INPUT LINK META PARAM SOURCE TRACK WBR".split(" ")), 
module$contents$ninja$runtime$texteffects$textEffectsTrack_wordBreakingTags = module$contents$ninja$runtime$texteffects$textEffectsTrack_createSet(["BR", "HR", "P"]), module$contents$ninja$runtime$texteffects$textEffectsTrack_WHITESPACE_REGEXP = /[\s]/;
function JSCompiler_StaticMethods_addClassesToElement(JSCompiler_StaticMethods_addClassesToElement$self, element) {
  for (const className of JSCompiler_StaticMethods_addClassesToElement$self.classes) {
    element.classList.add(className);
  }
}
class module$contents$ninja$runtime$texteffects$textEffectsTrack_Tag {
  constructor(state, element) {
    this.state = state;
    this.name = element.tagName;
    state = [];
    for (let i = 0; i < element.classList.length; i++) {
      state.push(element.classList.item(i));
    }
    this.classes = state;
  }
}
const module$contents$ninja$runtime$texteffects$textEffectsTrack_flattenIntoCharactersAndTags = (element, accumulator = []) => {
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      accumulator.push(...node.textContent.split(""));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      element = node;
      const selfClosing = module$contents$ninja$runtime$texteffects$textEffectsTrack_selfClosingTags.has(element.tagName);
      accumulator.push(new module$contents$ninja$runtime$texteffects$textEffectsTrack_Tag(selfClosing ? "self-closing" : "open", element));
      selfClosing || (module$contents$ninja$runtime$texteffects$textEffectsTrack_flattenIntoCharactersAndTags(element, accumulator), accumulator.push(new module$contents$ninja$runtime$texteffects$textEffectsTrack_Tag("close", element)));
    }
  }
  return accumulator;
};
function module$exports$ninja$runtime$texteffects$textEffectsTrack$TextEffectsTrack$createFromElement(element) {
  var dataString = element.getAttribute("gwd-text-effect");
  if (!dataString) {
    return null;
  }
  if (dataString) {
    try {
      var JSCompiler_inline_result = JSON.parse(dataString.replace(/&quot;/g, '"'));
    } catch ($jscomp$inline_625) {
      JSCompiler_inline_result = null;
    }
  } else {
    JSCompiler_inline_result = null;
  }
  dataString = JSCompiler_inline_result;
  if (!dataString || 0 === dataString.length) {
    return null;
  }
  dataString.sort((effect1, effect2) => effect1.startTimeMs - effect2.startTimeMs);
  for (JSCompiler_inline_result = 1; JSCompiler_inline_result < dataString.length; JSCompiler_inline_result++) {
    if (dataString[JSCompiler_inline_result - 1].startTimeMs + dataString[JSCompiler_inline_result - 1].durationMs - .1 > dataString[JSCompiler_inline_result].startTimeMs) {
      return null;
    }
  }
  return new module$exports$ninja$runtime$texteffects$textEffectsTrack$TextEffectsTrack(element, dataString);
}
function JSCompiler_StaticMethods_JSC$2543_initialize_(JSCompiler_StaticMethods_JSC$2543_initialize_$self) {
  JSCompiler_StaticMethods_JSC$2543_initialize_$self.container_ = document.createElement("P" === JSCompiler_StaticMethods_JSC$2543_initialize_$self.JSC$2528_element_.tagName || module$contents$ninja$runtime$texteffects$textEffectsTrack_inlineTextTags.has(JSCompiler_StaticMethods_JSC$2543_initialize_$self.JSC$2528_element_.tagName) ? "SPAN" : "DIV");
  JSCompiler_StaticMethods_createTokens_(JSCompiler_StaticMethods_JSC$2543_initialize_$self);
  JSCompiler_StaticMethods_shuffleTokens_(JSCompiler_StaticMethods_JSC$2543_initialize_$self);
  JSCompiler_StaticMethods_JSC$2543_initialize_$self.JSC$2528_element_.textContent = "";
  if (JSCompiler_StaticMethods_JSC$2543_initialize_$self.effects_.some(effect => "scroll" === effect.name && "vanishing-point" === effect.parameters.scrollType)) {
    const vanishingPointContainer = JSCompiler_StaticMethods_JSC$2543_initialize_$self.container_.cloneNode(!1);
    vanishingPointContainer.appendChild(JSCompiler_StaticMethods_JSC$2543_initialize_$self.container_);
    JSCompiler_StaticMethods_JSC$2543_initialize_$self.JSC$2528_element_.appendChild(vanishingPointContainer);
  } else {
    JSCompiler_StaticMethods_JSC$2543_initialize_$self.JSC$2528_element_.appendChild(JSCompiler_StaticMethods_JSC$2543_initialize_$self.container_);
  }
}
function JSCompiler_StaticMethods_createTokens_(JSCompiler_StaticMethods_createTokens_$self) {
  const tokenTypes = module$contents$ninja$runtime$texteffects$textEffectsTrack_createSet(JSCompiler_StaticMethods_createTokens_$self.effects_.map(effect => effect.tokenType)), allNodes = [];
  if (tokenTypes.has("line")) {
    var charsAndTags = JSCompiler_StaticMethods_getCharactersAndTagsForLines_(JSCompiler_StaticMethods_createTokens_$self);
    JSCompiler_StaticMethods_createTokens_$self.lines_ = JSCompiler_StaticMethods_getTokensFromCharactersAndTags_(charsAndTags);
    allNodes.push(...JSCompiler_StaticMethods_createTokens_$self.lines_.parents);
  }
  if (tokenTypes.has("character")) {
    charsAndTags = JSCompiler_StaticMethods_getWordTokens_(JSCompiler_StaticMethods_createTokens_$self);
    allNodes.push(...charsAndTags.parents);
    JSCompiler_StaticMethods_createTokens_$self.characters_ = {tokens:[], parents:charsAndTags.parents};
    for (const wordElement of charsAndTags.tokens) {
      const {tokens, parents} = JSCompiler_StaticMethods_getCharacterTokens_(JSCompiler_StaticMethods_createTokens_$self, wordElement);
      JSCompiler_StaticMethods_createTokens_$self.characters_.tokens.push(...tokens);
      wordElement.textContent = "";
      for (const parent of parents) {
        wordElement.appendChild(parent);
      }
      wordElement.setAttribute("character-word-container-element", "");
    }
  }
  tokenTypes.has("word") && (JSCompiler_StaticMethods_createTokens_$self.words_ = JSCompiler_StaticMethods_getWordTokens_(JSCompiler_StaticMethods_createTokens_$self), allNodes.push(...JSCompiler_StaticMethods_createTokens_$self.words_.parents));
  if (tokenTypes.has("text")) {
    JSCompiler_StaticMethods_createTokens_$self.textToken_ = JSCompiler_StaticMethods_createTokens_$self.container_.cloneNode(!1);
    for (const child of JSCompiler_StaticMethods_createTokens_$self.JSC$2528_element_.childNodes) {
      JSCompiler_StaticMethods_createTokens_$self.textToken_.appendChild(child.cloneNode(!0));
    }
    allNodes.push(JSCompiler_StaticMethods_createTokens_$self.textToken_);
  }
  for (const node of allNodes) {
    JSCompiler_StaticMethods_createTokens_$self.container_.appendChild(node);
  }
}
function JSCompiler_StaticMethods_shuffleTokens_(JSCompiler_StaticMethods_shuffleTokens_$self) {
  for (const effect of JSCompiler_StaticMethods_shuffleTokens_$self.effects_) {
    var shuffleSeed = effect.shuffleSeed;
    const id = effect.id;
    var tokenType = effect.tokenType;
    if (!(0 >= shuffleSeed)) {
      var tokens = [];
      if ("character" === tokenType) {
        tokens = JSCompiler_StaticMethods_shuffleTokens_$self.characters_.tokens;
      } else if ("word" === tokenType) {
        tokens = JSCompiler_StaticMethods_shuffleTokens_$self.words_.tokens;
      } else if ("line" === tokenType) {
        tokens = JSCompiler_StaticMethods_shuffleTokens_$self.lines_.tokens;
      } else {
        continue;
      }
      tokenType = tokens.map((tokens, index) => index);
      shuffleSeed = new module$exports$ninja$runtime$math$pseudoRandom$PseudoRandom(shuffleSeed);
      for (tokens = tokenType.length - 1; 0 <= tokens; tokens--) {
        const temp = tokenType[tokens], indexToSwap = Math.floor((tokens + 1) * shuffleSeed.random());
        tokenType[tokens] = tokenType[indexToSwap];
        tokenType[indexToSwap] = temp;
      }
      JSCompiler_StaticMethods_shuffleTokens_$self.effectsShuffleOrders_.set(id, tokenType);
    }
  }
}
function JSCompiler_StaticMethods_getCharactersAndTagsForLines_(JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self) {
  var charactersAndTags = module$contents$ninja$runtime$texteffects$textEffectsTrack_flattenIntoCharactersAndTags(JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self.JSC$2528_element_);
  charactersAndTags = JSCompiler_StaticMethods_groupCharactersAndTagsIntoWords_(charactersAndTags);
  const wordElements = JSCompiler_StaticMethods_getTokensFromCharactersAndTags_(charactersAndTags), tempContainer = JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self.container_.cloneNode(!1);
  for (var node of wordElements.parents) {
    tempContainer.appendChild(node);
  }
  tempContainer.appendChild(document.createElement("BR"));
  JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self.JSC$2528_element_.insertBefore(tempContainer, JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self.JSC$2528_element_.childNodes[0]);
  node = Number.MIN_VALUE;
  const linesAndTags = [];
  let currentLine = [], wordElementIndex = 0;
  for (let i = 0; i < charactersAndTags.length; i++) {
    const wordOrTag = charactersAndTags[i];
    if (wordOrTag[0].name) {
      currentLine.push(wordOrTag[0]);
      continue;
    }
    var wordTokenElement = wordElements.tokens[wordElementIndex];
    wordElementIndex += 1;
    wordTokenElement = wordTokenElement.getBoundingClientRect().left;
    const startedNewLine = wordTokenElement <= node;
    node = wordTokenElement;
    startedNewLine ? (JSCompiler_StaticMethods_appendGroup_(currentLine, linesAndTags), currentLine = wordOrTag) : currentLine.push(...wordOrTag);
  }
  currentLine.length && JSCompiler_StaticMethods_appendGroup_(currentLine, linesAndTags);
  JSCompiler_StaticMethods_getCharactersAndTagsForLines_$self.JSC$2528_element_.removeChild(tempContainer);
  return linesAndTags;
}
function JSCompiler_StaticMethods_getTokensFromCharactersAndTags_(groupings) {
  let previousOrphanOpenTags = [];
  const tokens = [], parents = [];
  let currentParent = null;
  for (const group of groupings) {
    if (1 === group.length && group[0].name) {
      if (groupings = group[0], "open" === groupings.state) {
        var newParent = document.createElement(groupings.name);
        JSCompiler_StaticMethods_addClassesToElement(groupings, newParent);
        let $jscomp$optchain$tmp1491021791$4;
        null == ($jscomp$optchain$tmp1491021791$4 = currentParent) || $jscomp$optchain$tmp1491021791$4.appendChild(newParent);
        currentParent = newParent;
      } else {
        "close" === groupings.state ? previousOrphanOpenTags.length ? previousOrphanOpenTags.pop() : (currentParent.parentElement || parents.push(currentParent), currentParent = currentParent.parentElement) : "self-closing" === groupings.state && (groupings = document.createElement(groupings.name), currentParent ? currentParent.appendChild(groupings) : parents.push(groupings));
      }
    } else {
      groupings = 0;
      newParent = [];
      for (const tagOrChar of group) {
        tagOrChar.name && ("open" === tagOrChar.state ? newParent.push(tagOrChar) : "close" === tagOrChar.state && (newParent.pop() || groupings++));
      }
      for (; previousOrphanOpenTags.length > groupings;) {
        var tag = previousOrphanOpenTags.shift(), newParent$jscomp$0 = document.createElement(tag.name);
        JSCompiler_StaticMethods_addClassesToElement(tag, newParent$jscomp$0);
        let $jscomp$optchain$tmp1491021791$5;
        null == ($jscomp$optchain$tmp1491021791$5 = currentParent) || $jscomp$optchain$tmp1491021791$5.appendChild(newParent$jscomp$0);
        currentParent = newParent$jscomp$0;
      }
      tag = [];
      for (newParent$jscomp$0 = 0; newParent$jscomp$0 < groupings; newParent$jscomp$0++) {
        0 < previousOrphanOpenTags.length ? tag.push(previousOrphanOpenTags.shift()) : (tag.unshift(new module$contents$ninja$runtime$texteffects$textEffectsTrack_Tag("open", currentParent)), currentParent.parentElement || parents.push(currentParent), currentParent = currentParent.parentElement);
      }
      previousOrphanOpenTags = newParent;
      groupings = document.createElement("span");
      currentParent ? currentParent.appendChild(groupings) : parents.push(groupings);
      tokens.push(groupings);
      for (const charOrTag of [...tag, ...group]) {
        charOrTag.name ? "self-closing" === charOrTag.state ? groupings.appendChild(document.createElement(charOrTag.name)) : "open" === charOrTag.state ? (newParent = document.createElement(charOrTag.name), JSCompiler_StaticMethods_addClassesToElement(charOrTag, newParent), groupings.appendChild(newParent), groupings = newParent) : groupings = groupings.parentElement : groupings.appendChild(document.createTextNode(charOrTag));
      }
    }
  }
  return {tokens, parents};
}
function JSCompiler_StaticMethods_getWordTokens_(JSCompiler_StaticMethods_getWordTokens_$self) {
  JSCompiler_StaticMethods_getWordTokens_$self = module$contents$ninja$runtime$texteffects$textEffectsTrack_flattenIntoCharactersAndTags(JSCompiler_StaticMethods_getWordTokens_$self.JSC$2528_element_);
  JSCompiler_StaticMethods_getWordTokens_$self = JSCompiler_StaticMethods_groupCharactersAndTagsIntoWords_(JSCompiler_StaticMethods_getWordTokens_$self);
  return JSCompiler_StaticMethods_getTokensFromCharactersAndTags_(JSCompiler_StaticMethods_getWordTokens_$self);
}
function JSCompiler_StaticMethods_getCharacterTokens_(JSCompiler_StaticMethods_getCharacterTokens_$self, element) {
  const parents = [], tokens = [], tag = module$contents$ninja$runtime$texteffects$textEffectsTrack_inlineTextTags.has(element.tagName) ? element.tagName : "SPAN", classes = [];
  if (element !== JSCompiler_StaticMethods_getCharacterTokens_$self.JSC$2528_element_) {
    for (var i = 0; i < element.classList.length; i++) {
      classes.push(element.classList.item(i));
    }
  }
  i = () => {
    const clone = document.createElement(tag);
    for (const className of classes) {
      clone.classList.add(className);
    }
    return clone;
  };
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const character of node.textContent) {
        element = i(), element.textContent = character, tokens.push(element), parents.push(element);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (element = node, module$contents$ninja$runtime$texteffects$textEffectsTrack_selfClosingTags.has(element.tagName)) {
        parents.push(document.createElement(element.tagName));
      } else {
        element = JSCompiler_StaticMethods_getCharacterTokens_(JSCompiler_StaticMethods_getCharacterTokens_$self, element);
        tokens.push(...element.tokens);
        const wrapper = i();
        for (const parent of element.parents) {
          wrapper.appendChild(parent);
        }
        parents.push(wrapper);
      }
    }
  }
  return {tokens, parents};
}
function JSCompiler_StaticMethods_groupCharactersAndTagsIntoWords_(charactersAndTags) {
  const wordsAndTags = [];
  let currentWord = [];
  for (let i = 0; i < charactersAndTags.length; i++) {
    const charOrTag = charactersAndTags[i];
    let $jscomp$optchain$tmp1491021791$0, $jscomp$optchain$tmp1491021791$1;
    if ((null == ($jscomp$optchain$tmp1491021791$1 = ($jscomp$optchain$tmp1491021791$0 = charOrTag).match) ? 0 : $jscomp$optchain$tmp1491021791$1.call($jscomp$optchain$tmp1491021791$0, module$contents$ninja$runtime$texteffects$textEffectsTrack_WHITESPACE_REGEXP)) || module$contents$ninja$runtime$texteffects$textEffectsTrack_wordBreakingTags.has(charOrTag.name)) {
      currentWord.push(charOrTag);
      let $jscomp$optchain$tmp1491021791$2, $jscomp$optchain$tmp1491021791$3;
      for (; i + 1 < charactersAndTags.length && (charactersAndTags[i + 1].name || (null == ($jscomp$optchain$tmp1491021791$3 = ($jscomp$optchain$tmp1491021791$2 = charactersAndTags[i + 1]).match) ? 0 : $jscomp$optchain$tmp1491021791$3.call($jscomp$optchain$tmp1491021791$2, module$contents$ninja$runtime$texteffects$textEffectsTrack_WHITESPACE_REGEXP)));) {
        currentWord.push(charactersAndTags[i + 1]), i++;
      }
      JSCompiler_StaticMethods_appendGroup_(currentWord, wordsAndTags);
      currentWord = [];
    } else {
      charOrTag.name && "self-closing" !== charOrTag.state && 0 === currentWord.length ? wordsAndTags.push([charOrTag]) : currentWord.push(charOrTag);
    }
  }
  currentWord.length && JSCompiler_StaticMethods_appendGroup_(currentWord, wordsAndTags);
  return wordsAndTags;
}
function JSCompiler_StaticMethods_appendGroup_(currentGroup, groupsAndTags) {
  for (var lastCharIndex = currentGroup.length - 1; 0 <= lastCharIndex && currentGroup[lastCharIndex].name;) {
    lastCharIndex--;
  }
  var charactersAndTags = currentGroup.slice(0, lastCharIndex + 1);
  let currentString = "";
  const word = [];
  for (const charOrTag of charactersAndTags) {
    charOrTag.name ? (0 < currentString.length && (word.push(currentString), currentString = ""), word.push(charOrTag)) : currentString += charOrTag;
  }
  word.push(currentString);
  groupsAndTags.push(word);
  for (lastCharIndex += 1; lastCharIndex < currentGroup.length; lastCharIndex++) {
    groupsAndTags.push([currentGroup[lastCharIndex]]);
  }
}
function JSCompiler_StaticMethods_getEffectAtTime_(JSCompiler_StaticMethods_getEffectAtTime_$self, time) {
  if (time < JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[0].startTimeMs) {
    return JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[0];
  }
  for (let i = 0; i < JSCompiler_StaticMethods_getEffectAtTime_$self.effects_.length; i++) {
    const startTimeMs = JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[i].startTimeMs;
    if (time < startTimeMs) {
      return JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[i - 1];
    }
    if (time < startTimeMs + JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[i].durationMs) {
      return JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[i];
    }
  }
  return JSCompiler_StaticMethods_getEffectAtTime_$self.effects_[JSCompiler_StaticMethods_getEffectAtTime_$self.effects_.length - 1];
}
function JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_(JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_$self) {
  JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_$self.container_.style.display = "inline-block";
  JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_$self.container_.style["transform-style"] = "flat";
  JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_$self.container_.style["-webkit-transform"] = "translate3d(0, 0, 0)";
}
var module$exports$ninja$runtime$texteffects$textEffectsTrack$TextEffectsTrack = class {
  constructor(element, effects) {
    this.JSC$2528_element_ = element;
    this.effects_ = effects;
    this.characters_ = {tokens:[], parents:[]};
    this.words_ = {tokens:[], parents:[]};
    this.lines_ = {tokens:[], parents:[]};
    this.effectsShuffleOrders_ = new Map();
    JSCompiler_StaticMethods_JSC$2543_initialize_(this);
  }
};
class module$contents$ninja$capture$DomController_TracksAdapter extends module$exports$ninja$anim$animTracks$DocumentModelAdapter {
}
class module$contents$ninja$capture$DomController_EvaluatorAdapter extends module$contents$ninja$anim$AnimationEvaluator_DocumentModelAdapter {
  constructor(animProperties) {
    super();
    this.timingDictionary_ = {iterations:"infinite" === animProperties.iterationCount ? Number.POSITIVE_INFINITY : Number(animProperties.iterationCount), direction:animProperties.direction, fill:animProperties.fillMode};
  }
}
function JSCompiler_StaticMethods_createAnimationEvaluator_(JSCompiler_StaticMethods_createAnimationEvaluator_$self, element, animIndex, animNameToRuleMap) {
  var styles = JSCompiler_StaticMethods_createAnimationEvaluator_$self.doc_.documentElement.ownerDocument.defaultView.getComputedStyle(element);
  JSCompiler_StaticMethods_createAnimationEvaluator_$self = module$exports$ninja$anim$animUtil$getAnimationPropertiesAtIndex(styles, animIndex);
  animNameToRuleMap = animNameToRuleMap.get(JSCompiler_StaticMethods_createAnimationEvaluator_$self.animationName);
  if (!animNameToRuleMap) {
    return null;
  }
  var trackType = "element";
  1 === animIndex ? trackType = "mask" : element.tagName === "CANVAS".toString() && (trackType = "canvas");
  animIndex = new module$exports$ninja$anim$animTracks$AnimTracks(trackType);
  trackType = animIndex.visibilityRange_;
  var getBaseStyle = (new module$contents$ninja$capture$DomController_TracksAdapter()).getBaseVisibilityStyle;
  if (animNameToRuleMap) {
    if (animNameToRuleMap.cssRules.length) {
      var JSCompiler_inline_result = animNameToRuleMap.cssRules[0].style.getPropertyValue("--gwd-visibility-range");
      var [start, end] = JSCompiler_inline_result.split(",").map(parseFloat);
      start = isNaN(start) ? -Infinity : start;
      end = isNaN(end) ? Infinity : end;
      var range = {start, end};
      JSCompiler_inline_result = JSCompiler_StaticMethods_isRangeValid_(range) ? {needsReserialize:!!JSCompiler_inline_result && JSCompiler_StaticMethods_getRangeStr_(range) !== JSCompiler_inline_result.trim(), range} : {needsReserialize:!0, range:module$contents$ninja$model$timeline2$visibilityRange_UNDEFINED_RANGE};
    } else {
      JSCompiler_inline_result = {needsReserialize:!1, range:module$contents$ninja$model$timeline2$visibilityRange_UNDEFINED_RANGE};
    }
    ({range:JSCompiler_inline_result} = JSCompiler_inline_result);
    trackType.range_ = JSCompiler_inline_result;
  } else {
    trackType.range_ = module$contents$ninja$model$timeline2$visibilityRange_UNDEFINED_RANGE;
  }
  trackType.getBaseStyle_ = getBaseStyle;
  Object.assign({}, animIndex.visibilityRange_.range_);
  JSCompiler_StaticMethods_clearTracks_(animIndex);
  if (styles && (getBaseStyle = animNameToRuleMap ? animNameToRuleMap.cssRules.length : 0, 0 !== getBaseStyle)) {
    trackType = module$exports$ninja$anim$animUtil$getAnimationPropertiesAtIndex(styles, "mask" === animIndex.trackType_ ? 1 : 0);
    styles = module$exports$ninja$math$mathUtils$cleanseFloatingPoint(.1 * Math.round(trackType.delay / .1));
    trackType = trackType.duration;
    JSCompiler_StaticMethods_addUniqueKey_(animIndex, styles);
    if (1 === getBaseStyle) {
      for (getBaseStyle = animNameToRuleMap.cssRules[0], JSCompiler_inline_result = 0; JSCompiler_inline_result < getBaseStyle.style.length; JSCompiler_inline_result++) {
        if (range = getBaseStyle.style[JSCompiler_inline_result], module$contents$ninja$anim$animTracks_isInvalidOrDisabled(range)) {
          var value = getBaseStyle.style.getPropertyValue(range), time$jscomp$0 = module$exports$ninja$anim$animUtil$getKeyTimeMs(getBaseStyle.keyText, trackType, styles);
          JSCompiler_StaticMethods_insertAnimKey(animIndex, range, time$jscomp$0, value, null);
        }
      }
    } else if (1 < getBaseStyle) {
      for (JSCompiler_inline_result = -1, value = module$exports$ninja$anim$animUtil$getKeyTimeMs("0%", trackType, styles), range = module$exports$ninja$anim$animUtil$getKeyTimeMs("100%", trackType, styles), value === range && (getBaseStyle = 0), value = 0; value < getBaseStyle; value++) {
        time$jscomp$0 = animNameToRuleMap.cssRules[value];
        const time = module$exports$ninja$anim$animUtil$getKeyTimeMs(time$jscomp$0.keyText, trackType, styles);
        if (time !== JSCompiler_inline_result && (value === getBaseStyle - 1 || time !== range)) {
          JSCompiler_inline_result = time;
          for (let j = 0; j < time$jscomp$0.style.length; j++) {
            var property = time$jscomp$0.style[j];
            property = property.includes("transform-origin-x") || property.includes("transform-origin-y") || property.includes("transform-origin-z") ? "transform-origin" : property.includes("background-position-x") || property.includes("background-position-y") ? "background-position" : property.includes("mask-size-") ? "-webkit-mask-size" : property.includes("mask-position-") ? "-webkit-mask-position" : property.includes("mask-repeat-") ? "-webkit-mask-repeat" : property;
            if ("animation-timing-function" === property || "--gwd-visibility-range" === property) {
              continue;
            }
            var styleObjectPropName = property.includes("transform-origin-x") || property.includes("transform-origin-y") || property.includes("transform-origin-z") ? "webkitTransformOrigin" : property;
            JSCompiler_StaticMethods_getKeyframeTimes(animIndex, property);
            styleObjectPropName = time$jscomp$0.style.getPropertyValue(styleObjectPropName);
            const easing = module$exports$ninja$anim$CssEasing$CssEasing$createFromCssStyle(time$jscomp$0.style["animation-timing-function"]);
            !JSCompiler_StaticMethods_insertAnimKey(animIndex, property, time, styleObjectPropName, easing) || JSCompiler_StaticMethods_getKeyframeTimes(animIndex, property);
          }
        }
      }
    }
    JSCompiler_StaticMethods_deleteUniqueKey_(animIndex, styles);
  }
  if ("mask" !== animIndex.trackType_) {
    for (var key of []) {
      JSCompiler_StaticMethods_insertAnimKey(animIndex, "motion-path", key.time, key.value, key.easing, {autoInsertFirstKey:!1});
    }
  }
  Object.assign({}, animIndex.visibilityRange_.range_);
  key = JSCompiler_StaticMethods_getUniqueKeyTimes(animIndex);
  if (animNameToRuleMap && 2 > key.length) {
    JSCompiler_StaticMethods_clearTracks_(animIndex);
  } else {
    if (animNameToRuleMap = animIndex.JSC$2481_tracks_.get("transform")) {
      getBaseStyle = new Set();
      key = animNameToRuleMap.animKeys_.length;
      for (trackType = 0; trackType < key; trackType++) {
        JSCompiler_inline_result = new module$contents$ninja$model$threeD$GwdTransform_GwdTransform((animNameToRuleMap.animKeys_[trackType] || null).value), styles = Set, getBaseStyle = [...getBaseStyle], range = new Set(), JSCompiler_inline_result.hasPercentTranslation() && range.add("translate"), JSCompiler_inline_result.hasTranslation() && range.add("translate3d"), JSCompiler_inline_result.hasRotationX() && range.add("rotateX"), JSCompiler_inline_result.hasRotationY() && range.add("rotateY"), 
        JSCompiler_inline_result.hasRotationZ() && range.add("rotateZ"), JSCompiler_inline_result.hasScale() && range.add("scale3d"), JSCompiler_inline_result = range, getBaseStyle = new styles([...getBaseStyle, ...JSCompiler_inline_result]);
      }
      styles = [...getBaseStyle.values()];
      0 === styles.length && styles.push("translate3d");
      for (trackType = 0; trackType < key; trackType++) {
        getBaseStyle = animNameToRuleMap.animKeys_[trackType] || null, JSCompiler_inline_result = (new module$contents$ninja$model$threeD$GwdTransform_GwdTransform(getBaseStyle.value)).getCss(styles), JSCompiler_inline_result = module$exports$ninja$anim$animUtil$maybeReplaceMatrix(JSCompiler_inline_result, styles), JSCompiler_inline_result !== getBaseStyle.value && JSCompiler_StaticMethods_addKeyAtTime(animNameToRuleMap, getBaseStyle.time, JSCompiler_inline_result, getBaseStyle.easing);
      }
    }
  }
  JSCompiler_StaticMethods_updateWebAnimationsInput(animIndex);
  return JSCompiler_StaticMethods_getKeyedProperties(animIndex).size ? new module$exports$ninja$anim$AnimationEvaluator(element, animIndex, new module$contents$ninja$capture$DomController_EvaluatorAdapter(JSCompiler_StaticMethods_createAnimationEvaluator_$self)) : null;
}
function JSCompiler_StaticMethods_JSC$2557_initialize_(JSCompiler_StaticMethods_JSC$2557_initialize_$self) {
  const page = JSCompiler_StaticMethods_JSC$2557_initialize_$self.doc_.querySelector("gwd-page");
  if (!page) {
    return null;
  }
  page.classList.add("gwd-play-animation");
  var styleNodes = JSCompiler_StaticMethods_JSC$2557_initialize_$self.doc_.getElementsByTagName("head")[0].querySelectorAll("style");
  const animNameToRuleMap = new Map();
  var docWindow = JSCompiler_StaticMethods_JSC$2557_initialize_$self.doc_.documentElement.ownerDocument.defaultView;
  for (var node of styleNodes) {
    styleNodes = [node.sheet];
    for (var scope of styleNodes) {
      for (let i = 0; i < scope.cssRules.length; i++) {
        const rule = scope.cssRules[i];
        7 === rule.type ? animNameToRuleMap.set(rule.name, rule) : 4 === rule.type && docWindow.matchMedia(rule.media.mediaText).matches && styleNodes.push(rule);
      }
    }
  }
  docWindow = [...page.querySelectorAll("*")];
  for (const element of docWindow) {
    if (docWindow = JSCompiler_StaticMethods_createAnimationEvaluator_(JSCompiler_StaticMethods_JSC$2557_initialize_$self, element, 0, animNameToRuleMap), node = JSCompiler_StaticMethods_createAnimationEvaluator_(JSCompiler_StaticMethods_JSC$2557_initialize_$self, element, 1, animNameToRuleMap), scope = module$exports$ninja$runtime$texteffects$textEffectsTrack$TextEffectsTrack$createFromElement(element), (docWindow || node || scope) && JSCompiler_StaticMethods_JSC$2557_initialize_$self.elementToAnimEvaluatorsMap_.set(element, 
    {elementEvaluator:docWindow, maskEvaluator:node, textEffectsEvaluator:scope}), docWindow || node) {
      JSCompiler_StaticMethods_JSC$2557_initialize_$self.elementToAnimNameMap_.set(element, element.style.getPropertyValue("animation-name")), element.style.setProperty("animation-name", "none");
    }
  }
  return page;
}
function JSCompiler_StaticMethods_initializeForVideo(JSCompiler_StaticMethods_initializeForVideo$self, frameSequence) {
  JSCompiler_StaticMethods_initializeForVideo$self.JSC$2550_frameSequence_ = frameSequence;
  frameSequence = JSCompiler_StaticMethods_JSC$2557_initialize_(JSCompiler_StaticMethods_initializeForVideo$self);
  if (!frameSequence) {
    return Promise.resolve();
  }
  var videoClipElements = [...frameSequence.querySelectorAll("gwd-video-track gwd-av-clip")];
  frameSequence = [];
  for (const elem of videoClipElements) {
    if (videoClipElements = module$contents$ninja$model$av$avClipParser_parseAvClip(elem)) {
      if (JSCompiler_StaticMethods_initializeForVideo$self.elementToAvClipsMap_.set(elem, videoClipElements), "video" === videoClipElements.clipType) {
        videoClipElements = new module$exports$ninja$capture$VideoClipController$VideoClipController(elem, videoClipElements, JSCompiler_StaticMethods_initializeForVideo$self.JSC$2550_frameSequence_), JSCompiler_StaticMethods_initializeForVideo$self.videoControllers_.push(videoClipElements);
      } else if ("image" === videoClipElements.clipType) {
        const image = document.createElement("img");
        elem.appendChild(image);
        frameSequence.push(new Promise(resolve => {
          const imageLoadCallback = () => {
            image.removeEventListener("load", imageLoadCallback);
            image.removeEventListener("error", imageLoadCallback);
            resolve();
          };
          image.addEventListener("load", imageLoadCallback);
          image.addEventListener("error", imageLoadCallback);
        }));
        image.setAttribute("src", videoClipElements.source.trim());
      }
    } else {
      module$exports$ninja$debug$log$warning(module$contents$ninja$capture$log_getLogString("Unable to parse AV clip element: " + elem.outerHTML));
    }
  }
  return Promise.all(frameSequence).then();
}
function JSCompiler_StaticMethods_setTime_(JSCompiler_StaticMethods_setTime_$self, timeMs) {
  for (const element of JSCompiler_StaticMethods_setTime_$self.elementToAnimEvaluatorsMap_.keys()) {
    const {elementEvaluator, maskEvaluator, textEffectsEvaluator} = JSCompiler_StaticMethods_setTime_$self.elementToAnimEvaluatorsMap_.get(element);
    var elemValues = elementEvaluator ? JSCompiler_StaticMethods_getAnimatedValuesAtTime_(elementEvaluator, timeMs) : {}, maskValues = maskEvaluator ? JSCompiler_StaticMethods_getAnimatedValuesAtTime_(maskEvaluator, timeMs) : {};
    elemValues = Object.assign({}, elemValues, maskValues);
    for (const name of Object.keys(elemValues)) {
      "important" !== element.style.getPropertyPriority(name) && (maskValues = elemValues[name], "transform" !== name || maskValues.trim() || (maskValues = "translate3d(0px,0px,0px)"), element.style.setProperty(name, maskValues));
    }
    if (null != (elemValues = textEffectsEvaluator)) {
      var effect = JSCompiler_StaticMethods_getEffectAtTime_(elemValues, timeMs);
      maskValues = effect;
      var time = goog$math$clamp(timeMs, effect.startTimeMs, effect.startTimeMs + effect.durationMs), container = elemValues.container_.parentElement === elemValues.JSC$2528_element_ ? elemValues.container_ : elemValues.container_.parentElement;
      effect = [container, ...container.querySelectorAll("[style]")];
      for (const element of effect) {
        element.removeAttribute("style");
      }
      effect = elemValues;
      var tokenType = maskValues.tokenType;
      if ("character" !== tokenType) {
        for (const element of effect.characters_.parents) {
          element.style.display = "none";
        }
      }
      if ("word" !== tokenType) {
        for (const element of effect.words_.parents) {
          element.style.display = "none";
        }
      }
      if ("line" !== tokenType) {
        for (const element of effect.lines_.parents) {
          element.style.display = "none";
        }
      }
      "text" !== tokenType && effect.textToken_ && (effect.textToken_.style.display = "none");
      effect = [];
      if ("character" === maskValues.tokenType) {
        effect = elemValues.characters_.tokens;
        container = container.querySelectorAll("[character-word-container-element]");
        for (const wordContainer of container) {
          wordContainer.style.display = "inline-block", wordContainer.style.whiteSpace = "pre-wrap";
        }
      } else {
        "word" === maskValues.tokenType ? effect = elemValues.words_.tokens : "line" === maskValues.tokenType ? effect = elemValues.lines_.tokens : "text" === maskValues.tokenType && (effect = [elemValues.textToken_]);
      }
      container = elemValues.effectsShuffleOrders_.get(maskValues.id);
      time = (time - maskValues.startTimeMs) / maskValues.durationMs;
      const [x1, y1, x2, y2] = maskValues.easingData.cubicBezierPoints;
      tokenType = new module$exports$ninja$runtime$math$bezierSegment2d$BezierSegment2d(x1, y1, x2, y2);
      time = tokenType.JSC$2515_yBezier_.value(JSCompiler_StaticMethods_curveParameterAtValue(tokenType.JSC$2515_xBezier_, time)) * maskValues.durationMs + maskValues.startTimeMs;
      var totalGroups = tokenType = maskValues.tokenGroups.value;
      "total-groups" === maskValues.tokenGroups.type ? tokenType = Math.ceil(effect.length / maskValues.tokenGroups.value) : totalGroups = Math.ceil(effect.length / maskValues.tokenGroups.value);
      totalGroups = maskValues.durationMs / ((1 - maskValues.overlap) * totalGroups + maskValues.overlap);
      let tokenGroupIndex = 0;
      for (let i = 0; i < effect.length; i++) {
        Math.floor(i / tokenType) > tokenGroupIndex && tokenGroupIndex++;
        var delay = totalGroups * tokenGroupIndex * (1 - maskValues.overlap), ratio = (goog$math$clamp(time - maskValues.startTimeMs, delay, delay + totalGroups) - delay) / totalGroups;
        "out" === maskValues.direction && (ratio = 1 - ratio);
        delay = container ? effect[container[i]] : effect[i];
        if ("blur" === maskValues.name) {
          var params = maskValues.parameters;
          delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio));
          delay.style.filter = `blur(${goog$math$lerp(params.radius, 0, ratio).toFixed(5)}px)`;
        } else if ("gradient" === maskValues.name) {
          params = maskValues.parameters, delay.style["-webkit-mask-image"] = `linear-gradient(${params.angle}deg, black, ${100 * ratio}%, rgba(0, 0, 0, ${params.opacity}))`, delay.style.display = "inline-block", delay.style["white-space"] = "pre-wrap";
        } else if (module$exports$ninja$runtime$texteffects$textEffectsConstants$TRANSLATION_EFFECTS.has(maskValues.name)) {
          params = maskValues.parameters;
          var transform = `translate${params.dimension}(${(1 - ratio) * params.initialTranslation}px)`;
          "drop-in" === maskValues.name && (transform = `perspective(${params.perspective}px) ${transform}`, JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_(elemValues));
          delay.style.display = "inline-block";
          delay.style.whiteSpace = "pre-wrap";
          delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio));
          delay.style.transform = transform;
        } else if (module$exports$ninja$runtime$texteffects$textEffectsConstants$ROTATION_EFFECTS.has(maskValues.name)) {
          params = maskValues.parameters, delay.style.transformOrigin = params.transformOrigin, delay.style.display = "inline-block", delay.style.whiteSpace = "pre-wrap", delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio)), delay.style.transform = `rotate${params.axis}(${goog$math$lerp(params.initialRotationDegrees, 0, ratio)}deg)`, JSCompiler_StaticMethods_setContainerStylesFor3DTransformEffects_(elemValues);
        } else if ("typewriter" === maskValues.name) {
          params = maskValues.parameters, "linear" === params.easing ? delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio)) : "step" === params.easing && (delay.style.opacity = String(.999999 > ratio ? params.opacity : 1));
        } else if ("zoom" === maskValues.name) {
          params = maskValues.parameters, transform = ratio * (2 * (params.scale - 100) + 100), transform > params.scale && (transform = 2 * params.scale - transform), delay.style.display = "inline-block", delay.style.whiteSpace = "pre-wrap", delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio)), delay.style.transform = `scale(${transform / 100})`;
        } else if ("slide" === maskValues.name) {
          params = maskValues.parameters;
          var initialTranslate = 0;
          transform = "";
          "bottom" === params.direction ? (initialTranslate = elemValues.JSC$2528_element_.offsetHeight, transform = "Y") : "top" === params.direction ? (initialTranslate = -elemValues.JSC$2528_element_.offsetHeight, transform = "Y") : "left" === params.direction ? (initialTranslate = -elemValues.JSC$2528_element_.offsetWidth, transform = "X") : "right" === params.direction && (initialTranslate = elemValues.JSC$2528_element_.offsetWidth, transform = "X");
          initialTranslate = goog$math$lerp(initialTranslate, 0, ratio);
          delay.style.display = "inline-block";
          delay.style.whiteSpace = "pre-wrap";
          delay.style.opacity = String(goog$math$lerp(params.opacity, 1, ratio));
          delay.style.transform = `translate${transform}(${initialTranslate}px)`;
          elemValues.container_.style.overflow = "hidden";
          elemValues.container_.style.display = "inline-block";
        } else {
          "scroll" === maskValues.name && (params = elemValues.JSC$2528_element_.clientHeight, delay.style.display = "inline-block", delay.style.transform = `translateY(${goog$math$lerp(params, -delay.clientHeight, ratio)}px)`, elemValues.container_.style.height = "100%", elemValues.container_.style.overflow = "hidden", elemValues.container_.style.display = "inline-block", "vanishing-point" === maskValues.parameters.scrollType && (ratio = elemValues.container_.parentElement, ratio.style.height = 
          "100%", ratio.style.overflow = "hidden", ratio.style.display = "inline-block", ratio.style.perspective = `${elemValues.JSC$2528_element_.clientHeight}px`, elemValues.container_.style.transformOrigin = "bottom", elemValues.container_.style.transform = "rotateX(30deg) scale(1, 1.2)", elemValues.container_.style["-webkit-mask-image"] = "linear-gradient(transparent 0%, black 45%)"));
        }
        if (i === effect.length - 1 || delay.getBoundingClientRect().left >= effect[i + 1].getBoundingClientRect().left) {
          delay.style.removeProperty("white-space"), "character" === maskValues.tokenType && delay.closest("[character-word-container-element]").style.removeProperty("white-space");
        }
      }
    }
  }
}
function JSCompiler_StaticMethods_nextVideoFrame(JSCompiler_StaticMethods_nextVideoFrame$self) {
  if (JSCompiler_StaticMethods_nextVideoFrame$self.numUpdates_ >= JSCompiler_StaticMethods_nextVideoFrame$self.JSC$2550_frameSequence_.length()) {
    return Promise.resolve();
  }
  var timeMs = JSCompiler_StaticMethods_sequenceIndexToTimeMs(JSCompiler_StaticMethods_nextVideoFrame$self.JSC$2550_frameSequence_, JSCompiler_StaticMethods_nextVideoFrame$self.numUpdates_);
  JSCompiler_StaticMethods_setTime_(JSCompiler_StaticMethods_nextVideoFrame$self, timeMs);
  for (var element of JSCompiler_StaticMethods_nextVideoFrame$self.elementToAvClipsMap_.keys()) {
    a: {
      var clip = JSCompiler_StaticMethods_nextVideoFrame$self.elementToAvClipsMap_.get(element);
      var JSCompiler_inline_result = {};
      if ("audio" === clip.clipType) {
        break a;
      }
      var startTime = module$contents$ninja$anim$avClipAnimUtil_getClipStartTime(clip);
      const endTime = module$contents$ninja$anim$avClipAnimUtil_getClipEndTime(clip);
      var isAtOrAfterClipStart = 0 <= module$exports$ninja$math$mathUtils$fpCmp(timeMs, startTime, .1), isBeforeClipEnd = 0 > module$exports$ninja$math$mathUtils$fpCmp(timeMs, endTime, .1);
      JSCompiler_inline_result.visibility = isAtOrAfterClipStart && isBeforeClipEnd ? "inherit" : "hidden";
      if (isBeforeClipEnd = clip.transitions.start) {
        var duration = isBeforeClipEnd.duration;
        duration = isBeforeClipEnd.isDouble ? 2 * duration : duration;
        const isAtOrBeforeTransitionEnd = 0 >= module$exports$ninja$math$mathUtils$fpCmp(timeMs, startTime + duration, .1);
        isAtOrAfterClipStart && isAtOrBeforeTransitionEnd ? module$contents$ninja$anim$avClipAnimUtil_addTransitionProperties(JSCompiler_inline_result, isBeforeClipEnd, goog$math$clamp((timeMs - startTime) / duration, 0, 1)) : module$contents$ninja$anim$avClipAnimUtil_setEmptyTransitionPropertiesIfNotAlreadySet(JSCompiler_inline_result, isBeforeClipEnd);
      }
      if (clip = clip.transitions.end) {
        startTime = clip.duration, startTime = clip.isDouble ? 2 * startTime : startTime, isAtOrAfterClipStart = 0 <= module$exports$ninja$math$mathUtils$fpCmp(timeMs, endTime - startTime, .1), 0 >= module$exports$ninja$math$mathUtils$fpCmp(timeMs, endTime, .1) && isAtOrAfterClipStart ? module$contents$ninja$anim$avClipAnimUtil_addTransitionProperties(JSCompiler_inline_result, clip, goog$math$clamp(1 - (endTime - timeMs) / startTime, 0, 1)) : module$contents$ninja$anim$avClipAnimUtil_setEmptyTransitionPropertiesIfNotAlreadySet(JSCompiler_inline_result, 
        clip);
      }
    }
    for (var name of Object.keys(JSCompiler_inline_result)) {
      element.style.setProperty(name, JSCompiler_inline_result[name]);
    }
  }
  timeMs = [];
  for (const controller of JSCompiler_StaticMethods_nextVideoFrame$self.videoControllers_) {
    controller.isActive() && (element = timeMs, name = element.push, controller.currentSequenceIndex_++, !controller.isActive_ || controller.currentSequenceIndex_ < controller.firstSequenceIndexInClip_ ? JSCompiler_inline_result = Promise.resolve() : controller.currentSequenceIndex_ > controller.lastSequenceIndexInClip_ ? (JSCompiler_inline_result = controller.backingVideo_, JSCompiler_inline_result.video_.setAttribute("src", ""), JSCompiler_inline_result.video_.remove(), JSCompiler_inline_result.canvas_.remove(), 
    controller.isActive_ = !1, JSCompiler_inline_result = Promise.resolve()) : (JSCompiler_inline_result = JSCompiler_StaticMethods_sequenceIndexToTimeMs(controller.JSC$2457_frameSequence_, controller.currentSequenceIndex_), JSCompiler_inline_result = JSCompiler_StaticMethods_JSC$2379_seek(controller.backingVideo_, (controller.isHold_ ? controller.inTimeMs_ : JSCompiler_inline_result + controller.inTimeMs_ - controller.startTimeMs_) + .1)), name.call(element, JSCompiler_inline_result));
  }
  JSCompiler_StaticMethods_nextVideoFrame$self.numUpdates_++;
  return Promise.all(timeMs).then();
}
var module$exports$ninja$capture$DomController$DomController = class {
  constructor() {
    this.doc_ = JSCompiler_StaticMethods_getIframe_().contentDocument;
    this.JSC$2550_frameSequence_ = null;
    this.elementToAnimEvaluatorsMap_ = new Map();
    this.elementToAnimNameMap_ = new Map();
    this.numUpdates_ = 0;
    this.elementToAvClipsMap_ = new Map();
    this.videoControllers_ = [];
  }
};
async function JSCompiler_StaticMethods_parseVideoGifCaptureResponse_(response) {
  let status = response.status, statusText = response.statusText, videoId = "";
  if (response.ok) {
    const clonedResponse = response.clone();
    try {
      const responseJson = await response.json(), videoIdType = typeof responseJson.videoId;
      if (!responseJson.videoId || "string" !== videoIdType && "number" !== videoIdType) {
        throw Error();
      }
      videoId = String(responseJson.videoId);
    } catch (e) {
      response = await clonedResponse.text(), status = 500, statusText = "Malformed response: " + response;
    }
  }
  return {status, statusText, videoId};
}
var module$exports$ninja$capture$ShellApi$ShellApi = class {
  async startVideoCapture(request) {
    request = new Request("//capture-app/api?method=video-start", {method:"POST", body:JSON.stringify(request)});
    request = await window.fetch(request);
    return JSCompiler_StaticMethods_parseVideoGifCaptureResponse_(request);
  }
  async startGifCapture(request) {
    request = new Request("//capture-app/api?method=gif-start", {method:"POST", body:JSON.stringify(request)});
    request = await window.fetch(request);
    return JSCompiler_StaticMethods_parseVideoGifCaptureResponse_(request);
  }
  async setWindowSize(request) {
    request = new Request("//capture-app/api?method=set-window-size" + `&width=${request.width}&height=${request.height}`, {method:"POST"});
    request = await window.fetch(request);
    return {status:request.status, statusText:request.statusText};
  }
  async captureFrame(request) {
    request = new Request("//capture-app/api?method=dom-ready-for-video-frame" + `&id=${request.videoId}&frame=${request.frameIndex}&framecolor=${request.paintFinishedColor}`, {method:"POST"});
    request = await window.fetch(request);
    return {status:request.status, statusText:request.statusText};
  }
  async captureImage(request) {
    request = new Request("//capture-app/api?method=dom-ready-for-image", {method:"POST", body:JSON.stringify(request)});
    request = await window.fetch(request);
    return {status:request.status, statusText:request.statusText};
  }
  async finishVideoCapture(request) {
    request = new Request("//capture-app/api?method=video-finished" + `&id=${request.videoId}&completed=${request.allCapturesFinished ? "true" : "false"}`, {method:"POST"});
    request = await window.fetch(request);
    return {status:request.status, statusText:request.statusText};
  }
  async finishImageCapture() {
    var fetchRequest = new Request("//capture-app/api?method=image-finished", {method:"POST"});
    fetchRequest = await window.fetch(fetchRequest);
    return {status:fetchRequest.status, statusText:fetchRequest.statusText};
  }
  async reportStatus(request) {
    request = new Request("//capture-app/api?method=status", {method:"POST", body:JSON.stringify(request.statuses)});
    request = await window.fetch(request);
    return {status:request.status, statusText:request.statusText};
  }
  async reportError(request) {
    request = new Request("//capture-app/api?method=error", {method:"POST", body:JSON.stringify(request)});
    await window.fetch(request);
  }
};
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(attrPrefixes, e, attr, value) {
  if (0 === attrPrefixes.length) {
    throw Error("");
  }
  attrPrefixes = attrPrefixes.map(s => {
    if (s instanceof module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl) {
      s = s.privateDoNotAccessOrElseWrappedAttrPrefix;
    } else {
      throw Error("");
    }
    return s;
  });
  const attrLower = attr.toLowerCase();
  if (attrPrefixes.every(p => 0 !== attrLower.indexOf(p))) {
    throw Error(`Attribute "${attr}" does not match any of the allowed prefixes.`);
  }
  e.setAttribute(attr, value);
}
;async function JSCompiler_StaticMethods_captureAllVideosOrGifs_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self) {
  var videoSpec = JSCompiler_StaticMethods_captureAllVideosOrGifs_$self.spec_.videoSpec;
  if (videoSpec) {
    JSCompiler_StaticMethods_reportVideoStatus_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self);
    var variants = videoSpec.variants, framesToCapture = videoSpec.framesToCapture, sizesToCapture = videoSpec.sizesToCapture;
    videoSpec = !!videoSpec.gifSettings;
    var numVariants = variants.length, numSizes = sizesToCapture.length;
    for (let variantIndex = 0; variantIndex < numVariants; variantIndex++) {
      const variant = variants[variantIndex], frames = framesToCapture[JSCompiler_StaticMethods_captureAllVideosOrGifs_$self.instanceIndex_];
      for (let sizeIndex = 0; sizeIndex < numSizes; sizeIndex++) {
        const sizeData = sizesToCapture[sizeIndex], outputSize = sizeData.outputSize, outputPath = JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, variant.name, outputSize);
        module$contents$ninja$debug$log_logToShell("info", module$contents$ninja$debug$log_getLogString(module$contents$ninja$capture$log_getLogString(`Capturing to ${outputPath}.` + `Frames: start=${frames.startFrame}, ` + `increment=${frames.increment}, num=${frames.numFrames}`)));
        const videoId = videoSpec ? await JSCompiler_StaticMethods_startGifCapture_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, variant, outputSize) : await JSCompiler_StaticMethods_startVideoCapture_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, variant, outputSize);
        await JSCompiler_StaticMethods_loadVideoDocument_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, variant, sizeData);
        await JSCompiler_StaticMethods_captureFrames_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, variant, outputSize, videoId);
        await JSCompiler_StaticMethods_finishVideoCapture_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self, videoId, variantIndex === numVariants - 1 && sizeIndex === numSizes - 1);
        JSCompiler_StaticMethods_reportVideoStatus_(JSCompiler_StaticMethods_captureAllVideosOrGifs_$self);
        module$contents$ninja$debug$log_logToShell("info", module$contents$ninja$debug$log_getLogString(module$contents$ninja$capture$log_getLogString(`Finished capturing to ${outputPath}.`)));
      }
    }
  }
}
async function JSCompiler_StaticMethods_captureAllImages_(JSCompiler_StaticMethods_captureAllImages_$self) {
  const imageSpec = JSCompiler_StaticMethods_captureAllImages_$self.spec_.imageSpec, sizesToCapture = imageSpec.sizesToCapture, variantsToCapture = imageSpec.variantsToCapture, numBrowsers = imageSpec.numBrowsers, numSizes = sizesToCapture.length, totalImages = variantsToCapture.length * numSizes;
  JSCompiler_StaticMethods_captureAllImages_$self.imageStatus_ = {latestImageName:"", numTotal:Math.ceil((totalImages - JSCompiler_StaticMethods_captureAllImages_$self.instanceIndex_) / numBrowsers), numCompleted:0};
  JSCompiler_StaticMethods_reportImageStatus_(JSCompiler_StaticMethods_captureAllImages_$self);
  for (let i = JSCompiler_StaticMethods_captureAllImages_$self.instanceIndex_; i < totalImages; i += numBrowsers) {
    const variant = variantsToCapture[Math.floor(i / numSizes)], size = sizesToCapture[i % numSizes];
    await JSCompiler_StaticMethods_loadImageDocument_(JSCompiler_StaticMethods_captureAllImages_$self, variant, size, imageSpec.pageId);
    const controller = new module$exports$ninja$capture$DomController$DomController();
    await JSCompiler_StaticMethods_captureSingleImage_(JSCompiler_StaticMethods_captureAllImages_$self, controller, variant.name, size);
  }
  await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_captureAllImages_$self.shell_.finishImageCapture());
  JSCompiler_StaticMethods_reportImageStatus_(JSCompiler_StaticMethods_captureAllImages_$self);
}
function JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_getOutputPath_$self, variantName, size) {
  let baseName, extension;
  if (JSCompiler_StaticMethods_getOutputPath_$self.spec_.videoSpec) {
    let sizesToCapture;
    ({outputFolder:JSCompiler_StaticMethods_getOutputPath_$self, baseName, extension, sizesToCapture} = JSCompiler_StaticMethods_getOutputPath_$self.spec_.videoSpec);
    1 === sizesToCapture.length && (size = null);
  } else if (JSCompiler_StaticMethods_getOutputPath_$self.spec_.imageSpec) {
    ({outputFolder:JSCompiler_StaticMethods_getOutputPath_$self, baseName, format:extension} = JSCompiler_StaticMethods_getOutputPath_$self.spec_.imageSpec);
  } else {
    return "";
  }
  return `${`${JSCompiler_StaticMethods_getOutputPath_$self}${baseName}`}${variantName ? `_${variantName}` : ""}${size ? `_${`${size.width}x${size.height}`}` : ""}.${extension}`;
}
function JSCompiler_StaticMethods_reportVideoStatus_(JSCompiler_StaticMethods_reportVideoStatus_$self) {
  const request = {statuses:[...JSCompiler_StaticMethods_reportVideoStatus_$self.videoStatuses_.values()]};
  JSCompiler_StaticMethods_reportVideoStatus_$self.lastStatusUpdateTime_ = Date.now();
  JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_reportVideoStatus_$self.shell_.reportStatus(request));
}
async function JSCompiler_StaticMethods_startGifCapture_(JSCompiler_StaticMethods_startGifCapture_$self, variant, size) {
  const videoSpec = JSCompiler_StaticMethods_startGifCapture_$self.spec_.videoSpec;
  return (await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_startGifCapture_$self.shell_.startGifCapture({outputPath:JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_startGifCapture_$self, variant.name, size), width:size.width, height:size.height + 1, frameRate:videoSpec.frameRate, dumpFrames:videoSpec.dumpFrames, metadata:videoSpec.metadata, loop:videoSpec.gifSettings.loop, maxColor:videoSpec.gifSettings.maxColor, dither:videoSpec.gifSettings.dither}))).videoId;
}
async function JSCompiler_StaticMethods_startVideoCapture_(JSCompiler_StaticMethods_startVideoCapture_$self, variant, size) {
  const videoSpec = JSCompiler_StaticMethods_startVideoCapture_$self.spec_.videoSpec;
  return (await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_startVideoCapture_$self.shell_.startVideoCapture({outputPath:JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_startVideoCapture_$self, variant.name, size), width:size.width, height:size.height + 1, frameRate:videoSpec.frameRate, h264Profile:videoSpec.h264Profile, videoBitrateBps:videoSpec.videoBitrateBps, audioMix:variant.sizeToAudioMixMap[`${size.width}x${size.height}`] || null, dumpFrames:videoSpec.dumpFrames, 
  metadata:videoSpec.metadata}))).videoId;
}
async function JSCompiler_StaticMethods_loadVideoDocument_(JSCompiler_StaticMethods_loadVideoDocument_$self, variant, sizeData) {
  JSCompiler_StaticMethods_loadVideoDocument_$self = JSCompiler_StaticMethods_loadVideoDocument_$self.spec_.videoSpec;
  var authoredSize = sizeData.authoredSize, outputSize = sizeData.outputSize;
  sizeData = await JSCompiler_StaticMethods_waitForIframeToBeInDom_();
  JSCompiler_StaticMethods_setIframeAndOverlaySize_(authoredSize, outputSize);
  await JSCompiler_StaticMethods_waitForIframeLoad_(sizeData);
  var xScale = outputSize.width / authoredSize.width;
  authoredSize = outputSize.height / authoredSize.height;
  outputSize = sizeData.contentDocument.documentElement;
  1E-4 >= Math.abs(xScale - 1) && 1E-4 >= Math.abs(authoredSize - 1) ? (outputSize.style.transformOrigin = "", outputSize.style.transform = "") : (outputSize.style.transformOrigin = "0px 0px", outputSize.style.transform = `scale(${xScale.toFixed(4)}, ${authoredSize.toFixed(4)})`);
  JSCompiler_StaticMethods_insertVariantData_(sizeData.contentDocument, variant.variantData);
  await JSCompiler_StaticMethods_waitForWebComponentsReady_(sizeData);
  await JSCompiler_StaticMethods_waitForPagePresented_(sizeData.contentDocument);
  variant = sizeData.contentDocument;
  if (Object.keys(JSCompiler_StaticMethods_loadVideoDocument_$self.fullResToLowResVideoMap).length) {
    variant = [...variant.querySelectorAll("gwd-video-track gwd-av-clip")];
    for (const clip of variant) {
      if (variant = clip.getAttribute("source"), variant = JSCompiler_StaticMethods_loadVideoDocument_$self.fullResToLowResVideoMap[variant]) {
        xScale = variant.fullResDimensions, sizeData = xScale.height, xScale = xScale.width, module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(module$exports$ninja$model$av$avConstants$AV_ATTRIBUTE_PREFIXES, clip, "source", variant.lowResPath), module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(module$exports$ninja$capture$captureConstants$ATTRIBUTE_PREFIXES, clip, "full-res-height", String(sizeData)), 
        module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(module$exports$ninja$capture$captureConstants$ATTRIBUTE_PREFIXES, clip, "full-res-width", String(xScale));
      }
    }
  }
}
async function JSCompiler_StaticMethods_captureFrames_(JSCompiler_StaticMethods_captureFrames_$self, variant, size, videoId) {
  var videoSpec = JSCompiler_StaticMethods_captureFrames_$self.spec_.videoSpec;
  const frameIndices = videoSpec.framesToCapture[JSCompiler_StaticMethods_captureFrames_$self.instanceIndex_];
  videoSpec = new module$exports$ninja$capture$FrameSequence$FrameSequence(frameIndices, videoSpec.frameRate, videoSpec.frameTimeOffset);
  const controller = new module$exports$ninja$capture$DomController$DomController();
  await JSCompiler_StaticMethods_initializeForVideo(controller, videoSpec);
  for (let i = 0; i < frameIndices.numFrames; i++) {
    try {
      await JSCompiler_StaticMethods_nextVideoFrame(controller);
    } catch (e) {
      throw new module$exports$ninja$capture$AppError$AppError(3, `Failed to update frame index ${videoSpec.indices_.startFrame + videoSpec.indices_.increment * i}: ${String(e)}`);
    }
    var grey = JSCompiler_StaticMethods_paintOverlayLastRow_(JSCompiler_StaticMethods_captureFrames_$self), frameIndex = videoSpec.indices_.startFrame + videoSpec.indices_.increment * i;
    grey = {videoId, frameIndex, paintFinishedColor:grey};
    for (let j = 0; 25 > j; j++) {
      if (429 === (await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_captureFrames_$self.shell_.captureFrame(grey))).status) {
        const timeMs = JSCompiler_StaticMethods_sequenceIndexToTimeMs(videoSpec, i);
        if (24 === j) {
          throw new module$exports$ninja$capture$AppError$AppError(6, `Capture DOM request for frame ${frameIndex} ` + `(t=${Math.round(timeMs)}ms) failed after ` + "25 attempts");
        }
        module$contents$ninja$debug$log_logToShell("info", module$contents$ninja$debug$log_getLogString(module$contents$ninja$capture$log_getLogString(`Retry attempt ${j + 1} for capturing frame ` + `${frameIndex} (t=${Math.round(timeMs)}ms).`)));
        await new Promise(resolve => setTimeout(resolve, 200));
        grey = {videoId:grey.videoId, frameIndex:grey.frameIndex, paintFinishedColor:grey.paintFinishedColor};
      } else {
        break;
      }
    }
    frameIndex = JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_captureFrames_$self, variant.name, size);
    grey = JSCompiler_StaticMethods_captureFrames_$self.videoStatuses_.get(frameIndex);
    JSCompiler_StaticMethods_captureFrames_$self.videoStatuses_.set(frameIndex, Object.assign({}, grey, {framesCompleted:i + 1}));
    i < frameIndices.numFrames - 1 && 100 <= Date.now() - JSCompiler_StaticMethods_captureFrames_$self.lastStatusUpdateTime_ && JSCompiler_StaticMethods_reportVideoStatus_(JSCompiler_StaticMethods_captureFrames_$self);
    JSCompiler_StaticMethods_captureFrames_$self.numCaptured_++;
  }
}
async function JSCompiler_StaticMethods_finishVideoCapture_(JSCompiler_StaticMethods_finishVideoCapture_$self, videoId, isLastVideo) {
  await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_finishVideoCapture_$self.shell_.finishVideoCapture({videoId, allCapturesFinished:isLastVideo}));
}
function JSCompiler_StaticMethods_reportImageStatus_(JSCompiler_StaticMethods_reportImageStatus_$self) {
  const request = {statuses:JSCompiler_StaticMethods_reportImageStatus_$self.imageStatus_};
  JSCompiler_StaticMethods_reportImageStatus_$self.lastStatusUpdateTime_ = Date.now();
  JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_reportImageStatus_$self.shell_.reportStatus(request));
}
async function JSCompiler_StaticMethods_loadImageDocument_(JSCompiler_StaticMethods_loadImageDocument_$self, variant, size, pageId) {
  await JSCompiler_StaticMethods_setWindowSize_(JSCompiler_StaticMethods_loadImageDocument_$self, size.width, size.height + 1);
  JSCompiler_StaticMethods_loadImageDocument_$self = await JSCompiler_StaticMethods_waitForIframeToBeInDom_();
  JSCompiler_StaticMethods_setIframeAndOverlaySize_(size, size);
  await JSCompiler_StaticMethods_waitForIframeLoad_(JSCompiler_StaticMethods_loadImageDocument_$self);
  JSCompiler_StaticMethods_loadImageDocument_$self.contentDocument.body.style.overflow = "hidden";
  size = JSCompiler_StaticMethods_loadImageDocument_$self.contentDocument;
  JSCompiler_StaticMethods_insertVariantData_(size, variant.data);
  pageId && size.querySelector("gwd-pagedeck").setAttribute("default-page", pageId);
  await JSCompiler_StaticMethods_waitForWebComponentsReady_(JSCompiler_StaticMethods_loadImageDocument_$self);
  await JSCompiler_StaticMethods_waitForPagePresented_(size);
  await JSCompiler_StaticMethods_waitForImageSourcesLoaded_(size);
}
function JSCompiler_StaticMethods_getIframe_() {
  return document.getElementById("gwd-document");
}
async function JSCompiler_StaticMethods_captureSingleImage_(JSCompiler_StaticMethods_captureSingleImage_$self, controller, variantName, size) {
  const format = JSCompiler_StaticMethods_captureSingleImage_$self.spec_.imageSpec.format, compressionRate = JSCompiler_StaticMethods_captureSingleImage_$self.spec_.imageSpec.compressionRate, metadata = JSCompiler_StaticMethods_captureSingleImage_$self.spec_.imageSpec.metadata;
  var timeMs = JSCompiler_StaticMethods_captureSingleImage_$self.spec_.imageSpec.timeMs;
  for (const element of controller.elementToAnimNameMap_.keys()) {
    const animName = controller.elementToAnimNameMap_.get(element);
    element.style.setProperty("animation-name", animName);
  }
  JSCompiler_StaticMethods_JSC$2557_initialize_(controller);
  JSCompiler_StaticMethods_setTime_(controller, timeMs);
  await void 0;
  controller = JSCompiler_StaticMethods_paintOverlayLastRow_(JSCompiler_StaticMethods_captureSingleImage_$self);
  variantName = JSCompiler_StaticMethods_getOutputPath_(JSCompiler_StaticMethods_captureSingleImage_$self, variantName, size);
  200 === (await JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_captureSingleImage_$self.shell_.captureImage({outputPath:variantName, format, compressionRate, metadata, paintFinishedColor:controller}))).status && (JSCompiler_StaticMethods_captureSingleImage_$self.numCaptured_++, JSCompiler_StaticMethods_captureSingleImage_$self.imageStatus_ = {latestImageName:module$exports$ninja$string$path$baseName(variantName), numTotal:JSCompiler_StaticMethods_captureSingleImage_$self.imageStatus_.numTotal, 
  numCompleted:JSCompiler_StaticMethods_captureSingleImage_$self.numCaptured_});
  100 <= Date.now() - JSCompiler_StaticMethods_captureSingleImage_$self.lastStatusUpdateTime_ && JSCompiler_StaticMethods_reportImageStatus_(JSCompiler_StaticMethods_captureSingleImage_$self);
}
async function JSCompiler_StaticMethods_getShellResponse_(responsePromise) {
  try {
    const response = await responsePromise;
    if (500 === response.status) {
      throw new module$exports$ninja$capture$AppError$AppError(7, response.statusText);
    }
    return response;
  } catch (e) {
    throw e instanceof module$exports$ninja$capture$AppError$AppError || (e = new module$exports$ninja$capture$AppError$AppError(7, String(e))), e;
  }
}
async function JSCompiler_StaticMethods_setWindowSize_(JSCompiler_StaticMethods_setWindowSize_$self, width, height) {
  if (window.innerWidth !== width || window.innerHeight !== height) {
    var waitForWindowResize = new Promise(resolve => {
      window.addEventListener("resize", resolve, {once:!0});
    }), timeoutId, windowResizeTimeout = new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => reject(new module$exports$ninja$capture$AppError$AppError(0, "Timed out waiting for capture browser to resize")), 3E3);
    });
    JSCompiler_StaticMethods_getShellResponse_(JSCompiler_StaticMethods_setWindowSize_$self.shell_.setWindowSize({width, height}));
    await Promise.race([waitForWindowResize, windowResizeTimeout]).then(() => {
      clearTimeout(timeoutId);
    });
  }
}
async function JSCompiler_StaticMethods_waitForIframeToBeInDom_() {
  return await new Promise(resolve => {
    const iframe = JSCompiler_StaticMethods_getIframe_();
    iframe ? resolve(iframe) : window.addEventListener("DOMContentLoaded", () => resolve(JSCompiler_StaticMethods_getIframe_()), {once:!0});
  });
}
function JSCompiler_StaticMethods_setIframeAndOverlaySize_(iframeSize, outputSize) {
  const iframe = JSCompiler_StaticMethods_getIframe_();
  iframe.width = iframeSize.width;
  iframe.height = iframeSize.height;
  iframe.style.width = iframeSize.width + "px";
  iframe.style.height = iframeSize.height + "px";
  iframeSize = document.getElementById("paint-completion-overlay");
  iframeSize.width = outputSize.width;
  iframeSize.height = outputSize.height + 1;
  iframeSize.style.width = outputSize.width + "px";
  iframeSize.style.height = outputSize.height + 1 + "px";
}
async function JSCompiler_StaticMethods_waitForIframeLoad_(iframe) {
  const waitForIframeLoad = new Promise(resolve => {
    iframe.addEventListener("load", resolve, {once:!0});
  });
  iframe.setAttribute("src", "index.html");
  await waitForIframeLoad;
}
function JSCompiler_StaticMethods_insertVariantData_(doc, variantData) {
  if (variantData) {
    const variantDataElement = doc.createElement("script");
    variantDataElement.setAttribute("type", "application/json");
    variantDataElement.setAttribute("id", "gwd-variant-data");
    variantData = JSON.stringify(variantData);
    variantDataElement.textContent = variantData;
    doc.body.appendChild(variantDataElement);
  }
}
async function JSCompiler_StaticMethods_waitForWebComponentsReady_(iframe) {
  return new Promise(resolve => {
    const WebComponents = iframe.contentWindow.WebComponents;
    WebComponents && WebComponents.ready ? resolve() : iframe.contentWindow.addEventListener("WebComponentsReady", resolve, {once:!0});
  });
}
async function JSCompiler_StaticMethods_waitForPagePresented_(doc) {
  const waitForPageLoad = new Promise(resolve => {
    doc.addEventListener("pagepresenting", resolve, {once:!0});
    const googleAdElement = doc.querySelector("gwd-google-ad");
    setTimeout(() => googleAdElement.initAd(), 1);
  });
  let timeoutId;
  const pageLoadTimeout = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => reject(new module$exports$ninja$capture$AppError$AppError(0, "Timed out waiting for page to present")), 5E3);
  });
  await Promise.race([waitForPageLoad, pageLoadTimeout]).then(() => {
    clearTimeout(timeoutId);
  });
  await doc.fonts.ready;
}
async function JSCompiler_StaticMethods_waitForImageSourcesLoaded_(doc) {
  var gwdImages = doc.querySelectorAll("gwd-image[scaling]:not([scaling=stretch])");
  let imageCount = gwdImages.length;
  if (imageCount) {
    var waitImageSourcesLoad = new Promise(resolve => {
      doc.addEventListener("all-image-sources-loaded", resolve, {once:!0});
    }), timeoutId, imageLoadTimeout = new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        reject(new module$exports$ninja$capture$AppError$AppError(0, "Timed out waiting for all image sources to be loaded"));
      }, 3E3);
    }), imageLoadHandler = e => {
      "error" === e.type && module$contents$ninja$debug$log_logToShell("error", module$contents$ninja$debug$log_getLogString(module$contents$ninja$capture$log_getLogString("Error loading image source: " + e.target.src)));
      imageCount--;
      0 === imageCount && doc.dispatchEvent(new CustomEvent("all-image-sources-loaded"));
    };
    for (const gwdImage of gwdImages) {
      gwdImages = doc.createElement("img"), gwdImages.addEventListener("load", imageLoadHandler, {once:!0}), gwdImages.addEventListener("error", imageLoadHandler, {once:!0}), gwdImages.src = gwdImage.getAttribute("source");
    }
    await Promise.race([waitImageSourcesLoad, imageLoadTimeout]).then(() => {
      clearTimeout(timeoutId);
    });
  }
}
function JSCompiler_StaticMethods_paintOverlayLastRow_(JSCompiler_StaticMethods_paintOverlayLastRow_$self) {
  const overlay = document.getElementById("paint-completion-overlay"), drawContext = overlay.getContext("2d");
  JSCompiler_StaticMethods_paintOverlayLastRow_$self = 0 === JSCompiler_StaticMethods_paintOverlayLastRow_$self.numCaptured_ % 2 ? 64 : 192;
  drawContext.fillStyle = `rgb(${JSCompiler_StaticMethods_paintOverlayLastRow_$self}, ${JSCompiler_StaticMethods_paintOverlayLastRow_$self}, ${JSCompiler_StaticMethods_paintOverlayLastRow_$self})`;
  drawContext.fillRect(0, overlay.height - 1, overlay.width, 1);
  return JSCompiler_StaticMethods_paintOverlayLastRow_$self;
}
var module$exports$ninja$capture$CaptureManager$CaptureManager = class {
  constructor(shell, captureSpec, instanceIndex) {
    this.shell_ = shell;
    this.spec_ = captureSpec;
    this.instanceIndex_ = instanceIndex;
    this.lastStatusUpdateTime_ = -1;
    this.numCaptured_ = 0;
    var videoSpec = this.spec_.videoSpec;
    if (videoSpec) {
      shell = new Map();
      captureSpec = videoSpec.sizesToCapture;
      instanceIndex = videoSpec.variants;
      videoSpec = videoSpec.framesToCapture;
      for (JSCompiler_inline_result of instanceIndex) {
        for (const {outputSize} of captureSpec) {
          instanceIndex = JSCompiler_StaticMethods_getOutputPath_(this, JSCompiler_inline_result.name, outputSize), shell.set(instanceIndex, {outputPath:instanceIndex, framesTotal:videoSpec[this.instanceIndex_].numFrames, framesCompleted:0});
        }
      }
      var JSCompiler_inline_result = shell;
    } else {
      JSCompiler_inline_result = null;
    }
    this.videoStatuses_ = JSCompiler_inline_result;
    this.imageStatus_ = {latestImageName:"", numTotal:0, numCompleted:0};
  }
};
function JSCompiler_StaticMethods_startVideoGifCapture_(JSCompiler_StaticMethods_startVideoGifCapture_$self, request, apiType) {
  if (JSCompiler_StaticMethods_startVideoGifCapture_$self.videoPathToIdMap_.has(request.outputPath)) {
    var videoId = JSCompiler_StaticMethods_startVideoGifCapture_$self.videoPathToIdMap_.get(request.outputPath);
  } else {
    videoId = String(JSCompiler_StaticMethods_startVideoGifCapture_$self.numStartedVideos_), JSCompiler_StaticMethods_startVideoGifCapture_$self.videoPathToIdMap_.set(request.outputPath, videoId), JSCompiler_StaticMethods_startVideoGifCapture_$self.numStartedVideos_++;
  }
  videoId = {status:200, statusText:"OK", videoId};
  JSCompiler_StaticMethods_startVideoGifCapture_$self.usageRecords_.push({type:apiType, request, response:videoId});
  return Promise.resolve(videoId);
}
function JSCompiler_StaticMethods_isValidVideoId_(JSCompiler_StaticMethods_isValidVideoId_$self, videoId) {
  return [...JSCompiler_StaticMethods_isValidVideoId_$self.videoPathToIdMap_.values()].includes(videoId);
}
var module$exports$ninja$capture$ShellApiFake$ShellApiFake = class extends module$exports$ninja$capture$ShellApi$ShellApi {
  constructor() {
    super();
    this.numStartedVideos_ = 0;
    this.videoPathToIdMap_ = new Map();
    this.usageRecords_ = [];
  }
  startVideoCapture(request) {
    return JSCompiler_StaticMethods_startVideoGifCapture_(this, request, "StartVideoCapture");
  }
  startGifCapture(request) {
    return JSCompiler_StaticMethods_startVideoGifCapture_(this, request, "StartGifCapture");
  }
  setWindowSize(request) {
    const response = {status:200, statusText:"OK"};
    this.usageRecords_.push({type:"SetWindowSize", request, response});
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("resize"));
    }, 10);
    return Promise.resolve(response);
  }
  captureFrame(request) {
    var isValidId = JSCompiler_StaticMethods_isValidVideoId_(this, request.videoId);
    isValidId = {status:isValidId ? 200 : 404, statusText:isValidId ? "OK" : "Invalid video id: " + request.videoId};
    this.usageRecords_.push({type:"CaptureFrame", request, response:isValidId});
    return Promise.resolve(isValidId);
  }
  captureImage(request) {
    const response = {status:200, statusText:"OK"};
    this.usageRecords_.push({type:"CaptureImage", request, response});
    return Promise.resolve(response);
  }
  finishVideoCapture(request) {
    var isValidId = JSCompiler_StaticMethods_isValidVideoId_(this, request.videoId);
    isValidId = {status:isValidId ? 200 : 404, statusText:isValidId ? "OK" : "Invalid video id: " + request.videoId};
    this.usageRecords_.push({type:"FinishVideoCapture", request, response:isValidId});
    return Promise.resolve(isValidId);
  }
  finishImageCapture() {
    const response = {status:200, statusText:"OK"};
    this.usageRecords_.push({type:"FinishImageCapture", request:null, response});
    return Promise.resolve(response);
  }
  reportStatus(request) {
    const response = {status:200, statusText:"OK"};
    request = Array.isArray(request.statuses) ? [...request.statuses] : request.statuses;
    this.usageRecords_.push({type:"ReportStatus", request:{statuses:request}, response});
    return Promise.resolve(response);
  }
  reportError(request) {
    this.usageRecords_.push({type:"ReportError", request, response:null});
    return Promise.resolve();
  }
};
const module$contents$webmonitoring$MonitoringConfig_MonitoringConfig = class {
  constructor(product) {
    this.product_ = product;
    this.version_ = "empty";
    this.channel_ = null;
    this.context_ = {};
  }
  getVersion() {
    return this.version_;
  }
  setVersion(version) {
    this.version_ = version;
    return this;
  }
  setChannel(channel) {
    this.channel_ = channel;
    return this;
  }
  setContext(context) {
    const res = {};
    for (const key in context) {
      res[key] = context[key];
    }
    this.context_ = res;
    return this;
  }
};
function goog$iter$Iterator() {
}
goog$iter$Iterator.prototype.next = function() {
  return goog$iter$ES6_ITERATOR_DONE;
};
var goog$iter$ES6_ITERATOR_DONE = {done:!0, value:void 0};
goog$iter$Iterator.prototype.__iterator__ = function() {
  return this;
};
function module$contents$goog$iter$es6_ShimIterable$of(iter) {
  if (iter instanceof module$contents$goog$iter$es6_ShimIterableImpl || iter instanceof module$contents$goog$iter$es6_ShimGoogIterator || iter instanceof module$contents$goog$iter$es6_ShimEs6Iterator) {
    return iter;
  }
  if ("function" == typeof iter.next) {
    return new module$contents$goog$iter$es6_ShimIterableImpl(() => iter);
  }
  if ("function" == typeof iter[Symbol.iterator]) {
    return new module$contents$goog$iter$es6_ShimIterableImpl(() => iter[Symbol.iterator]());
  }
  if ("function" == typeof iter.__iterator__) {
    return new module$contents$goog$iter$es6_ShimIterableImpl(() => iter.__iterator__());
  }
  throw Error("Not an iterator or iterable.");
}
class module$contents$goog$iter$es6_ShimIterableImpl {
  constructor(func) {
    this.func_ = func;
  }
  __iterator__() {
    return new module$contents$goog$iter$es6_ShimGoogIterator(this.func_());
  }
  [Symbol.iterator]() {
    return new module$contents$goog$iter$es6_ShimEs6Iterator(this.func_());
  }
  toEs6() {
    return new module$contents$goog$iter$es6_ShimEs6Iterator(this.func_());
  }
}
class module$contents$goog$iter$es6_ShimGoogIterator extends goog$iter$Iterator {
  constructor(iter) {
    super();
    this.JSC$2620_iter_ = iter;
  }
  next() {
    return this.JSC$2620_iter_.next();
  }
  [Symbol.iterator]() {
    return new module$contents$goog$iter$es6_ShimEs6Iterator(this.JSC$2620_iter_);
  }
  toEs6() {
    return new module$contents$goog$iter$es6_ShimEs6Iterator(this.JSC$2620_iter_);
  }
}
class module$contents$goog$iter$es6_ShimEs6Iterator extends module$contents$goog$iter$es6_ShimIterableImpl {
  constructor(iter) {
    super(() => iter);
    this.JSC$2624_iter_ = iter;
  }
  next() {
    return this.JSC$2624_iter_.next();
  }
}
;function goog$storage$mechanism$Mechanism() {
}
;function module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism() {
}
goog$inherits(module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism, goog$storage$mechanism$Mechanism);
module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism.prototype[Symbol.iterator] = function() {
  return module$contents$goog$iter$es6_ShimIterable$of(this.__iterator__(!0)).toEs6();
};
function goog$storage$mechanism$HTML5WebStorage(storage) {
  this.JSC$2632_storage_ = storage;
}
goog$inherits(goog$storage$mechanism$HTML5WebStorage, module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism);
goog$storage$mechanism$HTML5WebStorage.prototype.set = function(key, value) {
  try {
    this.JSC$2632_storage_.setItem(key, value);
  } catch (e) {
    if (0 == this.JSC$2632_storage_.length) {
      throw "Storage mechanism: Storage disabled";
    }
    throw "Storage mechanism: Quota exceeded";
  }
};
goog$storage$mechanism$HTML5WebStorage.prototype.get = function(key) {
  key = this.JSC$2632_storage_.getItem(key);
  if ("string" !== typeof key && null !== key) {
    throw "Storage mechanism: Invalid value was encountered";
  }
  return key;
};
goog$storage$mechanism$HTML5WebStorage.prototype.remove = function(key) {
  this.JSC$2632_storage_.removeItem(key);
};
goog$storage$mechanism$HTML5WebStorage.prototype.__iterator__ = function(opt_keys) {
  var i = 0, storage = this.JSC$2632_storage_, newIter = new goog$iter$Iterator();
  newIter.next = function() {
    if (i >= storage.length) {
      return goog$iter$ES6_ITERATOR_DONE;
    }
    var key = storage.key(i++);
    if (opt_keys) {
      return {value:key, done:!1};
    }
    key = storage.getItem(key);
    if ("string" !== typeof key) {
      throw "Storage mechanism: Invalid value was encountered";
    }
    return {value:key, done:!1};
  };
  return newIter;
};
goog$storage$mechanism$HTML5WebStorage.prototype.key = function(index) {
  return this.JSC$2632_storage_.key(index);
};
function goog$storage$mechanism$HTML5LocalStorage() {
  var storage = null;
  try {
    storage = window.localStorage || null;
  } catch (e) {
  }
  this.JSC$2632_storage_ = storage;
}
goog$inherits(goog$storage$mechanism$HTML5LocalStorage, goog$storage$mechanism$HTML5WebStorage);
function JSCompiler_StaticMethods_isLocalStorageAvailable_(JSCompiler_StaticMethods_isLocalStorageAvailable_$self) {
  var JSCompiler_temp;
  if (JSCompiler_temp = null != JSCompiler_StaticMethods_isLocalStorageAvailable_$self.JSC$2638_storage_) {
    if (JSCompiler_StaticMethods_isLocalStorageAvailable_$self = JSCompiler_StaticMethods_isLocalStorageAvailable_$self.JSC$2638_storage_, JSCompiler_StaticMethods_isLocalStorageAvailable_$self.JSC$2632_storage_) {
      try {
        JSCompiler_StaticMethods_isLocalStorageAvailable_$self.JSC$2632_storage_.setItem("__sak", "1"), JSCompiler_StaticMethods_isLocalStorageAvailable_$self.JSC$2632_storage_.removeItem("__sak"), JSCompiler_temp = !0;
      } catch (e) {
        JSCompiler_temp = !1;
      }
    } else {
      JSCompiler_temp = !1;
    }
  }
  return JSCompiler_temp;
}
function JSCompiler_StaticMethods_saveHistory_(JSCompiler_StaticMethods_saveHistory_$self) {
  if (JSCompiler_StaticMethods_isLocalStorageAvailable_(JSCompiler_StaticMethods_saveHistory_$self)) {
    try {
      JSCompiler_StaticMethods_saveHistory_$self.JSC$2638_storage_.set("__webmonitoring_RateThrottler_history_hourlyRate", JSON.stringify(JSCompiler_StaticMethods_saveHistory_$self.history_));
    } catch (e) {
    }
  }
}
const module$contents$webmonitoring$RateThrottler_RateThrottler = class {
  constructor(count, useLocalStorage) {
    this.JSC$2638_count_ = count;
    this.history_ = [];
    null === module$contents$webmonitoring$RateThrottler_RateThrottler$logger_ && (module$contents$webmonitoring$RateThrottler_RateThrottler$logger_ = null);
    this.JSC$2638_storage_ = null;
    useLocalStorage && (this.JSC$2638_storage_ = new goog$storage$mechanism$HTML5LocalStorage());
    if (JSCompiler_StaticMethods_isLocalStorageAvailable_(this) && (count = this.JSC$2638_storage_.get("__webmonitoring_RateThrottler_history_hourlyRate"), null != count)) {
      try {
        this.history_ = JSON.parse(count) || [];
      } catch (e) {
      }
    }
    count = !1;
    Array.isArray(this.history_) || (this.history_ = [], count = !0);
    for (; this.history_.length > this.JSC$2638_count_;) {
      this.history_.shift(), count = !0;
    }
    count && JSCompiler_StaticMethods_saveHistory_(this);
  }
};
var module$contents$webmonitoring$RateThrottler_RateThrottler$logger_ = null;
function module$contents$webmonitoring$Reporter_Reporter(monitoringConfig) {
  goog$Disposable.call(this);
  this.monitoringConfig_ = monitoringConfig;
  this.isEnabled_ = !1;
}
goog$inherits(module$contents$webmonitoring$Reporter_Reporter, goog$Disposable);
var goog$events$BrowserFeature$PASSIVE_EVENTS = function() {
  if (!goog$global.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var passive = !1, options = Object.defineProperty({}, "passive", {get:function() {
    passive = !0;
  }});
  try {
    const nullFunction = () => {
    };
    goog$global.addEventListener("test", nullFunction, options);
    goog$global.removeEventListener("test", nullFunction, options);
  } catch (e) {
  }
  return passive;
}();
function goog$events$BrowserEvent(opt_e, opt_currentTarget) {
  goog$events$Event.call(this, opt_e ? opt_e.type : "");
  this.relatedTarget = this.JSC$2369_currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.event_ = null;
  if (opt_e) {
    var type = this.type = opt_e.type, relevantTouch = opt_e.changedTouches && opt_e.changedTouches.length ? opt_e.changedTouches[0] : null;
    this.target = opt_e.target || opt_e.srcElement;
    this.JSC$2369_currentTarget = opt_currentTarget;
    if (opt_currentTarget = opt_e.relatedTarget) {
      if (goog$userAgent$GECKO) {
        a: {
          try {
            goog$reflect$sinkValue(opt_currentTarget.nodeName);
            var JSCompiler_inline_result = !0;
            break a;
          } catch (e) {
          }
          JSCompiler_inline_result = !1;
        }
        JSCompiler_inline_result || (opt_currentTarget = null);
      }
    } else {
      "mouseover" == type ? opt_currentTarget = opt_e.fromElement : "mouseout" == type && (opt_currentTarget = opt_e.toElement);
    }
    this.relatedTarget = opt_currentTarget;
    relevantTouch ? (this.clientX = void 0 !== relevantTouch.clientX ? relevantTouch.clientX : relevantTouch.pageX, this.clientY = void 0 !== relevantTouch.clientY ? relevantTouch.clientY : relevantTouch.pageY, this.screenX = relevantTouch.screenX || 0, this.screenY = relevantTouch.screenY || 0) : (this.clientX = void 0 !== opt_e.clientX ? opt_e.clientX : opt_e.pageX, this.clientY = void 0 !== opt_e.clientY ? opt_e.clientY : opt_e.pageY, this.screenX = opt_e.screenX || 0, this.screenY = opt_e.screenY || 
    0);
    this.button = opt_e.button;
    this.key = opt_e.key || "";
    this.ctrlKey = opt_e.ctrlKey;
    this.altKey = opt_e.altKey;
    this.shiftKey = opt_e.shiftKey;
    this.metaKey = opt_e.metaKey;
    this.pointerId = opt_e.pointerId || 0;
    this.pointerType = "string" === typeof opt_e.pointerType ? opt_e.pointerType : goog$events$BrowserEvent$IE_POINTER_TYPE_MAP[opt_e.pointerType] || "";
    this.state = opt_e.state;
    this.event_ = opt_e;
    opt_e.defaultPrevented && goog$events$BrowserEvent.superClass_.JSC$2371_preventDefault.call(this);
  }
}
goog$inherits(goog$events$BrowserEvent, goog$events$Event);
var goog$events$BrowserEvent$IE_POINTER_TYPE_MAP = {2:"touch", 3:"pen", 4:"mouse"};
goog$events$BrowserEvent.prototype.JSC$2371_preventDefault = function() {
  goog$events$BrowserEvent.superClass_.JSC$2371_preventDefault.call(this);
  var be = this.event_;
  be.preventDefault ? be.preventDefault() : be.returnValue = !1;
};
var goog$events$Listenable$IMPLEMENTED_BY_PROP = "closure_listenable_" + (1E6 * Math.random() | 0);
var goog$events$ListenableKey$counter_ = 0;
function goog$events$Listener(listener, src, type, capture, opt_handler) {
  this.listener = listener;
  this.proxy = null;
  this.src = src;
  this.type = type;
  this.capture = !!capture;
  this.handler = opt_handler;
  this.key = ++goog$events$ListenableKey$counter_;
  this.removed = this.callOnce = !1;
}
function JSCompiler_StaticMethods_markAsRemoved(JSCompiler_StaticMethods_markAsRemoved$self) {
  JSCompiler_StaticMethods_markAsRemoved$self.removed = !0;
  JSCompiler_StaticMethods_markAsRemoved$self.listener = null;
  JSCompiler_StaticMethods_markAsRemoved$self.proxy = null;
  JSCompiler_StaticMethods_markAsRemoved$self.src = null;
  JSCompiler_StaticMethods_markAsRemoved$self.handler = null;
}
;function goog$events$ListenerMap(src) {
  this.src = src;
  this.listeners = {};
  this.typeCount_ = 0;
}
goog$events$ListenerMap.prototype.add = function(type, listener, callOnce, opt_useCapture, opt_listenerScope) {
  var typeStr = type.toString();
  type = this.listeners[typeStr];
  type || (type = this.listeners[typeStr] = [], this.typeCount_++);
  var index = goog$events$ListenerMap$findListenerIndex_(type, listener, opt_useCapture, opt_listenerScope);
  -1 < index ? (listener = type[index], callOnce || (listener.callOnce = !1)) : (listener = new goog$events$Listener(listener, this.src, typeStr, !!opt_useCapture, opt_listenerScope), listener.callOnce = callOnce, type.push(listener));
  return listener;
};
goog$events$ListenerMap.prototype.remove = function(type, listener, opt_useCapture, opt_listenerScope) {
  type = type.toString();
  if (!(type in this.listeners)) {
    return !1;
  }
  var listenerArray = this.listeners[type];
  listener = goog$events$ListenerMap$findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
  return -1 < listener ? (JSCompiler_StaticMethods_markAsRemoved(listenerArray[listener]), module$contents$goog$array_removeAt(listenerArray, listener), 0 == listenerArray.length && (delete this.listeners[type], this.typeCount_--), !0) : !1;
};
function JSCompiler_StaticMethods_removeByKey(JSCompiler_StaticMethods_removeByKey$self, listener) {
  var type = listener.type;
  type in JSCompiler_StaticMethods_removeByKey$self.listeners && module$contents$goog$array_remove(JSCompiler_StaticMethods_removeByKey$self.listeners[type], listener) && (JSCompiler_StaticMethods_markAsRemoved(listener), 0 == JSCompiler_StaticMethods_removeByKey$self.listeners[type].length && (delete JSCompiler_StaticMethods_removeByKey$self.listeners[type], JSCompiler_StaticMethods_removeByKey$self.typeCount_--));
}
function goog$events$ListenerMap$findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope) {
  for (var i = 0; i < listenerArray.length; ++i) {
    var listenerObj = listenerArray[i];
    if (!listenerObj.removed && listenerObj.listener == listener && listenerObj.capture == !!opt_useCapture && listenerObj.handler == opt_listenerScope) {
      return i;
    }
  }
  return -1;
}
;var goog$events$LISTENER_MAP_PROP_ = "closure_lm_" + (1E6 * Math.random() | 0), goog$events$onStringMap_ = {}, goog$events$listenerCountEstimate_ = 0;
function goog$events$listen(src, type, listener, opt_options, opt_handler) {
  if (opt_options && opt_options.once) {
    goog$events$listenOnce(src, type, listener, opt_options, opt_handler);
  } else {
    if (Array.isArray(type)) {
      for (var i = 0; i < type.length; i++) {
        goog$events$listen(src, type[i], listener, opt_options, opt_handler);
      }
    } else {
      listener = goog$events$wrapListener(listener), src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP] ? src.eventTargetListeners_.add(String(type), listener, !1, goog$isObject(opt_options) ? !!opt_options.capture : !!opt_options, opt_handler) : goog$events$listen_(src, type, listener, !1, opt_options, opt_handler);
    }
  }
}
function goog$events$listen_(src, type, listener, callOnce, opt_options, opt_handler) {
  if (!type) {
    throw Error("Invalid event type");
  }
  var capture = goog$isObject(opt_options) ? !!opt_options.capture : !!opt_options, listenerMap = goog$events$getListenerMap_(src);
  listenerMap || (src[goog$events$LISTENER_MAP_PROP_] = listenerMap = new goog$events$ListenerMap(src));
  listener = listenerMap.add(type, listener, callOnce, capture, opt_handler);
  if (!listener.proxy) {
    callOnce = goog$events$getProxy();
    listener.proxy = callOnce;
    callOnce.src = src;
    callOnce.listener = listener;
    if (src.addEventListener) {
      goog$events$BrowserFeature$PASSIVE_EVENTS || (opt_options = capture), void 0 === opt_options && (opt_options = !1), src.addEventListener(type.toString(), callOnce, opt_options);
    } else if (src.attachEvent) {
      src.attachEvent(goog$events$getOnString_(type.toString()), callOnce);
    } else if (src.addListener && src.removeListener) {
      src.addListener(callOnce);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
    goog$events$listenerCountEstimate_++;
  }
}
function goog$events$getProxy() {
  function f(eventObject) {
    return proxyCallbackFunction.call(f.src, f.listener, eventObject);
  }
  const proxyCallbackFunction = goog$events$handleBrowserEvent_;
  return f;
}
function goog$events$listenOnce(src, type, listener, opt_options, opt_handler) {
  if (Array.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      goog$events$listenOnce(src, type[i], listener, opt_options, opt_handler);
    }
  } else {
    listener = goog$events$wrapListener(listener), src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP] ? src.eventTargetListeners_.add(String(type), listener, !0, goog$isObject(opt_options) ? !!opt_options.capture : !!opt_options, opt_handler) : goog$events$listen_(src, type, listener, !0, opt_options, opt_handler);
  }
}
function goog$events$unlisten(src, type, listener, opt_options, opt_handler) {
  if (Array.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      goog$events$unlisten(src, type[i], listener, opt_options, opt_handler);
    }
  } else {
    (opt_options = goog$isObject(opt_options) ? !!opt_options.capture : !!opt_options, listener = goog$events$wrapListener(listener), src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP]) ? src.eventTargetListeners_.remove(String(type), listener, opt_options, opt_handler) : src && (src = goog$events$getListenerMap_(src)) && (type = src.listeners[type.toString()], src = -1, type && (src = goog$events$ListenerMap$findListenerIndex_(type, listener, opt_options, opt_handler)), (listener = -1 < src ? 
    type[src] : null) && goog$events$unlistenByKey(listener));
  }
}
function goog$events$unlistenByKey(key) {
  if ("number" !== typeof key && key && !key.removed) {
    var src = key.src;
    if (src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP]) {
      JSCompiler_StaticMethods_removeByKey(src.eventTargetListeners_, key);
    } else {
      var type = key.type, proxy = key.proxy;
      src.removeEventListener ? src.removeEventListener(type, proxy, key.capture) : src.detachEvent ? src.detachEvent(goog$events$getOnString_(type), proxy) : src.addListener && src.removeListener && src.removeListener(proxy);
      goog$events$listenerCountEstimate_--;
      (type = goog$events$getListenerMap_(src)) ? (JSCompiler_StaticMethods_removeByKey(type, key), 0 == type.typeCount_ && (type.src = null, src[goog$events$LISTENER_MAP_PROP_] = null)) : JSCompiler_StaticMethods_markAsRemoved(key);
    }
  }
}
function goog$events$getOnString_(type) {
  return type in goog$events$onStringMap_ ? goog$events$onStringMap_[type] : goog$events$onStringMap_[type] = "on" + type;
}
function goog$events$handleBrowserEvent_(listener, opt_evt) {
  if (listener.removed) {
    listener = !0;
  } else {
    opt_evt = new goog$events$BrowserEvent(opt_evt, this);
    var listenerFn = listener.listener, listenerHandler = listener.handler || listener.src;
    listener.callOnce && goog$events$unlistenByKey(listener);
    listener = listenerFn.call(listenerHandler, opt_evt);
  }
  return listener;
}
function goog$events$getListenerMap_(src) {
  src = src[goog$events$LISTENER_MAP_PROP_];
  return src instanceof goog$events$ListenerMap ? src : null;
}
var goog$events$LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function goog$events$wrapListener(listener) {
  if ("function" === typeof listener) {
    return listener;
  }
  listener[goog$events$LISTENER_WRAPPER_PROP_] || (listener[goog$events$LISTENER_WRAPPER_PROP_] = function(e) {
    return listener.handleEvent(e);
  });
  return listener[goog$events$LISTENER_WRAPPER_PROP_];
}
;function goog$events$EventTarget() {
  goog$Disposable.call(this);
  this.eventTargetListeners_ = new goog$events$ListenerMap(this);
  this.actualEventTarget_ = this;
  this.parentEventTarget_ = null;
}
goog$inherits(goog$events$EventTarget, goog$Disposable);
goog$events$EventTarget.prototype[goog$events$Listenable$IMPLEMENTED_BY_PROP] = !0;
goog$events$EventTarget.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog$events$listen(this, type, handler, opt_capture, opt_handlerScope);
};
goog$events$EventTarget.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog$events$unlisten(this, type, handler, opt_capture, opt_handlerScope);
};
function JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self, e) {
  var ancestorsTree, ancestor = JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self.parentEventTarget_;
  if (ancestor) {
    for (ancestorsTree = []; ancestor; ancestor = ancestor.parentEventTarget_) {
      ancestorsTree.push(ancestor);
    }
  }
  JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self = JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self.actualEventTarget_;
  ancestor = e.type || e;
  if ("string" === typeof e) {
    e = new goog$events$Event(e, JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self);
  } else if (e instanceof goog$events$Event) {
    e.target = e.target || JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self;
  } else {
    var oldEvent = e;
    e = new goog$events$Event(ancestor, JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self);
    module$contents$goog$object_extend(e, oldEvent);
  }
  oldEvent = !0;
  if (ancestorsTree) {
    for (var i = ancestorsTree.length - 1; 0 <= i; i--) {
      var currentTarget = e.JSC$2369_currentTarget = ancestorsTree[i];
      oldEvent = JSCompiler_StaticMethods_fireListeners(currentTarget, ancestor, !0, e) && oldEvent;
    }
  }
  currentTarget = e.JSC$2369_currentTarget = JSCompiler_StaticMethods_JSC$2756_dispatchEvent$self;
  oldEvent = JSCompiler_StaticMethods_fireListeners(currentTarget, ancestor, !0, e) && oldEvent;
  oldEvent = JSCompiler_StaticMethods_fireListeners(currentTarget, ancestor, !1, e) && oldEvent;
  if (ancestorsTree) {
    for (i = 0; i < ancestorsTree.length; i++) {
      currentTarget = e.JSC$2369_currentTarget = ancestorsTree[i], oldEvent = JSCompiler_StaticMethods_fireListeners(currentTarget, ancestor, !1, e) && oldEvent;
    }
  }
}
goog$events$EventTarget.prototype.disposeInternal = function() {
  goog$events$EventTarget.superClass_.disposeInternal.call(this);
  if (this.eventTargetListeners_) {
    var JSCompiler_StaticMethods_removeAll$self = this.eventTargetListeners_, count = 0, type;
    for (type in JSCompiler_StaticMethods_removeAll$self.listeners) {
      for (var listenerArray = JSCompiler_StaticMethods_removeAll$self.listeners[type], i = 0; i < listenerArray.length; i++) {
        ++count, JSCompiler_StaticMethods_markAsRemoved(listenerArray[i]);
      }
      delete JSCompiler_StaticMethods_removeAll$self.listeners[type];
      JSCompiler_StaticMethods_removeAll$self.typeCount_--;
    }
  }
  this.parentEventTarget_ = null;
};
function JSCompiler_StaticMethods_fireListeners(JSCompiler_StaticMethods_fireListeners$self, type, capture, eventObject) {
  type = JSCompiler_StaticMethods_fireListeners$self.eventTargetListeners_.listeners[String(type)];
  if (!type) {
    return !0;
  }
  type = type.concat();
  for (var rv = !0, i = 0; i < type.length; ++i) {
    var listener = type[i];
    if (listener && !listener.removed && listener.capture == capture) {
      var listenerFn = listener.listener, listenerHandler = listener.handler || listener.src;
      listener.callOnce && JSCompiler_StaticMethods_removeByKey(JSCompiler_StaticMethods_fireListeners$self.eventTargetListeners_, listener);
      rv = !1 !== listenerFn.call(listenerHandler, eventObject) && rv;
    }
  }
  return rv && !eventObject.defaultPrevented;
}
;function goog$net$XmlHttpFactory() {
}
goog$net$XmlHttpFactory.prototype.cachedOptions_ = null;
function JSCompiler_StaticMethods_getOptions(JSCompiler_StaticMethods_getOptions$self) {
  var JSCompiler_temp;
  (JSCompiler_temp = JSCompiler_StaticMethods_getOptions$self.cachedOptions_) || (JSCompiler_temp = {}, JSCompiler_StaticMethods_getProgId_(JSCompiler_StaticMethods_getOptions$self) && (JSCompiler_temp[0] = !0, JSCompiler_temp[1] = !0), JSCompiler_temp = JSCompiler_StaticMethods_getOptions$self.cachedOptions_ = JSCompiler_temp);
  return JSCompiler_temp;
}
;var goog$net$XmlHttp$factory_;
function goog$net$DefaultXmlHttpFactory() {
}
goog$inherits(goog$net$DefaultXmlHttpFactory, goog$net$XmlHttpFactory);
function JSCompiler_StaticMethods_createInstance(JSCompiler_StaticMethods_createInstance$self) {
  return (JSCompiler_StaticMethods_createInstance$self = JSCompiler_StaticMethods_getProgId_(JSCompiler_StaticMethods_createInstance$self)) ? new ActiveXObject(JSCompiler_StaticMethods_createInstance$self) : new XMLHttpRequest();
}
function JSCompiler_StaticMethods_getProgId_(JSCompiler_StaticMethods_getProgId_$self) {
  if (!JSCompiler_StaticMethods_getProgId_$self.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    const ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (let i = 0; i < ACTIVE_X_IDENTS.length; i++) {
      const candidate = ACTIVE_X_IDENTS[i];
      try {
        return new ActiveXObject(candidate), JSCompiler_StaticMethods_getProgId_$self.ieProgId_ = candidate;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return JSCompiler_StaticMethods_getProgId_$self.ieProgId_;
}
goog$net$XmlHttp$factory_ = new goog$net$DefaultXmlHttpFactory();
function goog$Timer$callOnce(listener, opt_delay, opt_handler) {
  if ("function" === typeof listener) {
    opt_handler && (listener = goog$bind(listener, opt_handler));
  } else if (listener && "function" == typeof listener.handleEvent) {
    listener = goog$bind(listener.handleEvent, listener);
  } else {
    throw Error("Invalid listener argument");
  }
  return 2147483647 < Number(opt_delay) ? -1 : goog$global.setTimeout(listener, opt_delay || 0);
}
;var goog$uri$utils$splitRe_ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function goog$uri$utils$parseQueryData(encodedQuery, callback) {
  if (encodedQuery) {
    encodedQuery = encodedQuery.split("&");
    for (var i = 0; i < encodedQuery.length; i++) {
      var indexOfEquals = encodedQuery[i].indexOf("="), value = null;
      if (0 <= indexOfEquals) {
        var name = encodedQuery[i].substring(0, indexOfEquals);
        value = encodedQuery[i].substring(indexOfEquals + 1);
      } else {
        name = encodedQuery[i];
      }
      callback(name, value ? decodeURIComponent(value.replace(/\+/g, " ")) : "");
    }
  }
}
;function goog$net$XhrIo(opt_xmlHttpFactory) {
  goog$events$EventTarget.call(this);
  this.headers = new Map();
  this.xmlHttpFactory_ = opt_xmlHttpFactory || null;
  this.active_ = !1;
  this.xhrOptions_ = this.xhr_ = null;
  this.lastUri_ = "";
  this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
  this.timeoutInterval_ = 0;
  this.timeoutId_ = null;
  this.responseType_ = "";
  this.useXhr2Timeout_ = this.withCredentials_ = !1;
}
goog$inherits(goog$net$XhrIo, goog$events$EventTarget);
var goog$net$XhrIo$HTTP_SCHEME_PATTERN = /^https?$/i, goog$net$XhrIo$METHODS_WITH_FORM_DATA = ["POST", "PUT"], goog$net$XhrIo$sendInstances_ = [];
goog$net$XhrIo.prototype.cleanupSend_ = function() {
  this.disposed_ || (this.disposed_ = !0, this.disposeInternal());
  module$contents$goog$array_remove(goog$net$XhrIo$sendInstances_, this);
};
function JSCompiler_StaticMethods_JSC$2702_send(JSCompiler_StaticMethods_JSC$2702_send$self, url, opt_content, opt_headers) {
  if (JSCompiler_StaticMethods_JSC$2702_send$self.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + JSCompiler_StaticMethods_JSC$2702_send$self.lastUri_ + "; newUri=" + url);
  }
  JSCompiler_StaticMethods_JSC$2702_send$self.lastUri_ = url;
  JSCompiler_StaticMethods_JSC$2702_send$self.errorDispatched_ = !1;
  JSCompiler_StaticMethods_JSC$2702_send$self.active_ = !0;
  JSCompiler_StaticMethods_JSC$2702_send$self.xhr_ = JSCompiler_StaticMethods_JSC$2702_send$self.xmlHttpFactory_ ? JSCompiler_StaticMethods_createInstance(JSCompiler_StaticMethods_JSC$2702_send$self.xmlHttpFactory_) : JSCompiler_StaticMethods_createInstance(goog$net$XmlHttp$factory_);
  JSCompiler_StaticMethods_JSC$2702_send$self.xhrOptions_ = JSCompiler_StaticMethods_JSC$2702_send$self.xmlHttpFactory_ ? JSCompiler_StaticMethods_getOptions(JSCompiler_StaticMethods_JSC$2702_send$self.xmlHttpFactory_) : JSCompiler_StaticMethods_getOptions(goog$net$XmlHttp$factory_);
  JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.onreadystatechange = goog$bind(JSCompiler_StaticMethods_JSC$2702_send$self.onReadyStateChange_, JSCompiler_StaticMethods_JSC$2702_send$self);
  try {
    JSCompiler_StaticMethods_JSC$2702_send$self.inOpen_ = !0, JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.open("POST", String(url), !0), JSCompiler_StaticMethods_JSC$2702_send$self.inOpen_ = !1;
  } catch (err) {
    JSCompiler_StaticMethods_error_(JSCompiler_StaticMethods_JSC$2702_send$self);
    return;
  }
  url = opt_content || "";
  opt_content = new Map(JSCompiler_StaticMethods_JSC$2702_send$self.headers);
  if (opt_headers) {
    if (Object.getPrototypeOf(opt_headers) === Object.prototype) {
      for (var key in opt_headers) {
        opt_content.set(key, opt_headers[key]);
      }
    } else if ("function" === typeof opt_headers.keys && "function" === typeof opt_headers.get) {
      for (const key of opt_headers.keys()) {
        opt_content.set(key, opt_headers.get(key));
      }
    } else {
      throw Error("Unknown input type for opt_headers: " + String(opt_headers));
    }
  }
  opt_headers = Array.from(opt_content.keys()).find(header => "content-type" == header.toLowerCase());
  key = goog$global.FormData && url instanceof goog$global.FormData;
  !(0 <= module$contents$goog$array_indexOf(goog$net$XhrIo$METHODS_WITH_FORM_DATA, "POST")) || opt_headers || key || opt_content.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [key, value] of opt_content) {
    JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.setRequestHeader(key, value);
  }
  JSCompiler_StaticMethods_JSC$2702_send$self.responseType_ && (JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.responseType = JSCompiler_StaticMethods_JSC$2702_send$self.responseType_);
  "withCredentials" in JSCompiler_StaticMethods_JSC$2702_send$self.xhr_ && JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.withCredentials !== JSCompiler_StaticMethods_JSC$2702_send$self.withCredentials_ && (JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.withCredentials = JSCompiler_StaticMethods_JSC$2702_send$self.withCredentials_);
  try {
    JSCompiler_StaticMethods_cleanUpTimeoutTimer_(JSCompiler_StaticMethods_JSC$2702_send$self), 0 < JSCompiler_StaticMethods_JSC$2702_send$self.timeoutInterval_ && (JSCompiler_StaticMethods_JSC$2702_send$self.useXhr2Timeout_ = goog$net$XhrIo$shouldUseXhr2Timeout_(JSCompiler_StaticMethods_JSC$2702_send$self.xhr_), JSCompiler_StaticMethods_JSC$2702_send$self.useXhr2Timeout_ ? (JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.timeout = JSCompiler_StaticMethods_JSC$2702_send$self.timeoutInterval_, JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.ontimeout = 
    goog$bind(JSCompiler_StaticMethods_JSC$2702_send$self.timeout_, JSCompiler_StaticMethods_JSC$2702_send$self)) : JSCompiler_StaticMethods_JSC$2702_send$self.timeoutId_ = goog$Timer$callOnce(JSCompiler_StaticMethods_JSC$2702_send$self.timeout_, JSCompiler_StaticMethods_JSC$2702_send$self.timeoutInterval_, JSCompiler_StaticMethods_JSC$2702_send$self)), JSCompiler_StaticMethods_JSC$2702_send$self.inSend_ = !0, JSCompiler_StaticMethods_JSC$2702_send$self.xhr_.send(url), JSCompiler_StaticMethods_JSC$2702_send$self.inSend_ = 
    !1;
  } catch (err) {
    JSCompiler_StaticMethods_error_(JSCompiler_StaticMethods_JSC$2702_send$self);
  }
}
function goog$net$XhrIo$shouldUseXhr2Timeout_(xhr) {
  return goog$userAgent$IE && "number" === typeof xhr.timeout && void 0 !== xhr.ontimeout;
}
goog$net$XhrIo.prototype.timeout_ = function() {
  "undefined" != typeof goog && this.xhr_ && (JSCompiler_StaticMethods_JSC$2756_dispatchEvent(this, "timeout"), this.abort(8));
};
function JSCompiler_StaticMethods_error_(JSCompiler_StaticMethods_error_$self) {
  JSCompiler_StaticMethods_error_$self.active_ = !1;
  JSCompiler_StaticMethods_error_$self.xhr_ && (JSCompiler_StaticMethods_error_$self.inAbort_ = !0, JSCompiler_StaticMethods_error_$self.xhr_.abort(), JSCompiler_StaticMethods_error_$self.inAbort_ = !1);
  JSCompiler_StaticMethods_dispatchErrors_(JSCompiler_StaticMethods_error_$self);
  JSCompiler_StaticMethods_cleanUpXhr_(JSCompiler_StaticMethods_error_$self);
}
function JSCompiler_StaticMethods_dispatchErrors_(JSCompiler_StaticMethods_dispatchErrors_$self) {
  JSCompiler_StaticMethods_dispatchErrors_$self.errorDispatched_ || (JSCompiler_StaticMethods_dispatchErrors_$self.errorDispatched_ = !0, JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_dispatchErrors_$self, "complete"), JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_dispatchErrors_$self, "error"));
}
goog$net$XhrIo.prototype.abort = function() {
  this.xhr_ && this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, JSCompiler_StaticMethods_JSC$2756_dispatchEvent(this, "complete"), JSCompiler_StaticMethods_JSC$2756_dispatchEvent(this, "abort"), JSCompiler_StaticMethods_cleanUpXhr_(this));
};
goog$net$XhrIo.prototype.disposeInternal = function() {
  this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), JSCompiler_StaticMethods_cleanUpXhr_(this, !0));
  goog$net$XhrIo.superClass_.disposeInternal.call(this);
};
goog$net$XhrIo.prototype.onReadyStateChange_ = function() {
  if (!this.disposed_) {
    if (this.inOpen_ || this.inSend_ || this.inAbort_) {
      JSCompiler_StaticMethods_onReadyStateChangeHelper_(this);
    } else {
      this.onReadyStateChangeEntryPoint_();
    }
  }
};
goog$net$XhrIo.prototype.onReadyStateChangeEntryPoint_ = function() {
  JSCompiler_StaticMethods_onReadyStateChangeHelper_(this);
};
function JSCompiler_StaticMethods_onReadyStateChangeHelper_(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self) {
  if (JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.active_ && "undefined" != typeof goog && (!JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhrOptions_[1] || 4 != (JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_ ? JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_.readyState : 0) || 2 != JSCompiler_StaticMethods_getStatus(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self))) {
    if (JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.inSend_ && 4 == (JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_ ? JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_.readyState : 0)) {
      goog$Timer$callOnce(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.onReadyStateChange_, 0, JSCompiler_StaticMethods_onReadyStateChangeHelper_$self);
    } else {
      if (JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self, "readystatechange"), 4 == (JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_ ? JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.xhr_.readyState : 0)) {
        JSCompiler_StaticMethods_onReadyStateChangeHelper_$self.active_ = !1;
        try {
          JSCompiler_StaticMethods_isSuccess(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self) ? (JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self, "complete"), JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self, "success")) : JSCompiler_StaticMethods_dispatchErrors_(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self);
        } finally {
          JSCompiler_StaticMethods_cleanUpXhr_(JSCompiler_StaticMethods_onReadyStateChangeHelper_$self);
        }
      }
    }
  }
}
function JSCompiler_StaticMethods_cleanUpXhr_(JSCompiler_StaticMethods_cleanUpXhr_$self, opt_fromDispose) {
  if (JSCompiler_StaticMethods_cleanUpXhr_$self.xhr_) {
    JSCompiler_StaticMethods_cleanUpTimeoutTimer_(JSCompiler_StaticMethods_cleanUpXhr_$self);
    const xhr = JSCompiler_StaticMethods_cleanUpXhr_$self.xhr_, clearedOnReadyStateChange = JSCompiler_StaticMethods_cleanUpXhr_$self.xhrOptions_[0] ? () => {
    } : null;
    JSCompiler_StaticMethods_cleanUpXhr_$self.xhr_ = null;
    JSCompiler_StaticMethods_cleanUpXhr_$self.xhrOptions_ = null;
    opt_fromDispose || JSCompiler_StaticMethods_JSC$2756_dispatchEvent(JSCompiler_StaticMethods_cleanUpXhr_$self, "ready");
    try {
      xhr.onreadystatechange = clearedOnReadyStateChange;
    } catch (e) {
    }
  }
}
function JSCompiler_StaticMethods_cleanUpTimeoutTimer_(JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self) {
  JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.xhr_ && JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.useXhr2Timeout_ && (JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.xhr_.ontimeout = null);
  JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.timeoutId_ && (goog$global.clearTimeout(JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.timeoutId_), JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self.timeoutId_ = null);
}
goog$net$XhrIo.prototype.isActive = function() {
  return !!this.xhr_;
};
function JSCompiler_StaticMethods_isSuccess(JSCompiler_StaticMethods_isSuccess$self) {
  var status = JSCompiler_StaticMethods_getStatus(JSCompiler_StaticMethods_isSuccess$self);
  a: {
    switch(status) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var JSCompiler_inline_result = !0;
        break a;
      default:
        JSCompiler_inline_result = !1;
    }
  }
  if (!JSCompiler_inline_result) {
    if (status = 0 === status) {
      JSCompiler_StaticMethods_isSuccess$self = String(JSCompiler_StaticMethods_isSuccess$self.lastUri_).match(goog$uri$utils$splitRe_)[1] || null, !JSCompiler_StaticMethods_isSuccess$self && goog$global.self && goog$global.self.location && (JSCompiler_StaticMethods_isSuccess$self = goog$global.self.location.protocol.slice(0, -1)), status = !goog$net$XhrIo$HTTP_SCHEME_PATTERN.test(JSCompiler_StaticMethods_isSuccess$self ? JSCompiler_StaticMethods_isSuccess$self.toLowerCase() : "");
    }
    JSCompiler_inline_result = status;
  }
  return JSCompiler_inline_result;
}
function JSCompiler_StaticMethods_getStatus(JSCompiler_StaticMethods_getStatus$self) {
  try {
    return 2 < (JSCompiler_StaticMethods_getStatus$self.xhr_ ? JSCompiler_StaticMethods_getStatus$self.xhr_.readyState : 0) ? JSCompiler_StaticMethods_getStatus$self.xhr_.status : -1;
  } catch (e) {
    return -1;
  }
}
;function goog$Uri(opt_uri) {
  this.domain_ = this.userInfo_ = this.scheme_ = "";
  this.port_ = null;
  this.fragment_ = this.path_ = "";
  this.JSC$2707_ignoreCase_ = !1;
  var m;
  opt_uri instanceof goog$Uri ? (this.JSC$2707_ignoreCase_ = opt_uri.JSC$2707_ignoreCase_, JSCompiler_StaticMethods_setScheme(this, opt_uri.scheme_), this.userInfo_ = opt_uri.userInfo_, this.domain_ = opt_uri.domain_, JSCompiler_StaticMethods_setPort(this, opt_uri.port_), this.path_ = opt_uri.getPath(), JSCompiler_StaticMethods_setQueryData(this, opt_uri.queryData_.clone()), this.fragment_ = opt_uri.fragment_) : opt_uri && (m = String(opt_uri).match(goog$uri$utils$splitRe_)) ? (this.JSC$2707_ignoreCase_ = 
  !1, JSCompiler_StaticMethods_setScheme(this, m[1] || "", !0), this.userInfo_ = goog$Uri$decodeOrEmpty_(m[2] || ""), this.domain_ = goog$Uri$decodeOrEmpty_(m[3] || "", !0), JSCompiler_StaticMethods_setPort(this, m[4]), this.path_ = goog$Uri$decodeOrEmpty_(m[5] || "", !0), JSCompiler_StaticMethods_setQueryData(this, m[6] || "", !0), this.fragment_ = goog$Uri$decodeOrEmpty_(m[7] || "")) : (this.JSC$2707_ignoreCase_ = !1, this.queryData_ = new goog$Uri$QueryData(null, this.JSC$2707_ignoreCase_));
}
goog$Uri.prototype.toString = function() {
  var out = [], scheme = this.scheme_;
  scheme && out.push(goog$Uri$encodeSpecialChars_(scheme, goog$Uri$reDisallowedInSchemeOrUserInfo_, !0), ":");
  var domain = this.domain_;
  if (domain || "file" == scheme) {
    out.push("//"), (scheme = this.userInfo_) && out.push(goog$Uri$encodeSpecialChars_(scheme, goog$Uri$reDisallowedInSchemeOrUserInfo_, !0), "@"), out.push(encodeURIComponent(String(domain)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), domain = this.port_, null != domain && out.push(":", String(domain));
  }
  if (domain = this.getPath()) {
    this.domain_ && "/" != domain.charAt(0) && out.push("/"), out.push(goog$Uri$encodeSpecialChars_(domain, "/" == domain.charAt(0) ? goog$Uri$reDisallowedInAbsolutePath_ : goog$Uri$reDisallowedInRelativePath_, !0));
  }
  (domain = this.queryData_.toString()) && out.push("?", domain);
  (domain = this.fragment_) && out.push("#", goog$Uri$encodeSpecialChars_(domain, goog$Uri$reDisallowedInFragment_));
  return out.join("");
};
goog$Uri.prototype.clone = function() {
  return new goog$Uri(this);
};
function JSCompiler_StaticMethods_setScheme(JSCompiler_StaticMethods_setScheme$self, newScheme, opt_decode) {
  JSCompiler_StaticMethods_setScheme$self.scheme_ = opt_decode ? goog$Uri$decodeOrEmpty_(newScheme, !0) : newScheme;
  JSCompiler_StaticMethods_setScheme$self.scheme_ && (JSCompiler_StaticMethods_setScheme$self.scheme_ = JSCompiler_StaticMethods_setScheme$self.scheme_.replace(/:$/, ""));
}
function JSCompiler_StaticMethods_setPort(JSCompiler_StaticMethods_setPort$self, newPort) {
  if (newPort) {
    newPort = Number(newPort);
    if (isNaN(newPort) || 0 > newPort) {
      throw Error("Bad port number " + newPort);
    }
    JSCompiler_StaticMethods_setPort$self.port_ = newPort;
  } else {
    JSCompiler_StaticMethods_setPort$self.port_ = null;
  }
}
goog$Uri.prototype.getPath = function() {
  return this.path_;
};
function JSCompiler_StaticMethods_setQueryData(JSCompiler_StaticMethods_setQueryData$self, queryData, opt_decode) {
  queryData instanceof goog$Uri$QueryData ? (JSCompiler_StaticMethods_setQueryData$self.queryData_ = queryData, JSCompiler_StaticMethods_JSC$2712_setIgnoreCase(JSCompiler_StaticMethods_setQueryData$self.queryData_, JSCompiler_StaticMethods_setQueryData$self.JSC$2707_ignoreCase_)) : (opt_decode || (queryData = goog$Uri$encodeSpecialChars_(queryData, goog$Uri$reDisallowedInQuery_)), JSCompiler_StaticMethods_setQueryData$self.queryData_ = new goog$Uri$QueryData(queryData, JSCompiler_StaticMethods_setQueryData$self.JSC$2707_ignoreCase_));
}
function goog$Uri$decodeOrEmpty_(val, opt_preserveReserved) {
  return val ? opt_preserveReserved ? decodeURI(val.replace(/%25/g, "%2525")) : decodeURIComponent(val) : "";
}
function goog$Uri$encodeSpecialChars_(unescapedPart, extra, opt_removeDoubleEncoding) {
  return "string" === typeof unescapedPart ? (unescapedPart = encodeURI(unescapedPart).replace(extra, goog$Uri$encodeChar_), opt_removeDoubleEncoding && (unescapedPart = unescapedPart.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), unescapedPart) : null;
}
function goog$Uri$encodeChar_(ch) {
  ch = ch.charCodeAt(0);
  return "%" + (ch >> 4 & 15).toString(16) + (ch & 15).toString(16);
}
var goog$Uri$reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g, goog$Uri$reDisallowedInRelativePath_ = /[#\?:]/g, goog$Uri$reDisallowedInAbsolutePath_ = /[#\?]/g, goog$Uri$reDisallowedInQuery_ = /[#\?@]/g, goog$Uri$reDisallowedInFragment_ = /#/g;
function goog$Uri$QueryData(opt_query, opt_ignoreCase) {
  this.JSC$2708_count_ = this.keyMap_ = null;
  this.encodedQuery_ = opt_query || null;
  this.JSC$2708_ignoreCase_ = !!opt_ignoreCase;
}
function JSCompiler_StaticMethods_ensureKeyMapInitialized_(JSCompiler_StaticMethods_ensureKeyMapInitialized_$self) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.keyMap_ || (JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.keyMap_ = new Map(), JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.JSC$2708_count_ = 0, JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.encodedQuery_ && goog$uri$utils$parseQueryData(JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.encodedQuery_, function(name, value) {
    JSCompiler_StaticMethods_ensureKeyMapInitialized_$self.add(decodeURIComponent(name.replace(/\+/g, " ")), value);
  }));
}
goog$Uri$QueryData.prototype.add = function(key, value) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(this);
  this.encodedQuery_ = null;
  key = JSCompiler_StaticMethods_getKeyName_(this, key);
  var values = this.keyMap_.get(key);
  values || this.keyMap_.set(key, values = []);
  values.push(value);
  this.JSC$2708_count_ += 1;
  return this;
};
goog$Uri$QueryData.prototype.remove = function(key) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(this);
  key = JSCompiler_StaticMethods_getKeyName_(this, key);
  return this.keyMap_.has(key) ? (this.encodedQuery_ = null, this.JSC$2708_count_ -= this.keyMap_.get(key).length, this.keyMap_.delete(key)) : !1;
};
function JSCompiler_StaticMethods_containsKey(JSCompiler_StaticMethods_containsKey$self, key) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(JSCompiler_StaticMethods_containsKey$self);
  key = JSCompiler_StaticMethods_getKeyName_(JSCompiler_StaticMethods_containsKey$self, key);
  return JSCompiler_StaticMethods_containsKey$self.keyMap_.has(key);
}
goog$Uri$QueryData.prototype.forEach = function(f, opt_scope) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(this);
  this.keyMap_.forEach(function(values, key) {
    values.forEach(function(value) {
      f.call(opt_scope, value, key, this);
    }, this);
  }, this);
};
function JSCompiler_StaticMethods_getValues(JSCompiler_StaticMethods_getValues$self, opt_key) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(JSCompiler_StaticMethods_getValues$self);
  let rv = [];
  if ("string" === typeof opt_key) {
    JSCompiler_StaticMethods_containsKey(JSCompiler_StaticMethods_getValues$self, opt_key) && (rv = rv.concat(JSCompiler_StaticMethods_getValues$self.keyMap_.get(JSCompiler_StaticMethods_getKeyName_(JSCompiler_StaticMethods_getValues$self, opt_key))));
  } else {
    for (JSCompiler_StaticMethods_getValues$self = Array.from(JSCompiler_StaticMethods_getValues$self.keyMap_.values()), opt_key = 0; opt_key < JSCompiler_StaticMethods_getValues$self.length; opt_key++) {
      rv = rv.concat(JSCompiler_StaticMethods_getValues$self[opt_key]);
    }
  }
  return rv;
}
goog$Uri$QueryData.prototype.set = function(key, value) {
  JSCompiler_StaticMethods_ensureKeyMapInitialized_(this);
  this.encodedQuery_ = null;
  key = JSCompiler_StaticMethods_getKeyName_(this, key);
  JSCompiler_StaticMethods_containsKey(this, key) && (this.JSC$2708_count_ -= this.keyMap_.get(key).length);
  this.keyMap_.set(key, [value]);
  this.JSC$2708_count_ += 1;
  return this;
};
goog$Uri$QueryData.prototype.get = function(key, opt_default) {
  if (!key) {
    return opt_default;
  }
  key = JSCompiler_StaticMethods_getValues(this, key);
  return 0 < key.length ? String(key[0]) : opt_default;
};
goog$Uri$QueryData.prototype.toString = function() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  const sb = [], keys = Array.from(this.keyMap_.keys());
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    const encodedKey = encodeURIComponent(String(key)), val = JSCompiler_StaticMethods_getValues(this, key);
    for (key = 0; key < val.length; key++) {
      var param = encodedKey;
      "" !== val[key] && (param += "=" + encodeURIComponent(String(val[key])));
      sb.push(param);
    }
  }
  return this.encodedQuery_ = sb.join("&");
};
goog$Uri$QueryData.prototype.clone = function() {
  var rv = new goog$Uri$QueryData();
  rv.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && (rv.keyMap_ = new Map(this.keyMap_), rv.JSC$2708_count_ = this.JSC$2708_count_);
  return rv;
};
function JSCompiler_StaticMethods_getKeyName_(JSCompiler_StaticMethods_getKeyName_$self, arg) {
  arg = String(arg);
  JSCompiler_StaticMethods_getKeyName_$self.JSC$2708_ignoreCase_ && (arg = arg.toLowerCase());
  return arg;
}
function JSCompiler_StaticMethods_JSC$2712_setIgnoreCase(JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self, ignoreCase) {
  ignoreCase && !JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self.JSC$2708_ignoreCase_ && (JSCompiler_StaticMethods_ensureKeyMapInitialized_(JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self), JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self.encodedQuery_ = null, JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self.keyMap_.forEach(function(value, key) {
    var lowerCase = key.toLowerCase();
    if (key != lowerCase && (this.remove(key), this.remove(lowerCase), 0 < value.length)) {
      this.encodedQuery_ = null;
      key = this.keyMap_;
      var JSCompiler_temp_const = key.set;
      lowerCase = JSCompiler_StaticMethods_getKeyName_(this, lowerCase);
      var JSCompiler_inline_result = value.length;
      if (0 < JSCompiler_inline_result) {
        const rv = Array(JSCompiler_inline_result);
        for (let i = 0; i < JSCompiler_inline_result; i++) {
          rv[i] = value[i];
        }
        JSCompiler_inline_result = rv;
      } else {
        JSCompiler_inline_result = [];
      }
      JSCompiler_temp_const.call(key, lowerCase, JSCompiler_inline_result);
      this.JSC$2708_count_ += value.length;
    }
  }, JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self));
  JSCompiler_StaticMethods_JSC$2712_setIgnoreCase$self.JSC$2708_ignoreCase_ = ignoreCase;
}
;var goog$userAgent$product$FIREFOX = module$contents$goog$labs$userAgent$browser_matchFirefox(), goog$userAgent$product$IPHONE = module$contents$goog$labs$userAgent$platform_isIphone() || module$contents$goog$labs$userAgent$util_matchUserAgent("iPod"), goog$userAgent$product$IPAD = module$contents$goog$labs$userAgent$util_matchUserAgent("iPad"), goog$userAgent$product$ANDROID = module$contents$goog$labs$userAgent$util_matchUserAgent("Android") && !(module$contents$goog$labs$userAgent$browser_matchChrome() || 
module$contents$goog$labs$userAgent$browser_matchFirefox() || module$contents$goog$labs$userAgent$browser_matchOpera() || module$contents$goog$labs$userAgent$util_matchUserAgent("Silk")), goog$userAgent$product$CHROME = module$contents$goog$labs$userAgent$browser_matchChrome(), goog$userAgent$product$SAFARI = module$contents$goog$labs$userAgent$util_matchUserAgent("Safari") && !(module$contents$goog$labs$userAgent$browser_matchChrome() || (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? 
0 : module$contents$goog$labs$userAgent$util_matchUserAgent("Coast")) || module$contents$goog$labs$userAgent$browser_matchOpera() || (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? 0 : module$contents$goog$labs$userAgent$util_matchUserAgent("Edge")) || (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand("Microsoft Edge") : module$contents$goog$labs$userAgent$util_matchUserAgent("Edg/")) || (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? 
module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand("Opera") : module$contents$goog$labs$userAgent$util_matchUserAgent("OPR")) || module$contents$goog$labs$userAgent$browser_matchFirefox() || module$contents$goog$labs$userAgent$util_matchUserAgent("Silk") || module$contents$goog$labs$userAgent$util_matchUserAgent("Android")) && !module$contents$goog$labs$userAgent$platform_isIos();
function goog$userAgent$product$getFirstRegExpGroup_(re) {
  return (re = re.exec(module$contents$goog$labs$userAgent$util_getNativeUserAgentString())) ? re[1] : "";
}
var goog$userAgent$product$VERSION = function() {
  if (goog$userAgent$product$FIREFOX) {
    return goog$userAgent$product$getFirstRegExpGroup_(/Firefox\/([0-9.]+)/);
  }
  if (goog$userAgent$IE || goog$userAgent$EDGE || goog$userAgent$OPERA) {
    return goog$userAgent$VERSION;
  }
  if (goog$userAgent$product$CHROME) {
    if (module$contents$goog$labs$userAgent$platform_isIos() || module$contents$goog$labs$userAgent$platform_isMacintosh()) {
      var chromeIosVersion = goog$userAgent$product$getFirstRegExpGroup_(/CriOS\/([0-9.]+)/);
      if (chromeIosVersion) {
        return chromeIosVersion;
      }
    }
    return goog$userAgent$product$getFirstRegExpGroup_(/Chrome\/([0-9.]+)/);
  }
  if (goog$userAgent$product$SAFARI && !module$contents$goog$labs$userAgent$platform_isIos()) {
    return goog$userAgent$product$getFirstRegExpGroup_(/Version\/([0-9.]+)/);
  }
  if (goog$userAgent$product$IPHONE || goog$userAgent$product$IPAD) {
    if (chromeIosVersion = /Version\/(\S+).*Mobile\/(\S+)/.exec(module$contents$goog$labs$userAgent$util_getNativeUserAgentString())) {
      return chromeIosVersion[1] + "." + chromeIosVersion[2];
    }
  } else if (goog$userAgent$product$ANDROID) {
    return (chromeIosVersion = goog$userAgent$product$getFirstRegExpGroup_(/Android\s+([0-9.]+)/)) ? chromeIosVersion : goog$userAgent$product$getFirstRegExpGroup_(/Version\/([0-9.]+)/);
  }
  return "";
}();
function JSCompiler_StaticMethods_setCrashCollectionUrl() {
  var JSCompiler_StaticMethods_enableCrashCollector$self = (new webmonitoring$Monitoring("Google Web Designer".replace(/ /g, "_"))).setVersion("16.0.4.0424".concat(".captureapp")).createJsErrorsReporter();
  JSCompiler_StaticMethods_enableCrashCollector$self.enableCrashCollector_ = !0;
  var ninjaShell = goog$global.ninjaShell;
  ninjaShell = ninjaShell && ninjaShell.isInternalShell;
  const prodHostname = goog$global.location.hostname.includes("webdesignerauth.withgoogle.com");
  JSCompiler_StaticMethods_enableCrashCollector$self.crashCollectionUrl_ = ninjaShell || !prodHostname ? "https://clients2.google.com/cr/staging_report" : "https://clients2.google.com/cr/report";
  return JSCompiler_StaticMethods_enableCrashCollector$self;
}
function JSCompiler_StaticMethods_getBrowserName() {
  let browser = "Other";
  goog$userAgent$OPERA ? browser = "Opera" : goog$userAgent$IE ? browser = "Internet Explorer" : goog$userAgent$product$FIREFOX ? browser = "Firefox" : goog$userAgent$product$CHROME ? browser = "Chrome" : goog$userAgent$product$SAFARI && (browser = "Safari");
  return browser;
}
function JSCompiler_StaticMethods_constructErrorParams_(JSCompiler_StaticMethods_constructErrorParams_$self, uri, errorMessage, customFields, srcUrl, line, column) {
  const params = new Map(Object.entries(JSCompiler_StaticMethods_constructErrorParams_$self.monitoringConfig_.context_));
  customFields.forEach((value, key) => {
    params.set(key, value);
  });
  params.set("url", uri.getPath());
  params.set("type", "JavascriptError");
  params.set("error_message", errorMessage);
  params.set("browser", JSCompiler_StaticMethods_getBrowserName());
  params.set("browser_version", goog$userAgent$product$VERSION);
  params.set("os", module$contents$goog$labs$userAgent$platform_isChromeOS() ? "Chrome OS" : (module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Linux" === JSCompiler_inline_result$jscomp$14.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Linux")) ? "Linux" : module$contents$goog$labs$userAgent$platform_isWindows() ? "Windows" : module$contents$goog$labs$userAgent$platform_isAndroid() ? "Android" : module$contents$goog$labs$userAgent$platform_isIphone() ? 
  "iPhone" : module$contents$goog$labs$userAgent$util_matchUserAgent("iPad") ? "iPad" : module$contents$goog$labs$userAgent$util_matchUserAgent("iPod") ? "iPod" : module$contents$goog$labs$userAgent$platform_isMacintosh() ? "Mac" : "Unknown");
  params.set("os_version", module$contents$goog$labs$userAgent$platform_getVersion());
  uri = JSCompiler_StaticMethods_constructErrorParams_$self.monitoringConfig_.channel_;
  null !== uri && params.set("channel", uri);
  goog$string$internal$isEmptyOrWhitespace(JSCompiler_StaticMethods_constructErrorParams_$self.clientId_) || params.set("guid", JSCompiler_StaticMethods_constructErrorParams_$self.clientId_);
  null !== srcUrl && params.set("src", srcUrl);
  null !== line && params.set("line", line.toString());
  null !== column && params.set("column", column.toString());
  return params;
}
function JSCompiler_StaticMethods_upload_(JSCompiler_StaticMethods_upload_$self, uploadUrl, params, content) {
  content = content || "";
  params = uploadUrl + params;
  JSCompiler_StaticMethods_upload_$self = JSCompiler_StaticMethods_upload_$self.callbackJsExceptionReported_.bind(JSCompiler_StaticMethods_upload_$self, uploadUrl);
  uploadUrl = goog$string$internal$isEmptyOrWhitespace(content) ? {} : {"Content-Type":"text/plain"};
  const x = new goog$net$XhrIo();
  goog$net$XhrIo$sendInstances_.push(x);
  JSCompiler_StaticMethods_upload_$self && x.eventTargetListeners_.add("complete", JSCompiler_StaticMethods_upload_$self, !1, void 0, void 0);
  x.eventTargetListeners_.add("ready", x.cleanupSend_, !0, void 0, void 0);
  x.timeoutInterval_ = 6E4;
  x.withCredentials_ = !0;
  JSCompiler_StaticMethods_JSC$2702_send(x, params, content, uploadUrl);
}
function JSCompiler_StaticMethods_paramsToUrlStr_(params) {
  let paramsStr = "";
  for (const [key, value] of params) {
    paramsStr += goog$string$internal$isEmptyOrWhitespace(paramsStr) ? "?" : "&", paramsStr += key + "=" + encodeURIComponent(value);
  }
  return paramsStr;
}
const module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter = class extends module$contents$webmonitoring$Reporter_Reporter {
  constructor(monitoringConfig) {
    super(monitoringConfig);
    this.globalSampling_ = 100;
    this.perErrorMessageSampling_ = {};
    this.callback_ = null;
    this.clientId_ = "";
    this.useLocalStorage_ = !0;
    this.maxErrorsPerHour_ = 10;
    this.rateThrottler_ = null;
    this.enableCrashCollector_ = !1;
    this.crashCollectionUrl_ = "https://clients2.google.com/cr/staging_report";
  }
  setUseLocalStorage(useLocalStorage) {
    this.useLocalStorage_ = useLocalStorage;
    return this;
  }
  setMaxErrorsPerHour(hourlyRate) {
    this.maxErrorsPerHour_ = Math.min(hourlyRate, 100);
    return this;
  }
  setGlobalSampling(globalSampling) {
    this.globalSampling_ = globalSampling;
    return this;
  }
  addPerErrorMessageSampling(errorRegex, errorSampling) {
    this.perErrorMessageSampling_[errorRegex] = errorSampling;
    return this;
  }
  setCallback(callback) {
    this.callback_ = callback;
    return this;
  }
  setClientId(clientId) {
    this.clientId_ = clientId;
    return this;
  }
  enable() {
    if (this.isEnabled_) {
      return !1;
    }
    this.originalErrorHandler_ = window.onerror;
    window.onerror = this.onError_.bind(this);
    return this.isEnabled_ = !0;
  }
  reportError(message, srcUrl, line, column, error, customFields = new Map()) {
    var JSCompiler_inline_result = window.location.href;
    JSCompiler_inline_result = JSCompiler_inline_result instanceof goog$Uri ? JSCompiler_inline_result.clone() : new goog$Uri(JSCompiler_inline_result);
    message = null != error && null != error.message ? error.message : message;
    goog$string$subs('The following error:" %s" occurred at URL: %s', message, JSCompiler_inline_result.getPath());
    var JSCompiler_temp;
    if (JSCompiler_temp = "function" !== typeof this.callback_ || this.callback_(JSCompiler_inline_result.getPath(), message, srcUrl, line, column, error)) {
      if (JSCompiler_temp = this.enableCrashCollector_) {
        JSCompiler_temp = Object.keys(this.perErrorMessageSampling_);
        var specialSampling = 100;
        for (let i = 0; i < JSCompiler_temp.length; ++i) {
          const errorRegex = JSCompiler_temp[i];
          (new RegExp(errorRegex)).test(message) && (specialSampling = this.perErrorMessageSampling_[errorRegex]);
        }
        if (JSCompiler_temp = (100 * Math.random()).toFixed(6) >= this.globalSampling_ * specialSampling / 100 ? !1 : !0) {
          0 <= this.maxErrorsPerHour_ && null === this.rateThrottler_ && (this.rateThrottler_ = new module$contents$webmonitoring$RateThrottler_RateThrottler(this.maxErrorsPerHour_, this.useLocalStorage_));
          if (null === this.rateThrottler_) {
            JSCompiler_temp = !1;
          } else {
            a: {
              JSCompiler_temp = this.rateThrottler_;
              specialSampling = Date.now();
              if (JSCompiler_temp.history_.length == JSCompiler_temp.JSC$2638_count_) {
                if (JSCompiler_temp.history_[0] < specialSampling - 36E5) {
                  JSCompiler_temp.history_.shift();
                } else {
                  JSCompiler_temp = !1;
                  break a;
                }
              }
              JSCompiler_temp.history_.push(specialSampling);
              JSCompiler_StaticMethods_saveHistory_(JSCompiler_temp);
              JSCompiler_temp = !0;
            }
            JSCompiler_temp = !JSCompiler_temp;
          }
          JSCompiler_temp = !JSCompiler_temp && this.enableCrashCollector_;
        }
      }
    }
    JSCompiler_temp && (error = error || null, line = JSCompiler_StaticMethods_constructErrorParams_(this, JSCompiler_inline_result, message, customFields, srcUrl, line, void 0 !== column ? column : null), line.set("prod", this.monitoringConfig_.product_), line.set("ver", this.monitoringConfig_.getVersion()), column = null !== error ? goog$string$makeSafe(error.stack) : "", srcUrl = this.crashCollectionUrl_, line = JSCompiler_StaticMethods_paramsToUrlStr_(line), goog$string$internal$isEmptyOrWhitespace(message) || 
    (customFields = column.split("\n"), -1 < customFields[0].indexOf(message) && (customFields.splice(0, 1), column = customFields.join("\n"))), JSCompiler_StaticMethods_upload_(this, srcUrl, line, column), message = new Map(), message.set("product", this.monitoringConfig_.product_), message.set("url", JSCompiler_inline_result.getPath()), message.set("js_errors_count", "1"), JSCompiler_inline_result = goog$string$makeSafe(this.monitoringConfig_.channel_), goog$string$internal$isEmptyOrWhitespace(JSCompiler_inline_result) || 
    message.set("version", JSCompiler_inline_result), JSCompiler_StaticMethods_upload_(this, "https://clients2.google.com/cr/staging_perf", JSCompiler_StaticMethods_paramsToUrlStr_(message)));
  }
  onError_(message, srcUrl, line, column, error) {
    this.reportError(message, srcUrl, line, column, error);
    null != this.originalErrorHandler_ && "function" === typeof this.originalErrorHandler_ && this.originalErrorHandler_(message, srcUrl, line, column, error);
  }
  callbackJsExceptionReported_(uploadUrl, eventObj) {
    JSCompiler_StaticMethods_isSuccess(eventObj.target);
  }
};
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.reportError = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.reportError;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.enable = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.enable;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setClientId = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setClientId;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setCallback = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setCallback;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.addPerErrorMessageSampling = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.addPerErrorMessageSampling;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setGlobalSampling = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setGlobalSampling;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setMaxErrorsPerHour = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setMaxErrorsPerHour;
module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setUseLocalStorage = module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter.prototype.setUseLocalStorage;
function webmonitoring$Monitoring(product) {
  goog$Disposable.call(this);
  this.config = new module$contents$webmonitoring$MonitoringConfig_MonitoringConfig(product);
  this.reporters = {};
}
goog$inherits(webmonitoring$Monitoring, goog$Disposable);
goog$exportSymbol("webmonitoring.Monitoring", webmonitoring$Monitoring);
webmonitoring$Monitoring.prototype.setVersion = function(version) {
  this.config.setVersion(version);
  return this;
};
webmonitoring$Monitoring.prototype.setVersion = webmonitoring$Monitoring.prototype.setVersion;
webmonitoring$Monitoring.prototype.setChannel = function(channel) {
  this.config.setChannel(channel);
  return this;
};
webmonitoring$Monitoring.prototype.setChannel = webmonitoring$Monitoring.prototype.setChannel;
webmonitoring$Monitoring.prototype.setContext = function(context) {
  this.config.setContext(context);
  return this;
};
webmonitoring$Monitoring.prototype.setContext = webmonitoring$Monitoring.prototype.setContext;
webmonitoring$Monitoring.prototype.getVersion = function() {
  return this.config.getVersion();
};
webmonitoring$Monitoring.prototype.createJsErrorsReporter = function() {
  null == this.reporters[2] && (this.reporters[2] = new module$contents$webmonitoring$JsErrorsReporter_JsErrorsReporter(this.config));
  return this.reporters[2];
};
webmonitoring$Monitoring.prototype.createJsErrorsReporter = webmonitoring$Monitoring.prototype.createJsErrorsReporter;
function JSCompiler_StaticMethods_reportError_(shell, error) {
  module$contents$ninja$debug$log_logToShell("error", module$contents$ninja$debug$log_getLogString(module$contents$ninja$capture$log_getLogString(`Error ${error.code} - ${error.message}`)));
  7 !== error.code && shell.reportError({code:error.code, message:error.message});
}
function JSCompiler_StaticMethods_loadCaptureConfiguration_(urlParams) {
  const configPath = urlParams.get("config") || "config.json";
  return window.fetch(configPath).then(response => response.json()).then(json => json).catch(() => {
    throw new module$exports$ninja$capture$AppError$AppError(2, "Could not load capture configuraiotn at " + configPath);
  });
}
(function() {
  var urlParams = new URLSearchParams(window.location.search);
  JSCompiler_StaticMethods_setCrashCollectionUrl().enable();
  const shell = urlParams.has("fakeshell") ? new module$exports$ninja$capture$ShellApiFake$ShellApiFake() : new module$exports$ninja$capture$ShellApi$ShellApi();
  let instanceIndex = 0;
  if (urlParams.has("index")) {
    const indexParam = urlParams.get("index"), parsedIndex = parseInt(indexParam, 10);
    if (isNaN(parsedIndex)) {
      JSCompiler_StaticMethods_reportError_(shell, new module$exports$ninja$capture$AppError$AppError(4, "Invalid index: " + indexParam));
      Promise.resolve();
      return;
    }
    instanceIndex = parsedIndex;
  }
  module$contents$ninja$capture$log_instanceIndex = instanceIndex;
  JSCompiler_StaticMethods_loadCaptureConfiguration_(urlParams).then(captureSpec => {
    var $jscomp$inline_913;
    let $jscomp$inline_914, $jscomp$inline_915, $jscomp$inline_916;
    if (!captureSpec.videoSpec && !captureSpec.imageSpec || 0 === (null == ($jscomp$inline_913 = captureSpec.videoSpec) ? void 0 : $jscomp$inline_913.variants.length) || 0 === (null == ($jscomp$inline_914 = captureSpec.videoSpec) ? void 0 : $jscomp$inline_914.sizesToCapture.length) || 0 === (null == ($jscomp$inline_915 = captureSpec.imageSpec) ? void 0 : $jscomp$inline_915.variantsToCapture.length) || 0 === (null == ($jscomp$inline_916 = captureSpec.imageSpec) ? void 0 : $jscomp$inline_916.sizesToCapture.length)) {
      throw new module$exports$ninja$capture$AppError$AppError(1, "The capture configuration is empty.");
    }
    $jscomp$inline_913 = new module$exports$ninja$capture$CaptureManager$CaptureManager(shell, captureSpec, instanceIndex);
    return captureSpec.videoSpec ? JSCompiler_StaticMethods_captureAllVideosOrGifs_($jscomp$inline_913) : JSCompiler_StaticMethods_captureAllImages_($jscomp$inline_913);
  }).catch(error => {
    error instanceof module$exports$ninja$capture$AppError$AppError || (error = new module$exports$ninja$capture$AppError$AppError(0, String(error)));
    JSCompiler_StaticMethods_reportError_(shell, error);
  });
})();


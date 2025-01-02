/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([411,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Separator = _interopRequireDefault(__webpack_require__(1001));

var _AssetsViewToolbar = _interopRequireDefault(__webpack_require__(1004));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsViewFooter extends _react.default.Component {
  render() {
    const {
      activeStoreId
    } = this.props;
    return _react.default.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
      },
      className: 'appBackground'
    }, _react.default.createElement(_Separator.default, null), _react.default.createElement(_AssetsViewToolbar.default, {
      activeStoreId: activeStoreId
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsViewFooter;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsViewFooter, "AssetsViewFooter", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewFooter.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _SeparatorM = _interopRequireDefault(__webpack_require__(1002));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Separator extends _react.default.Component {
  render() {
    const _this$props = this.props,
          {
      className,
      variant
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "variant"]);
    const classes = `${className ? className : ''} ${_SeparatorM.default.separator} ${variant === 'horizontal' ? _SeparatorM.default.horizontal : _SeparatorM.default.vertical}`;
    return _react.default.createElement("div", (0, _extends2.default)({
      className: classes,
      style: {
        width: '100%'
      }
    }, otherProps));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = Separator;
Separator.defaultProps = {
  variant: 'horizontal'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Separator, "Separator", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/Separator.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(1003);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Separator-m__separator___MJ2FV\n{\n    border: 1px solid;\n}\n\n.Separator-m__separator___MJ2FV.Separator-m__horizontal___17rG0\n{\n    width: 100%;\n    height: 1px;\n}\n\n.Separator-m__separator___MJ2FV.Separator-m__vertical___3oGm5\n{\n    height: 100%;\n    width: 1px;\n}\n\n/* BLACK, GRAY-50, GRAY-300, GRAY-300 */\n.spectrum--darkest .Separator-m__separator___MJ2FV { border-color: rgb(0, 0, 0); }\n.spectrum--dark .Separator-m__separator___MJ2FV { border-color: rgb(37, 37, 37); }\n.spectrum--light .Separator-m__separator___MJ2FV { border-color: rgb(225, 225, 225); }\n.spectrum--lightest .Separator-m__separator___MJ2FV { border-color: rgb(234, 234, 234); }", ""]);
// Exports
exports.locals = {
	"separator": "Separator-m__separator___MJ2FV",
	"horizontal": "Separator-m__horizontal___17rG0",
	"vertical": "Separator-m__vertical___3oGm5"
};
module.exports = exports;


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

var _interopRequireWildcard = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRedux = __webpack_require__(123);

var _Button = _interopRequireDefault(__webpack_require__(33));

var _Grid = __webpack_require__(192);

var _Add = _interopRequireDefault(__webpack_require__(1005));

var _DownloadFromCloud = _interopRequireDefault(__webpack_require__(1008));

var _CloudDisconnected = _interopRequireDefault(__webpack_require__(1011));

var _Delete = _interopRequireDefault(__webpack_require__(1012));

var _applications = _interopRequireDefault(__webpack_require__(43));

var _Localizer = __webpack_require__(44);

var _AssetsDownloadActions = __webpack_require__(274);

var _types = __webpack_require__(69);

var _ObjectsStore = __webpack_require__(102);

var _AssetsDownloadStatusBar = _interopRequireWildcard(__webpack_require__(1015));

var _NetworkManager = __webpack_require__(1017);

var _PIPLogger = __webpack_require__(104);

var _AppContext = __webpack_require__(122);

var _dec, _class, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const mapStateToProps = state => {
  return {
    downloadStatus: state.assetsDownload.status,
    downloadMessage: state.assetsDownload.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    downloadAssets: () => (0, _AssetsDownloadActions.downloadAssetsAction)(dispatch),
    fetchDownloadStatus: () => (0, _AssetsDownloadActions.fetchAssetsDownloadStatusAction)(dispatch)
  };
};

let AssetsViewToolbar = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = class AssetsViewToolbar extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      networkConnected: _NetworkManager.networkMgr.isOnline()
    };

    this.handleImport = () => {
      const request = {
        storeId: 'Custom'
      };

      _applications.default.getAssetsEndPoint().importAssets(request);
    };

    this.handleDownload = () => {
      console.log('download clicked');
      const {
        downloadAssets
      } = this.props;

      if (downloadAssets) {
        downloadAssets();
      }
    };

    this.handleDelete = () => {
      console.log('delete clicked');

      const list = _ObjectsStore.defaultStore.getObject('activeSelection');

      if (list && list.length > 0) {
        const request = {
          storeId: this.props.activeStoreId,
          assets: list
        };

        _applications.default.getAssetsEndPoint().deleteAssets(request);

        const asset = _AppContext.appContext.getAssetById(list[0]);

        if (asset) {
          const eventData = {
            category: _PIPLogger.PIP_STR.ASSET_PANEL,
            subCategory: _PIPLogger.PIP_STR.ASSET_DELETE,
            eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
            metadata: {
              [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_BUTTON_CLICK
            }
          };

          _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, asset);
        }
      }
    };

    this.onNetworkStatusChange = status => {
      this.setState({
        networkConnected: status === _NetworkManager.NetworkStatusE.CONNECTED
      });

      if (status === _NetworkManager.NetworkStatusE.CONNECTED) {
        console.log('Network connected fetch the download status again');
        this.props.fetchDownloadStatus();
      }
    };
  }

  getDownloadButtonEnabled() {
    const {
      downloadStatus
    } = this.props;

    if (downloadStatus !== undefined) {
      const info = _AssetsDownloadStatusBar.DOWNLOAD_STATUS_CONFIG[downloadStatus];

      if (info) {
        return info.buttonEnabled;
      }
    }

    return false;
  }
  /* eslint-disable quotes */


  renderDownloadStatus() {
    const {
      activeStoreId
    } = this.props;
    const {
      networkConnected
    } = this.state;
    const displayDownloadButton = activeStoreId == 'Default';

    if (displayDownloadButton) {
      if (networkConnected) {
        return _react.default.createElement(_AssetsDownloadStatusBar.default, this.props);
      } else {
        const extraProps = {
          downloadStatus: _types.DownloadStatusE.NETWORK_UNAVAILABLE,
          downloadMessage: _Localizer.localizer.getString("$$$/AssetsPanel/NetworkDisconnected/label=Network disconnected")
        };
        return _react.default.createElement(_AssetsDownloadStatusBar.default, (0, _extends2.default)({}, this.props, extraProps));
      }
    }

    return null;
  }
  /* eslint-disable quotes */


  renderImportButton() {
    const {
      activeStoreId
    } = this.props;
    const {
      networkConnected
    } = this.state;
    let tooltip = '';

    if (activeStoreId === 'Default') {
      if (networkConnected) {
        tooltip = _Localizer.localizer.getString("$$$/AssetsPanel/DownloadAssets/tooltip=Download assets");
        return _react.default.createElement(_Button.default, {
          variant: "tool",
          icon: _react.default.createElement(_DownloadFromCloud.default, {
            title: tooltip
          }),
          onClick: this.handleDownload,
          disabled: !this.getDownloadButtonEnabled(),
          title: tooltip
        });
      } else {
        tooltip = _Localizer.localizer.getString("$$$/AssetsPanel/NetworkDisconnected/tooltip=Network disconnected");
        return _react.default.createElement("span", {
          className: 'iconContainer'
        }, _react.default.createElement(_CloudDisconnected.default, {
          title: tooltip
        }));
      }
    } else {
      tooltip = _Localizer.localizer.getString("$$$/AssetsPanel/ImportAssets/tooltip=Import assets");
      return _react.default.createElement(_Button.default, {
        variant: "tool",
        icon: _react.default.createElement(_Add.default, {
          title: tooltip
        }),
        onClick: this.handleImport,
        title: tooltip
      });
    }
  }
  /* eslint-disable quotes */


  render() {
    const deleteTooltip = _Localizer.localizer.getString("$$$/AssetsPanel/DeleteAssets/tooltip=Delete assets");

    return _react.default.createElement(_Grid.Grid, null, _react.default.createElement(_Grid.GridRow, null, _react.default.createElement(_Grid.GridColumn, null, _react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, this.renderImportButton(), this.renderDownloadStatus(), _react.default.createElement("div", {
      style: {
        display: 'flex',
        marginLeft: 'auto'
      }
    }, _react.default.createElement(_Button.default, {
      variant: "tool",
      icon: _react.default.createElement(_Delete.default, {
        title: deleteTooltip
      }),
      onClick: this.handleDelete,
      title: deleteTooltip
    }))))));
  }

  componentDidMount() {
    const {
      downloadStatus,
      fetchDownloadStatus
    } = this.props;

    if (downloadStatus === _types.DownloadStatusE.ASSETS_STATUS_DEFAULT) {
      console.log('fetching the status for first time');
      fetchDownloadStatus();
    }

    _NetworkManager.networkMgr.addNetworkStatusChangeListener(this.onNetworkStatusChange);
  }

  componentWillUnmount() {
    _NetworkManager.networkMgr.removeNetworkStatusChangeListener(this.onNetworkStatusChange);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}, _temp)) || _class);
exports.default = AssetsViewToolbar;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AssetsViewToolbar.tsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AssetsViewToolbar.tsx");
  reactHotLoader.register(AssetsViewToolbar, "AssetsViewToolbar", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AssetsViewToolbar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CloudDisconnected;

var _react = _interopRequireDefault(__webpack_require__(0));

var _CustomIcon = __webpack_require__(153);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function CloudDisconnected(props) {
  return _react.default.createElement(_CustomIcon.CustomIcon, props, _react.default.createElement("g", {
    "data-name": "ImportedIcons",
    id: "ImportedIcons-2"
  }, _react.default.createElement("path", {
    d: "M26.96875,15.8125a7.25,7.25,0,1,0,7.25,7.25A7.25521,7.25521,0,0,0,26.96875,15.8125Zm3.87036,9.91522a.92026.92026,0,0,1-.65,1.57074.92482.92482,0,0,1-.65076-.27069L27.11218,24.601,24.6861,27.02777a.9188.9188,0,0,1-1.57007-.65.914.914,0,0,1,.26928-.65l2.42682-2.42682-2.39361-2.41845a.81794.81794,0,0,1-.30634-.58838,1.00692,1.00692,0,0,1,.95685-.98236.925.925,0,0,1,.65033.2705l2.39282,2.41858,2.39289-2.41858a.925.925,0,0,1,.65033-.2705,1.0069,1.0069,0,0,1,.95678.98236.81775.81775,0,0,1-.30633.58838L28.41229,23.3009Z",
    fill: "var(--iconFill,#6E6E6E)",
    fillRule: "evenodd"
  }), _react.default.createElement("path", {
    d: "M29.50507,19.58223a.92494.92494,0,0,1,.65033-.27053,1.00694,1.00694,0,0,1,.95681.98238.81783.81783,0,0,1-.30634.58837L28.41229,23.3009l2.42683,2.42682a.92031.92031,0,0,1-.65,1.57076.925.925,0,0,1-.65076-.27067L27.11221,24.601l-2.42612,2.42683a.9188.9188,0,0,1-1.57-.65.9142.9142,0,0,1,.26926-.65005l2.42682-2.42682-2.39358-2.41845a.81782.81782,0,0,1-.30633-.58837,1.00694,1.00694,0,0,1,.9568-.98238.92494.92494,0,0,1,.65033.27053l2.39287,2.41858Z",
    fill: "var(--iconBackground,#FAFAFA)",
    fillRule: "evenodd",
    opacity: "0.65"
  }), _react.default.createElement("path", {
    d: "M27.68813,14.02591Q27.34743,14.00016,27,14a9.0013,9.0013,0,0,0-7.48445,14H3.7182A3.92073,3.92073,0,0,1,0,23.8544c0-1.7304,1.7924-4.2616,4.0918-4.2616a4.81527,4.81527,0,0,1-.1334-1.5772,6.25371,6.25371,0,0,1,6.3984-6.0742,7.74306,7.74306,0,0,1,2.0978.291c.9364-3.166,3.6225-6.1699,7.6079-6.1699a7.29627,7.29627,0,0,1,7.6405,7.5703C27.703,13.76478,27.69774,13.89582,27.68813,14.02591Z",
    fill: "var(--iconFillMedium,#B3B3B3)",
    fillRule: "evenodd"
  })));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CloudDisconnected, "CloudDisconnected", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/CloudDisconnected.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DOWNLOAD_STATUS_CONFIG = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _types = __webpack_require__(69);

var _Circle = _interopRequireDefault(__webpack_require__(383));

var _AnimatingDots = _interopRequireDefault(__webpack_require__(1016));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const DOWNLOAD_STATUS_CONFIG = {
  [_types.DownloadStatusE.ASSETS_NEW_AVAILABLE]: {
    buttonEnabled: true,
    statusColor: 'rgba(230, 134, 25)'
  },
  [_types.DownloadStatusE.ASSETS_DOWNLOADING]: {
    buttonEnabled: false,
    statusColor: 'rgba(39, 128, 234)'
  },
  [_types.DownloadStatusE.ASSETS_DOWNLOAD_SUCCESS]: {
    buttonEnabled: true,
    statusColor: 'rgba(44, 157, 120)'
  },
  [_types.DownloadStatusE.ASSETS_DOWNLOAD_FAILED]: {
    buttonEnabled: true,
    statusColor: 'rgba(227, 72, 80)'
  },
  [_types.DownloadStatusE.ASSETS_DOWNLOAD_MORE_AVAILABLE]: {
    buttonEnabled: true,
    statusColor: 'transparent'
  },
  [_types.DownloadStatusE.ASSETS_DOWNLOAD_NONE_AVAILABLE]: {
    buttonEnabled: false,
    statusColor: 'transparent'
  },
  [_types.DownloadStatusE.NETWORK_UNAVAILABLE]: {
    buttonEnabled: false,
    statusColor: 'transparent'
  }
};
exports.DOWNLOAD_STATUS_CONFIG = DOWNLOAD_STATUS_CONFIG;

class AssetsDownloadStatusBar extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this._downloadStateTimeoutHandle = null;
  }

  getCircleColor() {
    const {
      downloadStatus
    } = this.props;

    if (downloadStatus !== undefined) {
      const info = DOWNLOAD_STATUS_CONFIG[downloadStatus];

      if (info) {
        return info.statusColor;
      }
    }

    return 'transparent';
  }

  renderDownloadingMessage() {
    const {
      downloadMessage
    } = this.props;
    const parts = downloadMessage.split('...');

    if (parts.length < 2) {
      parts[1] = '';
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, parts[0]), _react.default.createElement("span", null, _react.default.createElement(_AnimatingDots.default, null)), _react.default.createElement("span", {
      style: {
        marginLeft: '5px'
      }
    }, parts[1]));
  }

  render() {
    const {
      downloadStatus,
      downloadMessage
    } = this.props;
    const isDownloading = downloadStatus === _types.DownloadStatusE.ASSETS_DOWNLOADING;
    return _react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '16px'
      }
    }, _react.default.createElement(_Circle.default, {
      radius: 8,
      fillColor: this.getCircleColor()
    }), _react.default.createElement("div", {
      className: 'ui-text-ellipsis',
      style: {
        display: 'flex',
        marginLeft: '8px'
      }
    }, isDownloading ? this.renderDownloadingMessage() : downloadMessage));
  }

  componentDidMount() {
    this.fetchStatusIfCompleted();
  }

  componentWillUnmount() {
    this.clearTimeoutHandles();
  }

  componentDidUpdate() {
    this.fetchStatusIfCompleted();
  }

  fetchStatusIfCompleted() {
    const {
      downloadStatus,
      fetchDownloadStatus
    } = this.props;

    switch (downloadStatus) {
      case _types.DownloadStatusE.ASSETS_DOWNLOAD_SUCCESS:
      case _types.DownloadStatusE.ASSETS_DOWNLOAD_FAILED:
        {
          if (!this._downloadStateTimeoutHandle) {
            this._downloadStateTimeoutHandle = setTimeout(() => {
              fetchDownloadStatus();
              this._downloadStateTimeoutHandle = null;
            }, 10000);
          }

          break;
        }

      default:
        {
          this.clearTimeoutHandles();
        }
    }
  }

  clearTimeoutHandles() {
    if (this._downloadStateTimeoutHandle) {
      clearTimeout(this._downloadStateTimeoutHandle);
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsDownloadStatusBar;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DOWNLOAD_STATUS_CONFIG, "DOWNLOAD_STATUS_CONFIG", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AssetsDownloadStatusBar.tsx");
  reactHotLoader.register(AssetsDownloadStatusBar, "AssetsDownloadStatusBar", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AssetsDownloadStatusBar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireWildcard = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnimatingDots;

var _react = _interopRequireWildcard(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function AnimatingDots() {
  const [count, setCount] = (0, _react.useState)(1);
  const intervalHandle = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    // component did mount
    intervalHandle.current = setInterval(() => {
      setCount((count + 1) % 4);
      console.log('AnimatedDots::interval');
    }, 500);
    return () => {
      // component will unmount
      if (intervalHandle.current) {
        clearInterval(intervalHandle.current);
      }
    };
  });
  const dotsArray = [];
  const hiddenStyle = {
    visibility: 'hidden'
  };

  for (let index = 0; index < 3; ++index) {
    if (index < count) {
      dotsArray.push(_react.default.createElement("b", {
        key: index
      }, "."));
    } else {
      dotsArray.push(_react.default.createElement("b", {
        key: index,
        style: hiddenStyle
      }, "."));
    }
  }

  return _react.default.createElement("span", {
    style: {
      display: 'flex',
      fontWeight: 'bolder'
    }
  }, dotsArray);
}

__signature__(AnimatingDots, "useState{[count, setCount](1)}\nuseRef{intervalHandle}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AnimatingDots, "AnimatingDots", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/toolbar/AnimatingDots.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.networkMgr = exports.NetworkStatusE = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
let NetworkStatusE;
exports.NetworkStatusE = NetworkStatusE;

(function (NetworkStatusE) {
  NetworkStatusE[NetworkStatusE["CONNECTED"] = 0] = "CONNECTED";
  NetworkStatusE[NetworkStatusE["DISCONNECTED"] = 1] = "DISCONNECTED";
})(NetworkStatusE || (exports.NetworkStatusE = NetworkStatusE = {}));

class NetworkManager {
  static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  constructor() {
    this._listeners = [];

    this.onOnline = () => {
      this.notifyStatus(NetworkStatusE.CONNECTED);
    };

    this.onOffline = () => {
      this.notifyStatus(NetworkStatusE.DISCONNECTED);
    };

    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  isOnline() {
    return window.navigator.onLine;
  }

  addNetworkStatusChangeListener(inFunc) {
    this._listeners.push(inFunc);
  }

  removeNetworkStatusChangeListener(inFunc) {
    const index = this._listeners.findIndex(listener => listener === inFunc);

    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  notifyStatus(status) {
    for (const listener of this._listeners) {
      listener(status);
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

NetworkManager._instance = null;
const networkMgr = NetworkManager.getInstance();
exports.networkMgr = networkMgr;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NetworkManager, "NetworkManager", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/NetworkManager.ts");
  reactHotLoader.register(networkMgr, "networkMgr", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/NetworkManager.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(1019);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".AssetsView-m__categoryTitle___1gTUw\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.AssetsView-m__categoryTitleDisabled___3WUJw\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n/* GRAY-600 */\n.spectrum--darkest .AssetsView-m__categoryTitle___1gTUw { /*color: rgb(124, 124, 124);*/ color: rgb(162, 162, 162); }\n.spectrum--dark .AssetsView-m__categoryTitle___1gTUw { /*color: rgb(144, 144, 144);*/ color: rgb(185, 185, 185); }\n.spectrum--light .AssetsView-m__categoryTitle___1gTUw { color: rgb(142, 142, 142); }\n.spectrum--lightest .AssetsView-m__categoryTitle___1gTUw { color: rgb(149, 149, 149); }", ""]);
// Exports
exports.locals = {
	"categoryTitle": "AssetsView-m__categoryTitle___1gTUw",
	"categoryTitleDisabled": "AssetsView-m__categoryTitleDisabled___3WUJw"
};
module.exports = exports;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStore = exports.ObjectsStore = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
class ObjectsStore {
  constructor() {
    this._objectsMap = new Map();
  }

  addObject(key, val) {
    this._objectsMap.set(key, val);
  }

  removeObject(key) {
    if (this.hasObject(key)) {
      this._objectsMap.delete(key);
    }
  }

  hasObject(key) {
    return this._objectsMap.has(key);
  }

  getObject(key) {
    return this._objectsMap.get(key);
  }

  getTypedObject(key, constructor) {
    if (this.hasObject(key)) {
      const val = this._objectsMap.get(key);

      if (val instanceof constructor) {
        return val;
      }
    }

    const ret = new constructor();
    return ret;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.ObjectsStore = ObjectsStore;
const defaultStore = new ObjectsStore();
exports.defaultStore = defaultStore;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ObjectsStore, "ObjectsStore", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/ObjectsStore.ts");
  reactHotLoader.register(defaultStore, "defaultStore", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/ObjectsStore.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Link = _interopRequireDefault(__webpack_require__(1021));

var _Grid = __webpack_require__(192);

var _FlexView = __webpack_require__(115);

__webpack_require__(1036);

var _Localizer = __webpack_require__(44);

var _PIPLogger = __webpack_require__(104);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class LearnSection extends _react.default.Component {
  constructor(...args) {
    super(...args);

    this.onTutorialButtonClick = e => {
      e.preventDefault();
      console.log('watch tutorial');

      if (window.require('uxp').AnAssets) {
        window.require('uxp').AnAssets.launchGetStartedAsync('1');
      }

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_GET_STARTED,
        eventName: _PIPLogger.PIP_STR.ASSET_GET_STARTED,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(eventData);
    };
  }

  /* eslint-disable quotes */
  render() {
    return _react.default.createElement(_Grid.Grid, this.props, _react.default.createElement(_FlexView.FlexView, null, _react.default.createElement(_FlexView.FlexRow, {
      style: {
        justifyContent: 'center'
      }
    }, _react.default.createElement("div", {
      className: 'learnCont'
    }, _react.default.createElement("span", {
      className: 'learnLabel1'
    }, _Localizer.localizer.getString("$$$/AssetPanel/Learn/HowItWorks/label=Not sure how this works?")), _react.default.createElement(_Link.default, {
      style: {
        marginLeft: '4px'
      },
      href: "#",
      onClick: this.onTutorialButtonClick
    }, _Localizer.localizer.getString("$$$/AssetPanel/Learn/GetStarted/label=Get started"))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = LearnSection;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LearnSection, "LearnSection", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/LearnSection.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PREFERENCE_KEYS = exports.STRINGS = exports.MAX_NAME_LENGTH = exports.KeyCodesE = exports.LayoutModeE = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
let LayoutModeE;
exports.LayoutModeE = LayoutModeE;

(function (LayoutModeE) {
  LayoutModeE[LayoutModeE["GRID"] = 0] = "GRID";
  LayoutModeE[LayoutModeE["LIST"] = 1] = "LIST";
})(LayoutModeE || (exports.LayoutModeE = LayoutModeE = {}));

let KeyCodesE;
exports.KeyCodesE = KeyCodesE;

(function (KeyCodesE) {
  KeyCodesE[KeyCodesE["TAB"] = 9] = "TAB";
  KeyCodesE[KeyCodesE["ENTER"] = 13] = "ENTER";
  KeyCodesE[KeyCodesE["SHIFT"] = 16] = "SHIFT";
  KeyCodesE[KeyCodesE["CONTROL"] = 17] = "CONTROL";
  KeyCodesE[KeyCodesE["ALT"] = 18] = "ALT";
  KeyCodesE[KeyCodesE["OPTION"] = 18] = "OPTION";
  KeyCodesE[KeyCodesE["CAPSLOCK"] = 20] = "CAPSLOCK";
  KeyCodesE[KeyCodesE["ESCAPE"] = 27] = "ESCAPE";
  KeyCodesE[KeyCodesE["SPACE"] = 32] = "SPACE";
  KeyCodesE[KeyCodesE["END"] = 35] = "END";
  KeyCodesE[KeyCodesE["ARROW_LEFT"] = 37] = "ARROW_LEFT";
  KeyCodesE[KeyCodesE["ARROW_UP"] = 38] = "ARROW_UP";
  KeyCodesE[KeyCodesE["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
  KeyCodesE[KeyCodesE["ARROW_DOWN"] = 40] = "ARROW_DOWN";
  KeyCodesE[KeyCodesE["DELETE"] = 46] = "DELETE";
  KeyCodesE[KeyCodesE["OS_LEFT"] = 91] = "OS_LEFT";
  KeyCodesE[KeyCodesE["OS_RIGHT"] = 92] = "OS_RIGHT";
  KeyCodesE[KeyCodesE["CONTEXT_MENU"] = 93] = "CONTEXT_MENU";
})(KeyCodesE || (exports.KeyCodesE = KeyCodesE = {}));

const MAX_NAME_LENGTH = 255;
exports.MAX_NAME_LENGTH = MAX_NAME_LENGTH;
const STRINGS = {
  DEFAULT: 'Default',
  CUSTOM: 'Custom',
  ANIMATED: 'Animated',
  STATIC: 'Static',
  SOUND_CLIPS: 'Sound clips',
  ROLE: 'role',
  SUBCATEGORY: 'subCategory',
  CHARACTERS: 'Characters',
  OBJECTS: 'Objects',
  SOUND_EFFECTS: 'Sound effects',
  ALL: 'All'
};
exports.STRINGS = STRINGS;
const PREFERENCE_KEYS = {
  SELECTED_CATEGORY: 'SelectedCategory',
  SELECTED_TAB: 'SelectedTab',
  LAYOUT_MODE: 'LayoutMode'
};
exports.PREFERENCE_KEYS = PREFERENCE_KEYS;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MAX_NAME_LENGTH, "MAX_NAME_LENGTH", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/Constants.ts");
  reactHotLoader.register(STRINGS, "STRINGS", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/Constants.ts");
  reactHotLoader.register(PREFERENCE_KEYS, "PREFERENCE_KEYS", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/Constants.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(1037);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".learnCont\n{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 80px;\n    border-radius: 4px;\n    border: 1px solid;\n    text-align: center;\n}\n\n.spectrum--darkest .learnCont { border-color: rgb(73, 73, 73); }\n.spectrum--dark .learnCont { border-color: rgb(90, 90, 90); }\n.spectrum--light .learnCont { border-color: rgb(202, 202, 202); }\n.spectrum--lightest .learnCont { border-color: rgb(211, 211, 211); }\n\n.learnLabel1\n{\n    font-size: 14px;\n    font-style: italic;\n}\n\n.spectrum--darkest .learnLabel1 { color: rgb(92, 92, 92); }\n.spectrum--dark .learnLabel1 { color: rgb(110, 110, 110); }\n.spectrum--light .learnLabel1 { color: rgb(179, 179, 179); }\n.spectrum--lightest .learnLabel1 { color:rgb(188, 188, 188); }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(154));

var _Select = _interopRequireDefault(__webpack_require__(1061));

var _Label = _interopRequireDefault(__webpack_require__(1167));

var _i18n = _interopRequireDefault(__webpack_require__(1182));

__webpack_require__(1183);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class DebugPanel extends _react.default.Component {
  constructor(props) {
    super(props);
    this.localeOptions = [];
    this.themeOptions = [];

    this.onLocaleSelected = locale => {
      const newState = _objectSpread({}, this.state);

      newState.locale = locale;
      this.setState(newState);
      this.props.onLocaleChange(locale);
    };

    this.onThemeSelected = theme => {
      const newState = _objectSpread({}, this.state);

      newState.theme = theme;
      this.setState(newState);
      this.props.onThemeChange(theme);
    };

    this.onPanelToggle = () => {
      const newState = _objectSpread({}, this.state);

      newState.expandDebugPanel = !newState.expandDebugPanel;
      this.setState(newState);
    };

    this.state = {
      expandDebugPanel: false,
      locale: this.props.locale,
      theme: this.props.theme
    };
    this.localeOptions = [];

    _i18n.default.getAllLocales().map(entry => {
      this.localeOptions.push({
        label: entry.name,
        value: entry.code
      });
    });

    this.themeOptions = [{
      label: 'Darkest',
      value: 'darkest'
    }, {
      label: 'Dark',
      value: 'dark'
    }, {
      label: 'Light',
      value: 'light'
    }, {
      label: 'Lightest',
      value: 'lightest'
    }];
  }

  render() {
    return _react.default.createElement("div", {
      className: 'debugPanelCont'
    }, _react.default.createElement("div", {
      className: `innerContainer ${this.state.expandDebugPanel ? 'visible' : ''}`
    }, _react.default.createElement(_Label.default, null, "DEBUGGER"), _react.default.createElement("div", {
      className: "debugItem"
    }, "Choose Locale"), _react.default.createElement(_Select.default, {
      onChange: this.onLocaleSelected,
      options: this.localeOptions,
      value: this.state.locale
    }), _react.default.createElement("div", {
      className: "debugItem"
    }, "Choose Theme"), _react.default.createElement(_Select.default, {
      onChange: this.onThemeSelected,
      options: this.themeOptions,
      value: this.state.theme
    })), _react.default.createElement(_Button.default, {
      className: "toggleButton",
      variant: "warning",
      onClick: this.onPanelToggle
    }, "Debug"));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = DebugPanel;
DebugPanel.defaultProps = {
  locale: 'en-US',
  theme: 'dark'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DebugPanel, "DebugPanel", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/debug-panel/DebugPanel.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssetMetaData = getAssetMetaData;
exports.pipLogger = exports.PIP_STR = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _uxp = __webpack_require__(48);

var _AppContext = __webpack_require__(122);

var _applications = _interopRequireDefault(__webpack_require__(43));

var _IAssetModel = __webpack_require__(113);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const PIP_STR = {
  // category
  ASSET_PANEL: 'Asset_Panel',
  // subcategory
  ASSET_SEARCH: 'Search',
  ASSET_DELETE: 'Asset_Delete',
  ASSET_RENAME: 'Asset_Rename',
  ASSET_GET_STARTED: 'Get_Started',
  ASSET_SCROLL: 'Asset_Scroll',
  ASSET_VIEW_SESSION_LAUNCH: 'View_At_Session_Launch',
  ASSET_VIEW_TYPE: 'ListView_GridView',
  ASSET_SOUND_PREVIEW: 'Sound_Preview',
  ASSET_TAB: 'AssetTab',
  ASSET_SECTION: 'SectionType',
  ASSET_NAME: 'AssetName',
  ASSET_TYPE: 'AssetType',
  ASSET_CATEGORY: 'AssetCategory',
  ASSET_SUBCATEGORY: 'AssetSubCategory',
  ASSET_TYPE_MOVIE_CLIP: 'Movieclip',
  ASSET_TYPE_GRAPHIC: 'Graphic',
  ASSET_TYPE_BUTTON: 'Button',
  ASSET_TYPE_IMAGE: 'Image',
  ASSET_TYPE_BACKGROUND_SCORE: 'Background_Score',
  ASSET_TYPE_SOUND_EFFECT: 'Sound_Effect',
  ASSET_ADDITIONAL_DETAILS: 'AdditionalDetails',
  // events
  ASSETS_PANEL_USAGE: 'Assets_Panel_Usage',
  ASSET_SCROLL_UP: 'Top',
  ASSET_SCROLL_SHOW_NEXT: 'Show_Next',
  ASSET_PREVIEW_PLAY: 'Play',
  ASSET_PREVIEW_STOP: 'Stop',
  // interaction method
  EVENT_SOURCE: 'Source:',
  ASSET_DOUBLE_CLICK: 'DoubleClick',
  ASSET_RIGHT_CLICK: 'RightClick',
  ASSET_BUTTON_CLICK: 'ButtonClick'
};
exports.PIP_STR = PIP_STR;

function getAssetType(inAsset) {
  let type = '';

  if (inAsset.assetType == _uxp.AssetTypeE.AUDIO) {
    if (inAsset.subCategory === 'Background scores') {
      type = PIP_STR.ASSET_TYPE_BACKGROUND_SCORE;
    } else if (inAsset.subCategory === 'Sound effects') {
      type = PIP_STR.ASSET_TYPE_SOUND_EFFECT;
    }
  } else {
    switch (inAsset.exportMode) {
      case _IAssetModel.ExportModeE.SCENE:
        type = 'Scene';
        break;

      case _IAssetModel.ExportModeE.SYMBOL:
        type = 'Symbol';
        break;
    }
  }

  return type;
}

function getAssetMetaData(inAsset) {
  const metaData = {
    [PIP_STR.ASSET_TAB]: _AppContext.appContext.getActiveTab(),
    [PIP_STR.ASSET_NAME]: inAsset.name,
    [PIP_STR.ASSET_SECTION]: inAsset.category,
    [PIP_STR.ASSET_CATEGORY]: inAsset.role.slice(0, -1),
    [PIP_STR.ASSET_SUBCATEGORY]: inAsset.subCategory.slice(0, -1),
    [PIP_STR.ASSET_TYPE]: getAssetType(inAsset)
  };
  return metaData;
}

class PIPLogger {
  constructor() {
    this._pipEventsMap = new Map();
  }

  logPIPEvent(pipEventData) {
    if (pipEventData.condition == 'logOnce') {
      const key = pipEventData.category + pipEventData.subCategory + pipEventData.eventName;

      if (this._pipEventsMap.has(key)) {
        return;
      }

      this._pipEventsMap.set(key, true);
    }

    _applications.default.logPIPEvent(pipEventData);
  }

  logPIPEventWithAssetInfo(pipEventData, inAsset) {
    if (pipEventData.condition == 'logOnce') {
      const key = pipEventData.category + pipEventData.subCategory + pipEventData.eventName;

      if (this._pipEventsMap.has(key)) {
        return;
      }

      this._pipEventsMap.set(key, true);
    }

    if (pipEventData.metadata) {
      pipEventData.metadata = _objectSpread({}, getAssetMetaData(inAsset), {}, pipEventData.metadata);
    } else {
      pipEventData.metadata = getAssetMetaData(inAsset);
    }

    _applications.default.logPIPEvent(pipEventData);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const pipLogger = new PIPLogger();
exports.pipLogger = pipLogger;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PIP_STR, "PIP_STR", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/PIPLogger.ts");
  reactHotLoader.register(getAssetType, "getAssetType", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/PIPLogger.ts");
  reactHotLoader.register(getAssetMetaData, "getAssetMetaData", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/PIPLogger.ts");
  reactHotLoader.register(PIPLogger, "PIPLogger", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/PIPLogger.ts");
  reactHotLoader.register(pipLogger, "pipLogger", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/PIPLogger.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportModeE = exports.RenditionSizeE = exports.AssetTypeE = void 0;

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

let AssetTypeE;
exports.AssetTypeE = AssetTypeE;

(function (AssetTypeE) {
  AssetTypeE[AssetTypeE["ANIMATION"] = 0] = "ANIMATION";
  AssetTypeE[AssetTypeE["STATIC"] = 1] = "STATIC";
  AssetTypeE[AssetTypeE["AUDIO"] = 2] = "AUDIO";
  AssetTypeE[AssetTypeE["IMAGE"] = 3] = "IMAGE";
  AssetTypeE[AssetTypeE["VECTOR"] = 4] = "VECTOR";
})(AssetTypeE || (exports.AssetTypeE = AssetTypeE = {}));

let RenditionSizeE;
exports.RenditionSizeE = RenditionSizeE;

(function (RenditionSizeE) {
  RenditionSizeE[RenditionSizeE["SQUARE"] = 0] = "SQUARE";
  RenditionSizeE[RenditionSizeE["RECTANGLE"] = 1] = "RECTANGLE";
})(RenditionSizeE || (exports.RenditionSizeE = RenditionSizeE = {}));

let ExportModeE;
exports.ExportModeE = ExportModeE;

(function (ExportModeE) {
  ExportModeE[ExportModeE["NONE"] = 0] = "NONE";
  ExportModeE[ExportModeE["SYMBOL"] = 1] = "SYMBOL";
  ExportModeE[ExportModeE["SCENE"] = 2] = "SCENE";
})(ExportModeE || (exports.ExportModeE = ExportModeE = {}));

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexColumn = exports.FlexRow = exports.FlexView = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const FlexView = props => {
  const styles = _objectSpread({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'auto'
  }, props.style);

  return _react.default.createElement("div", {
    style: styles
  }, props.children);
};

exports.FlexView = FlexView;

const FlexRow = props => {
  const styles = _objectSpread({
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  }, props.style);

  return _react.default.createElement("div", {
    style: styles
  }, props.children);
};

exports.FlexRow = FlexRow;

const FlexColumn = props => {
  const styles = _objectSpread({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }, props.style);

  return _react.default.createElement("div", {
    style: styles
  }, props.children);
};

exports.FlexColumn = FlexColumn;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FlexView, "FlexView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/FlexView.tsx");
  reactHotLoader.register(FlexRow, "FlexRow", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/FlexView.tsx");
  reactHotLoader.register(FlexColumn, "FlexColumn", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/FlexView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
const locales = [{
  code: 'en-US',
  name: 'English'
}, {
  code: 'fr-FR',
  name: 'French'
}, {
  code: 'de-DE',
  name: 'German'
}, {
  code: 'ja-JP',
  name: 'Japenese'
}, {
  code: 'ko-KR',
  name: 'Korean'
}, {
  code: 'es-ES',
  name: 'Spanish'
}, {
  code: 'cs-CZ',
  name: 'Czech Republic'
}, {
  code: 'it-IT',
  name: 'Italian'
}, {
  code: 'lv-LV',
  name: 'Latvian'
}, {
  code: 'nl-NL',
  name: 'Dutch'
}, {
  code: 'pl-PL',
  name: 'Polish'
}, {
  code: 'pt-BR',
  name: 'Portuguese'
}, {
  code: 'ru-RU',
  name: 'Russian'
}, {
  code: 'sv-SE',
  name: 'Swedish'
}, {
  code: 'tr-TR',
  name: 'Turkish'
}, {
  code: 'zh-CN',
  name: 'Chinese'
}, {
  code: 'zh-TW',
  name: 'Taiwanese'
}];

function getLocalizedMessages(filepath) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', filepath, true);
    xmlhttp.overrideMimeType('application/json');

    xmlhttp.onreadystatechange = () => {
      // local file will return status code 0, so checking for
      // xmlhttp.status == 200 will not work
      if (xmlhttp.readyState === 4 && xmlhttp.responseText) {
        try {
          resolve(JSON.parse(xmlhttp.responseText));
        } catch (err) {
          console.log(err);
          reject(err);
        }
      }
    };

    xmlhttp.send();
  });
}

function getAllLocales() {
  return locales;
}

const _default = {
  /**
  * Read the JSON file corresponding to the locale
  *
  * @param filepath		{String} containing the file path to the JSON data
   * @returns Promise that resolves to the JSON object containing locale specific messages
   */
  getLocalizedMessages: getLocalizedMessages,

  /**
   * Get all supported locales
   */
  getAllLocales: getAllLocales
};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locales, "locales", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/i18n.tsx");
  reactHotLoader.register(getLocalizedMessages, "getLocalizedMessages", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/i18n.tsx");
  reactHotLoader.register(getAllLocales, "getAllLocales", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/i18n.tsx");
  reactHotLoader.register(_default, "default", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/i18n.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(1184);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".debugPanelCont\n{\n\tposition: fixed;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 99999;\n\tdisplay: flex;\n\twidth: 80px;\n    height: 32px;\n}\n\n.debugItem\n{\n\tmargin-top : 10px;\n\tpadding-left: 2px;\n\tpadding-bottom: 5px;\n}\n\n.innerContainer\n{\n    display: none;\n}\n\n.visible.innerContainer\n{\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    height: 300px;\n    top: -304px;\n    right: 0px;\n    padding: 2px;\n\tborder: 2px solid #bbbbbb;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsViewDelegate = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
//import HostApp from '../applications';
class AssetsViewDelegate {
  importAssets() {//HostApp.getAssetsEndPoint().importAssets(null, null);
  }

  exportAssets() {//HostApp.getAssetsEndPoint().exportAssets(null, null);
  }

  saveAssets() {//HostApp.saveAssets(null, null);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetsViewDelegate = AssetsViewDelegate;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsViewDelegate, "AssetsViewDelegate", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/delegates/AssetsViewDelegate.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(1187);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App-cont {\n    margin: 0 auto;\n    width: 100%;\n}\n\n.appBackground\n{\n    background-color: rgb(50, 50, 50);\n}\n\n/* BLACK, GRAY-50, GRAY-300, GRAY-300 */\n.spectrum--darkest .appBackground { background-color: rgb(30, 30, 30); }\n.spectrum--dark .appBackground { background-color: rgb(50, 50, 50); }\n.spectrum--light .appBackground { background-color: rgb(245, 245, 245); }\n.spectrum--lightest .appBackground { background-color: rgb(255, 255, 255); }\n\n.iconContainer\n{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 32px;\n    height: 32px;\n}\n\n.spectrum--large .iconContainer\n{\n     width: 40px;\n     height: 40px;\n}\n\n.Assets-cont\n{\n    margin: 0 auto;\n    height: 100vh;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appContext = void 0;

var _Constants = __webpack_require__(103);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AppContext {
  constructor() {
    this._layoutMode = _Constants.LayoutModeE.GRID;
    this._bSearchMode = false;
    this._activeTab = 'Default';
    this._assetStores = void 0;
  }

  setLayoutMode(mode) {
    this._layoutMode = mode;
  }

  getLayoutMode() {
    return this._layoutMode;
  }

  setSearchMode(mode) {
    this._bSearchMode = mode;
  }

  isSearchMode() {
    return this._bSearchMode;
  }

  setActiveTab(tabId) {
    this._activeTab = tabId;
  }

  getActiveTab() {
    return this._activeTab;
  }

  setAssetStores(stores) {
    this._assetStores = stores;
  }

  getAssetStores() {
    return this._assetStores;
  }

  getAssetById(assetId) {
    if (this._assetStores) {
      const storeIndex = this._assetStores.findIndex(store => {
        return store.id === this._activeTab;
      });

      if (storeIndex !== -1) {
        const store = this._assetStores[storeIndex];

        for (const category of store.groups) {
          const assetIndex = category.assets.findIndex(asset => {
            return assetId === asset.id;
          });

          if (assetIndex !== -1) {
            return category.assets[assetIndex];
          }
        }
      }
    }

    return null;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const appContext = new AppContext();
exports.appContext = appContext;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppContext, "AppContext", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/AppContext.ts");
  reactHotLoader.register(appContext, "appContext", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/AppContext.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAssetsLoadedAction = createAssetsLoadedAction;
exports.createAssetsAddedAction = createAssetsAddedAction;
exports.createAssetsRemovedAction = createAssetsRemovedAction;
exports.createAssetsSelectionAddAction = createAssetsSelectionAddAction;
exports.createClearNewAssetsAddedAlertAction = createClearNewAssetsAddedAlertAction;
exports.createAssetsSelectionRemoveAction = createAssetsSelectionRemoveAction;
exports.createAssetsSelectionResetAction = createAssetsSelectionResetAction;

var _types = __webpack_require__(69);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function createAssetsLoadedAction(assetStores) {
  return {
    type: _types.ActionE.ASSETS_LOADED,
    payload: assetStores
  };
}

function createAssetsAddedAction(nodeInfo, assets) {
  return {
    type: _types.ActionE.ASSETS_ADDED,
    payload: {
      nodeInfo: nodeInfo,
      assets: assets
    }
  };
}

function createAssetsRemovedAction(nodeInfo, assets) {
  return {
    type: _types.ActionE.ASSETS_REMOVED,
    payload: {
      nodeInfo: nodeInfo,
      assets: assets
    }
  };
}

function createAssetsSelectionAddAction(id, assets) {
  return {
    type: _types.ActionE.ASSETS_SELECTION_ADD,
    payload: {
      id: id,
      items: assets
    }
  };
}

function createClearNewAssetsAddedAlertAction(nodeInfo) {
  return {
    type: _types.ActionE.ASSETS_CLEAR_NEW_ADDED_ALERT,
    payload: nodeInfo
  };
}

function createAssetsSelectionRemoveAction(id) {
  return {
    type: _types.ActionE.ASSETS_SELECTION_REMOVE,
    payload: id
  };
}

function createAssetsSelectionResetAction() {
  return {
    type: _types.ActionE.ASSETS_SELECTION_RESET
  };
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createAssetsLoadedAction, "createAssetsLoadedAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createAssetsAddedAction, "createAssetsAddedAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createAssetsRemovedAction, "createAssetsRemovedAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createAssetsSelectionAddAction, "createAssetsSelectionAddAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createClearNewAssetsAddedAlertAction, "createClearNewAssetsAddedAlertAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createAssetsSelectionRemoveAction, "createAssetsSelectionRemoveAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
  reactHotLoader.register(createAssetsSelectionResetAction, "createAssetsSelectionResetAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoreMgrActions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = exports.EventState = void 0;

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
let EventState;
exports.EventState = EventState;

(function (EventState) {
  EventState[EventState["NONE"] = 0] = "NONE";
  EventState[EventState["POINTER_ENTER"] = 1] = "POINTER_ENTER";
  EventState[EventState["POINTER_MOVE"] = 2] = "POINTER_MOVE";
  EventState[EventState["POINTER_LEAVE"] = 3] = "POINTER_LEAVE";
  EventState[EventState["POINTER_DOWN"] = 4] = "POINTER_DOWN";
  EventState[EventState["POINTER_UP"] = 5] = "POINTER_UP";
  EventState[EventState["POINTER_CLICK"] = 6] = "POINTER_CLICK";
  EventState[EventState["DRAG_START"] = 7] = "DRAG_START";
  EventState[EventState["DRAG_MOVE"] = 8] = "DRAG_MOVE";
  EventState[EventState["DRAG_END"] = 9] = "DRAG_END";
  EventState[EventState["DRAG_OVER"] = 10] = "DRAG_OVER";
  EventState[EventState["DROP"] = 11] = "DROP";
})(EventState || (exports.EventState = EventState = {}));

let NodeType;
exports.NodeType = NodeType;

(function (NodeType) {
  NodeType[NodeType["DRAG_SOURCE"] = 0] = "DRAG_SOURCE";
  NodeType[NodeType["DROP_TARGET"] = 1] = "DROP_TARGET";
})(NodeType || (exports.NodeType = NodeType = {}));

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomIcon = CustomIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function CustomIcon(props) {
  const {
    size = 'M',
    alt = '',
    className,
    viewBox = '0 0 36 36',
    children
  } = props,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["size", "alt", "className", "viewBox", "children"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    focusable: false,
    "aria-label": alt,
    "aria-hidden": alt ? null : true,
    role: 'img',
    viewBox: viewBox,
    className: `spectrum-Icon--size${size} ${className ? className : ''}`
  }, otherProps), children);
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomIcon, "CustomIcon", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/CustomIcon.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uxp = uxp;
exports.isUXP = isUXP;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
function uxp() {
  if (window.require) {
    return window.require('uxp');
  }

  return null;
}

function isUXP() {
  return uxp() !== null;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(uxp, "uxp", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/utils.ts");
  reactHotLoader.register(isUXP, "isUXP", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/utils.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ActionT", {
  enumerable: true,
  get: function () {
    return _types.ActionT;
  }
});
Object.defineProperty(exports, "ActionE", {
  enumerable: true,
  get: function () {
    return _types.ActionE;
  }
});
Object.defineProperty(exports, "AssetsStoreMgrStateT", {
  enumerable: true,
  get: function () {
    return _types.AssetsStoreMgrStateT;
  }
});
Object.defineProperty(exports, "AssetsSelectionT", {
  enumerable: true,
  get: function () {
    return _types.AssetsSelectionT;
  }
});
Object.defineProperty(exports, "AssetsSelectionStateT", {
  enumerable: true,
  get: function () {
    return _types.AssetsSelectionStateT;
  }
});
Object.defineProperty(exports, "AssetsDownloadStateT", {
  enumerable: true,
  get: function () {
    return _types.AssetsDownloadStateT;
  }
});
Object.defineProperty(exports, "StoreStateT", {
  enumerable: true,
  get: function () {
    return _types.StoreStateT;
  }
});
exports.store = exports.default = void 0;

var _redux = __webpack_require__(222);

var _types = __webpack_require__(69);

var _AssetsStoresMgrReducer = __webpack_require__(656);

var _AssetsSelectionReducer = __webpack_require__(657);

var _AssetsDownloadReducer = __webpack_require__(658);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const indexReducer = (0, _redux.combineReducers)({
  assetsStores: _AssetsStoresMgrReducer.assetsStoresMgrReducer,
  assetsSelections: _AssetsSelectionReducer.assetsSelectionReducer,
  assetsDownload: _AssetsDownloadReducer.assetsDownloadReducer
});
const store = (0, _redux.createStore)(indexReducer);
exports.store = store;
const _default = store;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(indexReducer, "indexReducer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/index.ts");
  reactHotLoader.register(store, "store", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/index.ts");
  reactHotLoader.register(_default, "default", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeInfo = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
class NodeInfo {
  constructor(obj) {
    this._storeId = void 0;
    this._categoryId = void 0;
    this._projectId = void 0;
    this._selfId = void 0;
    this._slug = void 0;
    const comps = [];

    if (obj.storeId) {
      this._storeId = obj.storeId;
      comps.push(this._storeId);
    }

    if (obj.categoryId) {
      this._categoryId = obj.categoryId;
      comps.push(this._categoryId);
    }

    if (obj.projectId) {
      this._projectId = obj.projectId;
      comps.push(this._projectId);
    }

    if (obj.selfId) {
      this._selfId = obj.selfId;
      comps.push(this._selfId);
    }

    this._slug = comps.join('-');
  }

  get slug() {
    return this._slug;
  }

  get storeId() {
    return this._storeId;
  }

  get categoryId() {
    return this._categoryId;
  }

  get projectId() {
    return this._projectId;
  }

  get selfId() {
    return this._selfId;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.NodeInfo = NodeInfo;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NodeInfo, "NodeInfo", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/NodeInfo.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollEdgeE = exports.Size = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
class Size {
  constructor(_x, _y) {
    this.x = void 0;
    this.y = void 0;
    this.x = _x;
    this.y = _y;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Size = Size;
let ScrollEdgeE;
exports.ScrollEdgeE = ScrollEdgeE;

(function (ScrollEdgeE) {
  ScrollEdgeE[ScrollEdgeE["NONE"] = 0] = "NONE";
  ScrollEdgeE[ScrollEdgeE["TOP"] = 1] = "TOP";
  ScrollEdgeE[ScrollEdgeE["LEFT"] = 2] = "LEFT";
  ScrollEdgeE[ScrollEdgeE["BOTTOM"] = 4] = "BOTTOM";
  ScrollEdgeE[ScrollEdgeE["RIGHT"] = 8] = "RIGHT";
})(ScrollEdgeE || (exports.ScrollEdgeE = ScrollEdgeE = {}));

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Size, "Size", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/containers/types.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragDropManager = void 0;

var _DragSource = __webpack_require__(966);

var _DropTarget = __webpack_require__(967);

var _constants = __webpack_require__(152);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class DragDropManager {
  static instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    this._sources = void 0;
    this._targets = void 0;
    this._activeDragSource = void 0;
    this._activeDropTarget = void 0;

    this.onPointerEnter = () => {
      console.log('DragDropManger::onPointerEnter');
    };

    this.onPointerLeave = e => {
      console.log('DragDropManger::onPointerLeave');

      if (this._activeDragSource) {
        this._activeDragSource.onDragedOut(e);
      }
    };

    this._sources = [];
    this._targets = [];
    this._activeDragSource = null;
    this._activeDropTarget = null;
    this.init();
  }

  init() {
    window.document.body.addEventListener('pointerenter', this.onPointerEnter);
    window.document.body.addEventListener('pointerleave', this.onPointerLeave);
  }

  deinit() {
    window.document.body.removeEventListener('pointerenter', this.onPointerEnter);
    window.document.body.removeEventListener('pointerleave', this.onPointerLeave);
  }

  register(node, type) {
    if (type == _constants.NodeType.DRAG_SOURCE) {
      const nodes = this._sources.filter(obj => obj.node === node);

      if (nodes.length == 0) {
        node._nodeType = 'source';

        this._sources.push(new _DragSource.DragSource(node));
      }
    } else if (type === _constants.NodeType.DROP_TARGET) {
      const nodes = this._targets.filter(obj => obj.node === node);

      if (nodes.length == 0) {
        node._nodeType = 'target';

        this._targets.push(new _DropTarget.DropTarget(node));
      }
    }
  }

  unregister(node) {
    let objectsCollection = [];

    if (node._nodeType === 'source') {
      objectsCollection = this._sources;
    } else if (node._nodeType == 'target') {
      objectsCollection = this._targets;
    }

    const matchedObjects = this._targets.filter(obj => obj.node === node);

    if (matchedObjects.length === 1) {
      const matchedObject = matchedObjects[0];
      const index = objectsCollection.indexOf(matchedObject);

      if (index !== -1) {
        this._sources.slice(index, 1);

        matchedObject.deinit();
      }
    }
  }

  set activeDragSource(source) {
    this._activeDragSource = source;
  }

  set activeDropTarget(target) {
    this._activeDropTarget = target;
  }

  dropedOnTarget(e, target) {
    if (target && target === this._activeDropTarget) {
      const event = new Event('_drop');
      Object.defineProperty(event, 'target', {
        value: target.node
      });
      Object.defineProperty(event, 'pageX', {
        value: e.pageX
      });
      Object.defineProperty(event, 'pageY', {
        value: e.pageY
      });
      Object.defineProperty(event, 'attachement', {
        value: this._activeDragSource.node
      });
      Object.defineProperty(event, 'attachements', {
        value: this._activeDragSource.activeNodes
      });

      this._activeDropTarget.node.dispatchEvent(event);
    }
  }
  /* useful get API's incase we want to query about nodes in drag operation */


  get activeDragNode() {
    return this._activeDragSource.node;
  }

  get activeDragNodes() {
    if (this._activeDragSource) {
      return this._activeDragSource.activeNodes;
    }

    return [];
  }

  get activeDropTargetNode() {
    return this._activeDropTarget.node;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.DragDropManager = DragDropManager;
DragDropManager._instance = null;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DragDropManager, "DragDropManager", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/gestures/DragDropManager.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HostApplicationBase = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class HostApplicationBase {
  get uxp() {
    return window.require && window.require('uxp');
  }

  get id() {
    return window.require('uxp').host.appCode;
  }

  get name() {
    return window.require('uxp').host.name;
  }

  get version() {
    return window.require('uxp').host.version;
  }

  get buildNumber() {
    return window.require('uxp').host.buildNumber;
  }

  get platform() {
    return window.require('uxp').host.platform;
  }

  get isWindows() {
    return this.platform === 'Windows';
  }

  get isMacOS() {
    return this.platform === 'MacOS';
  }

  get language() {
    return window.require('uxp').host.locale;
  }

  set language(lang) {}

  async getTheme() {
    return await window.require('uxp').host.getTheme();
  }

  async setTheme(theme) {
    return 'Not implemented';
  }

  async isAnalyticsEnabled() {
    return await window.require('uxp').host.canLogAnalyticsData;
  }

  async getPrefBoolean(_entry, _value) {
    return false;
  }

  async setPrefBoolean(entry, value) {
    return false;
  }

  async getPrefString(_entry, _defaultValue) {
    return '';
  }

  async setPrefString(_entry, _value) {
    return '';
  }

  getLocalizedString(value) {
    if (value.startsWith('$$$')) {
      const index = value.indexOf('=');

      if (index > 0) {
        return value.substring(index + 1, value.length);
      }
    }

    return value;
  }

  addThemeChangeListener(onThemeChange) {
    window.require('uxp').host.addEventListener('themechanged', onThemeChange);
  }

  getAssetsEndPoint() {
    return null;
  }

  async logPIPEvent(pipEventData) {
    return false;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.HostApplicationBase = HostApplicationBase;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HostApplicationBase, "HostApplicationBase", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/HostApplicationBase.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetModel = void 0;

var _IAssetModel = __webpack_require__(113);

var _utils = __webpack_require__(187);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const FILE_SCHEME = 'file://';

class AssetModel {
  constructor(id, name, rendition, categoryId, subCategory, role, keywords, autoKeywords, hasAudio, riggable, exportModeStr, authorName, copyright, description) {
    this._id = void 0;
    this._name = void 0;
    this._rendition = void 0;
    this._assetType = void 0;
    this._category = void 0;
    this._subCategory = void 0;
    this._role = void 0;
    this._keywords = void 0;
    this._autoKeywords = void 0;
    this._isFavorite = void 0;
    this._hasAudio = void 0;
    this._riggable = void 0;
    this._exportMode = void 0;
    this._authorName = void 0;
    this._copyright = void 0;
    this._description = void 0;
    this._id = id;
    this._name = name;
    this._rendition = rendition;
    this._category = categoryId;
    this._subCategory = subCategory;
    this._role = role;
    this._keywords = keywords;
    this._autoKeywords = autoKeywords;
    this._isFavorite = false;
    this._hasAudio = hasAudio;
    this._riggable = riggable;

    this._categoryIdToAssetType(categoryId);

    this._transformRenditionPathsToUrls();

    this._setExportMode(exportModeStr);

    this._authorName = authorName;
    this._copyright = copyright;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get assetType() {
    return this._assetType;
  }

  get category() {
    return this._category;
  }

  get subCategory() {
    return this._subCategory;
  }

  get role() {
    return this._role;
  }

  get keywords() {
    return this._keywords || [];
  }

  get autoKeywords() {
    return this._autoKeywords || [];
  }

  get authorName() {
    return this._authorName;
  }

  get copyright() {
    return this._copyright;
  }

  get description() {
    return this._description;
  }

  get favorite() {
    return this._isFavorite;
  }

  get hasAudio() {
    return this._hasAudio;
  }

  get riggable() {
    return this._riggable;
  }

  get exportMode() {
    return this._exportMode;
  }

  setName(name) {
    this._name = name;
  }

  hasStaticRendition(type = _IAssetModel.RenditionSizeE.RECTANGLE, resolution = 1) {
    const sizeStr = this._renditionSizeTypeToString(type);

    return this._hasRenditionEntry(this._rendition.static, sizeStr, resolution);
  }

  hasDynamicRendition(type = _IAssetModel.RenditionSizeE.RECTANGLE, resolution = 1) {
    const sizeStr = this._renditionSizeTypeToString(type);

    return this._hasRenditionEntry(this._rendition.dynamic, sizeStr, resolution);
  }

  staticRendition(type = _IAssetModel.RenditionSizeE.RECTANGLE, resolution = 1) {
    const sizeStr = this._renditionSizeTypeToString(type);

    return this._getRenditionEntry(this._rendition.static, sizeStr, resolution);
  }

  dynamicRendition(type = _IAssetModel.RenditionSizeE.RECTANGLE, resolution = 1) {
    const sizeStr = this._renditionSizeTypeToString(type);

    return this._getRenditionEntry(this._rendition.dynamic, sizeStr, resolution);
  }

  _categoryIdToAssetType(categoryId) {
    switch (categoryId) {
      case 'Animation':
        {
          this._assetType = _IAssetModel.AssetTypeE.ANIMATION;
          break;
        }

      default:
      case 'Static':
        {
          this._assetType = _IAssetModel.AssetTypeE.STATIC;
          break;
        }

      case 'SoundClips':
      case 'Sound clips':
        {
          this._assetType = _IAssetModel.AssetTypeE.AUDIO;
          break;
        }
    }
  }

  _renditionSizeTypeToString(size) {
    switch (size) {
      case _IAssetModel.RenditionSizeE.SQUARE:
        return 'square';

      case _IAssetModel.RenditionSizeE.RECTANGLE:
        return 'rectangle';
    }
  }

  _hasRenditionEntry(rendition, type, resolution) {
    if (rendition && rendition[type] && rendition[type].length >= resolution) return true;
    return false;
  }

  _getRenditionEntry(rendition, type, resolution) {
    if (this._hasRenditionEntry(rendition, type, resolution)) return rendition[type][resolution - 1];
    return '';
  }

  _setRenditionEntry(rendition, type, resolution, val) {
    if (this._hasRenditionEntry(rendition, type, resolution)) return rendition[type][resolution - 1] = val;
  }

  _transformRenditionPathsToUrls() {
    const isUxp = (0, _utils.isUXP)();

    for (const size of [_IAssetModel.RenditionSizeE.RECTANGLE, _IAssetModel.RenditionSizeE.SQUARE]) {
      for (const resolution of [1, 2]) {
        let finalPath;

        const sizeStr = this._renditionSizeTypeToString(size);

        if (this.hasStaticRendition(size, resolution)) {
          const staticPath = this._getRenditionEntry(this._rendition.static, sizeStr, resolution);

          let index = staticPath.lastIndexOf('/');

          if (index !== -1) {
            ++index;
            const basePath = staticPath.substring(0, index); // adhiman: encode filename for allowing special characters ['@', '#']

            const fileName = window.encodeURIComponent(staticPath.substring(index));

            if (isUxp) {
              finalPath = FILE_SCHEME + basePath + fileName;
            } else {
              finalPath = basePath + fileName;
            }

            this._setRenditionEntry(this._rendition.static, sizeStr, resolution, finalPath);
          }
        } else if (this.hasDynamicRendition(size, resolution)) {
          const dynamicPath = this._getRenditionEntry(this._rendition.dynamic, sizeStr, resolution);

          if (isUxp) {
            finalPath = FILE_SCHEME + dynamicPath;
          } else {
            finalPath = dynamicPath;
          }

          this._setRenditionEntry(this._rendition.dynamic, sizeStr, resolution, finalPath);
        }
      }
    }
  }

  _setExportMode(exportModeStr) {
    console.log(exportModeStr);
    let exportMode = _IAssetModel.ExportModeE.NONE;

    switch (exportModeStr) {
      case 'Scene':
        {
          exportMode = _IAssetModel.ExportModeE.SCENE;
          break;
        }

      case 'Symbol':
        {
          exportMode = _IAssetModel.ExportModeE.SYMBOL;
          break;
        }
    }

    this._exportMode = exportMode;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetModel = AssetModel;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FILE_SCHEME, "FILE_SCHEME", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetModel.ts");
  reactHotLoader.register(AssetModel, "AssetModel", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetModel.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsGroup = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsGroup {
  constructor(id, name, subCategories, roles) {
    this._id = void 0;
    this._name = void 0;
    this._assets = void 0;
    this._assetsMap = new Map();
    this._subCategories = void 0;
    this._roles = void 0;
    this._id = id;
    this._name = name;
    this._assets = [];
    this._roles = roles;
    this._subCategories = subCategories;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get assets() {
    return this._assets;
  }

  get subCategories() {
    return this._subCategories || [];
  }

  get roles() {
    return this._roles || [];
  }

  addAsset(asset) {
    this._assets.push(asset);

    this._assetsMap.set(asset.id, asset);
  }

  insertAtFront(asset) {
    if (!this._assetsMap.has(asset.id)) {
      this._assetsMap.set(asset.id, asset);

      this._assets.unshift(asset);
    }
  }

  removeAsset(asset) {
    if (this._assetsMap.has(asset.id)) {
      this.removeAssetById(asset.id);
    }
  }

  removeAssetById(assetId) {
    const index = this._assets.findIndex(item => item.id === assetId);

    if (index !== -1) {
      this._assets.splice(index, 1);

      this._assetsMap.delete(assetId);
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetsGroup = AssetsGroup;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsGroup, "AssetsGroup", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetsGroup.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsStore = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsStore {
  constructor(id, name) {
    this._id = void 0;
    this._name = void 0;
    this._categories = [];
    this._categoriesMap = new Map();
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get groups() {
    return this._categories;
  }

  getGroup(id) {
    if (this._categoriesMap.has(id)) {
      return this._categoriesMap.get(id);
    }

    return null;
  }

  addGroup(category) {
    this._categories.push(category);

    this._categoriesMap.set(category.id, category);
  }

  replaceGroup(category) {
    if (this._categoriesMap.has(category.id)) {
      this._categoriesMap.set(category.id, category);

      const index = this._categories.findIndex(item => item.id === category.id);

      if (index !== -1) {
        this._categories[index] = category;
      }
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetsStore = AssetsStore;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsStore, "AssetsStore", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetsStore.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapHostStatusToClientStatus = mapHostStatusToClientStatus;
exports.transformAssetDownloadResponse = transformAssetDownloadResponse;
exports.fetchAssetsDownloadStatusAction = fetchAssetsDownloadStatusAction;
exports.downloadAssetsAction = downloadAssetsAction;

var _types = __webpack_require__(69);

var _applications = _interopRequireDefault(__webpack_require__(43));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function mapHostStatusToClientStatus(status) {
  let value = _types.DownloadStatusE.ASSETS_DOWNLOAD_NONE_AVAILABLE;

  switch (status) {
    case 'NewAssetsAvailable':
      value = _types.DownloadStatusE.ASSETS_NEW_AVAILABLE;
      break;

    case 'AssetsDownloading':
      value = _types.DownloadStatusE.ASSETS_DOWNLOADING;
      break;

    case 'AssetsDownloadSuccess':
      value = _types.DownloadStatusE.ASSETS_DOWNLOAD_SUCCESS;
      break;

    case 'AssetsDownloadFailed':
      value = _types.DownloadStatusE.ASSETS_DOWNLOAD_FAILED;
      break;

    case 'AssetsDownloadMoreAvailable':
      value = _types.DownloadStatusE.ASSETS_DOWNLOAD_MORE_AVAILABLE;
      break;

    case 'AssetsDownloadNoneAvailable':
      value = _types.DownloadStatusE.ASSETS_DOWNLOAD_NONE_AVAILABLE;
      break;

    case 'NetworkUnavailable':
      value = _types.DownloadStatusE.NETWORK_UNAVAILABLE;
      break;

    default:
      alert('unexpected state' + status);
  }

  return value;
}

function transformAssetDownloadResponse(response) {
  let payload;

  try {
    const data = JSON.parse(response);
    payload = {
      status: mapHostStatusToClientStatus(data.data.state),
      message: data.data.message
    };
  } catch (ex) {
    payload = {
      status: _types.DownloadStatusE.ASSETS_DOWNLOAD_NONE_AVAILABLE,
      message: ''
    };
  }

  return payload;
}

function fetchAssetsDownloadStatusAction(dispatch) {
  _applications.default.getAssetsEndPoint().getAssetsDownloadStatus().then(response => {
    const payload = transformAssetDownloadResponse(response);
    dispatch({
      type: _types.ActionE.ASSETS_DOWNLOAD_STATUS_CHANGED,
      payload: payload
    });
  }).catch(error => {
    console.log(error);
  });
}

function downloadAssetsAction(_dispatch) {
  const request = {
    storeId: 'Default',
    count: 0
  };

  _applications.default.getAssetsEndPoint().downloadAssets(request);
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapHostStatusToClientStatus, "mapHostStatusToClientStatus", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadActions.ts");
  reactHotLoader.register(transformAssetDownloadResponse, "transformAssetDownloadResponse", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadActions.ts");
  reactHotLoader.register(fetchAssetsDownloadStatusAction, "fetchAssetsDownloadStatusAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadActions.ts");
  reactHotLoader.register(downloadAssetsAction, "downloadAssetsAction", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadActions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetsAddedBroadcaster = void 0;

var _Broadcaster = __webpack_require__(659);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const assetsAddedBroadcaster = new _Broadcaster.Broadcaster();
exports.assetsAddedBroadcaster = assetsAddedBroadcaster;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(assetsAddedBroadcaster, "assetsAddedBroadcaster", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/broadcasters/AssetsAddedBroadcaster.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(28);

var _Icon2 = _interopRequireDefault(_Icon);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(_Icon2.default, props, _react2.default.createElement("svg", {
    className: "spectrum-UIIcon-ArrowDownSmall"
  }, _react2.default.createElement("path", {
    d: "M7.99,3.99a.9999.9999,0,0,1-1.70734.70673L5,3.41406V9A1.00005,1.00005,0,0,1,3,9V3.41406L1.71734,4.69673A.9999.9999,0,1,1,.30327,3.28266L3.29266.30327a.99965.99965,0,0,1,1.41468,0L7.69673,3.28266A.99669.99669,0,0,1,7.99,3.99Z",
    className: "spectrum-UIIcon--medium"
  }), _react2.default.createElement("path", {
    d: "M7.99,3.99a.9999.9999,0,0,1-1.70734.70673L5,3.41406V9A1.00005,1.00005,0,0,1,3,9V3.41406L1.71734,4.69673A.9999.9999,0,1,1,.30327,3.28266L3.29266.30327a.99965.99965,0,0,1,1.41468,0L7.69673,3.28266A.99669.99669,0,0,1,7.99,3.99Z",
    className: "spectrum-UIIcon--large"
  })));
};

WrappedIcon.displayName = 'ArrowUpSmall';
exports.default = WrappedIcon;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_Icon2, "_Icon2", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/Icon/ArrowUpSmall.js");
  reactHotLoader.register(_react2, "_react2", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/Icon/ArrowUpSmall.js");
  reactHotLoader.register(_interopRequireDefault, "_interopRequireDefault", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/Icon/ArrowUpSmall.js");
  reactHotLoader.register(WrappedIcon, "WrappedIcon", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/Icon/ArrowUpSmall.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _uxp = __webpack_require__(48);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AutoSizer extends _react.default.Component {
  constructor(props) {
    super(props);
    this._autoSizer = void 0;
    this._parentElem = void 0;
    this._window = void 0;

    this._onResize = () => {
      //console.log('AutoSizer::_onResize');
      const {
        disableHeight,
        disableWidth,
        onResize
      } = this.props;

      if (this._parentElem) {
        const height = this._parentElem.offsetHeight || 0;
        const width = this._parentElem.offsetWidth || 0;
        const win = this._window || window;
        const style = win.getComputedStyle(this._parentElem) || {};
        const paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        const paddingRight = parseInt(style.paddingRight, 10) || 0;
        const paddingTop = parseInt(style.paddingTop, 10) || 0;
        const paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        const newHeight = height - paddingTop - paddingBottom;
        const newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && this.state.height !== newHeight || !disableWidth && this.state.width !== newWidth) {
          this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });
          onResize({
            height,
            width
          });
        }
      }
    };

    this.state = {
      height: this.props.defaultHeight || 0,
      width: this.props.defaultWidth || 0
    };
  }

  componentDidMount() {
    if (this._autoSizer && this._autoSizer.parentElement && this._autoSizer.parentElement.ownerDocument && this._autoSizer.parentElement.ownerDocument.defaultView) {
      this._window = window;
      this._parentElem = this._autoSizer.parentElement;

      if ((0, _uxp.isUXP)()) {
        this._parentElem.addEventListener('resize', this._onResize);
      } else {
        this._window.addEventListener('resize', this._onResize);

        this._onResize();
      }
    }
  }

  render() {
    const {
      children,
      className,
      disableHeight,
      disableWidth,
      style
    } = this.props;
    const {
      height,
      width
    } = this.state;
    const outerStyle = {
      width: '100%',
      height: '100%',
      overflow: 'visible'
    };
    const childParams = {};

    if (!disableHeight) {
      outerStyle.height = 0;
      childParams.height = height;
    }

    if (!disableWidth) {
      outerStyle.width = 0;
      childParams.width = width;
    }

    return _react.default.createElement("div", {
      className: className,
      ref: v => this._autoSizer = v,
      style: _objectSpread({}, outerStyle, {}, style),
      "data-name": "__AUTO_SIZER__"
    }, children(childParams));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AutoSizer;
AutoSizer.defaultProps = {
  onResize: () => {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AutoSizer, "AutoSizer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/third_party/AutoSizer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dragable = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _gestures = __webpack_require__(965);

var _uxp = __webpack_require__(48);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const cursorElement = document.createElement('div');
cursorElement.setAttribute('style', 'position: absolute; width: 18px; height: 18px; border: 1px solid #ccc;');
cursorElement.innerHTML = '<img style="width: 18px; height: 18px" />';

class Dragable extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this._viewRef = void 0;
    this._cursor = void 0;

    this.onDragStart = e => {
      console.log('Dragable:onDragStart'); //this.setCursor(e);

      if (this.props.onDragStart_) {
        this.props.onDragStart_(e, this);
      }
    };

    this.onDragMove = e => {
      //console.log('Dragable:onDragMove', e.clientX, e.clientY);
      //this.updateCursor(e);
      if (this.props.onDragMove_) {
        this.props.onDragMove_(e, this);
      }
    };

    this.onDragEnd = e => {
      console.log('Dragable:onDragEnd'); //this.unsetCursor(e);

      if (this.props.onDragEnd_) {
        this.props.onDragEnd_(e, this);
      }
    };

    this.onDragedOut = e => {
      console.log('Dragable:onDragedOut'); //this.unsetCursor(e);

      if (this.props.onDragedOut_) {
        this.props.onDragedOut_(e, this);
      }
    };
  }

  setCursor(e) {
    //window.document.body.style.cursor = 'copy';
    this._cursor = window.document.body.appendChild(cursorElement);

    this._cursor.querySelector('img').setAttribute('src', 'images/Smock_AddCircle_18_N.svg');

    this.updateCursor(e);
  }

  unsetCursor(e) {
    //window.document.body.style.cursor = 'default';
    this.updateCursor(e);

    if (this._cursor && this._cursor.parentElement) {
      this._cursor.parentElement.removeChild(this._cursor);
    }
  }

  updateCursor(e) {
    if (this._cursor) {
      const newX = !(0, _uxp.isUXP)() ? e.clientX + 10 : e.pageX + 10;
      const newY = !(0, _uxp.isUXP)() ? e.clientY + 10 : e.pageY + 10;
      this._cursor.style.left = newX + 'px';
      this._cursor.style.top = newY + 'px';
    }
  }

  componentDidMount() {
    const dragDropMgr = _gestures.DragDropManager.instance();

    dragDropMgr.register(this._viewRef, _gestures.NodeType.DRAG_SOURCE);

    this._viewRef.addEventListener('_dragstart', this.onDragStart);

    this._viewRef.addEventListener('_dragmove', this.onDragMove);

    this._viewRef.addEventListener('_dragend', this.onDragEnd);

    this._viewRef.addEventListener('_dragedout', this.onDragedOut);
  }

  componentWillUnmount() {
    const dragDropMgr = _gestures.DragDropManager.instance();

    dragDropMgr.unregister(this._viewRef);

    this._viewRef.removeEventListener('_dragstart', this.onDragStart);

    this._viewRef.removeEventListener('_dragmove', this.onDragMove);

    this._viewRef.removeEventListener('_dragend', this.onDragEnd);

    this._viewRef.removeEventListener('_dragedout', this.onDragedOut);
  }

  render() {
    const _this$props = this.props,
          {
      TagName,
      children,
      ['itemId']: itemIdIgnore,
      ['onDragStart_']: onDragStartIgnore,
      ['onDragMove_']: onDragMoveIgnore,
      ['onDragEnd_']: onDragEndIgnore,
      ['onDragedOut_']: onDragedOutIgnore
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["TagName", "children", "itemId", "onDragStart_", "onDragMove_", "onDragEnd_", "onDragedOut_"]);
    return _react.default.createElement(TagName, (0, _extends2.default)({
      ref: v => this._viewRef = v,
      className: "ui-adapt",
      "data-name": "__DRAGABLE__"
    }, otherProps), children);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Dragable = exports.default = Dragable;
Dragable.defaultProps = {
  TagName: 'div'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cursorElement, "cursorElement", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/Dragable.tsx");
  reactHotLoader.register(Dragable, "Dragable", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/Dragable.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _uxp = __webpack_require__(48);

var _Button = _interopRequireDefault(__webpack_require__(33));

var _AudioAssetPreview = _interopRequireDefault(__webpack_require__(969));

var _AnimatedAssetPreview = _interopRequireDefault(__webpack_require__(977));

var _StaticAssetPreview = _interopRequireDefault(__webpack_require__(983));

var _Circle = _interopRequireDefault(__webpack_require__(383));

var _AssetPreviewM = _interopRequireDefault(__webpack_require__(984));

var _InfoButton = _interopRequireDefault(__webpack_require__(986));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetPreview extends _react.default.Component {
  constructor(props) {
    super(props);
    this._viewRef = void 0;
    this.state = {
      showDynamicRendition: false
    };
  }

  showDynamicRendition(show) {
    this.setState({
      showDynamicRendition: show
    });
  }

  onButtonClick() {
    if (window.require('uxp').AnAssets) window.require('uxp').AnAssets.showCopyrightMessage();
  }

  renderControls() {
    let styles = {};

    if (this.props.renditionSize === _uxp.RenditionSizeE.SQUARE) {
      styles = {
        width: '16px',
        height: '16px'
      };
    } else {
      styles = {
        width: '24px',
        height: '24px'
      };
    }

    if (this.props.asset.riggable) {
      return _react.default.createElement("div", {
        className: _AssetPreviewM.default.previewControls
      }, _react.default.createElement("div", {
        className: _AssetPreviewM.default.riggableMarkerCont,
        style: styles
      }, _react.default.createElement(_Circle.default, {
        radius: 8,
        fillColor: 'rgba(202, 41, 150, 1)',
        boundarySize: '1px',
        boundaryColor: 'white'
      })));
    }

    return null;
  }

  render() {
    const _this$props = this.props,
          {
      asset,
      style,
      renditionSize
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["asset", "style", "renditionSize"]);

    const styles = _objectSpread({
      minWidth: '30px',
      minHeight: '30px',
      width: '100%',
      height: '100%'
    }, style);

    const finalProps = _objectSpread({}, otherProps, {
      style: _objectSpread({}, styles)
    }); //console.log('finalProps: ', finalProps);


    let preview;
    let infoButton;

    if (asset.authorName !== '') {
      infoButton = _react.default.createElement("div", {
        className: _AssetPreviewM.default.infopreviewControls,
        onClick: this.onButtonClick
      }, _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "tool",
        icon: _react.default.createElement(_InfoButton.default, null)
      }));
    }

    if (asset.assetType == _uxp.AssetTypeE.AUDIO) {
      preview = _react.default.createElement(_AudioAssetPreview.default, (0, _extends2.default)({
        asset: asset
      }, finalProps));
    } else if (this.state.showDynamicRendition && asset.hasDynamicRendition() && (0, _uxp.isUXP)()) {
      preview = _react.default.createElement(_AnimatedAssetPreview.default, (0, _extends2.default)({
        asset: asset
      }, finalProps));
    } else {
      preview = _react.default.createElement(_StaticAssetPreview.default, (0, _extends2.default)({
        asset: asset,
        renditionSize: renditionSize
      }, finalProps));
    }

    return _react.default.createElement("div", {
      className: _AssetPreviewM.default.previewCont,
      "data-name": '__ASSET_PREVIEW__'
    }, preview, infoButton);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetPreview;
AssetPreview.defaultProps = {
  renditionSize: _uxp.RenditionSizeE.RECTANGLE
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetPreview, "AssetPreview", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/preview/AssetPreview.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlayCircle;

var _react = _interopRequireDefault(__webpack_require__(0));

var _CustomIcon = __webpack_require__(153);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function PlayCircle(props) {
  return _react.default.createElement(_CustomIcon.CustomIcon, props, _react.default.createElement("g", {
    "data-name": "i c o n s",
    id: "i_c_o_n_s"
  }, _react.default.createElement("path", {
    d: "M18,1.99951a16,16,0,1,0,16,16A16.00048,16.00048,0,0,0,18,1.99951Zm8.53711,16.86084-12.02734,7A1.00035,1.00035,0,0,1,14,26H13a.99974.99974,0,0,1-1-1V11a.99974.99974,0,0,1,1-1h1a1.00035,1.00035,0,0,1,.50977.13965l12.02734,7A1.00032,1.00032,0,0,1,26.53711,18.86035Z",
    fill: "#fff",
    opacity: "0.7"
  })));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PlayCircle, "PlayCircle", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/PlayCircle.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(13));

var _AudioPlayerView = _interopRequireDefault(__webpack_require__(972));

var _uxp = __webpack_require__(48);

var _applications = _interopRequireDefault(__webpack_require__(43));

var _ObjectsStore = __webpack_require__(102);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AudioPlayer {
  static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  constructor() {
    this._onlyAudioPlayerView = void 0;
    this._playbackCompleteListener = void 0;
    this._trackId = void 0;

    this.onPlaybackComplete = () => {
      if (this._playbackCompleteListener) {
        this._playbackCompleteListener();
      }

      this._trackId = null;

      _ObjectsStore.defaultStore.removeObject('playing_audio_asset');
    };

    this.onAssetDelete = assets => {
      for (const id of assets) {
        if (id === this._trackId) {
          this.stop();
        }
      }
    };

    this.ensureAudioPlayerView();

    _applications.default.getAssetsEndPoint().addAssetDeleteListener(this.onAssetDelete);
  }

  ensureAudioPlayerView() {
    if (!this._onlyAudioPlayerView) {
      const controls = document.getElementById('root');
      let audioContainer = document.getElementById('audio_player_cont');

      if (!audioContainer) {
        audioContainer = document.createElement('div');
        audioContainer.setAttribute('id', 'audio_player_cont');
        controls.appendChild(audioContainer);
      }

      const audioPlayerComp = _react.default.createElement(_AudioPlayerView.default, {
        ref: v => this._onlyAudioPlayerView = v,
        customAttributes: {
          FilePath: ''
        },
        onPlaybackComplete: this.onPlaybackComplete
      });

      _reactDom.default.render(audioPlayerComp, audioContainer);
    }
  }

  addPlaybackCompleteListener(func) {
    this._playbackCompleteListener = func;
  }

  getActiveTrackId() {
    return this._trackId;
  }

  play(asset) {
    if (asset.assetType == _uxp.AssetTypeE.AUDIO) {
      this._onlyAudioPlayerView.play(asset.dynamicRendition());

      this._trackId = asset.id;

      _ObjectsStore.defaultStore.addObject('playing_audio_asset', asset.id);
    }
  }

  stop() {
    if (this._trackId) {
      this._onlyAudioPlayerView.stop();

      this._trackId = null;

      _ObjectsStore.defaultStore.removeObject('playing_audio_asset');
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AudioPlayer;
AudioPlayer._instance = void 0;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AudioPlayer, "AudioPlayer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AudioPlayer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Circle extends _react.default.Component {
  render() {
    const {
      radius,
      fillColor,
      boundaryColor,
      boundarySize
    } = this.props;
    const styles = {
      borderRadius: '50%',
      background: fillColor,
      width: radius,
      height: radius,
      border: `${boundarySize} solid ${boundaryColor}`
    };
    return _react.default.createElement("div", {
      style: styles
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = Circle;
Circle.defaultProps = {
  fillColor: 'transarent',
  boundaryColor: 'transparent',
  boundarySize: '1px'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Circle, "Circle", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/Circle.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selectable = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(988);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Selectable extends _react.default.Component {
  constructor(props) {
    super(props);
    this._viewRef = null;

    this.onPointerDown = _e => {
      this.doSelect();
    };

    this.onPointerRightClick = _e => {
      this.doSelect();
    };

    this.state = {
      selected: this.props.selectionContext.isSelected(this.props.dataSelectionId)
    };
  }

  doSelect() {
    if (this._viewRef) {
      const {
        selectionContext
      } = this.props;

      const selectionAttr = this._viewRef.getAttribute('data-selection-id');

      selectionContext.reset();
      selectionContext.addSelected(selectionAttr);
      console.log(selectionAttr, true);
      this.setState({
        selected: true
      });
    }
  }

  render() {
    const _this$props = this.props,
          {
      selectionContext,
      dataSelectionId,
      TagName,
      style,
      className
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["selectionContext", "dataSelectionId", "TagName", "style", "className"]);

    const styles = _objectSpread({}, style, {
      position: 'relative'
    });

    const classNames = `${selectionContext.isSelected(dataSelectionId) ? 'selected-2px' : ''}`;
    return _react.default.createElement(TagName, (0, _extends2.default)({
      ref: v => this._viewRef = v,
      className: `ui-adapt ${className ? className : ''} ${classNames}`,
      "data-name": "__SELECTABLE__",
      "data-selection-id": dataSelectionId,
      onPointerDown: this.onPointerDown,
      onContextMenu: this.onPointerRightClick,
      style: styles
    }, otherProps), this.props.children);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Selectable = exports.default = Selectable;
Selectable.defaultProps = {
  TagName: 'div'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Selectable, "Selectable", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/Selectable.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionContext = exports.default = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class SelectionContext {
  constructor(singleSelection) {
    this._selectedMap = {};
    this._onSelectionChange = void 0;
    this._singleSelection = false;
    this._singleSelection = singleSelection;
  }

  getSelectedList() {
    return Object.keys(this._selectedMap);
  }

  addSelected(key) {
    this._selectedMap[key] = true;
    this.notify();
  }

  toggleSelected(key) {
    const selected = this._selectedMap[key] ? true : false;

    if (this._singleSelection) {
      this.reset();

      if (!selected) {
        this._selectedMap[key] = true;
      }

      this.notify();
    } else {
      if (selected) {
        delete this._selectedMap[key];
      } else {
        this._selectedMap[key] = true;
      }
    }

    return !selected;
  }

  isSelected(key) {
    return this._selectedMap[key] !== undefined;
  }

  notify() {
    if (this._onSelectionChange) {
      this._onSelectionChange();
    }
  }

  reset() {
    this._selectedMap = {};
    this.notify();
  }

  addSelectionChangeListener(inFunc) {
    this._onSelectionChange = inFunc;
  }

  removeSelectionChangeListener(inFunc) {
    if (this._onSelectionChange === inFunc) {
      this._onSelectionChange = null;
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.SelectionContext = exports.default = SelectionContext;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectionContext, "SelectionContext", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/SelectionContext.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _ContextMenu = _interopRequireDefault(__webpack_require__(992));

var _Localizer = __webpack_require__(44);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsContextMenu extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this._menuRef = void 0;
    this._asset = void 0;

    this.onMenuItemClicked = (e, menuItem) => {
      const {
        onRenameClick,
        onDeleteClick
      } = this.props;
      console.log(e, 'item clicked:', menuItem.title);

      switch (menuItem.id) {
        case 'delete':
          {
            if (onDeleteClick) {
              onDeleteClick(e, this._asset);
            }

            break;
          }

        case 'rename':
          {
            if (onRenameClick) {
              onRenameClick(e, this._asset);
            }

            break;
          }

        default:
          {
            alert('invalid context menu selection ' + menuItem.id);
            break;
          }
      }
    };
  }

  /* eslint-disable quotes */
  getItems() {
    const assetsContextMenuItems = [{
      id: 'rename',
      title: _Localizer.localizer.getString("$$$/AssetsPanel/Assets/ContextItem/Rename/label=Rename..."),
      action: this.onMenuItemClicked
    }, {
      id: 'delete',
      title: _Localizer.localizer.getString("$$$/AssetsPanel/Assets/ContextItem/Delete/label=Delete"),
      action: this.onMenuItemClicked
    }];
    return assetsContextMenuItems;
  }

  showAt(asset, x, y) {
    this._asset = asset;

    this._menuRef.showAt(x, y);
  }

  render() {
    const items = this.getItems();
    return _react.default.createElement(_ContextMenu.default, {
      ref: v => this._menuRef = v,
      items: items
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsContextMenu;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsContextMenu, "AssetsContextMenu", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsContextMenu.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Localizer = __webpack_require__(44);

var _AppContext = __webpack_require__(122);

__webpack_require__(993);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsEmptyView extends _react.default.Component {
  /* eslint-disable quotes */
  renderMessage() {
    if (_AppContext.appContext.isSearchMode() || _AppContext.appContext.getActiveTab() == 'Default') {
      return _Localizer.localizer.getString("$$$/AssetPanel/NoMatchingAssets/title=No matching assets found!");
    } else {
      return _react.default.createElement("div", {
        className: 'noContentsInner'
      }, _react.default.createElement("i", null, _Localizer.localizer.getString("$$$/AssetPanel/NoAssetsFound/title=No assets found.")), _react.default.createElement("i", null, _Localizer.localizer.getString("$$$/AssetPanel/StartSaving/title=Start saving or importing assets.")));
    }
  }

  render() {
    const _this$props = this.props,
          {
      className
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: `noContentsBox ${className ? className : ''}`
    }, otherProps), this.renderMessage());
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsEmptyView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsEmptyView, "AssetsEmptyView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsEmptyView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(412);


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireWildcard = __webpack_require__(22);

var _interopRequireDefault = __webpack_require__(3);

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(415);

__webpack_require__(416);

__webpack_require__(602);

var serviceWorker = _interopRequireWildcard(__webpack_require__(604));

var _AppController = __webpack_require__(605);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Polyfill for UXP not supporting window.history
if (window.history === undefined) {
  window.history = History;
} // Polyfill for UXP using React


if (window.React === undefined) {
  window.React = _react.default;
}

const disableReactDevTools = () => {
  const noop = () => undefined;

  const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (typeof DEV_TOOLS === 'object') {
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
    }
  }
};

disableReactDevTools();
const controller = new _AppController.AppController();
controller.init().then(async () => {
  controller.loadView();
  await controller.postInit();
});
serviceWorker.unregister();
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(disableReactDevTools, "disableReactDevTools", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/index.js");
  reactHotLoader.register(controller, "controller", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Animate = __webpack_require__(651);

var _Browser = __webpack_require__(660);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Apps = {
  Animate: _Animate.Animate,
  Browser: _Browser.Browser
};

const uxp = window.require && window.require('uxp');

const hostname = uxp ? uxp.host.name : 'Browser';
const hostApp = new _Animate.Animate();
const _default = hostApp;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Apps, "Apps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/index.tsx");
  reactHotLoader.register(uxp, "uxp", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/index.tsx");
  reactHotLoader.register(hostname, "hostname", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/index.tsx");
  reactHotLoader.register(hostApp, "hostApp", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizer = void 0;

var _applications = _interopRequireDefault(__webpack_require__(43));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Localizer {
  constructor() {
    this._localizationCache = new Map();
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  getString(str) {
    if (this._localizationCache.has(str)) {
      return this._localizationCache.get(str);
    } else {
      // fetch from the host app.
      const localizedStr = _applications.default.getLocalizedString(str);

      this._localizationCache.set(str, localizedStr);

      return localizedStr;
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

Localizer._instance = null;
const localizer = Localizer.getInstance();
exports.localizer = localizer;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Localizer, "Localizer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/Localizer.ts");
  reactHotLoader.register(localizer, "localizer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/utils/Localizer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IAssetModel", {
  enumerable: true,
  get: function () {
    return _IAssetModel.IAssetModel;
  }
});
Object.defineProperty(exports, "RenditionSizeE", {
  enumerable: true,
  get: function () {
    return _IAssetModel.RenditionSizeE;
  }
});
Object.defineProperty(exports, "AssetTypeE", {
  enumerable: true,
  get: function () {
    return _IAssetModel.AssetTypeE;
  }
});
Object.defineProperty(exports, "IAssetsGroup", {
  enumerable: true,
  get: function () {
    return _IAssetsGroup.IAssetsGroup;
  }
});
Object.defineProperty(exports, "IAssetsStore", {
  enumerable: true,
  get: function () {
    return _IAssetsStore.IAssetsStore;
  }
});
Object.defineProperty(exports, "IAssetsEndPoint", {
  enumerable: true,
  get: function () {
    return _IAssetsEndPoint.IAssetsEndPoint;
  }
});
Object.defineProperty(exports, "AssetModel", {
  enumerable: true,
  get: function () {
    return _AssetModel.AssetModel;
  }
});
Object.defineProperty(exports, "AssetsGroup", {
  enumerable: true,
  get: function () {
    return _AssetsGroup.AssetsGroup;
  }
});
Object.defineProperty(exports, "AssetsStore", {
  enumerable: true,
  get: function () {
    return _AssetsStore.AssetsStore;
  }
});
Object.defineProperty(exports, "AssetsEndPoint", {
  enumerable: true,
  get: function () {
    return _AssetsEndPoint.AssetsEndPoint;
  }
});
Object.defineProperty(exports, "uxp", {
  enumerable: true,
  get: function () {
    return _utils.uxp;
  }
});
Object.defineProperty(exports, "isUXP", {
  enumerable: true,
  get: function () {
    return _utils.isUXP;
  }
});

var _IAssetModel = __webpack_require__(113);

var _IAssetsGroup = __webpack_require__(652);

var _IAssetsStore = __webpack_require__(653);

var _IAssetsEndPoint = __webpack_require__(654);

var _AssetModel = __webpack_require__(271);

var _AssetsGroup = __webpack_require__(272);

var _AssetsStore = __webpack_require__(273);

var _AssetsEndPoint = __webpack_require__(655);

var _utils = __webpack_require__(187);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(603);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video\n{\n    margin: 0;\n    padding: 0;\n    border-width: 0;\n    vertical-align: baseline;\n    box-sizing: inherit;\n}\n\nbody\n{\n    box-sizing: border-box;\n}\n\n/* to prevent img drag */\nimg\n{\n    pointer-events: none;\n    user-select: none;\n}\n\nul\n{\n    list-style: none;\n}\n\n.ui-adapt\n{\n    width: 100%;\n    height: 100%;\n}\n\n.ui-wrapper\n{\n    width: inherit;\n    height: inherit;\n}\n\n.ui-rounded-2px\n{\n    border-radius: 2px;\n}\n\n/*  no rounded corners on windows */\n.uxp.windows .ui-rounded-2px\n{\n    border-radius: 0px;\n}\n\n.ui-rounded-no\n{\n    border-radius: 0px;\n}\n\n.ui-text-ellipsis\n{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isLocalhost, "isLocalhost", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/serviceWorker.js");
  reactHotLoader.register(register, "register", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/serviceWorker.js");
  reactHotLoader.register(registerValidSW, "registerValidSW", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/serviceWorker.js");
  reactHotLoader.register(checkValidServiceWorker, "checkValidServiceWorker", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/serviceWorker.js");
  reactHotLoader.register(unregister, "unregister", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/serviceWorker.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module), __webpack_require__(24)))

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(13));

var _reactRedux = __webpack_require__(123);

var _Provider = _interopRequireDefault(__webpack_require__(613));

var _PlatformProvider = _interopRequireDefault(__webpack_require__(650));

var _applications = _interopRequireDefault(__webpack_require__(43));

var _AppView = _interopRequireDefault(__webpack_require__(662));

var _redux_store = _interopRequireDefault(__webpack_require__(188));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AppController {
  constructor() {
    this._themeColor = void 0;

    this.onThemeChange = async () => {
      const themeColor = await _applications.default.getTheme();

      if (themeColor !== this._themeColor) {
        this._themeColor = themeColor;
        console.log(this._themeColor);
        this.loadView();
      }
    };
  }

  async init() {
    console.log('AppController::init');
    await this.initAssetAPI();
    this._themeColor = await _applications.default.getTheme();

    _applications.default.addThemeChangeListener(this.onThemeChange);
  }

  async initAssetAPI() {
    console.log('AppController::initAssetAPI');

    if (window.cdoHost && window.cdoHost.loadHostAPI) {
      await window.cdoHost.loadHostAPI('com.adobe.animate.assets');
    }
  }

  loadView() {
    console.log('AppController::loadView');

    const layout = _react.default.createElement(_reactRedux.Provider, {
      store: _redux_store.default
    }, _react.default.createElement(_Provider.default, {
      id: "provider",
      theme: this._themeColor
    }, _react.default.createElement(_PlatformProvider.default, null, _react.default.createElement(_AppView.default, null))));

    _reactDom.default.render(layout, document.getElementById('root'));
  }

  async postInit() {
    console.log('AppController::postInit');

    const assetsEndPoint = _applications.default.getAssetsEndPoint();

    await assetsEndPoint.loadDataAsync();
    return assetsEndPoint.stores;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AppController = AppController;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppController, "AppController", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/AppController.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformProvider = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _applications = _interopRequireDefault(__webpack_require__(43));

var _uxp = __webpack_require__(48);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class PlatformProvider extends _react.default.Component {
  render() {
    const _this$props = this.props,
          {
      TagName,
      className,
      children
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["TagName", "className", "children"]);
    const classNames = `${className || ''} ${(0, _uxp.isUXP)() ? 'uxp' : ''} ${_applications.default.isWindows ? 'windows' : 'macos'}`;
    return _react.default.createElement(TagName, (0, _extends2.default)({
      className: `ui-adapt ${classNames}`,
      "data-name": "__PLATFORM_PROVIDER__"
    }, otherProps), children);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.PlatformProvider = exports.default = PlatformProvider;
PlatformProvider.defaultProps = {
  TagName: 'div'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PlatformProvider, "PlatformProvider", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/providers/PlatformProvider.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animate = void 0;

var _HostApplicationBase = __webpack_require__(270);

var _uxp = __webpack_require__(48);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const PREF_SECTION = 'AssetsPanel';

class Animate extends _HostApplicationBase.HostApplicationBase {
  async getPrefBoolean(entry, value) {
    if (window.require('uxp').AnAssets) {
      return await window.require('uxp').AnAssets.getPrefBooleanAsync(PREF_SECTION, entry, value);
    }

    return false;
  }

  async setPrefBoolean(entry, value) {
    if (window.require('uxp').AnAssets) {
      return await window.require('uxp').AnAssets.setPrefBooleanAsync(PREF_SECTION, entry, value);
    }

    return false;
  }

  async getPrefString(entry, defaultValue) {
    if (window.require('uxp').AnAssets) {
      return await window.require('uxp').AnAssets.getPrefStringAsync(PREF_SECTION, entry, defaultValue);
    }
  }

  async setPrefString(entry, value) {
    if (window.require('uxp').AnAssets) {
      return await window.require('uxp').AnAssets.setPrefStringAsync(PREF_SECTION, entry, value);
    }
  }

  getLocalizedString(value) {
    if (window.require('uxp').AnAssets) {
      return window.require('uxp').AnAssets.getLocalizedString(value);
    }

    return value;
  }

  getAssetsEndPoint() {
    if (window.require('uxp').AnAssets) {
      return _uxp.AssetsEndPoint.Instance();
    }

    return null;
  }

  async logPIPEvent(pipEventData) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.logPIPEventAsync(JSON.stringify(pipEventData));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData.status;
      } catch (ex) {
        console.log('Failed parsing PIPLog response', responseText, ex.toString());
      }
    }

    return false;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Animate = Animate;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PREF_SECTION, "PREF_SECTION", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/Animate.tsx");
  reactHotLoader.register(Animate, "Animate", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/Animate.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsEndPoint = void 0;

var _AssetsStore = __webpack_require__(273);

var _AssetsGroup = __webpack_require__(272);

var _AssetModel = __webpack_require__(271);

var _redux_store = __webpack_require__(188);

var _AssetsStoreMgrActions = __webpack_require__(138);

var _AssetsDownloadActions = __webpack_require__(274);

var _utils = __webpack_require__(187);

var _NodeInfo = __webpack_require__(189);

var _AssetsAddedBroadcaster = __webpack_require__(275);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const kErrorResponse = {
  status: false
};

class AssetsEndPoint {
  constructor() {
    this._stores = [];
    this._assetsSelected = false;
    this._hostCommandHandlerAdded = false;
    this._hostCommandListeners = {};
    this._assetDeleteListeners = [];

    window.require('uxp').host.addEventListener('AssetsAdded', this.onAssetsAdded);

    window.require('uxp').host.addEventListener('AssetsRemoved', this.onAssetsRemoved);

    window.require('uxp').host.addEventListener('AssetDownload', this.onAssetDownloadStatusChanged);
  }

  static Instance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  get stores() {
    return this._stores;
  }

  get assetsSelected() {
    return this._assetsSelected;
  }

  set assetsSelected(selected) {
    if (this._assetsSelected !== selected) {
      if (window.require('uxp').AnAssets) {
        window.require('uxp').AnAssets.assetsSelected = selected;
      }

      this._assetsSelected = selected;
    }
  }

  getFilePathFromUser() {
    const fs = (0, _utils.uxp)().storage.localFileSystem;
    return fs.getFileForOpening();
  }

  makeAsset(assetObj) {
    return new _AssetModel.AssetModel(assetObj.guid, assetObj.name, assetObj.renditions, assetObj.category, assetObj.subCategory, assetObj.role, assetObj.keywords, assetObj.autoKeywords, assetObj.hasAudio, assetObj.riggable, assetObj.exportedItemType, assetObj.authorName, assetObj.copyright, assetObj.description);
  }

  async loadDataAsync() {
    console.log('AssetsEndPoint::loadDataAsync');
    const stores = [];

    try {
      const storesResp = await window.require('uxp').AnAssets.getStoresAsync();
      const storesRespJson = JSON.parse(storesResp);

      for (const storeObj of storesRespJson.data) {
        console.log('store : ', storeObj);
        const store = new _AssetsStore.AssetsStore(storeObj.id, storeObj.name);
        const categoriesResp = await window.require('uxp').AnAssets.getCategoriesByStoreIdAsync(storeObj.id);
        const categoriesRespJson = JSON.parse(categoriesResp);

        for (const categoryObj of categoriesRespJson.data) {
          console.log('category:', categoryObj);
          const subCategoriesResp = await window.require('uxp').AnAssets.getSubCategoriesByCategoryIdAsync(storeObj.id, categoryObj.id);
          const subCategoriesRespJson = JSON.parse(subCategoriesResp);
          console.log('subCategories:', subCategoriesRespJson);
          const rolesResp = await window.require('uxp').AnAssets.getRolesByCategoryIdAsync(storeObj.id, categoryObj.id);
          const rolesRespJson = JSON.parse(rolesResp);
          console.log('roles:', rolesRespJson);
          const category = new _AssetsGroup.AssetsGroup(categoryObj.id, categoryObj.name, subCategoriesRespJson.data, rolesRespJson.data);
          const assetsResp = await window.require('uxp').AnAssets.getAssetsByCategoryIdAsync(storeObj.id, categoryObj.id);
          const assetsRespJson = JSON.parse(assetsResp);

          for (const assetObj of assetsRespJson.data) {
            console.log('asset: ', assetObj);
            const asset = this.makeAsset(assetObj);
            category.addAsset(asset);
          }

          store.addGroup(category);
        }

        stores.push(store);
      }

      this._stores = stores;

      _redux_store.store.dispatch((0, _AssetsStoreMgrActions.createAssetsLoadedAction)(this._stores));
    } catch (ex) {
      console.log(ex);
      return false;
    }

    return true;
  }

  async onAssetsAdded() {
    /*
    * format  {"type": "AssetsAdded" data: { "store": "", "category": "", "assets": [...] }}
    */
    const event = await window.require('uxp').AnAssets.getEventData();
    console.log('AssetsEndPoint::onAssetsAdded', event);
    const eventJson = JSON.parse(event);

    try {
      console.log('AssetsAdded: ', eventJson.data.assets);
      const nodeInfo = new _NodeInfo.NodeInfo({
        storeId: eventJson.data.store,
        categoryId: eventJson.data.category
      });
      const request = {
        storeId: nodeInfo.storeId,
        categoryId: nodeInfo.categoryId,
        assets: eventJson.data.assets
      };

      AssetsEndPoint._instance.fetchAssets(request).then(response => {
        console.log('fetch response', response);

        if (response.status) {
          const assetsArray = [];

          for (const assetJson of response.data.data) {
            assetsArray.push(AssetsEndPoint._instance.makeAsset(assetJson));
          }

          _redux_store.store.dispatch((0, _AssetsStoreMgrActions.createAssetsAddedAction)(nodeInfo, assetsArray));

          _AssetsAddedBroadcaster.assetsAddedBroadcaster.broadcast({
            storeId: nodeInfo.storeId,
            categoryId: nodeInfo.categoryId,
            assets: assetsArray.map(asset => asset.id)
          });
        } else {
          console.log('something whet wrong in fetching assets, go for full fetch');

          AssetsEndPoint._instance.loadDataAsync();
        }
      }).catch(err => {
        console.log('some exception while fetching assets' + err.toString() + 'go for full fetch');

        AssetsEndPoint._instance.loadDataAsync();
      });
    } catch (err) {
      console.log('some exception while fetching assets' + err.toString() + 'do a full fetch');

      AssetsEndPoint._instance.loadDataAsync();
    }
  }

  async onAssetsRemoved() {
    /*
    * format  {"type": "AssetsRemoved" data: { "store": "", "category": "", "assets": [...] }}
    */
    const event = await window.require('uxp').AnAssets.getEventData();
    console.log('AssetsEndPoint::onAssetsRemoved', event);
    const eventJson = JSON.parse(event);

    try {
      console.log('AssetRemoved: ', eventJson.data.assets);
      const nodeInfo = new _NodeInfo.NodeInfo({
        storeId: eventJson.data.store,
        categoryId: eventJson.data.category
      });

      _redux_store.store.dispatch((0, _AssetsStoreMgrActions.createAssetsRemovedAction)(nodeInfo, eventJson.data.assets));
    } catch (err) {
      console.log('some exception while removing assets' + err.toString() + 'do a full fetch');

      AssetsEndPoint._instance.loadDataAsync();
    }
  }

  async onAssetDownloadStatusChanged() {
    const e = await window.require('uxp').AnAssets.getEventData();
    const payload = (0, _AssetsDownloadActions.transformAssetDownloadResponse)(e);

    _redux_store.store.dispatch({
      type: _redux_store.ActionE.ASSETS_DOWNLOAD_STATUS_CHANGED,
      payload: payload
    });
  }

  addHostCommandListener(command, onCommand) {
    if (!this._hostCommandListeners[command]) {
      this._hostCommandListeners[command] = [];
    }

    this._hostCommandListeners[command].push(onCommand);

    if (!this._hostCommandHandlerAdded) {
      if (window.require('uxp').AnAssets) {
        window.require('uxp').host.addEventListener('onHostCommand', this.onHostCommand);

        this._hostCommandHandlerAdded = true;
      }
    }
  }

  removeHostCommandListener(command, onCommand) {
    if (this._hostCommandListeners[command]) {
      const index = this._hostCommandListeners[command].indexOf(onCommand);

      if (index > -1) {
        this._hostCommandListeners[command].splice(index, 1);
      }
    }
  }

  async onHostCommand() {
    const data = await window.require('uxp').AnAssets.getEventData();
    const dataJson = JSON.parse(data);

    if (dataJson && dataJson.name) {
      const commandName = dataJson.name;

      if (AssetsEndPoint._instance._hostCommandListeners[commandName]) {
        for (const handler of AssetsEndPoint._instance._hostCommandListeners[commandName]) {
          handler(commandName);
        }
      }
    }
  }

  addAssetDeleteListener(onAssetDelete) {
    const index = this._assetDeleteListeners.indexOf(onAssetDelete);

    if (index == -1) {
      this._assetDeleteListeners.push(onAssetDelete);
    }
  }

  removeAssetDeleteListener(onAssetDelete) {
    const index = this._assetDeleteListeners.indexOf(onAssetDelete);

    if (index > -1) {
      this._assetDeleteListeners.splice(index, 1);
    }
  }

  onAssetsDelete(assets) {
    for (const handler of this._assetDeleteListeners) {
      handler(assets);
    }
  }

  async assetsDraggedToStage(assets) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.assetsDraggedOutAsync(assets);

      try {
        const response = JSON.parse(responseText);
        return response;
      } catch (ex) {
        console.log('Failed parsing drag response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async fetchAssets(request) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.fetchAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
      } catch (ex) {
        console.log('Failed parsing fetch response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async importAssets(request) {
    /* UXP file picker, not using for now.
    this.getFilePathFromUser().then((file: any)=>
    {
        console.log('File to import : ', file.nativePath);
        if (window.require('uxp').AnAssets)
        {
            window.require('uxp').AnAssets.importAssetsAsync(storeId, JSON.stringify([file.nativePath]));
                .then((data: string)=>
                {
                    console.log(data);
                })
                .catch((error: string) =>
                {
                    console.log('error : ', error);
                });
        }
    });*/
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.importAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
      } catch (ex) {
        console.log('Failed parsing import response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async exportAssets(request) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.exportAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
      } catch (ex) {
        console.log('Failed parsing export response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async renameAssets(request) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.renameAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
      } catch (ex) {
        console.log('Failed parsing rename response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async deleteAssets(request) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.deleteAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);

        if (jsonData.status) {
          this.assetsSelected = false;
          this.onAssetsDelete(request.assets);
        }

        return jsonData;
      } catch (ex) {
        console.log('Failed parsing delete response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async downloadAssets(request) {
    if (window.require('uxp').AnAssets) {
      const responseText = await window.require('uxp').AnAssets.downloadAssetsAsync(JSON.stringify(request));

      try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
      } catch (ex) {
        console.log('Failed parsing download request response', responseText, ex.toString());
      }
    }

    return kErrorResponse;
  }

  async getAssetsDownloadStatus() {
    return await window.require('uxp').AnAssets.getAssetsDownloadStatusAsync();
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetsEndPoint = AssetsEndPoint;
AssetsEndPoint._instance = null;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(kErrorResponse, "kErrorResponse", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetsEndPoint.ts");
  reactHotLoader.register(AssetsEndPoint, "AssetsEndPoint", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/uxp/AssetsEndPoint.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetsStoresMgrReducer = assetsStoresMgrReducer;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _types = __webpack_require__(69);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const defaultState = {
  stores: [],
  newAddedMap: new Map()
};

function assetsStoresMgrReducer(state = defaultState, action) {
  switch (action.type) {
    case _types.ActionE.ASSETS_LOADED:
      {
        const newState = _objectSpread({}, state);

        newState.stores = action.payload;
        return newState;
      }

    case _types.ActionE.ASSETS_ADDED:
      {
        const {
          nodeInfo,
          assets
        } = action.payload;
        const index = state.stores.findIndex(store => store.id === nodeInfo.storeId);

        if (index !== -1) {
          const newState = _objectSpread({}, state, {
            stores: [...state.stores]
          });

          const store = newState.stores[index];
          const category = store.getGroup(nodeInfo.categoryId);

          if (!newState.newAddedMap.has(nodeInfo.slug)) {
            newState.newAddedMap.set(nodeInfo.slug, []);
          }

          const newAddedArray = newState.newAddedMap.get(nodeInfo.slug);

          if (category) {
            for (const asset of assets) {
              category.insertAtFront(asset);
              newAddedArray.unshift(asset.id);
            }
          }

          store.replaceGroup(_objectSpread({}, category));
          return newState;
        }

        break;
      }

    case _types.ActionE.ASSETS_REMOVED:
      {
        const {
          nodeInfo,
          assets
        } = action.payload;
        const index = state.stores.findIndex(store => store.id === nodeInfo.storeId);

        if (index !== -1) {
          const newState = _objectSpread({}, state, {
            stores: [...state.stores]
          });

          const store = newState.stores[index];
          const category = store.getGroup(nodeInfo.categoryId);

          if (category) {
            for (const asset of assets) {
              category.removeAssetById(asset);
            }
          }

          store.replaceGroup(_objectSpread({}, category));
          return newState;
        }

        break;
      }

    case _types.ActionE.ASSETS_CLEAR_NEW_ADDED_ALERT:
      {
        const nodeInfo = action.payload;

        const newState = _objectSpread({}, state);

        if (newState.newAddedMap.has(nodeInfo.slug)) {
          newState.newAddedMap.set(nodeInfo.slug, []);
        }

        return newState;
      }

    default:
      break;
  }

  return state;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultState, "defaultState", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoresMgrReducer.ts");
  reactHotLoader.register(assetsStoresMgrReducer, "assetsStoresMgrReducer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsStoresMgrReducer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetsSelectionReducer = assetsSelectionReducer;

var _types = __webpack_require__(69);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const defaultState = new Map();

function assetsSelectionReducer(state = defaultState, action) {
  switch (action.type) {
    case _types.ActionE.ASSETS_SELECTION_ADD:
      {
        const newState = new Map(state);
        const selection = action.payload;
        newState.set(selection.id, selection);
        return newState;
      }

    case _types.ActionE.ASSETS_SELECTION_REMOVE:
      {
        const newState = new Map(state);
        const selectionId = action.payload;
        newState.delete(selectionId);
        return newState;
      }

    case _types.ActionE.ASSETS_SELECTION_RESET:
      {
        return new Map(defaultState);
      }
  }

  return state;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultState, "defaultState", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsSelectionReducer.ts");
  reactHotLoader.register(assetsSelectionReducer, "assetsSelectionReducer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsSelectionReducer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetsDownloadReducer = assetsDownloadReducer;

var _types = __webpack_require__(69);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const defaultState = {
  status: _types.DownloadStatusE.ASSETS_STATUS_DEFAULT,
  message: ''
};

function assetsDownloadReducer(state = defaultState, action) {
  switch (action.type) {
    case _types.ActionE.ASSETS_DOWNLOAD_STATUS_CHANGED:
      {
        const state = action.payload;
        const newState = {
          status: state.status,
          message: state.message
        };
        return newState;
      }
  }

  return state;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultState, "defaultState", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadReducer.ts");
  reactHotLoader.register(assetsDownloadReducer, "assetsDownloadReducer", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/redux_store/AssetsDownloadReducer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Broadcaster = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Broadcaster {
  constructor() {
    this._listeners = [];
  }

  broadcast(message) {
    for (const listener of this._listeners) {
      listener(message);
    }
  }

  register(listener) {
    this._listeners.push(listener);
  }

  unregister(listener) {
    const index = this._listeners.findIndex(l => l === listener);

    if (index != 0) {
      this._listeners.splice(index, 1);
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Broadcaster = Broadcaster;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Broadcaster, "Broadcaster", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/broadcasters/Broadcaster.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Browser = void 0;

var _HostApplicationBase = __webpack_require__(270);

var _AssetsEndPointBrowser = __webpack_require__(661);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class Browser extends _HostApplicationBase.HostApplicationBase {
  constructor(...args) {
    super(...args);
    this._theme = 'dark';
    this._language = 'en_US';
    this._themeChangeCB = void 0;
    this._languageChangeCB = void 0;
  }

  get id() {
    return 'browser';
  }

  get name() {
    if (window.navigator) {
      return window.navigator.appName;
    }

    return 'chrome';
  }

  get version() {
    if (window.navigator) {
      return window.navigator.appVersion;
    }

    return '1.0.0';
  }

  get buildNumber() {
    if (window.navigator) {
      return window.navigator.appVersion;
    }

    return '';
  }

  get platform() {
    if (window.navigator) {
      const {
        platform
      } = window.navigator;

      if (platform.startsWith('Mac')) {
        return 'MacOS';
      } else if (platform.startsWith('Win')) {
        return 'Windows';
      } else if (platform.startsWith('Linux')) {
        return 'UNIX';
      }
    }

    return 'Unknown';
  }

  get language() {
    return this._language;
  }

  async getTheme() {
    return this._theme;
  }

  async isAnalyticsEnabled() {
    return false;
  }

  async getPrefString(entry, defaultValue) {
    const val = window.localStorage.getItem(entry);
    return val && defaultValue;
  }

  async setPrefString(entry, value) {
    window.localStorage.setItem(entry, value);
    return value;
  }

  getAssetsEndPoint() {
    return _AssetsEndPointBrowser.AssetsEndPointBrowser.Instance();
  }

  addThemeChangeListener(onThemeChange) {
    this._themeChangeCB = onThemeChange;
  } // eslint-disable-next-line no-unused-vars


  setLanguage(locale) {//window.localStorage.setItem('__locale__', locale);
  }

  async setTheme(theme) {
    if (this._themeChangeCB) {
      this._theme = theme;

      this._themeChangeCB();
    }

    return theme;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Browser = Browser;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Browser, "Browser", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/Browser.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsEndPointBrowser = void 0;

var _uxp = __webpack_require__(48);

var _redux_store = __webpack_require__(188);

var _AssetsStoreMgrActions = __webpack_require__(138);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsEndPointBrowser {
  constructor() {
    this._stores = [];

    this.onAssetsChanged = event => {
      console.log('Assets Changed', event);

      _redux_store.store.dispatch((0, _AssetsStoreMgrActions.createAssetsChangedAction)(this._stores));
    };
  }

  static Instance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  get stores() {
    return this._stores;
  }

  async loadDataAsync() {
    console.log('loadDataAsync');
    const stores = [];

    try {
      const storesResp = await fetch('data/stores.json');
      const storesRespJson = await storesResp.json();

      for (const storeObj of storesRespJson.data) {
        console.log('store : ', storeObj);
        const store = new _uxp.AssetsStore(storeObj.id, storeObj.name);
        const categoriesResp = await fetch('data/categories.json');
        const categoriesRespJson = await categoriesResp.json();

        for (const categoryObj of categoriesRespJson.data) {
          console.log('category : ', categoryObj);
          const subCategoriesResp = await fetch('data/sub_categories.json');
          const subCategoriesRespJson = await subCategoriesResp.json();
          const rolesResp = await fetch('data/roles.json');
          const rolesRespJson = await rolesResp.json();
          const category = new _uxp.AssetsGroup(categoryObj.id, categoryObj.name, subCategoriesRespJson.data, rolesRespJson.data);
          const assetsResp = await fetch('data/assets.json');
          const assetsRespJson = await assetsResp.json();

          for (const assetObj of assetsRespJson.data) {
            console.log('asset: ', assetObj);
            const asset = new _uxp.AssetModel(assetObj.id, assetObj.name, assetObj.renditions, assetObj.category, assetObj.subCategory, assetObj.role, assetObj.keywords, assetObj.autoKeywords, assetObj.hasAudio);
            category.addAsset(asset);
          }

          store.addGroup(category);
        }

        stores.push(store);
      }

      this._stores = stores;

      _redux_store.store.dispatch((0, _AssetsStoreMgrActions.createAssetsLoadedAction)(this._stores));
    } catch (ex) {
      console.log(ex);
      return false;
    }

    return true;
  }

  getAssetsDownloadStatus() {
    throw new Error('Method not implemented.');
  }

  addHostCommandListener(_command, _onCommand) {
    throw new Error('Method not implemented.');
  }

  removeHostCommandListener(_command, _onCommand) {
    throw new Error('Method not implemented.');
  }

  addAssetDeleteListener(_onAssetDelete) {
    throw new Error('Method not implemented.');
  }

  removeAssetDeleteListener(_onAssetDelete) {
    throw new Error('Method not implemented.');
  }

  assetsDraggedToStage(_assets) {
    throw new Error('Method not implemented.');
  }

  fetchAssets(_request) {
    throw new Error('Method not implemented.');
  }

  importAssets(_request) {
    throw new Error('Method not implemented.');
  }

  exportAssets(_request) {
    throw new Error('Method not implemented.');
  }

  renameAssets(_request) {
    throw new Error('Method not implemented.');
  }

  deleteAssets(_request) {
    throw new Error('Method not implemented.');
  }

  downloadAssets(_request) {
    throw new Error('Method not implemented.');
  }

  logPIPEvent(_pipEventData) {
    throw new Error('Method not implemented.');
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AssetsEndPointBrowser = AssetsEndPointBrowser;
AssetsEndPointBrowser._instance = null;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsEndPointBrowser, "AssetsEndPointBrowser", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/applications/__mocks__/AssetsEndPointBrowser.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(663));

var _AssetsView = _interopRequireDefault(__webpack_require__(695));

var _DebugPanel = _interopRequireDefault(__webpack_require__(1038));

var _AssetsViewDelegate = __webpack_require__(1185);

var _applications = _interopRequireDefault(__webpack_require__(43));

var _uxp = __webpack_require__(48);

__webpack_require__(1186);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AppView extends _react.default.Component {
  constructor(props) {
    super(props);
    this.assetsViewDelegate = void 0;
    this.assetsViewDelegate = new _AssetsViewDelegate.AssetsViewDelegate();
  }

  render() {
    return _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement("div", {
      className: "App-cont"
    }, _react.default.createElement(_AssetsView.default, {
      delegate: this.assetsViewDelegate
    })), !(0, _uxp.isUXP)() && _react.default.createElement(_DebugPanel.default, {
      onLocaleChange: locale => {
        _applications.default.language = locale;
      },
      onThemeChange: theme => {
        _applications.default.setTheme(theme);
      }
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AppView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppView, "AppView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/AppView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(33));

var _Refresh = _interopRequireDefault(__webpack_require__(280));

var _AssetsErrorView = _interopRequireDefault(__webpack_require__(689));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class ErrorBoundary extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      if (true) {
        console.log(this.state.errorInfo.componentStack);
        return _react.default.createElement(_AssetsErrorView.default, {
          style: {
            marginTop: '16px'
          }
        });
      } else {}
    }

    return this.props.children;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/ErrorBoundary.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(33));

var _Refresh = _interopRequireDefault(__webpack_require__(280));

var _SentimentNegative = _interopRequireDefault(__webpack_require__(690));

var _Localizer = __webpack_require__(44);

__webpack_require__(693);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AssetsErrorView extends _react.default.Component {
  constructor(...args) {
    super(...args);

    this.onReloadClick = () => {
      window.location.reload();
    };
  }

  /* eslint-disable quotes */
  renderMessage() {
    return _react.default.createElement("div", {
      className: 'errorViewInnerCont'
    }, _react.default.createElement(_SentimentNegative.default, {
      style: {
        margin: '0 auto'
      }
    }), _react.default.createElement("i", null, _Localizer.localizer.getString("$$$/AssetPanel/SomethingWentWrong/title=Something went wrong!")), _react.default.createElement("i", null, _Localizer.localizer.getString("$$$/AssetPanel/GotBackToAssetsView/label=Reload to go back to assets view.")), _react.default.createElement("div", {
      style: {
        margin: '0 auto'
      }
    }, _react.default.createElement(_Button.default, {
      variant: "action",
      onClick: this.onReloadClick,
      style: {
        marginTop: '16px'
      },
      icon: _react.default.createElement(_Refresh.default, null)
    }, _Localizer.localizer.getString("$$$/AssetPanel/Reload/label=Reload"))));
  }

  render() {
    const _this$props = this.props,
          {
      className
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: `errorViewCont ${className ? className : ''}`
    }, otherProps), this.renderMessage());
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsErrorView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AssetsErrorView, "AssetsErrorView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/errors/AssetsErrorView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadStatusE = exports.ActionE = void 0;

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

let ActionE;
exports.ActionE = ActionE;

(function (ActionE) {
  ActionE[ActionE["ASSETS_LOADED"] = 0] = "ASSETS_LOADED";
  ActionE[ActionE["ASSETS_ADDED"] = 1] = "ASSETS_ADDED";
  ActionE[ActionE["ASSETS_REMOVED"] = 2] = "ASSETS_REMOVED";
  ActionE[ActionE["ASSETS_CLEAR_NEW_ADDED_ALERT"] = 3] = "ASSETS_CLEAR_NEW_ADDED_ALERT";
  ActionE[ActionE["ASSETS_SELECTION_ADD"] = 4] = "ASSETS_SELECTION_ADD";
  ActionE[ActionE["ASSETS_SELECTION_REMOVE"] = 5] = "ASSETS_SELECTION_REMOVE";
  ActionE[ActionE["ASSETS_SELECTION_RESET"] = 6] = "ASSETS_SELECTION_RESET";
  ActionE[ActionE["ASSETS_DOWNLOAD_STATUS_CHANGED"] = 7] = "ASSETS_DOWNLOAD_STATUS_CHANGED";
})(ActionE || (exports.ActionE = ActionE = {}));

let DownloadStatusE;
exports.DownloadStatusE = DownloadStatusE;

(function (DownloadStatusE) {
  DownloadStatusE[DownloadStatusE["ASSETS_NEW_AVAILABLE"] = 0] = "ASSETS_NEW_AVAILABLE";
  DownloadStatusE[DownloadStatusE["ASSETS_DOWNLOADING"] = 1] = "ASSETS_DOWNLOADING";
  DownloadStatusE[DownloadStatusE["ASSETS_DOWNLOAD_SUCCESS"] = 2] = "ASSETS_DOWNLOAD_SUCCESS";
  DownloadStatusE[DownloadStatusE["ASSETS_DOWNLOAD_FAILED"] = 3] = "ASSETS_DOWNLOAD_FAILED";
  DownloadStatusE[DownloadStatusE["ASSETS_DOWNLOAD_MORE_AVAILABLE"] = 4] = "ASSETS_DOWNLOAD_MORE_AVAILABLE";
  DownloadStatusE[DownloadStatusE["ASSETS_DOWNLOAD_NONE_AVAILABLE"] = 5] = "ASSETS_DOWNLOAD_NONE_AVAILABLE";
  DownloadStatusE[DownloadStatusE["NETWORK_UNAVAILABLE"] = 6] = "NETWORK_UNAVAILABLE";
  DownloadStatusE[DownloadStatusE["ASSETS_STATUS_DEFAULT"] = 5] = "ASSETS_STATUS_DEFAULT";
})(DownloadStatusE || (exports.DownloadStatusE = DownloadStatusE = {}));

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(694);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".errorViewCont\n{\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    width: 100%;\n    height: 160px;\n}\n\n.errorViewInnerCont\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    width: calc(100% - 32px);\n    border: 2px solid;\n    border-radius: 8px;\n    text-align: center;\n    font-size: 16px;\n    font-style: italic;\n}\n\n.spectrum--darkest .errorViewInnerCont { border-color: rgb(73, 73, 73); }\n.spectrum--dark .errorViewInnerCont { border-color: rgb(90, 90, 90); }\n.spectrum--light .errorViewInnerCont { border-color: rgb(202, 202, 202); }\n.spectrum--lightest .errorViewInnerCont { border-color: rgb(211, 211, 211); }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

var _interopRequireWildcard = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRedux = __webpack_require__(123);

var _Button = _interopRequireDefault(__webpack_require__(33));

var _ButtonGroup = _interopRequireDefault(__webpack_require__(696));

var _Search = _interopRequireDefault(__webpack_require__(705));

var _Grid = __webpack_require__(192);

var _FlexView = __webpack_require__(115);

var _Accordion = __webpack_require__(734);

var _ClassicGridView = _interopRequireDefault(__webpack_require__(765));

var _ViewList = _interopRequireDefault(__webpack_require__(768));

var _AssetsCategoryView = _interopRequireDefault(__webpack_require__(771));

var _AssetsViewFooter = _interopRequireDefault(__webpack_require__(1000));

var _applications = _interopRequireDefault(__webpack_require__(43));

var _AssetsViewM = _interopRequireDefault(__webpack_require__(1018));

var _AppContext = __webpack_require__(122);

var _Constants = __webpack_require__(103);

var _Localizer = __webpack_require__(44);

var _LearnSection = _interopRequireDefault(__webpack_require__(1020));

var _AssetsAddedBroadcaster = __webpack_require__(275);

var _PIPLogger = __webpack_require__(104);

var _dec, _class, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function mapStateToProps(state) {
  console.log('AssetsView:-mapStateToProps', state);
  return {
    assetStores: state.assetsStores.stores
  };
}

let AssetsView = (_dec = (0, _reactRedux.connect)(mapStateToProps), _dec(_class = (_temp = class AssetsView extends _react.Component {
  constructor(props) {
    super(props);
    this._searchRef = void 0;

    this.onAssetsAddded = _message => {
      if (this._searchRef) {
        this._searchRef.setState({
          value: ''
        });

        this.setState({
          searchEntry: ''
        });
      }
    };

    this.onLayoutChangeButtonClick = () => {
      const newState = _objectSpread({}, this.state);

      if (this.state.layoutMode === _Constants.LayoutModeE.GRID) {
        newState.layoutMode = _Constants.LayoutModeE.LIST;
      } else {
        newState.layoutMode = _Constants.LayoutModeE.GRID;
      }

      this.setState(newState);

      _AppContext.appContext.setLayoutMode(newState.layoutMode);

      const layoutStr = this.layoutModeToString(newState.layoutMode);

      _applications.default.setPrefString(_Constants.PREFERENCE_KEYS.LAYOUT_MODE, layoutStr);

      const event = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_VIEW_TYPE,
        eventName: layoutStr
      };

      _PIPLogger.pipLogger.logPIPEvent(event);
    };

    this.onAccordionChange = selectedCategory => {
      console.log('selectedCategory', selectedCategory);

      const newState = _objectSpread({}, this.state);

      newState.selectedCategory = selectedCategory;
      this.setState(newState);

      _applications.default.setPrefString(_Constants.PREFERENCE_KEYS.SELECTED_CATEGORY, selectedCategory);
    };

    this.onSearch = searchEntry => {
      const newState = _objectSpread({}, this.state);

      newState.searchEntry = searchEntry.trim();
      this.setState(newState);

      _AppContext.appContext.setSearchMode(newState.searchEntry.length > 0);

      if (newState.searchEntry === '') {
        const event = {
          category: _PIPLogger.PIP_STR.ASSET_PANEL,
          subCategory: _PIPLogger.PIP_STR.ASSET_SEARCH,
          eventName: _PIPLogger.PIP_STR.ASSET_SEARCH,
          condition: 'logOnce'
        };

        _PIPLogger.pipLogger.logPIPEvent(event);
      }
    };

    this.onTabClick = tabId => {
      console.log('tab clicked:', tabId);
      this.setState({
        selectedTab: tabId
      });

      _AppContext.appContext.setActiveTab(tabId);

      _applications.default.setPrefString(_Constants.PREFERENCE_KEYS.SELECTED_TAB, tabId);
    };

    this.state = {
      layoutMode: _Constants.LayoutModeE.GRID,
      selectedTab: 'Default',
      selectedCategory: '0',
      searchEntry: ''
    };
    this.init();
  }

  async init() {
    const layout = await _applications.default.getPrefString(_Constants.PREFERENCE_KEYS.LAYOUT_MODE, 'Grid');
    const selectedCategory = await _applications.default.getPrefString(_Constants.PREFERENCE_KEYS.SELECTED_CATEGORY, '0');
    const selectedTab = await _applications.default.getPrefString(_Constants.PREFERENCE_KEYS.SELECTED_TAB, 'Default');

    const newState = _objectSpread({}, this.state);

    newState.layoutMode = this.stringToLayoutMode(layout);
    newState.selectedTab = selectedTab;
    newState.selectedCategory = selectedCategory;
    this.setState(newState);

    _AppContext.appContext.setActiveTab(selectedTab);

    _AppContext.appContext.setLayoutMode(newState.layoutMode);

    const event = {
      category: _PIPLogger.PIP_STR.ASSET_PANEL,
      subCategory: _PIPLogger.PIP_STR.ASSET_VIEW_SESSION_LAUNCH,
      eventName: layout,
      condition: 'logOnce'
    };

    _PIPLogger.pipLogger.logPIPEvent(event);
  }

  static getDerivedStateFromProps(newProps) {
    _AppContext.appContext.setAssetStores(newProps.assetStores);

    return null;
  }

  componentDidMount() {
    _AssetsAddedBroadcaster.assetsAddedBroadcaster.register(this.onAssetsAddded);
  }

  componentWillUnmount() {
    _AssetsAddedBroadcaster.assetsAddedBroadcaster.unregister(this.onAssetsAddded);
  }

  layoutModeToString(mode) {
    if (mode === _Constants.LayoutModeE.LIST) return 'List';
    return 'Grid';
  }

  stringToLayoutMode(modeStr) {
    if (modeStr === 'List') return _Constants.LayoutModeE.LIST;
    return _Constants.LayoutModeE.GRID;
  }

  getCategoriesByStoreId(storeId) {
    const index = this.props.assetStores.findIndex(store => store.id === storeId);

    if (index !== -1) {
      return this.props.assetStores[index].groups;
    }

    return [];
  }

  /* eslint-disable quotes */
  renderHeader() {
    const {
      assetStores
    } = this.props;
    const {
      selectedTab,
      layoutMode
    } = this.state;
    let layoutIcon;
    let layoutTooltip;

    if (layoutMode === _Constants.LayoutModeE.GRID) {
      layoutTooltip = _Localizer.localizer.getString("$$$/AssetPanel/Layout/List/tooltip=List view");
      layoutIcon = _react.default.createElement(_ViewList.default, {
        title: layoutTooltip
      });
    } else {
      layoutTooltip = _Localizer.localizer.getString("$$$/AssetPanel/Layout/Grid/tooltip=Grid view");
      layoutIcon = _react.default.createElement(_ClassicGridView.default, {
        title: layoutTooltip
      });
    }

    return _react.default.createElement(_Grid.Grid, {
      style: {
        marginTop: '16px',
        marginBottom: '16px'
      }
    }, _react.default.createElement(_FlexView.FlexView, null, _react.default.createElement(_FlexView.FlexRow, null, _react.default.createElement(_FlexView.FlexView, {
      style: {
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, _react.default.createElement(_ButtonGroup.default, {
      value: selectedTab,
      onClick: this.onTabClick
    }, assetStores.map(store => {
      return _react.default.createElement(_Button.default, {
        key: store.id,
        label: store.name,
        value: store.id,
        icon: _react.default.createElement("div", null),
        style: {
          paddingLeft: '16px',
          paddingRight: '16px'
        }
      });
    })))), _react.default.createElement(_FlexView.FlexRow, {
      style: {
        marginTop: '16px'
      }
    }, _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        flexGrow: 1
      }
    }, _react.default.createElement(_Search.default, {
      ref: v => this._searchRef = v,
      "aria-label": "Search",
      placeholder: _Localizer.localizer.getString("$$$/AssetPanel/Search/placeholder=Search"),
      onChange: this.onSearch,
      style: {
        width: '100%'
      }
    })), _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        marginLeft: '8px'
      }
    }, _react.default.createElement(_Button.default, {
      quiet: true,
      variant: "tool",
      icon: layoutIcon,
      onClick: this.onLayoutChangeButtonClick,
      title: layoutTooltip
    })))));
  }
  /* eslint-disable quotes */


  render() {
    const {
      layoutMode,
      selectedTab,
      searchEntry
    } = this.state;
    const storeId = selectedTab;
    const categories = this.getCategoriesByStoreId(this.state.selectedTab);
    return _react.default.createElement("div", {
      className: "Assets-cont"
    }, this.renderHeader(), _react.default.createElement(_Accordion.Accordion, {
      selectedIndex: this.state.selectedCategory,
      onChange: this.onAccordionChange
    }, categories.map(category => {
      return _react.default.createElement(_Accordion.AccordionItem, {
        key: `${storeId}_${category.id}`,
        header: _react.default.createElement("span", {
          className: _AssetsViewM.default.categoryTitle
        }, category.name)
      }, _react.default.createElement(_AssetsCategoryView.default, {
        layoutMode: layoutMode,
        storeId: storeId,
        category: category,
        searchKeyword: searchEntry
      }));
    })), _react.default.createElement(_LearnSection.default, {
      style: {
        marginTop: '20px'
      }
    }), _react.default.createElement(_AssetsViewFooter.default, {
      activeStoreId: storeId
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}, _temp)) || _class);
exports.default = AssetsView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsView.tsx");
  reactHotLoader.register(AssetsView, "AssetsView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Select = _interopRequireDefault(__webpack_require__(772));

var _Filter = _interopRequireDefault(__webpack_require__(901));

var _FlexView = __webpack_require__(115);

var _AssetsViewGrid = _interopRequireDefault(__webpack_require__(904));

var _AssetsViewList = _interopRequireDefault(__webpack_require__(995));

var _Localizer = __webpack_require__(44);

var _ObjectsStore = __webpack_require__(102);

var _Constants = __webpack_require__(103);

__webpack_require__(998);

var _AudioPlayer = _interopRequireDefault(__webpack_require__(382));

var _applications = _interopRequireDefault(__webpack_require__(43));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const defaultFilters = {
  [_Constants.STRINGS.DEFAULT]: {
    [_Constants.STRINGS.ANIMATED]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.CHARACTERS,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.OBJECTS
    },
    [_Constants.STRINGS.STATIC]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.CHARACTERS,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.OBJECTS
    },
    [_Constants.STRINGS.SOUND_CLIPS]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.ALL,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.SOUND_EFFECTS
    }
  },
  [_Constants.STRINGS.CUSTOM]: {
    [_Constants.STRINGS.ANIMATED]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.ALL,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.OBJECTS
    },
    [_Constants.STRINGS.STATIC]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.ALL,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.OBJECTS
    },
    [_Constants.STRINGS.SOUND_CLIPS]: {
      [_Constants.STRINGS.ROLE]: _Constants.STRINGS.ALL,
      [_Constants.STRINGS.SUBCATEGORY]: _Constants.STRINGS.SOUND_EFFECTS
    }
  }
};

function getDefaultFilter(storeId, category, filterId) {
  if (defaultFilters[storeId] && defaultFilters[storeId][category] && defaultFilters[storeId][category][filterId]) {
    return defaultFilters[storeId][category][filterId];
  }

  return _Constants.STRINGS.ALL;
}

class AssetsCategoryView extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutMode: props.layoutMode,
      searchKeyword: props.searchKeyword,
      selectedRole: this.getSavedRole(),
      selectedSubCategory: this.getSavedSubCategory(),
      searchMode: {
        selectedRole: _Constants.STRINGS.ALL,
        selectedSubCategory: _Constants.STRINGS.ALL
      }
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.searchKeyword === '' && prevState.searchKeyword !== '' || newProps.searchKeyword !== '' && prevState.searchKeyword === '') {
      // reset the searchMode Filters
      return {
        searchKeyword: newProps.searchKeyword,
        searchMode: {
          selectedRole: _Constants.STRINGS.ALL,
          selectedSubCategory: _Constants.STRINGS.ALL
        }
      };
    } else {
      return {
        searchKeyword: newProps.searchKeyword
      };
    }
  }

  isSearchMode() {
    const {
      searchKeyword
    } = this.props;
    return searchKeyword !== '';
  }

  saveSubCategory(subCategory) {
    if (!this.isSearchMode()) {
      const {
        storeId,
        category
      } = this.props;
      const key = `${storeId}_${category.id}_SelectedSubCategory`;

      _ObjectsStore.defaultStore.addObject(key, subCategory);

      window.localStorage.setItem(key, subCategory);

      _applications.default.setPrefString(key, subCategory);
    }
  }

  getSavedSubCategory() {
    const {
      storeId,
      category
    } = this.props;
    const key = `${storeId}_${category.id}_SelectedSubCategory`;

    if (_ObjectsStore.defaultStore.hasObject(key)) {
      return _ObjectsStore.defaultStore.getObject(key);
    }

    const val = window.localStorage.getItem(key);

    if (val) {
      return val;
    }

    return getDefaultFilter(storeId, category.id, _Constants.STRINGS.SUBCATEGORY);
  }

  saveRole(roleId) {
    if (!this.isSearchMode()) {
      const {
        storeId,
        category
      } = this.props;
      const key = `${storeId}_${category.id}_SelectedRole`;

      _ObjectsStore.defaultStore.addObject(key, roleId);

      window.localStorage.setItem(key, roleId);

      _applications.default.setPrefString(key, roleId);
    }
  }

  getSavedRole() {
    const {
      storeId,
      category
    } = this.props;
    const key = `${storeId}_${category.id}_SelectedRole`;

    if (_ObjectsStore.defaultStore.hasObject(key)) {
      return _ObjectsStore.defaultStore.getObject(key);
    }

    const val = window.localStorage.getItem(key);

    if (val) {
      return val;
    }

    return getDefaultFilter(storeId, category.id, _Constants.STRINGS.ROLE);
  }

  getFilteredAssets() {
    const {
      category,
      searchKeyword
    } = this.props;
    const {
      assets
    } = category;
    let {
      selectedSubCategory,
      selectedRole
    } = this.state;

    if (this.isSearchMode()) {
      selectedRole = this.state.searchMode.selectedRole;
      selectedSubCategory = this.state.searchMode.selectedSubCategory;
    }

    const searchKeywordLower = searchKeyword.toLowerCase();

    if (searchKeyword === '' && selectedSubCategory === _Constants.STRINGS.ALL && selectedRole === _Constants.STRINGS.ALL) {
      return assets;
    }

    const matchedAssets = [];

    for (const asset of assets) {
      if ((selectedSubCategory === _Constants.STRINGS.ALL || asset.subCategory === selectedSubCategory) && (selectedRole === _Constants.STRINGS.ALL || asset.role === selectedRole || asset.role === '')) {
        if (searchKeyword !== '') {
          let found = asset.name.toLowerCase().includes(searchKeywordLower);

          if (!found) {
            for (const keyword of asset.keywords) {
              if (keyword.toLocaleLowerCase().includes(searchKeywordLower)) {
                found = true;
                break;
              }
            }
          }

          if (!found) {
            for (const keyword of asset.autoKeywords) {
              if (keyword.toLocaleLowerCase().includes(searchKeywordLower)) {
                found = true;
                break;
              }
            }
          }

          if (found) {
            matchedAssets.push(asset);
          }
        } else {
          matchedAssets.push(asset);
        }
      }
    }

    return matchedAssets;
  }

  handleRoleChange(roleId) {
    if (!this.isSearchMode()) {
      const {
        selectedRole
      } = this.state;

      if (selectedRole !== roleId) {
        this.saveRole(roleId);
        this.setState({
          selectedRole: roleId
        });
      }
    } else {
      const newState = _objectSpread({}, this.state);

      newState.searchMode.selectedRole = roleId;
      this.setState(newState);
    }
  }

  handleSubCategoryChange(subCategoryId) {
    if (!this.isSearchMode()) {
      const {
        selectedSubCategory
      } = this.state;

      if (selectedSubCategory !== subCategoryId) {
        this.saveSubCategory(subCategoryId);
        this.setState({
          selectedSubCategory: subCategoryId
        });
      }
    } else {
      const newState = _objectSpread({}, this.state);

      newState.searchMode.selectedSubCategory = subCategoryId;
      this.setState(newState);
    }
  }
  /* eslint-disable quotes */


  renderSubCategoryItem(item) {
    const betaStr = _Localizer.localizer.getString("$$$/AssetsPanel/beta/label=Beta");

    if (item.value === 'Rigs' || item.value === 'Rigged objects') {
      return _react.default.createElement("div", null, item.label, " ", _react.default.createElement("span", {
        className: 'betaText'
      }, "(", betaStr, ")"));
    }

    return item.label;
  }
  /* eslint-disable quotes */


  renderFilterMenus() {
    const {
      category
    } = this.props;
    const {
      roles,
      subCategories
    } = category;
    let {
      selectedRole,
      selectedSubCategory
    } = this.state;

    if (this.isSearchMode()) {
      selectedRole = this.state.searchMode.selectedRole;
      selectedSubCategory = this.state.searchMode.selectedSubCategory;
    }

    const subCategoryList = subCategories.map(subCategory => {
      return {
        label: subCategory.name,
        value: subCategory.id
      };
    });
    subCategoryList.push({
      label: _Localizer.localizer.getString("$$$/AssetPanel/SubCategory/All/label=All"),
      value: 'All'
    });
    const rolesList = roles.map(role => {
      return {
        label: role.name,
        value: role.id
      };
    });
    rolesList.push({
      label: _Localizer.localizer.getString("$$$/AssetPanel/Role/All/label=All"),
      value: 'All'
    });

    const filterBy = _Localizer.localizer.getString("$$$/AssetPanel/FilterBy/label=Filter by");

    return _react.default.createElement(_FlexView.FlexView, {
      style: {
        marginTop: '8px'
      }
    }, roles.length > 0 && _react.default.createElement(_FlexView.FlexRow, {
      style: {
        marginBottom: '8px'
      }
    }, _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        flexGrow: 1
      }
    }, _react.default.createElement(_Select.default, {
      alignRight: true,
      defaultValue: rolesList[rolesList.length - 1].value,
      value: selectedRole,
      options: rolesList,
      onChange: roleId => this.handleRoleChange(roleId),
      placeholder: "Select filter",
      style: {
        width: '100%'
      }
    })), _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        marginLeft: '8px'
      }
    }, _react.default.createElement("span", {
      className: 'iconContainer'
    }, _react.default.createElement(_Filter.default, {
      size: "S",
      title: filterBy
    })))), subCategoryList.length > 0 && _react.default.createElement(_FlexView.FlexRow, null, _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        flexGrow: 1
      }
    }, _react.default.createElement(_Select.default, {
      alignRight: true,
      defaultValue: subCategoryList[subCategoryList.length - 1].value,
      value: selectedSubCategory,
      options: subCategoryList,
      onChange: subCatId => this.handleSubCategoryChange(subCatId),
      renderItem: this.renderSubCategoryItem,
      placeholder: "Select filter",
      style: {
        width: '100%'
      }
    })), _react.default.createElement(_FlexView.FlexColumn, {
      style: {
        marginLeft: '8px',
        visibility: roles.length > 0 ? 'hidden' : 'visible'
      }
    }, _react.default.createElement("span", {
      className: 'iconContainer'
    }, _react.default.createElement(_Filter.default, {
      size: "S",
      title: filterBy
    })))));
  }

  render() {
    const {
      storeId,
      category,
      layoutMode
    } = this.props;
    const assets = this.getFilteredAssets();
    return _react.default.createElement(_react.default.Fragment, null, this.renderFilterMenus(), _react.default.createElement("div", {
      style: {
        marginTop: '16px'
      }
    }, layoutMode == _Constants.LayoutModeE.GRID ? _react.default.createElement(_AssetsViewGrid.default, {
      assets: assets,
      category: category,
      storeId: storeId
    }) : _react.default.createElement(_AssetsViewList.default, {
      assets: assets,
      category: category,
      storeId: storeId
    })));
  }

  componentWillUnmount() {
    const {
      category
    } = this.props;

    if (category.id === _Constants.STRINGS.SOUND_CLIPS) {
      _AudioPlayer.default.getInstance().stop();
    }
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AssetsCategoryView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultFilters, "defaultFilters", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsCategoryView.tsx");
  reactHotLoader.register(getDefaultFilter, "getDefaultFilter", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsCategoryView.tsx");
  reactHotLoader.register(AssetsCategoryView, "AssetsCategoryView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsCategoryView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRedux = __webpack_require__(123);

var _reactHotkeys = __webpack_require__(356);

var _uxp = __webpack_require__(48);

var _Button = _interopRequireDefault(__webpack_require__(33));

var _ArrowDownSmall = _interopRequireDefault(__webpack_require__(357));

var _ArrowUpSmall = _interopRequireDefault(__webpack_require__(358));

var _GridView = _interopRequireDefault(__webpack_require__(906));

var _types = __webpack_require__(219);

var _Dragable = _interopRequireDefault(__webpack_require__(378));

var _reactPointable = _interopRequireDefault(__webpack_require__(968));

var _AssetPreview = _interopRequireDefault(__webpack_require__(379));

var _applications = _interopRequireDefault(__webpack_require__(43));

var _Selectable = _interopRequireDefault(__webpack_require__(384));

var _SelectionContext = _interopRequireDefault(__webpack_require__(385));

var _AssetsViewGridM = _interopRequireDefault(__webpack_require__(990));

var _ObjectsStore = __webpack_require__(102);

var _AssetsStoreMgrActions = __webpack_require__(138);

var _AssetsContextMenu = _interopRequireDefault(__webpack_require__(386));

var _Constants = __webpack_require__(103);

var _NodeInfo = __webpack_require__(189);

var _FlexView = __webpack_require__(115);

var _AssetsEmptyView = _interopRequireDefault(__webpack_require__(387));

var _IAssetModel = __webpack_require__(113);

var _Localizer = __webpack_require__(44);

var _PIPLogger = __webpack_require__(104);

var _dec, _class, _class2, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* eslint-disable quotes */
class GridItemView extends _react.default.Component {
  constructor(props) {
    super(props);
    this._thumbRef = void 0;

    this.onMouseEnter = () => {
      //console.log('GridItemView::onMouseEnter');
      const newState = _objectSpread({}, this.state);

      newState.pointerIn = true;
      this.setState(newState);

      if (this._thumbRef) {
        this._thumbRef.showDynamicRendition(newState.pointerIn);
      }

      this.repairHoverStateMachine();
    };

    this.onMouseLeave = () => {
      const newState = _objectSpread({}, this.state);

      newState.pointerIn = false;
      this.setState(newState);

      if (this._thumbRef) {
        this._thumbRef.showDynamicRendition(newState.pointerIn);
      }
    };

    this.onNameEditBlur = e => {
      const {
        editMode
      } = this.props;

      if (editMode) {
        this.onNameCommit(e);
      }
    };

    this.onNameEditKeyUp = e => {
      if (e.keyCode === _Constants.KeyCodesE.ENTER) {
        this.onNameCommit(e);
      }
    };

    this.onNameEditChange = e => {
      console.log(e.target.value); // adhiman: can be removed once maxLength in implemented in UXP-DVA adapters

      if (e.target.value.length <= _Constants.MAX_NAME_LENGTH) {
        this.setState({
          assetName: e.target.value
        });
      }
    };

    this.onNameDoubleClick = _e => {
      console.log('enable name edit on dbl click');
      const {
        onRenameTrigger,
        item
      } = this.props;

      if (onRenameTrigger) {
        onRenameTrigger(item);
      }

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_RENAME,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_DOUBLE_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, item);
    };

    this.state = {
      assetName: props.item.name,
      pointerIn: false
    };
  }

  componentWillUnmount() {
    if (GridItemView._lastHoveredGridItem == this) {
      this.onMouseLeave();
      GridItemView._lastHoveredGridItem = null;
    }
  }

  repairHoverStateMachine() {
    // hack to avoid playing 2 swfs together.
    if (GridItemView._lastHoveredGridItem && GridItemView._lastHoveredGridItem !== this && GridItemView._lastHoveredGridItem.state.itemHovered) {
      //last one still may be active
      GridItemView._lastHoveredGridItem.onMouseLeave();
    }

    GridItemView._lastHoveredGridItem = this;
  }

  onNameCommit(e) {
    const {
      onRenameCommit,
      item
    } = this.props;
    const {
      assetName
    } = this.state;

    if (onRenameCommit) {
      onRenameCommit(item, assetName);
    }

    if (e.target) {
      e.target.blur();
    }
  }

  render() {
    const _this$props = this.props,
          {
      item,
      editMode,
      ['onRenameTrigger']: onRenameTriggerIgnore,
      ['onRenameCommit']: onRenameCommitIgnore,
      selectionContext
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["item", "editMode", "onRenameTrigger", "onRenameCommit", "selectionContext"]);
    const {
      assetName
    } = this.state;
    const tooltip = item.exportMode !== _IAssetModel.ExportModeE.NONE ? `(${GridItemView.sToolTips[item.exportMode]}) ${item.name}` : item.name;
    let name;
    const roundedCorners = 'ui-rounded-2px';

    if (this.state.pointerIn || selectionContext.isSelected(item.id) || item.assetType == _uxp.AssetTypeE.AUDIO) {
      if (editMode) {
        name = _react.default.createElement("div", {
          className: `${_AssetsViewGridM.default.assetNameCont} ${roundedCorners}`
        }, _react.default.createElement("input", {
          placeholder: _Localizer.localizer.getString("$$$/AssetsPanel/AssetName/placeholder=Asset name..."),
          value: assetName,
          autoFocus: true,
          onChange: this.onNameEditChange,
          onKeyUp: this.onNameEditKeyUp,
          onBlur: this.onNameEditBlur,
          style: {
            width: '100%',
            height: '20px'
          },
          maxLength: _Constants.MAX_NAME_LENGTH
        }));
      } else {
        name = _react.default.createElement("div", {
          title: tooltip,
          className: `${_AssetsViewGridM.default.assetNameCont}
                        ${roundedCorners}`,
          onDoubleClick: this.onNameDoubleClick
        }, _react.default.createElement("p", {
          title: tooltip,
          className: _AssetsViewGridM.default.assetName,
          style: {
            marginLeft: '10px'
          }
        }, item.name));
      }
    }

    const styles = {
      position: 'relative'
    };

    const finalProps = _objectSpread({}, otherProps, {
      style: _objectSpread({}, styles),
      title: tooltip
    });

    return _react.default.createElement(_Selectable.default, {
      selectionContext: selectionContext,
      dataSelectionId: item.id
    }, _react.default.createElement(_reactPointable.default, {
      onPointerEnter: this.onMouseEnter,
      onPointerLeave: this.onMouseLeave,
      className: 'ui-adapt',
      style: styles
    }, _react.default.createElement(_AssetPreview.default, (0, _extends2.default)({
      ref: v => this._thumbRef = v,
      asset: item,
      className: roundedCorners
    }, finalProps)), name));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

GridItemView._lastHoveredGridItem = null;
GridItemView.sToolTips = {
  [_IAssetModel.ExportModeE.NONE]: '',
  [_IAssetModel.ExportModeE.SYMBOL]: _Localizer.localizer.getString("$$$/AssetsPanel/Asset/ExportedAs/Symbol/tooltip=Symbol"),
  [_IAssetModel.ExportModeE.SCENE]: _Localizer.localizer.getString("$$$/AssetsPanel/Asset/ExportedAs/Scene/tooltip=Scene")
};

const mapStateToProps = (state, ownProps) => {
  const nodeInfo = new _NodeInfo.NodeInfo({
    storeId: ownProps.storeId,
    categoryId: ownProps.category.id
  });
  let newAddedAssets = [];

  if (state.assetsStores.newAddedMap.has(nodeInfo.slug)) {
    newAddedAssets = [...state.assetsStores.newAddedMap.get(nodeInfo.slug)];
  }

  return {
    newAddedAssets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearNewAddedAssets: ownProps => {
      const nodeInfo = new _NodeInfo.NodeInfo({
        storeId: ownProps.storeId,
        categoryId: ownProps.category.id
      });
      dispatch((0, _AssetsStoreMgrActions.createClearNewAssetsAddedAlertAction)(nodeInfo));
    }
  };
};

let AssetsViewGrid = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = class AssetsViewGrid extends _react.default.Component {
  /* default as per assets panel dimensions */
  constructor(props) {
    super(props);
    this._gridViewRef = void 0;
    this._menuRef = void 0;
    this._renameAssetId = void 0;
    this._selectionContext = void 0;
    this._scrollToRowIndex = 0;

    this.onSelectionChange = () => {
      this.refreshView();
      const selected = this._selectionContext.getSelectedList().length > 0;
      _applications.default.getAssetsEndPoint().assetsSelected = selected;
      this.saveSelection();
    };

    this.onDragedOut = (e, comp) => {
      const key = comp.props.itemId;
      console.log('Asset draggedout : ', key);

      _applications.default.getAssetsEndPoint().assetsDraggedToStage(JSON.stringify([key]));
    };

    this.onDeletePressed = () => {
      const selectedList = this._selectionContext.getSelectedList();

      console.log('onDeletePressed : ', selectedList);

      if (selectedList.length > 0) {
        const request = {
          storeId: this.props.storeId,
          assets: selectedList
        };

        _applications.default.getAssetsEndPoint().deleteAssets(request).then(response => {
          if (response.status) {
            this._selectionContext.reset();
          }
        });
      }
    };

    this.onContextMenuDelete = (_e, asset) => {
      const request = {
        storeId: this.props.storeId,
        assets: [asset.id]
      };

      _applications.default.getAssetsEndPoint().deleteAssets(request);

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_DELETE,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_RIGHT_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, asset);
    };

    this.onContextMenuRename = (_e, asset) => {
      this.onRenameTrigger(asset);
      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_RENAME,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_RIGHT_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, asset);
    };

    this.onRenameTrigger = asset => {
      this._renameAssetId = asset.id;
      this.forceUpdate();
    };

    this.onRenameCommit = (item, newName) => {
      const sanitizedName = newName.trim();

      if (sanitizedName === '') {
        this._renameAssetId = null;
        this.forceUpdate();
        return;
      }

      const request = {
        storeId: this.props.storeId,
        assetId: this._renameAssetId,
        newName: sanitizedName
      };
      const This = this;

      _applications.default.getAssetsEndPoint().renameAssets(request).then(response => {
        if (response.status) {
          const {
            savedName
          } = response.data;

          if (savedName) {
            item.setName(savedName);
          }

          This._renameAssetId = null;
          This.forceUpdate();
        }
      });
    };

    this.onContextMenu = (e, asset) => {
      console.log('onContextMenu');

      this._menuRef.showAt(asset, e.pageX, e.pageY);
    };

    this.onScrollUpClicked = () => {
      this._gridViewRef.scrollToCell(0, 0);

      this.forceUpdate();
      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_SCROLL,
        eventName: _PIPLogger.PIP_STR.ASSET_SCROLL_UP,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(eventData);
    };

    this.onScrollDownClicked = () => {
      const newRowIndex = this._gridViewRef.getScrolledRow() + 4;

      this._gridViewRef.scrollToCell(newRowIndex, 0);

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_SCROLL,
        eventName: _PIPLogger.PIP_STR.ASSET_SCROLL_SHOW_NEXT,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(eventData);
    };

    this.onScrollEdgeReached = _scrollEdge => {
      this.forceUpdate();
    };

    this.onColsCountChange = newCount => {
      if (newCount > 0) {
        AssetsViewGrid._sColsCount = newCount;
        this.forceUpdate();
      }
    };

    this.renderCell = params => {
      const {
        assets
      } = this.props;
      const {
        rowIndex,
        columnIndex,
        colsCount
      } = params; //console.log('row : ', rowIndex, 'col: ', columnIndex);

      const index = rowIndex * colsCount + columnIndex;

      if (index < assets.length) {
        const item = assets[index];
        return _react.default.createElement(_Dragable.default, {
          key: item.id,
          itemId: item.id,
          onDragedOut_: this.onDragedOut,
          onContextMenu: e => this.onContextMenu(e, item)
        }, _react.default.createElement(GridItemView, {
          item: item,
          selectionContext: this._selectionContext,
          editMode: this._renameAssetId === item.id,
          onRenameTrigger: this.onRenameTrigger,
          onRenameCommit: this.onRenameCommit
        }));
      }
    };

    this.renderNoContent = () => {
      return _react.default.createElement(_AssetsEmptyView.default, null);
    };

    this.state = {
      assets: props.assets
    };
    this._selectionContext = new _SelectionContext.default(true);

    _applications.default.getAssetsEndPoint().addHostCommandListener('delete', this.onDeletePressed);

    this.applySelection();

    if (_ObjectsStore.defaultStore.getObject('activeCategory') !== this.props.category.id) {
      _ObjectsStore.defaultStore.addObject('activeCategory', this.props.category.id);

      this._selectionContext.reset();
    }
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (!(newProps.assets === prevState.assets && newProps.assets.length === prevState.assets.length)) {
      return {
        assets: newProps.assets
      };
    } else if (newProps.newAddedAssets.length > 0) {
      return prevState;
    }

    return null;
  }

  componentDidMount() {
    this._selectionContext.addSelectionChangeListener(this.onSelectionChange);

    this.checkIfNewAssetsAdded();
  }

  componentDidUpdate() {
    this._scrollToRowIndex = -1;
    this.checkIfNewAssetsAdded();
  }

  componentWillUnmount() {
    //console.log('AssetsViewGrid::componentWillUnmount');
    this._selectionContext.removeSelectionChangeListener(this.onSelectionChange);

    _applications.default.getAssetsEndPoint().removeHostCommandListener('delete', this.onDeletePressed);
  }

  computeScroll() {
    this._scrollToRowIndex = 0;
    const colsCount = AssetsViewGrid._sColsCount;

    const list = this._selectionContext.getSelectedList();

    if (colsCount > 0 && list.length > 0) {
      const index = this.props.assets.findIndex(asset => asset.id === list[0]);

      if (index >= 0) {
        this._scrollToRowIndex = Math.floor(index / colsCount); //console.log('scroll grid row', this._scrollToRowIndex);
      }
    }
  }

  checkIfNewAssetsAdded() {
    if (this.props.newAddedAssets.length > 0) {
      // new assets added, apply the new selection and clear the alert
      console.log('apply selection and clear the alert');
      this.applySelection(this.props.newAddedAssets);
      this.props.clearNewAddedAssets(this.props);
    }
  }

  getSelectionKey() {
    //const {storeId, category} = this.props;
    //return `selection_${storeId}-${category.id}`;
    //return this.props.category.id;
    return 'activeSelection';
  }

  saveSelection() {
    const key = this.getSelectionKey();

    _ObjectsStore.defaultStore.addObject(key, this._selectionContext.getSelectedList());
  }

  applySelection(list) {
    if (list === undefined) {
      const key = this.getSelectionKey();
      list = _ObjectsStore.defaultStore.getTypedObject(key, Array);
    }

    if (list && list.length > 0) {
      this._selectionContext.reset();

      this._selectionContext.addSelected(list[0]);

      this.computeScroll();
    } else {
      _applications.default.getAssetsEndPoint().assetsSelected = false;
    }
  }

  refreshView() {
    this.forceUpdate(); //this.setState(this.state);
  }

  renderScrollButtons() {
    if (this.props.assets.length <= 8) {
      return null;
    }

    let scrollEdge = _types.ScrollEdgeE.NONE;

    if (this._gridViewRef) {
      if (this._gridViewRef.getRowsCount() <= 4) {
        return null;
      }

      scrollEdge = this._gridViewRef.getScrollEdge();
    }

    let button;

    if (scrollEdge & _types.ScrollEdgeE.BOTTOM) {
      button = _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "action",
        onClick: this.onScrollUpClicked
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, _Localizer.localizer.getString("$$$/AssetsPanel/Top/label=Top"), _react.default.createElement("div", {
        style: {
          width: '5px'
        }
      }), _react.default.createElement(_ArrowUpSmall.default, null)));
    } else {
      button = _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "action",
        onClick: this.onScrollDownClicked
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, _Localizer.localizer.getString("$$$/AssetsPanel/ShowNext/label=Show next"), _react.default.createElement("div", {
        style: {
          width: '5px'
        }
      }), _react.default.createElement(_ArrowDownSmall.default, null)));
    }

    return _react.default.createElement(_FlexView.FlexView, {
      style: {
        marginTop: '8px',
        justifyContent: 'flex-end'
      }
    }, _react.default.createElement("div", {
      style: {
        marginLeft: 'auto'
      }
    }, button));
  }

  render() {
    const {
      assets
    } = this.props;
    const gridStyles = {
      width: 'calc(100% + 10px)',
      height: '304px',
      marginLeft: '4px',
      userSelect: 'none'
    };
    const gridRowStyles = {
      boxSizing: 'content-box',
      paddingTop: '1px',
      paddingBottom: '1px'
    };
    const keyMap = {
      DELETE_NODE: ['del', 'backspace']
    };
    const handlers = {
      DELETE_NODE: this.onDeletePressed
    };
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHotkeys.HotKeys, {
      keyMap: keyMap,
      handlers: handlers,
      "data-name": '__HOT_KEYS__'
    }, _react.default.createElement(_GridView.default, {
      ref: v => this._gridViewRef = v,
      cellWidth: 128,
      cellHeight: 72,
      cellSpacing: new _types.Size(4, 4),
      cellsCount: assets.length,
      renderCell: this.renderCell,
      renderEmptyView: this.renderNoContent,
      allowCellResize: false,
      style: gridStyles,
      cellRowStyle: gridRowStyles,
      onColsCountChange: this.onColsCountChange,
      scrollToRow: this._scrollToRowIndex,
      onScrollEdgeReached: this.onScrollEdgeReached
    })), this.renderScrollButtons(), _react.default.createElement(_AssetsContextMenu.default, {
      ref: v => this._menuRef = v,
      onRenameClick: this.onContextMenuRename,
      onDeleteClick: this.onContextMenuDelete
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}, _class2.defaultProps = {
  selection: [],
  removeSelection: () => {}
}, _class2._sColsCount = 2, _temp)) || _class);
exports.default = AssetsViewGrid;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GridItemView, "GridItemView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewGrid.tsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewGrid.tsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewGrid.tsx");
  reactHotLoader.register(AssetsViewGrid, "AssetsViewGrid", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewGrid.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridView = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _AutoSizer = _interopRequireDefault(__webpack_require__(359));

var _reactVirtualized = __webpack_require__(405);

var _types = __webpack_require__(219);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class GridView extends _react.default.Component {
  /* default as per asset panel min dimenssions */
  constructor(props) {
    super(props);
    this._gridRef = void 0;
    this._gridWidth = void 0;
    this._gridHeight = void 0;
    this._rowsCount = 0;
    this._colsCount = 2;
    this._colWidth = this.props.cellWidth;
    this._colHeight = this.props.cellHeight;
    this._scrolledColIndex = 0;
    this._scrolledRowIndex = 0;
    this._scrollEdge = _types.ScrollEdgeE.NONE;

    this.onGridScroll = params => {
      const {
        onScrollEdgeReached
      } = this.props;
      const {
        clientHeight,
        scrollHeight,
        scrollTop
      } = params;
      this._scrolledRowIndex = Math.floor(scrollTop / this.colHeight); //this._scrolledColIndex = Math.floor(scrollLeft / this.colWidth);

      let scrollEdge = _types.ScrollEdgeE.NONE;

      if (scrollTop == 0) {
        scrollEdge |= _types.ScrollEdgeE.TOP;
      } else if (scrollTop + clientHeight >= scrollHeight) {
        scrollEdge |= _types.ScrollEdgeE.BOTTOM;
      }

      if (onScrollEdgeReached && scrollEdge !== _types.ScrollEdgeE.NONE) {
        setTimeout(() => {
          onScrollEdgeReached(scrollEdge);
        }, 150);
      }

      this._scrollEdge = scrollEdge;
    };

    this.renderGridCell = params => {
      const {
        key,
        rowIndex,
        columnIndex,
        style
      } = params; //console.log('row : ', rowIndex, 'col: ', columnIndex);

      const args = {
        rowIndex,
        columnIndex,
        colsCount: this.colsCount
      };
      let {
        x,
        y
      } = this.props.cellSpacing;
      x = x / 2 + 'px';
      y = y / 2 + 'px';

      const styles = _objectSpread({}, style, {
        padding: `${y} ${x}`,
        boxSizing: 'border-box'
      });

      return _react.default.createElement("div", {
        key: key,
        className: "ui-adapt",
        style: styles
      }, this.props.renderCell(args));
    };

    this.renderNoContent = () => {
      const {
        renderEmptyView
      } = this.props;

      if (renderEmptyView) {
        return renderEmptyView();
      }

      return _react.default.createElement("div", null, "No assets");
    };

    this.state = {
      cellsCount: this.props.cellsCount
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (!(newProps.cellsCount === prevState.cellsCount)) {
      return {
        cellsCount: newProps.cellsCount
      };
    }

    return null;
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.cellsCount !== this.props.cellsCount) {
      if (this.colsCount > 0) {
        this.rowsCount = Math.ceil(nextProps.cellsCount / this.colsCount);
        console.log(this.rowsCount);
      }
    }

    return true;
  }

  get gridWidth() {
    return this._gridWidth;
  }

  set gridWidth(width) {
    this._gridWidth = width;
  }

  get gridHeight() {
    return this._gridHeight;
  }

  set gridHeight(height) {
    this._gridHeight = height;
  }

  get rowsCount() {
    return this._rowsCount;
  }

  set rowsCount(newCount) {
    if (this._rowsCount !== newCount) {
      this._rowsCount = newCount;
    }
  }

  get colsCount() {
    return this._colsCount;
  }

  set colsCount(newCount) {
    if (this._colsCount !== newCount) {
      this._colsCount = newCount;

      if (this.props.onColsCountChange) {
        this.props.onColsCountChange(newCount);
      }
    }
  }

  get colWidth() {
    return this._colWidth;
  }

  set colWidth(newWidth) {
    if (this._colWidth !== newWidth) {
      this._colWidth = newWidth;
    }
  }

  get colHeight() {
    return this._colHeight;
  }

  set colHeight(newHeight) {
    if (this._colHeight !== newHeight) {
      this._colHeight = newHeight;
    }
  }

  getRowsCount() {
    return this._rowsCount;
  }

  getColsCount() {
    return this._colsCount;
  }

  getScrolledRow() {
    return this._scrolledRowIndex;
  }

  getScrolledCol() {
    return this._scrolledColIndex;
  }

  scrollToCell(rowIndex, columnIndex) {
    const {
      colWidth,
      colHeight
    } = this; //this._gridRef.scrollToCell({columnIndex, rowIndex});

    this._gridRef.scrollToPosition({
      scrollLeft: columnIndex * colWidth,
      scrollTop: rowIndex * colHeight
    });
  }

  getScrollEdge() {
    return this._scrollEdge;
  }

  // eslint-disable-next-line no-unused-vars
  calcParams(width, height) {
    if (this.gridWidth === width && this.gridHeight == height) {
      return {
        colWidth: this.colWidth,
        colHeight: this.colHeight,
        rowsCount: this.rowsCount,
        colsCount: this.colsCount
      };
    }

    this.gridWidth = width;
    this.gridHeight = height;
    console.log('recalculate Grid witdth height');
    const {
      cellsCount,
      cellHeight,
      cellWidth,
      cellSpacing,
      responsive
    } = this.props;
    let colWidth = 0;
    let colHeight = 0;
    let colsCount = 0;
    let rowsCount = 0;

    if (cellsCount > 0) {
      if (responsive) {
        const {
          allowCellResize,
          cellBreakFactor
        } = this.props;

        if (allowCellResize) {
          // TODO: Fix the resize glitch
          const extraWidth = width % cellWidth;

          if (cellsCount * cellWidth > width && extraWidth > cellWidth * cellBreakFactor) {
            colsCount = Math.ceil(width / cellWidth);
          } else {
            colsCount = Math.floor(width / cellWidth);
          }

          if (colsCount > 0) {
            // problem with double floating dimensions in DVA, so round it of.
            colWidth = Math.round(width / colsCount);
            rowsCount = Math.ceil(cellsCount / colsCount);
          }
        } else {
          colWidth = cellWidth + cellSpacing.x;
          colsCount = Math.floor(width / colWidth);

          if (colsCount > 0) {
            rowsCount = Math.ceil(cellsCount / colsCount);
          }
        }

        colHeight = cellHeight + cellSpacing.y;
      } else {
        colWidth = cellWidth + cellSpacing.x;
        colHeight = cellHeight + cellSpacing.y;
        colsCount = Math.floor(width / colWidth);

        if (colsCount > 0) {
          rowsCount = Math.ceil(cellsCount / colsCount);
        }
      }

      this.rowsCount = rowsCount;
      this.colsCount = colsCount;
      this.colWidth = colWidth;
      this.colHeight = colHeight;
    }
    /* for dbug
    console.log('+++++++calcParams++++++');
    console.log('cellsCount: ', cellsCount);
    console.log('width: ', width, 'height: ', height);
    console.log('colWidth: ', colWidth, 'colHeight: ', colHeight);
    console.log('rowsCount: ', rowsCount, 'colsCount: ', colsCount);
    console.log('-------calcParams------'); 
    */


    return {
      colWidth,
      colHeight,
      rowsCount,
      colsCount
    };
  }

  render() {
    const _this$props = this.props,
          {
      style,
      className,
      cellRowStyle,
      scrollToRow,
      scrollToAlignment,
      ['onScroll']: onScrollIgnore,
      ['aria-readonly']: areaReadOnlyIgnore
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["style", "className", "cellRowStyle", "scrollToRow", "scrollToAlignment", "onScroll", "aria-readonly"]);
    return _react.default.createElement(_AutoSizer.default, {
      className: className,
      style: _objectSpread({
        width: '100%'
      }, style)
    }, ({
      width,
      height
    }) => {
      const {
        colWidth,
        colHeight,
        rowsCount,
        colsCount
      } = this.calcParams(width, height);
      return _react.default.createElement(_reactVirtualized.Grid, (0, _extends2.default)({
        ref: v => this._gridRef = v,
        cellRenderer: this.renderGridCell,
        noContentRenderer: this.renderNoContent,
        onScroll: this.onGridScroll,
        overscanColumnCount: 5,
        overscanRowCount: 10,
        rowHeight: colHeight,
        columnWidth: colWidth,
        rowCount: rowsCount,
        columnCount: colsCount,
        width: width,
        height: height,
        style: {
          width: '100%'
        },
        containerStyle: cellRowStyle,
        scrollToRow: scrollToRow,
        scrollToAlignment: scrollToAlignment
      }, otherProps));
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.GridView = exports.default = GridView;
GridView.defaultProps = {
  cellWidth: 100,
  cellHeight: 100,
  cellSpacing: new _types.Size(2, 2),
  scrollToRow: 0,
  scrollToCol: 0,
  scrollToAlignment: 'center',
  cellBreakFactor: 0.5,
  responsive: true,
  allowCellResize: false
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GridView, "GridView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/containers/GridView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NodeType", {
  enumerable: true,
  get: function () {
    return _constants.NodeType;
  }
});
Object.defineProperty(exports, "DragDropManager", {
  enumerable: true,
  get: function () {
    return _DragDropManager.DragDropManager;
  }
});

var _constants = __webpack_require__(152);

var _DragDropManager = __webpack_require__(220);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragSource = void 0;

var _constants = __webpack_require__(152);

var _DragDropManager = __webpack_require__(220);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class DragSource {
  constructor(node) {
    this._node = void 0;
    this._state = void 0;
    this._activeNodes = void 0;

    this.onPointerDown = () => {
      console.log('DragSource::onPointerDown', this._state);
      this._state = _constants.EventState.DRAG_START;
      window.addEventListener('pointermove', this.onPointerMove);
      window.addEventListener('pointerup', this.onPointerUp);
    };

    this.onPointerMove = e => {
      //console.log('DragSource::onPointerMove', e);
      if (this._state == _constants.EventState.DRAG_START) {
        _DragDropManager.DragDropManager.instance().activeDragSource = this;
        this._state = _constants.EventState.DRAG_MOVE;
        const event = this.createCustomEvent(e, '_dragstart');
        this.node.dispatchEvent(event);
      } else if (this._state == _constants.EventState.DRAG_MOVE) {
        const event = this.createCustomEvent(e, '_dragmove');
        this.node.dispatchEvent(event);
      }
    };

    this.onPointerUp = e => {
      console.log('DragSource::onPointerUp', this._state);
      window.removeEventListener('pointermove', this.onPointerMove);
      window.removeEventListener('pointerup', this.onPointerUp);

      if (this._state == _constants.EventState.DRAG_MOVE) {
        const event = this.createCustomEvent(e, '_dragend');
        this.node.dispatchEvent(event); //DragDropManager.getInstance().dropedOnTarget(target);
      }

      this.resetState();
    };

    this._node = node;
    this._state = _constants.EventState.NONE;
    this._activeNodes = [node];
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.init();
  }

  init() {
    this.node.addEventListener('pointerdown', this.onPointerDown);
  }

  deinit() {
    this.node.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
  }

  get node() {
    return this._node;
  }

  get activeNodes() {
    return this._activeNodes;
  }

  createCustomEvent(e, name) {
    const event = new Event(name);
    Object.defineProperty(event, 'target', {
      value: this.node
    });
    Object.defineProperty(event, 'clientX', {
      value: e.clientX
    });
    Object.defineProperty(event, 'clientY', {
      value: e.clientY
    });
    Object.defineProperty(event, 'pageX', {
      value: e.pageX
    });
    Object.defineProperty(event, 'pageY', {
      value: e.pageY
    });
    Object.defineProperty(event, 'node', {
      value: this.node
    });
    Object.defineProperty(event, 'nodes', {
      value: this.activeNodes
    });
    return event;
  }

  onDragedOut(e) {
    console.log('DragSource::onDragedOut');
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    const event = this.createCustomEvent(e, '_dragedout');
    this.node.dispatchEvent(event);
    this.resetState();
  }

  resetState() {
    _DragDropManager.DragDropManager.instance().activeDragSource = null;
    this._state = _constants.EventState.NONE;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.DragSource = DragSource;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DragSource, "DragSource", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/gestures/DragSource.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropTarget = void 0;

var _constants = __webpack_require__(152);

var _DragDropManager = __webpack_require__(220);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class DropTarget {
  constructor(node) {
    this._node = void 0;
    this._state = void 0;

    this.onPointerEnter = () => {
      console.log('DropTarget::onPointerEnter', this._state);
      this._state = _constants.EventState.POINTER_ENTER;
      this.node.addEventListener('pointerup', this.onPointerUp);
      _DragDropManager.DragDropManager.instance().activeDropTarget = this;
    };

    this.onPointerLeave = () => {
      console.log('DropTarget::onPointerLeave', this._state);
      this._state = _constants.EventState.POINTER_LEAVE;
      this.node.removeEventListener('pointerup', this.onPointerUp);
      _DragDropManager.DragDropManager.instance().activeDropTarget = null;
    };

    this.onPointerUp = e => {
      this.node.removeEventListener('pointerup', this.onPointerUp);
      console.log('DropTarget::onPointerUp', this._state);

      if (this._state == _constants.EventState.POINTER_ENTER) {
        // should work, but mouseup not working for now
        _DragDropManager.DragDropManager.instance().dropedOnTarget(e, this);
      }

      this._state = _constants.EventState.NONE;
    };

    this._node = node;
    this._state = _constants.EventState.NONE;
    this.init();
  }

  get node() {
    return this._node;
  }

  init() {
    this.node.addEventListener('pointerenter', this.onPointerEnter);
    this.node.addEventListener('pointerleave', this.onPointerLeave);
    this.node.addEventListener('pointerup', this.onPointerUp);
  }

  deinit() {
    this.node.removeEventListener('pointerenter', this.onPointerEnter);
    this.node.removeEventListener('pointerleave', this.onPointerLeave);
    this.node.removeEventListener('pointerup', this.onPointerUp);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.DropTarget = DropTarget;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DropTarget, "DropTarget", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/gestures/DropTarget.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(33));

var _PlayCircle = _interopRequireDefault(__webpack_require__(380));

var _StopCircle = _interopRequireDefault(__webpack_require__(381));

var _AudioPlayer = _interopRequireDefault(__webpack_require__(382));

var _AudioAssetPreviewM = _interopRequireDefault(__webpack_require__(975));

var _Localizer = __webpack_require__(44);

var _AppContext = __webpack_require__(122);

var _Constants = __webpack_require__(103);

var _PIPLogger = __webpack_require__(104);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AudioAssetPreview extends _react.default.Component {
  constructor(props) {
    super(props);

    this.onPlayClicked = () => {
      const {
        playing
      } = this.state;

      if (playing) {
        this.stop();
      } else {
        // stop other active instance.
        if (AudioAssetPreview._playingInstance && AudioAssetPreview._playingInstance !== this) {
          AudioAssetPreview._playingInstance.stop();
        }

        this.play();
      }

      const event = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_SOUND_PREVIEW,
        eventName: playing ? _PIPLogger.PIP_STR.ASSET_PREVIEW_STOP : _PIPLogger.PIP_STR.ASSET_PREVIEW_PLAY,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(event);
    };

    const audioPlayer = _AudioPlayer.default.getInstance();

    const trackId = audioPlayer.getActiveTrackId();
    this.state = {
      playing: this.props.asset.id === trackId
    };

    if (this.props.asset.id === trackId) {
      AudioAssetPreview._playingInstance = this;
    }

    if (!AudioAssetPreview._playbackCompleteRegistered) {
      audioPlayer.addPlaybackCompleteListener(AudioAssetPreview.onPlaybackComplete);
      AudioAssetPreview._playbackCompleteRegistered = true;
    }
  }

  static onPlaybackComplete() {
    if (AudioAssetPreview._playingInstance) {
      AudioAssetPreview._playingInstance.stop();
    }
  }

  play() {
    const {
      asset
    } = this.props;
    this.setState({
      playing: true
    });

    _AudioPlayer.default.getInstance().play(asset);

    AudioAssetPreview._playingInstance = this;
  }

  stop() {
    if (this.state.playing) {
      this.setState({
        playing: false
      });

      _AudioPlayer.default.getInstance().stop();

      AudioAssetPreview._playingInstance = null;
    }
  }

  componentWillUnmount() {
    if (AudioAssetPreview._playingInstance === this) {
      AudioAssetPreview._playingInstance = null;
    }
  }
  /* eslint-disable quotes */


  render() {
    const _this$props = this.props,
          {
      className,
      asset
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "asset"]);
    const bottmOffset = _AppContext.appContext.getLayoutMode() === _Constants.LayoutModeE.GRID ? '20px' : '0px';

    const internalStyle = _objectSpread({}, this.props.style, {
      width: '100%',
      height: `calc(100% - ${bottmOffset})`
    });

    let icon;
    let tooltip;

    if (this.state.playing) {
      tooltip = _Localizer.localizer.getString("$$$/AssetPanel/AudioPlayer/Stop/tooltip=Stop");
      icon = _react.default.createElement(_StopCircle.default, {
        title: tooltip
      });
    } else {
      tooltip = _Localizer.localizer.getString("$$$/AssetPanel/AudioPlayer/Play/tooltip=Play");
      icon = _react.default.createElement(_PlayCircle.default, {
        title: tooltip
      });
    }

    const classes = `${className}
                            ${_AudioAssetPreviewM.default.audioAssetPreviewCont}
                            ${asset.subCategory === 'Background scores' ? _AudioAssetPreviewM.default.backgroundScores : _AudioAssetPreviewM.default.soundEffects}`;
    return _react.default.createElement("div", (0, _extends2.default)({
      className: classes
    }, otherProps), _react.default.createElement("div", {
      className: _AudioAssetPreviewM.default.audioAssetPreviewInner,
      style: internalStyle
    }, _react.default.createElement(_Button.default, {
      quiet: true,
      variant: "tool",
      icon: icon,
      onClick: this.onPlayClicked,
      title: tooltip
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AudioAssetPreview;
AudioAssetPreview._playingInstance = void 0;
AudioAssetPreview._playbackCompleteRegistered = false;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AudioAssetPreview, "AudioAssetPreview", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/preview/AudioAssetPreview.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayerView = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(33));

var _PlayCircle = _interopRequireDefault(__webpack_require__(380));

var _StopCircle = _interopRequireDefault(__webpack_require__(381));

__webpack_require__(973);

var _Localizer = __webpack_require__(44);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AudioPlayerView extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      playing: false
    };
    this._viewRef = void 0;

    this.onPlayClicked = () => {
      const {
        playing
      } = this.state;

      if (playing) {
        this.stop();
      } else {
        this.play();
      }
    };
  }

  play(filePath) {
    const {
      customAttributes
    } = this.props;
    this.setState({
      playing: true
    });

    if (filePath !== undefined) {
      customAttributes['FilePath'] = filePath;
    }

    customAttributes['Play'] = true;
    this.updateCustomAttributes(customAttributes);
  }

  stop() {
    const {
      customAttributes
    } = this.props;
    this.setState({
      playing: false
    });
    customAttributes['Play'] = false;
    this.updateCustomAttributes(customAttributes);
  }

  componentDidMount() {
    //console.log('AudioPlayerView::componentDidMount');
    const {
      customAttributes,
      onPlaybackComplete
    } = this.props;

    if (customAttributes) {
      customAttributes['Play'] = this.state.playing;
      this.updateCustomAttributes(customAttributes);
    }

    if (onPlaybackComplete) {
      this._viewRef.addEventListener('onPlaybackComplete', onPlaybackComplete);
    }
  }

  componentWillUnmount() {
    const {
      onPlaybackComplete
    } = this.props;

    if (onPlaybackComplete) {
      this._viewRef.removeEventListener('onPlaybackComplete', onPlaybackComplete);
    }
  }

  updateCustomAttributes(customAttributes) {
    this._viewRef.setAttribute('customAttributes', customAttributes);
  }
  /* eslint-disable quotes */


  render() {
    const _this$props = this.props,
          {
      style,
      ['customAttributes']: customAttributesIgnore
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["style", "customAttributes"]);

    const styles = _objectSpread({
      'display': 'block'
    }, style);

    let icon;
    let tooltip;

    if (this.state.playing) {
      tooltip = _Localizer.localizer.getString("$$$/AssetPanel/AudioPlayer/Stop/tooltip=Stop");
      icon = _react.default.createElement(_StopCircle.default, {
        title: tooltip
      });
    } else {
      tooltip = _Localizer.localizer.getString("$$$/AssetPanel/AudioPlayer/Play/tooltip=Play");
      icon = _react.default.createElement(_PlayCircle.default, {
        title: tooltip
      });
    }

    return _react.default.createElement("div", {
      className: 'playerCont',
      style: styles
    }, _react.default.createElement("object", (0, _extends2.default)({
      is: "audio-player-view",
      ref: v => this._viewRef = v,
      style: styles
    }, otherProps), this.props.children), _react.default.createElement("div", {
      className: 'ui-adapt playControl'
    }, _react.default.createElement(_Button.default, {
      quiet: true,
      variant: "tool",
      icon: icon,
      onClick: this.onPlayClicked,
      title: tooltip
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.AudioPlayerView = exports.default = AudioPlayerView;
AudioPlayerView.defaultProps = {
  customAttributes: {
    AutoPlay: false,
    Play: false
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AudioPlayerView, "AudioPlayerView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/native/AudioPlayerView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(974);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.playerCont\n{\n    position: relative;\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\n.playControl {\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(976);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".AudioAssetPreview-m__audioAssetPreviewCont___Ln50M\n{\n    position: relative;\n    display: flex;\n    background: #9999FF;\n}\n\n.AudioAssetPreview-m__backgroundScores___3v-9s\n{\n    background: #051933;\n}\n\n.AudioAssetPreview-m__soundEffects___Lofdj\n{\n    background: #330505;\n}\n\n.AudioAssetPreview-m__audioAssetPreviewInner___36vDm\n{\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}", ""]);
// Exports
exports.locals = {
	"audioAssetPreviewCont": "AudioAssetPreview-m__audioAssetPreviewCont___Ln50M",
	"backgroundScores": "AudioAssetPreview-m__backgroundScores___3v-9s",
	"soundEffects": "AudioAssetPreview-m__soundEffects___Lofdj",
	"audioAssetPreviewInner": "AudioAssetPreview-m__audioAssetPreviewInner___36vDm"
};
module.exports = exports;


/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(33));

var _VolumeMute = _interopRequireDefault(__webpack_require__(978));

var _VolumeUnmute = _interopRequireDefault(__webpack_require__(979));

var _SwfPlayerView = _interopRequireDefault(__webpack_require__(980));

var _ObjectsStore = __webpack_require__(102);

var _AnimatedAssetPreiewM = _interopRequireDefault(__webpack_require__(981));

var _Localizer = __webpack_require__(44);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class AnimatedAssetPreview extends _react.default.Component {
  constructor(props) {
    super(props);
    this._swfPlayerRef = void 0;

    this.onMuteClicked = e => {
      e.preventDefault();
      e.stopPropagation();
      this.mute(!this.state.muted);
    };

    const val = _ObjectsStore.defaultStore.getObject(props.asset.id + '_muted');

    this.state = {
      muted: val === undefined
    };
  }

  mute(mute) {
    const {
      id
    } = this.props.asset;
    this.setState({
      muted: mute
    });

    this._swfPlayerRef.mute(mute);

    if (mute) {
      _ObjectsStore.defaultStore.removeObject(id + '_muted');
    } else {
      _ObjectsStore.defaultStore.addObject(id + '_muted', false);
    }
  }
  /* eslint-disable quotes */


  renderPlayerControls() {
    if (this.props.asset.hasAudio) {
      let icon;
      let tooltip;

      if (this.state.muted) {
        tooltip = _Localizer.localizer.getString("$$$/AssetPanel/SwfPlayer/UnMute/tooltip=Unmute");
        icon = _react.default.createElement(_VolumeMute.default, {
          title: tooltip
        });
      } else {
        tooltip = _Localizer.localizer.getString("$$$/AssetPanel/SwfPlayer/Mute/tooltip=Mute");
        icon = _react.default.createElement(_VolumeUnmute.default, {
          title: tooltip
        });
      }

      return _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "tool",
        icon: icon,
        onMouseDown: this.onMuteClicked,
        title: tooltip
      });
    }

    return null;
  }

  render() {
    const _this$props = this.props,
          {
      className,
      asset
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "asset"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: `${className} ${_AnimatedAssetPreiewM.default.swfPlayerCont}`
    }, otherProps), _react.default.createElement(_SwfPlayerView.default, (0, _extends2.default)({
      ref: v => this._swfPlayerRef = v,
      customAttributes: {
        FilePath: asset.dynamicRendition(),
        MuteAudio: this.state.muted
      },
      className: 'ui-adapt'
    }, otherProps)), _react.default.createElement("div", {
      className: _AnimatedAssetPreiewM.default.swfPlayerControls
    }, this.renderPlayerControls()));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = AnimatedAssetPreview;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AnimatedAssetPreview, "AnimatedAssetPreview", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/preview/AnimatedAssetPreview.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolumeMute;

var _react = _interopRequireDefault(__webpack_require__(0));

var _CustomIcon = __webpack_require__(153);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function VolumeMute(props) {
  return _react.default.createElement(_CustomIcon.CustomIcon, props, _react.default.createElement("g", {
    "data-name": "ImportedIcons",
    id: "ImportedIcons-2"
  }, _react.default.createElement("path", {
    d: "M25,18a8.93645,8.93645,0,0,0-3,.52515V5.002a2.99842,2.99842,0,0,0-4.99316-2.24218l-.0669.05957L10.18213,10H5a3.00328,3.00328,0,0,0-3,3V23a3.00328,3.00328,0,0,0,3,3h5.18213l6.75781,7.18066.0669.05957A2.98983,2.98983,0,0,0,18.99414,34a2.91581,2.91581,0,0,0,.31848-.03223A8.9976,8.9976,0,1,0,25,18Z",
    opacity: "0.65"
  }), _react.default.createElement("path", {
    d: "M25,20a7,7,0,1,0,7,7A7,7,0,0,0,25,20Zm-5,7a4.973,4.973,0,0,1,.886-2.842l6.956,6.956A5,5,0,0,1,20,27Zm9.114,2.842-6.956-6.956a5,5,0,0,1,6.956,6.956Z",
    fill: "#fff",
    opacity: "0.8"
  }), _react.default.createElement("path", {
    d: "M16,27a8.99749,8.99749,0,0,1,4-7.47827V5.002a1,1,0,0,0-1.66437-.74743l-7.05145,7.49279A.99946.99946,0,0,1,10.61981,12H5a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1h5.61981a1,1,0,0,1,.66437.25256l5.13367,5.455A8.96417,8.96417,0,0,1,16,27Z",
    fill: "#fff",
    opacity: "0.8"
  })));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VolumeMute, "VolumeMute", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/VolumeMute.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolumeUnmute;

var _react = _interopRequireDefault(__webpack_require__(0));

var _CustomIcon = __webpack_require__(153);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function VolumeUnmute(props) {
  return _react.default.createElement(_CustomIcon.CustomIcon, props, _react.default.createElement("g", {
    "data-name": "i c o n s",
    id: "i_c_o_n_s"
  }, _react.default.createElement("path", {
    d: "M31.9707,6.96875A3.01587,3.01587,0,0,0,29.67578,5.9082a3.00158,3.00158,0,0,0-2.2915,4.92969c.09662.11231.16784.23267.25329.34839a2.94033,2.94033,0,0,0-2.21814-1.01245,3.00423,3.00423,0,0,0-2.39892,4.8125,4.95289,4.95289,0,0,1,.01465,6.00195,3.00491,3.00491,0,0,0,2.40869,4.80078,2.93869,2.93869,0,0,0,2.22967-1.02624c-.09027.12463-.167.25329-.2702.3739a2.96577,2.96577,0,0,0,.11328,3.96875l.07031.07422a2.96938,2.96938,0,0,0,2.11524.877,3.01158,3.01158,0,0,0,2.29834-1.06445A16.769,16.769,0,0,0,35.8,18,16.77548,16.77548,0,0,0,31.9707,6.96875Z",
    opacity: "0.65"
  }), _react.default.createElement("path", {
    d: "M26.04042,17.99962a6.936,6.936,0,0,1-1.40767,4.19216.98129.98129,0,0,0,.08672,1.28843l.016.016a.99137.99137,0,0,0,1.48642-.08987,8.95422,8.95422,0,0,0-.02641-10.85324.99115.99115,0,0,0-1.484-.087l-.01564.01564a.98238.98238,0,0,0-.0844,1.29259A6.94427,6.94427,0,0,1,26.04042,17.99962Z",
    fill: "#fff",
    opacity: "0.8"
  }), _react.default.createElement("path", {
    d: "M32.04042,17.99962a12.93661,12.93661,0,0,1-3.11586,8.43581.97229.97229,0,0,0,.06336,1.31658l.01412.01416a1.00264,1.00264,0,0,0,1.47436-.06868,14.98,14.98,0,0,0-.02659-19.42971.99913.99913,0,0,0-1.46872-.07138l-.01452.01454a.977.977,0,0,0-.06579,1.323A12.9392,12.9392,0,0,1,32.04042,17.99962Z",
    fill: "#fff",
    opacity: "0.8"
  })), _react.default.createElement("g", {
    "data-name": "ImportedIcons",
    id: "ImportedIcons-2"
  }, _react.default.createElement("path", {
    d: "M18.99414,34a2.98983,2.98983,0,0,1-1.9873-.75977l-.0669-.05957L10.18213,26H5a3.00328,3.00328,0,0,1-3-3V13a3.00328,3.00328,0,0,1,3-3h5.18213l6.75781-7.18066.0669-.05957A2.99842,2.99842,0,0,1,22,5.002v25.9961A3.00713,3.00713,0,0,1,18.99414,34Z",
    opacity: "0.65"
  }), _react.default.createElement("path", {
    d: "M5,12h5.6198a1,1,0,0,0,.66436-.25259l7.05148-7.49286A1,1,0,0,1,20,5.002V30.998a1,1,0,0,1-1.66436.74741l-7.05148-7.49286A1,1,0,0,0,10.6198,24H5a1,1,0,0,1-1-1V13A1,1,0,0,1,5,12Z",
    fill: "#fff",
    opacity: "0.8"
  })));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VolumeUnmute, "VolumeUnmute", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/VolumeUnmute.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwfPlayerView = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class SwfPlayerView extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this._viewRef = void 0;
  }

  componentDidMount() {
    //console.log('SwfPlayerView::componentDidMount');
    const {
      customAttributes
    } = this.props;

    this._viewRef.setAttribute('customAttributes', customAttributes);
  }

  mute(mute) {
    const {
      customAttributes
    } = this.props;
    customAttributes['MuteAudio'] = mute;

    this._viewRef.setAttribute('customAttributes', customAttributes);
  }

  render() {
    const _this$props = this.props,
          {
      ['customAttributes']: customAttributesIgnore,
      style
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["customAttributes", "style"]);

    const styles = _objectSpread({
      'display': 'block'
    }, style);

    return _react.default.createElement("object", (0, _extends2.default)({
      is: "swf-player-view",
      ref: v => this._viewRef = v,
      style: styles
    }, otherProps), this.props.children);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.SwfPlayerView = exports.default = SwfPlayerView;
SwfPlayerView.defaultProps = {
  customAttributes: {
    ScaleMode: 'default',
    MuteAudio: false
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwfPlayerView, "SwfPlayerView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/native/SwfPlayerView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(982);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n.AnimatedAssetPreiew-m__swfPlayerCont___3TNZ4\r\n{\r\n    position: relative;\r\n}\r\n\r\n.AnimatedAssetPreiew-m__swfPlayerControls___3EgD7 {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    z-index: 1;\r\n}", ""]);
// Exports
exports.locals = {
	"swfPlayerCont": "AnimatedAssetPreiew-m__swfPlayerCont___3TNZ4",
	"swfPlayerControls": "AnimatedAssetPreiew-m__swfPlayerControls___3EgD7"
};
module.exports = exports;


/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class StaticAssetPreview extends _react.default.Component {
  render() {
    const _this$props = this.props,
          {
      asset,
      renditionSize
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["asset", "renditionSize"]);
    return _react.default.createElement("img", (0, _extends2.default)({
      src: asset.staticRendition(renditionSize),
      alt: asset.name
    }, otherProps));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = StaticAssetPreview;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StaticAssetPreview, "StaticAssetPreview", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/preview/StaticAssetPreview.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(985);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n.AssetPreview-m__previewCont___3pKC2\r\n{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.AssetPreview-m__previewControls___hTNUB\r\n{\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    z-index: 1;\r\n}\r\n\r\n.AssetPreview-m__infopreviewControls___1ub2r\r\n{\r\n    position: absolute;\r\n    display: flex;\r\n    right: -7px;\r\n    top: -8px;\r\n    z-index: 1;\r\n}\r\n\r\n.AssetPreview-m__riggableMarkerCont___2r-EP\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n}", ""]);
// Exports
exports.locals = {
	"previewCont": "AssetPreview-m__previewCont___3pKC2",
	"previewControls": "AssetPreview-m__previewControls___hTNUB",
	"infopreviewControls": "AssetPreview-m__infopreviewControls___1ub2r",
	"riggableMarkerCont": "AssetPreview-m__riggableMarkerCont___2r-EP"
};
module.exports = exports;


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoButton;

var _react = _interopRequireDefault(__webpack_require__(0));

var _CustomInfoIcon = __webpack_require__(987);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function InfoButton(props) {
  return _react.default.createElement(_CustomInfoIcon.CustomInfoIcon, props, _react.default.createElement("path", {
    d: "M23,7A16,16,0,1,0,39,23,16,16,0,0,0,23,7Zm.127,4.355a3.323,3.323,0,0,1,3.49,3.151q.009.158,0,.317a3.264,3.264,0,0,1-2.984,3.517,3.225,3.225,0,0,1-.508,0,3.308,3.308,0,0,1-3.492-3.117,3.347,3.347,0,0,1,0-.4,3.328,3.328,0,0,1,3.18-3.468Q22.971,11.347,23.127,11.355ZM28,33a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V31a1,1,0,0,1,1-1h2V24H20a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1v9h1a1,1,0,0,1,1,1Z",
    fill: "var(--iconFill,#6E6E6E)",
    fillRule: "evenodd"
  }));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InfoButton, "InfoButton", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/InfoButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomInfoIcon = CustomInfoIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function CustomInfoIcon(props) {
  const {
    size = 'M',
    alt = '',
    className,
    viewBox = '0 0 45 45',
    children
  } = props,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["size", "alt", "className", "viewBox", "children"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    focusable: false,
    "aria-label": alt,
    "aria-hidden": alt ? null : true,
    role: 'img',
    viewBox: viewBox,
    className: `spectrum-Icon--size${size} ${className ? className : ''}`
  }, otherProps), children);
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomInfoIcon, "CustomInfoIcon", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/CustomIcon/CustomInfoIcon.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(989);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.selected-2px:after\n{\n    content: \"\";\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: calc(100%);\n    height: calc(100%);\n    left: 0px;\n    top: 0px;\n    border: 2px solid;\n    border-radius: 2px;\n    pointer-events: none;\n}\n\n/* ☹️ 1px shift in windows, bug in UXP */\n.uxp.windows .selected-2px:after\n{\n    width: calc(100% + 1px);\n    height: calc(100% + 1px);\n    left: -1px;\n    top: -1px;\n    border-radius: 0px;\n}\n/* BLUE-400 */\n.spectrum--darkest .selected-2px:after { border-color: rgb(20, 115, 230); }\n.spectrum--dark .selected-2px:after { border-color: rgb(38, 128, 235); }\n.spectrum--light .selected-2px:after { border-color: rgb(38, 128, 235);}\n.spectrum--lightest .selected-2px:after { border-color: rgb(55, 142, 240); }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(991);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".AssetsViewGrid-m__assetNameCont___Vg8Pu\n{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    max-height: 20px;\n    background: rgb(255, 255, 255, 0.8);\n    border-radius: 2px;\n    /* this is not working, probably a bug in UXP\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    */\n    pointer-events: none;\n}\n\n.spectrum--light .AssetsViewGrid-m__assetNameCont___Vg8Pu { background: rgb(255, 255, 255, 0.5); }\n\n.AssetsViewGrid-m__assetName___3Z_yO\n{\n    font-weight: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.spectrum--darkest .AssetsViewGrid-m__assetName___3Z_yO { color: rgb(30, 30, 30); }\n.spectrum--dark .AssetsViewGrid-m__assetName___3Z_yO { color: rgb(50, 50, 50); }\n.spectrum--light .AssetsViewGrid-m__assetName___3Z_yO { color: rgb(50, 50, 50); }\n.spectrum--lightest .AssetsViewGrid-m__assetName___3Z_yO { color: rgb(50, 50, 50); }", ""]);
// Exports
exports.locals = {
	"assetNameCont": "AssetsViewGrid-m__assetNameCont___Vg8Pu",
	"assetName": "AssetsViewGrid-m__assetName___3Z_yO"
};
module.exports = exports;


/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

class ContextMenu extends _react.default.Component {
  constructor(props) {
    super(props);
    this._menuRef = void 0;
  }

  showAt(x, y) {
    this._menuRef.popupAt(x, y);
  }

  onMenuItemClick(e, menuItem) {
    if (menuItem.action) {
      menuItem.action(e, menuItem);
    }
  }

  render() {
    const _this$props = this.props,
          {
      items,
      style
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["items", "style"]);

    if (items.length == 0) {
      return _react.default.createElement("menu", null);
    }

    const styles = _objectSpread({
      minWidth: '200px',
      width: '80%'
    }, style);

    return _react.default.createElement("menu", (0, _extends2.default)({
      type: "context",
      ref: v => this._menuRef = v,
      style: styles
    }, otherProps), items.map(menuItem => {
      return _react.default.createElement("menuitem", {
        key: menuItem.id,
        label: menuItem.title,
        disabled: menuItem.disabled,
        onClick: e => this.onMenuItemClick(e, menuItem)
      });
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.default = ContextMenu;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContextMenu, "ContextMenu", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/common/ContextMenu.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(994);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".noContentsBox\n{\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    width: 90%;\n    height: 160px;\n}\n\n.noContentsInner\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    width: 100%;\n    border: 2px solid;\n    border-radius: 8px;\n    text-align: center;\n    font-size: 16px;\n    font-style: italic;\n}\n\n.spectrum--darkest .noContentsInner { border-color: rgb(73, 73, 73); }\n.spectrum--dark .noContentsInner { border-color: rgb(90, 90, 90); }\n.spectrum--light .noContentsInner { border-color: rgb(202, 202, 202); }\n.spectrum--lightest .noContentsInner { border-color: rgb(211, 211, 211); }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRedux = __webpack_require__(123);

var _reactHotkeys = __webpack_require__(356);

var _Button = _interopRequireDefault(__webpack_require__(33));

var _ArrowDownSmall = _interopRequireDefault(__webpack_require__(357));

var _ArrowUpSmall = _interopRequireDefault(__webpack_require__(358));

var _Dragable = _interopRequireDefault(__webpack_require__(378));

var _AssetPreview = _interopRequireDefault(__webpack_require__(379));

var _uxp = __webpack_require__(48);

var _applications = _interopRequireDefault(__webpack_require__(43));

var _reactVirtualized = __webpack_require__(405);

var _AutoSizer = _interopRequireDefault(__webpack_require__(359));

var _Selectable = _interopRequireDefault(__webpack_require__(384));

var _SelectionContext = _interopRequireDefault(__webpack_require__(385));

var _AssetsViewListM = _interopRequireDefault(__webpack_require__(996));

var _ObjectsStore = __webpack_require__(102);

var _AssetsStoreMgrActions = __webpack_require__(138);

var _AssetsContextMenu = _interopRequireDefault(__webpack_require__(386));

var _Constants = __webpack_require__(103);

var _NodeInfo = __webpack_require__(189);

var _AssetsEmptyView = _interopRequireDefault(__webpack_require__(387));

var _IAssetModel = __webpack_require__(113);

var _Localizer = __webpack_require__(44);

var _types = __webpack_require__(219);

var _FlexView = __webpack_require__(115);

var _PIPLogger = __webpack_require__(104);

var _dec, _class, _class2, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* eslint-disable quotes */
class ListItemView extends _react.default.Component {
  constructor(props) {
    super(props);
    this._thumbRef = void 0;

    this.onNameEditBlur = e => {
      const {
        editMode
      } = this.props;

      if (editMode) {
        this.onNameCommit(e);
      }
    };

    this.onNameEditKeyUp = e => {
      if (e.keyCode === _Constants.KeyCodesE.ENTER) {
        this.onNameCommit(e);
      }
    };

    this.onNameEditChange = e => {
      // adhiman: can be removed once maxLength in implemented in UXP-DVA adapters
      if (e.target.value.length <= _Constants.MAX_NAME_LENGTH) {
        this.setState({
          assetName: e.target.value
        });
      }
    };

    this.onNameDoubleClick = _e => {
      console.log('enable name edit on dbl click');
      const {
        onRenameTrigger,
        item
      } = this.props;

      if (onRenameTrigger) {
        onRenameTrigger(item);
      }

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_RENAME,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_DOUBLE_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, item);
    };

    this.onSelectionChange = (e, selected) => {
      const {
        item,
        selectionContext
      } = this.props;

      if (selected) {
        selectionContext.addSelected(item.id);
      }
    };

    this.state = {
      assetName: props.item.name,
      pointerIn: false
    };
  }

  onNameCommit(e) {
    const {
      onRenameCommit,
      item
    } = this.props;
    const {
      assetName
    } = this.state;

    if (onRenameCommit) {
      onRenameCommit(item, assetName);
    }

    if (e.target) {
      e.target.blur();
    }
  }

  render() {
    const _this$props = this.props,
          {
      item,
      editMode,
      ['onRenameTrigger']: onRenameTriggerIgnore,
      ['onRenameCommit']: onRenameCommitIgnore,
      selectionContext
    } = _this$props,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["item", "editMode", "onRenameTrigger", "onRenameCommit", "selectionContext"]);
    const {
      assetName
    } = this.state;
    const tooltip = item.exportMode !== _IAssetModel.ExportModeE.NONE ? `(${ListItemView.sToolTips[item.exportMode]}) ${item.name}` : item.name;
    let name;

    if (editMode) {
      name = _react.default.createElement("div", {
        className: _AssetsViewListM.default.assetName
      }, _react.default.createElement("input", {
        placeholder: _Localizer.localizer.getString("$$$/AssetsPanel/AssetName/placeholder=Asset name..."),
        value: assetName,
        autoFocus: true,
        onChange: this.onNameEditChange,
        onKeyUp: this.onNameEditKeyUp,
        onBlur: this.onNameEditBlur,
        style: {
          width: '100%'
        },
        maxLength: _Constants.MAX_NAME_LENGTH
      }));
    } else {
      name = _react.default.createElement("div", {
        title: tooltip,
        className: _AssetsViewListM.default.assetName
      }, item.name);
    }

    const styles = {
      position: 'relative'
    };

    const finalProps = _objectSpread({}, otherProps, {
      style: _objectSpread({}, styles),
      title: tooltip
    });

    const thumbnailsStyle = {
      width: '40px',
      height: '40px'
    };
    return _react.default.createElement(_Selectable.default, (0, _extends2.default)({
      selectionContext: selectionContext,
      dataSelectionId: item.id
    }, finalProps), _react.default.createElement("div", {
      className: _AssetsViewListM.default.assetItem
    }, _react.default.createElement("div", {
      className: _AssetsViewListM.default.assetItemThumb
    }, _react.default.createElement(_AssetPreview.default, {
      title: tooltip,
      asset: item,
      renditionSize: _uxp.RenditionSizeE.SQUARE,
      style: thumbnailsStyle,
      className: 'ui-rounded-2px'
    })), _react.default.createElement("div", {
      className: _AssetsViewListM.default.assetItemBody,
      onDoubleClick: this.onNameDoubleClick
    }, name)));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

ListItemView._lastHoveredGridItem = null;
ListItemView.sToolTips = {
  [_IAssetModel.ExportModeE.NONE]: '',
  [_IAssetModel.ExportModeE.SYMBOL]: _Localizer.localizer.getString("$$$/AssetsPanel/Asset/ExportedAs/Symbol/tooltip=Symbol"),
  [_IAssetModel.ExportModeE.SCENE]: _Localizer.localizer.getString("$$$/AssetsPanel/Asset/ExportedAs/Scene/tooltip=Scene")
};

const mapStateToProps = (state, ownProps) => {
  const nodeInfo = new _NodeInfo.NodeInfo({
    storeId: ownProps.storeId,
    categoryId: ownProps.category.id
  });
  let newAddedAssets = [];

  if (state.assetsStores.newAddedMap.has(nodeInfo.slug)) {
    newAddedAssets = [...state.assetsStores.newAddedMap.get(nodeInfo.slug)];
  }

  return {
    newAddedAssets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearNewAddedAssets: ownProps => {
      const nodeInfo = new _NodeInfo.NodeInfo({
        storeId: ownProps.storeId,
        categoryId: ownProps.category.id
      });
      dispatch((0, _AssetsStoreMgrActions.createClearNewAssetsAddedAlertAction)(nodeInfo));
    }
  };
};

let AssetsViewList = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = class AssetsViewList extends _react.default.Component {
  constructor(props) {
    super(props);
    this._listRef = void 0;
    this._scrollEdge = _types.ScrollEdgeE.NONE;
    this._scrolledRowIndex = 0;
    this._menuRef = void 0;
    this._renameAssetId = null;
    this._scrollToRowIndex = 0;
    this._selectionContext = void 0;

    this.onDragedOut = (e, comp) => {
      const key = comp.props.itemId;
      console.log('Asset draggedout : ', key);

      _applications.default.getAssetsEndPoint().assetsDraggedToStage(JSON.stringify([key]));
    };

    this.onDeletePressed = () => {
      const selectedList = this._selectionContext.getSelectedList();

      console.log('onDeletePressed : ', selectedList);

      if (selectedList.length > 0) {
        const request = {
          storeId: this.props.storeId,
          assets: selectedList
        };

        _applications.default.getAssetsEndPoint().deleteAssets(request).then(response => {
          if (response.status) {
            this._selectionContext.reset();
          }
        });
      }
    };

    this.onContextMenuDelete = (_e, asset) => {
      const request = {
        storeId: this.props.storeId,
        assets: [asset.id]
      };

      _applications.default.getAssetsEndPoint().deleteAssets(request);

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_DELETE,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_RIGHT_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, asset);
    };

    this.onContextMenuRename = (_e, asset) => {
      this.onRenameTrigger(asset);
      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_RENAME,
        eventName: _PIPLogger.PIP_STR.ASSETS_PANEL_USAGE,
        metadata: {
          [_PIPLogger.PIP_STR.ASSET_ADDITIONAL_DETAILS]: _PIPLogger.PIP_STR.EVENT_SOURCE + _PIPLogger.PIP_STR.ASSET_RIGHT_CLICK
        }
      };

      _PIPLogger.pipLogger.logPIPEventWithAssetInfo(eventData, asset);
    };

    this.onRenameTrigger = asset => {
      this._renameAssetId = asset.id;
      this.forceUpdate();
    };

    this.onRenameCommit = (item, newName) => {
      const sanitizedName = newName.trim();

      if (sanitizedName === '') {
        this._renameAssetId = null;
        this.forceUpdate();
        return;
      }

      const request = {
        storeId: this.props.storeId,
        assetId: this._renameAssetId,
        newName: sanitizedName
      };
      const This = this;

      _applications.default.getAssetsEndPoint().renameAssets(request).then(response => {
        if (response.status) {
          const {
            savedName
          } = response.data;

          if (savedName) {
            item.setName(savedName);
          }

          This._renameAssetId = null;
          This.forceUpdate();
        }
      });
    };

    this.onContextMenu = (e, asset) => {
      console.log('onContextMenu');

      this._menuRef.showAt(asset, e.pageX, e.pageY);
    };

    this.onSelectionChange = () => {
      this.refreshView();
      const selected = this._selectionContext.getSelectedList().length > 0;
      _applications.default.getAssetsEndPoint().assetsSelected = selected;
      this.saveSelection();
    };

    this.onScroll = params => {
      const {
        clientHeight,
        scrollHeight,
        scrollTop
      } = params;
      this._scrolledRowIndex = Math.floor(scrollTop / 50);
      let scrollEdge = _types.ScrollEdgeE.NONE;

      if (scrollTop == 0) {
        scrollEdge |= _types.ScrollEdgeE.TOP;
      } else if (scrollTop + clientHeight >= scrollHeight) {
        scrollEdge |= _types.ScrollEdgeE.BOTTOM;
      }

      if (scrollEdge !== _types.ScrollEdgeE.NONE) {
        setTimeout(() => {
          this.forceUpdate();
        }, 150);
      }

      this._scrollEdge = scrollEdge;
    };

    this.onScrollUpClicked = () => {
      this._listRef.scrollToRow(0);

      this.forceUpdate();
      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_SCROLL,
        eventName: _PIPLogger.PIP_STR.ASSET_SCROLL_UP,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(eventData);
    };

    this.onScrollDownClicked = () => {
      const newRowIndex = this._scrolledRowIndex + 8;

      this._listRef.scrollToPosition(newRowIndex * 50);

      const eventData = {
        category: _PIPLogger.PIP_STR.ASSET_PANEL,
        subCategory: _PIPLogger.PIP_STR.ASSET_SCROLL,
        eventName: _PIPLogger.PIP_STR.ASSET_SCROLL_SHOW_NEXT,
        condition: 'logOnce'
      };

      _PIPLogger.pipLogger.logPIPEvent(eventData);
    };

    this.rowRenderer = ({
      index,
      key,
      style
    }) => {
      const item = this.props.assets[index];

      const styles = _objectSpread({}, style, {
        padding: '1px 0px'
      });

      return _react.default.createElement("div", {
        key: key,
        style: styles
      }, _react.default.createElement(_Dragable.default, {
        key: item.id,
        itemId: item.id,
        onDragedOut_: this.onDragedOut,
        onContextMenu: e => this.onContextMenu(e, item)
      }, _react.default.createElement(ListItemView, {
        item: item,
        selectionContext: this._selectionContext,
        editMode: this._renameAssetId === item.id,
        onRenameTrigger: this.onRenameTrigger,
        onRenameCommit: this.onRenameCommit
      })));
    };

    this._noRowsRenderer = () => {
      return _react.default.createElement(_AssetsEmptyView.default, null);
    };

    this.state = {
      assets: props.assets
    };
    this._selectionContext = new _SelectionContext.default(true);

    _applications.default.getAssetsEndPoint().addHostCommandListener('delete', this.onDeletePressed);

    this.applySelection();

    if (_ObjectsStore.defaultStore.getObject('activeCategory') !== this.props.category.id) {
      _ObjectsStore.defaultStore.addObject('activeCategory', this.props.category.id);

      this._selectionContext.reset();
    }
  }

  static getDerivedStateFromProps(newProps, prevState) {
    //console.log(prevState, newProps);
    if (!(newProps.assets === prevState.assets || newProps.assets.length === prevState.assets.length)) {
      return {
        assets: newProps.assets
      };
    } else if (newProps.newAddedAssets.length > 0) {
      return prevState;
    }

    return null;
  }

  componentDidMount() {
    this._selectionContext.addSelectionChangeListener(this.onSelectionChange);

    this.checkIfNewAssetsAdded();
  }

  componentDidUpdate() {
    this._scrollToRowIndex = -1;
    this.checkIfNewAssetsAdded();
  }

  componentWillUnmount() {
    //console.log('AssetsViewList::componentWillUnmount');
    this._selectionContext.removeSelectionChangeListener(this.onSelectionChange);

    _applications.default.getAssetsEndPoint().removeHostCommandListener('delete', this.onDeletePressed);
  }

  computeScroll() {
    this._scrollToRowIndex = 0;

    const list = this._selectionContext.getSelectedList();

    if (list.length > 0) {
      const index = this.props.assets.findIndex(asset => asset.id === list[0]);
      this._scrollToRowIndex = index; //console.log('scroll list row', this._scrollToRowIndex);
    }
  }

  checkIfNewAssetsAdded() {
    if (this.props.newAddedAssets.length > 0) {
      // new assets added, apply the new selection and clear the alert
      console.log('apply selection and clear the alert');
      this.applySelection(this.props.newAddedAssets);
      this.props.clearNewAddedAssets(this.props);
    }
  }

  getSelectionKey() {
    //const {storeId, category} = this.props;
    //return `selection_${storeId}-${category.id}`;
    //return this.props.category.id;
    return 'activeSelection';
  }

  saveSelection() {
    const key = this.getSelectionKey();

    _ObjectsStore.defaultStore.addObject(key, this._selectionContext.getSelectedList());
  }

  applySelection(list) {
    if (list === undefined) {
      const key = this.getSelectionKey();
      list = _ObjectsStore.defaultStore.getTypedObject(key, Array);
    }

    if (list && list.length > 0) {
      this._selectionContext.reset();

      this._selectionContext.addSelected(list[0]);

      this.computeScroll();
    } else {
      _applications.default.getAssetsEndPoint().assetsSelected = false;
    }
  }

  refreshView() {
    this.forceUpdate(); //this.setState(this.state);
  }

  renderScrollButtons() {
    if (this.props.assets.length <= 8) {
      return null;
    }

    let button;

    if (this._scrollEdge & _types.ScrollEdgeE.BOTTOM) {
      button = _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "action",
        onClick: this.onScrollUpClicked
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, _Localizer.localizer.getString("$$$/AssetsPanel/Top/label=Top"), _react.default.createElement("div", {
        style: {
          width: '5px'
        }
      }), _react.default.createElement(_ArrowUpSmall.default, null)));
    } else {
      button = _react.default.createElement(_Button.default, {
        quiet: true,
        variant: "action",
        onClick: this.onScrollDownClicked
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, _Localizer.localizer.getString("$$$/AssetsPanel/ShowNext/label=Show next"), _react.default.createElement("div", {
        style: {
          width: '5px'
        }
      }), _react.default.createElement(_ArrowDownSmall.default, null)));
    }

    return _react.default.createElement(_FlexView.FlexView, {
      style: {
        marginTop: '8px',
        justifyContent: 'flex-end'
      }
    }, _react.default.createElement("div", {
      style: {
        marginLeft: 'auto'
      }
    }, button));
  }

  render() {
    const listRowHeight = 48 + 2;
    const overscanRowCount = 10;
    const contStyles = {
      width: 'calc(100% + 15px)',
      height: '400px',
      userSelect: 'none'
    };
    const listStyle = {
      width: '100%',
      height: '100%',
      userSelect: 'none'
    };
    const keyMap = {
      DELETE_NODE: ['del', 'backspace']
    };
    const handlers = {
      DELETE_NODE: this.onDeletePressed
    };
    console.log('ListView:: scrollToRow', this._scrollToRowIndex);
    return _react.default.createElement(_reactHotkeys.HotKeys, {
      keyMap: keyMap,
      handlers: handlers
    }, _react.default.createElement(_AutoSizer.default, {
      style: contStyles
    }, ({
      width,
      height
    }) => _react.default.createElement(_reactVirtualized.List, {
      ref: v => this._listRef = v,
      className: "List",
      height: height,
      overscanRowCount: overscanRowCount,
      noRowsRenderer: this._noRowsRenderer,
      rowCount: this.props.assets.length,
      rowHeight: listRowHeight,
      rowRenderer: this.rowRenderer,
      width: width,
      style: listStyle,
      scrollToIndex: this._scrollToRowIndex,
      scrollToAlignment: 'center',
      onScroll: this.onScroll
    })), this.renderScrollButtons(), _react.default.createElement(_AssetsContextMenu.default, {
      ref: v => this._menuRef = v,
      onRenameClick: this.onContextMenuRename,
      onDeleteClick: this.onContextMenuDelete
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}, _class2.defaultProps = {
  selection: [],
  removeSelection: () => {}
}, _temp)) || _class);
exports.default = AssetsViewList;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListItemView, "ListItemView", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewList.tsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewList.tsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewList.tsx");
  reactHotLoader.register(AssetsViewList, "AssetsViewList", "/Users/admin/Jenkins/workspace/ZXPBuilds/2023/AssetsPanelZXP/AssetsPanel/src/components/AssetsViewList.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(997);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".AssetsViewList-m__assetItem___2W1QK\n{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n    border-radius: 2px;\n}\n\n.uxp.windows .AssetsViewList-m__assetItem___2W1QK\n{\n    border-radius: 0px;\n}\n\n.spectrum--darkest .AssetsViewList-m__assetItem___2W1QK{  background-color: rgb(57, 57, 57); }\n.spectrum--dark .AssetsViewList-m__assetItem___2W1QK { background-color: rgb(74, 74, 74); }\n.spectrum--light .AssetsViewList-m__assetItem___2W1QK { background-color: rgb(225, 225, 225); }\n.spectrum--lightest .AssetsViewList-m__assetItem___2W1QK { background-color: rgb(234, 234, 234); }\n\n.AssetsViewList-m__assetItemThumb___1meKa\n{\n    display: flex;\n    flex-shrink: 0;\n    width: 40px;\n    height: 100%;\n    background: #EFEFEF;\n    border-radius: 2px;\n}\n\n.uxp.windows .AssetsViewList-m__assetItemThumb___1meKa\n{\n    border-radius: 0px;\n}\n\n.AssetsViewList-m__assetItemBody___26SFp\n{\n    margin-left: 12px;\n}\n\n.AssetsViewList-m__assetName___3NGEz\n{\n    font-weight: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.spectrum--darkest .AssetsViewList-m__assetName___3NGEz { color: rgb(200, 200, 200); }\n.spectrum--dark .AssetsViewList-m__assetName___3NGEz { color: rgb(227, 227, 227); }\n.spectrum--light .AssetsViewList-m__assetName___3NGEz { color: rgb(75, 75, 75); }\n.spectrum--lightest .AssetsViewList-m__assetName___3NGEz { color: rgb(80, 80, 80); }\n", ""]);
// Exports
exports.locals = {
	"assetItem": "AssetsViewList-m__assetItem___2W1QK",
	"assetItemThumb": "AssetsViewList-m__assetItemThumb___1meKa",
	"assetItemBody": "AssetsViewList-m__assetItemBody___26SFp",
	"assetName": "AssetsViewList-m__assetName___3NGEz"
};
module.exports = exports;


/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(999);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".betaText\n{\n    font-weight: normal;\n    font-style: italic;\n    margin-left: 4px;\n}\n\n/* GRAY 700 */\n.spectrum--darkest .betaText { color: rgb(162, 162, 162); }\n.spectrum--dark .betaText { color: rgb(185, 185, 185); }\n.spectrum--light .betaText { color: rgb(110, 110, 110); }\n.spectrum--lightest .betaText { color: rgb(116, 116, 116); }", ""]);
// Exports
module.exports = exports;


/***/ })

/******/ });
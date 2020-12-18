"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _icons = require("@ant-design/icons");

var _index = _interopRequireDefault(require("../views/dashboard/index"));

var _index2 = _interopRequireDefault(require("../views/H5/index"));

var _index3 = _interopRequireDefault(require("../views/drag/index"));

var _index4 = _interopRequireDefault(require("../views/charts/index"));

var _config = _interopRequireDefault(require("../views/app/config"));

var _special = _interopRequireDefault(require("../views/app/special"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 语义化
var menuList = [{
  title: '首页',
  key: '/dashboard',
  icon: _icons.PieChartOutlined,
  component: _index["default"]
}, {
  title: 'h5',
  key: '/h5',
  icon: _icons.PicRightOutlined,
  component: _index2["default"]
}, {
  title: 'UI组件',
  key: '/ui',
  icon: _icons.AppstoreOutlined,
  children: [// 子菜单列表
  {
    title: '应用管理',
    key: '/config',
    component: _config["default"]
  }, {
    title: '专题管理',
    key: '/special',
    component: _special["default"]
  }]
}, {
  title: '拖拽',
  key: '/drag',
  icon: _icons.DragOutlined,
  component: _index3["default"]
}, {
  title: 'App配置管理',
  key: '/app',
  icon: _icons.AppstoreOutlined,
  children: [// 子菜单列表
  {
    title: '应用管理',
    key: '/config',
    component: _config["default"]
  }, {
    title: '专题管理',
    key: '/special',
    component: _special["default"]
  }]
}, {
  title: '语义化布局',
  key: '/semantic',
  icon: _icons.LineChartOutlined,
  component: _index4["default"]
}, {
  title: '图标',
  key: '/charts',
  icon: _icons.PieChartOutlined,
  component: _index4["default"]
}, {
  title: '数据管理',
  key: '/database',
  icon: _icons.MailOutlined,
  children: [// 子菜单列表
  {
    title: '商铺管理',
    key: '/shop',
    component: _index4["default"]
  }, {
    title: '食品管理',
    key: '/food',
    component: _index4["default"]
  }]
}, {
  title: '表格',
  key: '/table',
  icon: _icons.TableOutlined,
  component: _index4["default"]
}];
var _default = menuList;
exports["default"] = _default;
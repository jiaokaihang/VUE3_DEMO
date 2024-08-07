export default function children() {
  let subchildren = [
    {
      title: "首页",
      path: "/content/home",
      icon: "HomeFilled",
    },
    {
      title: "基础数据",
      path: "/basicdata",
      icon: "Checked",
      children: [
        {
          title: "表格封装",
          path: "/basicdata/processcenter",
          icon: "Tickets",
          children: [
            {
              title: "表格封装组件",
              path: "/basicdata/processcenter/table",
              icon: "Memo",
              name: "table",
            },
            {
              title: "表格排序组件",
              path: "/basicdata/processcenter/sortable",
              icon: "Collection",
              name: "sortable",
            },
          ],
        },
        {
          title: "地图信息",
          path: "/basicdata/maps",
          icon: "Location",
          children: [
            {
              title: "2D地图",
              path: "/basicdata/maps/map",
              icon: "LocationInformation",
              name: "pr",
            },
            {
              title: "3D地图",
              path: "/basicdata/maps/3Dmap",
              icon: "MapLocation",
              name: "pr",
            },
          ],
        },
        {
          title: "表单封装",
          path: "/basicdata/productpara",
        },
        {
          title: "上传组件",
          path: "/basicdata/upload",
          children: [
            {
              title: "上传组件",
              path: "/basicdata/upload/uploadImage",
              name: "uploadImage",
            },
            {
              title: "文件分片上传",
              path: "/basicdata/upload/uploadFile",
              name: "uploadImage",
            },
          ],
        },
        {
          title: "水印组件",
          path: "/basicdata/watermark",
        },
        {
          title: "日历组件",
          path: "/basicdata/calendar",
        },
        {
          title: "按钮组件",
          path: "/basicdata/buttonview",
        },
        {
          title: "pinia示例",
          path: "/basicdata/piniaShili",
        },
        {
          title: "单选按钮示例",
          path: "/basicdata/radioDemo",
        },
        {
          title: "弹幕示例",
          path: "/basicdata/danmu",
        },
        {
          title: "上传身份示例",
          path: "/basicdata/client",
        },
        {
          title: "Tabs示例",
          path: "/basicdata/Tabs",
        },
        {
          title: "文本复制示例",
          path: "/basicdata/inputCopy",
        },
        {
          title: "二维码示例",
          path: "/basicdata/qrcode",
        },
        {
          title: "步骤条示例",
          path: "/basicdata/setups",
        },
        {
          title: "翻译示例",
          path: "/basicdata/fanyi",
        },
        {
          title: "便携小空调示例",
          path: "/basicdata/kongtiao",
        },
        {
          title: "高德地图-非线图",
          path: "/basicdata/gaode",
        },
        {
          title: "高德地图-热力图",
          path: "/basicdata/gaodeReli",
        },
        {
          title: "高德地图-线图层",
          path: "/basicdata/gaodexian",
        },
        {
          title: "高德地图-脉冲线层",
          path: "/basicdata/gaodemaichongxian",
        },
        {
           title: "高德地图-网格热力层",
           path: "/basicdata/gaodewanggeReli"
        }
      ],
    },
    {
      title: "系统管理",
      path: "/netWork",
      icon: "Share",
      children: [
        {
          title: "用户管理",
          path: "/network/user",
        },

        {
          title: "角色管理",
          path: "/netWork/juese",
        },
        {
          title: "菜单管理",
          path: "/netWork/menu",
        },
        {
          title: "部门管理",
          path: "/netWork/bumen",
        },
        {
          title: "岗位管理",
          path: "/netWork/gangwei",
        },
      ],
    },
    {
      title: "其他设置",
      path: "/fangzhen",
      icon: "Menu",
      children: [
        {
          title: "市趟网",
          path: "/fangzhen/fenwangfangzhen/shanghang",
        },
        {
          title: "处理中心",
          path: "/fangzhen/fenwangfangzhen/chulizhongxin",
        },
        {
          title: "省际/省内运输",
          path: "/fangzhen/fenwangfangzhen/shengjiyunshu",
        },
      ],
    },
    {
      title: "账号管理",
      path: "/account",
      icon: "Avatar",
      children: [
        {
          title: "账号管理",
          path: "/account/manageement",
        },
      ],
    },
  ];
  return subchildren;
}

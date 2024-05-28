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
            icon: "HelpFilled",
            children: [
                {
                    title: "表格封装",
                    path: "/basicdata/processcenter",
                    children:[
                        {
                            title:"pr",
                            path: "/basicdata/processcenter/pr",
                            name:"pr"
                        },
                        {
                            title:"java",
                            path: "/basicdata/processcenter/java",
                            name:"java"
                        }
                    ]
                },

                {
                    title: "表单封装",
                    path: "/basicdata/productpara",
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


            ],
        },
    ];
    return subchildren;
}

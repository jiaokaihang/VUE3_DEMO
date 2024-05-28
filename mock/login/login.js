import Mock from "mockjs";

function createUserList() {
    return [
        {
            userId: 1,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '123456',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '123456',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}

// export default [
//     // 用户登录接口
//     {
//         url: '/get-user-login', //请求地址
//         method: 'post', //请求方式
//         response: ({ body }) => {
//             //获取请求体携带过来的用户名与密码
//             const { username, password } = body
//             //调用获取用户信息函数,用于判断是否有此用户
//             const checkUser = createUserList().find(
//                 (item) => item.username === username && item.password === password,
//             )
//             //没有用户返回失败信息
//             if (!checkUser) {
//                 return { code: 201, data: { message: '账号或者密码不正确' } }
//             }
//             //如果有返回成功信息
//             const { token } = checkUser
//             return { code: 200, data: { token } }
//         },
//     }
//     ]

Mock.mock(
    new RegExp('^/get-user-login$', ),

    'post',
    ({req})=>{
        console.log(req)
        let { username, password } = req
        // 调用获取用户信息函数,用于判断是否有此用户
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password,
        )
        // 没有用户返回失败信息
        if (!checkUser) {
            return { code: 201, data: { message: '账号或者密码不正确' } }
        }
        // 如果有返回成功信息
        const { token } = checkUser
        return { code: 200, data: { token } }
    }
)

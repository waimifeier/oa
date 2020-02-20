export default [
    {
        id:1,
        "name":"办公",
        "children":[
            {
                "id":15,
                "name":"文件管理",
                "icon":"mdi-folder-open",
                "link":"/oa/file"
            },

            {
                "id":16,
                "name":"通讯录",
                "icon":"mdi-account-box",
                "link":"/oa/mail"
            },
            {
                "id":12,
                "name":"工单",
                "icon":"mdi-android-messages",
                "children":[
                    {
                        "id":13,
                        "name":"我的工单",
                        "icon":"mdi-chef-hat",
                        "link":"/oa/order"
                    },
                    {
                        "id":14,
                        "name":"流程设计",
                        "icon":"mdi-feather",
                        "link":"/oa/design"
                    },
                ]
            },
        ]
    },
    {
        id:32,
        "name":"系统管理",
        "children":[
            {
                "id":91,
                "name":"系统配置",
                "icon":"mdi-settings",
                "link":"/sys/setting"
            },
            {
                "id":9,
                "name":"菜单配置",
                "icon":"mdi-file-document-box-outline",
                "link":"/sys/menu"
            },
            {
                "id":10,
                "name":"消息中心",
                "icon":"mdi-email-edit-outline",
                "link":"/sys/message"
            },

            {
                "id":11,
                "name":"字典配置",
                "icon":"mdi-book-open-page-variant",
                "link":"/sys/dictionary"
            },
            {
                "id":5,
                "name":"账号管理",
                "icon":"mdi-account-tie",
                "children":[
                    {
                        "id":6,
                        "name":"账号列表",
                        "icon":"mdi-account-tie",
                        "link":"/sys/account"
                    },
                    {
                        "id":7,
                        "name":"角色管理",
                        "icon":"mdi-incognito",
                        "link":"/sys/roles"
                    },
                    {
                        "id":8,
                        "name":"部门管理",
                        "icon":"mdi-lan",
                        "link":"/sys/department"
                    },
                ]
            },


        ]
    },
]

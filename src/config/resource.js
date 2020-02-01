export default [
    {
        "subheader":"办公",
        "list":[
            {
                "id":15,
                "title":"文件管理",
                "icon":"mdi-folder-open",
                "link":"/oa/file"
            },

            {
                "id":16,
                "title":"通讯录",
                "icon":"mdi-account-box",
                "link":"/oa/mail"
            },
            {
                "id":12,
                "title":"工单",
                "icon":"mdi-android-messages",
                "children":[
                    {
                        "id":13,
                        "title":"我的工单",
                        "icon":"mdi-sign-text",
                        "link":"/oa/order"
                    },
                    {
                        "id":14,
                        "title":"流程设计",
                        "icon":"mdi-sign-text",
                        "link":"/oa/design"
                    },
                ]
            },
        ]
    },
    {
        "subheader":"系统管理",
        "list":[
            {
                "id":91,
                "title":"系统配置",
                "icon":"mdi-settings",
                "link":"/sys/setting"
            },
            {
                "id":9,
                "title":"菜单配置",
                "icon":"mdi-file-document-box-outline",
                "link":"/sys/menu"
            },
            {
                "id":10,
                "title":"消息中心",
                "icon":"mdi-email-edit-outline",
                "link":"/sys/message"
            },

            {
                "id":11,
                "title":"字典配置",
                "icon":"mdi-book-open-page-variant",
                "link":"/sys/dictionary"
            },
            {
                "id":5,
                "title":"账号管理",
                "icon":"mdi-account-tie",
                "children":[
                    {
                        "id":6,
                        "title":"账号列表",
                        "icon":"mdi-sign-text",
                        "link":"/sys/account"
                    },
                    {
                        "id":7,
                        "title":"角色管理",
                        "icon":"mdi-sign-text",
                        "link":"/sys/roles"
                    },
                    {
                        "id":8,
                        "title":"部门管理",
                        "icon":"mdi-sign-text",
                        "link":"/sys/department"
                    },
                ]
            },


        ]
    },
]

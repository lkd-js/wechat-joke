import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useChatListStore = defineStore('chatList', {
    state: () => ({
        isBtnShow: false,
        isPicShow: false,
        isBlurShow: false,
        isDelShow: false,
        canTimeChange: false,
        showRole: 'left',
        userName: "钕1呺",
        listOfChat: [
            {
                user: "time",
                msg: "2011年1月21日  9:49",
                none: false
            },
            {
                user: "left",
                msg: "您好",
                none: false
            },
            {
                user: "right",
                msg: "油锕飕庇u锑梻",
                none: false
            },
            {
                user: "time",
                msg: "2022年12月23日  00:49",
                none: false
            },
            {
                user: "right",
                msg: "再见",
                none: false
            }
        ],
        chatValue: "",
        chatUser: 'right',
        chatImg: ['https://n.sinaimg.cn/sinakd10112/520/w1080h1040/20210908/4c7c-db1fcdc0fdcdb1023f870472fcc5a4c0.jpg', 'https://p1.itc.cn/q_70/images03/20210817/1203acff86d74d7e8cd644d05d3e5525.jpeg'],
        imgList: ['https://n.sinaimg.cn/sinakd10112/520/w1080h1040/20210908/4c7c-db1fcdc0fdcdb1023f870472fcc5a4c0.jpg'],
        chatTime: 1674784591000,
        // Date.parse(new Date())
        chatTimeValue: ['2023/1/27', '10:02:07']
        // toLocaleDateString(),  new Date().toLocaleTimeString()
    }),
    getters: {
        timeValue: (state) => {
            const date = state.chatTimeValue[0]
            const time = state.chatTimeValue[1]
            const dateList = date.split("/").map(Number)
            let dateStr = ''
            if (dateList[0] < 2023) {
                dateStr += `${dateList[0]}年`
                dateStr += `${dateList[1]}月`
                dateStr += `${dateList[2]}日`
            } else if (dateList[2] < 20) {
                dateStr += `${dateList[1]}月`
                dateStr += `${dateList[2]}日`
            }
            const timeStr = time.substring(0, 5)
            return dateStr + '  ' + timeStr
        },
        nowUserImg: (state) => {
            const num = state.chatUser === 'left' ? 0 : 1;
            return state.chatImg[num]
        }
    },
    actions: {
        updateUser() {
            this.chatUser = this.chatUser === 'left' ? 'right' : 'left'
        },
        updateImgList() {
            const checkRole = (chatObj: { user: string; msg: string; imgUrl?: undefined } | { user: string; msg: string; imgUrl: string }, l: string, r: string) => {
                if (chatObj.user === 'time') {
                    return chatObj
                } else if (chatObj.user === 'left') {
                    chatObj.imgUrl = l
                    return chatObj
                } else if (chatObj.user === 'right') {
                    chatObj.imgUrl = r
                    return chatObj
                } else {
                    throw Error('无法确定聊天列表类型！！！')
                }
            }
            this.listOfChat.map(item => checkRole(item, this.chatImg[0], this.chatImg[1]))
        },
        updateTime(dateSet?: any, timeSet?: any) {
            const date = dateSet ? dateSet : new Date().toLocaleDateString()
            const time = timeSet ? timeSet : new Date().toLocaleTimeString()
            this.chatTimeValue.splice(0, 1, date)
            this.chatTimeValue.splice(1, 1, time)
        },
        updateList() {
            const nowTime = Date.now()
            if (nowTime - this.chatTime >= 120000) {
                this.chatTime = nowTime
                this.updateTime()
                const timeObj = {
                    user: "time",
                    msg: this.timeValue,
                    none: false
                }
                this.listOfChat.push(timeObj)
            }
            const chatObj = {
                user: this.chatUser,
                msg: this.chatValue,
                none: false
            }
            this.isDelShow && chatObj.user === 'right' ? chatObj.none = true : ""
            this.listOfChat.push(chatObj)
        },
    },
})
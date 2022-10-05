var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "陈大伟",
    sex: "男",
    age: "19",
    phone: "15599493947",
    email: "2963246343@qq.com",
    address: "现居贵州贵阳清镇市",
    qq: "2963246343",
    log: "笒鬼鬼",
    excpect_work: "html转apk安卓软件制作",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是陈大伟，贵州电子商务职业技术学院在读生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫陈大伟，性别男，贵州电子商务职业技术学院在读。</p>" +
        "<p>我有基础的html语言，计算机基础知识掌握，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当。</p>" +
        "<p>欢迎你的观看!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["html", 80, "red"],
        ["css", 77, "blue"],
        ["游戏", 75, "#1abc9c"],
        ["散步", 67, "rgba(0,0,0)"],
        ["唱歌", 60, "yellow"],
        ["电影", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>掌握html基础。</li>" +
        "     <li>掌握css。</li>" +
        "     <li>了解计算机保护法。</li>" +
        "     <li>自学kali渗透测试。</li>" +
        "     <li>Linux基本命令。</li>" +
        "     <li>思科服务器有了解。</li>" +
        "     <li>电脑组装。</li>" +
        "     <li>重装系统。</li>" +
        "     <li>学习过快递行业客服知识。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro1.png", "http://box16541693019519.nb3.site.my-qcloud.com/", "个人简历", "这里记录了联系我的电话和短信基本信息<br>持续更新"],
        ["./images/pro2.png", "http://box16540818561742.nb3.site.my-qcloud.com/", "我姐的网页", "采用html和css组成<br>2022/9/10"],
        ["images/pro3.png", "http://www.cenguigui.cn/", "更新的新博客"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2019/5/28 — 2019/6/10", "<br>贵阳市九中招就办",
            "<p><strong>研究生审核</strong></p>" +
            "<p>按照，主任要求和安排积极专注的完成审核任务。</p>" +
            "<p>核实每个人资料，负对照，研究生报考要求。</p>"
        ],

        ["2021/6/18 — 2022/2/28", "<br>贵安万乘呼叫实训基地",
            "<p><strong>万乘呼叫实训基地</strong></p>" +
            "<p>百世快递在线物流客服。</p>" +
            "<p>处理客户快件问题，丢失，破损，延误，站点服务态度，加盟合作，媒体来访等。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2018-05-22", "思南县文家店中学", "初二上学期学期，二九年级第二，三好学生。"],
		["2019-06-08", "思南县文家店中学", "初三下学期学期，三好学生，1500米长跑第一，3000米长跑第一，1000米测试三分22秒。"],
        ["2020-04-28", "贵阳市经济贸易中等职业技术学校", "高一下学期，三好学生，二等奖学金。"],
        ["2021-09-24", "贵阳市经济贸易中等职业技术学校", "高二下学期，三好学生，1500米第三名。"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/cen-gui-gui/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/2963246343/laughing-carnival", "我的GitHub主页"],
        ["./svg/csdn.svg", "http://t.csdn.cn/5Kxxj", "我的CSDN"],
        ["./svg/boke.svg", "https://www.cnblogs.com/cenguigui/", "我的个人博客园"],
        ["./svg/zhihu.svg", "https://www.zhihu.com/people/awaygui-gui", "我的知乎主页"],
        ["./svg/douyin.svg", "https://v.douyin.com/6M45DYn/", "我的抖音主页"],
        ["./svg/kuaishou.svg", "https://v.kuaishou.com/teM0ae", "我的快手主页"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
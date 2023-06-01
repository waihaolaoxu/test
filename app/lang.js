/*
 * @Author: xushilong 
 * @Date: 2023-06-01 15:27:06 
 * @Description: 语言包
 */

// 中文
const CONTENT = {
    cn: {
        title: "新能源服务",
        description: "新能源服务",
        keywords: ['新能源服务'],
        cur_lang: "简体中文",
        nav_index: "首页",
        nav_about: "关于我们",
    },
    // 英语
    en: {
        title: "eco service",
        description: "eco service",
        keywords: ['eco service'],
        cur_lang: "English",
        nav_index: "Home",
        nav_about: "About Us",
    },
    // 德语
    de: {
        title: "Öko-Service",
        description: "Öko-Service",
        keywords: ['Öko-Service'],
        cur_lang: "German",
        nav_index: "Startseite",
        nav_about: "Über Uns",
    }
}

function getText(key) {
    return CONTENT[process.env.lang][key] || CONTENT['cn'][key]
}

export {
    getText
}
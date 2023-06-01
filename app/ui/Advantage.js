/*
 * @Author: xushilong 
 * @Date: 2023-06-01 16:13:31 
 * @Description: 团队优势 
 */


import styles from "@/app/globals.module.scss"

export default function Page() {
  // 优势
  const ADVANTAGE = {
    cn: {
      tit: "我们的优势",
      list: [{
        tit: "经验丰富",
        con: "团队成员拥有丰富的从业经验和专业知识。",
        color: "#b95ea3"
      }, {
        tit: "高素质",
        con: "技术团队拥有高素质的工程师和技术专家，能够提供专业的储能电池售后服务。",
        color: "#f46b42"
      }, {
        tit: "服务全面",
        con: "提供维修、保养、升级和回收等全面的售后服务，能够满足客户不同的需求。",
        color: "#0bb99c"
      }, {
        tit: "覆盖广泛",
        con: "服务覆盖整个德国，未来计划拓展至其他欧洲国家，能够为更多客户提供服务",
        color: "#01a2c5"
      }, {
        tit: "高效便捷",
        con: "客户服务团队响应迅速，能够及时解决客户的问题，为客户提供高效便捷的服务体验。",
        color: "#43b757"
      }]
    }
  }

  return (
    <>
      <h2 className="block-tit">{ADVANTAGE[process.env.lang].tit}</h2>
      <ul className={styles.advantage}>
        {
          ADVANTAGE[process.env.lang].list.map((item, index) =>
            <li key={index}>
              <div>
                <div style={{ color: item.color }} className={styles.youshiTit}>{item.tit}</div>
                <div className={styles.youshiCon}>{item.con}</div>
              </div>
            </li>
          )
        }
      </ul>
    </>
  )
}
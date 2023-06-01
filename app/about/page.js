
import { getText } from "@/app/lang"
import styles from "./about.module.scss"
import Image from 'next/image'
import Advantage  from '@/app/ui/Advantage'

export default function Page() {
    // 团队风采
    const TEAM = {
        cn: {
            tit: "团队风采"
        },
        en: {
            tit: "Team Style"
        },
        de: {
            tit: "Teamstil"
        },
    }
    return (
        <div className="content">
            <article>
                <section className={styles.content}>
                    <h1 className="tc f40 mt50">{getText("nav_about")}</h1>
                    <Image alt="taiyangneng" className="mt30" width={1000} height={400} style={{maxWidth: '100%', height: 'auto'}} src="/taiyangneng.jpeg" />
                    <p>团队成员来自德国各个城市的专业人士以及相关专业的德国在校留学生，专注于新能源储能电池售后服务，服务范围已经覆盖了整个德国。</p>
                    <p>团队成员具有广泛的技术知识和丰富的行业经验，能提供高质量的储能电池售后服务。</p>
                    <p>无论是针对家庭用户还是商业用户，都能提供全面的解决方案和专业的建议。</p>
                    <p>团队致力于为客户提供最佳的售后服务体验。始终以客户的需求为先，为客户提供个性化的解决方案。</p>
                    <p>秉承诚信、专业、质量、效率的服务理念，确保客户对我们的服务感到满意</p>
                    
                    <Advantage></Advantage>

                    <h2 className="block-tit">{TEAM[process.env.lang].tit}</h2>
                    <Image alt="team" width={1000} height={556} style={{maxWidth: '100%', height: 'auto'}} src="/team.jpg" />

                </section>
            </article>
        </div>
    )
}
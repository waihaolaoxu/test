'use client';

import { usePathname } from 'next/navigation';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/globals.module.scss"
import { getText } from "@/app/lang"

export function Navigation({ navLinks }) {
  const pathname = usePathname();
  const items = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="https://www.antgroup.com">简体中文</a>
      ),
      disabled: process.env.lang == 'cn'
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="https://www.aliyun.com">English</a>
      ),
      disabled: process.env.lang == 'en'
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">German</a>
      ),
      disabled: process.env.lang == 'de'
    },
  ];
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarWrapper}>
        <div className={styles.navBarLeft}>
          <Link
            title='eco-service'
            className={styles.logo}
            href="/"
          >
            <Image src="/logo.png" alt="logo" width={130} height={19} />
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.href);

            return (
              <Link
                className={isActive ? styles.navItemisActive : styles.navItem}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={styles.navBarRight}>
          <div className='current'>
            <Dropdown menu={{ items }}>
              <div className='flex align-items-center'>
                {getText('cur_lang')}
                <DownOutlined className='ml5' />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
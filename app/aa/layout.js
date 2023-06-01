export const metadata = {
  title: '掌赋装饰2',
  description: '网家科技2',
}
import { Suspense } from 'react';
export default function RootLayout({ children }) {
  return (
    <div>
      <div>这里是页面级 layout</div>
      <Suspense fallback={<div className='flex justify-center'>loading...</div>}>
        {children}
      </Suspense>
    </div>
  )
}

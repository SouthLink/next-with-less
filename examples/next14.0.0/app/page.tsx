import Image from 'next/image'
import lessStyles from './_index/index.module.less'
import HomeTwo from './_index'

export default function Home() {
  return (
    <div className={lessStyles['btn']}>
      less button

      <HomeTwo />
    </div>
  )
}

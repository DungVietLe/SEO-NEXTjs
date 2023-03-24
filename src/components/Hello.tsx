import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {}

const Hello = (props: Props) => {
  return (
    <div>
      <div>
        <Image
          src={
            'https://www.motortrend.com/uploads/sites/5/2016/06/Brabus-850-6.0-Biturbo-Cabrio-front-three-quarters.jpg'
          }
          width='600'
          height={400}
          alt='abc'
        />
      </div>
      <div>
        <Image
          src={
            'https://choixehop.com/Uploads/News/21122015/News/201221225213-mercedes-s65-cabriolet-2.jpg'
          }
          height={400}
          width='600'
          alt='abc'
        />
      </div>
      <div>
        <Image
          src={'https://autopro8.mediacdn.vn/2017/-1504582550761.jpg'}
          width='600'
          height={400}
          alt='abc'
        />
      </div>
    </div>
  )
}

export default Hello

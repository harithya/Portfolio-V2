import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'

export default function about() {
    return (
        <div className='flex justify-center  py-16'>
            <div className='flex  xl:w-8/12 w-full justify-center items-center flex-col'>
                <Image src={'/img/me.png'} className='rounded-full object-cover' height={235} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full'>
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native.
                        <br /><br />
                        Saya juga sedang menjalankan pendidikan Sarjana Informatika di STIMIK Tasikmalaya. Untuk pengalaman saat ini, saya hanya bekerja di CV Abdi Creative dari awal lulus sekolah sampai saat ini. Saya juga suka mengeksplorasi hal hal yang baru khusunya di bidang frontend developer karena saya memiliki ketertarikan di bidang App Design.
                        <br /><br />
                        Untuk di luar pengembangan saya suka mendengarkan musik khususnya musik, terkadang belajar bermain gitar sesekali, dan juga suka mencoba  hal hal baru di bidang teknologi seperti OS, Device Mobile dll sebagainya.
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

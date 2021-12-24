import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'

export default function about() {
    return (
        <div className='flex justify-center  py-16'>
            <div className='flex  xl:w-8/12 w-full justify-center items-center flex-col'>
                <img src={'/img/della.png'} className='rounded-full object-cover' height={240} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full'>
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas consequat quam ut condimentum. Aliquam vehicula consequat congue. Mauris nisi tortor, rutrum sed eros vel, ornare congue leo. Ut eget dui ut odio euismod lacinia. Maecenas tincidunt quis magna eget rutrum. Duis sit amet blandit libero. Ut efficitur pretium tincidunt.
                        <br /><br />
                        In convallis sapien a nisl suscipit tincidunt. Praesent iaculis condimentum aliquet. Maecenas dignissim, lorem ac maximus pulvinar, tortor sem mattis ex, eget imperdiet elit nisi ac metus. Aliquam rhoncus, nunc id volutpat gravida, nunc augue porta urna, sed suscipit dui nulla ut orci. Aliquam nec ante leo. Sed eleifend sapien quam, nec maximus mi posuere fermentum. Morbi non erat at erat porttitor pretium a fringilla ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tristique augue eu lectus maximus efficitur eget id leo. In est dui, pretium hendrerit ullamcorper vel, iaculis et odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet lacus et velit vehicula suscipit eu eu urna. Cras metus sapien, volutpat in blandit sed, cursus sit amet massa.
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

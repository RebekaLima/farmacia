import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-300 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmácia Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
	<a href="www.linkedin.com/in/rebeka-lima" target="_blank">
    	<LinkedinLogo size={48} weight='bold' />
    </a>
    <a href="https://www.instagram.com/rebeka_llima" target="_blank">
    	<InstagramLogo size={48} weight='bold' />
    </a>
    <a href="https://www.facebook.com/generationbrasil/" target="_blank">
    	<FacebookLogo size={48} weight='bold' />
	</a>
</div>
                </div>
            </div>
        </>
    )
}

export default Footer
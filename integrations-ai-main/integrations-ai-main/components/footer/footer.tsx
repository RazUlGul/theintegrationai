import Link from "next/link";
import Image from "next/image";
import './footer.css'

export default function FooterComponent() {

    const footerlinks = [
        {
            title: 'integrations',
            links: [
                {
                    title: 'about',
                    href: '/'
                },
                {
                    title: 'nova',
                    href: '/'
                },
            ]
        },
        {
            title: 'help',
            links: [
                {
                    title: 'faqs',
                    href: '/'
                },
                {
                    title: 'contact us',
                    href: '/'
                },
            ]
        },
        {
            title: 'access',
            links: [
                {
                    title: 'login',
                    href: '/'
                },
                {
                    title: 'help',
                    href: '/'
                },
            ]
        },
    ]
    
    return (
        <footer className="w-full py-4">
            <div className="max-w-7xl w-full px-8 mx-auto">
                {/* <div className="flex items-end justify-between w-full py-4">
                    <button className="transition-all duration-500 group">
                        <Image src="/INTEGRATIONS.png" className="group-hover:hidden duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                        <Image src="/INTEGRATIONS2.png" className="hidden group-hover:block duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                    </button>
                    <div className="flex gap-12">
                        {footerlinks.map((footercolumn, fcolumnkey) => <div className="flex flex-col gap-4"
                            key={`Footer-FooterColumn-${fcolumnkey}-${footercolumn.title}`}>
                            <h6 className="uppercase font-bold text-xl">{footercolumn.title}</h6>
                            {footercolumn.links.map((fcollink, fcollinkkey) => <Link href={fcollink.href}
                            className="text-black/65 hover:underline cursor-pointer capitalize hover:text-black duration-500 transition-all"
                            key={`Footer-FooterColumn-FColLink-${fcollinkkey}-${fcollink.title}`}>
                                {fcollink.title}
                            </Link>)}
                        </div>)}
                    </div>
                </div> */}
                <div className="border-t-[2px] border-black/25 py-4 flex items-center justify-between gap-4">
                    <p className="text-black/50">
                        Copyright C 2025. All rights reserved to Integration.ai
                    </p>
                    <button className="transition-all duration-500 group">
                        <Image src="/INTEGRATIONS.png" className="group-hover:hidden duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                        <Image src="/INTEGRATIONS2.png" className="hidden group-hover:block duration-500 transition-all" alt="Integration.ai Icon" width={40} height={30} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

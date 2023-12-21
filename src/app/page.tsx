import Image from 'next/image';
import avatar from '../images/avatar.jpg';
import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* section 1 */}
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-5">
                    <p className="text-primary font-bold text-xl">SOFTWARE ENGINEER</p>
                    <h1>Hello, my name is Lê Văn Anh Đức</h1>
                    <p>
                        &quot; I was born in 2002 and I am currently pursuing a major in Software Engineering at the
                        University of Technology in Ho Chi Minh City. My hometown is in Duong Thuy, Le Thuy, Quang Binh
                        province, Vietnam. Currently, I reside in Bien Hoa City, Dong Nai province, Vietnam. &quot;
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href={'./project'}>
                            <Button type="primary" style={{ background: '#65B741' }}>
                                Projects
                            </Button>
                        </Link>
                        <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                            <Button type="default" style={{ border: '1px solid #65B741', color: '#65B741' }}>
                                FaceBook
                            </Button>
                        </a>
                    </div>
                </div>

                {/* image */}
                <div className="flex justify-center ">
                    <Image src={avatar} alt="avatar" className="object-cover h-80 w-80 rounded-[100%]  shadow-2xl" />
                </div>
            </div>
        </main>
    );
}

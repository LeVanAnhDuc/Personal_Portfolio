import Link from 'next/link';
import React from 'react';
import { Button } from 'antd';
const Header = () => {
    return (
        <div className="flex py-3 justify-between items-center ">
            <Link href={'./'} className="text-lg font-semibold hover:!text-primary">
                Lê Văn Anh Đức
            </Link>
            <div className="flex items-start gap-4">
                <Link href={'./about'}>
                    <Button
                        type="link"
                        className="!border-0 text-lg font-semibold hover:!text-primary !shadow-transparent !text-black transition flex items-center p-5"
                    >
                        About
                    </Button>
                </Link>
                <Link href={'./contact'}>
                    <Button
                        type="link"
                        className="!border-0 text-lg font-semibold hover:!text-primary !shadow-transparent !text-black transition flex items-center p-5"
                    >
                        Contact
                    </Button>
                </Link>
                <Link href={'./project'}>
                    <Button className="bg-primary !border-0 text-lg font-semibold hover:!text-black hover:opacity-80 !shadow-transparent !text-white transition flex items-center p-5">
                        Project
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;

import React from 'react';
import { FacebookFilled, InstagramFilled, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer id="footer" className="flex flex-col justify-center items-center gap-8 bottom-0 w-full">
            <div className="flex justify-center items-center gap-6 text-2xl">
                <a href="https://www.instagram.com/hi.iam.lvad/" target="_blank">
                    <InstagramFilled />
                </a>
                <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                    <FacebookFilled />
                </a>
                <a href="https://github.com/LeVanAnhDuc" target="_blank">
                    <GithubOutlined />
                </a>
            </div>
            <div>Lê Văn Anh Đức</div>
        </footer>
    );
};

export default Footer;

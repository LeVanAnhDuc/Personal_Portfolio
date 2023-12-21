'use client';
import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

import { GithubOutlined, EllipsisOutlined, LinkOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

interface Iprops {
    linkImage: StaticImageData;
    linkGithub: string;
    linkProject?: string;
    title: string;
    description: string;
    roll: string;
    technical: string;
}

const tabListNoTitle = [
    {
        key: 'title',
        label: 'Mô tả',
    },
    {
        key: 'roll',
        label: 'Vai trò',
    },
    {
        key: 'technical',
        label: 'Công nghệ',
    },
];

const CardComponents = (props: Iprops) => {
    const { linkGithub, linkImage, linkProject, title, description, roll, technical } = props;

    const handleActionLinkOnline = () => {
        window.open(linkProject, '_blank');
    };
    const handleActionLinkGithub = () => {
        window.open(linkGithub, '_blank');
    };

    const [activeTabKey2, setActiveTabKey2] = React.useState<string>('title');
    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };
    const contentListNoTitle: Record<string, React.ReactNode> = {
        roll: <Meta description={roll} className="h-36 overflow-hidden text-ellipsis" />,
        technical: <Meta description={technical} className="h-36 overflow-hidden text-ellipsis" />,
        title: <Meta title={title} description={description} className="h-36 overflow-hidden text-ellipsis" />,
    };
    return (
        <Card
            hoverable
            title={
                <Image
                    alt="image not found"
                    src={linkImage}
                    className="object-cover h-44 "
                    onClick={handleActionLinkGithub}
                />
            }
            // cover={<Image alt="image not found" src={linkImage} className="object-cover h-44" />}
            actions={[
                <LinkOutlined key="LinkOutlined" onClick={handleActionLinkOnline} />,
                <GithubOutlined key="edit" onClick={handleActionLinkGithub} />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            className="hover:scale-105 transition"
            //
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            onTabChange={onTab2Change}
            tabProps={{
                size: 'small',
            }}
        >
            {contentListNoTitle[activeTabKey2]}
        </Card>
    );
};

export default CardComponents;

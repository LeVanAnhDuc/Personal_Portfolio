import CardComponents from '@/components/Card/Card';
import user_duck from '../../images/user_duck.png';
import admin_duck from '../../images/admin_duck.png';
import user_stellar from '../../images/user_stellar.png';
import admin_stellar from '../../images/admin_stellar.png';
const Project = () => {
    return (
        <main>
            {/* section 1 */}
            <h1 className="mb-5">Project</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <CardComponents
                    linkGithub="https://github.com/LeVanAnhDuc/fe-user-TLCN"
                    linkImage={user_duck}
                    linkProject="https://fe-user-tlcn-duckshop.vercel.app/"
                    roll="Front-end dev ( group of 2)"
                    technical="React, TypeScript, MUI, Tailwindcss, React-hook-form, Redux Toolkit,..."
                    title="Web thời trang Duck"
                    description="Giao diện của user và guess. Web mục đích là bán đồ. Chức năng đăng nhập, đăng kí, đăng xuất, quên mật khẩu, quản lí tài khoản, địa chỉ, đơn hàng, lọc, tìm kiếm, thanh toán, giỏ hàng,..."
                />
                <CardComponents
                    linkGithub="https://github.com/LeVanAnhDuc/fe-admin-TLCN"
                    linkImage={admin_duck}
                    linkProject="https://fe-admin-tlcn.vercel.app/"
                    roll="Front-end dev ( group of 2)"
                    technical="React, TypeScript, MUI, Tailwindcss, React-hook-form,..."
                    title="Web admin thời trang Duck"
                    description="Giao diện của admin. Web mục đích là quản lí khách hàng, đơn hàng, sản phẩm, loại hàng, doanh thu, thống kê."
                />
                <CardComponents
                    linkGithub="https://github.com/LeVanAnhDuc/fe-stellar"
                    linkImage={user_stellar}
                    linkProject="https://fe-stellar.vercel.app/"
                    roll="Front-end dev ( group of 3)"
                    technical="React, React Bootstrap, Redux/toolkit, Scss ..."
                    title="Web khách sạn Stellar"
                    description="Giao diện của user và guess. Web mục đích là đặt phòng. Chức năng đăng nhập, đăng kí, đăng xuất, quên mật khẩu, quản lí tài khoản, đơn hàng, lọc, tìm kiếm, thanh toán..."
                />
                <CardComponents
                    linkGithub="https://github.com/LeVanAnhDuc/fe-stellar-admin"
                    linkImage={admin_stellar}
                    linkProject="https://fe-stellar-admin.vercel.app/"
                    roll="Front-end dev ( group of 3)"
                    technical="React, React Bootstrap, Redux/toolkit, Scss ..."
                    title="Web admin khách sạn Stellar"
                    description="Giao diện của admin. Web mục đích là quản lí khách hàng, đơn hàng, phòng, loại phòng, doanh thu, thống kê."
                />
                {/*<CardComponents />
                <CardComponents />
                <CardComponents /> */}
            </div>
        </main>
    );
};

export default Project;

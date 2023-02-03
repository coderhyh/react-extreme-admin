// import React, { Suspense } from "react";
// import { Spin } from "antd";
//
// /**
//  * @description 路由懒加载
//  * @param {Element} Comp 需要访问的组件
//  * @returns element
//  */
//
//
// const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
//     return (
//         <Suspense
//             fallback={
//                 <Spin
//                     size="large"
//                     style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         height: "100%"
//                     }}
//                 />
//             }
//         >
//             <Comp />
//         </Suspense>
//     );
// };
//
// export default lazyLoad;

import React, {lazy, Suspense} from "react";
import LoadingProgress from '@/components/loadingProgress'

export function lazyLoad(factory: () => Promise<{
    default: React.ComponentType<any>
}>) {
    const LazyComponent = lazy(factory);
    return (
        <Suspense fallback={<LoadingProgress/>}>
            <LazyComponent/>
        </Suspense>
    )

}

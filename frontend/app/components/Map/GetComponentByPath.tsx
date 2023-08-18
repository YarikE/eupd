import React from 'react';
import SetByUserMarker from "@/app/components/Map/setByUserMarker";
// import SetByUserMarkerSignal from "@/app/components/Map/setByUserMarkerSignal";

// Определите тип для pathsComponents
const pathsComponents: Record<string, React.ComponentType<any>> = {
    '/geo-settings': SetByUserMarker,
    // '/home/newSignal': SetByUserMarkerSignal
}

const GetComponentByPath = ({ path, props }: { path: string, props: any }) => {
    const ComponentToRender = pathsComponents[path] || null;
    return <>{ComponentToRender ? <ComponentToRender {...props} /> : <></>}</>
}

export default GetComponentByPath;

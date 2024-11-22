"use client";
import { useEffect, useState } from "react";

export const NaverMap: React.FC = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      const destination = new window.naver.maps.LatLng(37.54574, 127.042909);
      const mapOptions = {
        center: destination,
        zoom: 16,
      };
      const mapInstance = new window.naver.maps.Map("map", mapOptions);
      setMap(mapInstance);

      new window.naver.maps.Marker({
        position: destination,
        map: mapInstance,
        title: "더서울라이티움",
        icon: {
          content: [
            '<div class="w-fit h-fit pl-3 pr-4 py-2 flex flex-row gap-2 justify-center items-center bg-red-500 text-white rounded-full shadow-xl active:opacity-50 active:scale-90 transition-all duration-200 ease-in-out md:hover:opacity-50">',
            '<svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 16 20" fill="currentColor">',
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2H5C4.44772 2 4 2.44772 4 3V3.6C4 3.82091 3.82091 4 3.6 4H3C2.44772 4 2 4.44772 2 5L2 11C2 11.5523 2.44772 12 3 12H3.6C3.82091 12 4 12.1791 4 12.4V14C4 14.5523 4.44772 15 5 15H5.6C5.82091 15 6 15.1791 6 15.4V17C6 17.5523 6.44772 18 7 18H9C9.55229 18 10 17.5523 10 17V15.4C10 15.1791 10.1791 15 10.4 15H11C11.5523 15 12 14.5523 12 14V12.4C12 12.1791 12.1791 12 12.4 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H12.4C12.1791 4 12 3.82091 12 3.6V3C12 2.44772 11.5523 2 11 2H8ZM14 13C14 12.4477 14.4477 12 15 12H15.6C15.8209 12 16 11.8209 16 11.6V4.4C16 4.17909 15.8209 4 15.6 4H15C14.4477 4 14 3.55228 14 3V2.4C14 2.17909 13.8209 2 13.6 2L13 2L12.9993 2C12.4473 1.99962 12 1.55205 12 1V0.4C12 0.179086 11.8209 0 11.6 0H8H4.4C4.17909 0 4 0.179086 4 0.4L4 1C4 1.55205 3.55266 1.99962 3.0007 2L3 2L2.4 2C2.17909 2 2 2.17909 2 2.4L2 3C2 3.55228 1.55228 4 1 4H0.4C0.179086 4 0 4.17909 0 4.4V11.6C0 11.8209 0.179086 12 0.4 12H1C1.55228 12 2 12.4477 2 13V14.6C2 14.8209 2.17909 15 2.4 15H3C3.55228 15 4 15.4477 4 16V17.6C4 17.8209 4.17909 18 4.4 18H5C5.55228 18 6 18.4477 6 19V19.6C6 19.8209 6.17909 20 6.4 20H9.6C9.82091 20 10 19.8209 10 19.6V19C10 18.4477 10.4477 18 11 18H11.6C11.8209 18 12 17.8209 12 17.6V16C12 15.4477 12.4477 15 13 15H13.6C13.8209 15 14 14.8209 14 14.6V13ZM7.2001 5.44019C6.31644 5.44019 5.6001 6.15653 5.6001 7.04018V8.64019C5.6001 9.52384 6.31644 10.2402 7.2001 10.2402H8.8001C9.68375 10.2402 10.4001 9.52384 10.4001 8.64019V7.04019C10.4001 6.15653 9.68375 5.44019 8.8001 5.44019H7.2001Z"/>',
            "</svg>",
            '<div class="font-medium leading-tight">더서울라이티움</div>',
            "</div>",
          ].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      }).addListener("click", () => {
        // 마커 클릭 시 새로운 창 열기
        window.open("https://naver.me/5eGTPh03");
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="map" className="w-full h-full"></div>
      <div className="absolute bottom-0 left-0 z-10 px-4 md:px-10 py-4 flex flex-row gap-2">
        {["네이버 길찾기", "카카오맵 길찾기"].map((text, index) => (
          <button
            key={index}
            onClick={() => {
              if (map) {
                const destination = new window.naver.maps.LatLng(
                  37.54574,
                  127.042909
                );
                if (text === "네이버 길찾기") {
                  window.open(
                    `https://map.naver.com/p/directions/-/14142344.5805578,4515430.2868942,%EB%8D%94%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8B%B0%EC%9B%80,448283373,PLACE_POI/-/transit?c=15.00,0,0,0,dh`
                  );
                } else {
                  window.open(
                    `https://m.map.kakao.com/actions/routeView?ex=509498&ey=1123911&endLoc=%EB%8D%94%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8B%B0%EC%9B%80&ids=%2CP66485696`
                  );
                }
              }
            }}
            className="bg-black w-fit h-fit text-white px-3 py-2 rounded-full shadow-md active:opacity-50 active:scale-90 transition-all duration-200 ease-in-out md:hover:bg-white md:hover:text-black"
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
};

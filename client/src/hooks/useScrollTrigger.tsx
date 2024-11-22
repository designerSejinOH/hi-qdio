"use client";

import { useEffect, useRef, useState } from "react";

// 함수를 통해 트리거 상태를 반환
export function useScrollTrigger(targetId: string) {
  const [isTriggered, setIsTriggered] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 타겟 요소 참조 설정
    targetRef.current = document.getElementById(targetId);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 화면에 들어왔을 때 상태 업데이트
        if (entry.isIntersecting) {
          setIsTriggered(true);
        } else {
          setIsTriggered(false);
        }
      },
      { threshold: 0.1 } // 10% 이상 보일 때 트리거
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetId]);

  return isTriggered; // 트리거된 여부 반환
}

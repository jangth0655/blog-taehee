import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ObservedImage from "./ObservedImage";
import ObservedSpan from "./ObservedSpan";

const RATIO = 0.7;

const Observer: React.FC = () => {
  const [imageOne, setImageOne] = useState(false);
  const [imageOneSpan, setImageOneSpan] = useState(false);
  const [imageTwo, setImageTwo] = useState(false);
  const [imageTwoSpan, setImageTwoSpan] = useState(false);

  const imageOneRef = useRef<HTMLDivElement>(null);
  const imageOneSpanRef = useRef<HTMLDivElement>(null);
  const imageTwoRef = useRef<HTMLDivElement>(null);
  const imageTwoSpanRef = useRef<HTMLDivElement>(null);

  const observerCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.target.classList[0] === "ImageOne") {
        entry.intersectionRatio > RATIO
          ? setImageOne(true)
          : setImageOne(false);
      }
      if (entry.target.classList[0] === "imageOneSpan") {
        entry.intersectionRatio > RATIO
          ? setImageOneSpan(true)
          : setImageOneSpan(false);
      }
      if (entry.target.classList[0] === "imageTwo") {
        entry.intersectionRatio > RATIO
          ? setImageTwo(true)
          : setImageTwo(false);
      }
      if (entry.target.classList[0] === "imageTwoSpan") {
        entry.intersectionRatio > RATIO
          ? setImageTwoSpan(true)
          : setImageTwoSpan(false);
      }
    });
  };

  useEffect(() => {
    const observedItems = [
      imageOneRef.current,
      imageOneSpanRef.current,
      imageTwoRef.current,
      imageTwoSpanRef.current,
    ];

    const options: IntersectionObserverInit | undefined = {
      root: null,
      rootMargin: "0px",
      threshold: RATIO,
    };

    const observer = new IntersectionObserver(observerCallback, options);
    if (observedItems)
      observedItems.forEach((item) => item && observer.observe(item));

    return () => {
      if (observedItems)
        observedItems.forEach((item) => item && observer.unobserve(item));
    };
  }, []);

  return (
    <div>
      <div className="px-3 md:px-0">
        <div
          ref={imageOneRef}
          className="ImageOne flex justify-start w-full h-64"
        >
          <AnimatePresence>
            {imageOne ? <ObservedImage imageOrder="first" /> : null}
          </AnimatePresence>
        </div>

        <div
          ref={imageOneSpanRef}
          className="imageOneSpan w-full flex justify-end my-6 h-72 sm:h-64"
        >
          <AnimatePresence>
            {imageOneSpan ? (
              <ObservedSpan
                text="React를 기반으로 프로젝트를 만들고 서버와 데이터를 어떻게 효율적으로
              주고받을지, UI를 어떻게 잘 구성할지 고민하면서 개발 경험을 즐기고
              있습니다. 이를 위해 서버구현과 배포까지 경험을 하고, 컴포넌트단위로
              개발하는 습관화하고 연습하고 있습니다"
              />
            ) : null}
          </AnimatePresence>
        </div>

        <div
          ref={imageTwoRef}
          className="imageTwo flex justify-start w-full h-64"
        >
          <AnimatePresence>
            {imageTwo ? <ObservedImage imageOrder="second" /> : null}
          </AnimatePresence>
        </div>

        <div
          ref={imageTwoSpanRef}
          className="imageTwoSpan w-full flex justify-end my-6 h-72 sm:h-64"
        >
          <AnimatePresence>
            {imageTwoSpan ? (
              <ObservedSpan
                text="자기개발 하는것을 좋아합니다. 이를 위해 1일 1커밋을 하면서
             프로젝트 개발을 하고있습니다. 또한 배운 내용을 저의 홈페이지에
             정리하면서 복습하고 나만의 것으로 만들기위해 노력하고
             있습니다."
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Observer;

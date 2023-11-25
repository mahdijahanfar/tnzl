import React from 'react';

function Slider({ children, currentPage, setCurrentPage, callPrev, callNext, slideNums, everySlide, touch, contents }) {
    // این کامپوننتو بد نوشتم و نیاز به اصلاح شدن و بهتر شدن داره
    const [touchStart, setTouchStart] = React.useState();
    React.useEffect(() => {
        onTouch(touch.clientX, touch.eventType)
    }, [touch])
    React.useEffect(() => {
        handleNext()
    }, [callNext])
    React.useEffect(() => {
        handlePrev()
    }, [callPrev])
    React.useEffect(() => {
        const timer = setTimeout(() => handleNext(), 10000)
        return () => clearTimeout(timer)
    }, [currentPage])

    const onTouch = (clientX, eventType) => {
        switch (eventType) {
            case "start":
                setTouchStart(clientX)
                break;
            case "end":
                handleShift(Math.ceil((Math.abs(clientX - touchStart)) / (everySlide.current.offsetWidth)) <= slideNums ? Math.ceil((Math.abs(clientX - touchStart)) / (everySlide.current.offsetWidth)) : 0, clientX - touchStart > 0 ? false : true);
        }

    }
    const handleNext = () => {
        currentPage >= (contents.length - slideNums) ? setCurrentPage(0) : setCurrentPage(currentPage + 1);
    };
    const handlePrev = () => {
        currentPage <= 0 ? setCurrentPage(contents.length - slideNums) : setCurrentPage(currentPage - 1);
    };
    const handleShift = (factor = 1, transFormDirectionToNext = true) => {
        if (transFormDirectionToNext) {
            if (currentPage + factor > contents.length - slideNums) {
                if (factor === 1) {
                    if (currentPage >= contents.length - slideNums) {
                        setCurrentPage(0)
                    } else {
                        setCurrentPage(currentPage + 1)
                    }
                } else {
                    if (currentPage >= contents.length - slideNums) {
                        setCurrentPage(0)
                    } else {
                        setCurrentPage(contents.length - slideNums)
                    }
                }
            } else {
                if (currentPage >= contents.length - slideNums) {
                    setCurrentPage(0)
                } else {
                    setCurrentPage(currentPage + factor)
                }
            }
        } else {
            if (currentPage - factor < 0) {
                if (factor === 1) {
                    if (currentPage <= 0) {
                        setCurrentPage(contents.length - slideNums)
                    } else {
                        setCurrentPage(currentPage - 1)
                    }
                } else {
                    if (currentPage <= 0) {
                        setCurrentPage(contents.length - slideNums)
                    } else {
                        setCurrentPage(0)
                    }
                }
            } else {
                if (currentPage <= 0) {
                    setCurrentPage(contents.length - slideNums)
                } else {
                    setCurrentPage(currentPage - factor)
                }
            }
        }
    };
    return (
        children
    );
}
export default Slider;
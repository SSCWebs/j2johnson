import React, { useReducer, useRef, useEffect } from 'react';
import photos from './photos';

function useTilt(active) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) { return; }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) { return; }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

function Slide({ photo, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                '--offset': offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div className="slideContent" style={{ backgroundImage: `url('${photo.src}')` }}></div>
        </div>
    )
}

function Gallery() {
    const initialState = { photoIndex: 0 }

    const photosReducer = (state, event) => {
        if (event.type === 'NEXT') {
            return {
                ...state,
                photoIndex: (state.photoIndex + 1) % photos.length
            }
        }
        if (event.type === 'PREV') {
            return {
                ...state,
                photoIndex: state.photoIndex === 0
                    ? photos.length - 1
                    : state.photoIndex - 1
            }
        }
    }

    const [state, dispatch] = useReducer(photosReducer, initialState);

    return (
        <div className="background">
            <h1 className="center heading">Gallery</h1>
            <div className="slides">
                <button onClick={() => dispatch({ type: 'PREV' })}>{"<"}</button>
                {[...photos, ...photos, ...photos].map((photo, i) => {
                    let offset = photos.length + (state.photoIndex - i);
                    return <Slide photo={photo} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: 'NEXT' })}>{">"}</button>
            </div>
        </div>
    )
}

export default Gallery;
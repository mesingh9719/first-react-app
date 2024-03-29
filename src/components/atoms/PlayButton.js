import { useState } from 'react';
import '../css/PlayButton.css';
function PlayButton({ msg, children, onPlay, onPause }) {
    let [playing, setPlaying] = useState(false);
    function handleClick(e) {
        e.stopPropagation(); // stop app event click execution
        if (playing) onPause()
        else onPlay()
        if (!playing) {
            console.log(msg);
        } else {
            console.log("song stopped");
        }
        setPlaying(!playing)

    }
    return (<>
        <button onClick={handleClick} className='btn' title={msg ?? 'no=title'}>
            {playing ? 'Playing' : 'Paused'}
        </button>
    </>)
}

export default PlayButton;
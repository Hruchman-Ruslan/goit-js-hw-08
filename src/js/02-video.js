import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const handlePlay = e => {
  console.log(e.seconds);

  const timeUpdate = e.seconds;
  localStorage.setItem(STORAGE_KEY, timeUpdate);
};

const handleSavePlayTime = () => {
  const currentSaveTime = localStorage.getItem(STORAGE_KEY);

  if (currentSaveTime) {
    player.setCurrentTime(currentSaveTime);
  }
};

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(handlePlay, 1000));
handleSavePlayTime();

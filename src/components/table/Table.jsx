import React, { useMemo } from 'react';
import chillmix from '../../images/chillMix.png';
import time from '../../images/time.svg';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import playingStatus from '../../images/playingStatus.svg';
import { SET_MUSIC_DATA } from '../../redux/actions/actions';
import GreenPlayBtn from '../../images/playGreen.svg'

const Table = ({ tracks }) => {
  const dispatch = useDispatch();
  const currentlyPlayingTrack = useSelector(state => state.trackData); 

  const formattedTracks = useMemo(() => {
    return tracks?.map((item, index) => {
      const durationMs = item.track.duration_ms;
      const minutes = Math.floor(durationMs / 60000);
      const seconds = Math.floor((durationMs % 60000) / 1000);
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const time = `${minutes}:${formattedSeconds}`;

      return {
        ...item,
        track: {
          ...item.track,
          formattedDuration: time,
          defaultId: index + 1,
        },
      };
    });
  }, [tracks]);

  const handlePlayTrack = (track) => {
    dispatch({ type: SET_MUSIC_DATA, payload: track });
  };

  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>
              <img src={time} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {formattedTracks?.map((item) => (
            <tr
              onClick={() => handlePlayTrack(item.track)}
              key={item.track.defaultId}
            >
              <td>
                {currentlyPlayingTrack?.id === item.track.id ? (
                  <img
                    src={playingStatus}
                    alt="Playing"
                    className="playing-status-icon"
                  />
                ) : (
                  item.track.defaultId
                )}
              </td>
              <td className="flex gap-3">
                <img
                  className="w-[40px] h-[40px] rounded-xl"
                  src={item?.track?.album?.images[0]?.url || chillmix}
                  alt=""
                />
                <span className="flex flex-col">
                  {item.track.name}{' '}
                  <span className="text-[#b3b3b374]">
                    {item?.track?.artists[0]?.name}
                  </span>
                </span>
              </td>
              <td>{item.track.album.name}</td>
              <td>{item.track.formattedDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

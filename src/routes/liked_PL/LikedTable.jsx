import React, { useMemo } from 'react';
import chillmix from '../../images/chillMix.png';
import time from '../../images/time.svg';
import '../../components/table/table.scss';
import { useDispatch } from 'react-redux';
import { SET_MUSIC_DATA } from '../../redux/actions/actions';

const LikedTable = ({ tracks }) => {
  const dispatch = useDispatch();

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
            <tr onClick={() => handlePlayTrack(item.track)} key={item.track.defaultId}>
              <td>{item.track.defaultId}</td>
              <td className="flex gap-3">
                <img
                  className="w-[40px] h-[40px] rounded-xl"
                  src={item?.album?.images[0]?.url || chillmix}
                  alt=""
                />
                <span className="flex flex-col">
                  {item.track.name}{' '}
                  <span className="text-[#b3b3b374]">
                    {item?.artists[0]?.name}
                  </span>
                </span>
              </td>
              <td>{item.album.name}</td>
              <td>{item.formattedDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LikedTable;

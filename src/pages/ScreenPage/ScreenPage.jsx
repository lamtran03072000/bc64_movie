import ListGhe from './ListGhe/ListGhe';
import { useParams } from 'react-router-dom';

const ScreenPage = () => {
  const { maLichChieu } = useParams();

  return (
    <div className="flex">
      <ListGhe maLichChieu={maLichChieu} />
    </div>
  );
};

export default ScreenPage;

import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { movieSer } from '../../service/movieSer';
import { NavLink } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'bc 44',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const DetailPageSchedule = ({ idMovie }) => {
  const [dataHeThongRap, setDataHeThongRap] = useState([]);
  const fetchDataSchedule = async () => {
    try {
      let data = await movieSer.getScheduleMovie(idMovie);
      console.log('data schedule: ', data);
      let dataSchedule = data.data.content.heThongRapChieu;
      setDataHeThongRap(dataSchedule);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const renderLichChieuPhim = (dataLichChieuPhim) => {
    return dataLichChieuPhim.map((dataLcp, i) => {
      return (
        <NavLink
          to={`/screen/${dataLcp.maLichChieu}`}
          key={i}
          className="border p-2 rounded"
        >
          {dataLcp.ngayChieuGioChieu}
        </NavLink>
      );
    });
  };

  const renderCumRapChieu = (dataCumRapChieu) => {
    console.log('dataCumRapChieu: ', dataCumRapChieu);
    return dataCumRapChieu?.map((dataCumRap, i) => {
      return (
        <div key={i} className="p-3 border">
          <p className="text-xl">{dataCumRap.tenCumRap}</p>
          <div>{renderLichChieuPhim(dataCumRap.lichChieuPhim)}</div>
        </div>
      );
    });
  };

  const renderHeThongRap = () => {
    return dataHeThongRap.map((dataHtr, i) => {
      return {
        key: i,
        label: dataHtr.tenHeThongRap,
        children: renderCumRapChieu(dataHtr.cumRapChieu),
      };
    });
  };
  useEffect(() => {
    fetchDataSchedule();
  }, []);
  return (
    <div className="container mx-auto py-8">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DetailPageSchedule;

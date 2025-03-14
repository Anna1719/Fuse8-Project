import { Outlet } from 'react-router-dom';
import style from './main-layout.module.scss';
import { Header } from '@/components/header';

export const MainLayout = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

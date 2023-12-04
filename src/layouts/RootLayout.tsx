import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <div>Header</div>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  );
}

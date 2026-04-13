const Layout = ({ children }: TChildren) => {
  return (
    <div className='flex justify-center items-center w-full flex-col'>
      {children}
    </div>
  );
};

export default Layout;

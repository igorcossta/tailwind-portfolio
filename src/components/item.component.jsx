import Image from '../assets/mock.jpg';

const Item = () => {
  return (
    <div class='m-1 my-3 w-full rounded-lg shadow-xl transition-all hover:scale-110 hover:cursor-pointer dark:shadow-slate-800 md:my-10 md:w-5/12 lg:w-1/5'>
      <img src={Image} className='rounded-lg' />
    </div>
  );
};

export default Item;

import React from 'react';

const navItems = [
  { _id: 1, item: 'Home', url: '/' },
  { _id: 2, item: 'Donation', url: '/donation' },
  { _id: 3, item: 'Events', url: '/events' },
  { _id: 4, item: 'Blog', url: '/blog' },
];

const Nav = () => {
  return (
    <nav>
      <ul className='flex'>
        {navItems.map((el) => (
          <li className='mr-10 text-dark2 text-base font-medium' key={el._id}>
            {el.item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

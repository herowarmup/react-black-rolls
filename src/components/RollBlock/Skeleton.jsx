import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={387}
    viewBox='0 0 280 387'
    backgroundColor='#f2f2f2'
    foregroundColor='#ecebeb'
    {...props}
    className='roll-block'
  >
    <rect x='0' y='227' rx='10' ry='10' width='280' height='30' />
    <rect x='0' y='277' rx='10' ry='10' width='280' height='46' />
    <rect x='0' y='340' rx='10' ry='10' width='89' height='47' />
    <rect x='125' y='340' rx='10' ry='10' width='155' height='47' />
    <rect x='24' y='0' rx='10' ry='10' width='233' height='216' />
  </ContentLoader>
);

export default Skeleton;

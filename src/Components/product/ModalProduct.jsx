import { useState } from 'react';

import { Stars } from '../Stars';
import { Button } from '../Button';
import { HearthLineIcon, ExitArrowIcon } from '../../Resources/Icons';
import { AddWithAmount } from '../AddWithAmount';

const getImagesProduct = require.context('../../Resources/Images/ProductImages', true, /\.(jpg|png)$/);

const Modalproduct = ({ close, title, price, description, img, imgHover }) => {
  const [ changeImg, setChangeImg ] = useState(false);

  if (close) {

    const HoverChangeImg = () => {
      if (imgHover) {
        setChangeImg(!changeImg);
      };
    };

    return (
      <>
        <div id='modalProduct'>
          <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start overflow-auto py-14 z-50'>
            <div className='modal-content-product relative bg-white max-w-5xl w-full p-6 rounded-3xl shadow-modal'>
              <div className='bnt-close flex justify-end'>
                <Button icon={<ExitArrowIcon />} onClick={close} />
              </div>
              <div className='content p-7'>

                <div className='content-title mb-8'>
                  <h1 className='text-center text-4xl font-bold'>{title}</h1>
                </div>
                <div className='content-image flex justify-center'>

                  {!changeImg ? (
                    <img src={getImagesProduct(`./${img}`)} alt={title} className='h-96 w-96 rounded-3xl shadow-lg cursor-pointer' onMouseEnter={HoverChangeImg} />
                  ) : (
                    <img src={getImagesProduct(`./${imgHover}`)} alt={title} className='h-96 w-96 rounded-3xl shadow-lg cursor-pointer' onMouseLeave={HoverChangeImg} />
                  )}

                </div>
                <div className='rating-stars mt-6'>
                  <Stars />
                </div>
                <div className='content-description my-6 whitespace-pre-wrap text-lg text-justify'>
                  <p>{description}</p>
                </div>
                <div className='content-price text-xl font-semibold my-4'>
                  <span>{price}</span>
                </div>
                <div className='btns-group flex justify-between'>
                  < AddWithAmount />
                  <div className='btn-outstanding'>
                    <Button icon={<HearthLineIcon />} classBtn='text-lg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export { Modalproduct };

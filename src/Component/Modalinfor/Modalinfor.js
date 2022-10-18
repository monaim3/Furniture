import React from 'react';

const Modalinfor = ({ pd }) => {
    const { id, category, name, price, img } = pd
    return (
        <>
            {/* Modal Info  start*/}

            <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle" data-aos="zoom-in" data-aos-duration="6000">
                <div className="modal-box">
                    <div className="modal-wrapper flex gap-5">
                        <div className="modal-img w-full">
                            <img className='h-full ' src={img} alt="" />
                        </div>
                        <div className="modal-text">
                            <p>SKU: HRT <br></br>

                                Availability: 5 in Stock</p>
                            <h2 className='text-2xl mt-4 font-semibold'>{name}</h2>
                            <p className='text-xl '>Price: ${price}</p>
                            <p>Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor={`my-modal-${id}`} className="btn">Close</label>
                    </div>
                </div>
            </div>
            {/* modal info end */}
        </>
    );
};

export default Modalinfor;